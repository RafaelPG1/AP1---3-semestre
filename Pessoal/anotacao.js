/* ═══════════════════════════════════════════════════════════════════════
   anotacao.js — v15
════════════════════════════════════════════════════════════════════════ */

const STORAGE_PREFIX = 'anotacao_v3_';
const AUTOSAVE_DELAY = 1500;

const _st = {
    usuario:     null,
    dados:       {},
    quill:       null,
    timer:       null,
    toastEl:     null,
    toastTimer:  null,
    ultimaSel:   null,
    renameAtivo: false,
};

/* ─── QUILL (CDN) ───────────────────────────────────────────────────── */
let _quillReady = null;
function _carregarQuill() {
    if (_quillReady) return _quillReady;
    _quillReady = new Promise(resolve => {
        if (window.Quill) { resolve(); return; }
        if (!document.querySelector('#quill-css')) {
            const l = document.createElement('link');
            l.id = 'quill-css'; l.rel = 'stylesheet';
            l.href = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css';
            document.head.appendChild(l);
        }
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js';
        s.onload = resolve;
        document.head.appendChild(s);
    });
    return _quillReady;
}

/* ─── API PÚBLICA ───────────────────────────────────────────────────── */
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
    _st.quill = null;
    containerEl.querySelector('.panel-anotacao')?.remove();
    clearTimeout(_st.timer);
}

/* ─── STORAGE ───────────────────────────────────────────────────────── */
async function _carregarTodas() {
    try {
        const r = await window.Storage?.get?.(STORAGE_PREFIX + _st.usuario);
        if (r) _st.dados = r;
    } catch (_) {}
}
async function _persistir() {
    try {
        await window.Storage?.set?.(STORAGE_PREFIX + _st.usuario, _st.dados);
    } catch (_) {}
}
function _agendarSalvamento(discId, id, wrapper) {
    clearTimeout(_st.timer);
    _st.timer = setTimeout(async () => {
        _capturarQuill(discId, id);
        await _persistir();
        _atualizarStatus(wrapper, id, true);
        _mostrarToast('Salvo automaticamente');
    }, AUTOSAVE_DELAY);
}

/* ─── CRUD ──────────────────────────────────────────────────────────── */
function _listarOrdenado(discId) {
    return Object.values(_st.dados[discId] ?? {})
        .sort((a, b) => b.editadoEm - a.editadoEm);
}
function _criarNota(discId, titulo) {
    if (!_st.dados[discId]) _st.dados[discId] = {};
    const agora = Date.now();
    const id    = `nota_${agora}`;
    _st.dados[discId][id] = {
        id,
        titulo: titulo.trim() || 'Sem título',
        delta: null, html: '',
        criadoEm: agora, editadoEm: agora,
    };
    _persistir();
    return _st.dados[discId][id];
}
function _deletarNota(discId, id) {
    delete _st.dados[discId]?.[id];
    _persistir();
}
function _renomearNota(discId, id, novoTitulo) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return false;
    const novo = novoTitulo.trim() || nota.titulo;
    if (novo === nota.titulo) return false;
    nota.titulo    = novo;
    nota.editadoEm = Date.now();
    _persistir();
    return true;
}
function _capturarQuill(discId, id) {
    if (!_st.quill || !_st.dados[discId]?.[id]) return;
    _st.dados[discId][id].delta     = JSON.parse(JSON.stringify(_st.quill.getContents()));
    _st.dados[discId][id].html      = _st.quill.getSemanticHTML();
    _st.dados[discId][id].editadoEm = Date.now();
}

/* ─── MODAL "NOVA ANOTAÇÃO" ─────────────────────────────────────────── */
function _pedirNomeNota(discId, containerEl) {
    // Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 2000;
        background: rgba(0,0,0,.55);
        backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        animation: fadeIn .18s ease both;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #161616;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 16px;
        padding: 1.6rem 1.8rem 1.4rem;
        width: 90%; max-width: 360px;
        box-shadow: 0 24px 60px rgba(0,0,0,.6);
        display: flex; flex-direction: column; gap: 1rem;
        animation: ckFadeUp .22s ease both;
    `;

    modal.innerHTML = `
        <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(124,90,243,.15);border:1px solid rgba(124,90,243,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas fa-pen-to-square" style="font-size:.72rem;color:#a78bfa;"></i>
            </div>
            <span style="font-size:.92rem;font-weight:700;color:#eaeaea;font-family:'DM Sans',sans-serif;letter-spacing:-.01em;">Nova anotação</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:.4rem;">
            <label style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;font-family:'DM Sans',sans-serif;">Nome</label>
            <input
                id="modal-nome-input"
                maxlength="60"
                placeholder="Ex: Resumo da aula"
                style="
                    font-family:'DM Sans',sans-serif;
                    font-size:.88rem;
                    font-weight:600;
                    color:#eaeaea;
                    background:rgba(255,255,255,.06);
                    border:1px solid rgba(124,90,243,.35);
                    border-radius:8px;
                    padding:.55rem .85rem;
                    outline:none;
                    width:100%;
                    letter-spacing:-.01em;
                    transition:border-color .18s;
                "
            />
            <span id="modal-nome-counter" style="font-size:.65rem;color:rgba(255,255,255,.25);align-self:flex-end;">0/60</span>
        </div>

        <div style="display:flex;gap:.5rem;justify-content:flex-end;">
            <button id="modal-cancelar" style="
                display:inline-flex;align-items:center;gap:.35rem;
                padding:.38rem .85rem;border-radius:8px;
                border:1px solid rgba(255,255,255,.1);
                background:rgba(255,255,255,.04);
                color:rgba(255,255,255,.45);
                font-family:'DM Sans',sans-serif;font-size:.78rem;
                cursor:pointer;transition:background .15s,color .15s;
            ">
                <i class="fas fa-xmark" style="font-size:.7rem;"></i> Cancelar
            </button>
            <button id="modal-criar" style="
                display:inline-flex;align-items:center;gap:.35rem;
                padding:.38rem .9rem;border-radius:8px;
                border:1px solid rgba(124,90,243,.35);
                background:rgba(124,90,243,.15);
                color:#a78bfa;
                font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;
                cursor:pointer;transition:background .15s,border-color .15s;
            ">
                <i class="fas fa-plus" style="font-size:.7rem;"></i> Criar
            </button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const inp     = modal.querySelector('#modal-nome-input');
    const counter = modal.querySelector('#modal-nome-counter');
    const btnCria = modal.querySelector('#modal-criar');
    const btnCanc = modal.querySelector('#modal-cancelar');

    inp.focus();

    inp.addEventListener('input', () => {
        const len = inp.value.length;
        counter.textContent = `${len}/60`;
        counter.style.color = len >= 55 ? 'rgba(239,68,68,.65)' : 'rgba(255,255,255,.25)';
        inp.style.borderColor = len >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.35)';
    });

    inp.addEventListener('focus', () => {
        inp.style.borderColor = inp.value.length >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.6)';
    });

    const fechar = () => overlay.remove();

    const confirmar = () => {
        const nome = inp.value.trim();
        if (!nome) {
            inp.style.borderColor = 'rgba(239,68,68,.5)';
            inp.focus();
            inp.placeholder = 'Digite um nome para continuar';
            return;
        }
        fechar();
        _criarNota(discId, nome);
        _limparPainel(containerEl);
        _renderizarLista(discId, containerEl);
    };

    btnCria.addEventListener('click', confirmar);
    btnCanc.addEventListener('click', fechar);

    inp.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); confirmar(); }
        if (e.key === 'Escape') { fechar(); }
    });

    // Fechar ao clicar fora do modal
    overlay.addEventListener('mousedown', e => {
        if (e.target === overlay) fechar();
    });

    // Hover nos botões
    btnCria.addEventListener('mouseenter', () => { btnCria.style.background = 'rgba(124,90,243,.25)'; btnCria.style.borderColor = 'rgba(124,90,243,.55)'; });
    btnCria.addEventListener('mouseleave', () => { btnCria.style.background = 'rgba(124,90,243,.15)'; btnCria.style.borderColor = 'rgba(124,90,243,.35)'; });
    btnCanc.addEventListener('mouseenter', () => { btnCanc.style.background = 'rgba(255,255,255,.08)'; btnCanc.style.color = 'rgba(255,255,255,.75)'; });
    btnCanc.addEventListener('mouseleave', () => { btnCanc.style.background = 'rgba(255,255,255,.04)'; btnCanc.style.color = 'rgba(255,255,255,.45)'; });
}

/* ─── MODAL "RENOMEAR ANOTAÇÃO" ─────────────────────────────────────── */
function _pedirNomeRename(discId, id, tituloEl, dataEl) {
    const valorOriginal = _st.dados[discId]?.[id]?.titulo ?? '';

    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 2000;
        background: rgba(0,0,0,.55);
        backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        animation: fadeIn .18s ease both;
    `;

    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #161616;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 16px;
        padding: 1.6rem 1.8rem 1.4rem;
        width: 90%; max-width: 360px;
        box-shadow: 0 24px 60px rgba(0,0,0,.6);
        display: flex; flex-direction: column; gap: 1rem;
        animation: ckFadeUp .22s ease both;
    `;

    modal.innerHTML = `
        <div style="display:flex;align-items:center;gap:.6rem;">
            <div style="width:32px;height:32px;border-radius:8px;background:rgba(124,90,243,.15);border:1px solid rgba(124,90,243,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas fa-pencil" style="font-size:.72rem;color:#a78bfa;"></i>
            </div>
            <span style="font-size:.92rem;font-weight:700;color:#eaeaea;font-family:'DM Sans',sans-serif;letter-spacing:-.01em;">Renomear anotação</span>
        </div>

        <div style="display:flex;flex-direction:column;gap:.4rem;">
            <label style="font-size:.7rem;font-weight:600;color:rgba(255,255,255,.4);letter-spacing:.5px;text-transform:uppercase;font-family:'DM Sans',sans-serif;">Novo nome</label>
            <input
                id="modal-rename-input"
                maxlength="60"
                placeholder="Digite o novo nome…"
                style="
                    font-family:'DM Sans',sans-serif;
                    font-size:.88rem;
                    font-weight:600;
                    color:#eaeaea;
                    background:rgba(255,255,255,.06);
                    border:1px solid rgba(124,90,243,.35);
                    border-radius:8px;
                    padding:.55rem .85rem;
                    outline:none;
                    width:100%;
                    letter-spacing:-.01em;
                    transition:border-color .18s;
                "
            />
            <span id="modal-rename-counter" style="font-size:.65rem;color:rgba(255,255,255,.25);align-self:flex-end;">${valorOriginal.length}/60</span>
        </div>

        <div style="display:flex;gap:.5rem;justify-content:flex-end;">
            <button id="modal-rename-cancelar" style="
                display:inline-flex;align-items:center;gap:.35rem;
                padding:.38rem .85rem;border-radius:8px;
                border:1px solid rgba(255,255,255,.1);
                background:rgba(255,255,255,.04);
                color:rgba(255,255,255,.45);
                font-family:'DM Sans',sans-serif;font-size:.78rem;
                cursor:pointer;transition:background .15s,color .15s;
            ">
                <i class="fas fa-xmark" style="font-size:.7rem;"></i> Cancelar
            </button>
            <button id="modal-rename-salvar" style="
                display:inline-flex;align-items:center;gap:.35rem;
                padding:.38rem .9rem;border-radius:8px;
                border:1px solid rgba(124,90,243,.35);
                background:rgba(124,90,243,.15);
                color:#a78bfa;
                font-family:'DM Sans',sans-serif;font-size:.78rem;font-weight:600;
                cursor:pointer;transition:background .15s,border-color .15s;
            ">
                <i class="fas fa-check" style="font-size:.7rem;"></i> Salvar
            </button>
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    const inp     = modal.querySelector('#modal-rename-input');
    const counter = modal.querySelector('#modal-rename-counter');
    const btnSalv = modal.querySelector('#modal-rename-salvar');
    const btnCanc = modal.querySelector('#modal-rename-cancelar');

    // Preenche com o valor atual e posiciona cursor no fim
    inp.value = valorOriginal;
    inp.focus();
    inp.setSelectionRange(valorOriginal.length, valorOriginal.length);

    inp.addEventListener('input', () => {
        const l = inp.value.length;
        counter.textContent = `${l}/60`;
        counter.style.color = l >= 55 ? 'rgba(239,68,68,.65)' : 'rgba(255,255,255,.25)';
        inp.style.borderColor = l >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.35)';
    });

    inp.addEventListener('focus', () => {
        inp.style.borderColor = inp.value.length >= 55 ? 'rgba(239,68,68,.45)' : 'rgba(124,90,243,.6)';
    });

    const fechar = () => overlay.remove();

    const confirmar = () => {
        const novo = inp.value.trim();
        if (!novo) {
            inp.style.borderColor = 'rgba(239,68,68,.5)';
            inp.focus();
            inp.placeholder = 'Digite um nome para continuar';
            return;
        }
        const mudou = _renomearNota(discId, id, novo);
        fechar();
        if (mudou) {
            if (tituloEl) tituloEl.textContent = novo;
            if (dataEl)   dataEl.textContent   = _formatarData(Date.now());
            _mostrarToast('Título atualizado');
        }
    };

    btnSalv.addEventListener('click', confirmar);
    btnCanc.addEventListener('click', fechar);

    inp.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); confirmar(); }
        if (e.key === 'Escape') { fechar(); }
    });

    overlay.addEventListener('mousedown', e => {
        if (e.target === overlay) fechar();
    });

    // Hover
    btnSalv.addEventListener('mouseenter', () => { btnSalv.style.background = 'rgba(124,90,243,.25)'; btnSalv.style.borderColor = 'rgba(124,90,243,.55)'; });
    btnSalv.addEventListener('mouseleave', () => { btnSalv.style.background = 'rgba(124,90,243,.15)'; btnSalv.style.borderColor = 'rgba(124,90,243,.35)'; });
    btnCanc.addEventListener('mouseenter', () => { btnCanc.style.background = 'rgba(255,255,255,.08)'; btnCanc.style.color = 'rgba(255,255,255,.75)'; });
    btnCanc.addEventListener('mouseleave', () => { btnCanc.style.background = 'rgba(255,255,255,.04)'; btnCanc.style.color = 'rgba(255,255,255,.45)'; });
}

/* ─── LISTA ─────────────────────────────────────────────────────────── */
function _limparPainel(el) {
    ['.panel-videos','.panel-modules','.panel-resumos','.panel-anotacao']
        .forEach(s => el.querySelector(s)?.remove());
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

    // Agora abre modal ao invés de criar direto
    header.querySelector('.anot-btn-nova').addEventListener('click', () => {
        _pedirNomeNota(discId, containerEl);
    });
}

function _criarCardNota(discId, nota, containerEl) {
    const card = document.createElement('div');
    card.className  = 'anot-card';
    card.dataset.id = nota.id;
    card.innerHTML  = `
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

    card.querySelector('.anot-card-main').addEventListener('click', () =>
        _abrirEditor(discId, nota.id, containerEl));
    card.querySelector('.btn-renomear').addEventListener('click', e => {
        e.stopPropagation();
        _pedirNomeRename(
            discId,
            nota.id,
            card.querySelector('.anot-card-titulo'),
            card.querySelector('.anot-card-data')
        );
    });
    card.querySelector('.btn-deletar').addEventListener('click', e => {
        e.stopPropagation();
        _confirmarDeletar(discId, nota.id, card, containerEl);
    });
    return card;
}

/* ─── RENAME INLINE ─────────────────────────────────────────────────── */
function _renomearInline(discId, id, alvoEl, onConcluido) {
    if (_st.renameAtivo) return;
    _st.renameAtivo = true;

    const valorOriginal = _st.dados[discId]?.[id]?.titulo ?? '';

    const input = document.createElement('input');
    input.className = 'anot-rename-input';
    input.maxLength = 60;
    input.value     = valorOriginal;

    // Impede que mousedown dentro do input propague
    input.addEventListener('mousedown', e => e.stopPropagation());

    alvoEl.replaceWith(input);

    // Posiciona cursor no fim sem selecionar tudo
    input.focus();
    const len = input.value.length;
    input.setSelectionRange(len, len);

    // Contador de chars
    const counter = document.createElement('span');
    counter.style.cssText = 'font-size:.62rem;color:rgba(255,255,255,.25);margin-left:5px;white-space:nowrap;flex-shrink:0;pointer-events:none;';
    counter.textContent = `${len}/60`;
    input.after(counter);

    input.addEventListener('input', () => {
        const l = input.value.length;
        counter.textContent = `${l}/60`;
        counter.style.color = l >= 55 ? 'rgba(239,68,68,.6)' : 'rgba(255,255,255,.25)';
    });

    let encerrado = false;

    const encerrar = (confirmar) => {
        if (encerrado) return;
        encerrado       = true;
        _st.renameAtivo = false;
        document.removeEventListener('mousedown', onMousedownFora, true);

        counter.remove();

        const valorFinal  = input.value.trim() || valorOriginal;
        const mudou       = confirmar && _renomearNota(discId, id, valorFinal);
        const textoExibir = mudou ? valorFinal : valorOriginal;

        const novoEl = document.createElement(alvoEl.tagName.toLowerCase());
        novoEl.className   = alvoEl.className;
        novoEl.textContent = textoExibir;
        if (alvoEl.title) novoEl.title = alvoEl.title;

        if (input.isConnected) input.replaceWith(novoEl);

        if (mudou) {
            _mostrarToast('Título atualizado');
            const dataEl = novoEl.closest('.anot-card')?.querySelector('.anot-card-data');
            if (dataEl) dataEl.textContent = _formatarData(Date.now());
        }
        onConcluido?.(novoEl, mudou);
    };

    // Só registra o listener externo depois de um tick,
    // e usa pointerdown em vez de mousedown para pegar taps também
    const onMousedownFora = (e) => {
        // Se o clique foi dentro do input ou do counter, ignora
        if (e.target === input || e.target === counter) return;
        encerrar(true);
    };

    // Delay maior: espera o evento do clique que acionou o renomear terminar
    setTimeout(() => {
        document.addEventListener('mousedown', onMousedownFora, true);
    }, 150);

    input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); encerrar(true); }
        if (e.key === 'Escape') { input.value = valorOriginal; encerrar(false); }
    });

    // Ao clicar no próprio input, reposiciona cursor onde o user clicou (comportamento padrão)
    // Não precisa de handler extra — o navegador já faz isso nativamente
}

/* ─── DELETAR ───────────────────────────────────────────────────────── */
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
                if (lista) lista.innerHTML = `<div class="anot-vazio">
                    <i class="fas fa-pen-to-square"></i>
                    <p>Nenhuma anotação ainda.</p>
                    <span>Clique em "Nova anotação" para começar.</span></div>`;
            }
        }, { once: true });
        _mostrarToast('Anotação deletada');
    });
    actions.querySelector('.btn-confirmar-nao').addEventListener('click', e => {
        e.stopPropagation();
        actions.innerHTML = `
            <button class="anot-card-btn btn-renomear"><i class="fas fa-pencil"></i> Renomear</button>
            <button class="anot-card-btn btn-deletar"><i class="fas fa-trash-can"></i> Deletar</button>`;
        actions.querySelector('.btn-renomear').addEventListener('click', ev => {
            ev.stopPropagation();
            _pedirNomeRename(
                discId,
                id,
                cardEl.querySelector('.anot-card-titulo'),
                cardEl.querySelector('.anot-card-data')
            );
        });
        actions.querySelector('.btn-deletar').addEventListener('click', ev => {
            ev.stopPropagation();
            _confirmarDeletar(discId, id, cardEl, containerEl);
        });
    });
}

/* ─── EDITOR — abrir ────────────────────────────────────────────────── */
async function _abrirEditor(discId, id, containerEl) {
    const nota = _st.dados[discId]?.[id];
    if (!nota) return;
    const wrapper = containerEl.querySelector('.panel-anotacao');
    if (!wrapper) return;

    wrapper.innerHTML = `<div class="anot-loading">
        <i class="fas fa-circle-notch fa-spin"></i>
        <span>Carregando editor…</span></div>`;

    await _carregarQuill();
    wrapper.innerHTML = '';
    wrapper.appendChild(_buildEditorDOM(discId, id, nota));

    _st.quill     = null;
    _st.ultimaSel = null;

    _st.quill = new window.Quill(wrapper.querySelector('.anot-quill-editor'), {
        theme:       'snow',
        placeholder: 'Comece a escrever…',
        modules: {
            toolbar: { container: '#anot-toolbar-' + id },
            history: { delay: 500, maxStack: 100 },
        }
    });

    if (nota.delta) {
        try { _st.quill.setContents(nota.delta, 'silent'); } catch (_) {}
    }

    _st.quill.setSelection(_st.quill.getLength(), 0);

    _st.quill.on('selection-change', range => {
        if (range) _st.ultimaSel = range;
        _sincronizarToolbar(wrapper, id);
    });
    _st.quill.on('text-change', (_delta, _old, source) => {
        if (source !== 'user') return;
        _atualizarStatus(wrapper, id, false);
        _atualizarWC(wrapper);
        _agendarSalvamento(discId, id, wrapper);
    });

    _montarToolbar(discId, id, wrapper);
    _montarTopbar(discId, id, wrapper, containerEl);
    _atualizarWC(wrapper);
}

/* ─── TOOLBAR ───────────────────────────────────────────────────────── */
function _montarToolbar(discId, id, wrapper) {
    if (!_st.quill) return;
    const toolbar = wrapper.querySelector(`#anot-toolbar-${id}`);
    if (!toolbar) return;

    toolbar.addEventListener('mousedown', e => {
        const btn = e.target.closest('button');
        if (!btn) return;
        if (btn.classList.contains('ql-code-block')) {
            e.preventDefault();
            e.stopImmediatePropagation();
            _st.quill.focus();
            if (_st.ultimaSel) {
                try { _st.quill.setSelection(_st.ultimaSel.index, _st.ultimaSel.length, 'silent'); } catch (_) {}
            }
            const fmt = _st.quill.getFormat();
            _st.quill.format('code-block', !fmt['code-block'], 'user');
            setTimeout(() => _sincronizarToolbar(wrapper, id), 30);
        }
    }, true);
}

function _sincronizarToolbar(wrapper, id) {
    if (!_st.quill) return;
    const toolbar = wrapper.querySelector(`#anot-toolbar-${id}`);
    if (!toolbar) return;
    const fmt = _st.quill.getFormat();

    ['bold','italic','underline','strike','blockquote'].forEach(f =>
        toolbar.querySelector(`.ql-${f}`)?.classList.toggle('ql-active', !!fmt[f])
    );
    toolbar.querySelector('.ql-code')?.classList.toggle('ql-active', !!fmt['code']);
    toolbar.querySelector('.ql-code-block')?.classList.toggle('ql-active', !!fmt['code-block']);

    const isCheck = fmt.list === 'unchecked' || fmt.list === 'checked';
    toolbar.querySelector('.ql-list[value="check"]')?.classList.toggle('ql-active',   isCheck);
    toolbar.querySelector('.ql-list[value="bullet"]')?.classList.toggle('ql-active',  fmt.list === 'bullet');
    toolbar.querySelector('.ql-list[value="ordered"]')?.classList.toggle('ql-active', fmt.list === 'ordered');

    const hs = toolbar.querySelector('.ql-header');
    if (hs) hs.value = fmt.header ? String(fmt.header) : '';
}

/* ─── TOPBAR ────────────────────────────────────────────────────────── */
function _montarTopbar(discId, id, wrapper, containerEl) {
    const btnSalvar = wrapper.querySelector(`#anot-save-${id}`);

    btnSalvar?.addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id);
        await _persistir();
        _atualizarStatus(wrapper, id, true);
        _mostrarToast('Anotação salva');
    });

    const atalho = e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's' && _st.quill) {
            e.preventDefault();
            btnSalvar?.click();
        }
        if (!wrapper.isConnected) document.removeEventListener('keydown', atalho);
    };
    document.addEventListener('keydown', atalho);

    wrapper.querySelector('.anot-btn-voltar').addEventListener('click', async () => {
        clearTimeout(_st.timer);
        _capturarQuill(discId, id);
        await _persistir();
        _st.quill       = null;
        _st.renameAtivo = false;
        document.removeEventListener('keydown', atalho);
        _limparPainel(containerEl);
        _renderizarLista(discId, containerEl);
    });
}

/* ─── DOM DO EDITOR ─────────────────────────────────────────────────── */
function _buildEditorDOM(discId, id, nota) {
    const frag = document.createDocumentFragment();

    const topbar = document.createElement('div');
    topbar.className = 'anot-editor-topbar';
    topbar.innerHTML = `
        <button class="anot-btn-voltar"><i class="fas fa-arrow-left"></i> Anotações</button>
        <span class="anot-editor-titulo-display">${_esc(nota.titulo)}</span>
        <div class="anot-topbar-right">
            <span class="anot-editor-status" id="anot-status-${id}">—</span>
            <button class="anot-btn-salvar" id="anot-save-${id}">
                <i class="fas fa-floppy-disk"></i> Salvar
            </button>
        </div>`;
    frag.appendChild(topbar);

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

    const wrap = document.createElement('div');
    wrap.className = 'anot-quill-wrap';
    const ed = document.createElement('div');
    ed.className = 'anot-quill-editor';
    wrap.appendChild(ed);
    frag.appendChild(wrap);

    const sb = document.createElement('div');
    sb.className = 'anot-statusbar';
    sb.innerHTML = `
        <span><span class="anot-wc">0</span> palavras</span>
        <span class="anot-status-data">Editado ${_formatarData(nota.editadoEm)}</span>`;
    frag.appendChild(sb);

    return frag;
}

/* ─── UTILITÁRIOS ───────────────────────────────────────────────────── */
function _atualizarStatus(wrapper, id, salvo) {
    const el = wrapper.querySelector(`#anot-status-${id}`);
    if (!el) return;
    if (salvo) {
        el.textContent = 'Salvo';
        el.classList.add('saved');
        setTimeout(() => { el.textContent = '—'; el.classList.remove('saved'); }, 2000);
    } else {
        el.textContent = 'Não salvo';
        el.classList.remove('saved');
    }
}
function _atualizarWC(wrapper) {
    const el = wrapper.querySelector('.anot-wc');
    if (!el || !_st.quill) return;
    const txt = _st.quill.getText().trim();
    el.textContent = txt === '' ? 0 : txt.split(/\s+/).length;
}
function _gerarPreview(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const txt = tmp.innerText?.trim() ?? '';
    return _esc(txt.slice(0, 90)) + (txt.length > 90 ? '…' : '');
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

/* ─── TOAST ─────────────────────────────────────────────────────────── */
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