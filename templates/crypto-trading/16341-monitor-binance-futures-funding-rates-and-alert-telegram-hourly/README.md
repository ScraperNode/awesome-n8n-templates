# 📈 Monitor Binance futures funding rates and alert Telegram hourly

> ⚡ **75 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs hourly to scan Binance Futures USDT perpetual contracts, checks each symbol’s funding rate against warning and critical thresholds, and sends a formatted alert message to Telegram when any high funding rates are detected.

## How it works
1. Runs every hour on a schedule.
2. Fetches all 24-hour ticker stats from the Binance Futures API.
3. Filters for USDT perpetual pairs, excludes stablecoin and fiat-like symbols, sorts by 24h quote volume, and selects the top 20 tickers.
4. For each selected symbol, calls Binance’s premiumIndex endpoint to retrieve the current funding rate and next funding time.
5. Classifies each funding rate as normal, warning, or critical based on the configured thresholds and accumulates the results for the run.
6. Builds an HTML-formatted Telegram message summarizing warning/critical symbols and sends it to your Telegram chat only when alerts are present.

## Setup
1. Create a Telegram bot, add the Telegram credentials in n8n, and set your target chat ID in the Telegram node.
2. Adjust the schedule interval in the schedule trigger if you don’t want hourly checks.
3. (Optional) Change the top-N selection and the warning/critical funding rate thresholds in the code steps to match your monitoring preferences.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
