/**
 * STORAGE.JS - Sistema de Storage Centralizado
 * =============================================
 *
 * Gerencia armazenamento temporário no localStorage para:
 *   - Progresso de quizzes
 *   - Sessão ativa de flashcards (proteção contra F5)
 *
 * Versão: 2.0
 */

(function () {
    'use strict';

    const STORAGE_KEY         = 'quiz_project_data';
    const FLASHCARD_SESSAO_KEY = 'flashcards_sessao_v1';

    // ═══════════════════════════════════════════════
    //  QUIZZES
    // ═══════════════════════════════════════════════

    const QuizStorage = {

        /**
         * Salva o progresso de um quiz específico.
         * @param {string}       quizId
         * @param {Array|Object} respostas
         * @param {Object}       metadata
         */
        saveProgress(quizId, respostas, metadata = {}) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }
                if (!respostas) {
                    console.error('[QuizStorage] respostas não pode ser vazio');
                    return false;
                }

                const allData = this._getAllData();
                allData[quizId] = {
                    respostas,
                    metadata: {
                        ...metadata,
                        lastSaved: new Date().toISOString(),
                        version: '1.0'
                    }
                };
                localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
                console.log(`[QuizStorage] Progresso salvo — quiz: ${quizId}`);
                return true;
            } catch (error) {
                console.error('[QuizStorage] Erro ao salvar progresso:', error);
                return false;
            }
        },

        /**
         * Carrega o progresso de um quiz específico.
         * @param {string} quizId
         * @returns {Object|null}
         */
        loadProgress(quizId) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return null;
                }
                const allData    = this._getAllData();
                const progressData = allData[quizId] || null;
                if (progressData) {
                    console.log(`[QuizStorage] Progresso carregado — quiz: ${quizId}`);
                } else {
                    console.log(`[QuizStorage] Nenhum progresso encontrado — quiz: ${quizId}`);
                }
                return progressData;
            } catch (error) {
                console.error('[QuizStorage] Erro ao carregar progresso:', error);
                return null;
            }
        },

        /**
         * Remove o progresso de um quiz específico.
         * @param {string} quizId
         */
        clearProgress(quizId) {
            try {
                if (!quizId || typeof quizId !== 'string') {
                    console.error('[QuizStorage] quizId deve ser uma string válida');
                    return false;
                }
                const allData = this._getAllData();
                if (allData[quizId]) {
                    delete allData[quizId];
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
                    console.log(`[QuizStorage] Progresso removido — quiz: ${quizId}`);
                    return true;
                }
                return false;
            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar progresso:', error);
                return false;
            }
        },

        clearAllProgress() {
            try {
                localStorage.removeItem(STORAGE_KEY);
                console.log('[QuizStorage] Todo o progresso removido');
                return true;
            } catch (error) {
                console.error('[QuizStorage] Erro ao limpar todo progresso:', error);
                return false;
            }
        },

        listSavedQuizzes() {
            try {
                return Object.keys(this._getAllData());
            } catch (error) {
                console.error('[QuizStorage] Erro ao listar quizzes:', error);
                return [];
            }
        },

        getStorageStats() {
            try {
                const allData = this._getAllData();
                const quizIds = Object.keys(allData);
                return {
                    totalQuizzes: quizIds.length,
                    quizzes:      quizIds,
                    storageSize:  JSON.stringify(allData).length,
                    lastAccess:   new Date().toISOString()
                };
            } catch (error) {
                console.error('[QuizStorage] Erro ao obter estatísticas:', error);
                return null;
            }
        },

        isStorageAvailable() {
            try {
                const test = '__storage_test__';
                localStorage.setItem(test, 'test');
                localStorage.removeItem(test);
                return true;
            } catch (e) {
                console.warn('[QuizStorage] localStorage não disponível');
                return false;
            }
        },

        _getAllData() {
            try {
                const dataString = localStorage.getItem(STORAGE_KEY);
                return dataString ? JSON.parse(dataString) : {};
            } catch (error) {
                console.error('[QuizStorage] Erro ao recuperar dados:', error);
                return {};
            }
        },

        debug_getAllData() {
            const allData = this._getAllData();
            console.log('[QuizStorage] Dados completos:', allData);
            return allData;
        }
    };


    // ═══════════════════════════════════════════════
    //  FLASHCARDS — SESSÃO TEMPORÁRIA
    //
    //  Salva o estado da sessão em andamento para
    //  recuperar após F5 ou fechamento acidental.
    //
    //  Estrutura salva:
    //  {
    //    discId:    string,            — disciplina aberta
    //    cards:     string[],          — IDs dos 10 cards do deck atual
    //    current:   number,            — índice do card onde parou
    //    resultado: { cardId: "correct"|"wrong" },
    //    difficulty:{ cardId: "easy"|"medium"|"hard" },
    //    stats:     { correct: number, wrong: number },
    //    salvoEm:   number             — timestamp ms
    //  }
    // ═══════════════════════════════════════════════

    const FlashcardSessao = {

        /**
         * Salva o estado atual da sessão.
         * Chamado pelo card.js após cada resposta e cada navegação.
         *
         * @param {Object} estado — subconjunto de _estado do card.js
         */
        salvar(estado) {
            try {
                const sessao = {
                    discId:     estado.discId,
                    cards:      estado.cards.map(c => c.id),  // só os IDs, não o objeto inteiro
                    current:    estado.current,
                    resultado:  { ...estado.resultado },
                    difficulty: { ...estado.difficulty },
                    stats:      { ...estado.stats },
                    salvoEm:    Date.now(),
                };
                localStorage.setItem(FLASHCARD_SESSAO_KEY, JSON.stringify(sessao));
                console.log(`[FlashcardSessao] 💾 Sessão salva — disc: ${estado.discId} | card: ${estado.current}`);
            } catch (err) {
                console.error('[FlashcardSessao] Erro ao salvar sessão:', err);
            }
        },

        /**
         * Carrega a sessão salva, se existir e for da disciplina esperada.
         * Retorna null se não existir, se for de outra disciplina,
         * ou se o deck já estiver completamente respondido.
         *
         * @param {string} discId — disciplina que o usuário abriu agora
         * @returns {Object|null}
         */
        carregar(discId) {
            try {
                const raw = localStorage.getItem(FLASHCARD_SESSAO_KEY);
                if (!raw) return null;

                const sessao = JSON.parse(raw);

                // Só restaura se for da mesma disciplina
                if (sessao.discId !== discId) {
                    console.log(`[FlashcardSessao] Sessão salva é de outra disciplina (${sessao.discId}), ignorando.`);
                    return null;
                }

                // Só restaura se ainda tiver cards não respondidos
                const respondidos = Object.keys(sessao.resultado || {}).length;
                if (respondidos >= sessao.cards.length) {
                    console.log('[FlashcardSessao] Deck já estava completo, ignorando sessão salva.');
                    this.limpar();
                    return null;
                }

                console.log(`[FlashcardSessao] ✅ Sessão encontrada — disc: ${discId} | card: ${sessao.current} | respondidos: ${respondidos}/${sessao.cards.length}`);
                return sessao;
            } catch (err) {
                console.error('[FlashcardSessao] Erro ao carregar sessão:', err);
                return null;
            }
        },

        /**
         * Verifica se existe sessão salva para uma disciplina específica
         * sem carregar os dados completos. Útil para decidir o texto
         * do botão (Continuar / Novo deck).
         *
         * @param {string} discId
         * @returns {boolean}
         */
        existePara(discId) {
            try {
                const raw = localStorage.getItem(FLASHCARD_SESSAO_KEY);
                if (!raw) return false;
                const sessao     = JSON.parse(raw);
                const respondidos = Object.keys(sessao.resultado || {}).length;
                return sessao.discId === discId && respondidos < sessao.cards.length;
            } catch {
                return false;
            }
        },

        /**
         * Remove a sessão salva.
         * Chamado quando o deck termina ou o usuário escolhe Novo deck.
         */
        limpar() {
            try {
                localStorage.removeItem(FLASHCARD_SESSAO_KEY);
                console.log('[FlashcardSessao] 🗑 Sessão removida');
            } catch (err) {
                console.error('[FlashcardSessao] Erro ao limpar sessão:', err);
            }
        },

        /**
         * Retorna um resumo da sessão salva para debug.
         */
        debug() {
            try {
                const raw = localStorage.getItem(FLASHCARD_SESSAO_KEY);
                if (!raw) { console.log('[FlashcardSessao] Nenhuma sessão salva.'); return null; }
                const sessao = JSON.parse(raw);
                console.log('[FlashcardSessao] Sessão atual:', sessao);
                return sessao;
            } catch {
                return null;
            }
        }
    };


    // ═══════════════════════════════════════════════
    //  EXPORTAÇÃO GLOBAL
    // ═══════════════════════════════════════════════

    if (typeof window !== 'undefined') {
        window.storage          = QuizStorage;
        window.flashcardSessao  = FlashcardSessao;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { QuizStorage, FlashcardSessao };
    }

    // Verificação inicial
    if (typeof window !== 'undefined') {
        if (!QuizStorage.isStorageAvailable()) {
            console.warn('[Storage] AVISO: localStorage não disponível. Dados não serão salvos.');
        } else {
            console.log('[Storage] ✅ Sistema de storage inicializado (v2.0)');
        }
    }

})();