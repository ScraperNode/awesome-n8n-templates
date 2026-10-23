# 🔬 Moderate toxic text, redact PII, and audit with a Gemini HTTP API

> ⚡ **24 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow exposes a POST webhook that sends user text (and optional context) to Google Gemini for moderation, returning an allow/flag/block decision, toxicity level, matched categories, detected PII types, a short reason, and a cleaned version with slurs masked and PII redacted.

## How it works
1. Receives a POST request on a webhook endpoint with a JSON body containing `text` and optional `context`.
2. Sends the input to Google Gemini with instructions to classify safety (allow/flag/block), rate toxicity, identify categories, detect PII, and produce a redacted/masked `cleaned_text`.
3. Parses Gemini’s response into a structured JSON object with the required moderation fields.
4. Returns the moderation result to the caller as the webhook response.
5. If Gemini fails to classify the text, returns a fail-safe JSON response that flags the content for human review.

## Setup
1. Add a Google Gemini (PaLM) API credential for the Google Gemini Chat Model node.
2. Activate the workflow and copy the production webhook URL from the webhook trigger.
3. Configure your client/app to POST JSON (for example `{ "text": "...", "context": "..." }`) to the `/moderate` endpoint and handle the JSON response.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Basic LLM Chain, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
