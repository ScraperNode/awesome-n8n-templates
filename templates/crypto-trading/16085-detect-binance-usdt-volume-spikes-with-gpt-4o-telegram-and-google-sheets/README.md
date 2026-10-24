# 📈 Detect Binance USDT volume spikes with GPT-4o, Telegram, and Google Sheets

> ⚡ **279 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs hourly to scan Binance USDT trading pairs for unusual 1-hour volume spikes, enriches spikes with order book metrics and GPT-4o analysis, then sends a ranked Telegram alert and logs the top results to Google Sheets.

## How it works
1. Runs every hour and pulls 24-hour ticker statistics from the Binance public API.
2. Filters for high-liquidity, non-stablecoin USDT pairs and iterates through each symbol.
3. Fetches the last 25 one-hour candles per symbol from Binance and calculates volume/trade spike ratios, taker buy/sell pressure, and basic price-action context with cooldown-based deduplication.
4. For symbols that exceed the spike thresholds, fetches Binance order book depth and computes bid/ask wall pressure and spread metrics.
5. Sends the spike, price-action, market-context (BTC/ETH), and order-book data to OpenAI (GPT-4o) to return a structured JSON classification, severity, and suggested action.
6. Collects all analyzed spikes, ranks them, sends the top alerts to Telegram as a formatted report, and appends the top entries to Google Sheets for tracking.

## Setup
1. Add an OpenAI API credential and confirm the model selection (gpt-4o) in the OpenAI analysis step.
2. Add a Telegram bot credential and replace YOUR_TELEGRAM_CHAT_ID with the target chat or channel ID.
3. Add a Google Sheets OAuth2 credential, create a sheet with headers matching the logged fields, and replace YOUR_GOOGLE_SHEET_ID and the target sheet tab as needed.
4. Review and adjust the filtering and spike thresholds (for example MIN_VOL and MIN_CHANGE, plus the volume-ratio cutoffs) to fit the markets you want to monitor.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
