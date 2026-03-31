/* ═══════════════════════════════════════════════════════════════════════
   anotacao.js — v24

   Mudanças v24:
     1. Modal de link: campo "nome" opcional — se preenchido vira o texto
        âncora; caso contrário usa a própria URL como texto.
     2. Persistência migrada para Firebase:
          coleção  → anotacoes/{nome}/notas/{notaId}
        As funções salvarAnotacaoNoFirebase / deletarAnotacaoNoFirebase /
        carregarAnotacoesDoFirebase são importadas de firebase.js.
════════════════════════════════════════════════════════════════════════ */

import {
    salvarAnotacaoNoFirebase,
    deletarAnotacaoNoFirebase,
    carregarAnotacoesDoFirebase,
} from './firebase.js';

const AUTOSAVE_DELAY = 1500;

/* ── Estado global ──────────────────────────────────────────────────── */
const _st = {
    usuario:    null,
    dados:      {},   // { discId: { notaId: nota } } — espelho local do Firebase
    timer:      null,
    toastEl:    null,
    toastTimer: null,
    quillMap:   new WeakMap(),
};


/* ═══════════════════════════════════════════════════════════════════════
   API PÚBLICA
════════════════════════════════════════════════════════════════════════ */

export async function initAnotacoes(usuario) {
    _st.usuario = usuario;
    _st.dados   = {};
    _st.dados   = await carregarAnotacoesDoFirebase(usuario);
    if (!_st.toastEl) _criarToast();
    await _garantirQuill();
}

export function exibirAnotacao(discId, containerEl) {
    _limparPainel(containerEl);
    _renderizarLista(discId, containerEl);
}

export function removerAnotacao(containerEl) {
    _destruirQuill(containerEl);
    containerEl.querySelector('.panel-anotacao')?.remove();
    clearTimeout(_st.timer);
}


/* ═══════════════════════════════════════════════════════════════════════
   QUILL — Bootstrap dinâmico
════════════════════════════════════════════════════════════════════════ */

async function _garantirQuill() {
    if (window.Quill) return;
    await Promise.all([
        _carregarScript('https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js'),
        _carregarCSS('https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css'),
    ]);
}

function _carregarScript(src) {
    return new Promise((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
        const s = document.createElement('script');
        s.src = src; s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
    });
}

function _carregarCSS(href) {
    return new Promise(res => {
        if (document.querySelector(`link[href="${href}"]`)) { res(); return; }
        const l = document.createElement('link');
        l.rel  = 'stylesheet'; l.href = href; l.onload = res;
        document.head.appendChild(l);
    });
}

function _criarQuill(containerEl, conteudoDelta) {
    const editorMount = containerEl.querySelector('.ql-mount');
    if (!editorMount) return null;

    const quill = new window.Quill(editorMount, {
        theme: 'snow',
        modules: { toolbar: false, history: { delay: 400, maxStack: 100 } },
        placeholder: 'Comece a escrever…',
        formats: ['bold','italic','underline','strike','code','link',
                  'header','blockquote','code-block',
                  'list','indent','color','background'],
    });

    if (conteudoDelta) {
        try { quill.setContents(JSON.parse(conteudoDelta)); } catch(_) {}
    }

    quill.setSelection(quill.getLength(), 0);
    _st.quillMap.set(containerEl, quill);
    return quill;
}

function _destruirQuill(containerEl) {
    const quill = _st.quillMap.get(containerEl);
    if (quill) {
        quill.off('text-change');
        quill.off('selection-change');
        _st.quillMap.delete(containerEl);
    }
}

function _getQuill(containerEl) {
    return _st.quillMap.get(containerEl) ?? null;
}


/* ═══════════════════════════════════════════════════════════════════════
   STORAGE — Firebase
════════════════════════════════════════════════════════════════════════ */

async function _persistirNota(discId, id) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return;
    try {
        await salvarAnotacaoNoFirebase(_st.usuario, { ...nota, discId });
    } catch (err) {
        console.warn('[Anotacao] Falha ao salvar no Firebase', err);
    }
}

async function _deletarNotaFirebase(id) {
    try {
        await deletarAnotacaoNoFirebase(_st.usuario, id);
    } catch (err) {
        console.warn('[Anotacao] Falha ao deletar no Firebase', err);
    }
}

function _agendarSalvamento(discId, id, quill, statusEl) {
    clearTimeout(_st.timer);
    _atualizarStatus(statusEl, false);
    _st.timer = setTimeout(async () => {
        _capturarQuill(discId, id, quill);
        await _persistirNota(discId, id);
        _atualizarStatus(statusEl, true);
        _mostrarToast('Salvo automaticamente');
    }, AUTOSAVE_DELAY);
}


/* ═══════════════════════════════════════════════════════════════════════
   CRUD
════════════════════════════════════════════════════════════════════════ */

function _listarOrdenado(discId) {
    return Object.values(_st.dados[discId] ?? {})
        .sort((a, b) => b.editadoEm - a.editadoEm);
}

function _criarNota(discId, titulo) {
    if (!_st.dados[discId]) _st.dados[discId] = {};
    const agora = Date.now();
    const id    = `nota_${agora}`;
    const nota  = {
        id,
        titulo: titulo.trim() || 'Sem título',
        delta: '',
        discId,
        criadoEm: agora,
        editadoEm: agora,
    };
    _st.dados[discId][id] = nota;
    salvarAnotacaoNoFirebase(_st.usuario, nota).catch(err =>
        console.warn('[Anotacao] Falha ao criar nota no Firebase', err)
    );
    return nota;
}

function _deletarNota(discId, id) {
    delete _st.dados[discId]?.[id];
    _deletarNotaFirebase(id);
}

function _renomearNota(discId, id, novoTitulo) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return false;
    const novo = novoTitulo.trim() || nota.titulo;
    if (novo === nota.titulo) return false;
    nota.titulo    = novo;
    nota.editadoEm = Date.now();
    salvarAnotacaoNoFirebase(_st.usuario, { ...nota, discId }).catch(err =>
        console.warn('[Anotacao] Falha ao renomear nota no Firebase', err)
    );
    return true;
}

function _capturarQuill(discId, id, quill) {
    const nota = _st.dados[discId]?.[id];
    if (!nota || !quill) return;
    nota.delta     = JSON.stringify(quill.getContents());
    nota.editadoEm = Date.now();
}


/* ═══════════════════════════════════════════════════════════════════════
   LÓGICA DE LISTA
════════════════════════════════════════════════════════════════════════ */

function _toggleLista(quill, tipo) {
    const sel = quill.getSelection(true);
    if (!sel) return;

    const [inicioLinha] = quill.getLine(sel.index);
    const inicioIdx     = quill.getIndex(inicioLinha);

    const fimIdx = sel.index + sel.length;
    const [fimLinha] = quill.getLine(fimIdx);
    const fimIdxLinha = quill.getIndex(fimLinha) + fimLinha.length();

    const comprimento = fimIdxLinha - inicioIdx;

    let todasFormatadas = true;
    let cursor = inicioIdx;
    while (cursor < inicioIdx + comprimento) {
        const [linha] = quill.getLine(cursor);
        if (!linha) break;
        const fmt = quill.getFormat(cursor, 1);
        if (fmt.list !== tipo) { todasFormatadas = false; break; }
        cursor += linha.length();
    }

    const novoTipo = todasFormatadas ? false : tipo;
    quill.formatLine(inicioIdx, comprimento, 'list', novoTipo, 'user');
    quill.setSelection(sel.index, sel.length, 'silent');
}


/* ═══════════════════════════════════════════════════════════════════════
   CÓDIGO: usa code-block
════════════════════════════════════════════════════════════════════════ */

function _toggleCodeBlock(quill) {
    const sel = quill.getSelection(true);
    if (!sel) return;

    const [inicioLinha] = quill.getLine(sel.index);
    const inicioIdx     = quill.getIndex(inicioLinha);

    const fimIdx = sel.index + sel.length;
    const [fimLinha] = quill.getLine(fimIdx);
    const fimIdxLinha = quill.getIndex(fimLinha) + fimLinha.length();

    const comprimento = Math.max(fimIdxLinha - inicioIdx, 1);
    const fmt = quill.getFormat(inicioIdx, comprimento);
    quill.formatLine(inicioIdx, comprimento, 'code-block', !fmt['code-block'], 'user');
    quill.setSelection(sel.index, sel.length, 'silent');
}


/* ═══════════════════════════════════════════════════════════════════════
   MODAL "NOVA ANOTAÇÃO" / RENOMEAR
════════════════════════════════════════════════════════════════════════ */

function _pedirNomeNota(discId, containerEl) {
    _abrirModal({
        titulo: 'Nova anotação', icone: 'fa-pen-to-square',
        label: 'Nome', placeholder: 'Ex: Resumo da aula',
        btnLabel: 'Criar', btnIcone: 'fa-plus', valorInicial: '',
        onConfirmar(nome) {
            _criarNota(discId, nome);
            _limparPainel(containerEl);
            _renderizarLista(discId, containerEl);
        }
    });
}

function _pedirNomeRename(discId, id, tituloEl, dataEl) {
    const valorAtual = _st.dados[discId]?.[id]?.titulo ?? '';
    _abrirModal({
        titulo: 'Renomear anotação', icone: 'fa-pencil',
        label: 'Novo nome', placeholder: 'Digite o novo nome…',
        btnLabel: 'Salvar', btnIcone: 'fa-check', valorInicial: valorAtual,
        onConfirmar(novo) {
            const mudou = _renomearNota(discId, id, novo);
            if (mudou) {
                if (tituloEl) tituloEl.textContent = novo;
                if (dataEl)   dataEl.textContent   = _formatarData(Date.now());
                _mostrarToast('Título atualizado');
            }
        }
    });
}

function _abrirModal({ titulo, icone, label, placeholder, btnLabel, btnIcone, valorInicial, onConfirmar }) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed;inset:0;z-index:2000;
        background:rgba(0,0,0,.55);backdrop-filter:blur(6px);
        display:flex;align-items:center;justify-content:center;
        animation:fadeIn .18s ease both;`;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background:#161616;border:1px solid rgba(255,255,255,.1);
        border-radius:16px;padding:1.6rem 1.8rem 1.4rem;
        width:90%;max-width:360px;box-shadow:0 24px 60px rgba(0,0,0,.6);
        display:flex;flex-direction:column;gap:1rem;
        animation:ckFadeUp .22s ease both;`;

    modal.innerHTML = `
        <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(124,90,243,.15);border:1px solid rgba(124,90,243,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas ${icone}" style="font-size:.72rem;color:#a78bfa;"></i>
            </div>
            <span style="font-size:.92rem;font-weight:700;color:#eaeaea;font-family:'DM Sans',sans-serif;">${titulo}</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:.4rem;">
            <label style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;font-family:'DM Sans',sans-serif;">${label}</label>
            <input id="_modal_inp" maxlength="60" placeholder="${placeholder}"
                style="font-family:'DM Sans',sans-serif;font-size:.88rem;font-weight:600;color:#eaeaea;
                       background:rgba(255,255,255,.06);border:1px solid rgba(124,90,243,.35);
                       border-radius:8px;padding:.55rem .85rem;outline:none;width:100%;
                       letter-spacing:-.01em;transition:border-color .18s;box-sizing:border-box;"/>
            <span id="_modal_counter" style="font-size:.65rem;color:rgba(255,255,255,.25);align-self:flex-end;">${valorInicial.length}/60</span>
        </div>
        <div style="display:flex;gap:.5rem;justify-content:flex-end;">
            <button id="_modal_canc" style="display:inline-flex;align-items:center;gap:.35rem;padding:.38rem .85rem;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.45);font-family:'DM Sans',sans-serif;font-size:.78rem;cursor:pointer;">
                <i class="fas fa-xmark" style="font-size:.7rem;"></i> Cancelar
            </button>
            <button id="_modal_ok" style="display:inline-flex;align-items:center;gap:.35rem;padding:.38rem .9rem;border-radius:8px;border:1px solid rgba(124,90,243,.35);background:rgba(124,90,243,.15);color:#a78bfa;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;cursor:pointer;">
                <i class="fas ${btnIcone}" style="font-size:.7rem;"></i> ${btnLabel}
            </button>
        </div>`;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const inp     = modal.querySelector('#_modal_inp');
    const counter = modal.querySelector('#_modal_counter');
    const btnOk   = modal.querySelector('#_modal_ok');
    const btnCanc = modal.querySelector('#_modal_canc');

    inp.value = valorInicial;
    inp.focus();
    if (valorInicial) inp.setSelectionRange(valorInicial.length, valorInicial.length);

    inp.addEventListener('input', () => {
        const l = inp.value.length;
        counter.textContent   = `${l}/60`;
        counter.style.color   = l >= 55 ? 'rgba(239,68,68,.65)' : 'rgba(255,255,255,.25)';
        inp.style.borderColor = l >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.35)';
    });
    inp.addEventListener('focus', () => {
        inp.style.borderColor = inp.value.length >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.6)';
    });

    const fechar    = () => overlay.remove();
    const confirmar = () => {
        const val = inp.value.trim();
        if (!val) {
            inp.style.borderColor = 'rgba(239,68,68,.5)';
            inp.placeholder = 'Digite um nome para continuar';
            inp.focus(); return;
        }
        fechar(); onConfirmar(val);
    };

    btnOk.addEventListener('click', confirmar);
    btnCanc.addEventListener('click', fechar);
    inp.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); confirmar(); }
        if (e.key === 'Escape') fechar();
    });
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) fechar(); });

    const hov = (btn, onIn, onOut) => {
        btn.addEventListener('mouseenter', onIn);
        btn.addEventListener('mouseleave', onOut);
    };
    hov(btnOk,
        () => { btnOk.style.background = 'rgba(124,90,243,.25)'; btnOk.style.borderColor = 'rgba(124,90,243,.55)'; },
        () => { btnOk.style.background = 'rgba(124,90,243,.15)'; btnOk.style.borderColor = 'rgba(124,90,243,.35)'; }
    );
    hov(btnCanc,
        () => { btnCanc.style.background = 'rgba(255,255,255,.08)'; btnCanc.style.color = 'rgba(255,255,255,.75)'; },
        () => { btnCanc.style.background = 'rgba(255,255,255,.04)'; btnCanc.style.color = 'rgba(255,255,255,.45)'; }
    );
}


/* ═══════════════════════════════════════════════════════════════════════
   MODAL DE LINK  (v24 — campo "nome" opcional)
════════════════════════════════════════════════════════════════════════ */

function _abrirModalLink(textoSelecionado, onConfirmar) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position:fixed;inset:0;z-index:2000;
        background:rgba(0,0,0,.55);backdrop-filter:blur(6px);
        display:flex;align-items:center;justify-content:center;
        animation:fadeIn .18s ease both;`;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background:#161616;border:1px solid rgba(255,255,255,.1);
        border-radius:16px;padding:1.6rem 1.8rem 1.4rem;
        width:90%;max-width:420px;box-shadow:0 24px 60px rgba(0,0,0,.6);
        display:flex;flex-direction:column;gap:1rem;
        animation:ckFadeUp .22s ease both;`;

    /* Campo "nome" fica oculto se já há texto selecionado no editor,
       pois o texto selecionado já será o âncora. */
    const temTextoSelecionado = textoSelecionado.trim().length > 0;

    modal.innerHTML = `
        <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(96,174,245,.12);border:1px solid rgba(96,174,245,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas fa-link" style="font-size:.72rem;color:#60aef5;"></i>
            </div>
            <span style="font-size:.92rem;font-weight:700;color:#eaeaea;font-family:'DM Sans',sans-serif;">Inserir link</span>
        </div>

        <!-- URL -->
        <div style="display:flex;flex-direction:column;gap:.35rem;">
            <label style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;font-family:'DM Sans',sans-serif;">
                URL <span style="color:rgba(239,68,68,.6);">*</span>
            </label>
            <input id="_link_url" maxlength="500" placeholder="https://..."
                style="font-family:'DM Sans',sans-serif;font-size:.88rem;color:#eaeaea;
                       background:rgba(255,255,255,.06);border:1px solid rgba(96,174,245,.35);
                       border-radius:8px;padding:.5rem .85rem;outline:none;width:100%;
                       transition:border-color .18s;box-sizing:border-box;"/>
        </div>

        <!-- Nome (âncora) — só aparece quando não há texto selecionado -->
        ${temTextoSelecionado ? '' : `
        <div style="display:flex;flex-direction:column;gap:.35rem;">
            <label style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;font-family:'DM Sans',sans-serif;">
                Nome <span style="color:rgba(255,255,255,.2);font-weight:400;">(opcional — padrão: URL)</span>
            </label>
            <input id="_link_nome" maxlength="120" placeholder="Ex: Documentação oficial"
                style="font-family:'DM Sans',sans-serif;font-size:.88rem;color:#eaeaea;
                       background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
                       border-radius:8px;padding:.5rem .85rem;outline:none;width:100%;
                       transition:border-color .18s;box-sizing:border-box;"/>
        </div>`}

        <div style="display:flex;gap:.5rem;justify-content:flex-end;">
            <button id="_link_canc" style="display:inline-flex;align-items:center;gap:.35rem;padding:.38rem .85rem;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:rgba(255,255,255,.45);font-family:'DM Sans',sans-serif;font-size:.78rem;cursor:pointer;">
                <i class="fas fa-xmark" style="font-size:.7rem;"></i> Cancelar
            </button>
            <button id="_link_ok" style="display:inline-flex;align-items:center;gap:.35rem;padding:.38rem .9rem;border-radius:8px;border:1px solid rgba(96,174,245,.35);background:rgba(96,174,245,.12);color:#60aef5;font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;cursor:pointer;">
                <i class="fas fa-link" style="font-size:.7rem;"></i> Inserir
            </button>
        </div>`;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const inpUrl  = modal.querySelector('#_link_url');
    const inpNome = modal.querySelector('#_link_nome'); // pode ser null
    const btnOk   = modal.querySelector('#_link_ok');
    const btnCanc = modal.querySelector('#_link_canc');

    inpUrl.focus();

    /* Estilo focus */
    const focusBorder = (el, cor) => {
        el.addEventListener('focus', () => el.style.borderColor = cor);
        el.addEventListener('blur',  () => el.style.borderColor = el === inpUrl
            ? 'rgba(96,174,245,.35)'
            : 'rgba(255,255,255,.12)');
    };
    focusBorder(inpUrl, 'rgba(96,174,245,.65)');
    if (inpNome) focusBorder(inpNome, 'rgba(255,255,255,.3)');

    const fechar    = () => overlay.remove();
    const confirmar = () => {
        let url = inpUrl.value.trim();
        if (!url) {
            inpUrl.style.borderColor = 'rgba(239,68,68,.5)';
            inpUrl.focus(); return;
        }
        if (!/^https?:\/\//i.test(url)) url = 'https://' + url;

        /* Texto âncora: texto selecionado > campo nome > URL */
        const nome = temTextoSelecionado
            ? textoSelecionado          // usa a seleção já existente no editor
            : (inpNome?.value.trim() || url);

        fechar();
        onConfirmar(url, nome);
    };

    btnOk.addEventListener('click', confirmar);
    btnCanc.addEventListener('click', fechar);

    [inpUrl, inpNome].forEach(el => {
        el?.addEventListener('keydown', e => {
            if (e.key === 'Enter')  { e.preventDefault(); confirmar(); }
            if (e.key === 'Escape') fechar();
        });
    });
    overlay.addEventListener('mousedown', e => { if (e.target === overlay) fechar(); });

    btnOk.addEventListener('mouseenter',   () => { btnOk.style.background = 'rgba(96,174,245,.22)';  btnOk.style.borderColor = 'rgba(96,174,245,.55)'; });
    btnOk.addEventListener('mouseleave',   () => { btnOk.style.background = 'rgba(96,174,245,.12)';  btnOk.style.borderColor = 'rgba(96,174,245,.35)'; });
    btnCanc.addEventListener('mouseenter', () => { btnCanc.style.background = 'rgba(255,255,255,.08)'; btnCanc.style.color = 'rgba(255,255,255,.75)'; });
    btnCanc.addEventListener('mouseleave', () => { btnCanc.style.background = 'rgba(255,255,255,.04)'; btnCanc.style.color = 'rgba(255,255,255,.45)'; });
}


/* ═══════════════════════════════════════════════════════════════════════
   LISTA DE NOTAS
════════════════════════════════════════════════════════════════════════ */

function _limparPainel(el) {
    ['.panel-videos','.panel-modules','.panel-resumos','.panel-anotacao']
        .forEach(s => el.querySelector(s)?.remove());
}

function _renderizarLista(discId, containerEl) {
    _destruirQuill(containerEl);
    const notas   = _listarOrdenado(discId);
    const wrapper = document.createElement('div');
    wrapper.className    = 'panel-anotacao';
    wrapper.dataset.disc = discId;

    const header = document.createElement('div');
    header.className = 'anot-list-header';
    header.innerHTML = `
        <div class="anot-list-header-left">
            <span class="anot-list-label"><i class="fas fa-pen-to-square"></i> Anotações</span>
            <span class="anot-list-count">${notas.length} nota${notas.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="anot-btn-nova"><i class="fas fa-plus"></i> Nova anotação</button>`;
    wrapper.appendChild(header);

    const lista = document.createElement('div');
    lista.className = 'anot-lista';
    if (notas.length === 0) {
        lista.innerHTML = `<div class="anot-vazio">
            <i class="fas fa-pen-to-square"></i>
            <p>Nenhuma anotação ainda.</p>
            <span>Clique em "Nova anotação" para começar.</span></div>`;
    } else {
        notas.forEach(n => lista.appendChild(_criarCardNota(discId, n, containerEl)));
    }
    wrapper.appendChild(lista);
    containerEl.appendChild(wrapper);

    header.querySelector('.anot-btn-nova').addEventListener('click', () =>
        _pedirNomeNota(discId, containerEl));
}

function _criarCardNota(discId, nota, containerEl) {
    const card = document.createElement('div');
    card.className  = 'anot-card';
    card.dataset.id = nota.id;

    const preview = _gerarPreviewDelta(nota.delta);

    card.innerHTML = `
        <div class="anot-card-main">
            <div class="anot-card-icon"><i class="fas fa-file-pen"></i></div>
            <div class="anot-card-info">
                <span class="anot-card-titulo">${_esc(nota.titulo)}</span>
                <span class="anot-card-preview">${preview || 'Sem conteúdo'}</span>
            </div>
            <span class="anot-card-data">${_formatarData(nota.editadoEm)}</span>
        </div>
        <div class="anot-card-actions">
            <button class="anot-card-btn btn-renomear"><i class="fas fa-pencil"></i> Renomear</button>
            <button class="anot-card-btn btn-deletar"><i class="fas fa-trash-can"></i> Deletar</button>
        </div>`;

    card.querySelector('.anot-card-main').addEventListener('click', () =>
        _abrirEditor(discId, nota.id, containerEl));
    card.querySelector('.btn-renomear').addEventListener('click', e => {
        e.stopPropagation();
        _pedirNomeRename(discId, nota.id,
            card.querySelector('.anot-card-titulo'),
            card.querySelector('.anot-card-data'));
    });
    card.querySelector('.btn-deletar').addEventListener('click', e => {
        e.stopPropagation();
        _confirmarDeletar(discId, nota.id, card, containerEl);
    });
    return card;
}


/* ═══════════════════════════════════════════════════════════════════════
   DELETAR
════════════════════════════════════════════════════════════════════════ */

function _confirmarDeletar(discId, id, cardEl, containerEl) {
    const actions = cardEl.querySelector('.anot-card-actions');
    actions.innerHTML = `
        <span class="anot-confirm-txt">Tem certeza?</span>
        <button class="anot-card-btn btn-confirmar-sim"><i class="fas fa-check"></i> Sim, deletar</button>
        <button class="anot-card-btn btn-confirmar-nao"><i class="fas fa-xmark"></i> Cancelar</button>`;

    actions.querySelector('.btn-confirmar-sim').addEventListener('click', e => {
        e.stopPropagation();
        _deletarNota(discId, id);
        cardEl.classList.add('anot-card-saindo');
        cardEl.addEventListener('transitionend', () => {
            cardEl.remove();
            const wrapper = containerEl.querySelector('.panel-anotacao');
            const total   = wrapper?.querySelectorAll('.anot-card').length ?? 0;
            const countEl = wrapper?.querySelector('.anot-list-count');
            if (countEl) countEl.textContent = `${total} nota${total !== 1 ? 's' : ''}`;
            if (total === 0) {
                const lst = wrapper?.querySelector('.anot-lista');
                if (lst) lst.innerHTML = `<div class="anot-vazio">
                    <i class="fas fa-pen-to-square"></i>
                    <p>Nenhuma anotação ainda.</p>
                    <span>Clique em "Nova anotação" para começar.</span></div>`;
            }
        }, { once: true });
        _mostrarToast('Anotação deletada');
    });
    actions.querySelector('.btn-confirmar-nao').addEventListener('click', e => {
        e.stopPropagation();
        _rebuildCardActions(discId, id, cardEl, containerEl);
    });
}

function _rebuildCardActions(discId, id, cardEl, containerEl) {
    const actions = cardEl.querySelector('.anot-card-actions');
    actions.innerHTML = `
        <button class="anot-card-btn btn-renomear"><i class="fas fa-pencil"></i> Renomear</button>
        <button class="anot-card-btn btn-deletar"><i class="fas fa-trash-can"></i> Deletar</button>`;
    actions.querySelector('.btn-renomear').addEventListener('click', e => {
        e.stopPropagation();
        _pedirNomeRename(discId, id,
            cardEl.querySelector('.anot-card-titulo'),
            cardEl.querySelector('.anot-card-data'));
    });
    actions.querySelector('.btn-deletar').addEventListener('click', e => {
        e.stopPropagation();
        _confirmarDeletar(discId, id, cardEl, containerEl);
    });
}


/* ═══════════════════════════════════════════════════════════════════════
   EDITOR — Abrir
════════════════════════════════════════════════════════════════════════ */

async function _abrirEditor(discId, id, containerEl) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return;
    const wrapper = containerEl.querySelector('.panel-anotacao');
    if (!wrapper) return;

    wrapper.innerHTML = `<div class="anot-loading">
        <i class="fas fa-circle-notch fa-spin"></i>
        <span>Abrindo editor…</span></div>`;

    await _garantirQuill();
    await new Promise(r => setTimeout(r, 60));

    wrapper.innerHTML = '';
    const frag = _buildEditorDOM(discId, id, nota);
    wrapper.appendChild(frag);

    const quill    = _criarQuill(containerEl, nota.delta);
    const statusEl = wrapper.querySelector('.anot-editor-status');

    if (!quill) return;

    quill.on('text-change', () => {
        _agendarSalvamento(discId, id, quill, statusEl);
        _atualizarWC(wrapper, quill);
        _sincronizarToolbar(wrapper, quill);
    });
    quill.on('selection-change', () => {
        _sincronizarToolbar(wrapper, quill);
    });

    quill.keyboard.addBinding({ key: 'Tab' }, () => false);
    quill.keyboard.addBinding({ key: 'Tab', shiftKey: true }, () => false);

    quill.keyboard.addBinding({ key: 'Backspace' }, function(range, context) {
        if (!range || range.length !== 0) return true;
        const fmt = quill.getFormat(range.index, 1);
        if (!fmt['code-block']) return true;
        const [linha] = quill.getLine(range.index);
        if (!linha) return true;
        if (linha.length() === 1) {
            quill.formatLine(range.index, 1, 'code-block', false, 'user');
            return false;
        }
        const inicioIdx = quill.getIndex(linha);
        if (range.index === inicioIdx) {
            quill.formatLine(range.index, 1, 'code-block', false, 'user');
            return false;
        }
        return true;
    });

    _montarToolbar(discId, id, wrapper, containerEl, quill, statusEl);
    _atualizarWC(wrapper, quill);
    _sincronizarToolbar(wrapper, quill);
    quill.focus();

    wrapper.querySelector('.ql-editor').addEventListener('click', e => {
        const a = e.target.closest('a');
        if (!a) return;
        e.preventDefault();
        window.open(a.href, '_blank', 'noopener,noreferrer');
    });
}


/* ═══════════════════════════════════════════════════════════════════════
   EDITOR — Toolbar
════════════════════════════════════════════════════════════════════════ */

function _montarToolbar(discId, id, wrapper, containerEl, quill, statusEl) {
    const toolbar = wrapper.querySelector('.anot-toolbar');
    if (!toolbar) return;

    /* ── Voltar ─────────────────────────────────────────────── */
    wrapper.querySelector('.anot-btn-voltar').addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id, quill);
        await _persistirNota(discId, id);
        _destruirQuill(containerEl);
        _limparPainel(containerEl);
        _renderizarLista(discId, containerEl);
    });

    /* ── Salvar ─────────────────────────────────────────────── */
    wrapper.querySelector('.anot-btn-salvar').addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id, quill);
        await _persistirNota(discId, id);
        _atualizarStatus(statusEl, true);
        _mostrarToast('Anotação salva');
    });

    /* Ctrl+S */
    const atalhoSave = e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            wrapper.querySelector('.anot-btn-salvar')?.click();
        }
        if (!wrapper.isConnected) document.removeEventListener('keydown', atalhoSave);
    };
    document.addEventListener('keydown', atalhoSave);

    /* ── Título ─────────────────────────────────────────────── */
    wrapper.querySelector('.anot-editor-titulo-display').addEventListener('click', () => {
        _pedirNomeRename(discId, id, wrapper.querySelector('.anot-editor-titulo-display'), null);
    });

    /* ── Select de heading ──────────────────────────────────── */
    const selHeading = toolbar.querySelector('.anot-tb-select');
    selHeading?.addEventListener('change', () => {
        const val = selHeading.value;
        const sel = quill.getSelection(true);
        if (!sel) return;
        quill.formatLine(sel.index, sel.length || 1, 'header', val === '0' ? false : parseInt(val), 'user');
        selHeading.blur();
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });

    /* ── Formatação inline ──────────────────────────────────── */
    const btnSimples = [
        ['bold',      () => quill.format('bold',      !quill.getFormat().bold,      'user')],
        ['italic',    () => quill.format('italic',    !quill.getFormat().italic,    'user')],
        ['underline', () => quill.format('underline', !quill.getFormat().underline, 'user')],
        ['strike',    () => quill.format('strike',    !quill.getFormat().strike,    'user')],
    ];
    btnSimples.forEach(([cmd, fn]) => {
        toolbar.querySelector(`[data-cmd="${cmd}"]`)?.addEventListener('mousedown', e => {
            e.preventDefault(); fn();
            setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
        });
    });

    /* ── Code-block ─────────────────────────────────────────── */
    toolbar.querySelector('[data-cmd="code"]')?.addEventListener('mousedown', e => {
        e.preventDefault();
        _toggleCodeBlock(quill);
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });

    /* ── Blockquote ─────────────────────────────────────────── */
    toolbar.querySelector('[data-cmd="quote"]')?.addEventListener('mousedown', e => {
        e.preventDefault();
        const sel = quill.getSelection(true);
        if (!sel) return;
        const fmt = quill.getFormat(sel.index, sel.length);
        quill.formatLine(sel.index, sel.length || 1, 'blockquote', !fmt.blockquote, 'user');
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });

    /* ── Listas ─────────────────────────────────────────────── */
    toolbar.querySelector('[data-cmd="ol"]')?.addEventListener('mousedown', e => {
        e.preventDefault(); _toggleLista(quill, 'ordered');
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });
    toolbar.querySelector('[data-cmd="ul"]')?.addEventListener('mousedown', e => {
        e.preventDefault(); _toggleLista(quill, 'bullet');
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });
    toolbar.querySelector('[data-cmd="check"]')?.addEventListener('mousedown', e => {
        e.preventDefault(); _toggleLista(quill, 'unchecked');
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });

    /* ── Link → modal customizado (v24) ─────────────────────── */
    toolbar.querySelector('[data-cmd="link"]')?.addEventListener('mousedown', e => {
        e.preventDefault();
        const sel      = quill.getSelection();
        const textoSel = sel && sel.length > 0 ? quill.getText(sel.index, sel.length) : '';

        _abrirModalLink(textoSel, (url, nome) => {
            quill.focus();
            const selAtual = quill.getSelection() ?? sel;
            if (!selAtual) return;

            if (selAtual.length > 0) {
                /* Há texto selecionado: apenas aplica o link */
                quill.formatText(selAtual.index, selAtual.length, 'link', url, 'user');
            } else {
                /* Sem seleção: insere o nome (ou URL) como texto âncora */
                quill.insertText(selAtual.index, nome, 'link', url, 'user');
                quill.formatText(selAtual.index + nome.length, 1, 'link', false, 'user');
                quill.setSelection(selAtual.index + nome.length, 0, 'silent');
            }

            setTimeout(() => {
                containerEl.querySelectorAll('.ql-editor a').forEach(a => {
                    a.setAttribute('target', '_blank');
                    a.setAttribute('rel', 'noopener noreferrer');
                });
                _sincronizarToolbar(wrapper, quill);
            }, 30);
        });
    });

    /* ── COLOR PICKER CUSTOM ────────────────────────────────── */
    const colorBtn = toolbar.querySelector('.anot-color-wrap');
    const colorDot = toolbar.querySelector('.anot-color-dot');
    let _selSalva  = null;

    colorBtn?.addEventListener('mousedown', e => {
        e.preventDefault(); e.stopPropagation();
        _selSalva = quill.getSelection();
        const existente = document.querySelector('.anot-color-popup');
        if (existente) { existente.remove(); return; }
        _abrirColorPopup(colorBtn, colorDot, cor => {
            if (_selSalva && _selSalva.length > 0) {
                quill.setSelection(_selSalva.index, _selSalva.length, 'silent');
                quill.formatText(_selSalva.index, _selSalva.length, 'color', cor, 'user');
            } else {
                quill.format('color', cor, 'user');
            }
            if (colorDot) colorDot.style.background = cor;
            setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
        });
    });

    quill.on('selection-change', () => {
        const sel = quill.getSelection();
        if (!sel) return;
        const fmt = quill.getFormat(sel.index, sel.length);
        if (colorDot) {
            colorDot.style.background = fmt.color
                ? _rgbParaHex(fmt.color)
                : '#ffffff';
        }
    });

    /* ── Limpar formatação ──────────────────────────────────── */
    toolbar.querySelector('[data-cmd="clear"]')?.addEventListener('mousedown', e => {
        e.preventDefault();
        const sel = quill.getSelection(true);
        if (!sel) return;
        quill.removeFormat(sel.index, sel.length, 'user');
        setTimeout(() => _sincronizarToolbar(wrapper, quill), 30);
    });

    /* ── Undo / Redo ────────────────────────────────────────── */
    toolbar.querySelector('[data-cmd="undo"]')?.addEventListener('mousedown', e => {
        e.preventDefault(); quill.history.undo();
    });
    toolbar.querySelector('[data-cmd="redo"]')?.addEventListener('mousedown', e => {
        e.preventDefault(); quill.history.redo();
    });
}


/* ═══════════════════════════════════════════════════════════════════════
   COLOR POPUP
════════════════════════════════════════════════════════════════════════ */

const _COR_PALETA = [
    { hex: '#ffffff', label: 'Branco'     },
    { hex: '#a1a1aa', label: 'Cinza'      },
    { hex: '#71717a', label: 'Cinza esc.' },
    { hex: '#18181b', label: 'Preto'      },
    { hex: '#ef4444', label: 'Vermelho'   },
    { hex: '#f97316', label: 'Laranja'    },
    { hex: '#f59e0b', label: 'Âmbar'      },
    { hex: '#22c55e', label: 'Verde'      },
    { hex: '#06b6d4', label: 'Ciano'      },
    { hex: '#3b82f6', label: 'Azul'       },
    { hex: '#8b5cf6', label: 'Violeta'    },
    { hex: '#a78bfa', label: 'Lavanda'    },
    { hex: '#fda4af', label: 'Rosa'       },
    { hex: '#fed7aa', label: 'Pêssego'    },
    { hex: '#bbf7d0', label: 'Menta'      },
    { hex: '#bfdbfe', label: 'Azul claro' },
];

const _COR_CLARA = new Set(['#ffffff','#fda4af','#fed7aa','#bbf7d0','#bfdbfe']);

function _abrirColorPopup(anchorEl, dotEl, onPick) {
    const popup = document.createElement('div');
    popup.className = 'anot-color-popup';
    popup.innerHTML = `
        <div class="anot-cp-header">
            <span class="anot-cp-title"><i class="fas fa-palette"></i> Cor do texto</span>
            <button class="anot-cp-reset" title="Remover cor">
                <i class="fas fa-rotate-left"></i> Padrão
            </button>
        </div>
        <div class="anot-cp-grid"></div>`;

    const grid = popup.querySelector('.anot-cp-grid');
    _COR_PALETA.forEach(({ hex, label }) => {
        const sw = document.createElement('button');
        sw.className        = 'anot-cp-swatch';
        sw.title            = label;
        sw.dataset.hex      = hex;
        sw.style.background = hex;
        if (_COR_CLARA.has(hex)) sw.style.border = '1.5px solid rgba(255,255,255,.2)';
        sw.addEventListener('mousedown', e => {
            e.preventDefault(); e.stopPropagation();
            if (dotEl) dotEl.style.background = hex;
            onPick(hex);
            popup.remove();
            document.removeEventListener('mousedown', _fecharFora, true);
        });
        grid.appendChild(sw);
    });

    popup.querySelector('.anot-cp-reset').addEventListener('mousedown', e => {
        e.preventDefault(); e.stopPropagation();
        if (dotEl) dotEl.style.background = '#ffffff';
        onPick(false);
        popup.remove();
        document.removeEventListener('mousedown', _fecharFora, true);
    });

    document.body.appendChild(popup);

    const rect = anchorEl.getBoundingClientRect();
    const pw   = popup.offsetWidth  || 196;
    const ph   = popup.offsetHeight || 148;
    const vw   = window.innerWidth;
    const vh   = window.innerHeight;
    let top    = rect.bottom + window.scrollY + 6;
    let left   = rect.left   + window.scrollX;
    if (left + pw > vw - 8) left = vw - pw - 8;
    if (top  + ph > vh + window.scrollY - 8) top = rect.top + window.scrollY - ph - 6;
    popup.style.top  = `${top}px`;
    popup.style.left = `${left}px`;

    function _fecharFora(e) {
        if (!popup.contains(e.target) && e.target !== anchorEl) {
            popup.remove();
            document.removeEventListener('mousedown', _fecharFora, true);
        }
    }
    setTimeout(() => document.addEventListener('mousedown', _fecharFora, true), 0);

    const _fecharEsc = e => {
        if (e.key === 'Escape') {
            popup.remove();
            document.removeEventListener('keydown', _fecharEsc);
        }
    };
    document.addEventListener('keydown', _fecharEsc);
}

function _rgbParaHex(cor) {
    if (!cor) return '#ffffff';
    if (cor.startsWith('#')) return cor;
    const m = cor.match(/\d+/g);
    if (!m || m.length < 3) return '#ffffff';
    return '#' + m.slice(0, 3).map(n => parseInt(n).toString(16).padStart(2, '0')).join('');
}


/* ═══════════════════════════════════════════════════════════════════════
   EDITOR — Sincronizar toolbar
════════════════════════════════════════════════════════════════════════ */

function _sincronizarToolbar(wrapper, quill) {
    const toolbar = wrapper.querySelector('.anot-toolbar');
    if (!toolbar || !quill) return;
    const sel = quill.getSelection();
    if (!sel) return;
    const fmt = quill.getFormat(sel.index, sel.length);

    const mapCmds = { bold: 'bold', italic: 'italic', underline: 'underline', strike: 'strike' };
    Object.entries(mapCmds).forEach(([cmd, fmtKey]) => {
        toolbar.querySelector(`[data-cmd="${cmd}"]`)?.classList.toggle('ativo', !!fmt[fmtKey]);
    });

    toolbar.querySelector('[data-cmd="code"]')?.classList.toggle('ativo',  !!fmt['code-block']);
    toolbar.querySelector('[data-cmd="ol"]')?.classList.toggle('ativo',    fmt.list === 'ordered');
    toolbar.querySelector('[data-cmd="ul"]')?.classList.toggle('ativo',    fmt.list === 'bullet');
    toolbar.querySelector('[data-cmd="check"]')?.classList.toggle('ativo', fmt.list === 'unchecked' || fmt.list === 'checked');
    toolbar.querySelector('[data-cmd="quote"]')?.classList.toggle('ativo', !!fmt.blockquote);
    toolbar.querySelector('[data-cmd="link"]')?.classList.toggle('ativo',  !!fmt.link);

    const selHeading = toolbar.querySelector('.anot-tb-select');
    if (selHeading) selHeading.value = fmt.header ? String(fmt.header) : '0';
}


/* ═══════════════════════════════════════════════════════════════════════
   EDITOR — DOM
════════════════════════════════════════════════════════════════════════ */

function _buildEditorDOM(discId, id, nota) {
    const frag = document.createDocumentFragment();

    const topbar = document.createElement('div');
    topbar.className = 'anot-editor-topbar';
    topbar.innerHTML = `
        <button class="anot-btn-voltar"><i class="fas fa-arrow-left"></i> Anotações</button>
        <span class="anot-editor-titulo-display" title="Clique para renomear">${_esc(nota.titulo)}</span>
        <div class="anot-topbar-right">
            <span class="anot-editor-status" id="anot-status-${id}">—</span>
            <button class="anot-btn-salvar">
                <i class="fas fa-floppy-disk"></i> <span>Salvar</span>
            </button>
        </div>`;
    frag.appendChild(topbar);

    const toolbar = document.createElement('div');
    toolbar.className = 'anot-toolbar';
    toolbar.innerHTML = `
        <button class="anot-tb-btn" data-cmd="undo"  title="Desfazer (Ctrl+Z)"><i class="fas fa-rotate-left"></i></button>
        <button class="anot-tb-btn" data-cmd="redo"  title="Refazer (Ctrl+Y)"><i class="fas fa-rotate-right"></i></button>
        <div class="anot-tb-sep"></div>
        <select class="anot-tb-select" title="Estilo do texto">
            <option value="0">Parágrafo</option>
            <option value="1">Título 1</option>
            <option value="2">Título 2</option>
            <option value="3">Título 3</option>
        </select>
        <div class="anot-tb-sep"></div>
        <button class="anot-tb-btn" data-cmd="bold"      title="Negrito (Ctrl+B)"><i class="fas fa-bold"></i></button>
        <button class="anot-tb-btn" data-cmd="italic"    title="Itálico (Ctrl+I)"><i class="fas fa-italic"></i></button>
        <button class="anot-tb-btn" data-cmd="underline" title="Sublinhado (Ctrl+U)"><i class="fas fa-underline"></i></button>
        <button class="anot-tb-btn" data-cmd="strike"    title="Tachado"><i class="fas fa-strikethrough"></i></button>
        <button class="anot-tb-btn" data-cmd="code"      title="Bloco de código"><i class="fas fa-code"></i></button>
        <div class="anot-tb-sep"></div>
        <button class="anot-tb-btn" data-cmd="ol"    title="Lista numerada"><i class="fas fa-list-ol"></i></button>
        <button class="anot-tb-btn" data-cmd="ul"    title="Lista com pontos"><i class="fas fa-list-ul"></i></button>
        <button class="anot-tb-btn" data-cmd="check" title="Checklist"><i class="fas fa-list-check"></i></button>
        <div class="anot-tb-sep"></div>
        <button class="anot-tb-btn" data-cmd="quote" title="Citação"><i class="fas fa-quote-left"></i></button>
        <button class="anot-tb-btn" data-cmd="link"  title="Link"><i class="fas fa-link"></i></button>
        <div class="anot-tb-sep"></div>
        <button class="anot-tb-btn anot-color-wrap" title="Cor do texto">
            <i class="fas fa-palette"></i>
            <span class="anot-color-dot"></span>
        </button>
        <button class="anot-tb-btn" data-cmd="clear" title="Limpar formatação"><i class="fas fa-remove-format"></i></button>`;
    frag.appendChild(toolbar);

    const mount = document.createElement('div');
    mount.className = 'ql-mount';
    frag.appendChild(mount);

    const sb = document.createElement('div');
    sb.className = 'anot-statusbar';
    sb.innerHTML = `
        <span><span class="anot-wc">0</span> palavras</span>
        <span class="anot-status-data">Editado ${_formatarData(nota.editadoEm)}</span>`;
    frag.appendChild(sb);

    return frag;
}


/* ═══════════════════════════════════════════════════════════════════════
   UTILITÁRIOS
════════════════════════════════════════════════════════════════════════ */

function _atualizarStatus(statusEl, salvo) {
    if (!statusEl) return;
    if (salvo) {
        statusEl.textContent = 'Salvo';
        statusEl.classList.add('saved');
        setTimeout(() => { statusEl.textContent = '—'; statusEl.classList.remove('saved'); }, 2000);
    } else {
        statusEl.textContent = 'Não salvo';
        statusEl.classList.remove('saved');
    }
}

function _atualizarWC(wrapper, quill) {
    const el = wrapper.querySelector('.anot-wc');
    if (!el || !quill) return;
    const txt = quill.getText().trim();
    el.textContent = txt === '' ? 0 : txt.split(/\s+/).filter(Boolean).length;
}

function _gerarPreviewDelta(delta) {
    if (!delta) return '';
    try {
        const parsed = JSON.parse(delta);
        let txt = '';
        (parsed.ops ?? []).forEach(op => {
            if (typeof op.insert === 'string') txt += op.insert;
        });
        txt = txt.replace(/\n/g, ' ').trim();
        return _esc(txt.slice(0, 90)) + (txt.length > 90 ? '…' : '');
    } catch (_) { return ''; }
}

function _formatarData(ts) {
    if (!ts) return '';
    const d = Date.now() - ts;
    if (d < 60000)     return 'agora';
    if (d < 3600000)   return `${Math.floor(d / 60000)}min atrás`;
    if (d < 86400000)  return `${Math.floor(d / 3600000)}h atrás`;
    if (d < 172800000) return 'ontem';
    return new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function _esc(str) {
    return String(str ?? '')
        .replace(/&/g,'&amp;').replace(/</g,'&lt;')
        .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


/* ═══════════════════════════════════════════════════════════════════════
   TOAST
════════════════════════════════════════════════════════════════════════ */

function _criarToast() {
    const el = document.createElement('div');
    el.className = 'anot-toast';
    el.innerHTML = '<i class="fas fa-check-circle"></i> <span></span>';
    document.body.appendChild(el);
    _st.toastEl = el;
}

function _mostrarToast(msg) {
    if (!_st.toastEl) return;
    _st.toastEl.querySelector('span').textContent = msg;
    _st.toastEl.classList.add('show');
    clearTimeout(_st.toastTimer);
    _st.toastTimer = setTimeout(() => _st.toastEl.classList.remove('show'), 2500);
}