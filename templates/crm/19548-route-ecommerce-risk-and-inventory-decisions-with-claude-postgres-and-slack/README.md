# 🤝 Route ecommerce risk and inventory decisions with Claude, Postgres, and Slack

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives e-commerce order-risk and inventory/pricing events via a webhook, fetches supporting context from your commerce APIs, asks Anthropic Claude to recommend an action with confidence, optionally auto-executes low-risk actions, logs every decision to Postgres, and notifies the appropriate Slack channel.

## How it works
1. Receives a POST webhook event (or a manual test event) and applies shared configuration like API base URL, lookback window, thresholds, and Slack channel IDs.
2. Normalizes the incoming payload, classifies it as an order-risk or inventory/pricing event, and routes it to the matching evidence-gathering path.
3. Fetches domain-specific evidence from your commerce APIs (orders/customer/fraud signals for order risk, or inventory/pricing history/market data for inventory and pricing) and combines the results.
4. Sends the event and evidence to Anthropic Claude and parses the returned JSON decision (recommended action, confidence, risk level, reasoning, Slack message, and an execution payload).
5. If confidence meets the threshold and risk is not high, calls your commerce API to auto-execute the recommended action; otherwise it skips execution.
6. Writes a full audit record of the event, evidence snapshot, decision, and execution status to Postgres and posts a message to Slack using either an escalation channel or a low-noise log channel.

## Setup
1. Create a webhook source in your commerce/OMS/fraud/inventory system and configure it to POST events to this workflow’s webhook URL.
2. Add HTTP Header Auth credentials for both your commerce API requests and the Anthropic API (including the required `anthropic-version` header) and update the commerce API base URL and model name in the configuration step.
3. Add Postgres credentials and ensure the target audit table (default `control_tower_decisions`) exists with columns matching the workflow’s insert fields.
4. Add Slack credentials with permission to post messages, then set the low-noise and escalation channel IDs in the configuration step.
5. Review and tune the lookback window and the auto-execute confidence threshold to match your risk tolerance and the actions your commerce API supports.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
