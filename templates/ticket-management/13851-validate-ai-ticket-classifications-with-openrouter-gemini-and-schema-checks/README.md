# 🎫 Validate AI ticket classifications with OpenRouter Gemini and schema checks

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

Validate AI-generated outputs before your workflow acts on them. This template sends a support ticket through AI classification, parses the JSON response, and checks that categories, urgency levels, and confidence scores are all within valid ranges.

**What you'll do**
- Send a support ticket to the AI for classification.
- Watch the Code node parse and validate the AI's JSON response against a defined schema.
- See how valid outputs continue through the workflow while invalid ones get flagged.

**What you'll learn**
- How to structure AI prompts to return valid JSON
- How Code nodes parse and validate AI output against expected schemas
- How to check confidence scores, valid categories, and urgency levels programmatically
- How to build retry and fallback paths for malformed AI responses

**Why it matters**
AI models don't always return what you expect. A confidence score of "high" instead of 0.95, a missing category field, or a malformed JSON response can silently break downstream steps. This template catches those failures before they propagate.

## 🔗 Nodes Used

Webhook, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
