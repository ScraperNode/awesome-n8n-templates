# ⚒️ Batch structured AI calls via OpenRouter, Data Tables, and webhooks

> ⚡ **17 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Give an AI coding agent one authenticated webhook for structured LLM batches. The agent prepares prompts and JSON schemas in a script; n8n processes the first 50 calls in parallel, returns ordered results, and records who used the service.

## How it works
1. The **Webhook** accepts a POST request with an `X-API-Key` header and a `calls` array. Each call contains `systemPrompt`, `userMessage`, a JSON-encoded `jsonSchema` string, and an `aiMode` of `small` or `big`. Use one mode per request.
2. *Check Auth** looks up the token in the `users` Data Table. Unknown tokens receive HTTP 401. For accepted requests, **Insert log** stores the user's email and the full submitted calls payload, including prompts, schemas, and modes.
3. *Prepare Calls** restores the request body after authentication, and **Split Calls** creates one item per call. **Limit to 50** passes the first 50 items. It silently drops any extras, so clients should split larger jobs and check result counts.
4. *Basic LLM Chain** processes the retained items in parallel. **Model Selector** routes `small` to GPT 6 Luna and `big` to Gemini 3.8 Flash. **Structured Output Parser** applies each call's schema. Adjust the chain's batch size and delay to match provider rate limits.
5. *Aggregate Responses** collects the results. **Respond to Webhook** returns ordered `{query, output}` entries, one per processed call. `query` echoes the submitted input; callers should inspect each `output` and handle item-level failures.

## Setup
1. Create a `users` Data Table with string columns `email` and `auth_token`. Create a `logs` Data Table with string columns `user` and `log` in the same n8n project.
2. Add one `users` row per person. For this example, generate a unique 12-character alphanumeric `auth_token` with a cryptographically secure random generator and deliver it privately. Your organization can use its own token system instead.
3. In **Check Auth**, select the imported workflow itself. In **Get team member**, select the `users` table and filter on `auth_token` using `ai_auth_key`. In **Insert log**, select the `logs` table.
4. Configure an OpenRouter credential in **GPT 6 Luna** and **3.8 Flash**. If you replace either model or provider, reconnect the model nodes and verify the `small` and `big` rules in **Model Selector**.
5. Publish the workflow and copy the production URL from **Webhook**. Give each user that URL and their personal token through a verified private channel. They store them as unquoted `EXTERNALIZED_AI_URL=...` and `EXTERNALIZED_AI_API_TOKEN=...` values in a local `.env`.
6. Run one cheap test call, then a small batch. Check the JSON response, the 401 response for a bad token, and the `logs` table. Logs retain submitted prompts and source text; restrict table access and set an appropriate retention policy.

## Requirements
- An n8n instance with Data Tables, LangChain nodes, and a reachable production webhook.
- An OpenRouter account and credential, or replacement model credentials configured in the model nodes.
- A secure way to issue and privately deliver a personal token to each user.

## Customization
- Replace GPT 6 Luna and Gemini 3.8 Flash with other models or providers while keeping the `small` and `big` contract for callers.
- For per-call model selection, measured cost, reasoning effort, or other model types, replace the model branch with direct OpenRouter API calls. This is an extension to the two-model template.
- Replace the `users` table with your own identity store. A separate onboarding workflow could deliver tokens through a private Slack DM after verifying the requester's identity.

## Additional info
`jsonSchema` is a JSON-encoded string, not a nested object. Send one `aiMode` per request. **Limit to 50** silently drops extra calls, and individual calls may fail without a usable `output`. The response echoes inputs under `query`. The `logs` table stores all submitted calls, including those beyond the 50 processed items, with prompts and source text. Restrict access and retention. Model outputs and measured cost are not in the log. OpenRouter docs: https://openrouter.ai/docs/quickstart.

## 🔗 Nodes Used

Webhook, Execute Sub-workflow, Stop and Error, Execute Workflow Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
