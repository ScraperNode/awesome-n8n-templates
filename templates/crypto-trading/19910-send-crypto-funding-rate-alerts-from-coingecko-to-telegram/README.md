# 📈 Send crypto funding rate alerts from CoinGecko to Telegram

> ⚡ **1 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs hourly to fetch perpetual futures funding rates from CoinGecko, filters for liquid markets with extreme rates, groups results by coin, and sends a single formatted alert to a Telegram chat while optionally avoiding repeated alerts for the same coins.

## How it works
1. Runs every hour on a schedule.
2. Requests the full derivatives list from the CoinGecko /derivatives API.
3. Filters to liquid perpetual contracts, removes venues or contracts that appear to report funding rates in abnormal units, and applies optional exchange allow-list filtering.
4. Keeps contracts whose absolute funding rate exceeds the configured threshold and groups matches by coin to compute the rate range across venues and identify the most liquid venue.
5. Optionally suppresses coins that were already alerted in previous scheduled runs and truncates the list to fit Telegram’s message length and top-N limit.
6. Sends one HTML-formatted alert message to Telegram with the selected coins and key venue details.

## Setup
1. Create a Telegram bot with @BotFather and add a Telegram credential with the bot token in the Telegram node.
2. Get your Telegram chat ID (for example by messaging your bot and using @userinfobot) and set it in the alert settings.
3. Review and adjust the threshold, minimum 24h volume, exchange filter list, top-N limit, and the “only new coins” option to match your alerting preferences.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
