# ⚒️ Retry LLM calls with OpenAI and Anthropic and log costs in Data Tables

> ⚡ **3 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow accepts a prompt from n8n Chat or another workflow, calls OpenAI with automatic retries, falls back to Anthropic on hard failures, logs each run to an n8n Data Table with token and cost estimates, and sends a Telegram alert if all providers fail.

## How it works
1. Triggers when a chat message is received or when another workflow calls it and passes in a prompt (and optional system prompt).
2. Builds a provider-specific request for the current role (OpenAI primary or Anthropic fallback), including model and max token settings.
3. Sends the request to the active provider via its API and evaluates the HTTP response to extract the answer, token usage, and any error details.
4. Retries rate limits, server errors, and timeouts with exponential backoff (respecting any Retry-After header), or switches to Anthropic after exhausted retries or non-retryable errors.
5. Produces a final result payload with success status, provider/model used, attempts, latency, token totals, estimated cost, and an attempt history log.
6. Ensures the llm_call_log n8n Data Table exists, writes one log row per run, and posts a Telegram message if the run failed on every provider before returning the result to the caller.

## Setup
1. Add credentials for OpenAI (OpenAI API) and Anthropic (Anthropic API) to enable primary and fallback calls.
2. Ensure your instance supports n8n Data Tables, or change/remove the logging steps if you do not want to store logs in the llm_call_log table.
3. Add a Telegram credential and set telegramChatId in the settings to receive failure alerts, or remove the Telegram alert step.
4. Update the settings for models, maxAttemptsPerProvider, timeouts, and token pricing (primary/fallback price per 1M tokens) to match the models you use and your billing assumptions.

## Requirements
- n8n 2.3 or newer (Data Table create operation). On older versions, create the `llm_call_log` table by hand.
- OpenAI and Anthropic API keys. Telegram is optional.

## Customization
- Swap the roles by setting `primaryProvider` to `anthropic` and `fallbackProvider` to `openai`.
- Change models and update the token prices in the settings node.
- To use it from another workflow, add an **Execute Workflow** node, select this workflow and pass `prompt` (and optionally `systemPrompt`). The result contains `output`, `status`, `provider` and `estimatedCostUsd`.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Workflow Trigger, Chat Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
