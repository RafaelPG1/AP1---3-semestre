/* ═══════════════════════════════════════════════════════════════════════
   pessoal.js — Área Pessoal  (v15 — blocos de tópico colapsáveis)
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


import {
    salvarNoFirebase,
    carregarDoFirebase
} from './firebase.js';

// ── CREDENCIAIS ───────────────────────────────────────────────────────
const USUARIOS = [
    { nome: 'Rafael',   senha: '288' },
    { nome: 'Cid',      senha: '285' },
    { nome: 'Everardo', senha: '334' },
    { nome: 'Alvaro',   senha: '093' },
    { nome: 'Isaac',    senha: '234' },
    { nome: 'Cauê',    senha: '542' }
];


// ── ESTADO ────────────────────────────────────────────────────────────
let usuarioAtual      = null;
let discSelecionada   = null;
let checklistCompleto = {};
let videosCompletos   = {};

let modoAtual  = 'checklist';
let discAtual  = null;
let _toastEl   = null;
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
//  LOGIN
// ═════════════════════════════════════════════════════════════════════

function tentarLogin() {
    const nome = inputNome.value.trim();
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

    await carregarDados();
    await initAnotacoes(usuarioAtual);
    construirTabs();
    _criarToast();
    _criarFABs();
    selecionarDisc(Object.keys(DISCIPLINAS_DATA)[0]);
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
    Object.entries(DISCIPLINAS_DATA).forEach(([id, disc]) => {
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
//  SELEÇÃO DE DISCIPLINA
// ═════════════════════════════════════════════════════════════════════

function selecionarDisc(discId) {
    discSelecionada = discId;
    discAtual       = discId;

    discTabsEl.querySelectorAll('.disc-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.disc === discId)
    );

    if (modoAtual === 'resumos') {
        renderizarPainel(discId, discPanel);
        discPanel.querySelector('.panel-videos')?.remove();
        discPanel.querySelector('.panel-modules')?.remove();
        _injetarModeToggle(discId, discPanel);
        _exibirResumos(discId, discPanel);
        mostrarFABs(true);
    } else if (modoAtual === 'anotacao') {
        renderizarPainel(discId, discPanel);
        discPanel.querySelector('.panel-videos')?.remove();
        discPanel.querySelector('.panel-modules')?.remove();
        _injetarModeToggle(discId, discPanel);
        exibirAnotacao(discId, discPanel);
        mostrarFABs(false);
    } else {
        _renderizarChecklistCompleto(discId, discPanel);
        _injetarModeToggle(discId, discPanel);
        mostrarFABs(false);
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

    panelEl.addEventListener('change', e => {
        if (e.target.type !== 'checkbox') return;
        const disc = e.target.dataset.disc;
        if (!disc) return;
        if (!checklistCompleto[disc]) checklistCompleto[disc] = {};
        checklistCompleto[disc] = coletarCheckboxes(disc, panelEl);

        const { marcados: m, total: t } = atualizarProgressoPainel(disc, panelEl);
        atualizarProgressoTab(disc, m, t);
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

            toggle.querySelectorAll('.mode-btn').forEach(b =>
                b.classList.toggle('active', b.dataset.mode === modoAtual)
            );

            if (modoAtual === 'resumos') {
                removerAnotacao(panelEl);
                _exibirResumos(discId, panelEl);
                mostrarFABs(true);
            } else if (modoAtual === 'anotacao') {
                _exibirAnotacaoWrapper(discId, panelEl);
                mostrarFABs(false);
            } else {
                removerAnotacao(panelEl);
                _exibirChecklist(discId, panelEl);
                mostrarFABs(false);
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
    const resumos = listarResumos(discId);

    // ── resumos do professor (só para redes) ─────────────────────────
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

// ── bloco: resumos das aulas ─────────────────────────────────────
    let htmlAulas = '';
    if (resumos.length > 0) {
        if (discId === 'redes') {
            // com toggle colapsável
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
            // sem toggle — comportamento original
            htmlAulas = `
                <div class="resumo-header-bar">
                    <span class="rh-label"><i class="fas fa-book-open" style="margin-right:.35rem;"></i>Resumos das Aulas</span>
                    <span class="rh-count">${resumos.length} aula${resumos.length !== 1 ? 's' : ''}</span>
                </div>
                ${resumos.map(r => _renderCard(r, discId)).join('')}
            `;
        }
    }

    // ── bloco: resumo do professor (só existe em redes) ──────────────
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
// ── toggle das seções (Aulas / Professor) ────────────────────────
    wrapper.querySelectorAll('.resumo-secao-toggle').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            const secao   = header.dataset.secao;
            const body    = wrapper.querySelector(`.resumo-secao-body--${secao}`);
            const chevron = header.querySelector('.rh-chevron');
            const aberto  = body.style.display !== 'none';

            body.style.display   = aberto ? 'none' : 'block';
            chevron.style.transform = aberto ? 'rotate(0deg)' : 'rotate(180deg)';
            chevron.style.transition = 'transform .25s ease';
        });
    });
    // ── eventos (cards de aulas + cards do professor) ────────────────
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
            const blocos = card.querySelectorAll('.resumo-bloco');
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
    group.id = 'fab-group';
    group.className = 'fab-group';
    group.style.display = 'none';
    group.innerHTML = `
        <button class="fab-btn" id="fab-up" title="Ir para o topo">
            <i class="fas fa-chevron-up"></i>
        </button>
        <button class="fab-btn fab-collapse" id="fab-collapse" title="Contrair tudo">
            <i class="fas fa-compress"></i>
        </button>
        <button class="fab-btn" id="fab-down" title="Ir para o final">
            <i class="fas fa-chevron-down"></i>
        </button>
    `;
    document.body.appendChild(group);

    function scrollUp() {
        if (discPanel.scrollTop > 0) {
            discPanel.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function scrollDown() {
        const panelScrollable = discPanel.scrollHeight > discPanel.clientHeight;
        if (panelScrollable) {
            discPanel.scrollTo({ top: discPanel.scrollHeight, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }

    document.getElementById('fab-up').addEventListener('click', scrollUp);
    document.getElementById('fab-down').addEventListener('click', scrollDown);

    document.getElementById('fab-collapse').addEventListener('click', () => {
        // Fecha todos os cards de aula
        discPanel.querySelectorAll('.resumo-card.expanded')
            .forEach(c => c.classList.remove('expanded'));
        // Fecha também todos os blocos de tópico abertos
        discPanel.querySelectorAll('.resumo-bloco.bloco-aberto')
            .forEach(b => b.classList.remove('bloco-aberto'));
        // Reseta o texto dos botões de expandir tópicos
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