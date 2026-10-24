# 🤝 Meter AI token usage and prepaid Lago credits with webhook receipts

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives AI token usage via a webhook, estimates the prepaid cost and projected credit balance in Lago, records the usage as a Lago event, and returns a receipt that warns when credits are at or below a configurable threshold.

## How it works
1. Receives a POST webhook request containing subscription identifiers, token counts, and metering details.
2. Validates required fields, normalizes data (including an optional timestamp), and returns a 400 JSON error response if the request is invalid.
3. Uses Lago to estimate pay-in-advance fees for the provided metric and sums the returned fee amounts.
4. Fetches the customer’s Lago prepaid wallet and converts the estimated fee into credits to calculate the projected post-usage credit balance.
5. Sends the usage event to Lago with the provided transaction ID for idempotency and builds a JSON receipt including estimated cost and projected balance.
6. Returns an HTTP 202 JSON receipt that either flags low credit or confirms healthy credit status based on the configured threshold.

## Setup
1. Add Lago API credentials for the Lago community node.
2. In Lago, create a billable metric (for example, using Sum aggregation on a `units` property) and add it to an active plan as a pay-in-advance charge so fee estimation works.
3. Ensure each customer has an active Lago subscription and prepaid wallet, and send the correct `external_subscription_id` and `wallet_id` values in requests.
4. Copy the production webhook URL from n8n and configure your AI app or service to POST usage payloads to the `lago-ai-usage` endpoint (including a unique `transaction_id` and the desired `low_credit_threshold`).

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
