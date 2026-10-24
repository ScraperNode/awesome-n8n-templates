# 🤝 Run budget-capped client AI agents with OpenAI and n8n data tables

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Stop an AI agent before it blows a client's budget: each client has a monthly cap, a pause switch and instructions in a Data table, and a run starts only if the client can afford it. Made by Keelstamp (keelstamp.com): hard cost caps for agencies running AI automations.

## How it works
1. Your app POSTs client_id and prompt to the webhook. Unknown or paused clients get 403, and clients without budget left get 429.
2. A worst-case reservation is written as the run's own ledger row. The ledger is read again, and the run backs off if parallel runs used the budget first.
3. The AI Agent runs with Max Iterations and a token limit from Settings.
4. The prompt and completion tokens that n8n recorded for each model call are read through the n8n API and booked. The answer is returned with a usage summary.
5. You get an email at your alert threshold and when a client can't afford another run.
6. Hourly, stuck reservations expire. Monthly, you get totals per client and old rows are deleted. A GET endpoint returns usage per client.
7. If a Data table can't be read or written, the run is refused with 503.

## Setup
1. Create the two Data tables listed in the sticky note: ai_clients and ai_usage_ledger.
2. Add credentials: OpenAI on Chat model, n8n API on Read token usage, Header Auth on both webhooks and SMTP on the email nodes.
3. Fill in the three Settings nodes and keep "Save execution progress" on.
4. Add a client row to ai_clients.
5. Publish the workflow and run the curl example in the "Try it" note.

## Requirements
- n8n with Data tables (tested on 2.41.6)
- An OpenAI API key, or another provider with an OpenAI-compatible Chat Completions endpoint
- An n8n API key (the n8n API isn't available during the free trial)
- SMTP credentials

## Customization
- Set the two cost rates to count in your currency instead of tokens.
- Swap the Calculator for your own tools, or the email nodes for Slack or Telegram.

## Additional info
The reservation is an estimate, and Data tables have no atomic increment. The "Limits" note explains what that means for parallel runs and high volume. Without the n8n API credential, each run is charged its full reservation. We're building Keelstamp (https://keelstamp.com), which isn't released yet; the Founding Partner pre-order is open at https://keelstamp.com/founding. This template doesn't depend on it. Questions: contact@keelstamp.com

Prepared with AI assistance. Editorial responsibility: PowerQuant ApS.

## 🔗 Nodes Used

Send Email, Webhook, n8n, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
