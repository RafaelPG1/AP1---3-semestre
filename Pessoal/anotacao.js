/* ═══════════════════════════════════════════════════════════════════════
   anotacao.js — Sistema de Anotações  (v2 — múltiplas anotações)
   ✦ Criar, listar, abrir, fechar, renomear e deletar anotações
   ✦ Uma anotação por vez (abre no lugar da lista)
   ✦ Persiste via window.Storage por usuário + disciplina
════════════════════════════════════════════════════════════════════════ */

const STORAGE_PREFIX = 'anotacao_v2_';
const AUTOSAVE_DELAY = 1000;

// ── ESTADO ────────────────────────────────────────────────────────────
const _st = {
    usuario:    null,
    dados:      {},   // { [discId]: { [id]: { id, titulo, html, criadoEm, editadoEm } } }
    timer:      null,
    toastEl:    null,
    toastTimer: null,
};


// ═════════════════════════════════════════════════════════════════════
//  API PÚBLICA
// ═════════════════════════════════════════════════════════════════════

export async function initAnotacoes(usuario) {
    _st.usuario = usuario;
    _st.dados   = {};
    await _carregarTodas();
    if (!_st.toastEl) _criarToast();
}

export function exibirAnotacao(discId, containerEl) {
    _limparPainel(containerEl);
    _renderizarLista(discId, containerEl);
}

export function removerAnotacao(containerEl) {
    containerEl.querySelector('.panel-anotacao')?.remove();
    clearTimeout(_st.timer);
}


// ═════════════════════════════════════════════════════════════════════
//  STORAGE
// ═════════════════════════════════════════════════════════════════════

async function _carregarTodas() {
    try {
        const raw = await window.Storage?.get?.(STORAGE_PREFIX + _st.usuario);
        if (raw) _st.dados = raw;
    } catch (_) {}
}

async function _persistir() {
    try {
        await window.Storage?.set?.(STORAGE_PREFIX + _st.usuario, _st.dados);
    } catch (_) {}
}

function _agendarSalvamento() {
    clearTimeout(_st.timer);
    _st.timer = setTimeout(async () => {
        await _persistir();
        _mostrarToast('Salvo automaticamente');
    }, AUTOSAVE_DELAY);
}


// ═════════════════════════════════════════════════════════════════════
//  CRUD
// ═════════════════════════════════════════════════════════════════════

function _listarOrdenado(discId) {
    const mapa = _st.dados[discId] ?? {};
    return Object.values(mapa).sort((a, b) => b.editadoEm - a.editadoEm);
}

function _criarNota(discId) {
    if (!_st.dados[discId]) _st.dados[discId] = {};
    const existentes = Object.values(_st.dados[discId]);
    const num        = existentes.length + 1;
    const agora      = Date.now();
    const id         = `nota_${agora}`;
    _st.dados[discId][id] = {
        id,
        titulo:    `Anotação ${num}`,
        html:      '',
        criadoEm:  agora,
        editadoEm: agora,
    };
    _persistir();
    return _st.dados[discId][id];
}

function _deletarNota(discId, id) {
    if (!_st.dados[discId]?.[id]) return;
    delete _st.dados[discId][id];
    _persistir();
}

function _renomearNota(discId, id, novoTitulo) {
    if (!_st.dados[discId]?.[id]) return;
    _st.dados[discId][id].titulo    = novoTitulo.trim() || 'Sem título';
    _st.dados[discId][id].editadoEm = Date.now();
    _persistir();
}

function _salvarHtml(discId, id, html) {
    if (!_st.dados[discId]?.[id]) return;
    _st.dados[discId][id].html      = html;
    _st.dados[discId][id].editadoEm = Date.now();
}


// ═════════════════════════════════════════════════════════════════════
//  RENDER — LISTA
// ═════════════════════════════════════════════════════════════════════

function _limparPainel(containerEl) {
    containerEl.querySelector('.panel-videos')?.remove();
    containerEl.querySelector('.panel-modules')?.remove();
    containerEl.querySelector('.panel-resumos')?.remove();
    containerEl.querySelector('.panel-anotacao')?.remove();
}

function _renderizarLista(discId, containerEl) {
    const notas   = _listarOrdenado(discId);
    const wrapper = document.createElement('div');
    wrapper.className    = 'panel-anotacao';
    wrapper.dataset.disc = discId;

    // ── Cabeçalho ─────────────────────────────────────────────────
    const header = document.createElement('div');
    header.className = 'anot-list-header';
    header.innerHTML = `
        <div class="anot-list-header-left">
            <span class="anot-list-label">
                <i class="fas fa-pen-to-square"></i> Anotações
            </span>
            <span class="anot-list-count">${notas.length} nota${notas.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="anot-btn-nova">
            <i class="fas fa-plus"></i> Nova anotação
        </button>
    `;
    wrapper.appendChild(header);

    // ── Lista ─────────────────────────────────────────────────────
    const lista = document.createElement('div');
    lista.className = 'anot-lista';

    if (notas.length === 0) {
        lista.innerHTML = `
            <div class="anot-vazio">
                <i class="fas fa-pen-to-square"></i>
                <p>Nenhuma anotação ainda.</p>
                <span>Clique em "Nova anotação" para começar.</span>
            </div>
        `;
    } else {
        notas.forEach(nota => lista.appendChild(_criarCardNota(discId, nota, containerEl)));
    }

    wrapper.appendChild(lista);
    containerEl.appendChild(wrapper);

    // Criar nova nota
    header.querySelector('.anot-btn-nova').addEventListener('click', () => {
        const nova = _criarNota(discId);
        _abrirEditor(discId, nova.id, containerEl);
    });
}

function _criarCardNota(discId, nota, containerEl) {
    const card = document.createElement('div');
    card.className  = 'anot-card';
    card.dataset.id = nota.id;

    const preview = _gerarPreview(nota.html);
    const data    = _formatarData(nota.editadoEm);

    card.innerHTML = `
        <div class="anot-card-main">
            <div class="anot-card-icon">
                <i class="fas fa-file-pen"></i>
            </div>
            <div class="anot-card-info">
                <span class="anot-card-titulo">${_esc(nota.titulo)}</span>
                <span class="anot-card-preview">${preview || 'Sem conteúdo'}</span>
            </div>
            <span class="anot-card-data">${data}</span>
        </div>
        <div class="anot-card-actions">
            <button class="anot-card-btn btn-renomear" title="Renomear">
                <i class="fas fa-pencil"></i>
            </button>
            <button class="anot-card-btn btn-deletar" title="Deletar">
                <i class="fas fa-trash-can"></i>
            </button>
        </div>
    `;

    card.querySelector('.anot-card-main').addEventListener('click', () => {
        _abrirEditor(discId, nota.id, containerEl);
    });

    card.querySelector('.btn-renomear').addEventListener('click', e => {
        e.stopPropagation();
        _iniciarRenomear(discId, nota.id, card);
    });

    card.querySelector('.btn-deletar').addEventListener('click', e => {
        e.stopPropagation();
        _confirmarDeletar(discId, nota.id, card, containerEl);
    });

    return card;
}


// ═════════════════════════════════════════════════════════════════════
//  RENOMEAR (inline no card)
// ═════════════════════════════════════════════════════════════════════

function _iniciarRenomear(discId, id, cardEl) {
    const tituloEl   = cardEl.querySelector('.anot-card-titulo');
    const valorAtual = _st.dados[discId]?.[id]?.titulo ?? '';

    const input = document.createElement('input');
    input.className = 'anot-rename-input';
    input.value     = valorAtual;
    tituloEl.replaceWith(input);
    input.focus();
    input.select();

    const confirmar = () => {
        const novo    = input.value.trim() || valorAtual;
        _renomearNota(discId, id, novo);
        const novoSpan = document.createElement('span');
        novoSpan.className   = 'anot-card-titulo';
        novoSpan.textContent = novo;
        input.replaceWith(novoSpan);
        _mostrarToast('Título atualizado');
    };

    input.addEventListener('blur', confirmar);
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); input.blur(); }
        if (e.key === 'Escape') { input.value = valorAtual; input.blur(); }
    });
}


// ═════════════════════════════════════════════════════════════════════
//  DELETAR (confirmação inline)
// ═════════════════════════════════════════════════════════════════════

function _confirmarDeletar(discId, id, cardEl, containerEl) {
    const actions = cardEl.querySelector('.anot-card-actions');

    actions.innerHTML = `
        <span class="anot-confirm-txt">Deletar?</span>
        <button class="anot-card-btn btn-confirmar-sim"><i class="fas fa-check"></i> Sim</button>
        <button class="anot-card-btn btn-confirmar-nao"><i class="fas fa-xmark"></i> Não</button>
    `;

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
                const lista = wrapper?.querySelector('.anot-lista');
                if (lista) lista.innerHTML = `
                    <div class="anot-vazio">
                        <i class="fas fa-pen-to-square"></i>
                        <p>Nenhuma anotação ainda.</p>
                        <span>Clique em "Nova anotação" para começar.</span>
                    </div>
                `;
            }
        }, { once: true });
        _mostrarToast('Anotação deletada');
    });

    actions.querySelector('.btn-confirmar-nao').addEventListener('click', e => {
        e.stopPropagation();
        _restaurarBotoesCard(discId, id, cardEl, containerEl);
    });
}

function _restaurarBotoesCard(discId, id, cardEl, containerEl) {
    const actions = cardEl.querySelector('.anot-card-actions');
    actions.innerHTML = `
        <button class="anot-card-btn btn-renomear" title="Renomear"><i class="fas fa-pencil"></i></button>
        <button class="anot-card-btn btn-deletar"  title="Deletar"> <i class="fas fa-trash-can"></i></button>
    `;
    actions.querySelector('.btn-renomear').addEventListener('click', e => {
        e.stopPropagation(); _iniciarRenomear(discId, id, cardEl);
    });
    actions.querySelector('.btn-deletar').addEventListener('click', e => {
        e.stopPropagation(); _confirmarDeletar(discId, id, cardEl, containerEl);
    });
}


// ═════════════════════════════════════════════════════════════════════
//  EDITOR — abrir
// ═════════════════════════════════════════════════════════════════════

function _abrirEditor(discId, id, containerEl) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return;

    const wrapper = containerEl.querySelector('.panel-anotacao');
    if (!wrapper) return;

    wrapper.innerHTML = '';
    wrapper.appendChild(_buildEditor(discId, id, nota));
    _montarEditorEventos(discId, id, wrapper, containerEl);
}

function _buildEditor(discId, id, nota) {
    const frag = document.createDocumentFragment();

    // Topbar
    const topbar = document.createElement('div');
    topbar.className = 'anot-editor-topbar';
    topbar.innerHTML = `
        <button class="anot-btn-voltar">
            <i class="fas fa-arrow-left"></i> Anotações
        </button>
        <span class="anot-editor-titulo-display" title="Clique para renomear">${_esc(nota.titulo)}</span>
        <span class="anot-editor-status" id="anot-status-${id}">Não salvo</span>
    `;
    frag.appendChild(topbar);

    // Toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'anot-toolbar';
    toolbar.setAttribute('role', 'toolbar');
    toolbar.innerHTML = `
        <div class="anot-toolbar-group">
            <select class="anot-select" data-cmd="formatBlock" title="Estilo">
                <option value="p">Parágrafo</option>
                <option value="h1">Título 1</option>
                <option value="h2">Título 2</option>
                <option value="h3">Título 3</option>
                <option value="blockquote">Citação</option>
                <option value="pre">Bloco de código</option>
            </select>
        </div>
        <div class="anot-sep"></div>
        <div class="anot-toolbar-group">
            <button class="anot-btn" data-cmd="bold"          title="Negrito (Ctrl+B)">       <i class="fas fa-bold"></i></button>
            <button class="anot-btn" data-cmd="italic"        title="Itálico (Ctrl+I)">       <i class="fas fa-italic"></i></button>
            <button class="anot-btn" data-cmd="underline"     title="Sublinhado (Ctrl+U)">    <i class="fas fa-underline"></i></button>
            <button class="anot-btn" data-cmd="strikeThrough" title="Tachado">                <i class="fas fa-strikethrough"></i></button>
            <button class="anot-btn" data-cmd="inlineCode"    title="Código inline (Ctrl+E)"> <i class="fas fa-code"></i></button>
        </div>
        <div class="anot-sep"></div>
        <div class="anot-toolbar-group">
            <button class="anot-btn" data-cmd="insertUnorderedList" title="Lista">          <i class="fas fa-list-ul"></i></button>
            <button class="anot-btn" data-cmd="insertOrderedList"   title="Lista numerada"> <i class="fas fa-list-ol"></i></button>
            <button class="anot-btn" data-cmd="checklist"           title="Checklist">      <i class="fas fa-list-check"></i></button>
        </div>
        <div class="anot-sep"></div>
        <div class="anot-toolbar-group">
            <button class="anot-btn" data-cmd="createLink"  title="Link (Ctrl+K)">    <i class="fas fa-link"></i></button>
            <button class="anot-btn" data-cmd="insertHRule" title="Linha divisória">   <i class="fas fa-minus"></i></button>
        </div>
        <div class="anot-sep"></div>
        <div class="anot-toolbar-group anot-toolbar-right">
            <button class="anot-btn anot-btn-save" data-cmd="save" title="Salvar (Ctrl+S)">
                <i class="fas fa-floppy-disk"></i> Salvar
            </button>
        </div>
    `;
    frag.appendChild(toolbar);

    // Editor
    const editor = document.createElement('div');
    editor.className       = 'anot-editor';
    editor.contentEditable = 'true';
    editor.spellcheck      = true;
    editor.dataset.disc    = discId;
    editor.dataset.id      = id;
    editor.dataset.placeholder = 'Comece a escrever…';
    editor.innerHTML       = nota.html || '';
    frag.appendChild(editor);

    // Statusbar
    const statusbar = document.createElement('div');
    statusbar.className = 'anot-statusbar';
    statusbar.innerHTML = `
        <span class="anot-status-words"><span class="anot-wc">0</span> palavras</span>
        <span class="anot-status-data">Editado ${_formatarData(nota.editadoEm)}</span>
    `;
    frag.appendChild(statusbar);

    return frag;
}

function _montarEditorEventos(discId, id, wrapper, containerEl) {
    const editor  = wrapper.querySelector('.anot-editor');
    const toolbar = wrapper.querySelector('.anot-toolbar');
    const sel     = toolbar.querySelector('.anot-select');
    const statusEl = wrapper.querySelector(`#anot-status-${id}`);
    const wcEl    = wrapper.querySelector('.anot-wc');
    const tituloDisplay = wrapper.querySelector('.anot-editor-titulo-display');

    _atualizarWC(editor, wcEl);
    _sincronizarAtivos(toolbar, sel);

    // Renomear pelo título no topbar
    tituloDisplay?.addEventListener('click', () => {
        const valorAtual = _st.dados[discId]?.[id]?.titulo ?? '';
        const input = document.createElement('input');
        input.className = 'anot-rename-input anot-rename-topbar';
        input.value = valorAtual;
        tituloDisplay.replaceWith(input);
        input.focus(); input.select();

        const ok = () => {
            const novo = input.value.trim() || valorAtual;
            _renomearNota(discId, id, novo);
            const span = document.createElement('span');
            span.className   = 'anot-editor-titulo-display';
            span.title       = 'Clique para renomear';
            span.textContent = novo;
            input.replaceWith(span);
            // Re-bindar clique no novo span
            span.addEventListener('click', () => span.dispatchEvent(new MouseEvent('click')));
            _mostrarToast('Título atualizado');
        };
        input.addEventListener('blur', ok);
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter')  { e.preventDefault(); input.blur(); }
            if (e.key === 'Escape') { input.value = valorAtual; input.blur(); }
        });
    });

    // Voltar para a lista
    wrapper.querySelector('.anot-btn-voltar').addEventListener('click', () => {
        clearTimeout(_st.timer);
        _salvarHtml(discId, id, editor.innerHTML);
        _persistir();
        _limparPainel(containerEl);
        _renderizarLista(discId, containerEl);
    });

    // Botões da toolbar
    toolbar.querySelectorAll('.anot-btn[data-cmd]').forEach(btn => {
        btn.addEventListener('mousedown', e => {
            e.preventDefault();
            _executarCmd(btn.dataset.cmd, editor, discId, id, statusEl);
        });
    });

    // Select de bloco
    sel.addEventListener('change', e => {
        editor.focus();
        const val = e.target.value;
        if (val === 'pre') _inserirBlocoCode(editor);
        else document.execCommand('formatBlock', false, `<${val}>`);
        _onInput(discId, id, editor, wcEl, statusEl);
    });

    // Input e sincronização
    editor.addEventListener('input',   () => _onInput(discId, id, editor, wcEl, statusEl));
    editor.addEventListener('keyup',   () => _sincronizarAtivos(toolbar, sel));
    editor.addEventListener('mouseup', () => _sincronizarAtivos(toolbar, sel));
    editor.addEventListener('keydown', e => _handleShortcuts(e, discId, id, editor, statusEl));
}


// ═════════════════════════════════════════════════════════════════════
//  COMANDOS
// ═════════════════════════════════════════════════════════════════════

function _executarCmd(cmd, editor, discId, id, statusEl) {
    editor.focus();
    switch (cmd) {
        case 'bold': case 'italic': case 'underline':
        case 'strikeThrough': case 'insertUnorderedList':
        case 'insertOrderedList': case 'insertHRule':
            document.execCommand(cmd, false, null); break;
        case 'inlineCode':  _inserirInlineCode(editor);                    break;
        case 'checklist':   _inserirChecklist(editor);                     break;
        case 'createLink':  _inserirLink(editor);                          break;
        case 'save':        _salvarImediato(discId, id, editor, statusEl); break;
    }
}

function _inserirInlineCode(editor) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const parent = sel.anchorNode?.parentElement;
    if (parent?.tagName === 'CODE') {
        parent.replaceWith(document.createTextNode(parent.textContent));
        return;
    }
    const range = sel.getRangeAt(0);
    const code  = document.createElement('code');
    code.className   = 'anot-inline-code';
    code.textContent = sel.toString() || 'código';
    range.deleteContents();
    range.insertNode(code);
    range.setStartAfter(code); range.collapse(true);
    sel.removeAllRanges(); sel.addRange(range);
}

function _inserirBlocoCode(editor) {
    const pre  = document.createElement('pre');
    pre.className = 'anot-code-block';
    const code = document.createElement('code');
    pre.appendChild(code);
    const p = document.createElement('p');
    p.innerHTML = '<br>';
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
        const range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(p);
        range.insertNode(pre);
        range.setStart(code, 0); range.collapse(true);
        sel.removeAllRanges(); sel.addRange(range);
    } else {
        editor.appendChild(pre);
        editor.appendChild(p);
    }
}

function _inserirChecklist(editor) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const ul   = document.createElement('ul');
    ul.className = 'anot-checklist';
    const li   = document.createElement('li');
    li.className = 'anot-checklist-item';
    const cb   = document.createElement('input');
    cb.type = 'checkbox'; cb.contentEditable = 'false';
    const span = document.createElement('span');
    span.textContent = 'Novo item';
    li.appendChild(cb); li.appendChild(span); ul.appendChild(li);
    const range = sel.getRangeAt(0);
    range.deleteContents(); range.insertNode(ul);
    range.setStart(span, 0); range.setEnd(span, span.childNodes.length);
    sel.removeAllRanges(); sel.addRange(range);
}

function _inserirLink(editor) {
    const sel    = window.getSelection();
    const anchor = sel?.anchorNode?.parentElement?.closest('a');
    const url    = prompt(anchor ? 'Editar URL:' : 'Insira a URL:', anchor?.href ?? 'https://');
    if (!url) return;
    if (anchor) { anchor.href = url; return; }
    if (sel?.toString()) {
        document.execCommand('createLink', false, url);
        editor.querySelectorAll('a:not([target])').forEach(a => {
            a.target = '_blank'; a.rel = 'noopener noreferrer';
        });
    } else {
        const a = document.createElement('a');
        a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
        a.textContent = url;
        sel.getRangeAt(0).insertNode(a);
    }
}

async function _salvarImediato(discId, id, editor, statusEl) {
    clearTimeout(_st.timer);
    _salvarHtml(discId, id, editor.innerHTML);
    await _persistir();
    if (statusEl) {
        statusEl.textContent = 'Salvo';
        statusEl.classList.add('saved');
        setTimeout(() => {
            statusEl.textContent = 'Não salvo';
            statusEl.classList.remove('saved');
        }, 2000);
    }
    _mostrarToast('Anotação salva');
}


// ═════════════════════════════════════════════════════════════════════
//  ATALHOS
// ═════════════════════════════════════════════════════════════════════

function _handleShortcuts(e, discId, id, editor, statusEl) {
    if (e.key === 'Enter') { _handleChecklistEnter(e, editor); return; }
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;
    switch (e.key.toLowerCase()) {
        case 'b': e.preventDefault(); document.execCommand('bold',      false, null); break;
        case 'i': e.preventDefault(); document.execCommand('italic',    false, null); break;
        case 'u': e.preventDefault(); document.execCommand('underline', false, null); break;
        case 'e': e.preventDefault(); _inserirInlineCode(editor);                    break;
        case 'k': e.preventDefault(); _inserirLink(editor);                          break;
        case 's': e.preventDefault(); _salvarImediato(discId, id, editor, statusEl); break;
    }
}

function _handleChecklistEnter(e, editor) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const li = sel.anchorNode?.parentElement?.closest('.anot-checklist-item');
    if (!li) return;
    e.preventDefault();
    const span  = li.querySelector('span');
    const texto = span?.textContent?.trim();
    if (!texto) {
        const ul = li.closest('.anot-checklist');
        const p  = document.createElement('p');
        p.innerHTML = '<br>';
        ul.after(p); li.remove();
        if (!ul.querySelector('li')) ul.remove();
        const r = document.createRange();
        r.setStart(p, 0); r.collapse(true);
        sel.removeAllRanges(); sel.addRange(r);
        return;
    }
    const novoLi = document.createElement('li');
    novoLi.className = 'anot-checklist-item';
    const cb = document.createElement('input');
    cb.type = 'checkbox'; cb.contentEditable = 'false';
    const novoSpan = document.createElement('span');
    novoLi.appendChild(cb); novoLi.appendChild(novoSpan);
    li.after(novoLi);
    const r = document.createRange();
    r.setStart(novoSpan, 0); r.collapse(true);
    sel.removeAllRanges(); sel.addRange(r);
}


// ═════════════════════════════════════════════════════════════════════
//  SINCRONIZAÇÃO DE UI
// ═════════════════════════════════════════════════════════════════════

function _sincronizarAtivos(toolbar, selEl) {
    ['bold', 'italic', 'underline', 'strikeThrough'].forEach(cmd => {
        toolbar.querySelector(`[data-cmd="${cmd}"]`)
            ?.classList.toggle('active', document.queryCommandState(cmd));
    });
    try {
        const val = document.queryCommandValue('formatBlock').toLowerCase().replace(/[<>]/g, '');
        const map = { h1:'h1', h2:'h2', h3:'h3', blockquote:'blockquote', pre:'pre' };
        if (selEl) selEl.value = map[val] ?? 'p';
    } catch (_) {}
}

function _atualizarWC(editor, wcEl) {
    if (!wcEl) return;
    const txt = editor.innerText?.trim() ?? '';
    wcEl.textContent = txt === '' ? 0 : txt.split(/\s+/).length;
}

function _onInput(discId, id, editor, wcEl, statusEl) {
    _atualizarWC(editor, wcEl);
    if (statusEl) { statusEl.textContent = 'Não salvo'; statusEl.classList.remove('saved'); }
    _salvarHtml(discId, id, editor.innerHTML);
    _agendarSalvamento();
}


// ═════════════════════════════════════════════════════════════════════
//  UTILITÁRIOS
// ═════════════════════════════════════════════════════════════════════

function _gerarPreview(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const txt = tmp.innerText?.trim() ?? '';
    return _esc(txt.slice(0, 80)) + (txt.length > 80 ? '…' : '');
}

function _formatarData(ts) {
    if (!ts) return '';
    const d    = new Date(ts);
    const diff = Date.now() - d;
    if (diff < 60000)        return 'agora';
    if (diff < 3600000)      return `${Math.floor(diff / 60000)}min atrás`;
    if (diff < 86400000)     return `${Math.floor(diff / 3600000)}h atrás`;
    if (diff < 86400000 * 2) return 'ontem';
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function _esc(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}


// ═════════════════════════════════════════════════════════════════════
//  TOAST
// ═════════════════════════════════════════════════════════════════════

function _criarToast() {
    const el = document.createElement('div');
    el.className = 'anot-toast';
    el.innerHTML = '<i class="fas fa-check-circle"></i> <span></span>';
    document.body.appendChild(el);
    _st.toastEl = el;
}

function _mostrarToast(msg) {
    const el = _st.toastEl;
    if (!el) return;
    el.querySelector('span').textContent = msg;
    el.classList.add('show');
    clearTimeout(_st.toastTimer);
    _st.toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}