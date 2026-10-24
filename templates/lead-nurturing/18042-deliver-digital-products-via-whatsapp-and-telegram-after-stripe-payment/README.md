# 💬 Deliver digital products via WhatsApp and Telegram after Stripe payment

> ⚡ **71 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow captures customer messages from WhatsApp or Telegram, logs the lead in Google Sheets, and replies with a Stripe Payment Link. After Stripe confirms a successful Checkout payment, it looks up the customer in Google Sheets and sends a Google Drive PDF download link back on the same channel.

## How it works
1. Receives incoming messages via webhooks from WhatsApp Business Cloud API and Telegram.
2. Extracts the sender identifier and message text, then appends the lead details (channel, chat ID/phone, message, timestamp) to Google Sheets.
3. Sends the customer a Stripe Payment Link back on WhatsApp or Telegram and immediately responds to the webhook request.
4. Receives Stripe webhook events for Checkout completion and extracts the payer’s phone number and payment details.
5. Looks up the payer’s phone number in Google Sheets to find the original lead and determine whether they came from Telegram or WhatsApp.
6. Sends a Google Drive direct-download PDF link to the customer on the matching channel, or sends a fallback WhatsApp message if no match is found.

## Setup
1. Create a Stripe Payment Link and configure a Stripe webhook for `checkout.session.completed` to point to this workflow’s Stripe webhook URL.
2. Connect your WhatsApp Business Cloud API access token (HTTP header auth) and set your WhatsApp Phone Number ID in the Graph API request URLs.
3. Create a Telegram bot with @BotFather and add a Telegram credential in n8n, then configure Telegram to send updates to the workflow’s Telegram webhook URL.
4. Connect Google Sheets OAuth credentials and replace `YOUR_GOOGLE_SHEET_ID`, ensuring the sheet has columns for phone, channel, chat_id, timestamp, message, first_name, and status.
5. Upload your PDF to Google Drive and replace `YOUR_PDF_FILE_ID`, and update the message text placeholders (product name, price, contact email) in the WhatsApp and Telegram messages.

## Requirements
- An n8n instance, a Stripe account, WhatsApp Business API and/or a Telegram bot, and a Google account.

## Customization
- Swap in your own product file and price. Add more channels by duplicating the WhatsApp/Telegram branches for other messaging platforms n8n supports.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
