/* ═══════════════════════════════════════════════════════════════════════
   firebase.js — Integração com Firestore  (v4 — inclui flashcards SRS)
   Responsabilidade única: comunicação com o banco de dados.
════════════════════════════════════════════════════════════════════════ */

import { initializeApp }
    from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc, deleteDoc, collection, getDocs, onSnapshot }
    from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

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

/**
 * Função de diagnóstico — chame no console do navegador:
 *   import('./firebase.js').then(m => m.testarFirebase('Rafael'))
 */
export async function testarFirebase(nome) {
    console.group(`[FIREBASE DIAGNÓSTICO] usuário: ${nome}`);
    try {
        const refTeste = doc(db, 'anotacoes', nome, 'notas', '_teste_diagnostico');
        await setDoc(refTeste, { ok: true, ts: Date.now() });
        console.log('✅ ESCRITA ok — anotacoes/' + nome + '/notas/_teste_diagnostico');

        const snap = await getDoc(refTeste);
        console.log('✅ LEITURA ok — dados:', snap.data());

        await deleteDoc(refTeste);
        console.log('✅ DELEÇÃO ok');

        console.log('🎉 Firebase funcionando!');
    } catch (err) {
        console.error('❌ ERRO Firebase:', err.code, err.message);
        if (err.code === 'permission-denied') {
            console.warn('👉 Causa: Regras do Firestore bloqueando. Vá em Firebase Console → Firestore → Regras e libere.');
        }
    }
    console.groupEnd();
}


// ═════════════════════════════════════════════════════════════════════
//  CHECKLIST
// ═════════════════════════════════════════════════════════════════════

export async function salvarNoFirebase(nome, checklist, videosAssistidos) {
    const ref = doc(db, 'checklists', nome.toLowerCase());
    console.log(`[FIREBASE] ✉ Enviando dados para Firestore — usuário: ${nome}`);
    try {
        await setDoc(ref, {
            usuario:           nome,
            ultimaAtualizacao: new Date().toISOString(),
            checklist:         checklist        ?? {},
            videosAssistidos:  videosAssistidos ?? {}
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Dados salvos com sucesso — usuário: ${nome}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar dados — usuário: ${nome}`, err);
        throw err;
    }
}

export async function carregarDoFirebase(nome) {
    console.log(`[FIREBASE] 🔍 Carregando dados — usuário: ${nome}`);
    const ref  = doc(db, 'checklists', nome.toLowerCase());
    const snap = await getDoc(ref);
    if (snap.exists()) {
        console.log(`[FIREBASE] ✅ Dados encontrados — usuário: ${nome}`);
        return snap.data();
    } else {
        console.log(`[FIREBASE] ℹ️ Nenhum dado encontrado no Firestore — usuário: ${nome}`);
        return null;
    }
}

export function assinarFirebase(nome, callback) {
    const ref = doc(db, 'checklists', nome.toLowerCase());
    return onSnapshot(ref, snap => {
        if (snap.exists()) callback(snap.data());
    });
}


// ═════════════════════════════════════════════════════════════════════
//  ANOTAÇÕES
//  Estrutura Firestore:
//    anotacoes/{nome}/notas/{notaId}
// ═════════════════════════════════════════════════════════════════════

function _notasRef(nome) {
    return collection(db, 'anotacoes', nome, 'notas');
}

function _notaDocRef(nome, notaId) {
    return doc(db, 'anotacoes', nome, 'notas', notaId);
}

export async function salvarAnotacaoNoFirebase(nome, nota) {
    const ref = _notaDocRef(nome, nota.id);
    console.log(`[FIREBASE] ✉ Salvando anotação "${nota.titulo}" — usuário: ${nome}`);
    try {
        await setDoc(ref, {
            ...nota,
            ultimaAtualizacao: new Date().toISOString(),
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Anotação salva — id: ${nota.id}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar anotação — id: ${nota.id}`, err);
        throw err;
    }
}

export async function deletarAnotacaoNoFirebase(nome, notaId) {
    const ref = _notaDocRef(nome, notaId);
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
        const snap  = await getDocs(_notasRef(nome));
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


// ═════════════════════════════════════════════════════════════════════
//  FLASHCARDS — SRS (Spaced Repetition)
//
//  Estrutura Firestore:
//    flashcards/{nome}/cards/{cardId}
//
//  Perfil de cada card:
//  {
//    intervalo:           number,   // dias até próxima revisão
//    proximaVez:          number,   // timestamp ms
//    acertos:             number,   // total de acertos
//    erros:               number,   // total de erros
//    diffMarcada:         string,   // última dificuldade: "easy"|"medium"|"hard"
//    tentativas:          number,   // total de vezes que respondeu (acerto + erro)
//    acertosConsecutivos: number,   // acertos seguidos sem errar
//  }
// ═════════════════════════════════════════════════════════════════════

/**
 * Referência da subcoleção de cards de um usuário.
 * @param {string} nome
 */
function _cardsRef(nome) {
    return collection(db, 'flashcards', nome, 'cards');
}

/**
 * Referência de um card específico.
 * @param {string} nome
 * @param {string} cardId  — ex: "d1", "b12", "r7", "p33"
 */
function _cardDocRef(nome, cardId) {
    return doc(db, 'flashcards', nome, 'cards', cardId);
}

/**
 * Carrega todos os perfis SRS de uma disciplina do Firestore.
 * Retorna um objeto { cardId: perfil } com apenas os cards já respondidos.
 * Cards nunca vistos não existem no Firestore — o card.js trata isso com _srPerfil().
 *
 * @param {string} nome
 * @param {string} discId  — "design" | "banco" | "redes" | "poo"
 * @returns {Object}  ex: { d1: { intervalo:4, acertos:2, ... }, d7: { ... } }
 */
export async function carregarPerfisSRS(nome, discId) {
    console.log(`[FIREBASE] 🔍 Carregando SRS — usuário: ${nome} | disciplina: ${discId}`);
    try {
        const snap  = await getDocs(_cardsRef(nome));
        const dados = {};

        snap.forEach(docSnap => {
            const cardId = docSnap.id;
            // Filtra só os cards da disciplina solicitada
            // IDs seguem o padrão: d1..d50, b1..b50, r1..r50, p1..p50
            const prefixo = { design: 'd', banco: 'b', redes: 'r', poo: 'p' }[discId];
            if (prefixo && cardId.startsWith(prefixo)) {
                dados[cardId] = docSnap.data();
            }
        });

        console.log(`[FIREBASE] ✅ Perfis SRS carregados — ${Object.keys(dados).length} card(s) com histórico`);
        return dados;
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao carregar perfis SRS — usuário: ${nome}`, err);
        return {};
    }
}

/**
 * Salva (cria ou atualiza) o perfil SRS de um card específico.
 * Chamado pelo card.js após cada resposta (Acertei / Errei).
 *
 * @param {string} nome
 * @param {string} cardId   — ex: "d1"
 * @param {Object} perfil   — { intervalo, proximaVez, acertos, erros, diffMarcada, tentativas, acertosConsecutivos }
 */
export async function salvarPerfilSRS(nome, cardId, perfil) {
    const ref = _cardDocRef(nome, cardId);
    try {
        await setDoc(ref, {
            ...perfil,
            ultimaAtualizacao: new Date().toISOString(),
        }, { merge: true });
        console.log(`[FIREBASE] ✅ Perfil SRS salvo — usuário: ${nome} | card: ${cardId}`);
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao salvar perfil SRS — card: ${cardId}`, err);
        throw err;
    }
}

/**
 * Carrega TODOS os perfis SRS do usuário de uma vez (todas as disciplinas).
 * Útil para exibir estatísticas gerais ou montar o deck sem filtro de disciplina.
 *
 * @param {string} nome
 * @returns {Object}  ex: { d1: { ... }, b3: { ... }, r12: { ... } }
 */
export async function carregarTodosPerfisSRS(nome) {
    console.log(`[FIREBASE] 🔍 Carregando todos os perfis SRS — usuário: ${nome}`);
    try {
        const snap  = await getDocs(_cardsRef(nome));
        const dados = {};
        snap.forEach(docSnap => { dados[docSnap.id] = docSnap.data(); });
        console.log(`[FIREBASE] ✅ Total de perfis SRS: ${snap.size}`);
        return dados;
    } catch (err) {
        console.error(`[FIREBASE] ❌ Erro ao carregar todos os perfis SRS — usuário: ${nome}`, err);
        return {};
    }
}