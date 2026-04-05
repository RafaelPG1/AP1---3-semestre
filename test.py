"""
test_openrouter.py — Testador de modelos via OpenRouter
Suporta: single turn, multi-turn, reasoning on/off
"""

import requests
import json
import os

# ── Config ────────────────────────────────────────────────────────────────────

API_KEY = os.getenv("OPENROUTER_API_KEY", "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")
BASE_URL = "https://openrouter.ai/api/v1/chat/completions"

# Fallback caso a busca ao vivo falhe
MODELOS_FALLBACK = {
    "1": "meta-llama/llama-3.3-70b-instruct:free",
    "2": "deepseek/deepseek-r1:free",
    "3": "deepseek/deepseek-v3:free",
    "4": "openrouter/free",
}

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "HTTP-Referer": "http://localhost",
    "X-Title": "Teste Local",
}

# ── Função principal de chamada ────────────────────────────────────────────────

def chamar(messages: list, modelo: str, reasoning: bool = False, max_tokens: int = 1000) -> dict:
    """Faz a chamada à API e retorna o objeto 'message' completo."""
    payload = {
        "model": modelo,
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.6,
    }

    if reasoning:
        # Formato padrão OpenRouter
        payload["reasoning"] = {"enabled": True}
        # Qwen3 usa formato diferente (thinking budget)
        if "qwen3" in modelo.lower():
            payload["thinking"] = {"type": "enabled", "budget_tokens": 2000}

    res = requests.post(BASE_URL, headers=HEADERS, data=json.dumps(payload), timeout=60)

    if not res.ok:
        print(f"\n❌ Erro {res.status_code}: {res.text}")
        return {}

    data = res.json()
    return data["choices"][0]["message"]


def imprimir_resposta(msg: dict, mostrar_reasoning: bool = True):
    """Imprime conteúdo e reasoning (se houver) de forma legível."""
    if mostrar_reasoning and msg.get("reasoning_details"):
        print("\n── Reasoning ─────────────────────────────────────")
        for bloco in msg["reasoning_details"]:
            if bloco.get("type") == "thinking":
                texto = bloco.get("thinking", "")
                print(texto[:600] + ("..." if len(texto) > 600 else ""))
        print("──────────────────────────────────────────────────")

    print(f"\n🤖 Resposta:\n{msg.get('content', '(sem conteúdo)')}")


# ── Modos de teste ─────────────────────────────────────────────────────────────

def teste_single(modelo: str, reasoning: bool):
    print("\n=== MODO: Single Turn ===")
    pergunta = input("Sua pergunta: ").strip()
    if not pergunta:
        return
    messages = [{"role": "user", "content": pergunta}]
    msg = chamar(messages, modelo, reasoning)
    imprimir_resposta(msg)


def teste_multiturn(modelo: str, reasoning: bool):
    print("\n=== MODO: Multi-Turn (reasoning preservado) ===")
    print("Digite 'sair' para encerrar.\n")
    messages = []

    while True:
        pergunta = input("Você: ").strip()
        if pergunta.lower() in ("sair", "exit", "quit"):
            break
        if not pergunta:
            continue

        messages.append({"role": "user", "content": pergunta})
        msg = chamar(messages, modelo, reasoning)

        if not msg:
            print("(sem resposta — tente novamente)")
            messages.pop()
            continue

        imprimir_resposta(msg)

        entry = {"role": "assistant", "content": msg.get("content")}
        if msg.get("reasoning_details"):
            entry["reasoning_details"] = msg["reasoning_details"]
        messages.append(entry)
        print(f"\n  [histórico: {len(messages)} mensagens]\n")


QUESTAO_CONTEXTO = """
Questão 1 — Banco de Dados (contexto da prova)

Uma quitanda familiar, fundada em 1982 pelo sr. Antônio, controlava suas operações por meio de
cadernetas de papel: cada venda era anotada manualmente e o estoque era conferido ao final do dia
de forma visual. Com o crescimento do negócio, erros de cálculo, perdas de cadernetas e dificuldade
de consultar o histórico tornaram-se frequentes. Para modernizar a gestão, o filho do sr. Antônio —
formado em Sistemas de Informação — implantou um sistema computacional de registro de vendas. Ao
final de janeiro, o sistema processou automaticamente todas as vendas registradas e emitiu um
relatório consolidado de faturamento mensal, permitindo ao proprietário visualizar o total arrecadado
e comparar com os custos de fornecimento.

Pergunta: ao processar os dados brutos das vendas e gerar um relatório de faturamento mensal, o
sistema transformou:
A) Fatos em metadados para garantir a integridade
B) Dados em informação, gerando subsídios para o conhecimento e tomada de decisão  ← CORRETA
C) Metadados em fatos, visando o armazenamento físico
D) Conhecimento em dados primários, reduzindo a abstração
E) Registros em campos, facilitando o acesso via ponteiros

Por que B é correta: Os registros brutos de cada venda (datas, quantidades, valores) são dados
isolados. Ao processar e consolidar em relatório, o sistema os transformou em informação — resultado
organizado com sentido que permite tomada de decisão. Essa é a distinção fundamental entre dado e
informação na teoria de sistemas de informação.
"""


def teste_sistema(modelo: str, reasoning: bool):
    print("\n=== MODO: System Prompt (simula Worker) ===")
    system = (
        "Professor jovem e direto ajudando aluno a estudar para prova. "
        "Linguagem simples e informal. Responda em português do Brasil. "
        "Respostas curtas: máximo 3 parágrafos. Negrito só no conceito principal. "
        "Use o material abaixo como referência:\n\n"
        + QUESTAO_CONTEXTO
    )
    messages = [{"role": "system", "content": system}]
    print(f"System prompt ativo com questão 1 carregada!\n")

    while True:
        pergunta = input("Aluno: ").strip()
        if pergunta.lower() in ("sair", "exit"):
            break
        if not pergunta:
            continue

        messages.append({"role": "user", "content": pergunta})
        msg = chamar(messages, modelo, reasoning)

        if not msg:
            messages.pop()
            continue

        imprimir_resposta(msg, mostrar_reasoning=False)
        messages.append({"role": "assistant", "content": msg.get("content")})


# ── Busca modelos ao vivo ──────────────────────────────────────────────────────

def buscar_modelos_gratuitos():
    try:
        res = requests.get("https://openrouter.ai/api/v1/models", headers=HEADERS, timeout=15)
        if not res.ok:
            return None
        todos = res.json().get("data", [])
        gratuitos = [
            m for m in todos
            if m["id"].endswith(":free") or m.get("pricing", {}).get("prompt") == "0"
        ]
        gratuitos.sort(key=lambda m: m.get("name", m["id"]))
        return gratuitos
    except Exception as e:
        print(f"  (erro ao buscar modelos: {e})")
        return None


# ── Menu principal ─────────────────────────────────────────────────────────────

def main():
    print("=" * 55)
    print("  OpenRouter — Testador de Modelos")
    print("=" * 55)

    print("\nBuscando modelos gratuitos disponíveis...")
    ao_vivo = buscar_modelos_gratuitos()

    if ao_vivo:
        print(f"  {len(ao_vivo)} modelos encontrados:\n")
        for i, m in enumerate(ao_vivo, 1):
            ctx = m.get("context_length", "?")
            print(f"  {i:>2}) {m['id']:<55} (ctx: {ctx})")
        print("   0) Digitar manualmente")

        escolha = input("\nEscolha o modelo [1]: ").strip() or "1"
        if escolha == "0":
            modelo = input("Nome do modelo: ").strip()
        else:
            try:
                modelo = ao_vivo[int(escolha) - 1]["id"]
            except (ValueError, IndexError):
                modelo = ao_vivo[0]["id"]
    else:
        print("\nNão foi possível buscar ao vivo. Usando lista local:")
        for k, v in MODELOS_FALLBACK.items():
            print(f"  {k}) {v}")
        print("  0) Digitar manualmente")
        escolha = input("\nEscolha o modelo [1]: ").strip() or "1"
        if escolha == "0":
            modelo = input("Nome do modelo: ").strip()
        else:
            modelo = MODELOS_FALLBACK.get(escolha, MODELOS_FALLBACK["1"])

    print(f"\nModelo: {modelo}")

    usar_reasoning = input("Ativar reasoning? (s/N): ").strip().lower() == "s"
    print(f"Reasoning: {'ativado' if usar_reasoning else 'desativado'}")

    print("\nModos:")
    print("  1) Single turn")
    print("  2) Multi-turn (reasoning preservado)")
    print("  3) System prompt (simula Worker)")

    modo = input("Modo [2]: ").strip() or "2"

    if modo == "1":
        teste_single(modelo, usar_reasoning)
    elif modo == "3":
        teste_sistema(modelo, usar_reasoning)
    else:
        teste_multiturn(modelo, usar_reasoning)


if __name__ == "__main__":
    main()