# 💬 Confirm COD orders and recover carts with Telegram, Google Sheets, OpenAI and Slack

> ⚡ **32 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow handles COD order confirmation and abandoned-cart recovery by combining webhooks, Google Sheets logging, OpenAI message generation, and Telegram messaging with inline buttons, plus Slack alerts for execution errors.

## How it works
1. Receives a new COD order via a webhook, normalizes the payload, appends it to an `Orders` Google Sheets tab, and sends the customer a Telegram message with Confirm/Cancel buttons.
2. Listens for Telegram button callbacks and routes the response to either confirm or cancel the order.
3. On confirmation, updates the matching order in Google Sheets and sends a Telegram thank-you message to the customer.
4. On cancellation, updates the order in Google Sheets, acknowledges the cancellation in Telegram, and notifies an admin via Telegram.
5. Runs every 15 minutes, reads orders from Google Sheets, calculates how long each order has been pending, and uses OpenAI (gpt-4o-mini) to generate and send timed Telegram nudges at 30 minutes, 1 hour, and 2 hours.
6. Flags orders with no response after 2 hours as RTO risk, alerts the admin in Telegram, and updates the RTO flag in Google Sheets.
7. Receives an abandoned-cart event via a webhook, logs it to an `Abandoned_Carts` Google Sheets tab, waits 30 minutes, checks Google Sheets for an order, and if none is found sends an OpenAI-written discount message over Telegram and marks the cart as contacted.
8. Posts a Slack message when the workflow encounters an execution error.

## Setup
1. Create and connect credentials for Telegram Bot API, Google Sheets OAuth2, OpenAI, and Slack OAuth2.
2. Create a Google Sheets document with `Orders` and `Abandoned_Carts` tabs and ensure the columns match the workflow’s expected fields.
3. Replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes and set `YOUR_ADMIN_TELEGRAM_CHAT_ID` in the admin notification nodes.
4. Update the Slack channel ID (`YOUR_SLACK_CHANNEL_ID`) used for error alerts.
5. Copy the two webhook URLs (`/codos/new-order` and `/codos/cart-abandoned`) and configure them in your store/checkout system to send POST requests with the required fields (including `telegram_chat_id`).

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
