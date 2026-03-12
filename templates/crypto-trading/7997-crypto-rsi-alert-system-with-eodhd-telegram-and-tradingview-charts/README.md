# 📈 Crypto RSI alert system with EODHD, Telegram and TradingView charts

> ⚡ **1,393 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**How it works**

Runs on a schedule and iterates a watchlist of symbols (e.g., BTC/ETH/SOL).

For each symbol, request intraday 1h OHLCV from EODHD.

A Code node computes Wilder’s RSI(14) and detects 30/70 crossings.

When a signal appears, the bot sends a Telegram alert (HTML message) with price, RSI (prev → now), timestamp, and a “View chart” button that opens the pair on TradingView (BINANCE/USD).

**Set up steps (≈10–15 min)**

Prereqs: n8n (cloud or self-hosted), EODHD API key, Telegram bot + your chat_id.

Env vars: set EODHD_TOKEN and TELEGRAM_CHAT_ID on your n8n instance.

Credentials: add your Telegram credential (bot token).

Import the workflow JSON.

Edit Fields node: adjust the symbol array to your watchlist.

Schedule Trigger: choose how often to run (e.g., every 5–10 min).

Test: temporarily flip the Code node’s FORCE_ALERT flag to true to verify Telegram delivery, then set it back to false.

EODHD API [Access the EODHD API with a 10% discount](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)

## 🔗 Nodes Used

HTTP Request, Telegram

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
