# ⚒️ Route LLM tasks to the cheapest capable Claude models with Anthropic

> ⚡ **18 views** · ⚒️ [Engineering](../)

## Description

## Quick Overview
This workflow receives an LLM task via webhook (or manual run), uses Anthropic Claude to classify its needs, routes the request to the cheapest capable Claude model, and optionally escalates to higher tiers based on a quality score, returning the final answer with cost and routing details.

## How it works
1. Receives a POST request on the /webhook/llm-router endpoint (or runs manually) and normalizes inputs like task, context, budget, and minimum quality settings.
2. Rejects requests without a non-empty task and returns a 400 validation error to the caller.
3. Uses Anthropic Claude (Haiku) to classify the task’s complexity, risk, and requirements (for example code, reasoning, web search, long context), falling back to a built-in heuristic if classification fails.
4. Selects the cheapest model from a configurable Anthropic Claude catalog that meets the required tier, context window, web search capability, and optional max-cost constraints, and builds an escalation chain.
5. Executes the task with the current selected Claude model and records tokens, estimated cost, and any execution errors.
6. If judging is enabled, uses Anthropic Claude (Haiku) to score the response quality and escalates to the next model in the chain with reviewer feedback when the score is below the threshold.
7. Returns a JSON response to the webhook caller containing the final answer, routing trace, and cost breakdown (including savings vs a premium baseline model), and optionally posts call events to an external execution-ledger webhook.

## Setup
1. Create an HTTP Header Auth credential for Anthropic using header x-api-key, and select it for the Classify Task, Execute Model, and Judge Quality HTTP request steps.
2. Review and update the router configuration values (model catalog IDs/tiers/pricing, premium baseline model, quality threshold, max attempts, and Anthropic API URL) to match your current Anthropic plan and preferred routing behavior.
3. Send tasks to the webhook by copying the production URL for /webhook/llm-router into your client and POSTing JSON with at least a task field (optionally context, maxCostUsd, minTier, forceModel, minQualityScore, and maxAttempts).
4. (Optional) Deploy an execution-ledger endpoint and set ledgerUrl so the workflow can POST routing decisions and token/cost events to your ledger webhook.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
