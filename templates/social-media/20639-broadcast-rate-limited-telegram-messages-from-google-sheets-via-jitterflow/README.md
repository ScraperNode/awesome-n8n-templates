# 📱 Broadcast rate-limited Telegram messages from Google Sheets via Jitterflow

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow manages Telegram bot subscribers in Google Sheets and broadcasts messages from a sheet using Jitterflow to rate-limit delivery with retries and deduplication, plus a daily cleanup that marks blocked or missing chats based on Jitterflow’s dead-letter queue.

## How it works
1. Triggers when someone sends a message to your Telegram bot and extracts the chat details and command.
2. Writes the chat to the Google Sheets “Subscribers” tab as Subscribed for /start or updates the row to Unsubscribed for /stop, then replies in Telegram.
3. Runs every 15 minutes, reads the Google Sheets “Broadcasts” tab, and selects the next row with Status set to Ready (or Sending).
4. Validates the broadcast message length against Telegram’s 1–4,096 character limit and marks the row as Needs edit or updates it to Sending with a broadcast ID.
5. Reads Subscribed rows from the “Subscribers” tab and queues one Telegram sendMessage payload per subscriber in Jitterflow using an idempotency key to prevent duplicate deliveries.
6. Marks the broadcast row as Sent in Google Sheets with the queued subscriber count (including how many were already queued by a prior run).
7. Runs daily at 8:00, lists unresolved Jitterflow DLQ entries, marks matching subscribers as Blocked or Chat not found in Google Sheets, and resolves those DLQ entries.

## Setup
1. Create a Telegram bot token with @BotFather and add it as a Telegram credential in n8n.
2. Create a Jitterflow endpoint targeting `https://api.telegram.org/bot<token>/sendMessage` with a safe pace (for example 5 requests/second) and set up a Jitterflow API credential plus the endpoint key in the workflow.
3. Create a Google Sheets file with “Subscribers” and “Broadcasts” tabs and required columns, then add a Google Sheets OAuth credential and replace `YOUR_GOOGLE_SHEET_ID` on all Google Sheets steps.
4. Select the Telegram credential on the Telegram trigger and all Telegram reply steps before activating the workflow.

## Requirements
- A Telegram bot token from @BotFather
A Jitterflow account and API key (the free Developer plan works)
The n8n-nodes-jitterflow community node: verified by n8n, so it's available on n8n Cloud; on self-hosted n8n, install it from Settings → Community Nodes
A Google account for Google Sheets

## Customization
- Edit the bot's /start, /stop and help replies in the Bot replies node
Change how often broadcasts go out, or when the morning cleanup runs, on the two schedule triggers
Add parse_mode: 'HTML' to the Jitterflow payload to format broadcast messages

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
