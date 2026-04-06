/* ═══════════════════════════════════════════════════
   card.js — Flashcards integrado à Área Pessoal
   Sistema: Spaced Repetition via Firebase
   Sessão:  Salva no localStorage via flashcardSessao
   Deck:    10 cards por sessão
═══════════════════════════════════════════════════ */
import { CARDS_DATA }                              from './cards_data.js';
import { carregarPerfisSRS, salvarPerfilSRS } from '../firebase.js';

// ── Constantes ─────────────────────────────────────
const DISC_TAG_CLASS = { design:'tag-design', banco:'tag-banco', redes:'tag-redes', poo:'tag-poo' };
const DECK_SIZE      = 10;

const ACERTOS_PARA_DOMINAR = 5;
const MIN_TENTATIVAS_PENALIDADE = 4;

// ═════════════════════════════════════════════════
//  SPACED REPETITION — Firebase
// ═════════════════════════════════════════════════

let _srCache = {};

function _srPerfil(cardId) {
    return _srCache[cardId] || {
        intervalo:           1,
        proximaVez:          0,
        acertos:             0,
        erros:               0,
        diffMarcada:         null,
        tentativas:          0,
        acertosConsecutivos: 0,
        dominado:            false,
    };
}

async function _srAtualizar(cardId, acertou, diffMarcada) {
    const p = { ..._srPerfil(cardId) };

    p.tentativas++;

    if (acertou) {
        const multBase = { easy: 2.5, medium: 2.0, hard: 1.5 }[diffMarcada] ?? 2.0;

        let fatorConfianca = 1.0;
        const tentativasAnteriores = p.tentativas - 1;

        if (tentativasAnteriores >= MIN_TENTATIVAS_PENALIDADE) {
            const taxaAcerto = tentativasAnteriores > 0
                ? p.acertos / tentativasAnteriores
                : 1.0;

            if (taxaAcerto < 0.40) {
                fatorConfianca = 0.75;
            } else if (taxaAcerto < 0.60) {
                fatorConfianca = 0.85;
            }
        }

        const mult  = multBase * fatorConfianca;
        p.intervalo = Math.min(Math.round(p.intervalo * mult), 60);

        p.acertos            += 1;
        p.acertosConsecutivos += 1;

        if (p.acertosConsecutivos >= ACERTOS_PARA_DOMINAR) {
            p.dominado = true;
        }
    } else {
        p.intervalo           = 1;
        p.erros              += 1;
        p.acertosConsecutivos = 0;
        p.dominado            = false;
    }

    p.proximaVez  = Date.now() + p.intervalo * 24 * 60 * 60 * 1000;
    p.diffMarcada = diffMarcada || p.diffMarcada;

    _srCache[cardId] = p;

    try {
        await salvarPerfilSRS(_estado.nomeUsuario, cardId, p);
    } catch (err) {
        console.error('[card.js] Erro ao salvar perfil SRS no Firebase:', err);
    }
}

function _srMontarDeck(discId) {
    const todos = CARDS_DATA[discId] || [];
    const agora = Date.now();

    const vencidos  = [];
    const novos     = [];
    const cedo      = [];
    const dominados = [];

    todos.forEach(card => {
        const p     = _srPerfil(card.id);
        const visto = p.tentativas > 0;

        if (p.dominado) {
            if (p.proximaVez <= agora) dominados.push({ card, p });
        } else if (!visto) {
            novos.push({ card, p });
        } else if (p.proximaVez <= agora) {
            vencidos.push({ card, p });
        } else {
            cedo.push({ card, p });
        }
    });

    vencidos.sort((a, b) => {
        if (b.p.erros !== a.p.erros)           return b.p.erros - a.p.erros;
        if (b.p.tentativas !== a.p.tentativas) return b.p.tentativas - a.p.tentativas;
        return a.p.proximaVez - b.p.proximaVez;
    });

    cedo.sort((a, b) => a.p.proximaVez - b.p.proximaVez);
    dominados.sort((a, b) => a.p.proximaVez - b.p.proximaVez);

    const selecionados = [];
    const add = (lista) => {
        for (const item of lista) {
            if (selecionados.length >= DECK_SIZE) break;
            selecionados.push(item.card);
        }
    };

    add(vencidos);
    add(novos);
    add(cedo);
    add(dominados);

    return _shuffle(selecionados);
}

function _srEstatisticas(discId) {
    const todos = CARDS_DATA[discId] || [];
    const agora = Date.now();
    let dominados = 0, vencidos = 0, novos = 0;

    todos.forEach(card => {
        const p     = _srPerfil(card.id);
        const visto = p.tentativas > 0;

        if (!visto)                     novos++;
        else if (p.dominado)            dominados++;
        else if (p.proximaVez > agora)  dominados++;
        else                            vencidos++;
    });

    return { total: todos.length, dominados, vencidos, novos };
}

// ── Estado da sessão ───────────────────────────────
let _estado = {
    discId:      null,
    nomeUsuario: null,
    cards:       [],
    current:     0,
    flipped:     false,
    stats:       { correct: 0, wrong: 0 },
    difficulty:  {},
    resultado:   {},
    panelEl:     null,
    marcando:    false,
};

function _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function _salvarSessao() {
    window.flashcardSessao?.salvar(_estado);
}

function _limparSessao() {
    window.flashcardSessao?.limpar();
}

// ═════════════════════════════════════════════════
//  API PÚBLICA
// ═════════════════════════════════════════════════

export async function exibirCards(discId, panelEl, nomeUsuario) {
    removerCards(panelEl);

    if (!CARDS_DATA[discId]?.length) {
        const vazio = document.createElement('div');
        vazio.className = 'panel-cards';
        vazio.innerHTML = `<div class="cards-empty"><i class="fas fa-layer-group"></i><p>Nenhum card disponível para esta disciplina ainda.</p></div>`;
        panelEl.appendChild(vazio);
        return;
    }

    _srCache = await carregarPerfisSRS(nomeUsuario, discId);

    const sessaoSalva = window.flashcardSessao?.carregar(discId);

    let cards, estadoInicial;

    if (sessaoSalva) {
        cards = sessaoSalva.cards
            .map(id => CARDS_DATA[discId].find(c => c.id === id))
            .filter(Boolean);

        estadoInicial = {
            discId,
            nomeUsuario,
            cards,
            current:    sessaoSalva.current,
            flipped:    false,
            stats:      sessaoSalva.stats,
            difficulty: sessaoSalva.difficulty,
            resultado:  sessaoSalva.resultado,
            panelEl,
            marcando:   false,
        };
    } else {
        cards = _srMontarDeck(discId);
        estadoInicial = {
            discId,
            nomeUsuario,
            cards,
            current:    0,
            flipped:    false,
            stats:      { correct: 0, wrong: 0 },
            difficulty: {},
            resultado:  {},
            panelEl,
            marcando:   false,
        };
    }

    _estado = estadoInicial;
    panelEl.appendChild(_criarWrapper(discId, cards));
    _renderCard();
}

export function removerCards(panelEl) {
    panelEl?.querySelector('.panel-cards')?.remove();
}

// ═════════════════════════════════════════════════
//  HTML
// ═════════════════════════════════════════════════

function _criarWrapper(discId, cards) {
    const wrap = document.createElement('div');
    wrap.className = 'panel-cards';
    wrap.dataset.disc = discId;

    wrap.innerHTML = `
        <div class="cards-controls">
            <div class="cards-stats">
                <div class="cards-stat-chip correct">
                    <div class="cards-stat-dot"></div>
                    <span id="cards-stat-correct">0 acertos</span>
                </div>
                <div class="cards-stat-chip wrong">
                    <div class="cards-stat-dot"></div>
                    <span id="cards-stat-wrong">0 erros</span>
                </div>
            </div>
            <div class="cards-actions">
                <button class="cards-ctrl-btn" id="cards-btn-shuffle" title="Embaralhar deck">
                    <i class="fas fa-shuffle"></i>
                </button>
            </div>
        </div>

        <div class="cards-progress-wrap">
            <div class="cards-progress-top">
                <span class="cards-progress-label" id="cards-progress-label">0 de ${cards.length} respondidos</span>
                <span class="cards-progress-counter" id="cards-nav-counter">1 / ${cards.length}</span>
            </div>
            <div class="cards-progress-bar-bg">
                <div class="cards-progress-bar-fill" id="cards-progress-fill" style="width:0%"></div>
            </div>
            <div class="cards-dots-row" id="cards-dots-row"></div>
        </div>

        <div id="cards-scene-wrap"></div>

        <div class="cards-bottom" id="cards-bottom">
            <div class="cards-result-btns">
                <button class="cards-result-btn cards-btn-wrong" id="cards-btn-wrong">
                    <i class="fas fa-xmark"></i> Errei
                </button>
                <button class="cards-result-btn cards-btn-right" id="cards-btn-right">
                    <i class="fas fa-check"></i> Acertei
                </button>
            </div>
            <div class="cards-nav">
                <button class="cards-nav-btn" id="cards-btn-prev">
                    <i class="fas fa-chevron-left"></i> Anterior
                </button>
                <div class="cards-nav-counter" id="cards-nav-pos">1 / ${cards.length}</div>
                <button class="cards-nav-btn" id="cards-btn-next">
                    Próximo <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    `;

    wrap.querySelector('#cards-btn-wrong').addEventListener('click',   () => _marcar(false));
    wrap.querySelector('#cards-btn-right').addEventListener('click',   () => _marcar(true));
    wrap.querySelector('#cards-btn-prev').addEventListener('click',    _anterior);
    wrap.querySelector('#cards-btn-next').addEventListener('click',    _proximo);
    wrap.querySelector('#cards-btn-shuffle').addEventListener('click', _embaralhar);

    return wrap;
}

function _htmlCena(card, tagCls) {
    const perfil     = _srPerfil(card.id);
    const tentativas = perfil.tentativas;
    const dominado   = perfil.dominado;

    const badgeViz = tentativas > 0
        ? `<div class="cards-viz-badge ${dominado ? 'viz-dominado' : ''}">
               <i class="fas fa-eye"></i>
               <span>${tentativas}</span>
           </div>`
        : '';

    const badgeDom = dominado
        ? `<div class="cards-dominado-badge">
               <i class="fas fa-star"></i>
           </div>`
        : '';

    let badgePenalidade = '';
    if (tentativas >= MIN_TENTATIVAS_PENALIDADE) {
        const taxaAcerto = tentativas > 0 ? perfil.acertos / tentativas : 1.0;
        const pct = Math.round(taxaAcerto * 100);

        if (taxaAcerto < 0.40) {
            badgePenalidade = `
                <div class="cards-penalidade-badge">
                    <i class="fas fa-triangle-exclamation"></i>
                    <div class="cards-tooltip">
                        <div class="cards-tooltip-title" style="color:#f87171;">
                            <i class="fas fa-triangle-exclamation"></i> Card difícil pra você
                        </div>
                        <div class="cards-tooltip-body">
                            Você acertou este card só <strong style="color:#f87171">${pct}%</strong> das vezes.<br>
                            Por isso ele vai aparecer <strong>mais cedo</strong> pra você revisar com mais frequência.
                        </div>
                    </div>
                </div>`;
        } else if (taxaAcerto < 0.60) {
            badgePenalidade = `
                <div class="cards-penalidade-badge penalidade-leve">
                    <i class="fas fa-circle-exclamation"></i>
                    <div class="cards-tooltip">
                        <div class="cards-tooltip-title" style="color:#fbbf24;">
                            <i class="fas fa-circle-exclamation"></i> Reforço automático
                        </div>
                        <div class="cards-tooltip-body">
                            Você acertou este card em <strong style="color:#fbbf24">${pct}%</strong> das tentativas.<br>
                            Por isso ele vai aparecer <strong>um pouco mais cedo</strong> do que o normal pra reforçar a memória.
                        </div>
                    </div>
                </div>`;
        }
    }

    return `
        <div class="cards-scene" id="cards-scene">
            <div class="cards-flipper" id="cards-flipper">
                <div class="cards-face cards-front">
                    ${badgeViz}
                    ${badgeDom}
                    <span class="cards-tag ${tagCls}" id="cards-tag-front">${card.categoria}</span>
                    <p class="cards-question" id="cards-question">${_escHtml(card.pergunta)}</p>
                    <span class="cards-hint" id="cards-hint">
                        <i class="fas fa-hand-pointer"></i> Clique para ver a resposta
                    </span>
                    <div class="cards-result-badge" id="cards-result-badge-front" style="display:none;"></div>
                </div>
                <div class="cards-face cards-back">
                    <div class="cards-back-inner">
                        <span class="cards-tag ${tagCls}" id="cards-tag-back">${card.categoria}</span>
                        <div class="cards-answer" id="cards-answer">${card.resposta}</div>
                        <div class="cards-diff-badge-wrap" id="cards-diff-badge-wrap" style="display:none;">
                            <span class="cards-diff-badge" id="cards-diff-badge"></span>
                        </div>
                        <div class="cards-difficulty">
                            <span class="cards-diff-label">Como foi pra você?</span>
                            <button class="cards-diff-btn easy"   data-diff="easy">Fácil</button>
                            <button class="cards-diff-btn medium" data-diff="medium">Médio</button>
                            <button class="cards-diff-btn hard"   data-diff="hard">Difícil</button>
                        </div>
                    </div>
                </div>
            </div>
            ${badgePenalidade}
        </div>
    `;
}

function _htmlCardFinal() {
    const { discId, cards, stats, difficulty } = _estado;
    const total   = cards.length;
    const acertos = stats.correct;
    const erros   = stats.wrong;
    const pct     = total > 0 ? Math.round((acertos / total) * 100) : 0;

    const diffCount  = { easy: 0, medium: 0, hard: 0 };
    Object.values(difficulty).forEach(d => { if (diffCount[d] !== undefined) diffCount[d]++; });
    const diffLabels = { easy: 'Fácil', medium: 'Médio', hard: 'Difícil' };
    const diffHTML   = Object.entries(diffCount)
        .filter(([, v]) => v > 0)
        .map(([k, v]) => `<span class="finish-diff-item ${k}">${diffLabels[k]} ×${v}</span>`)
        .join('');

    const sr         = _srEstatisticas(discId);
    const proximoTxt = sr.vencidos > 0
        ? `${sr.vencidos} card${sr.vencidos > 1 ? 's' : ''} para revisar`
        : sr.novos > 0
            ? `${sr.novos} card${sr.novos > 1 ? 's' : ''} novo${sr.novos > 1 ? 's' : ''} aguardando`
            : 'Em dia! Volte amanhã.';

    const dominadosNaSessao = cards.filter(c => _srPerfil(c.id).dominado).length;
    const msgDominados = dominadosNaSessao > 0
        ? `<div class="finish-chip dominado"><i class="fas fa-star"></i> ${dominadosNaSessao} dominado${dominadosNaSessao > 1 ? 's' : ''}</div>`
        : '';

    const cardsPenalizados = cards.filter(c => {
        const p = _srPerfil(c.id);
        return p.tentativas >= MIN_TENTATIVAS_PENALIDADE && (p.acertos / p.tentativas) < 0.60;
    }).length;
    const msgPenalidade = cardsPenalizados > 0
        ? `<div class="finish-chip penalidade"><i class="fas fa-triangle-exclamation"></i> ${cardsPenalizados} card${cardsPenalizados > 1 ? 's' : ''} com revisão antecipada</div>`
        : '';

    const icon = pct >= 70 ? '🎯' : pct >= 50 ? '📊' : '📚';
    const msg  = pct >= 70 ? 'Ótimo desempenho!' : pct >= 50 ? 'Bom trabalho!' : 'Continue praticando!';

    return `
        <div class="cards-finish-scene">
            <div class="cards-finish-card">
                <div>
                    <span class="finish-icon">${icon}</span>
                    <div class="finish-title">Deck concluído!</div>
                    <div class="finish-subtitle">${msg}</div>
                </div>
                <div class="finish-stats">
                    <div class="finish-chip correct"><i class="fas fa-check"></i> ${acertos} acerto${acertos !== 1 ? 's' : ''}</div>
                    <div class="finish-chip wrong"><i class="fas fa-xmark"></i> ${erros} erro${erros !== 1 ? 's' : ''}</div>
                    <div class="finish-chip total">${pct}% de aproveitamento</div>
                    ${msgDominados}
                    ${msgPenalidade}
                </div>
                ${diffHTML ? `
                <div class="finish-diff-section">
                    <span class="finish-diff-label">Dificuldade por card</span>
                    <div class="finish-diff-row">${diffHTML}</div>
                </div>` : ''}
                <div class="finish-sr-status">
                    <i class="fas fa-brain"></i>
                    <span>${sr.dominados} de ${sr.total} cards dominados</span>
                    <span class="finish-sr-next">${proximoTxt}</span>
                </div>
                <button class="finish-restart-btn" id="cards-finish-restart">
                    <i class="fas fa-rotate-left"></i> Novo deck
                </button>
            </div>
        </div>
    `;
}

function _escHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ═════════════════════════════════════════════════
//  RENDER
// ═════════════════════════════════════════════════

function _renderCard() {
    const { cards, current, discId, panelEl } = _estado;

    const todosRespondidos = cards.every(c => _estado.resultado[c.id]);
    const isUltimo = current === cards.length && todosRespondidos;

    const wrap   = panelEl.querySelector('#cards-scene-wrap');
    const bottom = panelEl.querySelector('#cards-bottom');
    const tagCls = DISC_TAG_CLASS[discId] || '';

    if (isUltimo) {
        wrap.innerHTML = _htmlCardFinal();
        bottom.style.display = 'none';
        _limparSessao();
        panelEl.querySelector('#cards-finish-restart')
            ?.addEventListener('click', _reiniciar);
        _atualizarUI();
        return;
    }

    if (current >= cards.length) {
        const primeiroSemResposta = cards.findIndex(c => !_estado.resultado[c.id]);
        _estado.current = primeiroSemResposta >= 0 ? primeiroSemResposta : cards.length - 1;
    }

    bottom.style.display = '';
    const card = cards[current];
    wrap.innerHTML = _htmlCena(card, tagCls);

    wrap.querySelector('#cards-scene').addEventListener('click', _flipCard);
    wrap.querySelectorAll('.cards-diff-btn').forEach(btn => {
        btn.addEventListener('click', e => { e.stopPropagation(); _marcarDificuldade(btn.dataset.diff); });
    });

    // ── Tooltip de penalidade ──────────────────────
    wrap.querySelectorAll('.cards-penalidade-badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.querySelector('.cards-tooltip')?.classList.add('tooltip-visible');
        });
        badge.addEventListener('mouseleave', () => {
            badge.querySelector('.cards-tooltip')?.classList.remove('tooltip-visible');
        });
        badge.addEventListener('click', e => e.stopPropagation());
    });

    _estado.flipped = false;
    _atualizarBotoesDiff(card.id);
    _atualizarBadgeDiff(card.id);
    _atualizarResultadoVisual(card.id);
    _atualizarUI();
}

function _atualizarResultadoVisual(cardId) {
    const { panelEl, resultado } = _estado;
    const res        = resultado[cardId];
    const badgeFront = panelEl.querySelector('#cards-result-badge-front');
    const scene      = panelEl.querySelector('#cards-scene');
    const btnWrong   = panelEl.querySelector('#cards-btn-wrong');
    const btnRight   = panelEl.querySelector('#cards-btn-right');
    const hint       = panelEl.querySelector('#cards-hint');

    scene?.classList.remove('card-answered-correct', 'card-answered-wrong');

    if (res === 'correct') {
        if (badgeFront) { badgeFront.innerHTML = '<i class="fas fa-check"></i> Acertei'; badgeFront.className = 'cards-result-badge result-correct'; badgeFront.style.display = 'flex'; }
        scene?.classList.add('card-answered-correct');
        if (hint) hint.style.opacity = '.4';
        btnWrong?.classList.remove('btn-selected-wrong');
        btnRight?.classList.add('btn-selected-right');
    } else if (res === 'wrong') {
        if (badgeFront) { badgeFront.innerHTML = '<i class="fas fa-xmark"></i> Errei'; badgeFront.className = 'cards-result-badge result-wrong'; badgeFront.style.display = 'flex'; }
        scene?.classList.add('card-answered-wrong');
        if (hint) hint.style.opacity = '.4';
        btnRight?.classList.remove('btn-selected-right');
        btnWrong?.classList.add('btn-selected-wrong');
    } else {
        if (badgeFront) badgeFront.style.display = 'none';
        if (hint) hint.style.opacity = '';
        btnWrong?.classList.remove('btn-selected-wrong');
        btnRight?.classList.remove('btn-selected-right');
    }
}

function _atualizarBotoesDiff(cardId) {
    const saved = _estado.difficulty[cardId];
    _estado.panelEl.querySelectorAll('.cards-diff-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.diff === saved);
    });
}

function _atualizarBadgeDiff(cardId) {
    const saved = _estado.difficulty[cardId];
    const badge = _estado.panelEl.querySelector('#cards-diff-badge');
    const wrap  = _estado.panelEl.querySelector('#cards-diff-badge-wrap');
    if (!badge || !wrap) return;
    if (saved) {
        const cfg = { easy:{ label:'Fácil', cls:'badge-easy' }, medium:{ label:'Médio', cls:'badge-medium' }, hard:{ label:'Difícil', cls:'badge-hard' } };
        badge.textContent = cfg[saved].label;
        badge.className   = `cards-diff-badge ${cfg[saved].cls}`;
        wrap.style.display = 'flex';
    } else {
        wrap.style.display = 'none';
    }
}

function _atualizarUI() {
    const { cards, current, resultado, stats, panelEl } = _estado;
    const total       = cards.length;
    const respondidos = Object.keys(resultado).length;
    const pct         = total ? Math.round((respondidos / total) * 100) : 0;
    const q = id => panelEl.querySelector(id);

    const fill = q('#cards-progress-fill');  if (fill) fill.style.width = `${pct}%`;
    const lbl  = q('#cards-progress-label'); if (lbl)  lbl.textContent  = `${respondidos} de ${total} respondidos`;

    const ctrTop = q('#cards-nav-counter');
    if (ctrTop) ctrTop.textContent = current === total ? `Fim · ${total} cards` : `${current + 1} / ${total}`;

    const ctrNav = q('#cards-nav-pos');
    if (ctrNav) ctrNav.textContent = current === total ? `Fim` : `${current + 1} / ${total}`;

    const sc = q('#cards-stat-correct'); if (sc) sc.textContent = `${stats.correct} acerto${stats.correct !== 1 ? 's' : ''}`;
    const sw = q('#cards-stat-wrong');   if (sw) sw.textContent = `${stats.wrong} erro${stats.wrong !== 1 ? 's' : ''}`;

    const prev = q('#cards-btn-prev'); if (prev) prev.disabled = current === 0;
    const cardAtual = cards[current];
    const respondido = cardAtual ? !!resultado[cardAtual.id] : true;
    const next = q('#cards-btn-next'); if (next) next.disabled = current >= total || !respondido;

    _atualizarDots();
}

function _atualizarDots() {
    const { cards, current, resultado, panelEl } = _estado;
    const total   = cards.length;
    const dotsRow = panelEl.querySelector('#cards-dots-row');
    if (!dotsRow) return;

    const maxVisible = 12;
    let start = 0, end = total;
    if (total > maxVisible) {
        const half = Math.floor(maxVisible / 2);
        start = Math.max(0, current - half);
        end   = start + maxVisible;
        if (end > total) { end = total; start = end - maxVisible; }
    }

    dotsRow.innerHTML = '';
    for (let i = start; i < end; i++) {
        const btn = document.createElement('button');
        btn.className = 'cards-dot';
        const res = resultado[cards[i]?.id];
        if (i === current)          btn.classList.add('dot-active');
        else if (res === 'correct') btn.classList.add('dot-correct');
        else if (res === 'wrong')   btn.classList.add('dot-wrong');
        btn.title = `Card ${i + 1}`;
        btn.addEventListener('click', () => {
            const cardAlvo = cards[i];
            if (i > _estado.current && cardAlvo && !_estado.resultado[cardAlvo.id]) return;
            _estado.current = i;
            _renderCard();
        });
        dotsRow.appendChild(btn);
    }
}

// ═════════════════════════════════════════════════
//  AÇÕES
// ═════════════════════════════════════════════════

function _flipCard() {
    _estado.flipped = !_estado.flipped;
    _estado.panelEl.querySelector('#cards-flipper')?.classList.toggle('flipped', _estado.flipped);
}

function _marcarDificuldade(diff) {
    const card = _estado.cards[_estado.current];
    _estado.difficulty[card.id] = diff;
    _atualizarBotoesDiff(card.id);
    _atualizarBadgeDiff(card.id);
}

function _marcar(acertou) {
    const { cards, current, panelEl } = _estado;
    if (current >= cards.length || _estado.marcando) return;
    _estado.marcando = true;

    const card     = cards[current];
    const anterior = _estado.resultado[card.id];

    _estado.resultado[card.id] = acertou ? 'correct' : 'wrong';

    if (anterior === 'correct') _estado.stats.correct = Math.max(0, _estado.stats.correct - 1);
    if (anterior === 'wrong')   _estado.stats.wrong   = Math.max(0, _estado.stats.wrong   - 1);
    acertou ? _estado.stats.correct++ : _estado.stats.wrong++;

    _srAtualizar(card.id, acertou, _estado.difficulty[card.id] || null);

    _atualizarResultadoVisual(card.id);
    _atualizarUI();
    // _salvarSessao();  ← REMOVER DAQUI

    if (current === cards.length - 1) {
        const bottom = panelEl.querySelector('#cards-bottom');
        if (bottom) bottom.style.display = 'none';
    }

    setTimeout(() => {
        _estado.current++;
        _estado.marcando = false;
        _salvarSessao(); // ← FICA AQUI
        _renderCard();
    }, 700);
}

function _proximo() {
    const { cards, current, resultado } = _estado;
    const cardAtual = cards[current];

    if (cardAtual && !resultado[cardAtual.id]) return;

    if (current < cards.length) {
        _estado.current++;
        _salvarSessao();
        _renderCard();
    }
}

function _anterior() {
    if (_estado.current > 0) {
        _estado.current--;
        _salvarSessao();
        _renderCard();
    }
}

function _embaralhar() {
    const { cards, resultado } = _estado;

    // Separa índices respondidos e não respondidos
    const indicesRespondidos    = [];
    const indicesNaoRespondidos = [];

    cards.forEach((c, i) => {
        if (resultado[c.id]) indicesRespondidos.push(i);
        else indicesNaoRespondidos.push(i);
    });

    // Extrai e embaralha só os cards não respondidos
    const cardsNaoRespondidos = indicesNaoRespondidos.map(i => cards[i]);
    const embaralhados        = _shuffle(cardsNaoRespondidos);

    // Reconstrói o array: respondidos no lugar, não respondidos embaralhados
    const novoCards = [...cards];
    indicesNaoRespondidos.forEach((posOriginal, i) => {
        novoCards[posOriginal] = embaralhados[i];
    });

    _estado.cards = novoCards;

    // Vai para o primeiro não respondido
    const primeirosPendente = novoCards.findIndex(c => !resultado[c.id]);
    _estado.current = primeirosPendente >= 0 ? primeirosPendente : _estado.current;

    _salvarSessao();
    _renderCard();
}

function _reiniciar() {
    _limparSessao();
    const novosDeck    = _srMontarDeck(_estado.discId);
    _estado.cards      = novosDeck;
    _estado.current    = 0;
    _estado.stats      = { correct: 0, wrong: 0 };
    _estado.difficulty = {};
    _estado.resultado  = {};
    _estado.marcando   = false;
    _renderCard();
}