/**
 * STORAGE.JS - Sistema de Storage Centralizado para Quizzes
 * =========================================================
 * 
 * Este arquivo gerencia o armazenamento persistente de progresso
 * para todos os quizzes do projeto usando localStorage.
 * 
 * Versão: 1.0
 * Compatibilidade: Todos os navegadores modernos com suporte ao localStorage
 */

(function() {
    'use strict';

    // Chave principal para armazenar todos os dados dos quizzes no localStorage
    const STORAGE_KEY = 'quiz_project_data';
    
    // Prefixo para identificar dados deste projeto
    const PROJECT_PREFIX = 'QuizProject_';

    /**
     * OBJETO PRINCIPAL DO STORAGE
     * ==========================
     */
    const QuizStorage = {

        /**
         * SALVAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * =====================================
         * 
         * @param {string} quizId - Identificador único do quiz (ex: 'matematica_unidade1')
         * @param {Array|Object} respostas - Array ou objeto com as respostas do usuário
         * @param {Object} metadata - Dados adicionais (opcional: timestamp, score parcial, etc.)
         * 
         * Exemplo de uso:
         * storage.saveProgress('matematica_unidade1', [0, 2, 1, 3], { timestamp: Date.now() });
         */
        saveProgress: function(quizId, respostas, metadata = {}) {
            try {
                // Validação dos parâmetros de entrada
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }

                if (!respostas) {
                    console.error('[QuizStorage] respostas não pode ser vazio');
                    return false;
                }

                // Recupera dados existentes do localStorage
                const allData = this._getAllData();
                
                // Cria objeto com dados do progresso
                const progressData = {
                    respostas: respostas,
                    metadata: {
                        ...metadata,
                        lastSaved: new Date().toISOString(),
                        version: '1.0'
                    }
                };

                // Salva o progresso do quiz específico
                allData[quizId] = progressData;
                
                // Atualiza o localStorage
                localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
                
                console.log(`[QuizStorage] Progresso salvo para quiz: ${quizId}`);
                return true;

            } catch (error) {
                console.error('[QuizStorage] Erro ao salvar progresso:', error);
                return false;
            }
        },

        /**
         * CARREGAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * =======================================
         * 
         * @param {string} quizId - Identificador único do quiz
         * @returns {Object|null} - Retorna objeto com respostas e metadata, ou null se não encontrado
         * 
         * Exemplo de uso:
         * const progresso = storage.loadProgress('matematica_unidade1');
         * if (progresso) {
         *     const respostas = progresso.respostas;
         *     const metadata = progresso.metadata;
         * }
         */
        loadProgress: function(quizId) {
            try {
                // Validação do parâmetro
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return null;
                }

                // Recupera todos os dados
                const allData = this._getAllData();
                
                // Retorna dados do quiz específico ou null
                const progressData = allData[quizId] || null;
                
                if (progressData) {
                    console.log(`[QuizStorage] Progresso carregado para quiz: ${quizId}`);
                } else {
                    console.log(`[QuizStorage] Nenhum progresso encontrado para quiz: ${quizId}`);
                }
                
                return progressData;

            } catch (error) {
                console.error('[QuizStorage] Erro ao carregar progresso:', error);
                return null;
            }
        },

        /**
         * LIMPAR PROGRESSO DE UM QUIZ ESPECÍFICO
         * =====================================
         * 
         * @param {string} quizId - Identificador único do quiz
         * @returns {boolean} - true se removido com sucesso, false se erro
         * 
         * Exemplo de uso:
         * storage.clearProgress('matematica_unidade1');
         */
        clearProgress: function(quizId) {
            try {
                // Validação do parâmetro
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }

                // Recupera todos os dados
                const allData = this._getAllData();
                
                // Remove o quiz específico
                if (allData[quizId]) {
                    delete allData[quizId];
                    
                    // Atualiza o localStorage
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
                    
                    console.log(`[QuizStorage] Progresso removido para quiz: ${quizId}`);
                    return true;
                } else {
                    console.log(`[QuizStorage] Nenhum progresso encontrado para remover: ${quizId}`);
                    return false;
                }

            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar progresso:', error);
                return false;
            }
        },

        /**
         * LIMPAR TODO O PROGRESSO DE TODOS OS QUIZZES
         * ==========================================
         * 
         * Remove completamente todos os dados salvos do projeto
         * 
         * @returns {boolean} - true se removido com sucesso
         * 
         * Exemplo de uso:
         * storage.clearAllProgress();
         */
        clearAllProgress: function() {
            try {
                localStorage.removeItem(STORAGE_KEY);
                console.log('[QuizStorage] Todo o progresso foi removido');
                return true;

            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar todo progresso:', error);
                return false;
            }
        },

        /**
         * LISTAR TODOS OS QUIZZES COM PROGRESSO SALVO
         * ==========================================
         * 
         * @returns {Array} - Lista com IDs de todos os quizzes que têm progresso salvo
         * 
         * Exemplo de uso:
         * const quizzesComProgresso = storage.listSavedQuizzes();
         * console.log('Quizzes salvos:', quizzesComProgresso);
         */
        listSavedQuizzes: function() {
            try {
                const allData = this._getAllData();
                return Object.keys(allData);
                
            } catch (error) {
                console.error('[QuizStorage] Erro ao listar quizzes salvos:', error);
                return [];
            }
        },

        /**
         * OBTER ESTATÍSTICAS DE ARMAZENAMENTO
         * ==================================
         * 
         * @returns {Object} - Objeto com estatísticas de uso do storage
         */
        getStorageStats: function() {
            try {
                const allData = this._getAllData();
                const quizIds = Object.keys(allData);
                
                return {
                    totalQuizzes: quizIds.length,
                    quizzes: quizIds,
                    storageSize: JSON.stringify(allData).length,
                    lastAccess: new Date().toISOString()
                };

            } catch (error) {
                console.error('[QuizStorage] Erro ao obter estatísticas:', error);
                return null;
            }
        },

        /**
         * VERIFICAR SE O LOCALSTORAGE ESTÁ DISPONÍVEL
         * ==========================================
         * 
         * @returns {boolean} - true se localStorage está disponível
         */
        isStorageAvailable: function() {
            try {
                const test = '__storage_test__';
                localStorage.setItem(test, 'test');
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                console.warn('[QuizStorage] localStorage não está disponível');
                return false;
            }
        },

        /**
         * MÉTODO PRIVADO: RECUPERAR TODOS OS DADOS DO LOCALSTORAGE
         * =======================================================
         * 
         * @returns {Object} - Objeto com todos os dados dos quizzes
         * @private
         */
        _getAllData: function() {
            try {
                const dataString = localStorage.getItem(STORAGE_KEY);
                return dataString ? JSON.parse(dataString) : {};
                
            } catch (error) {
                console.error('[QuizStorage] Erro ao recuperar dados do localStorage:', error);
                return {};
            }
        },

        /**
         * MÉTODO DE DEBUG: EXIBIR TODOS OS DADOS SALVOS
         * ============================================
         * 
         * Útil para desenvolvimento e debugging
         * 
         * @returns {Object} - Todos os dados salvos
         */
        debug_getAllData: function() {
            const allData = this._getAllData();
            console.log('[QuizStorage] Dados completos:', allData);
            return allData;
        }
    };

    /**
     * EXPORTAÇÃO DO MÓDULO
     * ===================
     * 
     * Torna o QuizStorage disponível globalmente como 'storage'
     */
    
    // Para uso em browsers (variável global)
    if (typeof window !== 'undefined') {
        window.storage = QuizStorage;
    }
    
    // Para uso em Node.js (caso necessário)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = QuizStorage;
    }

    // Verificação inicial do localStorage
    if (typeof window !== 'undefined') {
        if (!QuizStorage.isStorageAvailable()) {
            console.warn('[QuizStorage] AVISO: localStorage não está disponível. Os dados não serão salvos persistentemente.');
        } else {
            console.log('[QuizStorage] Sistema de storage inicializado com sucesso');
        }
    }

})();

/**
 * EXEMPLOS DE USO
 * ==============
 * 
 * // 1. Salvar progresso de um quiz
 * storage.saveProgress('matematica_unidade1', [0, 2, 1, 3, null], { 
 *     score: 15, 
 *     timeSpent: 300 
 * });
 * 
 * // 2. Carregar progresso
 * const progresso = storage.loadProgress('matematica_unidade1');
 * if (progresso) {
 *     const respostas = progresso.respostas;
 *     const metadata = progresso.metadata;
 *     console.log('Última vez salvo:', metadata.lastSaved);
 * }
 * 
 * // 3. Limpar progresso específico
 * storage.clearProgress('matematica_unidade1');
 * 
 * // 4. Limpar todo o progresso
 * storage.clearAllProgress();
 * 
 * // 5. Ver quizzes salvos
 * console.log('Quizzes com progresso:', storage.listSavedQuizzes());
 * 
 * // 6. Estatísticas
 * console.log('Stats:', storage.getStorageStats());
 */