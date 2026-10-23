# ⚒️ Debug AI agent tool calls with OpenRouter, calculator and webhook

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow gives a support agent a Calculator tool and a simulated order lookup tool, so you can compare a correct calculation, a found order and an empty lookup that still reports success. It is Exercise 4 from the n8n Production AI Playbook on Audit & Trace.

## How it works
1. Receives a POST webhook request with a natural-language query.
2. Support Agent, an AI Agent using an OpenRouter chat model, decides whether to call a tool.
3. Calculator Tool handles arithmetic questions such as 47 times 89.
4. Order Lookup Tool returns a simulated order record, or an empty string when the order does not exist.
5. Respond returns the agent's answer to the webhook caller.

## Setup
1. Add an OpenRouter API credential to OpenRouter - Agent. If you change models, choose one that supports tool calling.
2. Optionally enable OpenTelemetry tracing in Settings > OpenTelemetry to see a span for each tool call.
3. Select Execute workflow and POST {"query":"What is 47 times 89?"} to the Webhook Test URL.
4. Repeat with {"query":"How much was order ORD-1001? Use the order lookup."} and {"query":"How much was order ORD-8888? Tell the customer the amount."}.
5. Compare the tool results in the agent logs with each reply to find the empty lookup.

## Requirements
- n8n Cloud or a self-hosted n8n instance
- An OpenRouter API key for a model with tool-calling support

## Customization
- Have Order Lookup Tool return a clear message such as "No order found" instead of an empty string, so the agent can tell the customer the order is missing.

## Additional info
Order data is synthetic.

## 🔗 Nodes Used

Webhook, AI Agent, Calculator, Code Tool, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
