/* ═══════════════════════════════════════════════════════════════════════
   firebase.js — Integração com Firestore  (v3 — coleção anotacoes)
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
        // Testa ESCRITA
        const refTeste = doc(db, 'anotacoes', nome, 'notas', '_teste_diagnostico');
        await setDoc(refTeste, { ok: true, ts: Date.now() });
        console.log('✅ ESCRITA ok — anotacoes/' + nome + '/notas/_teste_diagnostico');

        // Testa LEITURA
        const snap = await getDoc(refTeste);
        console.log('✅ LEITURA ok — dados:', snap.data());

        // Testa DELEÇÃO
        await deleteDoc(refTeste);
        console.log('✅ DELEÇÃO ok');

        console.log('🎉 Firebase funcionando! Problema deve ser no import do anotacao.js');
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

/**
 * Salva o checklist completo do usuário no Firestore.
 * @param {string} nome
 * @param {Object} checklist        - { discId: { itemId: bool } }
 * @param {Object} videosAssistidos - { discId: [indexes] }
 */
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

/**
 * Carrega os dados do usuário do Firestore (leitura única).
 * @param {string} nome
 * @returns {Object|null}
 */
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

/**
 * Assina atualizações em tempo real do documento do usuário.
 * @param {string}   nome
 * @param {Function} callback
 * @returns {Function} unsubscribe
 */
export function assinarFirebase(nome, callback) {
    const ref = doc(db, 'checklists', nome.toLowerCase());
    return onSnapshot(ref, snap => {
        if (snap.exists()) callback(snap.data());
    });
}


// ═════════════════════════════════════════════════════════════════════
//  ANOTAÇÕES
//  Estrutura Firestore:
//    anotacoes/
//      {nome}/          ← documento-raiz (Rafael, Alvaro, etc.)
//        notas/
//          {notaId}/    ← cada nota é um documento
// ═════════════════════════════════════════════════════════════════════

/**
 * Retorna a referência da subcoleção de notas de um usuário.
 * @param {string} nome
 */
function _notasRef(nome) {
    return collection(db, 'anotacoes', nome, 'notas');
}

/**
 * Retorna a referência de um documento de nota específico.
 * @param {string} nome
 * @param {string} notaId
 */
function _notaDocRef(nome, notaId) {
    return doc(db, 'anotacoes', nome, 'notas', notaId);
}

/**
 * Salva (cria ou atualiza) uma nota individual no Firestore.
 * @param {string} nome   - login do usuário (ex: 'Rafael')
 * @param {Object} nota   - { id, titulo, delta, discId, criadoEm, editadoEm }
 */
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

/**
 * Deleta uma nota do Firestore.
 * @param {string} nome
 * @param {string} notaId
 */
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

/**
 * Carrega todas as notas do usuário do Firestore.
 * Retorna um objeto no formato { discId: { notaId: nota } }.
 * @param {string} nome
 * @returns {Object}
 */
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