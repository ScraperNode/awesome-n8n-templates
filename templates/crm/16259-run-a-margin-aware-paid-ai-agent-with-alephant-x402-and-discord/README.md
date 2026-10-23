# 🤝 Run a margin-aware paid AI agent with Alephant x402 and Discord

> ⚡ **24 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow exposes a paid webhook endpoint, verifies budget via Alephant usage analytics, routes the request through an OpenAI-based agent to pick the most cost-effective model, runs the chosen model through Alephant for cost tracking, then returns results with per-call margin reporting to Discord and optional throttling.

## How it works
1. Receives a POST request on a webhook endpoint that is intended to be paid per call over x402.
2. Checks current budget status using Alephant Usage analytics and returns a 402-style JSON error response if the workspace budget is exceeded.
3. Sends the buyer request and budget context to an OpenAI-based routing agent (via Alephant) that calls Alephant UsageSummary and outputs strict JSON selecting a model tier and refined prompt.
4. Runs the refined prompt on the chosen model using Alephant AI to capture per-call usage and cost metadata.
5. Calculates per-call profit and margin percentage from fixed revenue, token usage, and an Alephant fee estimate.
6. Responds to the webhook caller with the model result plus net margin metrics, posts the margin line to Discord, and calls a policy write-back HTTP endpoint to throttle if margin drops below 20%.

## Setup
1. Install the Alephant community nodes and create an Alephant Virtual Key credential in n8n.
2. Create an OpenAI credential that uses Base URL https://ai.alephant.io/v1 with your Alephant virtual key as the API key, and select it for the agent’s language model.
3. Configure a Discord Webhook credential and set it on the Discord node used for the margin feed.
4. Update the Per-Call P&L constants (price per call, token rate per 1k, external spend, and fee percentage) to match your real unit economics.
5. Replace https://ai.alephant.io/REPLACE_WITH_POLICY_ENDPOINT with your real policy/throttling endpoint and set the ALEPHANT_API_KEY environment variable used for the Authorization header.
6. Copy the webhook URL for the paid endpoint and configure your x402 buyer/agent to call this endpoint with the expected request body fields (for example, topic and runId).

## Requirements
- Alephant account with a Virtual Key, free tier works (https://alephant.io)
- Alephant community nodes installed: Cost Control, AI Analytics, AI Analytics Tool
- OpenAI credential with Base URL set to https://ai.alephant.io/v1 and your Alephant virtual key as the API key
- A Discord channel webhook for the margin feed
- Optional: an Alephant policy endpoint if you want the auto-throttle write-back

## Customization
- Change the service by editing the agent system prompt (research summary, wallet-risk scoring, data enrichment, etc.)
- Adjust the model tiers and routing logic the agent chooses between (premium vs economy)
- Set your real price, token rate, and fee in the Per-Call P&L node
- Tune the margin threshold that triggers throttling (default 20%) in the Margin Thin node
- Swap Discord for Slack or email, or add a Google Sheets row per call
- Register the webhook as a paid x402 endpoint in Alephant to charge per request in USDC

## Additional info
Full information: https://developers.alephant.io/docs/overview/showcase/n8n-workflow

This workflow turns an n8n webhook into a paid, self-funding AI endpoint. A buyer pays per request in USDC over x402; Alephant verifies and settles the payment before the request reaches n8n, so revenue is booked before any work runs. A budget guard gates the call, then an AI agent reads recent spend through the Alephant UsageSummary tool and picks the cheapest model that still does the job. The work runs through Alephant for full cost tracking, and a P&L step calculates net margin (revenue minus token spend minus fee) on every single call. Healthy calls just respond and log; calls that drop below the margin threshold trigger a write-back to throttle, so a bad call never quietly loses money.
The agent's own reasoning is also routed through Alephant via the OpenAI Base URL override, so the thing watching cost appears in its own dashboard. Notes: the Alephant analytics tool is read-only, so enforcement happens through the HTTP policy node, not the tool. After you run the Budget Guard node once, map the real budget field into the Budget OK node, since field names depend on your workspace response. Hard budget caps still live in the Alephant Budget Circuit Breaker; this workflow tunes within those rails.

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
