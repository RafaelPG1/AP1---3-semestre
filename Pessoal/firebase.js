/* ═══════════════════════════════════════════════════════════════════════
   firebase.js — Integração com Firestore  (v2 — com logs de debug)
   Responsabilidade única: comunicação com o banco de dados.
════════════════════════════════════════════════════════════════════════ */

import { initializeApp }
    from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore, doc, setDoc, getDoc, onSnapshot }
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
        throw err;   // Re-lança para que pessoal.js possa tratar (ex: fallback local)
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
 * Útil para sincronização entre abas/dispositivos.
 * @param {string}   nome
 * @param {Function} callback - chamado com os dados sempre que mudarem
 * @returns {Function} unsubscribe — chame para cancelar a assinatura
 */
export function assinarFirebase(nome, callback) {
    const ref = doc(db, 'checklists', nome.toLowerCase());
    return onSnapshot(ref, snap => {
        if (snap.exists()) callback(snap.data());
    });
}