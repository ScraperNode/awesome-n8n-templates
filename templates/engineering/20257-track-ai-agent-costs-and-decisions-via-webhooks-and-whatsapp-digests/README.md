# ⚒️ Track AI agent costs and decisions via webhooks and WhatsApp digests

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow exposes webhooks to record AI agent events (LLM calls, tool calls, decisions, and errors), calculates estimated cost from token usage, stores a persistent execution ledger in n8n static data, and sends WhatsApp alerts and daily digests with spend and activity summaries.

## How it works
1. Receives a POST webhook request with one event or a batch of agent events to log.
2. Validates each event and calculates cost from input/output token counts and model pricing (or an explicit USD cost plus optional tool cost).
3. Appends the priced events to a persistent ledger in n8n workflow static data, updates per-run summaries, and enforces retention limits for total entries and runs.
4. Responds to the webhook caller with a JSON summary including how many events were recorded and the updated run totals.
5. Sends a WhatsApp message if a run exceeds the configured per-run budget and no alert has been sent for that run yet.
6. Receives a GET webhook request to generate a JSON ledger report filtered by run ID, agent, time window, and limit.
7. Runs daily on a schedule to build a 24-hour cost/activity digest and sends it via WhatsApp.

## Setup
1. Add WhatsApp Business credentials for the WhatsApp nodes and set your WhatsApp phone number ID and recipient phone number.
2. Configure the ledger settings (per-run budget, token pricing per 1M tokens, and retention limits) in the workflow’s configuration values.
3. Activate the workflow so the ledger persists in workflow static data, then copy the webhook URLs and configure your agents/supervisor to POST events to the event endpoint and query reports from the report endpoint.

## 🔗 Nodes Used

Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
