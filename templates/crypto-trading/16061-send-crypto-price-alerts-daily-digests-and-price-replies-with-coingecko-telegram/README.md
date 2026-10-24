# 📈 Send crypto price alerts, daily digests and /price replies with CoinGecko, Telegram and Sheets

> ⚡ **1,093 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow tracks a configurable crypto watchlist using the CoinGecko API, sends Telegram alerts when price, % change, or volume-spike conditions are met (with optional RSI filtering), optionally logs triggered alerts to Google Sheets, and also provides a daily Telegram digest plus a /price command bot.

## How it works
1. Runs every hour on a schedule, loads your watchlist, and loops through each configured asset.
2. Fetches current price, 24h change, 24h volume, and market cap from the CoinGecko API and normalizes the response (including optional portfolio value from holdings).
3. Loads per-asset saved state from n8n static data and, on the first run, stores a baseline price without sending alerts.
4. For subsequent runs, optionally pulls 15 days of daily prices from CoinGecko to calculate a 14-period RSI and then evaluates alert conditions (price threshold, % move since last check, and 24h volume spike) with RSI as a suppression filter.
5. If an alert should fire and the per-asset cooldown has passed, formats and sends a Markdown Telegram alert and optionally appends an alert row to Google Sheets.
6. Updates the saved per-asset state (price, last alert time, and rolling 7-period average volume) so future checks can enforce cooldowns and detect volume spikes.
7. Separately, runs daily at 8:00 UTC to fetch bulk prices from CoinGecko and the Fear & Greed Index from alternative.me, then sends a Telegram daily digest.
8. Separately, listens for incoming Telegram messages and replies to /price <coin> by querying CoinGecko and sending a formatted price message, or returns a help message for unknown commands.

## Setup
1. Create a Telegram bot with @BotFather, add your Telegram bot token as Telegram credentials in n8n, and get your chat ID to use for alerts and the daily digest.
2. Update the TELEGRAM_CHAT_ID and watchlist/threshold settings in the Watchlist Config node, and keep the Daily Digest Config watchlist in sync.
3. (Optional) Create a Google Sheet with the required header columns, add a Google Sheets OAuth2 credential, and paste your sheet ID into GOOGLE_SHEET_ID to enable alert logging.
4. Activate the workflow so n8n can persist static data for cooldown/state tracking and register the Telegram trigger webhook for the command bot.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
