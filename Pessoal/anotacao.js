/* ═══════════════════════════════════════════════════════════════════════
   anotacao.js — Sistema de Anotações  (v4 — fixes comportamento)
   ✦ Fix 1: renomear quantas vezes quiser no topbar
   ✦ Fix 2: toolbar sincroniza ao clicar nos botões (sem precisar clicar no editor)
   ✦ Fix 3: Backspace remove marcador de lista quando linha está vazia
   ✦ Fix 4: code-block vira caixa visual, sem texto "código", sem duplicar, cresce verticalmente
   ✦ Fix 5: checklist e code-block clicados novamente removem o formato
════════════════════════════════════════════════════════════════════════ */

const STORAGE_PREFIX = 'anotacao_v3_';
const AUTOSAVE_DELAY = 1200;

// ── ESTADO ────────────────────────────────────────────────────────────
const _st = {
    usuario:    null,
    dados:      {},
    quill:      null,
    timer:      null,
    toastEl:    null,
    toastTimer: null,
};


// ═════════════════════════════════════════════════════════════════════
//  QUILL — carregamento dinâmico via CDN
// ═════════════════════════════════════════════════════════════════════

let _quillReady = null;

function _carregarQuill() {
    if (_quillReady) return _quillReady;
    _quillReady = new Promise(resolve => {
        if (window.Quill) { resolve(); return; }
        if (!document.querySelector('#quill-css')) {
            const link = document.createElement('link');
            link.id   = 'quill-css';
            link.rel  = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css';
            document.head.appendChild(link);
        }
        const script = document.createElement('script');
        script.src    = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
    });
    return _quillReady;
}


// ═════════════════════════════════════════════════════════════════════
//  API PÚBLICA
// ═════════════════════════════════════════════════════════════════════

export async function initAnotacoes(usuario) {
    _st.usuario = usuario;
    _st.dados   = {};
    await _carregarTodas();
    if (!_st.toastEl) _criarToast();
    _carregarQuill();
}

export function exibirAnotacao(discId, containerEl) {
    _limparPainel(containerEl);
    _renderizarLista(discId, containerEl);
}

export function removerAnotacao(containerEl) {
    _destruirQuill();
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

function _agendarSalvamento(discId, id) {
    clearTimeout(_st.timer);
    _st.timer = setTimeout(async () => {
        _capturarQuill(discId, id);
        await _persistir();
        _mostrarToast('Salvo automaticamente');
    }, AUTOSAVE_DELAY);
}


// ═════════════════════════════════════════════════════════════════════
//  CRUD
// ═════════════════════════════════════════════════════════════════════

function _listarOrdenado(discId) {
    return Object.values(_st.dados[discId] ?? {})
        .sort((a, b) => b.editadoEm - a.editadoEm);
}

function _criarNota(discId) {
    if (!_st.dados[discId]) _st.dados[discId] = {};
    const num   = Object.keys(_st.dados[discId]).length + 1;
    const agora = Date.now();
    const id    = `nota_${agora}`;
    _st.dados[discId][id] = { id, titulo: `Anotação ${num}`, delta: null, html: '', criadoEm: agora, editadoEm: agora };
    _persistir();
    return _st.dados[discId][id];
}

function _deletarNota(discId, id) {
    delete _st.dados[discId]?.[id];
    _persistir();
}

function _renomearNota(discId, id, titulo) {
    if (!_st.dados[discId]?.[id]) return;
    _st.dados[discId][id].titulo    = titulo.trim() || 'Sem título';
    _st.dados[discId][id].editadoEm = Date.now();
    _persistir();
}

function _capturarQuill(discId, id) {
    if (!_st.quill || !_st.dados[discId]?.[id]) return;
    _st.dados[discId][id].delta     = _st.quill.getContents();
    _st.dados[discId][id].html      = _st.quill.getSemanticHTML();
    _st.dados[discId][id].editadoEm = Date.now();
}

function _destruirQuill() {
    _st.quill = null;
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

    const header = document.createElement('div');
    header.className = 'anot-list-header';
    header.innerHTML = `
        <div class="anot-list-header-left">
            <span class="anot-list-label"><i class="fas fa-pen-to-square"></i> Anotações</span>
            <span class="anot-list-count">${notas.length} nota${notas.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="anot-btn-nova"><i class="fas fa-plus"></i> Nova anotação</button>
    `;
    wrapper.appendChild(header);

    const lista = document.createElement('div');
    lista.className = 'anot-lista';

    if (notas.length === 0) {
        lista.innerHTML = `
            <div class="anot-vazio">
                <i class="fas fa-pen-to-square"></i>
                <p>Nenhuma anotação ainda.</p>
                <span>Clique em "Nova anotação" para começar.</span>
            </div>`;
    } else {
        notas.forEach(nota => lista.appendChild(_criarCardNota(discId, nota, containerEl)));
    }

    wrapper.appendChild(lista);
    containerEl.appendChild(wrapper);

    header.querySelector('.anot-btn-nova').addEventListener('click', () => {
        const nova = _criarNota(discId);
        _abrirEditor(discId, nova.id, containerEl);
    });
}

function _criarCardNota(discId, nota, containerEl) {
    const card = document.createElement('div');
    card.className  = 'anot-card';
    card.dataset.id = nota.id;

    card.innerHTML = `
        <div class="anot-card-main">
            <div class="anot-card-icon"><i class="fas fa-file-pen"></i></div>
            <div class="anot-card-info">
                <span class="anot-card-titulo">${_esc(nota.titulo)}</span>
                <span class="anot-card-preview">${_gerarPreview(nota.html) || 'Sem conteúdo'}</span>
            </div>
            <span class="anot-card-data">${_formatarData(nota.editadoEm)}</span>
        </div>
        <div class="anot-card-actions">
            <button class="anot-card-btn btn-renomear"><i class="fas fa-pencil"></i> Renomear</button>
            <button class="anot-card-btn btn-deletar"><i class="fas fa-trash-can"></i> Deletar</button>
        </div>`;

    card.querySelector('.anot-card-main').addEventListener('click', () => _abrirEditor(discId, nota.id, containerEl));
    card.querySelector('.btn-renomear').addEventListener('click', e => { e.stopPropagation(); _iniciarRenomear(discId, nota.id, card); });
    card.querySelector('.btn-deletar').addEventListener('click',  e => { e.stopPropagation(); _confirmarDeletar(discId, nota.id, card, containerEl); });

    return card;
}


// ═════════════════════════════════════════════════════════════════════
//  RENOMEAR — card (inline)
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
        const novo = input.value.trim() || valorAtual;
        _renomearNota(discId, id, novo);
        const span = document.createElement('span');
        span.className   = 'anot-card-titulo';
        span.textContent = novo;
        input.replaceWith(span);
        _mostrarToast('Título atualizado');
    };
    input.addEventListener('blur', confirmar);
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); input.blur(); }
        if (e.key === 'Escape') { input.value = valorAtual; input.blur(); }
    });
}


// ═════════════════════════════════════════════════════════════════════
//  DELETAR — confirmação inline
// ═════════════════════════════════════════════════════════════════════

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
                const lista = wrapper?.querySelector('.anot-lista');
                if (lista) lista.innerHTML = `
                    <div class="anot-vazio">
                        <i class="fas fa-pen-to-square"></i>
                        <p>Nenhuma anotação ainda.</p>
                        <span>Clique em "Nova anotação" para começar.</span>
                    </div>`;
            }
        }, { once: true });
        _mostrarToast('Anotação deletada');
    });

    actions.querySelector('.btn-confirmar-nao').addEventListener('click', e => {
        e.stopPropagation();
        actions.innerHTML = `
            <button class="anot-card-btn btn-renomear"><i class="fas fa-pencil"></i> Renomear</button>
            <button class="anot-card-btn btn-deletar"><i class="fas fa-trash-can"></i> Deletar</button>`;
        actions.querySelector('.btn-renomear').addEventListener('click', ev => { ev.stopPropagation(); _iniciarRenomear(discId, id, cardEl); });
        actions.querySelector('.btn-deletar').addEventListener('click',  ev => { ev.stopPropagation(); _confirmarDeletar(discId, id, cardEl, containerEl); });
    });
}


// ═════════════════════════════════════════════════════════════════════
//  EDITOR — abrir
// ═════════════════════════════════════════════════════════════════════

async function _abrirEditor(discId, id, containerEl) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return;

    const wrapper = containerEl.querySelector('.panel-anotacao');
    if (!wrapper) return;

    wrapper.innerHTML = `
        <div class="anot-loading">
            <i class="fas fa-circle-notch fa-spin"></i>
            <span>Carregando editor…</span>
        </div>`;

    await _carregarQuill();

    wrapper.innerHTML = '';
    wrapper.appendChild(_buildEditorDOM(discId, id, nota));

    _destruirQuill();
    const editorEl = wrapper.querySelector('.anot-quill-editor');

    _st.quill = new window.Quill(editorEl, {
        theme:   'snow',
        placeholder: 'Comece a escrever…',
        modules: {
            toolbar: '#anot-toolbar-' + id,
            history: { delay: 500, maxStack: 100 },
        }
    });

    // Restaurar conteúdo salvo
    if (nota.delta) {
        try { _st.quill.setContents(nota.delta); } catch (_) {}
    } else if (nota.html) {
        _st.quill.clipboard.dangerouslyPasteHTML(nota.html);
    }
    _st.quill.setSelection(_st.quill.getLength(), 0);

    // Autosave
    _st.quill.on('text-change', () => {
        _capturarQuill(discId, id);
        _agendarSalvamento(discId, id);
        _atualizarStatus(wrapper, id, false);
        _atualizarWC(wrapper);
    });

    // ── FIX 2: sincronizar toolbar ao mudar seleção (sem precisar clicar no editor)
    _st.quill.on('selection-change', () => {
        _sincronizarToolbar(wrapper, id);
    });

    // ── FIX 3 + 4 + 5: keyboard handler customizado
    _montarKeyboardFixes(discId, id, wrapper);

    // ── FIX 4: interceptar clique no botão code-block
    _montarBotoesToolbar(discId, id, wrapper);

    _montarTopbarEventos(discId, id, wrapper, containerEl);
    _atualizarWC(wrapper);
}


// ═════════════════════════════════════════════════════════════════════
//  FIX 2 — Sincronizar toolbar com estado real do Quill
// ═════════════════════════════════════════════════════════════════════

function _sincronizarToolbar(wrapper, id) {
    if (!_st.quill) return;
    const toolbar = wrapper.querySelector(`#anot-toolbar-${id}`);
    if (!toolbar) return;

    const fmt = _st.quill.getFormat();

    // Botões simples: bold, italic, underline, strike, blockquote
    ['bold', 'italic', 'underline', 'strike', 'blockquote'].forEach(f => {
        const btn = toolbar.querySelector(`.ql-${f}`);
        if (btn) btn.classList.toggle('ql-active', !!fmt[f]);
    });

    // code inline
    const codeBtn = toolbar.querySelector('.ql-code');
    if (codeBtn) codeBtn.classList.toggle('ql-active', !!fmt['code']);

    // code-block
    const codeBlockBtn = toolbar.querySelector('.ql-code-block');
    if (codeBlockBtn) codeBlockBtn.classList.toggle('ql-active', !!fmt['code-block']);

    // listas
    const bulletBtn  = toolbar.querySelector('.ql-list[value="bullet"]');
    const orderedBtn = toolbar.querySelector('.ql-list[value="ordered"]');
    const checkBtn   = toolbar.querySelector('.ql-list[value="check"]');
    if (bulletBtn)  bulletBtn.classList.toggle('ql-active',  fmt.list === 'bullet');
    if (orderedBtn) orderedBtn.classList.toggle('ql-active', fmt.list === 'ordered');
    if (checkBtn)   checkBtn.classList.toggle('ql-active',   fmt.list === 'check');

    // header select
    const headerSelect = toolbar.querySelector('.ql-header');
    if (headerSelect) {
        const h = fmt.header ?? '';
        headerSelect.value = h ? String(h) : '';
    }
}


// ═════════════════════════════════════════════════════════════════════
//  FIX 3 — Backspace remove marcador quando linha vazia
//  FIX 4 — code-block: caixa visual, sem duplicar, cresce
//  FIX 5 — checklist e code-block togglam ao clicar de novo
// ═════════════════════════════════════════════════════════════════════

function _montarKeyboardFixes(discId, id, wrapper) {
    if (!_st.quill) return;

    const kb = _st.quill.keyboard;

    // ── FIX 3: Backspace em linha vazia com lista → remove marcador ──
    // Quill já faz isso nativamente para bullet/ordered via Enter.
    // Para Backspace, adicionamos um handler:
    kb.addBinding({ key: 'Backspace' }, {
        collapsed: true,
        format: ['list'],
        offset: 0,
    }, function(range, context) {
        // Se o cursor está no início de um item de lista e a linha está vazia
        const [line] = this.quill.getLine(range.index);
        const lineText = line?.domNode?.innerText?.replace(/\n/g, '') ?? '';
        if (lineText.trim() === '') {
            // Remove o formato de lista (volta a parágrafo normal)
            this.quill.format('list', false, 'user');
            return false; // Impede o Backspace de apagar o caractere anterior
        }
        return true; // Comportamento padrão
    });
}

function _montarBotoesToolbar(discId, id, wrapper) {
    if (!_st.quill) return;
    const toolbar = wrapper.querySelector(`#anot-toolbar-${id}`);
    if (!toolbar) return;

    // ── FIX 4 + 5: code-block ────────────────────────────────────────
    const codeBlockBtn = toolbar.querySelector('.ql-code-block');
    if (codeBlockBtn) {
        // Remover handler padrão do Quill e colocar o nosso
        const novoBtn = codeBlockBtn.cloneNode(true);
        codeBlockBtn.replaceWith(novoBtn);

        novoBtn.addEventListener('mousedown', e => {
            e.preventDefault();
            e.stopPropagation();
            if (!_st.quill) return;

            const range = _st.quill.getSelection(true);
            if (!range) return;

            const fmt = _st.quill.getFormat(range);

            // FIX 5: se já está em code-block, remove
            if (fmt['code-block']) {
                _st.quill.format('code-block', false, 'user');
                novoBtn.classList.remove('ql-active');
                return;
            }

            // FIX 4: verificar se a linha atual já é code-block (evitar duplicar)
            const [line] = _st.quill.getLine(range.index);
            if (line?.domNode?.closest('pre')) return;

            // Aplicar code-block
            _st.quill.format('code-block', true, 'user');
            novoBtn.classList.add('ql-active');
        });
    }

    // ── FIX 5: checklist toggle ───────────────────────────────────────
    const checkBtn = toolbar.querySelector('.ql-list[value="check"]');
    if (checkBtn) {
        const novoCheck = checkBtn.cloneNode(true);
        checkBtn.replaceWith(novoCheck);

        novoCheck.addEventListener('mousedown', e => {
            e.preventDefault();
            e.stopPropagation();
            if (!_st.quill) return;

            const range = _st.quill.getSelection(true);
            if (!range) return;

            const fmt = _st.quill.getFormat(range);

            // Se já é checklist, remove
            if (fmt.list === 'check') {
                _st.quill.format('list', false, 'user');
                novoCheck.classList.remove('ql-active');
            } else {
                _st.quill.format('list', 'check', 'user');
                novoCheck.classList.add('ql-active');
            }
        });
    }

    // ── FIX 2: todos os botões da toolbar sincronizam após clique ────
    // (garante que o estado visual sempre reflita o Quill, mesmo sem clicar no editor)
    toolbar.addEventListener('mousedown', () => {
        // Aguarda o Quill processar a ação
        setTimeout(() => _sincronizarToolbar(wrapper, id), 10);
    });
}


// ═════════════════════════════════════════════════════════════════════
//  EDITOR — DOM
// ═════════════════════════════════════════════════════════════════════

function _buildEditorDOM(discId, id, nota) {
    const frag = document.createDocumentFragment();

    // Topbar
    const topbar = document.createElement('div');
    topbar.className = 'anot-editor-topbar';
    topbar.innerHTML = `
        <button class="anot-btn-voltar"><i class="fas fa-arrow-left"></i> Anotações</button>
        <span class="anot-editor-titulo-display" title="Clique para renomear">${_esc(nota.titulo)}</span>
        <div class="anot-topbar-right">
            <span class="anot-editor-status" id="anot-status-${id}">—</span>
            <button class="anot-btn-salvar" id="anot-save-${id}">
                <i class="fas fa-floppy-disk"></i> Salvar
            </button>
        </div>`;
    frag.appendChild(topbar);

    // Toolbar
    const toolbar = document.createElement('div');
    toolbar.id        = `anot-toolbar-${id}`;
    toolbar.className = 'anot-ql-toolbar';
    toolbar.innerHTML = `
        <span class="ql-formats">
            <select class="ql-header">
                <option value="1">Título 1</option>
                <option value="2">Título 2</option>
                <option value="3">Título 3</option>
                <option selected>Parágrafo</option>
            </select>
        </span>
        <span class="ql-formats">
            <button class="ql-bold"      title="Negrito (Ctrl+B)"></button>
            <button class="ql-italic"    title="Itálico (Ctrl+I)"></button>
            <button class="ql-underline" title="Sublinhado (Ctrl+U)"></button>
            <button class="ql-strike"    title="Tachado"></button>
        </span>
        <span class="ql-formats">
            <button class="ql-code"       title="Código inline"></button>
            <button class="ql-code-block" title="Bloco de código"></button>
        </span>
        <span class="ql-formats">
            <button class="ql-list" value="bullet"  title="Lista"></button>
            <button class="ql-list" value="ordered" title="Lista numerada"></button>
            <button class="ql-list" value="check"   title="Checklist"></button>
        </span>
        <span class="ql-formats">
            <select class="ql-color" title="Cor do texto"></select>
            <button class="ql-blockquote" title="Citação"></button>
            <button class="ql-link"       title="Link"></button>
        </span>
        <span class="ql-formats">
            <button class="ql-clean" title="Limpar formatação"></button>
        </span>`;
    frag.appendChild(toolbar);

    // Área Quill
    const editorWrap = document.createElement('div');
    editorWrap.className = 'anot-quill-wrap';
    const editorEl = document.createElement('div');
    editorEl.className = 'anot-quill-editor';
    editorWrap.appendChild(editorEl);
    frag.appendChild(editorWrap);

    // Statusbar
    const statusbar = document.createElement('div');
    statusbar.className = 'anot-statusbar';
    statusbar.innerHTML = `
        <span><span class="anot-wc">0</span> palavras</span>
        <span class="anot-status-data">Editado ${_formatarData(nota.editadoEm)}</span>`;
    frag.appendChild(statusbar);

    return frag;
}


// ═════════════════════════════════════════════════════════════════════
//  TOPBAR — eventos
// ═════════════════════════════════════════════════════════════════════

function _montarTopbarEventos(discId, id, wrapper, containerEl) {
    const btnSalvar = wrapper.querySelector(`#anot-save-${id}`);

    // ── FIX 1: renomear quantas vezes quiser ─────────────────────────
    // Usamos delegação no wrapper para o span ser sempre encontrado,
    // mesmo após replaceWith (o span novo é inserido no mesmo lugar)
    wrapper.addEventListener('click', e => {
        const tituloEl = e.target.closest('.anot-editor-titulo-display');
        if (!tituloEl) return;

        const valorAtual = _st.dados[discId]?.[id]?.titulo ?? '';
        const input = document.createElement('input');
        input.className = 'anot-rename-input anot-rename-topbar';
        input.value = valorAtual;
        tituloEl.replaceWith(input);
        input.focus();
        input.select();

        let confirmado = false;
        const ok = () => {
            if (confirmado) return;
            confirmado = true;
            const novo = input.value.trim() || valorAtual;
            _renomearNota(discId, id, novo);
            const span = document.createElement('span');
            // ← classe correta para que a delegação funcione de novo
            span.className   = 'anot-editor-titulo-display';
            span.title       = 'Clique para renomear';
            span.textContent = novo;
            input.replaceWith(span);
            _mostrarToast('Título atualizado');
        };
        input.addEventListener('blur', ok);
        input.addEventListener('keydown', e2 => {
            if (e2.key === 'Enter')  { e2.preventDefault(); ok(); input.remove(); }
            if (e2.key === 'Escape') { confirmado = true; input.value = valorAtual; input.blur(); }
        });
    });

    // Salvar agora
    btnSalvar?.addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id);
        await _persistir();
        _atualizarStatus(wrapper, id, true);
        _mostrarToast('Anotação salva');
    });

    // Ctrl+S
    const atalhoSalvar = e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's' && _st.quill) {
            e.preventDefault();
            btnSalvar?.click();
        }
        if (!wrapper.isConnected) document.removeEventListener('keydown', atalhoSalvar);
    };
    document.addEventListener('keydown', atalhoSalvar);

    // Voltar para lista
    wrapper.querySelector('.anot-btn-voltar').addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id);
        await _persistir();
        _destruirQuill();
        document.removeEventListener('keydown', atalhoSalvar);
        _limparPainel(containerEl);
        _renderizarLista(discId, containerEl);
    });
}


// ═════════════════════════════════════════════════════════════════════
//  UTILITÁRIOS DO EDITOR
// ═════════════════════════════════════════════════════════════════════

function _atualizarStatus(wrapper, id, salvo) {
    const el = wrapper.querySelector(`#anot-status-${id}`);
    if (!el) return;
    if (salvo) {
        el.textContent = 'Salvo';
        el.classList.add('saved');
        setTimeout(() => { el.textContent = 'Não salvo'; el.classList.remove('saved'); }, 2000);
    } else {
        el.textContent = 'Não salvo';
        el.classList.remove('saved');
    }
}

function _atualizarWC(wrapper) {
    const wcEl = wrapper.querySelector('.anot-wc');
    if (!wcEl || !_st.quill) return;
    const txt = _st.quill.getText().trim();
    wcEl.textContent = txt === '' ? 0 : txt.split(/\s+/).length;
}


// ═════════════════════════════════════════════════════════════════════
//  UTILITÁRIOS GERAIS
// ═════════════════════════════════════════════════════════════════════

function _gerarPreview(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const txt = tmp.innerText?.trim() ?? '';
    return _esc(txt.slice(0, 90)) + (txt.length > 90 ? '…' : '');
}

function _formatarData(ts) {
    if (!ts) return '';
    const diff = Date.now() - ts;
    if (diff < 60000)        return 'agora';
    if (diff < 3600000)      return `${Math.floor(diff / 60000)}min atrás`;
    if (diff < 86400000)     return `${Math.floor(diff / 3600000)}h atrás`;
    if (diff < 86400000 * 2) return 'ontem';
    return new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
}

function _esc(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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