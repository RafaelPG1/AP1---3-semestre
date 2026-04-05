// ============================================================
//  ia.js — Módulo global de IA  v6.3
//  Carrega questões via window.quizData* (sem import())
// ============================================================

const IA_WORKER_URL    = "https://restless-flower-1924.rafaelpeixoto475.workers.dev/";
const IA_CONTEXTO_MAX  = 2500;
const IA_MAX_HISTORICO = 20;
const IA_MAX_HISTORICO_ENVIO = 10;
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
  banco:           "Banco de Dados",
  desing:          "Design",           // ← adicionar
  redes:           "Redes",
  poo:             "POO",
  avapoo:          "POO — AVA",
  pooquestoes:     "POO — Questões",
  bancoquestoes:   "Banco — Questões",
  desingquestoes:  "Design — Questões", // ← adicionar
  redesquestoes:   "Redes — Questões",
  pessoal:         "Área Pessoal",
};

const IA_QUESTOES_GLOBAL = {
  poo:            "quizDataPoo",
  banco:          "quizDataBanco",
  design:         "quizDataDesign",
  redes:          "quizDataRedes",
  avapoo:         "quizDataAVAPoo",
  pooquestoes:    "quizDataPoo",
  bancoquestoes:  "quizDataBanco",
  designquestoes: "quizDataDesign",
  redesquestoes:  "quizDataRedes",
};
const IA_CACHE_RESUMO   = {};
const IA_CACHE_QUESTOES = {};

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
    console.info(`[IA] Resumo de "${disciplina}" carregado (${texto.length} chars).`);
    return texto;
  } catch (err) {
    console.warn("[IA] Não foi possível carregar resumo.js:", err);
    return null;
  }
}

// ============================================================
//  3. Carregamento das questões via window (sem import)
// ============================================================

async function carregarQuestoes(disciplina) {
  if (IA_CACHE_QUESTOES[disciplina]) {
    console.info(`[IA] Cache hit: questões de "${disciplina}" já carregadas.`);
    return IA_CACHE_QUESTOES[disciplina];
  }

  const nomeVar = IA_QUESTOES_GLOBAL[disciplina];
  if (!nomeVar) return null;

  const dados = window[nomeVar];
  if (!dados || !Array.isArray(dados)) {
    console.warn(`[IA] Variável global "${nomeVar}" não encontrada.`);
    return null;
  }

  const texto = formatarQuestoesParaContexto(dados);
  IA_CACHE_QUESTOES[disciplina] = texto;
  console.info(`[IA] Questões de "${disciplina}" carregadas via window (${texto.length} chars).`);
  return texto;
}

// ============================================================
//  4. Formata as questões como texto para o contexto da IA
// ============================================================

function formatarQuestoesParaContexto(quizData) {
  const letras = ["A", "B", "C", "D", "E"];
  const linhas = [];
  let numeroGlobal = 1;

  for (const subject of quizData) {
    linhas.push(`## ${subject.subject}`);

    for (const q of subject.questions) {
      linhas.push(`\nQuestão ${numeroGlobal}:`);

      if (q.texto)         linhas.push(q.texto.replace(/<[^>]+>/g, "").trim());
      if (q.miniEnunciado) linhas.push(q.miniEnunciado);
      if (q.code)          linhas.push(`[Código]: ${q.code.trim()}`);

      if (q.assertions?.length) {
        const romanos = ["I", "II", "III", "IV", "V", "VI"];
        q.assertions.forEach((a, i) => {
          const limpo = a.replace("[PORQUE]", "PORQUE:").trim();
          linhas.push(`${romanos[i]}. ${limpo}`);
        });
      }

      linhas.push(q.question.replace(/<[^>]+>/g, ""));

      q.options.forEach((op, i) => {
        const marcador = i === q.answer ? "✓" : " ";
        linhas.push(`  ${marcador} ${letras[i]}) ${op.replace(/<[^>]+>/g, "")}`);
      });

      const letraCorreta = letras[q.answer];
      const textoCorreta = q.options[q.answer].replace(/<[^>]+>/g, "");
      linhas.push(`Gabarito: ${letraCorreta}) ${textoCorreta}`);

      if (q.feedback) {
        const feedbackLimpo = q.feedback.replace(/<[^>]+>/g, "").trim();
        if (feedbackLimpo) linhas.push(`Explicação: ${feedbackLimpo}`);
      }

      numeroGlobal++;
    }
  }

  return linhas.join("\n");
}

// ============================================================
//  5. Extração de texto (resumo)
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
//  6. Filtragem de contexto inteligente
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
    "resposta","correta","certa","alternativa","item","letra","me","explica",
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

  const secoes    = dividirEmSecoes(contextoCompleto);
  const pontuadas = secoes
    .map(secao => ({ secao, score: pontuarSecao(secao, palavrasChave, bigrams) }))
    .sort((a, b) => b.score - a.score);

  const topSecoes = pontuadas.slice(0, maxSecoes);
  const temRelevancia = topSecoes.some(s => s.score > 0);

  if (!temRelevancia) {
    console.info("[IA] Nenhuma seção relevante — usando fallback.");
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
//  7. Detecta se a pergunta é sobre uma questão específica
// ============================================================

function extrairNumeroQuestao(pergunta) {
  const match =
    pergunta.match(/(?:quest[aã]o|explica(?:\s+a)?|numero|n[uú]mero|q\.?)\s*(\d+)/i) ??
    pergunta.match(/\ba\s+(\d+)\b/i) ??
    pergunta.match(/\b(\d+)\b/);
  return match ? parseInt(match[1], 10) : null;
}

function extrairQuestaoDoTexto(textoQuestoes, numeroQuestao) {
  if (!textoQuestoes || !numeroQuestao) return null;

  const regex = new RegExp(
    `(Questão ${numeroQuestao}:[\\s\\S]*?)(?=\\nQuestão \\d+:|$)`,
    "i"
  );
  const match = textoQuestoes.match(regex);
  if (!match) return null;

  return match[1].trim().slice(0, 1800);
}

// ============================================================
//  8. Persistência do histórico por disciplina (localStorage)
// ============================================================

function _chaveStorage(disciplina) {
  return `ia_chat_${disciplina || "geral"}`;
}

function carregarHistorico(disciplina) {
  try {
    const chave = _chaveStorage(disciplina);
    const raw = localStorage.getItem(chave);
    if (!raw) return { mensagens: [], modoExplicacao: false };

    const dados = JSON.parse(raw);

    if (Date.now() - (dados.timestamp || 0) > IA_HISTORICO_TTL) {
      console.info(`[IA] Histórico de "${disciplina}" expirado. Limpando.`);
      localStorage.removeItem(chave);
      return { mensagens: [], modoExplicacao: false };
    }

    console.info(`[IA] Histórico de "${disciplina}" restaurado: ${(dados.mensagens || []).length} mensagens.`);
    return {
      mensagens:      dados.mensagens      || [],
      modoExplicacao: dados.modoExplicacao ?? false,
    };
  } catch (err) {
    console.warn("[IA] Erro ao carregar histórico:", err);
    return { mensagens: [], modoExplicacao: false };
  }
}

function salvarHistorico(disciplina, historico, modoExplicacao = false) {
  try {
    const chave = _chaveStorage(disciplina);
    const dados = {
      timestamp: Date.now(),
      mensagens: historico.slice(-IA_MAX_HISTORICO),
      modoExplicacao,
    };
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch (err) {
    console.warn("[IA] Erro ao salvar histórico:", err);
  }
}

function limparHistorico(disciplina) {
  try {
    localStorage.removeItem(_chaveStorage(disciplina));
    console.info(`[IA] Histórico de "${disciplina}" apagado.`);
  } catch (err) {
    console.warn("[IA] Erro ao limpar histórico:", err);
  }
}

// ============================================================
//  9. Abre a IA com contexto da disciplina
// ============================================================

async function abrirIADisciplina() {
  const disciplina = detectarDisciplina();
  if (!disciplina) { abrirIA("", null, null, null); return; }

  const [textoResumo, textoQuestoes] = await Promise.all([
    carregarResumo(disciplina),
    carregarQuestoes(disciplina),
  ]);

  abrirIA(textoResumo || "", disciplina, null, textoQuestoes || null);
}

// ============================================================
//  10. Comunicação com o Worker
//  Retorna o objeto completo { resposta, fonte }
// ============================================================

async function perguntarIA(pergunta, contexto = "", historico = [], disciplina = null, ehQuestao = false, modoExplicacao = false) {
  let res;
  try {
    res = await fetch(IA_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pergunta, contexto, historico, disciplina, ehQuestao, modoExplicacao }),
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

  // Retorna o objeto inteiro { resposta, fonte }
  return data;
}

// ============================================================
//  11. Contexto genérico (fallback)
// ============================================================

function pegarContexto() {
  return limitarContexto(document.body?.innerText ?? "");
}

function limitarContexto(texto) {
  const limpo = texto.replace(/\s+/g, " ").trim();
  return limpo.length > IA_CONTEXTO_MAX ? limpo.slice(0, IA_CONTEXTO_MAX) + "..." : limpo;
}

// ============================================================
//  12. Formatação Markdown → HTML
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
//  13. Interface — Modal principal
// ============================================================

function abrirIA(contextoCompleto = "", disciplina = null, questaoInicial = null, textoQuestoes = null) {
  if (document.getElementById("ia-modal")) return;

  const textoBase = contextoCompleto || pegarContexto();
  const labelDisc = disciplina ? (IA_DISCIPLINA_LABEL[disciplina] ?? disciplina) : null;
  const temResumo = !!contextoCompleto;

  const _sessao      = carregarHistorico(disciplina);
  let historico      = _sessao.mensagens;
  let modoExplicacao = _sessao.modoExplicacao;

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
          <button id="ia-explicacao" title="Ativar modo explicação" aria-label="Modo explicação">💡</button>
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

  const overlay       = modal.querySelector("#ia-overlay");
  const btnFechar     = modal.querySelector("#ia-fechar");
  const btnLimpar     = modal.querySelector("#ia-limpar");
  const btnExplicacao = modal.querySelector("#ia-explicacao");
  const btnEnviar     = modal.querySelector("#ia-enviar");
  const input         = modal.querySelector("#ia-input");
  const contador      = modal.querySelector("#ia-contador");
  const chat          = modal.querySelector("#ia-chat");

  function _atualizarBotaoExplicacao() {
    if (modoExplicacao) {
      btnExplicacao.title = "Modo explicação ativo — clique para desativar";
      btnExplicacao.classList.add("ativo");
    } else {
      btnExplicacao.title = "Ativar modo explicação (a IA ensina passo a passo)";
      btnExplicacao.classList.remove("ativo");
    }
  }
  _atualizarBotaoExplicacao();

// substitui o listener do btnExplicacao por esse
let _explicacaoTimer = null;
btnExplicacao.addEventListener("click", () => {
  if (_explicacaoTimer) return;
  _explicacaoTimer = setTimeout(() => { _explicacaoTimer = null; }, 1000);

  modoExplicacao = !modoExplicacao;
  _atualizarBotaoExplicacao();
  
  if (modoExplicacao) {
    adicionarMensagem("assistant",
      "💡 **Modo explicação ativado!** Vou te ensinar o conteúdo passo a passo, " +
      "com exemplos práticos e de forma bem clara. Pode perguntar o que quiser!"
    );
  } else {
    adicionarMensagem("assistant", "✅ Modo explicação desativado. Voltando ao modo normal!");
  }

  // ← salva imediatamente o novo estado
  salvarHistorico(disciplina, historico, modoExplicacao);
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

  btnLimpar.addEventListener("click", () => {
    historico = [];
    limparHistorico(disciplina);
    chat.innerHTML = "";
    input.focus();
  });

  function adicionarMensagem(role, conteudo, fonte = null) {
    const div = document.createElement("div");
    div.classList.add("ia-msg-bloco", `ia-msg-${role}`);
    if (role === "user") {
      div.textContent = conteudo;
    } else {
      div.innerHTML = typeof conteudo === "string" && conteudo.startsWith("<")
        ? conteudo
        : formatarMarkdown(conteudo);
      // ✅ Adiciona badge da fonte se disponível
      if (fonte) {
        div.innerHTML += `<span class="ia-fonte">via ${fonte}</span>`;
      }
    }
    chat.appendChild(div);
    requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" }));
    return div;
  }

  if (historico.length > 0) {
// substitui o separador atual por esse
const separador = document.createElement("div");
separador.style.cssText = `
  font-size: 11px;
  color: rgba(180, 160, 255, 0.5);
  text-align: center;
  padding: 6px 0 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
separador.innerHTML = `
  <span style="flex:1;height:1px;background:rgba(255,255,255,.08);"></span>
  <span>conversa anterior restaurada</span>
  <span style="flex:1;height:1px;background:rgba(255,255,255,.08);"></span>
`;
chat.appendChild(separador);

    // ✅ Passa a fonte salva para adicionarMensagem ao restaurar
    historico.forEach(({ role, content: c, fonte: f }) => {
      adicionarMensagem(role, c, f ?? null);
    });

    if (modoExplicacao) {
      _atualizarBotaoExplicacao();
      adicionarMensagem("assistant",
        "💡 **Modo explicação ainda ativo.** Pode continuar de onde paramos!"
      );
    }

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

    // ── Monta contexto ────────────────────────────────────────
    let contextoEnviado = "";

    if (textoQuestoes) {
      const numeroQuestao = extrairNumeroQuestao(pergunta);
      const questaoEspecifica = numeroQuestao
        ? extrairQuestaoDoTexto(textoQuestoes, numeroQuestao)
        : null;

      if (questaoEspecifica) {
        const resumoFiltrado = temResumo
          ? filtrarContexto(textoBase, pergunta, 2, 800)
          : "";
        contextoEnviado = (
          "--- QUESTÃO SOLICITADA ---\n" +
          questaoEspecifica +
          "\n--- FIM DA QUESTÃO ---" +
          (resumoFiltrado ? "\n\n--- RESUMO ---\n" + resumoFiltrado : "")
        ).slice(0, 4400);

        console.info(`[IA] Questão ${numeroQuestao} extraída e enviada no contexto.`);
      } else {
        const questoesFiltradas = filtrarContexto(textoQuestoes, pergunta, IA_MAX_SECOES, 2000);
        const resumoFiltrado    = temResumo
          ? filtrarContexto(textoBase, pergunta, 2, 800)
          : "";
        contextoEnviado = (
          "--- QUESTÕES ---\n" + questoesFiltradas +
          (resumoFiltrado ? "\n\n--- RESUMO ---\n" + resumoFiltrado : "")
        ).slice(0, 4400);
      }
    } else {
      contextoEnviado = temResumo
        ? filtrarContexto(textoBase, pergunta)
        : limitarContexto(textoBase);
    }

    const ehQuestao = (
      /\b[A-Ea-e]\s*[\)\.]/.test(pergunta) ||
      /qual\s+(a\s+)?(resposta|alternativa|correta|certa|gabarito)/i.test(pergunta) ||
      /qual\s+(é\s+)?(a\s+)?(letra|opção)/i.test(pergunta) ||
      /explica\s+(a\s+)?\d+/i.test(pergunta) ||
      /quest[aã]o\s+\d+/i.test(pergunta) ||
      /me\s+explica/i.test(pergunta)
    );

    adicionarMensagem("user", pergunta);
    input.value           = "";
    contador.textContent  = "0 / 500";
    emAndamento           = true;
    btnEnviar.disabled    = true;
    btnEnviar.textContent = "Pensando...";
    input.disabled        = true;

    const loadingEl = mostrarCarregando();

    try {
      const histTruncado = historico
        .filter(t => !t.content?.startsWith("[SISTEMA:"))
        .slice(-IA_MAX_HISTORICO_ENVIO);

      const resultado = await perguntarIA(
        pergunta,
        contextoEnviado,
        histTruncado,
        disciplina,
        ehQuestao,
        modoExplicacao
      );

      const textoResposta = resultado.resposta ?? String(resultado);
      const fonte         = resultado.fonte ?? null;

      // ✅ Salva fonte junto com a mensagem do assistant no histórico
      historico.push({ role: "user",      content: pergunta });
      historico.push({ role: "assistant", content: textoResposta, fonte: fonte });
      salvarHistorico(disciplina, historico, modoExplicacao);

      // ✅ Renderiza com badge da fonte
      const htmlFinal =
        formatarMarkdown(textoResposta) +
        (fonte ? `<span class="ia-fonte">via ${fonte}</span>` : "");

      loadingEl.classList.remove("ia-pensando");
      loadingEl.innerHTML = htmlFinal;
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
//  14. Botão flutuante opcional
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
//  15. Exports globais
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