# 🎫 Draft product review reply JSON via webhook with OpenAI-compatible LLMs

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives product reviews via a webhook and uses an OpenAI-compatible Chat Completions API to draft an on-brand public reply in JSON, returning the reply plus token usage and an estimated cost, with a single corrective retry when the model output is invalid.

## How it works
1. Receives a POST webhook request containing review details like rating, text, product, reviewer_first_name, and an optional review_id.
2. Loads configuration such as the system prompt, brand voice, model name, base URL, temperature, and per-token pricing.
3. Calls an OpenAI-compatible /chat/completions endpoint to generate a JSON object with reply, tone, and publish_ready.
4. Validates the model response by parsing the returned content as JSON and checking it includes the required keys.
5. If the output is invalid or the API errors, sends one corrective follow-up request to the same LLM endpoint and validates the retried response.
6. Responds to the webhook with either the reply draft (including usage, attempt count, and estimated cost) or a needs_human=true result when the output remains invalid.

## Setup
1. Create an HTTP Header Auth credential with name Authorization and value Bearer YOUR_API_KEY, and select it for both LLM HTTP requests.
2. Update the LLM base URL and model name in the configuration step to match your OpenAI-compatible provider.
3. (Optional) Adjust the system prompt, brand_voice, temperature, and input/output token prices to fit your policy and cost model.
4. Activate the workflow and send review JSON to the POST webhook endpoint at /webhook/review-reply-drafter.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
