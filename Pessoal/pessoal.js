/* ═══════════════════════════════════════════════════════════════════════
   pessoal.js — Área Pessoal  (v19 — badge de cards pendentes nas tabs)
════════════════════════════════════════════════════════════════════════ */

import {
    DISCIPLINAS_DATA,
    criarSalvador,
    renderizarPainel,
    coletarCheckboxes,
    restaurarCheckboxes,
    restaurarVideos,
    atualizarProgressoPainel,
    atualizarProgressoTab,
    atualizarTodasAsTabs
} from './check.js';

import {
    listarResumos,
    getResumoPorId,
    mostrarFABs
} from './Resumo/resumo.js';

import {
    initAnotacoes,
    exibirAnotacao,
    removerAnotacao
} from './Anotacao/anotacao.js';

import { salvarNoFirebase, carregarDoFirebase, carregarTodosPerfisSRS } from './firebase.js';
import { exibirCards, removerCards } from './Card/card.js';

// ── CREDENCIAIS ───────────────────────────────────────────────────────
const USUARIOS = [
    { nome: 'Rafael',   senha: '288' },
    { nome: 'Cid',      senha: '285' },
    { nome: 'Everardo', senha: '334' },
    { nome: 'Alvaro',   senha: '093' },
    { nome: 'Isaac',    senha: '234' },
    { nome: 'Cauê',     senha: '542' }
];

// ── ESTADO ────────────────────────────────────────────────────────────
let usuarioAtual      = null;
let discSelecionada   = null;
let checklistCompleto = {};
let videosCompletos   = {};

let modoAtual   = 'checklist';
let discAtual   = null;
let _toastEl    = null;
let _toastTimer = null;

// ── DOM ───────────────────────────────────────────────────────────────
const loginScreen = document.getElementById('login-screen');
const dashScreen  = document.getElementById('dashboard-screen');
const inputNome   = document.getElementById('input-nome');
const inputSenha  = document.getElementById('input-senha');
const btnEntrar   = document.getElementById('btn-entrar');
const btnSair     = document.getElementById('btn-sair');
const loginError  = document.getElementById('login-error');
const dashNome    = document.getElementById('dash-nome-usuario');
const discTabsEl  = document.getElementById('disc-tabs');
const discPanel   = document.getElementById('disc-panel');

// ── TOGGLE SENHA ──────────────────────────────────────────────────────
document.querySelector('.toggle-senha')?.addEventListener('click', function () {
    const type = inputSenha.type === 'password' ? 'text' : 'password';
    inputSenha.type = type;
    this.querySelector('i').className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
});


// ═════════════════════════════════════════════════════════════════════
//  NAVEGAÇÃO — Persistência entre F5
// ═════════════════════════════════════════════════════════════════════

function _salvarEstadoNav() {
    localStorage.setItem('nav_modo', modoAtual);
    localStorage.setItem('nav_disc', discAtual ?? Object.keys(DISCIPLINAS_DATA)[0]);
}

function _restaurarEstadoNav() {
    modoAtual = localStorage.getItem('nav_modo') ?? 'checklist';
    discAtual = localStorage.getItem('nav_disc') ?? Object.keys(DISCIPLINAS_DATA)[0];
}

function _limparEstadoNav() {
    localStorage.removeItem('nav_modo');
    localStorage.removeItem('nav_disc');
}


// ═════════════════════════════════════════════════════════════════════
//  BADGE DE CARDS PENDENTES NAS TABS
// ═════════════════════════════════════════════════════════════════════

// Prefixo de ID por disciplina — mesmo padrão do firebase.js
const _DISC_PREFIXO = { design: 'd', banco: 'b', redes: 'r', poo: 'p' };

// Quantidade de cards por disciplina (50 fixos no cards_data.js)
const CARDS_DATA_COUNTS = { design: 50, banco: 50, redes: 50, poo: 50 };

/**
 * Carrega todos os perfis SRS do usuário e calcula quantos cards
 * estão vencidos (precisam de revisão hoje) por disciplina.
 * Retorna { design: 3, banco: 0, redes: 7, poo: 2 }
 */
async function _calcularPendentesPorDisc(nomeUsuario) {
    try {
        const todos  = await carregarTodosPerfisSRS(nomeUsuario);
        const agora  = Date.now();
        const result = { design: 0, banco: 0, redes: 0, poo: 0 };

        Object.entries(todos).forEach(([cardId, perfil]) => {
            const disc = Object.entries(_DISC_PREFIXO).find(([, p]) => cardId.startsWith(p))?.[0];
            if (!disc) return;
            if (!perfil.dominado && perfil.tentativas > 0 && perfil.proximaVez <= agora) {
                result[disc]++;
            }
        });

        return result;   // ← sem o bloco de "novos"
    } catch (err) {
        console.warn('[Pessoal] Falha ao calcular pendentes SRS:', err);
        return {};
    }
}

/**
 * Atualiza o badge de cards pendentes numa tab específica.
 * Se pendentes === 0, remove o badge.
 */
function _atualizarBadgeTab(discId, pendentes) {
    const tab = discTabsEl.querySelector(`.disc-tab[data-disc="${discId}"]`);
    if (!tab) return;

    tab.querySelector('.tab-srs-badge')?.remove();
    if (!pendentes || pendentes <= 0) return;

    const badge = document.createElement('span');
    badge.className   = 'tab-srs-badge';
    badge.textContent = pendentes > 99 ? '99+' : pendentes;
    badge.title       = `${pendentes} card${pendentes !== 1 ? 's' : ''} para revisar hoje`;

    // Insere depois do tab-icon
    const icon = tab.querySelector('.tab-icon');
    if (icon) icon.after(badge);
    else tab.appendChild(badge);
}

/**
 * Carrega os pendentes e atualiza todos os badges de uma vez.
 * Chamado logo após o login e sempre que um deck é concluído.
 */
async function atualizarBadgesSRS() {
    const pendentes = await _calcularPendentesPorDisc(usuarioAtual);
    Object.entries(pendentes).forEach(([disc, n]) => _atualizarBadgeTab(disc, n));
}


// ═════════════════════════════════════════════════════════════════════
//  LOGIN
// ═════════════════════════════════════════════════════════════════════

function tentarLogin() {
    const nome  = inputNome.value.trim();
    const senha = inputSenha.value;

    const normalizar = str =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const user = USUARIOS.find(u =>
        normalizar(u.nome) === normalizar(nome) && u.senha === senha
    );

    if (!user) {
        loginError.classList.remove('hidden');
        inputNome.focus();
        return;
    }

    loginError.classList.add('hidden');
    usuarioAtual = user.nome;
    localStorage.setItem('sessao_usuario', user.nome);
    entrarNoDashboard();
}
btnEntrar.addEventListener('click', tentarLogin);
inputNome.addEventListener('keydown',  e => { if (e.key === 'Enter') { e.preventDefault(); inputSenha.focus(); } });
inputSenha.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); tentarLogin(); } });


// ═════════════════════════════════════════════════════════════════════
//  DASHBOARD
// ═════════════════════════════════════════════════════════════════════

async function entrarNoDashboard() {
    loginScreen.classList.remove('active');
    dashScreen.classList.add('active');
    dashNome.textContent = usuarioAtual;

    // ── Restaura modo e disciplina salvos (F5) ────────────────────────
    _restaurarEstadoNav();
    const discInicial = discAtual ?? Object.keys(DISCIPLINAS_DATA)[0];

    // ── Renderiza a UI imediatamente sem esperar o Firebase ───────────
    construirTabs();
    _criarToast();
    _criarFABs();
    selecionarDisc(discInicial);

    // ── Carrega Firebase em paralelo no fundo ─────────────────────────
    try {
        await Promise.all([
            carregarDados(),
            initAnotacoes(usuarioAtual)
        ]);
    } catch (err) {
        console.warn('[Pessoal] Falha ao carregar dados.', err);
    }

    // ── Atualiza a UI com os dados carregados ─────────────────────────
    atualizarTodasAsTabs(checklistCompleto);
    selecionarDisc(discAtual ?? Object.keys(DISCIPLINAS_DATA)[0]);

    // ── Badges SRS nas tabs (assíncrono, não bloqueia) ────────────────
    atualizarBadgesSRS();
}

btnSair.addEventListener('click', () => {
    salvarDados.flush();
    usuarioAtual      = null;
    discSelecionada   = null;
    discAtual         = null;
    modoAtual         = 'checklist';
    checklistCompleto = {};
    videosCompletos   = {};
    localStorage.removeItem('sessao_usuario');
    _limparEstadoNav();
    dashScreen.classList.remove('active');
    loginScreen.classList.add('active');
    inputNome.value      = '';
    inputSenha.value     = '';
    discPanel.innerHTML  = '';
    discTabsEl.innerHTML = '';
});


// ═════════════════════════════════════════════════════════════════════
//  STORAGE
// ═════════════════════════════════════════════════════════════════════

async function carregarDados() {
    try {
        const raw = await carregarDoFirebase(usuarioAtual);
        if (raw?.checklist)        checklistCompleto = raw.checklist;
        if (raw?.videosAssistidos) videosCompletos   = raw.videosAssistidos;
    } catch (err) {
        console.warn('[Pessoal] Falha ao carregar do Firebase, iniciando vazio.', err);
    }
}

const salvarDados = criarSalvador(async () => {
    try {
        await salvarNoFirebase(usuarioAtual, checklistCompleto, videosCompletos);
    } catch (err) {
        console.warn('[Pessoal] Falha ao salvar no Firebase.', err);
    }
}, 800, 3000);


// ═════════════════════════════════════════════════════════════════════
//  TABS
// ═════════════════════════════════════════════════════════════════════

function construirTabs() {
    discTabsEl.innerHTML = '';
    const OCULTAS = ['redes_professor'];
    Object.entries(DISCIPLINAS_DATA).forEach(([id, disc]) => {
        if (OCULTAS.includes(id)) return;
        const tab = document.createElement('button');
        tab.className    = 'disc-tab';
        tab.dataset.disc = id;
        tab.innerHTML = `
            <div class="tab-icon tab-icon-${id}">
                <i class="fas ${disc.icone}"></i>
            </div>
            <div class="tab-info">
                <span class="tab-name">${disc.label}</span>
                <span class="tab-prog" id="tabprog-${id}">0 de — </span>
                <div class="tab-bar">
                    <div class="tab-bar-fill tab-bar-fill-${id}" id="tabfill-${id}" style="width:0%"></div>
                </div>
            </div>
        `;
        tab.addEventListener('click', () => selecionarDisc(id));
        discTabsEl.appendChild(tab);
    });
    atualizarTodasAsTabs(checklistCompleto);
}


// ═════════════════════════════════════════════════════════════════════
//  PILL DE REDES — atualiza a partir do checklistCompleto em memória
// ═════════════════════════════════════════════════════════════════════

function _atualizarPillRedes(panelEl) {
    const disc     = DISCIPLINAS_DATA['redes'];
    const discProf = DISCIPLINAS_DATA['redes_professor'];

    const totalN    = disc.modulos.reduce((a, m) => a + m.itens.length, 0);
    const marcadosN = disc.modulos.reduce((a, m) =>
        a + m.itens.filter(it => checklistCompleto['redes']?.[it.id]).length, 0);
    const pctN = totalN > 0 ? Math.round((marcadosN / totalN) * 100) : 0;

    const totalP    = discProf.modulos.reduce((a, m) => a + m.itens.length, 0);
    const marcadosP = discProf.modulos.reduce((a, m) =>
        a + m.itens.filter(it => checklistCompleto['redes_professor']?.[it.id]).length, 0);
    const pctP = totalP > 0 ? Math.round((marcadosP / totalP) * 100) : 0;

    const pill = panelEl.querySelector('#stat-pill-redes');
    if (pill) pill.innerHTML = `Aulas ${pctN}% · Prof ${pctP}%`;

    const sub = panelEl.querySelector('#panel-sub-redes');
    if (sub) sub.textContent = `${marcadosN} de ${totalN} itens concluídos`;
}


// ═════════════════════════════════════════════════════════════════════
//  SELEÇÃO DE DISCIPLINA
// ═════════════════════════════════════════════════════════════════════

function selecionarDisc(discId) {
    discSelecionada = discId;
    discAtual       = discId;
    _salvarEstadoNav();

    discTabsEl.querySelectorAll('.disc-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.disc === discId)
    );

    renderizarPainel(discId, discPanel);
    discPanel.querySelector('.panel-videos')?.remove();
    discPanel.querySelector('.panel-modules')?.remove();

    if (discId === 'redes') {
        _atualizarPillRedes(discPanel);
    }

    _injetarModeToggle(discId, discPanel);

    if (modoAtual === 'resumos') {
        _exibirResumos(discId, discPanel);
        mostrarFABs(true);
    } else if (modoAtual === 'anotacao') {
        exibirAnotacao(discId, discPanel);
        mostrarFABs(false);
    } else if (modoAtual === 'cards') {
        _exibirCardsWrapper(discId, discPanel);
        mostrarFABs(false);
    } else {
        _renderizarChecklistCompleto(discId, discPanel);
        _injetarModeToggle(discId, discPanel);
    }
}


// ═════════════════════════════════════════════════════════════════════
//  CHECKLIST
// ═════════════════════════════════════════════════════════════════════

function _renderizarChecklistCompleto(discId, panelEl) {
    renderizarPainel(discId, panelEl);

    restaurarCheckboxes(checklistCompleto[discId], panelEl);
    restaurarVideos(discId, videosCompletos[discId], panelEl);

    const { marcados, total } = atualizarProgressoPainel(discId, panelEl);
    atualizarProgressoTab(discId, marcados, total);

    // ── Para Redes: dividir em dois blocos colapsáveis ────────────────
    if (discId === 'redes') {
        const modulesEl = panelEl.querySelector('.panel-modules');
        if (modulesEl) {
            const disc     = DISCIPLINAS_DATA['redes'];
            const discProf = DISCIPLINAS_DATA['redes_professor'];

            if (discProf?.modulos?.length) {
                discProf.modulos.forEach(mod => {
                    const modBlock = document.createElement('div');
                    modBlock.className = 'mod-block mod-block-prof';
                    modBlock.innerHTML = `
                        <p class="mod-title">
                            ${mod.titulo}
                            <span class="mod-count">${mod.itens.length} itens</span>
                        </p>
                        <div class="checklist">
                            ${mod.itens.map(item => `
                                <label class="ck-item">
                                    <input type="checkbox" id="chk-${item.id}"
                                        data-disc="redes_professor"
                                        data-item="${item.id}"
                                        ${checklistCompleto['redes_professor']?.[item.id] ? 'checked' : ''}>
                                    <span class="ck-box"><i class="fas fa-check"></i></span>
                                    <span class="ck-text">${item.texto}</span>
                                </label>
                            `).join('')}
                        </div>
                    `;
                    modulesEl.appendChild(modBlock);
                });
            }

            const modBlocks        = [...modulesEl.querySelectorAll('.mod-block')];
            const numModulosNormal = disc.modulos.length;
            const numModulosProf   = discProf?.modulos?.length ?? 0;

            const blocosNormal = modBlocks.slice(0, numModulosNormal);
            const blocosProf   = modBlocks.slice(numModulosNormal, numModulosNormal + numModulosProf);

            modulesEl.innerHTML = '';

            const secNormal  = document.createElement('div');
            secNormal.className = 'ck-secao';

            const bodyNormal = document.createElement('div');
            bodyNormal.className     = 'ck-secao-body';
            bodyNormal.id            = 'ck-body-normal';
            bodyNormal.style.display = 'none';
            blocosNormal.forEach(b => bodyNormal.appendChild(b));

            const headerNormal = document.createElement('div');
            headerNormal.className      = 'ck-secao-header';
            headerNormal.dataset.secao  = 'normal';
            headerNormal.innerHTML = `
                <span class="ck-secao-label">
                    <i class="fas fa-list-check"></i> Checklist das Aulas
                </span>
                <div class="ck-secao-right">
                    <span class="ck-secao-count" id="ck-count-normal"></span>
                    <i class="fas fa-chevron-down ck-secao-chevron" style="transform:rotate(0deg);transition:transform .25s ease;"></i>
                </div>
            `;
            secNormal.appendChild(headerNormal);
            secNormal.appendChild(bodyNormal);
            modulesEl.appendChild(secNormal);

            if (blocosProf.length > 0) {
                const secProf  = document.createElement('div');
                secProf.className = 'ck-secao';

                const bodyProf = document.createElement('div');
                bodyProf.className     = 'ck-secao-body';
                bodyProf.id            = 'ck-body-prof';
                bodyProf.style.display = 'none';
                blocosProf.forEach(b => bodyProf.appendChild(b));

                const headerProf = document.createElement('div');
                headerProf.className     = 'ck-secao-header';
                headerProf.dataset.secao = 'prof';
                headerProf.innerHTML = `
                    <span class="ck-secao-label">
                        <i class="fas fa-chalkboard-teacher"></i> Redes — Resumo Ronildo
                    </span>
                    <div class="ck-secao-right">
                        <span class="ck-secao-count" id="ck-count-prof"></span>
                        <i class="fas fa-chevron-down ck-secao-chevron" style="transform:rotate(0deg);transition:transform .25s ease;"></i>
                    </div>
                `;
                secProf.appendChild(headerProf);
                secProf.appendChild(bodyProf);
                modulesEl.appendChild(secProf);
            }

            modulesEl.querySelectorAll('.ck-secao-header').forEach(header => {
                header.addEventListener('click', () => {
                    const body    = header.nextElementSibling;
                    const chevron = header.querySelector('.ck-secao-chevron');
                    const aberto  = body.style.display !== 'none';

                    if (aberto) {
                        body.style.overflow  = 'hidden';
                        body.style.maxHeight = body.scrollHeight + 'px';
                        requestAnimationFrame(() => {
                            body.style.transition = 'max-height .35s cubic-bezier(.4,0,.2,1), opacity .3s ease';
                            body.style.opacity    = '0';
                            body.style.maxHeight  = '0';
                        });
                        body.addEventListener('transitionend', () => {
                            body.style.display    = 'none';
                            body.style.transition = '';
                            body.style.opacity    = '';
                            body.style.maxHeight  = '';
                            body.style.overflow   = '';
                        }, { once: true });
                    } else {
                        body.style.display   = 'block';
                        body.style.overflow  = 'hidden';
                        body.style.opacity   = '0';
                        body.style.maxHeight = '0';
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                body.style.transition = 'max-height .35s cubic-bezier(.4,0,.2,1), opacity .3s ease';
                                body.style.maxHeight  = body.scrollHeight + 'px';
                                body.style.opacity    = '1';
                            });
                        });
                        body.addEventListener('transitionend', () => {
                            body.style.overflow   = '';
                            body.style.maxHeight  = '';
                            body.style.transition = '';
                        }, { once: true });
                    }

                    chevron.style.transform = aberto ? 'rotate(0deg)' : 'rotate(180deg)';
                });
            });

            function atualizarContadores() {
                const totalN    = disc.modulos.reduce((a, m) => a + m.itens.length, 0);
                const marcadosN = disc.modulos.reduce((a, m) =>
                    a + m.itens.filter(it => panelEl.querySelector(`#chk-${it.id}`)?.checked).length, 0);
                const pctN = totalN > 0 ? Math.round((marcadosN / totalN) * 100) : 0;
                const elN  = panelEl.querySelector('#ck-count-normal');
                if (elN) elN.textContent = `${marcadosN} de ${totalN} — ${pctN}%`;

                let pctP = 0;
                if (discProf?.modulos) {
                    const totalP    = discProf.modulos.reduce((a, m) => a + m.itens.length, 0);
                    const marcadosP = discProf.modulos.reduce((a, m) =>
                        a + m.itens.filter(it => panelEl.querySelector(`#chk-${it.id}`)?.checked).length, 0);
                    pctP = totalP > 0 ? Math.round((marcadosP / totalP) * 100) : 0;
                    const elP = panelEl.querySelector('#ck-count-prof');
                    if (elP) elP.textContent = `${marcadosP} de ${totalP} — ${pctP}%`;
                }

                const pill = panelEl.querySelector(`#stat-pill-redes`);
                if (pill) pill.innerHTML = `Aulas ${pctN}% · Prof ${pctP}%`;
            }

            restaurarCheckboxes(checklistCompleto['redes_professor'], panelEl);
            atualizarContadores();
            panelEl.addEventListener('change', atualizarContadores, { passive: true });
        }

        mostrarFABs(true);

        const fabCollapse = document.getElementById('fab-collapse');
        if (fabCollapse) {
            const novoBtn = fabCollapse.cloneNode(true);
            fabCollapse.parentNode.replaceChild(novoBtn, fabCollapse);
            novoBtn.addEventListener('click', () => {
                panelEl.querySelectorAll('.ck-secao-header').forEach(header => {
                    const body    = header.nextElementSibling;
                    const chevron = header.querySelector('.ck-secao-chevron');
                    if (body)    body.style.display      = 'none';
                    if (chevron) chevron.style.transform = 'rotate(0deg)';
                });
            });
        }

    } else {
        mostrarFABs(false);
    }

    panelEl.addEventListener('change', e => {
        if (e.target.type !== 'checkbox') return;
        const disc = e.target.dataset.disc;
        if (!disc) return;
        if (!checklistCompleto[disc]) checklistCompleto[disc] = {};
        checklistCompleto[disc] = coletarCheckboxes(disc, panelEl);

        if (disc !== 'redes' && disc !== 'redes_professor') {
            const { marcados: m, total: t } = atualizarProgressoPainel(disc, panelEl);
            atualizarProgressoTab(disc, m, t);
        } else {
            const discRedes = DISCIPLINAS_DATA['redes'];
            const totalN    = discRedes.modulos.reduce((a, m) => a + m.itens.length, 0);
            const marcadosN = discRedes.modulos.reduce((a, m) =>
                a + m.itens.filter(it => panelEl.querySelector(`#chk-${it.id}`)?.checked).length, 0);
            atualizarProgressoTab('redes', marcadosN, totalN);
        }

        atualizarProgressoGeral();
        salvarDados();
    });

    panelEl.addEventListener('click', e => {
        const vbtn = e.target.closest('.vbtn');
        if (!vbtn) return;
        const disc = vbtn.dataset.disc;
        const idx  = parseInt(vbtn.dataset.idx, 10);
        if (!videosCompletos[disc]) videosCompletos[disc] = [];
        if (!videosCompletos[disc].includes(idx)) {
            videosCompletos[disc].push(idx);
            vbtn.classList.add('watched');
            salvarDados();
        }
    });
}

function atualizarProgressoGeral() {
    let totalG = 0, marcadosG = 0;
    Object.entries(DISCIPLINAS_DATA).forEach(([id, disc]) => {
        disc.modulos.forEach(mod => mod.itens.forEach(item => {
            totalG++;
            if (checklistCompleto[id]?.[item.id]) marcadosG++;
        }));
    });
    const pct    = totalG > 0 ? Math.round((marcadosG / totalG) * 100) : 0;
    const opFill = document.getElementById('op-fill');
    const opText = document.getElementById('op-text');
    if (opFill) opFill.style.width = `${pct}%`;
    if (opText) opText.textContent = `${pct}%`;
}


// ═════════════════════════════════════════════════════════════════════
//  MODE TOGGLE
// ═════════════════════════════════════════════════════════════════════

function _injetarModeToggle(discId, panelEl) {
    panelEl.querySelector('.mode-toggle')?.remove();

    const toggle = document.createElement('div');
    toggle.className = 'mode-toggle';
    toggle.innerHTML = `
        <button class="mode-btn ${modoAtual === 'checklist' ? 'active' : ''}" data-mode="checklist">
            <i class="fas fa-list-check"></i> Checklist
        </button>
        <button class="mode-btn ${modoAtual === 'resumos' ? 'active' : ''}" data-mode="resumos">
            <i class="fas fa-book-open"></i> Resumos
        </button>
        <button class="mode-btn ${modoAtual === 'cards' ? 'active' : ''}" data-mode="cards">
            <i class="fas fa-layer-group"></i> Cards
        </button>
        <button class="mode-btn ${modoAtual === 'anotacao' ? 'active' : ''}" data-mode="anotacao">
            <i class="fas fa-pen-to-square"></i> Anotações
        </button>
    `;

    const anchor = panelEl.querySelector('.panel-videos') ?? panelEl.querySelector('.panel-modules');
    if (anchor) {
        anchor.parentNode.insertBefore(toggle, anchor);
    } else {
        panelEl.appendChild(toggle);
    }

    toggle.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modo = btn.dataset.mode;
            if (modo === modoAtual) return;
            modoAtual = modo;
            _salvarEstadoNav();

            toggle.querySelectorAll('.mode-btn').forEach(b =>
                b.classList.toggle('active', b.dataset.mode === modoAtual)
            );

            if (modoAtual === 'resumos') {
                removerAnotacao(panelEl);
                removerCards(panelEl);              // ← FIX: remove cards ao ir para resumos
                _exibirResumos(discId, panelEl);
                mostrarFABs(true);
            } else if (modoAtual === 'anotacao') {
                removerCards(panelEl);              // ← FIX: remove cards ao ir para anotações
                _exibirAnotacaoWrapper(discId, panelEl);
                mostrarFABs(false);
            } else if (modoAtual === 'cards') {
                removerAnotacao(panelEl);
                _exibirCardsWrapper(discId, panelEl);
                mostrarFABs(false);
            } else {
                removerAnotacao(panelEl);
                removerCards(panelEl);              // ← FIX: remove cards ao ir para checklist
                _exibirChecklist(discId, panelEl);
            }
        });
    });
}


// ═════════════════════════════════════════════════════════════════════
//  EXIBIÇÃO DOS MODOS
// ═════════════════════════════════════════════════════════════════════

function _exibirChecklist(discId, panelEl) {
    _renderizarChecklistCompleto(discId, panelEl);
    _injetarModeToggle(discId, panelEl);
}

function _exibirAnotacaoWrapper(discId, panelEl) {
    panelEl.querySelector('.panel-videos')?.remove();
    panelEl.querySelector('.panel-modules')?.remove();
    panelEl.querySelector('.panel-resumos')?.remove();
    exibirAnotacao(discId, panelEl);
}

function _exibirResumos(discId, panelEl) {
    const resumos     = listarResumos(discId);
    const resumosProf = discId === 'redes' ? listarResumos('redes_professor') : [];

    panelEl.querySelector('.panel-videos')?.remove();
    panelEl.querySelector('.panel-modules')?.remove();
    panelEl.querySelector('.panel-resumos')?.remove();

    if (resumos.length === 0 && resumosProf.length === 0) {
        const vazio = document.createElement('div');
        vazio.className = 'panel-resumos';
        vazio.innerHTML = `
            <div style="text-align:center;padding:3rem 1rem;color:rgba(255,255,255,.3);">
                <i class="fas fa-book" style="font-size:2rem;margin-bottom:.8rem;display:block;"></i>
                <p style="font-size:.85rem;">Nenhum resumo disponível ainda.</p>
            </div>
        `;
        panelEl.appendChild(vazio);
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'panel-resumos';

    let htmlAulas = '';
    if (resumos.length > 0) {
        if (discId === 'redes') {
            htmlAulas = `
                <div class="resumo-header-bar resumo-secao-toggle" data-secao="aulas" style="cursor:pointer;">
                    <span class="rh-label"><i class="fas fa-book-open" style="margin-right:.35rem;"></i>Resumos das Aulas</span>
                    <div style="display:flex;align-items:center;gap:.6rem;">
                        <span class="rh-count">${resumos.length} aula${resumos.length !== 1 ? 's' : ''}</span>
                        <i class="fas fa-chevron-down rh-chevron"></i>
                    </div>
                </div>
                <div class="resumo-secao-body resumo-secao-body--aulas" style="display:none;">
                    ${resumos.map(r => _renderCard(r, discId)).join('')}
                </div>
            `;
        } else {
            htmlAulas = `
                <div class="resumo-header-bar">
                    <span class="rh-label"><i class="fas fa-book-open" style="margin-right:.35rem;"></i>Resumos das Aulas</span>
                    <span class="rh-count">${resumos.length} aula${resumos.length !== 1 ? 's' : ''}</span>
                </div>
                ${resumos.map(r => _renderCard(r, discId)).join('')}
            `;
        }
    }

    let htmlProf = '';
    if (discId === 'redes' && resumosProf.length > 0) {
        htmlProf = `
            <div class="resumo-header-bar resumo-secao-toggle" data-secao="prof" style="margin-top:1rem;cursor:pointer;">
                <span class="rh-label"><i class="fas fa-chalkboard-teacher" style="margin-right:.35rem;"></i>Resumo do Professor</span>
                <div style="display:flex;align-items:center;gap:.6rem;">
                    <span class="rh-count">${resumosProf.length} tópico${resumosProf.length !== 1 ? 's' : ''}</span>
                    <i class="fas fa-chevron-down rh-chevron"></i>
                </div>
            </div>
            <div class="resumo-secao-body resumo-secao-body--prof" style="display:none;">
                ${resumosProf.map(r => _renderCard(r, 'redes_professor')).join('')}
            </div>
        `;
    }

    wrapper.innerHTML = htmlAulas + htmlProf;
    panelEl.appendChild(wrapper);

    wrapper.querySelectorAll('.resumo-secao-toggle').forEach(header => {
        header.addEventListener('click', () => {
            const secao   = header.dataset.secao;
            const body    = wrapper.querySelector(`.resumo-secao-body--${secao}`);
            const chevron = header.querySelector('.rh-chevron');
            if (!body) return;
            const aberto  = body.style.display !== 'none';

            if (aberto) {
                body.style.overflow  = 'hidden';
                body.style.maxHeight = body.scrollHeight + 'px';
                requestAnimationFrame(() => {
                    body.style.transition = 'max-height .35s cubic-bezier(.4,0,.2,1), opacity .3s ease';
                    body.style.opacity    = '0';
                    body.style.maxHeight  = '0';
                });
                body.addEventListener('transitionend', () => {
                    body.style.display    = 'none';
                    body.style.transition = '';
                    body.style.opacity    = '';
                    body.style.maxHeight  = '';
                    body.style.overflow   = '';
                }, { once: true });
            } else {
                body.style.display   = 'block';
                body.style.overflow  = 'hidden';
                body.style.opacity   = '0';
                body.style.maxHeight = '0';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        body.style.transition = 'max-height .35s cubic-bezier(.4,0,.2,1), opacity .3s ease';
                        body.style.maxHeight  = body.scrollHeight + 'px';
                        body.style.opacity    = '1';
                    });
                });
                body.addEventListener('transitionend', () => {
                    body.style.overflow   = '';
                    body.style.maxHeight  = '';
                    body.style.transition = '';
                }, { once: true });
            }

            chevron.style.transform  = aberto ? 'rotate(0deg)' : 'rotate(180deg)';
            chevron.style.transition = 'transform .25s ease';
        });
    });

    wrapper.querySelectorAll('.resumo-card').forEach(card => {
        const rid = card.dataset.resumoId;

        card.querySelector('.resumo-card-header').addEventListener('click', () => {
            card.classList.toggle('expanded');
        });

        card.querySelectorAll('.resumo-bloco-header').forEach(header => {
            header.addEventListener('click', () => {
                header.closest('.resumo-bloco').classList.toggle('bloco-aberto');
            });
        });

        card.querySelector('.btn-expandir-blocos')?.addEventListener('click', e => {
            e.stopPropagation();
            const blocos       = card.querySelectorAll('.resumo-bloco');
            const todosAbertos = [...blocos].every(b => b.classList.contains('bloco-aberto'));
            blocos.forEach(b => {
                todosAbertos
                    ? b.classList.remove('bloco-aberto')
                    : b.classList.add('bloco-aberto');
            });
            const btn = card.querySelector('.btn-expandir-blocos');
            btn.innerHTML = todosAbertos
                ? '<i class="fas fa-expand-alt"></i> Expandir tópicos'
                : '<i class="fas fa-compress-alt"></i> Contrair tópicos';
        });

        card.querySelector('.btn-copiar')?.addEventListener('click', e => {
            e.stopPropagation();
            const r = getResumoPorId(rid);
            if (!r) return;
            const texto = _resumoParaTexto(r);
            navigator.clipboard.writeText(texto).then(() => {
                const btn = card.querySelector('.btn-copiar');
                btn.classList.add('copied');
                btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                _mostrarToast('Resumo copiado para a área de transferência');
                setTimeout(() => {
                    btn.classList.remove('copied');
                    btn.innerHTML = '<i class="far fa-copy"></i> Copiar';
                }, 2000);
            }).catch(() => _mostrarToast('Não foi possível copiar automaticamente'));
        });
    });
}

function _exibirCardsWrapper(discId, panelEl) {
    panelEl.querySelector('.panel-videos')?.remove();
    panelEl.querySelector('.panel-modules')?.remove();
    panelEl.querySelector('.panel-resumos')?.remove();
    removerCards(panelEl);

    _injetarModeToggle(discId, panelEl);

    // Após concluir o deck, atualiza os badges (cards foram revisados)
    const observer = new MutationObserver(() => {
        if (panelEl.querySelector('.cards-finish-scene')) {
            observer.disconnect();
            atualizarBadgesSRS();
        }
    });
    observer.observe(panelEl, { childList: true, subtree: true });

    exibirCards(discId, panelEl, usuarioAtual);
}


// ═════════════════════════════════════════════════════════════════════
//  RENDER DE CARDS DE RESUMO
// ═════════════════════════════════════════════════════════════════════

function _renderizarTexto(texto) {
    if (typeof texto === 'string') return `<p class="resumo-bloco-texto">${texto}</p>`;
    return texto.map(item => {
        if (Array.isArray(item)) {
            return `<ul class="resumo-lista">${item.map(li => `<li>${li}</li>`).join('')}</ul>`;
        }
        return `<p class="resumo-bloco-texto">${item}</p>`;
    }).join('');
}

function _renderCard(resumo, discId) {
    const blocos = resumo.conteudo.map(bloco => {
        const imagemHTML = bloco.imagem
            ? `<div class="resumo-bloco-imagem">
                   <img src="Resumo/${bloco.imagem.src}.png" alt="${bloco.imagem.alt}">
               </div>`
            : '';
        return `
            <div class="resumo-bloco">
                <div class="resumo-bloco-header">
                    <span class="resumo-bloco-titulo">
                        <i class="fas fa-circle-dot"></i>
                        ${bloco.subtitulo}
                    </span>
                    <i class="fas fa-chevron-down bloco-chevron"></i>
                </div>
                <div class="resumo-bloco-conteudo">
                    ${imagemHTML}
                    ${_renderizarTexto(bloco.texto)}
                </div>
            </div>
        `;
    }).join('');

    const numBlocos = resumo.conteudo.length;
    return `
        <div class="resumo-card disc-${discId}" data-resumo-id="${resumo.id}">
            <div class="resumo-card-header">
                <div class="resumo-card-icon">
                    <i class="fas fa-file-lines"></i>
                </div>
                <div class="resumo-card-meta">
                    <span class="resumo-card-titulo">${resumo.titulo}</span>
                    <span class="resumo-card-sub">${numBlocos} tópico${numBlocos !== 1 ? 's' : ''}</span>
                </div>
                <i class="fas fa-chevron-down resumo-chevron"></i>
            </div>
            <div class="resumo-card-body">
                <div class="resumo-body-inner">
                    ${blocos}
                </div>
                <div class="resumo-card-actions">
                    <button class="resumo-action-btn btn-copiar">
                        <i class="far fa-copy"></i> Copiar
                    </button>
                    <button class="resumo-action-btn btn-expandir-blocos">
                        <i class="fas fa-expand-alt"></i> Expandir tópicos
                    </button>
                </div>
            </div>
        </div>
    `;
}

function _resumoParaTexto(resumo) {
    let txt = `${resumo.titulo}\n${'─'.repeat(50)}\n\n`;
    resumo.conteudo.forEach(bloco => {
        txt += `▸ ${bloco.subtitulo}\n${bloco.texto}\n\n`;
    });
    return txt.trim();
}


// ═════════════════════════════════════════════════════════════════════
//  TOAST
// ═════════════════════════════════════════════════════════════════════

function _criarToast() {
    _toastEl = document.createElement('div');
    _toastEl.className = 'resumo-toast';
    _toastEl.innerHTML = '<i class="fas fa-check-circle"></i> <span></span>';
    document.body.appendChild(_toastEl);
}

function _mostrarToast(msg) {
    if (!_toastEl) return;
    _toastEl.querySelector('span').textContent = msg;
    _toastEl.classList.add('show');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => _toastEl.classList.remove('show'), 2800);
}


// ═════════════════════════════════════════════════════════════════════
//  FABs FLUTUANTES
// ═════════════════════════════════════════════════════════════════════

function _criarFABs() {
    document.getElementById('fab-group')?.remove();

    const group = document.createElement('div');
    group.id        = 'fab-group';
    group.className = 'fab-group';
    group.style.display = 'none';
    group.innerHTML = `
        <div class="fab-ear"></div>
        <div class="fab-group-inner">
            <button class="fab-btn" id="fab-up" title="Ir para o topo">
                <i class="fas fa-chevron-up"></i>
            </button>
            <div class="fab-divider"></div>
            <button class="fab-btn fab-collapse" id="fab-collapse" title="Contrair tudo">
                <i class="fas fa-compress"></i>
            </button>
            <div class="fab-divider"></div>
            <button class="fab-btn" id="fab-down" title="Ir para o final">
                <i class="fas fa-chevron-down"></i>
            </button>
        </div>
    `;
    document.body.appendChild(group);

    let _scrollAnim = null;

    function scrollSuave(direcao) {
        if (_scrollAnim) {
            cancelAnimationFrame(_scrollAnim);
            _scrollAnim = null;
        }

        const el     = discPanel.scrollHeight > discPanel.clientHeight ? discPanel : document.documentElement;
        const inicio = el.scrollTop;
        const alvo   = direcao === 'up' ? 0 : el.scrollHeight - el.clientHeight;
        const duracao = 1000;
        let cancelado = false;

        function onWheel(e) {
            const subindo  = e.deltaY < 0;
            const descendo = e.deltaY > 0;
            if ((direcao === 'down' && subindo) || (direcao === 'up' && descendo)) {
                cancelado = true;
                el.removeEventListener('wheel', onWheel);
            }
        }
        el.addEventListener('wheel', onWheel, { passive: true });

        const startTime = performance.now();

        function step(now) {
            if (cancelado) return;
            const elapsed  = now - startTime;
            const progress = Math.min(elapsed / duracao, 1);
            const ease = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            el.scrollTop = inicio + (alvo - inicio) * ease;
            if (progress < 1) {
                _scrollAnim = requestAnimationFrame(step);
            } else {
                el.removeEventListener('wheel', onWheel);
                _scrollAnim = null;
            }
        }

        _scrollAnim = requestAnimationFrame(step);
    }

    document.getElementById('fab-up').addEventListener('click', () => scrollSuave('up'));
    document.getElementById('fab-down').addEventListener('click', () => scrollSuave('down'));

    document.getElementById('fab-collapse').addEventListener('click', () => {
        discPanel.querySelectorAll('.ck-secao-header').forEach(header => {
            const body    = header.nextElementSibling;
            const chevron = header.querySelector('.ck-secao-chevron');
            if (body)    body.style.display      = 'none';
            if (chevron) chevron.style.transform = 'rotate(0deg)';
        });

        discPanel.querySelectorAll('.resumo-secao-toggle').forEach(header => {
            const secao   = header.dataset.secao;
            const body    = discPanel.querySelector(`.resumo-secao-body--${secao}`);
            const chevron = header.querySelector('.rh-chevron');
            if (body) {
                body.style.transition = '';
                body.style.maxHeight  = '';
                body.style.opacity    = '';
                body.style.overflow   = '';
                body.style.display    = 'none';
            }
            if (chevron) chevron.style.transform = 'rotate(0deg)';
        });

        discPanel.querySelectorAll('.resumo-card.expanded')
            .forEach(c => c.classList.remove('expanded'));

        discPanel.querySelectorAll('.resumo-bloco.bloco-aberto')
            .forEach(b => b.classList.remove('bloco-aberto'));

        discPanel.querySelectorAll('.btn-expandir-blocos')
            .forEach(btn => {
                btn.innerHTML = '<i class="fas fa-expand-alt"></i> Expandir tópicos';
            });
    });
}


// ═════════════════════════════════════════════════════════════════════
//  INICIALIZAÇÃO
// ═════════════════════════════════════════════════════════════════════

const sessaoSalva = localStorage.getItem('sessao_usuario');
const userSalvo   = sessaoSalva ? USUARIOS.find(u => u.nome === sessaoSalva) : null;

if (userSalvo) {
    usuarioAtual = userSalvo.nome;
    entrarNoDashboard();
} else {
    loginScreen.classList.add('active');
    inputNome.focus();
}