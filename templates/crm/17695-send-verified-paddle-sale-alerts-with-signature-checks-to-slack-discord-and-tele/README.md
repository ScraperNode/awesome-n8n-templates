# 🤝 Send verified Paddle sale alerts with signature checks to Slack, Discord and Telegram

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Paddle webhook events, verifies the Paddle-Signature to block forged requests, and for each completed sale formats a net-earnings alert message and sends it to Slack, Discord, and/or Telegram via simple webhooks.

## How it works
1. Receives a POST webhook from Paddle at the configured endpoint with the raw request body enabled.
2. Verifies the request is authentic by validating the `Paddle-Signature` header using HMAC-SHA256 over `ts:rawBody` with your Paddle notification secret.
3. Checks that the event type is `transaction.completed` and ignores other Paddle events.
4. Extracts transaction totals (total, fee, earnings, currency) and formats a readable alert message, handling zero-decimal currencies.
5. Sends the message to Slack via an incoming webhook.
6. Sends the same message to Discord via a channel webhook.
7. Sends the same message to Telegram via the Bot API `sendMessage` endpoint.

## Setup
1. In Paddle, create or edit a Notifications destination, subscribe it to `transaction.completed`, and copy the n8n Production webhook URL into Paddle’s destination URL.
2. Paste your Paddle notification webhook secret (from Paddle Developer tools → Notifications) into the signature verification code.
3. Add your Slack incoming webhook URL and/or Discord webhook URL in the corresponding HTTP requests, and remove any alert branches you don’t use.
4. Create a Telegram bot with BotFather, then set the bot token in the Telegram request URL and the target `chat_id` in the request body.

## Requirements
- A Paddle account (sandbox or live) with access to Developer tools → Notifications, and at least one destination: a Slack incoming webhook, a Discord channel webhook, or a Telegram bot (token + chat id). Everything runs over plain HTTP Request nodes — no OAuth, no community nodes, no n8n credentials to configure.

## Customization
- Alert on more events: subscribe the Paddle destination to transaction.refunded or subscription.canceled too and duplicate the If branch. Edit the message format in the Build Alert Message node — all of Paddle's transaction fields are available there. Delete the channel branches you don't use.

## Additional info
Unlike most webhook templates, this one verifies Paddle's HMAC signature (SHA-256 over ts:rawBody, timing-safe compare) and rejects unsigned requests — nobody who finds your webhook URL can spam you with fake sales. Amounts are shown as what you actually keep after Paddle's fee, and zero-decimal currencies (JPY, KRW, VND, ISK) are formatted correctly.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
