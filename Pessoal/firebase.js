/* ═══════════════════════════════════════════════════════════════════════
   firebase.js — Firestore modular v10
   Estrutura:
     2026.1 (coleção)
       └── {usuario} (documento)
             ├── checklists/{id}
             ├── anotacoes/notas/itens/{id}
             └── flashcards/cards/itens/{id}
═══════════════════════════════════════════════════════════════════════ */

import { initializeApp }
    from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import {
    getFirestore,
    collection, doc,
    setDoc, getDoc, getDocs, deleteDoc,
    onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey:            'AIzaSyC65C1PnBTDM2H3JjVAF4eJpnq-TyLlI-0',
    authDomain:        'ap1-3-semestre.firebaseapp.com',
    projectId:         'ap1-3-semestre',
    storageBucket:     'ap1-3-semestre.firebasestorage.app',
    messagingSenderId: '465691403481',
    appId:             '1:465691403481:web:4909fd37f62f94b7eb0ac8'
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

const COL = '2026.1';

// ─── helpers de referência ────────────────────────────────────────────

function _checklistDoc(usuario, id) {
    return doc(db, COL, usuario.toLowerCase(), 'checklists', id);
}

function _checklistsCol(usuario) {
    return collection(db, COL, usuario.toLowerCase(), 'checklists');
}

function _notaDoc(usuario, id) {
    return doc(db, COL, usuario.toLowerCase(), 'anotacoes', 'notas', 'itens', id);
}

function _notasCol(usuario) {
    return collection(db, COL, usuario.toLowerCase(), 'anotacoes', 'notas', 'itens');
}

function _cardDoc(usuario, id) {
    return doc(db, COL, usuario.toLowerCase(), 'flashcards', 'cards', 'itens', id);
}

function _cardsCol(usuario) {
    return collection(db, COL, usuario.toLowerCase(), 'flashcards', 'cards', 'itens');
}


// ═════════════════════════════════════════════════════════════════════
//  CHECKLIST
//  Usado por: pessoal.js → salvarNoFirebase / carregarDoFirebase / assinarFirebase
// ═════════════════════════════════════════════════════════════════════

export async function salvarNoFirebase(nome, checklist, videosAssistidos) {
    const ref = _checklistDoc(nome, nome.toLowerCase());
    console.log(`[FIREBASE] ✉ Salvando checklist — usuário: ${nome}`);
    try {
        await setDoc(ref, {
            usuario:           nome,
            ultimaAtualizacao: new Date().toISOString(),
            checklist:         checklist        ?? {},
            videosAssistidos:  videosAssistidos ?? {}
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Checklist salvo — usuário: ${nome}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar checklist — usuário: ${nome}`, err);
        throw err;
    }
}

export async function carregarDoFirebase(nome) {
    console.log(`[FIREBASE] 🔍 Carregando checklist — usuário: ${nome}`);
    const ref  = _checklistDoc(nome, nome.toLowerCase());
    const snap = await getDoc(ref);
    if (snap.exists()) {
        console.log(`[FIREBASE] ✅ Checklist encontrado — usuário: ${nome}`);
        return snap.data();
    }
    console.log(`[FIREBASE] ℹ️ Nenhum checklist encontrado — usuário: ${nome}`);
    return null;
}

export function assinarFirebase(nome, callback) {
    const ref = _checklistDoc(nome, nome.toLowerCase());
    return onSnapshot(ref, snap => {
        if (snap.exists()) callback(snap.data());
    });
}

// Aliases para novos nomes (uso interno / futuro)
export async function salvarChecklist(usuario, dados) {
    return salvarNoFirebase(usuario, dados.checklist ?? dados, dados.videosAssistidos ?? {});
}

export async function listarChecklists(usuario) {
    const snap = await getDocs(_checklistsCol(usuario));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function carregarChecklist(usuario, id) {
    const ref  = _checklistDoc(usuario, id ?? usuario.toLowerCase());
    const snap = await getDoc(ref);
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function deletarChecklist(usuario, id) {
    await deleteDoc(_checklistDoc(usuario, id));
}

export function assinarChecklist(usuario, id, callback) {
    return onSnapshot(_checklistDoc(usuario, id ?? usuario.toLowerCase()), snap => {
        if (snap.exists()) callback({ id: snap.id, ...snap.data() });
    });
}


// ═════════════════════════════════════════════════════════════════════
//  ANOTAÇÕES
//  Usado por: anotacao.js → salvarAnotacaoNoFirebase / deletarAnotacaoNoFirebase
//                         → carregarAnotacoesDoFirebase
// ═════════════════════════════════════════════════════════════════════

export async function salvarAnotacaoNoFirebase(nome, nota) {
    const id  = nota.id ?? `nota_${Date.now()}`;
    const ref = _notaDoc(nome, id);
    console.log(`[FIREBASE] ✉ Salvando anotação "${nota.titulo}" — usuário: ${nome}`);
    try {
        await setDoc(ref, {
            ...nota,
            id,
            ultimaAtualizacao: new Date().toISOString()
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Anotação salva — id: ${id}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar anotação — id: ${id}`, err);
        throw err;
    }
}

export async function deletarAnotacaoNoFirebase(nome, notaId) {
    const ref = _notaDoc(nome, notaId);
    console.log(`[FIREBASE] 🗑 Deletando anotação ${notaId} — usuário: ${nome}`);
    try {
        await deleteDoc(ref);
        console.log(`[FIREBASE] ✅ Anotação deletada — id: ${notaId}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao deletar anotação — id: ${notaId}`, err);
        throw err;
    }
}

export async function carregarAnotacoesDoFirebase(nome) {
    console.log(`[FIREBASE] 🔍 Carregando anotações — usuário: ${nome}`);
    try {
        const snap  = await getDocs(_notasCol(nome));
        const dados = {};
        snap.forEach(docSnap => {
            const nota = docSnap.data();
            const disc = nota.discId;
            if (!disc) return;
            if (!dados[disc]) dados[disc] = {};
            dados[disc][nota.id] = nota;
        });
        console.log(`[FIREBASE] ✅ Anotações carregadas — usuário: ${nome} (${snap.size} nota(s))`);
        return dados;
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao carregar anotações — usuário: ${nome}`, err);
        return {};
    }
}

// Aliases para novos nomes
export async function salvarNota(usuario, nota) {
    return salvarAnotacaoNoFirebase(usuario, nota);
}

export async function listarNotas(usuario) {
    const snap = await getDocs(_notasCol(usuario));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function deletarNota(usuario, id) {
    return deletarAnotacaoNoFirebase(usuario, id);
}


// ═════════════════════════════════════════════════════════════════════
//  FLASHCARDS — SRS
//  Usado por: card.js → carregarPerfisSRS / salvarPerfilSRS
//             pessoal.js → carregarTodosPerfisSRS
// ═════════════════════════════════════════════════════════════════════

export async function carregarPerfisSRS(nome, discId) {
    console.log(`[FIREBASE] 🔍 Carregando SRS — usuário: ${nome} | disc: ${discId}`);
    try {
        const snap    = await getDocs(_cardsCol(nome));
        const dados   = {};
        const prefixo = { design: 'd', banco: 'b', redes: 'r', poo: 'p' }[discId];

        snap.forEach(docSnap => {
            const cardId = docSnap.id;
            if (prefixo && cardId.startsWith(prefixo)) {
                dados[cardId] = docSnap.data();
            }
        });

        console.log(`[FIREBASE] ✅ Perfis SRS carregados — ${Object.keys(dados).length} card(s)`);
        return dados;
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao carregar perfis SRS — usuário: ${nome}`, err);
        return {};
    }
}

export async function salvarPerfilSRS(nome, cardId, perfil) {
    const ref = _cardDoc(nome, cardId);
    try {
        await setDoc(ref, {
            ...perfil,
            ultimaAtualizacao: new Date().toISOString()
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Perfil SRS salvo — usuário: ${nome} | card: ${cardId}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar perfil SRS — card: ${cardId}`, err);
        throw err;
    }
}

export async function carregarTodosPerfisSRS(nome) {
    console.log(`[FIREBASE] 🔍 Carregando todos os perfis SRS — usuário: ${nome}`);
    try {
        const snap  = await getDocs(_cardsCol(nome));
        const dados = {};
        snap.forEach(docSnap => { dados[docSnap.id] = docSnap.data(); });
        console.log(`[FIREBASE] ✅ Total de perfis SRS: ${snap.size}`);
        return dados;
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao carregar todos os perfis SRS — usuário: ${nome}`, err);
        return {};
    }
}

// Aliases para novos nomes
export async function salvarFlashcard(usuario, card) {
    const id = card.id ?? `card_${Date.now()}`;
    return salvarPerfilSRS(usuario, id, card);
}

export async function listarFlashcards(usuario) {
    const snap = await getDocs(_cardsCol(usuario));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function deletarFlashcard(usuario, id) {
    await deleteDoc(_cardDoc(usuario, id));
}


// ═════════════════════════════════════════════════════════════════════
//  DIAGNÓSTICO
// ═════════════════════════════════════════════════════════════════════

export async function testarFirebase(nome) {
    console.group(`[FIREBASE] diagnóstico — usuário: ${nome}`);
    try {
        const id = '_teste_diagnostico';
        await salvarAnotacaoNoFirebase(nome, { id, titulo: 'teste', conteudo: 'ok', discId: '_teste' });
        console.log('✅ ESCRITA ok');
        await deletarAnotacaoNoFirebase(nome, id);
        console.log('✅ DELEÇÃO ok');
        console.log('🎉 Firebase funcionando!');
    } catch (err) {
        console.error('❌ ERRO:', err.code, err.message);
    }
    console.groupEnd();
}