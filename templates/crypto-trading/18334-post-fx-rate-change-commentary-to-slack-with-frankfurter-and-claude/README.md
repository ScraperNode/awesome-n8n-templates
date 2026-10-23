# 📈 Post FX rate change commentary to Slack with Frankfurter and Claude

> ⚡ **6 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
On a schedule, this workflow checks an exchange rate via the free Frankfurter API, compares it to the last checked rate, and — if it moved beyond a threshold you set — asks Claude to write a short factual note and posts it to Slack.

## How it works
1. On a schedule, fetches the current rate for a currency pair you configure from the free Frankfurter API (ECB reference rates, no API key required).
2. Compares it to the last checked rate (remembered via workflow static data) and computes the percent change.
3. If the move crosses your configured threshold (or this is the first check), asks Claude to write a short, factual note about the change — explicitly instructed to avoid predictions or investment advice.
4. Posts the commentary to Slack via an Incoming Webhook, verifying delivery by checking the actual response body rather than assuming success.

## Setup
1.  Add an Anthropic API key as a credential in n8n and assign it in the "Call Claude (Anthropic) API" node.
2. Open the "Set: config" node and set your currency pair (baseCurrency / targetCurrency), your move threshold in percent, and your Slack Incoming Webhook URL.
3. Adjust the Schedule Trigger to whatever check frequency you want (defaults to every 6 hours), then activate the workflow.

## Requirements
- An n8n instance (Cloud or self-hosted)
- An Anthropic API key, added as an "Anthropic" credential in n8n
- A Slack Incoming Webhook URL (no Slack app or OAuth required)

## Customization
- Lower or raise thresholdPercent in the "Set: config" node to control how sensitive the alert is.
- Swap the Slack delivery step for email, Discord, or a database write.
- Track multiple currency pairs by duplicating the fetch/compare/notify chain with a different targetCurrency.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
