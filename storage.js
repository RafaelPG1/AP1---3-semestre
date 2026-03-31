/**
 * STORAGE.JS - Sistema de Storage Centralizado para Quizzes
 * =========================================================
 *
 * Este arquivo gerencia o armazenamento persistente de progresso
 * para todos os quizzes do projeto usando a Storage API do Claude
 * (window.storage), compatível com Artifacts em desktop e mobile.
 *
 * Versão: 2.0
 * Compatibilidade: Artifacts do Claude.ai (desktop e mobile)
 *
 * IMPORTANTE: Todos os métodos são assíncronos (retornam Promises).
 * Use sempre "await" ou ".then()" ao chamá-los.
 */

(function () {
    'use strict';

    // Prefixo para isolar as chaves deste projeto no storage compartilhado
    const PROJECT_PREFIX = 'QuizProject_';

    // Chave que armazena o índice de todos os quizzes salvos
    const INDEX_KEY = PROJECT_PREFIX + '__index__';

    /**
     * UTILITÁRIO INTERNO
     * ==================
     * Monta a chave completa de um quiz no storage
     */
    function buildKey(quizId) {
        return PROJECT_PREFIX + quizId;
    }

    /**
     * OBJETO PRINCIPAL DO STORAGE
     * ===========================
     */
    const QuizStorage = {

        /**
         * SALVAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * =======================================
         *
         * @param {string} quizId      - Identificador único do quiz (ex: 'matematica_unidade1')
         * @param {Array|Object} respostas - Respostas do usuário
         * @param {Object} metadata    - Dados adicionais opcionais (score, timeSpent, etc.)
         * @returns {Promise<boolean>} - true se salvo com sucesso
         *
         * Exemplo:
         * await storage.saveProgress('matematica_unidade1', [0, 2, 1, 3], { score: 15 });
         */
        saveProgress: async function (quizId, respostas, metadata = {}) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }
                if (respostas === undefined || respostas === null) {
                    console.error('[QuizStorage] respostas não pode ser vazio');
                    return false;
                }

                const progressData = {
                    respostas: respostas,
                    metadata: {
                        ...metadata,
                        lastSaved: new Date().toISOString(),
                        version: '2.0'
                    }
                };

                // Salva os dados do quiz
                const key = buildKey(quizId);
                const result = await window.storage.set(key, JSON.stringify(progressData));

                if (!result) {
                    console.error('[QuizStorage] Falha ao salvar no storage');
                    return false;
                }

                // Atualiza o índice de quizzes salvos
                await this._addToIndex(quizId);

                console.log(`[QuizStorage] Progresso salvo para quiz: ${quizId}`);
                return true;

            } catch (error) {
                console.error('[QuizStorage] Erro ao salvar progresso:', error);
                return false;
            }
        },

        /**
         * CARREGAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * =========================================
         *
         * @param {string} quizId - Identificador único do quiz
         * @returns {Promise<Object|null>} - { respostas, metadata } ou null se não encontrado
         *
         * Exemplo:
         * const progresso = await storage.loadProgress('matematica_unidade1');
         * if (progresso) {
         *     console.log(progresso.respostas);
         *     console.log(progresso.metadata.lastSaved);
         * }
         */
        loadProgress: async function (quizId) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return null;
                }

                const key = buildKey(quizId);

                let result;
                try {
                    result = await window.storage.get(key);
                } catch (_) {
                    // Chave não existe
                    console.log(`[QuizStorage] Nenhum progresso encontrado para quiz: ${quizId}`);
                    return null;
                }

                if (!result || result.value === undefined) {
                    console.log(`[QuizStorage] Nenhum progresso encontrado para quiz: ${quizId}`);
                    return null;
                }

                const progressData = JSON.parse(result.value);
                console.log(`[QuizStorage] Progresso carregado para quiz: ${quizId}`);
                return progressData;

            } catch (error) {
                console.error('[QuizStorage] Erro ao carregar progresso:', error);
                return null;
            }
        },

        /**
         * LIMPAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * ========================================
         *
         * @param {string} quizId - Identificador único do quiz
         * @returns {Promise<boolean>} - true se removido com sucesso
         *
         * Exemplo:
         * await storage.clearProgress('matematica_unidade1');
         */
        clearProgress: async function (quizId) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }

                const key = buildKey(quizId);

                let deleteResult;
                try {
                    deleteResult = await window.storage.delete(key);
                } catch (_) {
                    console.log(`[QuizStorage] Nenhum progresso encontrado para remover: ${quizId}`);
                    return false;
                }

                if (!deleteResult) {
                    console.log(`[QuizStorage] Nenhum progresso encontrado para remover: ${quizId}`);
                    return false;
                }

                // Remove do índice
                await this._removeFromIndex(quizId);

                console.log(`[QuizStorage] Progresso removido para quiz: ${quizId}`);
                return true;

            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar progresso:', error);
                return false;
            }
        },

        /**
         * LIMPAR TODO O PROGRESSO DE TODOS OS QUIZZES
         * =============================================
         *
         * @returns {Promise<boolean>} - true se tudo foi removido com sucesso
         *
         * Exemplo:
         * await storage.clearAllProgress();
         */
        clearAllProgress: async function () {
            try {
                const quizIds = await this.listSavedQuizzes();

                for (const quizId of quizIds) {
                    const key = buildKey(quizId);
                    try {
                        await window.storage.delete(key);
                    } catch (_) {
                        // ignora chaves que não existem
                    }
                }

                // Limpa o índice
                try {
                    await window.storage.delete(INDEX_KEY);
                } catch (_) {}

                console.log('[QuizStorage] Todo o progresso foi removido');
                return true;

            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar todo progresso:', error);
                return false;
            }
        },

        /**
         * LISTAR TODOS OS QUIZZES COM PROGRESSO SALVO
         * =============================================
         *
         * @returns {Promise<Array<string>>} - Lista de IDs dos quizzes salvos
         *
         * Exemplo:
         * const quizzes = await storage.listSavedQuizzes();
         * console.log('Quizzes salvos:', quizzes);
         */
        listSavedQuizzes: async function () {
            try {
                let result;
                try {
                    result = await window.storage.get(INDEX_KEY);
                } catch (_) {
                    return [];
                }

                if (!result || !result.value) return [];

                return JSON.parse(result.value);

            } catch (error) {
                console.error('[QuizStorage] Erro ao listar quizzes salvos:', error);
                return [];
            }
        },

        /**
         * OBTER ESTATÍSTICAS DE ARMAZENAMENTO
         * =====================================
         *
         * @returns {Promise<Object|null>} - Estatísticas de uso
         *
         * Exemplo:
         * const stats = await storage.getStorageStats();
         * console.log('Total de quizzes:', stats.totalQuizzes);
         */
        getStorageStats: async function () {
            try {
                const quizIds = await this.listSavedQuizzes();

                return {
                    totalQuizzes: quizIds.length,
                    quizzes: quizIds,
                    lastAccess: new Date().toISOString()
                };

            } catch (error) {
                console.error('[QuizStorage] Erro ao obter estatísticas:', error);
                return null;
            }
        },

        /**
         * VERIFICAR SE O STORAGE ESTÁ DISPONÍVEL
         * ========================================
         *
         * @returns {Promise<boolean>} - true se o storage está funcionando
         */
        isStorageAvailable: async function () {
            try {
                const testKey = PROJECT_PREFIX + '__availability_test__';
                await window.storage.set(testKey, 'test');
                await window.storage.delete(testKey);
                return true;
            } catch (e) {
                console.warn('[QuizStorage] window.storage não está disponível:', e);
                return false;
            }
        },

        /**
         * MÉTODO DE DEBUG: EXIBIR TODOS OS DADOS SALVOS
         * ===============================================
         *
         * @returns {Promise<Object>} - Mapa { quizId: progressData }
         */
        debug_getAllData: async function () {
            const quizIds = await this.listSavedQuizzes();
            const allData = {};

            for (const quizId of quizIds) {
                allData[quizId] = await this.loadProgress(quizId);
            }

            console.log('[QuizStorage] Dados completos:', allData);
            return allData;
        },

        // ─── Métodos Privados ────────────────────────────────────────────────

        /**
         * MÉTODO PRIVADO: Adiciona um quizId ao índice
         * @private
         */
        _addToIndex: async function (quizId) {
            const current = await this.listSavedQuizzes();
            if (!current.includes(quizId)) {
                current.push(quizId);
                await window.storage.set(INDEX_KEY, JSON.stringify(current));
            }
        },

        /**
         * MÉTODO PRIVADO: Remove um quizId do índice
         * @private
         */
        _removeFromIndex: async function (quizId) {
            const current = await this.listSavedQuizzes();
            const updated = current.filter(id => id !== quizId);
            await window.storage.set(INDEX_KEY, JSON.stringify(updated));
        }
    };

    // ─── Exportação ──────────────────────────────────────────────────────────

    if (typeof window !== 'undefined') {
        window.storage = QuizStorage;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = QuizStorage;
    }

    // Verificação inicial
    if (typeof window !== 'undefined') {
        QuizStorage.isStorageAvailable().then(available => {
            if (!available) {
                console.warn('[QuizStorage] AVISO: window.storage não está disponível. Os dados não serão salvos.');
            } else {
                console.log('[QuizStorage] Sistema de storage v2.0 inicializado com sucesso');
            }
        });
    }

})();

/**
 * EXEMPLOS DE USO (v2.0 - assíncrono)
 * =====================================
 *
 * // 1. Salvar progresso de um quiz
 * await storage.saveProgress('matematica_unidade1', [0, 2, 1, 3, null], {
 *     score: 15,
 *     timeSpent: 300
 * });
 *
 * // 2. Carregar progresso
 * const progresso = await storage.loadProgress('matematica_unidade1');
 * if (progresso) {
 *     console.log('Respostas:', progresso.respostas);
 *     console.log('Última vez salvo:', progresso.metadata.lastSaved);
 * }
 *
 * // 3. Limpar progresso específico
 * await storage.clearProgress('matematica_unidade1');
 *
 * // 4. Limpar todo o progresso
 * await storage.clearAllProgress();
 *
 * // 5. Ver quizzes salvos
 * const quizzes = await storage.listSavedQuizzes();
 * console.log('Quizzes com progresso:', quizzes);
 *
 * // 6. Estatísticas
 * const stats = await storage.getStorageStats();
 * console.log('Stats:', stats);
 *
 * // 7. Verificar disponibilidade
 * const ok = await storage.isStorageAvailable();
 * console.log('Storage disponível:', ok);
 */