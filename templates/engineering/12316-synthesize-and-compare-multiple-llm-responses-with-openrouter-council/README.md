# ⚒️ Synthesize and compare multiple LLM responses with OpenRouter council

> ⚡ **240 views** · ⚒️ [Engineering](../)

## Description

This template adapts Andrej Karpathy’s **LLM Council** concept for use in **n8n**, creating a workflow that collects, evaluates, and synthesizes multiple large language model (LLM) responses to reduce individual model bias and improve answer quality.

## 🎯 The gist

This LLM Council workflow acts as a moderation board for multiple LLM “opinions”:

- The same question is answered independently by several models.
- All answers are anonymized.
- Each model then evaluates and ranks *all* responses.
- A designated **Council Chairman** model synthesizes a final verdict based on these evaluations.
- The final output includes:
  - The original query
  - The Chairman’s verdict
  - The ranking of each response by each model
  - The original responses from all models

The goal is to reduce single‑model bias and arrive at more balanced, objective answers.

## 🧰 Use cases

This workflow enables several practical applications:

- Receiving more balanced answers by combining multiple model perspectives
- Benchmarking and comparing LLM responses
- Exploring diverse viewpoints on complex or controversial questions

## ⚙️ How it works

- The workflow leverages **OpenRouter**, allowing access to many LLMs through a single API credential.
- In the **Initialization** node, you define:
  - **Council member models**: Models that answer the query and later evaluate all responses
  - **Chairman model**: The model responsible for synthesizing the final verdict
- Any OpenRouter-supported model can be used: https://openrouter.ai/models
- For simplicity:
  - Input is provided via a Chat Input trigger
  - Output is sent via an email node with a structured summary of the council’s results

## 👷 How to use

- Select the LLMs to include in your council:
  - **Council member models**: Models that independently answer and evaluate the query. The default template uses:
    - openai/gpt-4o
    - google/gemini-2.5-flash
    - anthropic/claude-sonnet-4.5
    - perplexity/sonar-pro-search
  - **Chairman model**: Choose a model with a sufficiently large context window to process all evaluations and rankings.
- Start the Chat Input trigger.
- Observe the workflow execution and review the synthesized result in your chosen output channel.

⚠️ Avoid using too many models simultaneously. The total context size grows quickly (n responses + n² evaluations), which may exceed the Chairman model’s context window.

## 🚦 Requirements

- **OpenRouter API access** configured in n8n credentials
- **SMTP credentials** for sending the final council output by email (or replace with another output method)

## 🤡 Customizing this workflow

- Replace the Chat Input trigger with alternatives such as Telegram, email, or WhatsApp.
- Redirect output to other channels instead of email.
- Modify council member and chairman models directly in the Initialization node by updating their OpenRouter model names.

## 🔗 Nodes Used

Send Email, HTTP Request, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
