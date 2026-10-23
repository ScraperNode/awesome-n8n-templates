# 🎣 Score and qualify B2B leads via webhook with Groq Chat Completions

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives lead details via a webhook and sends them to Groq’s OpenAI-compatible Chat Completions API to score and qualify the lead, then returns a structured JSON response with score, tier, recommended next action, and reasons.

## How it works
1. Receives a POST request on the `/ai-lead-qualification` webhook containing lead details in the request body.
2. Builds a chat prompt that asks Groq to score the lead (0–100) on budget/authority/fit/urgency/detail and return only a JSON object with qualification fields.
3. Calls Groq’s Chat Completions endpoint with the `openai/gpt-oss-120b` model and requests a JSON-formatted response.
4. Parses Groq’s response, applies defaults if fields are missing, and maps the result to a consistent output schema (score, tier, qualified, recommended_action, reasons).
5. Returns the qualification result as a JSON response to the original webhook request.

## Setup
1. Create a Groq API key and add it as an HTTP Header Auth credential used by the HTTP request to `https://api.groq.com/openai/v1/chat/completions`.
2. Copy the production webhook URL for `/ai-lead-qualification` and configure your form/app/CRM to send lead data as a POST request body to that URL.
3. Ensure the webhook payload includes the expected fields (for example `name`, `email`, `company`, `role`, `budget`, `need`, `source`, `message`) so the prompt has enough context to score the lead.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
