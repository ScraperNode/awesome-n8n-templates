# 🎬 Food image analysis for calorie estimation with Vision AI and Telegram

> ⚡ **633 views** · 🎬 [Content Creation & Video](../)

## Description

## Who’s it for

Teams building health/fitness apps, coaches running check-ins in chat, and anyone who needs quick, structured nutrition insights from food photos—without manual logging.

## What it does / How it works

This workflow accepts a food image (URL or Base64), uses a vision-capable LLM to infer likely ingredients and rough gram amounts, estimates per-ingredient calories, and returns a strict JSON summary with total calories and a short nutrition note. It normalizes different payloads (e.g., Telegram/LINE/Webhook) into a common format, handles transient errors with retries, and avoids hardcoded secrets by using credentials/env vars.

## Requirements

* Vision-capable LLM credentials (e.g., `gpt-4o` or equivalent)
* One input channel (Webhook, Telegram, or LINE)
* Environment variables for model name/temperature and optional request validation

## How to set up

1. Connect your input channel and enable the Webhook (copy the test URL).
2. Add LLM credentials and set `LLM_MODEL` and `LLM_TEMPERATURE` (e.g., `0.3`).
3. Turn on the workflow, send a sample payload with `imageUrl`, and confirm the strict JSON output.
4. (Optional) Configure a reply node (Telegram/Slack or HTTP Response) and a logger (Google Sheets/Notion).

## How to customize the workflow

* **Outputs**: Add macros (protein/fat/carb) or micronutrient fields.
* **Units**: Convert portion descriptions (piece/slice) to grams with your own mapping.
* **Languages**: Toggle multilingual output (ja/en).
* **Policies**: Tighten validation (reject low-confidence parses) or add manual review steps.
* **Security**: Use signed/temporary URLs for private images; mask PII in logs.

## Data model (strict JSON)

```json
{
  "dishName": "string",
  "ingredients": [{ "name": "string", "amount": 0, "calories": 0 }],
  "totalCalories": 0,
  "nutritionEvaluation": "string"
}
```

## Notes

Rename all nodes clearly, include sticky notes explaining the setup, and never commit real IDs, tokens, or API keys.

## 🔗 Nodes Used

Telegram Trigger, Gmail, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
