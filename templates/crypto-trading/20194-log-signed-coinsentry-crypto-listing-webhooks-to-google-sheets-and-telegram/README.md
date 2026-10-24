# 📈 Log signed coinsentry crypto listing webhooks to Google Sheets and Telegram

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow receives signed coinsentry webhook alerts for crypto exchange listings and delistings, verifies the HMAC signature, then logs each valid event to Google Sheets and posts a formatted notification to Telegram.

## How it works
1. Receives a POST webhook from coinsentry containing a listing or delisting event.
2. Recomputes an HMAC-SHA256 signature from the raw request body and compares it to the `x-coinsentry-signature` header to reject unsigned or tampered requests.
3. Filters the payload to only allow `listing_announced`, `listing_live`, or `delisting` events.
4. Extracts key fields (timestamp, event, exchange, symbol, pairs, trading start time, and source URL) and formats a headline for notifications.
5. Appends the event as a new row in a selected Google Sheets worksheet.
6. Sends a message to a configured Telegram chat with the headline and any available pair, start time, and source link details.

## Setup
1. In coinsentry, create a webhook channel pointing to this workflow’s production webhook URL and set a signing secret.
2. Add an n8n Crypto credential containing the same HMAC secret used in coinsentry.
3. Connect a Google Sheets account and select the target spreadsheet and sheet in the Google Sheets append step.
4. Create the sheet columns to match the workflow mapping (at least `detected_at`, `event`, `exchange`, `symbol`, `pairs`, `trading_starts_at`, and `source`).
5. Add Telegram credentials and set the target `chatId` for where the alerts should be posted.

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
