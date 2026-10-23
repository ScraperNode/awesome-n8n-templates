# ⚒️ Arbitrate LLM answers using an Anthropic Claude panel and WhatsApp alerts

> ⚡ **14 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow accepts a question via webhook or manual run, queries multiple Anthropic Claude models in parallel, and uses a separate Claude adjudicator to measure weighted agreement. It returns a consensus answer, runs debate rounds when needed, and escalates unresolved or low-confidence cases to an arbiter and WhatsApp.

## How it works
1. Receives a POST request on the `/webhook/llm-arbitration` endpoint (or starts from a manual trigger) and normalizes the input into a question, context, criteria, and arbitration settings.
2. Validates that a non-empty question is provided, returning a 400 JSON error response to the webhook if validation fails.
3. Builds a panel of Anthropic Claude requests and calls each panelist model in parallel to produce a structured JSON answer with key claims and a confidence score.
4. Sends the panel’s answers to an Anthropic Claude adjudicator that clusters equivalent positions and extracts the main points of disagreement.
5. Computes a weighted agreement score from panelist weights and either returns the consensus answer, starts another debate round where panelists see each other’s positions, or escalates to arbitration when the round limit is reached.
6. If arbitration is required, calls an Anthropic Claude arbiter (optionally with web search enabled) to issue a verdict with rationale, dissent, verified claims, and a human-review flag.
7. Responds to the original webhook with the final result (including per-round agreement, panel positions, and estimated costs) and sends a WhatsApp alert if the arbiter flags that human review is needed.

## Setup
1. Create an Anthropic HTTP Header Auth credential (header `x-api-key`) and select it for the HTTP requests that call the panelist, adjudicator, and arbiter models.
2. Configure the default panel, weights, judge/arbiter models, agreement threshold, max rounds, pricing catalog, and WhatsApp routing values in the workflow’s configuration fields (including `whatsappBusinessPhoneId` and `whatsappRecipientPhone`).
3. Add WhatsApp Business credentials for the WhatsApp node and ensure the configured phone number ID can message the recipient.
4. Copy the production webhook URL for `/webhook/llm-arbitration` and configure your source system to POST JSON such as `{ "question": "...", "context": "...", "criteria": "...", "agreementThreshold": 0.8, "maxRounds": 2, "panel": [...] }` (only `question` is required).

## 🔗 Nodes Used

HTTP Request, Webhook, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
