# 🎬 Generate text via a validated webhook with Anthropic Claude and Slack

> ⚡ **2 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow exposes a POST webhook that validates prompt inputs, calls the Anthropic Claude Messages API with retries, returns a consistent JSON response, and posts a preview of the generated text to Slack using an Incoming Webhook.

## How it works
1. Receives a POST request on a webhook endpoint with a JSON body containing a `userPrompt` (and optional model and generation settings).
2. Validates that `userPrompt` is present and applies defaults for `model`, `maxTokens`, and `temperature`, returning a 400 JSON error if validation fails.
3. Sends the prompt to the Anthropic Claude Messages API with automatic retries on transient failures.
4. If the Claude call succeeds, extracts the generated text and returns it to the webhook caller as a 200 JSON response including usage metadata.
5. After a successful response, posts a short preview of the generated text to Slack via an Incoming Webhook.
6. If the Claude call fails after retries, returns a structured 502 JSON error response to the webhook caller.

## Setup
1. Add an Anthropic API credential in n8n and select it for the HTTP request that calls `https://api.anthropic.com/v1/messages`.
2. Create a Slack Incoming Webhook and paste its URL into the workflow’s Slack webhook URL configuration.
3. Copy the workflow webhook URL from n8n and configure your client/app to send POST requests with a JSON body that includes `userPrompt` (and optionally `systemPrompt`, `model`, `maxTokens`, and `temperature`).

## Requirements
- An n8n instance (Cloud or self-hosted)
- An Anthropic API key, added as an "Anthropic" credential in n8n
- A Slack Incoming Webhook URL (no Slack app or OAuth required)

## Customization
- Change the default model, maxTokens, or temperature in the "Validate input & apply defaults" node.
- Swap the Slack step for Notion, email, or a database write to deliver the generated text somewhere else.
- Replace the Webhook trigger with a Schedule Trigger to run this on a recurring basis instead of on demand.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
