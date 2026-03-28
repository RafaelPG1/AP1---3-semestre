/* ═══════════════════════════════════════════════════════════════════════
   pessoal.js — Orquestrador principal  (v9)
   ✦ Responsabilidade: login, sessão, navegação entre tabs
   ✦ Auto-save via criarSalvador (debounce 800ms + throttle máximo 3s)
   ✦ Fallback em localStorage: protege contra fechamento abrupto da aba
   ✦ Auto-save por visibilitychange (flush imediato)
   ✦ Tela de login oculta até verificação de sessão concluída
   ✦ Toda a lógica de checklist delegada a checklist.js
   ✦ Logs detalhados com prefixo [CHECKLIST]
════════════════════════════════════════════════════════════════════════ */

import { salvarNoFirebase, carregarDoFirebase } from './firebase.js';
import {
    DISCIPLINAS_DATA,
    criarSalvador,
    totalItensDisciplina,
    renderizarPainel,
    coletarCheckboxes,
    restaurarCheckboxes,
    restaurarVideos,
    atualizarProgressoPainel,
    atualizarProgressoTab,
    atualizarProgressoGeral,
    atualizarTodasAsTabs,
} from './checklist.js';

// ── 1. CONFIGURAÇÃO ──────────────────────────────────────────────────────
const SESSION_KEY  = 'pessoal_sessao_usuario';
const FALLBACK_KEY = 'pessoal_fallback_estado';   // localStorage de emergência

/** Janela de debounce (ms sem interação antes de enviar). */
const DEBOUNCE_MS  = 800;
/** Tempo máximo sem salvar no Firebase (throttle). */
const MAX_SEM_SALVAR_MS = 3000;

const USUARIOS = [
    { nome: 'Rafael',   senha: '288' },
    { nome: 'Cid',      senha: '285' },
    { nome: 'Everardo', senha: '334' },
    { nome: 'Alvaro',   senha: '093' },
    { nome: 'Isaac',    senha: '234' }
];

// ── 2. ESTADO ────────────────────────────────────────────────────────────
let usuarioAtual = null;
let discAtiva    = 'design';

/**
 * Fonte de verdade em memória.
 * Sincronizada com Firebase (via criarSalvador) e com localStorage (fallback).
 */
let estado = {
    checklist:        {},
    videosAssistidos: {}
};

// ── 3. ELEMENTOS DO DOM ──────────────────────────────────────────────────
const loginScreen     = document.getElementById('login-screen');
const dashScreen      = document.getElementById('dashboard-screen');
const inputNome       = document.getElementById('input-nome');
const inputSenha      = document.getElementById('input-senha');
const btnEntrar       = document.getElementById('btn-entrar');
const loginError      = document.getElementById('login-error');
const toggleSenha     = document.querySelector('.toggle-senha');
const dashNomeUsuario = document.getElementById('dash-nome-usuario');
const btnSair         = document.getElementById('btn-sair');
const discTabs        = document.getElementById('disc-tabs');
const discPanel       = document.getElementById('disc-panel');

// ── 4. PERSISTÊNCIA DA SESSÃO (localStorage via storage.js) ──────────────
function salvarSessao(nome) {
    try { storage.saveProgress(SESSION_KEY, { nome }, { tipo: 'sessao' }); } catch {}
}
function limparSessao() {
    try { storage.clearProgress(SESSION_KEY); } catch {}
}
function lerSessao() {
    try {
        const s = storage.loadProgress(SESSION_KEY);
        return s?.respostas?.nome ?? null;
    } catch { return null; }
}

// ── 5. FALLBACK LOCAL (localStorage de emergência) ───────────────────────
/**
 * Salva o estado completo no localStorage.
 * Funciona como "seguro": mesmo que o Firebase não seja chamado a tempo,
 * ao reabrir a página o estado local é usado como fallback.
 */
function salvarFallbackLocal() {
    if (!usuarioAtual) return;
    try {
        const chave = `${FALLBACK_KEY}_${usuarioAtual.toLowerCase()}`;
        localStorage.setItem(chave, JSON.stringify({
            checklist:        estado.checklist,
            videosAssistidos: estado.videosAssistidos,
            ts:               Date.now()
        }));
        console.log('[CHECKLIST] 💾 Fallback local salvo');
    } catch (err) {
        console.warn('[CHECKLIST] ⚠️ Não foi possível salvar fallback local:', err);
    }
}

function lerFallbackLocal(nome) {
    try {
        const chave = `${FALLBACK_KEY}_${nome.toLowerCase()}`;
        const raw   = localStorage.getItem(chave);
        return raw ? JSON.parse(raw) : null;
    } catch { return null; }
}

function limparFallbackLocal(nome) {
    try {
        localStorage.removeItem(`${FALLBACK_KEY}_${nome.toLowerCase()}`);
    } catch {}
}

// ── 6. AUTO-SAVE ──────────────────────────────────────────────────────────

/**
 * Envia o estado completo para o Firebase.
 * Também limpa o fallback local ao confirmar o salvamento.
 */
async function sincronizarFirebase() {
    if (!usuarioAtual) return;
    console.log('[CHECKLIST] 🔄 Iniciando sincronização com Firebase...');

    // Salva fallback local ANTES de tentar o Firebase (proteção extra)
    salvarFallbackLocal();

    try {
        await salvarNoFirebase(usuarioAtual, estado.checklist, estado.videosAssistidos);
        // Sucesso: fallback local não é mais necessário
        limparFallbackLocal(usuarioAtual);
        console.log('[CHECKLIST] ✅ Sincronização com Firebase concluída');
    } catch (err) {
        // Firebase falhou, mas o fallback local já está salvo — dados não serão perdidos
        console.error('[CHECKLIST] ❌ Falha na sincronização com Firebase. Fallback local mantido.', err);
    }
}

/**
 * criarSalvador: debounce 800ms + throttle máximo 3s.
 * Garante que, mesmo com cliques contínuos, o Firebase é chamado
 * no máximo a cada 3 segundos — sem depender de pausa do usuário.
 * .flush() força chamada imediata (usado no visibilitychange e logout).
 */
const salvarComDebounce = criarSalvador(sincronizarFirebase, DEBOUNCE_MS, MAX_SEM_SALVAR_MS);

// Salva ao minimizar / trocar aba (flush imediato — sem debounce)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && usuarioAtual) {
        console.log('[CHECKLIST] 👁️ Aba ocultada — coletando painel e fazendo flush imediato');
        coletarPainelAtivo();
        // flush() garante que não esperamos o debounce ao sair da aba
        salvarComDebounce.flush();
    }
});

// ── 7. VERIFICAÇÃO DE SESSÃO (sem flash de login) ─────────────────────────
async function inicializar() {
    const nomeSalvo = lerSessao();

    if (nomeSalvo) {
        usuarioAtual = nomeSalvo;
        console.log(`[CHECKLIST] 🔑 Sessão encontrada — usuário: ${nomeSalvo}`);

        let dados = null;
        try {
            dados = await carregarDoFirebase(usuarioAtual);
        } catch (err) {
            console.warn('[CHECKLIST] ⚠️ Erro ao carregar Firebase na inicialização:', err);
        }

        // Se Firebase falhou ou não tem dados, tenta o fallback local
        if (!dados) {
            const fallback = lerFallbackLocal(nomeSalvo);
            if (fallback) {
                console.log('[CHECKLIST] 🔄 Usando fallback local (Firebase indisponível ou sem dados)');
                dados = fallback;
            }
        }

        aplicarDados(dados);
        mostrarDashboard();
    } else {
        mostrarLogin();
    }
}

function mostrarLogin() {
    loginScreen.classList.add('active');
    dashScreen.classList.remove('active');
}

function mostrarDashboard() {
    loginScreen.classList.remove('active');
    dashScreen.classList.add('active');
    dashNomeUsuario.textContent = usuarioAtual;
    discAtiva = 'design';
    construirTabs();
    ativarDisc(discAtiva);
    console.log(`[CHECKLIST] 🏠 Dashboard exibido — usuário: ${usuarioAtual}`);
}

function aplicarDados(dados) {
    if (!dados) return;
    estado.checklist        = dados.checklist        || {};
    estado.videosAssistidos = dados.videosAssistidos || {};
}

// ── 8. LOGIN / LOGOUT ─────────────────────────────────────────────────────
btnEntrar.addEventListener('click', tentarLogin);
inputNome.addEventListener ('keydown', e => { if (e.key === 'Enter') inputSenha.focus(); });
inputSenha.addEventListener('keydown', e => { if (e.key === 'Enter') tentarLogin(); });

toggleSenha.addEventListener('click', () => {
    const oculta = inputSenha.type === 'password';
    inputSenha.type = oculta ? 'text' : 'password';
    toggleSenha.querySelector('i').className = oculta ? 'fas fa-eye-slash' : 'fas fa-eye';
});

async function tentarLogin() {
    const nome  = inputNome.value.trim();
    const senha = inputSenha.value.trim();

    if (!nome || !senha) { exibirErroLogin('Preencha nome e senha.'); return; }

    const usuario = USUARIOS.find(
        u => u.nome.toLowerCase() === nome.toLowerCase() && u.senha === senha
    );

    if (!usuario) { exibirErroLogin('Nome ou senha incorretos.'); return; }

    loginError.classList.add('hidden');
    setBtnEntrar(true);

    let dados = null;
    try {
        dados = await carregarDoFirebase(usuario.nome);
    } catch (err) {
        console.warn('[CHECKLIST] ⚠️ Erro ao carregar Firebase no login:', err);
    }

    // Fallback local se Firebase falhou
    if (!dados) {
        const fallback = lerFallbackLocal(usuario.nome);
        if (fallback) {
            console.log('[CHECKLIST] 🔄 Login: usando fallback local');
            dados = fallback;
        }
    }

    aplicarDados(dados);
    setBtnEntrar(false);

    usuarioAtual = usuario.nome;
    salvarSessao(usuarioAtual);
    console.log(`[CHECKLIST] 🔓 Login efetuado — usuário: ${usuarioAtual}`);
    mostrarDashboard();
}

function exibirErroLogin(msg) {
    loginError.querySelector('span').textContent = msg;
    loginError.classList.remove('hidden');
    loginError.style.animation = 'none';
    loginError.offsetHeight;
    loginError.style.animation = '';
}

function setBtnEntrar(carregando) {
    btnEntrar.disabled = carregando;
    btnEntrar.innerHTML = carregando
        ? '<i class="fas fa-spinner fa-spin"></i> Carregando...'
        : 'Entrar <i class="fas fa-arrow-right"></i>';
}

btnSair.addEventListener('click', async () => {
    console.log(`[CHECKLIST] 🚪 Saindo — usuário: ${usuarioAtual}. Salvando estado final...`);

    // Coleta e envia de forma síncrona antes de limpar
    coletarPainelAtivo();
    await salvarComDebounce.flush();

    limparSessao();
    limparFallbackLocal(usuarioAtual);
    estado        = { checklist: {}, videosAssistidos: {} };
    usuarioAtual  = null;

    inputNome.value  = '';
    inputSenha.value = '';
    discTabs.innerHTML  = '';
    discPanel.innerHTML = '';

    mostrarLogin();
    console.log('[CHECKLIST] 👋 Logout concluído');
});

// ── 9. TABS / SIDEBAR ────────────────────────────────────────────────────
function construirTabs() {
    discTabs.innerHTML = '';
    Object.entries(DISCIPLINAS_DATA).forEach(([id, disc]) => {
        const total = totalItensDisciplina(id);
        const btn   = document.createElement('button');
        btn.className    = `disc-tab${id === discAtiva ? ' active' : ''}`;
        btn.dataset.disc = id;
        btn.innerHTML = `
            <div class="tab-icon tab-icon-${id}">
                <i class="fas ${disc.icone}"></i>
            </div>
            <div class="tab-info">
                <span class="tab-name">${disc.label}</span>
                <span class="tab-prog" id="tabprog-${id}">0 de ${total}</span>
                <div class="tab-bar">
                    <div class="tab-bar-fill tab-bar-fill-${id}" id="tabfill-${id}" style="width:0%"></div>
                </div>
            </div>
        `;
        btn.addEventListener('click', () => trocarDisc(id));
        discTabs.appendChild(btn);
    });

    atualizarTodasAsTabs(estado.checklist);
}

function trocarDisc(id) {
    if (id === discAtiva) return;
    coletarPainelAtivo();
    discAtiva = id;
    discTabs.querySelectorAll('.disc-tab').forEach(
        t => t.classList.toggle('active', t.dataset.disc === id)
    );
    ativarDisc(id);
    console.log(`[CHECKLIST] 📚 Disciplina ativa: ${id}`);
}

// ── 10. PAINEL ATIVO ──────────────────────────────────────────────────────

function ativarDisc(discId) {
    renderizarPainel(discId, discPanel);
    restaurarCheckboxes(estado.checklist[discId], discPanel);
    restaurarVideos(discId, estado.videosAssistidos[discId], discPanel);

    const { marcados, total } = atualizarProgressoPainel(discId, discPanel);
    atualizarProgressoTab(discId, marcados, total);
    atualizarProgressoGeral(estado.checklist);

    ativarListenersPainel(discId);
}

function ativarListenersPainel(discId) {
    discPanel.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => aoMarcarCheckbox(discId, cb));
    });

    discPanel.querySelectorAll('.vbtn').forEach(btn => {
        btn.addEventListener('click', () =>
            aoClicarVideo(discId, Number(btn.dataset.idx))
        );
    });
}

function aoMarcarCheckbox(discId, cb) {
    const itemId = cb.dataset.item;
    const valor  = cb.checked;
    console.log(`[CHECKLIST] ☑️ Checkbox alterada — disc: ${discId} | item: ${itemId} | marcado: ${valor}`);

    // 1. Atualiza progresso visual imediatamente
    const { marcados, total } = atualizarProgressoPainel(discId, discPanel);
    atualizarProgressoTab(discId, marcados, total);

    // 2. Persiste estado em memória
    estado.checklist[discId] = coletarCheckboxes(discId, discPanel);
    atualizarProgressoGeral(estado.checklist);

    // 3. Salva fallback local imediatamente (proteção contra fechamento abrupto)
    salvarFallbackLocal();

    // 4. Agenda sync com Firebase (debounce + throttle)
    salvarComDebounce();
}

function aoClicarVideo(discId, idx) {
    const btn = discPanel.querySelector(`#vbtn-${discId}-${idx}`);
    if (btn) btn.classList.add('watched');

    if (!estado.videosAssistidos[discId]) estado.videosAssistidos[discId] = [];
    if (!estado.videosAssistidos[discId].includes(idx)) {
        estado.videosAssistidos[discId].push(idx);
        console.log(`[CHECKLIST] 🎬 Vídeo assistido — disc: ${discId} | idx: ${idx}`);
        salvarFallbackLocal();
        salvarComDebounce();
    }
}

function coletarPainelAtivo() {
    if (!usuarioAtual) return;
    estado.checklist[discAtiva] = coletarCheckboxes(discAtiva, discPanel);
}

// ── 11. BOOTSTRAP ─────────────────────────────────────────────────────────
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}