# 📈 Send Murban crude futures price alerts with HTTP request and Telegram

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs at multiple set times during market hours, fetches Murban crude futures prices from OilPrice.com, formats a forward-curve report in code, aggregates the output, and sends the resulting HTML-formatted alert to a Telegram chat.

## How it works
1. Runs on a schedule at specified weekdays and times to align with market hours.
2. Fetches Murban crude futures data from OilPrice.com using an HTTP request.
3. Formats the futures data into an HTML Telegram message that includes front-month stats, near-term contracts, forward curve shape, and the full curve.
4. Aggregates the generated message payload into a single output.
5. Sends the formatted crude price report to a specified Telegram chat.

## Setup
1. Add Telegram API credentials and set your target Telegram chat ID in the Telegram node.
2. Review and adjust the schedule trigger times (days/hours/minutes) to match your market hours and timezone needs.
3. Confirm the OilPrice.com URL is accessible from your n8n instance and update the HTTP request URL if your data source changes.
4. Update the code step to parse live HTTP response data (it currently uses a hardcoded contracts array) and to remove/align any placeholder chat_id fields with your Telegram configuration.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
