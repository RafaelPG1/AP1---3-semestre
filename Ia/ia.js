// ============================================================
//  ia.js — Módulo global de IA  v5.0
//  NOVO: histórico persistente por disciplina (localStorage)
//        expiração automática em 30h
//        restauração do chat ao reabrir
// ============================================================

const IA_WORKER_URL    = "https://restless-flower-1924.rafaelpeixoto475.workers.dev/";
const IA_CONTEXTO_MAX  = 2500;
const IA_MAX_HISTORICO = 20;   // guarda até 20 turnos na memória (10 trocas)
const IA_MAX_HISTORICO_ENVIO = 10; // envia só os últimos 10 ao worker (economia de tokens)
const IA_MAX_SECOES    = 5;
const IA_MAX_SECAO_LEN = 800;
const IA_HISTORICO_TTL = 30 * 60 * 60 * 1000; // 30 horas em ms

const IA_DISCIPLINA_MAP = {
  "banco.html":  "banco",
  "desing.html": "design",
  "redes.html":  "redes",
  "poo.html":    "poo",
};

const IA_DISCIPLINA_LABEL = {
  banco:  "Banco de Dados",
  design: "Design",
  redes:  "Redes",
  poo:    "POO",
};

const IA_CACHE_RESUMO = {};

// ============================================================
//  1. Detecção de disciplina
// ============================================================

function detectarDisciplina() {
  const dataDisc = document.body?.dataset?.disciplina;
  if (dataDisc) return dataDisc;
  const pagina = window.location.pathname.split("/").pop();
  return IA_DISCIPLINA_MAP[pagina] ?? null;
}

// ============================================================
//  2. Carregamento do resumo
// ============================================================

async function carregarResumo(disciplina) {
  if (IA_CACHE_RESUMO[disciplina]) {
    console.info(`[IA] Cache hit: resumo de "${disciplina}" já carregado.`);
    return IA_CACHE_RESUMO[disciplina];
  }
  try {
    const mod = await import("/Pessoal/Resumo/resumo.js");
    const resumoData = mod.resumoData ?? mod.default;
    if (!resumoData || !resumoData[disciplina]) return null;
    const texto = extrairTexto(resumoData[disciplina]);
    IA_CACHE_RESUMO[disciplina] = texto;
    console.info(`[IA] Resumo de "${disciplina}" carregado e cacheado (${texto.length} chars).`);
    return texto;
  } catch (err) {
    console.warn("[IA] Não foi possível carregar resumo.js:", err);
    return null;
  }
}

// ============================================================
//  3. Extração de texto
// ============================================================

function extrairTexto(dados, profundidade = 0) {
  if (!dados || profundidade > 5) return "";
  if (typeof dados === "string") return dados.trim();
  if (Array.isArray(dados)) {
    return dados.map(item => extrairTexto(item, profundidade + 1)).filter(Boolean).join("\n\n");
  }
  if (typeof dados === "object") {
    return Object.entries(dados)
      .map(([chave, valor]) => {
        const titulo   = chave.replace(/_/g, " ").toUpperCase();
        const conteudo = extrairTexto(valor, profundidade + 1);
        return conteudo ? `## ${titulo}\n${conteudo}` : "";
      })
      .filter(Boolean)
      .join("\n\n");
  }
  return String(dados);
}

// ============================================================
//  4. Filtragem de contexto inteligente
// ============================================================

function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extrairPalavrasChave(pergunta) {
  const stopwords = new Set([
    "o","a","os","as","um","uma","uns","umas","de","do","da","dos","das",
    "em","no","na","nos","nas","por","para","com","sem","sob","sobre",
    "entre","ate","apos","ante","perante","e","ou","mas","porem","contudo",
    "todavia","que","se","como","quando","onde","porque","qual","quais",
    "quem","quanto","me","te","nos","vos","lhe","lhes","ao","aos",
    "pelo","pela","pelos","pelas","ja","nao","sim","mais","muito","bem",
    "mal","ser","estar","ter","haver","foi","sao","era","isso","isto",
    "esse","essa","este","esta","aquele","aquela","aquilo","seu","sua",
    "meu","minha","nosso","nossa","voce","ele","ela","eles","elas","eu",
    "tu","pode","poderia","deveria","devo","preciso","quero","gostaria",
    "explica","explique","diga","fale","conta","conte","questao","aluno",
    "resposta","correta","certa","alternativa","item","letra",
  ]);
  return normalizar(pergunta)
    .split(" ")
    .filter(w => w.length > 2 && !stopwords.has(w));
}

function dividirEmSecoes(texto) {
  const raw = texto.split(/(?=^## )/m).map(s => s.trim()).filter(Boolean);
  const secoes = [];
  for (const secao of raw) {
    if (secao.length <= IA_MAX_SECAO_LEN) {
      secoes.push(secao);
    } else {
      const linhas = secao.split("\n");
      const titulo = linhas[0];
      const corpo  = linhas.slice(1).join("\n");
      const paras  = corpo.split(/\n{2,}/);
      let bloco = titulo;
      for (const para of paras) {
        if ((bloco + "\n" + para).length > IA_MAX_SECAO_LEN && bloco !== titulo) {
          secoes.push(bloco.trim());
          bloco = titulo + "\n" + para;
        } else {
          bloco += "\n" + para;
        }
      }
      if (bloco.trim()) secoes.push(bloco.trim());
    }
  }
  return secoes.length > 0 ? secoes : [texto.slice(0, IA_CONTEXTO_MAX)];
}

function pontuarSecao(secao, palavrasChave, bigrams) {
  const normalizada = normalizar(secao);
  const titulo      = normalizar(secao.split("\n")[0] ?? "");
  let score = 0;
  for (const palavra of palavrasChave) {
    const ocorrencias = (normalizada.match(new RegExp(`\\b${palavra}\\b`, "g")) ?? []).length;
    score += ocorrencias * 1.0;
    if (titulo.includes(palavra)) score += 2.5;
  }
  for (const bigram of bigrams) {
    if (normalizada.includes(bigram)) score += 1.5;
  }
  return score;
}

function filtrarContexto(contextoCompleto, pergunta, maxSecoes = IA_MAX_SECOES, maxChars = IA_CONTEXTO_MAX) {
  if (!contextoCompleto || !pergunta) return "";
  const palavrasChave = extrairPalavrasChave(pergunta);
  if (palavrasChave.length === 0) return contextoCompleto.slice(0, maxChars);

  const bigrams = [];
  for (let i = 0; i < palavrasChave.length - 1; i++) {
    bigrams.push(`${palavrasChave[i]} ${palavrasChave[i + 1]}`);
  }

  const secoes   = dividirEmSecoes(contextoCompleto);
  const pontuadas = secoes
    .map(secao => ({ secao, score: pontuarSecao(secao, palavrasChave, bigrams) }))
    .sort((a, b) => b.score - a.score);

  const topSecoes = pontuadas.slice(0, maxSecoes);
  const temRelevancia = topSecoes.some(s => s.score > 0);

  if (!temRelevancia) {
    console.info("[IA] Nenhuma seção relevante encontrada — usando fallback.");
    return contextoCompleto.slice(0, maxChars);
  }

  const indicesOriginais = new Map(secoes.map((s, i) => [s, i]));
  topSecoes.sort((a, b) => indicesOriginais.get(a.secao) - indicesOriginais.get(b.secao));

  let resultado = topSecoes.map(s => s.secao).join("\n\n");
  if (resultado.length > maxChars) resultado = resultado.slice(0, maxChars) + "...";

  console.info(
    `[IA] Contexto filtrado: ${resultado.length} chars | ` +
    `${topSecoes.length}/${secoes.length} seções | ` +
    `palavras-chave: [${palavrasChave.join(", ")}]`
  );
  return resultado;
}

// ============================================================
//  5. Captura a questão visível na tela (modo quiz)
// ============================================================

function capturarQuestaoVisivel() {
  const containers = document.querySelectorAll(".question-container");
  if (!containers.length) return null;

  const viewportMid = window.innerHeight / 2;
  let melhor = null;
  let menorDist = Infinity;

  containers.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < -300 || rect.top > window.innerHeight + 300) return;
    const dist = Math.abs(rect.top + rect.height / 2 - viewportMid);
    if (dist < menorDist) { menorDist = dist; melhor = el; }
  });

  if (!melhor) return null;

  const numero        = melhor.querySelector(".question-number")?.innerText ?? "";
  const statement     = melhor.querySelector(".question-statement")?.innerText ?? "";
  const context       = melhor.querySelector(".question-context")?.innerText ?? "";
  const miniEnunciado = melhor.querySelector(".question-mini-enunciado")?.innerText ?? "";
  const codeBlock     = melhor.querySelector(".code-block")?.innerText ?? "";
  const assertions    = melhor.querySelector(".assertions")?.innerText ?? "";

  const options = [...melhor.querySelectorAll(".option")]
    .map(el => el.innerText.trim())
    .filter(Boolean)
    .join("\n");

  if (!statement && !options) return null;

  const partes = [numero];
  if (context)        partes.push(context);
  if (miniEnunciado)  partes.push(miniEnunciado);
  if (codeBlock)      partes.push(codeBlock);
  if (assertions)     partes.push(assertions);
  if (statement)      partes.push(statement);
  if (options)        partes.push(options);

  return partes.filter(Boolean).join("\n\n").slice(0, 1200);
}

// ============================================================
//  6. Persistência do histórico por disciplina (localStorage)
// ============================================================

function _chaveStorage(disciplina) {
  // Chave única por disciplina: "ia_chat_banco", "ia_chat_redes", etc.
  return `ia_chat_${disciplina || "geral"}`;
}

/**
 * Carrega o histórico salvo de uma disciplina.
 * Retorna [] se não existir ou se tiver expirado (>30h).
 */
function carregarHistorico(disciplina) {
  try {
    const chave = _chaveStorage(disciplina);
    const raw = localStorage.getItem(chave);
    if (!raw) return [];

    const dados = JSON.parse(raw);

    // Verifica expiração (30 horas)
    if (Date.now() - (dados.timestamp || 0) > IA_HISTORICO_TTL) {
      console.info(`[IA] Histórico de "${disciplina}" expirado (>30h). Limpando.`);
      localStorage.removeItem(chave);
      return [];
    }

    console.info(`[IA] Histórico de "${disciplina}" restaurado: ${(dados.mensagens || []).length} mensagens.`);
    return dados.mensagens || [];
  } catch (err) {
    console.warn("[IA] Erro ao carregar histórico:", err);
    return [];
  }
}

/**
 * Salva o histórico atual de uma disciplina no localStorage.
 * Mantém no máximo IA_MAX_HISTORICO turnos (mais recentes).
 */
function salvarHistorico(disciplina, historico) {
  try {
    const chave = _chaveStorage(disciplina);
    // Guarda apenas os últimos IA_MAX_HISTORICO para não engordar demais
    const mensagensParaSalvar = historico.slice(-IA_MAX_HISTORICO);
    const dados = {
      timestamp: Date.now(),
      mensagens: mensagensParaSalvar,
    };
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch (err) {
    console.warn("[IA] Erro ao salvar histórico:", err);
  }
}

/**
 * Apaga o histórico salvo de uma disciplina.
 */
function limparHistorico(disciplina) {
  try {
    const chave = _chaveStorage(disciplina);
    localStorage.removeItem(chave);
    console.info(`[IA] Histórico de "${disciplina}" apagado.`);
  } catch (err) {
    console.warn("[IA] Erro ao limpar histórico:", err);
  }
}

// ============================================================
//  7. Abre a IA com contexto da disciplina
// ============================================================

async function abrirIADisciplina() {
  const disciplina = detectarDisciplina();
  if (!disciplina) { abrirIA("", null); return; }
  const textoResumo    = await carregarResumo(disciplina);
  const questaoVisivel = capturarQuestaoVisivel();
  abrirIA(textoResumo || "", disciplina, questaoVisivel || null);
}

// ============================================================
//  8. Comunicação com o Worker
// ============================================================

async function perguntarIA(pergunta, contexto = "", historico = [], disciplina = null, ehQuestao = false, modoSimulado = false) {
  let res;
  try {
    res = await fetch(IA_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta, contexto, historico, disciplina, ehQuestao, modoSimulado }),
    });
  } catch {
    throw new Error("⚠️ O sistema está temporariamente ocupado. Tente novamente.");
  }

  if (res.status === 429) throw new Error("⚠️ Muitas perguntas agora 😅 Tente novamente em alguns segundos.");
  if (!res.ok)            throw new Error("⚠️ O sistema está temporariamente ocupado. Tente novamente.");

  let data;
  try { data = await res.json(); } catch {
    throw new Error("⚠️ O sistema está temporariamente ocupado. Tente novamente.");
  }

  if (!data.resposta) throw new Error("⚠️ O sistema está temporariamente ocupado. Tente novamente.");
  return data.resposta;
}

// ============================================================
//  9. Contexto genérico (fallback)
// ============================================================

function pegarContexto() {
  return limitarContexto(document.body?.innerText ?? "");
}

function limitarContexto(texto) {
  const limpo = texto.replace(/\s+/g, " ").trim();
  return limpo.length > IA_CONTEXTO_MAX ? limpo.slice(0, IA_CONTEXTO_MAX) + "..." : limpo;
}

// ============================================================
//  10. Formatação Markdown → HTML
// ============================================================

function formatarMarkdown(texto) {
  let html = texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  html = html.replace(/```[\w]*\n?([\s\S]*?)```/g, (_, cod) =>
    `<pre><code>${cod.trim()}</code></pre>`
  );
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_\n]+)_/g, "<em>$1</em>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm,  "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm,   "<h2>$1</h2>");
  html = html.replace(/^[*\-] (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>");
  html = html.replace(/<\/ul>\s*<ul>/g, "");

  const partes = html.split(/\n{2,}/);
  html = partes
    .map(p => {
      const limpo = p.trim();
      if (!limpo) return "";
      if (/^<(ul|ol|pre|h[23]|li)/.test(limpo)) return limpo;
      return `<p>${limpo.replace(/\n/g, "<br>")}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  return html;
}

// ============================================================
//  11. Interface — Modal principal
// ============================================================

function abrirIA(contextoCompleto = "", disciplina = null, questaoInicial = null) {
  if (document.getElementById("ia-modal")) return;

  const textoBase = contextoCompleto || pegarContexto();
  const labelDisc = disciplina ? (IA_DISCIPLINA_LABEL[disciplina] ?? disciplina) : null;
  const temResumo = !!contextoCompleto;

  // ── Restaura histórico salvo desta disciplina ──────────────
  let historico = carregarHistorico(disciplina);

  const modal = document.createElement("div");
  modal.id = "ia-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Assistente IA");

  modal.innerHTML = `
    <div id="ia-overlay"></div>
    <div id="ia-box">
      <div id="ia-header">
        <div id="ia-header-info">
          <span id="ia-titulo">✦ Assistente IA</span>
          ${labelDisc ? `<span id="ia-disciplina-badge">${labelDisc}</span>` : ""}
        </div>
        <div id="ia-header-acoes">
          <button id="ia-treino" title="Ativar modo treino (a IA não dá a resposta direto)" aria-label="Modo treino">🎯</button>
          <button id="ia-limpar" title="Limpar conversa" aria-label="Limpar conversa">↺</button>
          <button id="ia-fechar" aria-label="Fechar">✕</button>
        </div>
      </div>
      <div id="ia-chat"></div>
      <div id="ia-input-area">
        <textarea
          id="ia-input"
          placeholder="Digite sua dúvida..."
          rows="2"
          maxlength="500"
          autocomplete="off"
        ></textarea>
        <div id="ia-rodape">
          <span id="ia-contador">0 / 500</span>
          <button id="ia-enviar">Perguntar</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const overlay   = modal.querySelector("#ia-overlay");
  const btnFechar = modal.querySelector("#ia-fechar");
  const btnLimpar = modal.querySelector("#ia-limpar");
  const btnTreino = modal.querySelector("#ia-treino");
  const btnEnviar = modal.querySelector("#ia-enviar");
  const input     = modal.querySelector("#ia-input");
  const contador  = modal.querySelector("#ia-contador");
  const chat      = modal.querySelector("#ia-chat");

  // Estado do modo treino (não persiste entre sessões)
  let modoSimulado = false;

  function _atualizarBotaoTreino() {
    if (modoSimulado) {
      btnTreino.title  = "Modo treino ativo — clique para desativar";
      btnTreino.style.opacity = "1";
      btnTreino.style.filter  = "drop-shadow(0 0 4px #f5a623)";
    } else {
      btnTreino.title  = "Ativar modo treino (a IA não dá a resposta direto)";
      btnTreino.style.opacity = "0.5";
      btnTreino.style.filter  = "none";
    }
  }
  _atualizarBotaoTreino();

  btnTreino.addEventListener("click", () => {
    modoSimulado = !modoSimulado;
    _atualizarBotaoTreino();
    if (modoSimulado) {
      // Injeta aviso no histórico para a IA saber que entrou no modo treino
      historico.push({
        role: "assistant",
        content: "[SISTEMA: Modo treino ativado. A partir de agora, não revele respostas diretas — faça perguntas socráticas.]"
      });
      adicionarMensagem("assistant",
        "🎯 **Modo treino ativado!** Vou te fazer pensar em vez de entregar a resposta direto. " +
        "Se quiser a resposta direta a qualquer momento, é só dizer **'resposta direta'**. Bora! 💪"
      );
    } else {
      // Injeta aviso no histórico para a IA saber que o modo normal voltou
      historico.push({
        role: "assistant",
        content: "[SISTEMA: Modo treino desativado. Responda normalmente a partir de agora — dê respostas diretas e completas como antes.]"
      });
      adicionarMensagem("assistant", "✅ Modo treino desativado. Voltando ao modo normal!");
    }
    salvarHistorico(disciplina, historico);
  });

  setTimeout(() => input.focus(), 50);

  input.addEventListener("input", () => {
    contador.textContent = `${input.value.length} / 500`;
  });

  const fechar = () => modal.remove();
  overlay.addEventListener("click", fechar);
  btnFechar.addEventListener("click", fechar);
  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") { fechar(); document.removeEventListener("keydown", esc); }
  });

  // ── Limpar: apaga histórico da disciplina ─────────────────
  btnLimpar.addEventListener("click", () => {
    historico = [];
    limparHistorico(disciplina);
    chat.innerHTML = "";
    // Reexibe o aviso de questão capturada se houver
    if (modal._questaoCapturada) {
      const aviso = document.getElementById("ia-questao-capturada");
      if (!aviso) _mostrarAvisoQuestao(chat);
    }
    input.focus();
  });

  // ── Aviso de questão capturada ────────────────────────────
  function _mostrarAvisoQuestao(chatEl) {
    const aviso = document.createElement("div");
    aviso.id = "ia-questao-capturada";
    aviso.innerHTML = `
      <div style="
        font-size:11px;
        color:var(--color-text-secondary,#888);
        padding:6px 12px;
        border-bottom:1px solid rgba(128,128,128,0.15);
        display:flex;
        align-items:center;
        gap:6px;
      ">
        <span style="font-size:14px">📌</span>
        Questão da tela capturada — pergunte "qual a correta?" ou "explique a B"
      </div>
    `;
    chatEl.parentNode.insertBefore(aviso, chatEl);
  }

  if (questaoInicial) {
    modal._questaoCapturada = questaoInicial;
    _mostrarAvisoQuestao(chat);
  }

  // ── Renderiza mensagem no chat ────────────────────────────
  function adicionarMensagem(role, conteudo) {
    const div = document.createElement("div");
    div.classList.add("ia-msg-bloco", `ia-msg-${role}`);
    if (role === "user") {
      div.textContent = conteudo;
    } else {
      div.innerHTML = typeof conteudo === "string" && conteudo.startsWith("<")
        ? conteudo
        : formatarMarkdown(conteudo);
    }
    chat.appendChild(div);
    requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));
    return div;
  }

  // ── Restaura mensagens antigas na tela ───────────────────
  if (historico.length > 0) {
    // Adiciona separador visual se houver histórico anterior
    const separador = document.createElement("div");
    separador.style.cssText = `
      font-size: 11px;
      color: var(--color-text-secondary, #888);
      text-align: center;
      padding: 6px 0 10px;
      opacity: 0.7;
    `;
    separador.textContent = "— conversa anterior restaurada —";
    chat.appendChild(separador);

    // Renderiza cada mensagem do histórico
    historico.forEach(({ role, content }) => {
      adicionarMensagem(role, content);
    });

    // Rola para o final após restaurar
    requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));
  }

  function mostrarCarregando() {
    const div = document.createElement("div");
    div.classList.add("ia-msg-bloco", "ia-msg-assistant", "ia-pensando");
    div.innerHTML = `<div class="ia-loading"><span></span><span></span><span></span></div>`;
    chat.appendChild(div);
    requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));
    return div;
  }

  let emAndamento = false;

  const enviar = async () => {
    if (emAndamento) return;

    const pergunta = input.value.trim();
    if (pergunta.length < 3) {
      const aviso = adicionarMensagem("assistant",
        `<p class="ia-aviso">⚠️ Escreva pelo menos 3 caracteres.</p>`);
      setTimeout(() => aviso.remove(), 3000);
      return;
    }

    // ── Monta contexto: questão capturada + resumo filtrado ──
    // CORREÇÃO: questão é enviada SEMPRE no contexto (não só na 1ª pergunta)
    // para que a IA mantenha o raciocínio ao longo de toda a conversa.
    let questaoCtx = "";
    if (modal._questaoCapturada) {
      questaoCtx = `--- QUESTÃO VISÍVEL NA TELA ---\n${modal._questaoCapturada.slice(0, 600)}\n--- FIM DA QUESTÃO ---`;
    }

    // Detecta ehQuestao pelo texto da questão (não só pela pergunta curta do aluno)
    const textoParaDetectar = modal._questaoCapturada || pergunta;
    const ehQuestao = /\b[A-Ea-e]\s*[\)\.]/.test(textoParaDetectar);

    // Filtra o resumo usando a pergunta do aluno como referência
    const contextoResumo = temResumo
      ? filtrarContexto(textoBase, pergunta)
      : limitarContexto(textoBase);

    // Junta questão + resumo, respeitando limite de 4500 chars do worker
    const contextoEnviado = questaoCtx
      ? (questaoCtx + "\n\n" + contextoResumo).slice(0, 4400)
      : contextoResumo;

    adicionarMensagem("user", pergunta);

    input.value           = "";
    contador.textContent  = "0 / 500";
    emAndamento           = true;
    btnEnviar.disabled    = true;
    btnEnviar.textContent = "Pensando...";
    input.disabled        = true;

    const loadingEl = mostrarCarregando();

    try {
      // Envia só os últimos IA_MAX_HISTORICO_ENVIO turnos ao worker
      // (economiza tokens mas mantém memória recente)
      const histTruncado = historico.slice(-IA_MAX_HISTORICO_ENVIO);

      const resultado = await perguntarIA(
        pergunta,
        contextoEnviado,
        histTruncado,
        disciplina,
        ehQuestao,
        modoSimulado
      );

      // O worker retorna { resposta, saiuDoSimulado } — trata os dois casos
      const textoResposta = (typeof resultado === "object" && resultado.resposta)
        ? resultado.resposta
        : resultado;

      // Se a IA sinalizou saída do modo treino, desativa localmente
      if (resultado.saiuDoSimulado) {
        modoSimulado = false;
        _atualizarBotaoTreino();
      }

      // Atualiza histórico em memória
      historico.push({ role: "user",      content: pergunta });
      historico.push({ role: "assistant", content: textoResposta });

      // Persiste no localStorage (mantém até IA_MAX_HISTORICO turnos)
      salvarHistorico(disciplina, historico);

      loadingEl.classList.remove("ia-pensando");
      loadingEl.innerHTML = "";
      loadingEl.innerHTML = formatarMarkdown(textoResposta);
      requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));

    } catch (err) {
      loadingEl.classList.remove("ia-pensando");
      loadingEl.innerHTML = `<p class="ia-erro">${err.message}</p>`;
    } finally {
      emAndamento           = false;
      btnEnviar.disabled    = false;
      btnEnviar.textContent = "Perguntar";
      input.disabled        = false;
      input.focus();
    }
  };

  btnEnviar.addEventListener("click", enviar);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); enviar(); }
  });
}

// ============================================================
//  12. Botão flutuante opcional
// ============================================================

function criarBotaoFlutuante(label = "✦ IA") {
  if (document.getElementById("ia-fab")) return;
  const btn = document.createElement("button");
  btn.id = "ia-fab";
  btn.setAttribute("aria-label", "Abrir assistente IA");
  btn.textContent = label;
  document.body.appendChild(btn);
  btn.addEventListener("click", () => IA.abrirIADisciplina());
}

// ============================================================
//  13. Exports globais
// ============================================================

window.IA = {
  abrirIA,
  abrirIADisciplina,
  perguntarIA,
  pegarContexto,
  limitarContexto,
  filtrarContexto,
  criarBotaoFlutuante,
};