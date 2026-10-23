# 📈 Send a daily crypto fear and greed market report to Telegram with CoinGecko

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every morning, pulls the Crypto Fear & Greed Index from alternative.me plus your selected coin prices from CoinGecko, and sends a concise market mood report to Telegram with optional “only extremes” alerting.

## How it works
1. Runs daily at 08:00 on a schedule.
2. Loads configuration values such as CoinGecko coin IDs, fiat currency, Telegram chat ID, and alert thresholds.
3. Fetches the last 8 days of the Crypto Fear & Greed Index from alternative.me.
4. Fetches current prices and 24-hour change for the configured coins from the CoinGecko Simple Price API.
5. Builds a Telegram-ready message with today’s index, trend vs. yesterday and a week ago, an 8-day mini chart, and coin price lines, and skips sending entirely when “only extremes” is enabled and no alert condition is met.
6. Sends the formatted report to your Telegram chat using a Telegram bot.

## Setup
1. Create a Telegram bot with @BotFather and add its bot token as Telegram credentials in n8n.
2. Get your target Telegram chat ID and set it in the workflow settings along with your CoinGecko coin IDs (for example: bitcoin, ethereum) and preferred currency (for example: usd).
3. If you want alert-only behavior, enable “only_extremes” and adjust “fear_below”, “greed_above”, and “jump_points” thresholds to match your preferences.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
