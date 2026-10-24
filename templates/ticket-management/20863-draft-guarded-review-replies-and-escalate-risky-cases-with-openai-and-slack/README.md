# 🎫 Draft guarded review replies and escalate risky cases with OpenAI and Slack

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Turn every Google, Play Store, Zomato or Amazon review into a brand-safe reply draft, without letting an LLM post something risky. Works with any OpenAI-compatible model (OpenAI, Groq, OpenRouter, Ollama).

## How it works
1. A webhook receives the review.
2. The workflow validates the input, and an LLM classifies sentiment and topics and drafts a reply that mentions one concrete detail from the review.
3. Then deterministic code guardrails check the draft for length, blocked phrases (refunds, compensation, legal), low star ratings, and the model's own "needs attention" flag.
4. Safe replies are logged as `ready_to_post` to your sheet or CRM.
5. Risky ones go to the owner on Slack with the draft attached.

## Setup
1. Credentials → New → Header Auth: Name `Authorization`, Value `Bearer YOUR_API_KEY`. Select it on **LLM**.
2. Set `baseUrl`, `model`, `blockedPhrases`, `maxReplyWords`, and `escalateAtOrBelowRating` in **Config**.
3. Paste a Slack incoming-webhook URL in **Alert Owner (Slack)**.
4. Point **Log Approved Reply** at a Sheets, Airtable or CRM webhook, or swap in a native node.
5. Test: `curl -X POST <webhook-test-url>/review-reply -H 'Content-Type: application/json' -d '{"business":"Brew Lab Cafe","platform":"Google","author":"Priya","rating":2,"review":"Coffee was great but waited 25 mins and nobody apologised."}'`

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
