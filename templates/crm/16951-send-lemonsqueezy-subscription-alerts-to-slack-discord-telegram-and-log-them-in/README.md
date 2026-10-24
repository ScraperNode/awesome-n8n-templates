# 🤝 Send LemonSqueezy subscription alerts to Slack, Discord, Telegram and log them in Google Sheets

> ⚡ **10 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Get an alert in Slack, Discord or Telegram within seconds every time a LemonSqueezy subscription is created, cancelled, expires or a payment fails, plus a running log of every event in Google Sheets.

## How it works
1. Receives a POST webhook from LemonSqueezy with the raw request body.
2. Computes an HMAC signature for the raw body and compares it to LemonSqueezy’s x-signature header, stopping if they don’t match.
3. Parses the webhook JSON and extracts the event name from the headers or payload metadata.
4. Normalizes subscription and payment payloads into flat fields like customer email, product, plan, status, amount, and currency.
5. Appends the normalized event to Google Sheets as an event log.
6. If the event is not subscription_updated, sends an alert message to Slack, Discord, and/or Telegram with the key event details.

## Setup
1. In LemonSqueezy, create a webhook pointing to this workflow’s Production webhook URL and set a signing secret.
2. Configure the Crypto credential/secret used for the HMAC calculation so it matches your LemonSqueezy webhook signing secret exactly.
3. Set up at least one alert destination: connect Slack OAuth and choose a channel, or provide a Discord webhook URL, or add a Telegram bot token and chat ID.
4. (Optional) Connect Google Sheets OAuth, set the document ID and sheet name, and create a header row that matches the logged fields (timestamp, event, customer_email, product, plan, amount, currency, status).

## Requirements
- A LemonSqueezy store (any plan)
- n8n (cloud or self-hosted)
- At least one of: Slack, Discord or Telegram
- A Google account for the log sheet (optional — alerts work without it)

## Customization
- Delete the alert nodes you don't use. The template ships with all three channels
- Change which events alert by editing the "Should this event alert?" IF node

## Additional info
Setup takes about 20 minutes including credentials and a test event. subscription_updated events are logged to the sheet but never alert, so you don't get double pings.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Discord

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
