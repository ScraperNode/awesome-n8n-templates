# 📈 Deploy Gainium DCA bot pairs with Telegram approval and Google Sheets logging

> ⚡ **23 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily, pulls top coins from the Gainium crypto screener, formats them into USDT trading pairs, and asks for Telegram approval before updating and starting a Gainium DCA bot, with optional deployment logging to Google Sheets and Telegram error alerts.

## How it works
1. Runs every day at 08:00 on a schedule.
2. Queries the Gainium screener for coins meeting the configured filters (market cap threshold, Binance listing, positive 24h change) and sorts them by 24h volume.
3. Cleans the screener results and selects the top N unique `SYMBOL_USDT` pairs.
4. Sends the proposed pairs to Telegram with Deploy/Skip buttons and pauses until you respond.
5. If approved, replaces the Gainium DCA bot’s pairs, starts the bot, appends a deployment row to Google Sheets, and sends a Telegram confirmation.
6. If skipped, leaves the bot unchanged and sends a Telegram message confirming the skip.
7. Sends Telegram alerts if the Gainium screener call fails or if any other workflow node errors.

## Setup
1. Install the community node `n8n-nodes-gainium` and add a Gainium API credential with permission to manage your bot.
2. Create a Telegram bot, add a Telegram API credential in n8n, and set your `telegram_chat_id` in the Config values and both Telegram alert nodes.
3. Update the Config values (at minimum `bot_id`, `top_n`, and `paper_trading`) to match your Gainium DCA bot and preferred deployment mode.
4. If you want logging, connect Google Sheets credentials and replace the Google Sheet document ID (and ensure a `Deployments` sheet with matching columns exists).

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
