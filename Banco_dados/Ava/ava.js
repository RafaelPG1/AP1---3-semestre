// Configuração do quiz
const originalQuizData = [
  {
    subject: "Aula tal 1-10",
    questions: [
      {
        question: "Esta é uma questão modelo. Qual das alternativas abaixo representa a resposta correta?",
        options: [
          "Alternativa A — exemplo de opção incorreta",
          "Alternativa B — exemplo de opção correta",
          "Alternativa C — exemplo de opção incorreta",
          "Alternativa D — exemplo de opção incorreta"
        ],
        answer: 1,
        feedback: "Resposta correta: B) Esta é a justificativa que aparece após o envio. Explique aqui por que esta alternativa é correta e as demais são incorretas."
      },
      {
        question: "Esta é a segunda questão modelo. Qual das opções abaixo é verdadeira?",
        options: [
          "Alternativa A — exemplo de opção incorreta",
          "Alternativa B — exemplo de opção incorreta",
          "Alternativa C — exemplo de opção correta",
          "Alternativa D — exemplo de opção incorreta"
        ],
        answer: 2,
        feedback: "Resposta correta: C) Justificativa da segunda questão modelo. Substitua estas questões pelo conteúdo real do seu quiz."
      }
    ]
  }
];

// ─── Variáveis do quiz ────────────────────────────────────────────────────────
let quizData = [];
let userAnswers = [];
let quizSubmitted = false;
let isFirstLoad = true;

// ─── Elementos do DOM ─────────────────────────────────────────────────────────
const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
const resultsContainer = document.getElementById("results");

// ─── Utilitários ──────────────────────────────────────────────────────────────
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function createShuffledQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => {
            const optionIndices = question.options.map((_, index) => index);
            const shuffledIndices = shuffleArray(optionIndices);
            const shuffledOptions = shuffledIndices.map(index => question.options[index]);
            const newCorrectAnswer = shuffledIndices.indexOf(question.answer);
            const correctLetter = String.fromCharCode(65 + newCorrectAnswer);
            const originalCorrectOption = question.options[question.answer];
            return {
                ...question,
                options: shuffledOptions,
                answer: newCorrectAnswer,
                feedback: `Resposta correta: ${correctLetter}) ${originalCorrectOption}`
            };
        })
    }));
}

function createOriginalQuizData() {
    return originalQuizData.map(subject => ({
        ...subject,
        questions: subject.questions.map(question => ({
            ...question,
            feedback: question.feedback || `Resposta correta: ${String.fromCharCode(65 + question.answer)}) ${question.options[question.answer]}`
        }))
    }));
}

// ─── Inicialização ────────────────────────────────────────────────────────────
function initializeQuiz() {
    userAnswers = [];
    quizSubmitted = false;

    if (isFirstLoad) {
        quizData = createOriginalQuizData();
        isFirstLoad = false;
    }

    const allQuestions = [];
    quizData.forEach(subject => allQuestions.push(...subject.questions));
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
}

// ─── Renderização ─────────────────────────────────────────────────────────────
function showAllQuestions() {
    let questionsHTML = "";
    let questionIndex = 0;

    quizData.forEach(subject => {
        questionsHTML += `<div class="subject-title">${subject.subject}</div>`;

        subject.questions.forEach(question => {
            questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${questionIndex + 1}</div>
                    <div class="question-text">${question.question}</div>
                    ${question.image ? `<div class="question-image"><img src="${question.image}" alt="Imagem da questão"></div>` : ''}
                    ${question.questionContinuation ? `<div class="question-text">${question.questionContinuation}</div>` : ''}
                    <div class="options">
                        ${question.options.map((option, optionIndex) => {
                            let cls = "option";
                            if (userAnswers[questionIndex] === optionIndex) cls += " selected";
                            if (quizSubmitted) {
                                if (optionIndex === question.answer) cls += " correct";
                                else if (userAnswers[questionIndex] === optionIndex) cls += " incorrect";
                            }
                            return `<div class="${cls}" onclick="selectOption(${questionIndex}, ${optionIndex})">${String.fromCharCode(65 + optionIndex)}) ${option}</div>`;
                        }).join("")}
                    </div>
                    ${quizSubmitted ? `
                        <div class="feedback ${userAnswers[questionIndex] === question.answer || userAnswers[questionIndex] === null ? 'correct-feedback' : 'incorrect-feedback'}">
                            ${question.feedback}
                        </div>` : ''}
                </div>`;
            questionIndex++;
        });
    });

    quizContainer.innerHTML = questionsHTML;
}

window.selectOption = function (questionIndex, optionIndex) {
    if (quizSubmitted) return;

    userAnswers[questionIndex] = optionIndex;

    // Atualiza só as classes desta questão, sem recriar o DOM inteiro
    const allContainers = document.querySelectorAll('.question-container');
    const container = allContainers[questionIndex];
    if (!container) return;

    container.querySelectorAll('.option').forEach((el, idx) => {
        el.classList.toggle('selected', idx === optionIndex);
    });
};

// ─── Scroll ───────────────────────────────────────────────────────────────────
function smoothScrollTo(targetPosition, duration = 800) {
    const start = window.scrollY;
    const change = targetPosition - start;
    const startTime = performance.now();
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + change * progress);
        if (progress < 1) requestAnimationFrame(animateScroll);
    }
    requestAnimationFrame(animateScroll);
}

function smoothScrollToTop() { smoothScrollTo(0, 800); }

// ─── Alerta ───────────────────────────────────────────────────────────────────
function showAlertNotification(message) {
    const el = document.createElement('div');
    el.style.cssText = `
        position: fixed; top: 20px; left: 50%;
        transform: translateX(-50%) translateY(-100%);
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: white; padding: 12px 24px; border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 500;
        z-index: 10000; opacity: 0; transition: all 0.4s ease;`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateX(-50%) translateY(0)'; }, 50);
    setTimeout(() => {
        el.style.opacity = '0'; el.style.transform = 'translateX(-50%) translateY(-100%)';
        setTimeout(() => el.parentNode && el.parentNode.removeChild(el), 400);
    }, 5000);
}

// ─── Enviar ───────────────────────────────────────────────────────────────────
function showResults() {
    const firstUnansweredIndex = userAnswers.findIndex(a => a === null);
    if (firstUnansweredIndex !== -1) {
        const containers = document.querySelectorAll('.question-container');
        containers[firstUnansweredIndex]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        showAlertNotification("⚠️ Por favor, responda todas as questões antes de enviar.");
        return;
    }

    quizSubmitted = true;
    showAllQuestions();

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = true; }
    if (revealBtn) { revealBtn.disabled = true; }

    let score = 0, questionIndex = 0;
    quizData.forEach(subject => {
        subject.questions.forEach(question => {
            if (userAnswers[questionIndex] === question.answer) score++;
            questionIndex++;
        });
    });

    const total = questionIndex;
    const pct = Math.round((score / total) * 100);

    resultsContainer.innerHTML = `
        <h2>Resultado</h2>
        <div class="score">Você acertou ${score} de ${total} questões</div>
        <div class="percentage">${pct}%</div>
        <p>${pct >= 70 ? "Parabéns! Excelente desempenho." : "Revise os conceitos para melhorar seu desempenho."}</p>`;
    resultsContainer.style.display = "block";
    submitButton.style.display = "none";
    restartButton.style.display = "inline-flex";
}

// ─── Reiniciar ────────────────────────────────────────────────────────────────
function restartQuiz() {
    userAnswers = [];
    quizSubmitted = false;
    quizData = createShuffledQuizData();

    const allQuestions = [];
    quizData.forEach(s => allQuestions.push(...s.questions));
    userAnswers = new Array(allQuestions.length).fill(null);

    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-flex";
    restartButton.style.display = "none";

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = false; }
    if (revealBtn) { revealBtn.disabled = false; }

    smoothScrollToTop();
}

// ─── Limpar ───────────────────────────────────────────────────────────────────
function clearAnswers() {
    const clearBtn = document.getElementById('clear');
    if (clearBtn?.disabled) return;

    userAnswers.fill(null);
    quizSubmitted = false;
    showAllQuestions();
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-flex";
    restartButton.style.display = "none";
    smoothScrollToTop();
}

// ─── Revelar ──────────────────────────────────────────────────────────────────
function revealAnswers() {
    quizSubmitted = true;
    showAllQuestions();

    const clearBtn = document.getElementById('clear');
    const revealBtn = document.getElementById('reveal');
    if (clearBtn) { clearBtn.disabled = true; }
    if (revealBtn) { revealBtn.disabled = true; }

    submitButton.style.display = "none";
    restartButton.style.display = "inline-flex";
    smoothScrollToTop();
}

// ─── Event Listeners (botões principais) ─────────────────────────────────────
document.getElementById('clear').addEventListener('click', clearAnswers);
document.getElementById('reveal').addEventListener('click', revealAnswers);
submitButton.addEventListener("click", showResults);
restartButton.addEventListener("click", restartQuiz);

// ─── Navegação flutuante ──────────────────────────────────────────────────────
document.getElementById('btn-up').addEventListener('click', () => smoothScrollTo(0, 1000));
document.getElementById('btn-left').addEventListener('click', () => { window.location.href = '../banco.html'; });
document.getElementById('btn-down').addEventListener('click', () => smoothScrollTo(document.body.scrollHeight, 1000));

function updateSubmitButtonIcon() {
    const icon = document.querySelector('#submitButton i');
    if (!icon) return;
    if (quizSubmitted) {
        icon.className = 'fas fa-redo';
        document.getElementById('submitButton').title = 'Reiniciar Quiz';
    } else {
        icon.className = 'fas fa-paper-plane';
        document.getElementById('submitButton').title = 'Enviar Quiz';
    }
}

document.getElementById('clearButton').addEventListener('click', () => { clearAnswers(); updateSubmitButtonIcon(); });
document.getElementById('submitButton').addEventListener('click', () => {
    if (quizSubmitted) restartQuiz(); else showResults();
    setTimeout(updateSubmitButtonIcon, 100);
});
document.getElementById('revealButton').addEventListener('click', () => { revealAnswers(); updateSubmitButtonIcon(); });

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    initializeQuiz();
    setTimeout(updateSubmitButtonIcon, 150);
});


// =============================================================================
// SISTEMA DE AUTO-SAVE — não modificar abaixo
// =============================================================================

const QUIZ_ID = 'questoes_personalizadas_so';

const AUTO_SAVE_CONFIG = {
    enabled: true,
    interval: 10000,
    saveOnAnswer: true,
    clearOnSubmit: false
};

let autoSaveInterval = null;
let storageInitialized = false;

function initializeStorage() {
    if (typeof storage === 'undefined') return false;
    if (!storage.isStorageAvailable()) return false;
    storageInitialized = true;
    loadSavedProgress();
    if (AUTO_SAVE_CONFIG.enabled) startAutoSave();
    return true;
}

function loadSavedProgress() {
    if (!storageInitialized) return;
    try {
        const saved = storage.loadProgress(QUIZ_ID);
        if (saved?.respostas) {
            const hasAnswers = saved.respostas.some(a => a !== null && a !== undefined);
            if (hasAnswers) {
                userAnswers = [...saved.respostas];
                showAllQuestions();
                const count = saved.respostas.filter(a => a !== null && a !== undefined).length;
                showProgressNotification(`Progresso restaurado! 📚 (${count} questões respondidas)`);
            }
        }
    } catch (e) { console.error('[Storage] Erro ao carregar:', e); }
}

function saveCurrentProgress() {
    if (!storageInitialized || !userAnswers) return;
    try {
        storage.saveProgress(QUIZ_ID, userAnswers, {
            totalQuestions: userAnswers.length,
            answeredCount: userAnswers.filter(a => a !== null).length,
            isCompleted: quizSubmitted || false
        });
    } catch (e) { console.error('[Storage] Erro ao salvar:', e); }
}

function startAutoSave() {
    if (autoSaveInterval) clearInterval(autoSaveInterval);
    autoSaveInterval = setInterval(saveCurrentProgress, AUTO_SAVE_CONFIG.interval);
}

function stopAutoSave() {
    if (autoSaveInterval) { clearInterval(autoSaveInterval); autoSaveInterval = null; }
}

function showProgressNotification(message) {
    const el = document.createElement('div');
    el.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background: linear-gradient(135deg, #378add 0%, #1d6fa8 100%);
        color: white; padding: 12px 18px; border-radius: 10px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
        font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 500;
        z-index: 10000; opacity: 0; transform: translateX(100%);
        transition: all 0.3s ease;`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => {
        el.style.opacity = '0'; el.style.transform = 'translateX(100%)';
        setTimeout(() => el.parentNode?.removeChild(el), 300);
    }, 4000);
}

// Intercepta selectOption para auto-save
const _origSelect = window.selectOption;
window.selectOption = function (qi, oi) {
    _origSelect(qi, oi);
    if (AUTO_SAVE_CONFIG.saveOnAnswer && storageInitialized)
        setTimeout(saveCurrentProgress, 100);
};

document.addEventListener('visibilitychange', () => {
    if (document.hidden) { saveCurrentProgress(); stopAutoSave(); }
    else if (AUTO_SAVE_CONFIG.enabled && storageInitialized) startAutoSave();
});

window.addEventListener('beforeunload', () => { if (storageInitialized) saveCurrentProgress(); });

setTimeout(initializeStorage, 500);