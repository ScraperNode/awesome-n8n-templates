# 📈 Monitor Binance futures open interest and send Telegram alerts

> ⚡ **7 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow runs hourly to scan top-volume Binance USDT perpetual futures, calculate 1-hour open interest (OI) change percentages, and send a tiered Telegram alert (warning/critical) when OI moves exceed configured thresholds.

## How it works
1. Runs every hour on a schedule trigger.
2. Calls the Binance Futures `/fapi/v1/ticker/24hr` endpoint, filters to USDT perpetual pairs, excludes stablecoin/fiat pairs, sorts by 24h quote volume, and selects the top N symbols.
3. For each selected symbol, requests the last two 1-hour data points from Binance Futures `/futures/data/openInterestHist`.
4. Calculates the 1-hour OI percentage change per symbol, classifies it as normal/warning/critical based on thresholds, and stores the results for this run.
5. Builds an HTML-formatted Telegram message that groups and sorts warning and critical symbols by absolute OI change.
6. Sends the Telegram alert only when at least one warning or critical condition is present.

## Setup
1. Configure the schedule interval on the Schedule Trigger node.
2. Add Telegram bot credentials, set the target chat ID, and ensure the Telegram node uses HTML parse mode if you keep the default formatting.
3. (Optional) Adjust the TOP_N value, blacklist/fiat filters, and the warning/critical OI thresholds in the code steps to match your monitoring preferences.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
