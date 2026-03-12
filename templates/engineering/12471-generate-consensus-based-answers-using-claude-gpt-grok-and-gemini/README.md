# ⚒️ Generate consensus-based answers using Claude, GPT, Grok and Gemini

> ⚡ **205 views** · ⚒️ [Engineering](../)

## Description

**The original LLM Council** concept was introduced by Andrej Karpathy and published as an open-source repository demonstrating multi-model consensus and ranking.
This workflow is my adaptation of that original idea, reimplemented and structured as a production-ready n8n template. Original repository - https://github.com/karpathy/llm-council

This n8n template implements the LLM Council pattern: a single user question is processed in parallel by multiple large language models, independently evaluated by peer models, and then synthesized into one high-quality, consensus-driven final answer.
It is designed for use cases where answer quality, balance, and reduced single-model bias are critical.

**📌 Section 1: Trigger & Input**

⚡ When Chat Message Received (Chat Trigger)
Purpose:
Receives a user’s message and initiates the entire workflow.

How it works:

A user sends a chat message

The message is stored as the Original Question

The same input is forwarded simultaneously to multiple LLM pipelines

Why it matters:
Provides a clean, unified entry point for all downstream multi-model logic.

📌 Section 2: Stage 1 — Parallel LLM Responses

🤖 Basic LLM Chains (x4)
Models used:

Anthropic Claude

OpenAI GPT

xAI Grok

Google Gemini

Purpose:
Each model independently generates its own response to the same question.

Key characteristics:

Identical prompt structure for all models

Independent reasoning paths

No shared context between models

Why it matters:
Produces diverse perspectives, reasoning styles, and solution approaches.

📌 Section 3: Stage 2 — Response Anonymization

🧾 Set Nodes (Response A / B / C / D)
Purpose:
Stores model outputs in an anonymized format:

Response A

Response B

Response C

Response D

Why it matters:
Prevents evaluator models from knowing which LLM authored which response, reducing bias during evaluation.

📌 Section 4: Stage 3 — Peer Evaluation & Ranking

📊 Evaluation Chains (Claude / GPT / Grok / Gemini)
Purpose:
Each model acts as a reviewer and:

Analyzes all four anonymized responses

Describes strengths and weaknesses of each

Produces a strict FINAL RANKING from best to worst

Ranking format (strict):

FINAL RANKING:
1. Response B
2. Response A
3. Response D
4. Response C


Why it matters:
Creates multiple independent quality assessments from different model perspectives.

📌 Section 5: Stage 4 — Ranking Aggregation

🧮 Code Node (JavaScript)
Purpose:
Aggregates all peer rankings by:

Parsing ranking positions

Calculating average position per response

Counting evaluation occurrences

Sorting responses by best average score

Output includes:

Aggregated rankings

Best response label

Best average score

Why it matters:
Transforms subjective rankings into a structured, quantitative consensus.

📌 Section 6: Stage 5 — Final Consensus Answer

🧠 Chairman LLM Chain
Purpose:
One model acts as the Council Chairman and:

Reviews all original responses

Considers peer rankings and aggregated scores

Identifies consensus patterns and disagreements

Produces a single, clear, high-quality final answer

Why it matters:
Delivers a refined response that reflects collective model intelligence rather than a simple average.

📊 Workflow Overview
Stage	Node / Logic	Purpose
1	Chat Trigger	Receive user question
2	LLM Chains	Generate independent responses
3	Set Nodes	Anonymize outputs
4	Evaluation Chains	Peer review & ranking
5	Code Node	Aggregate rankings
6	Chairman LLM	Final synthesized answer
🎯 Key Benefits

🧠 Multi-model intelligence — avoids reliance on a single LLM
⚖️ Reduced bias — anonymized peer evaluation
📊 Quality-driven selection — ranking-based consensus
🔁 Modular architecture — easy to add or replace models
🌍 Language-flexible — input and output languages configurable
🧩 Production-ready logic — clear stages, deterministic ranking

🚀 Ideal Use Cases

High-stakes decision support

Complex technical or architectural questions

Strategy and research synthesis

AI assistants requiring higher trust and reliability

Comparing and selecting the best LLM-generated answers

## 🔗 Nodes Used

Slack, Telegram, Gmail, WhatsApp Business Cloud, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
