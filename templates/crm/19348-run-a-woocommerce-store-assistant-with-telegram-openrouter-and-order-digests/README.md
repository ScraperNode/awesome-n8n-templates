# 🤝 Run a WooCommerce store assistant with Telegram, OpenRouter and order digests

> ⚡ **67 views** · 🤝 [CRM & Sales Operations](../)

## Description

Run your WooCommerce store from Telegram. The owner chats with a bot that can pull orders, edit products, log the order archive to Google Sheets, and email customers, with a daily order digest landing in Telegram and the inbox.

*Last updated: September 2026.*

## Quick Overview
This workflow lets a store owner chat with a Telegram bot to manage a WooCommerce ebook store using OpenRouter AI, while logging orders to Google Sheets and sending daily order digests and alerts via Telegram and email.

## How it works
1. Receives a Telegram message from the store owner.
2. Looks up the sender’s Telegram chat ID in a Google Sheets “Allowed Users” allowlist and refuses access if it is not approved.
3. For approved chats, sends the message to an OpenRouter-powered AI agent with per-chat memory.
4. The agent can fetch WooCommerce orders, browse and update WooCommerce products, append/update an order archive in Google Sheets, and send customer emails via Gmail based on the owner’s request.
5. Sends the agent’s reply back to the owner in Telegram and alerts an admin in Telegram if the agent returns no response.
6. Runs daily at 09:00 to fetch WooCommerce orders, build a 24-hour digest (count, revenue, and a short list of latest orders), and send it to an admin via Telegram and email.
7. Logs each digest run (status, revenue, run date, and order count) to a Google Sheets “Digest Log” sheet and alerts the admin in Telegram if the digest step fails.

## Setup
1. Connect credentials for Telegram, WooCommerce, Google Sheets, OpenRouter, and Gmail (or adjust the email-sending node to your SMTP setup).
2. Create a Google Sheets spreadsheet with an “Allowed Users” sheet containing a chat_id column and a “Digest Log” sheet, and point the workflow to it.
3. Set the environment variables WOOCOMMERCE_SHEET_URL, ADMIN_TELEGRAM_CHAT_ID, and ADMIN_EMAIL.
4. Add your Telegram chat ID to the “Allowed Users” sheet before testing, then message the bot and enable the workflow to start the daily 09:00 digest.

### Quick Answers
**Who is allowed to use the bot?**
Only chat IDs listed in the "Allowed Users" sheet can talk to it; any other chat is refused.

**What can the agent actually do?**
It fetches WooCommerce orders, browses and updates products, appends or updates the order archive in Google Sheets, and sends customer emails through Gmail.

**When does the daily digest arrive?**
Every day at 09:00, with a 24-hour count, revenue, and the latest orders, sent to the admin on Telegram and by email.

**What happens when something fails?**
The admin gets a Telegram alert if the agent returns no response or if the digest step fails.

## Additional info
Built with [n8n](https://n8n.partnerlinks.io/creator-khmuhtadin). Need an assessment on your business? Feel free to reach out at [https://khmuhtadin.com/consultation/](https://khmuhtadin.com/consultation/)

## 🔗 Nodes Used

Send Email, Google Sheets, Telegram, Telegram Trigger, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
