# 📈 ZenTrade -  AI Stock Trade Advisor

> ⚡ **311 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This n8n template automates intraday trading insights by combining candlestick pattern analysis and news sentiment aggregation to suggest actionable Buy / Sell / Hold decisions across international stock markets.

  **Use cases**

- Automatically analyze stock trends using live candlestick data.
- Aggregate real-time news sentiment to strengthen trading confidence.
- Generate AI-backed Buy / Sell / Hold recommendations for traders.
- Build an automated Telegram trading assistant or analytics bot.
- Create a backend for AI-powered portfolio advisors or trading dashboards.

**Good to know**

This workflow integrates both market and news APIs, processes data intelligently, and leverages an Gemini AI for trading recommendations.
It runs smoothly on both n8n Cloud and self-hosted instances, and setup typically takes 10–15 minutes.

### Requirements

- n8n Cloud or self-hosted instance
- TwelveData API key (for fetching OHLC & candlestick data) → twelvedata.com
- NewsAPI.org key (for aggregating relevant stock news) → newsapi.org
- AI model API key (Google Gemini or OpenAI) for sentiment reasoning
- Telegram Bot Token (via @BotFather) for command input & output

### Customising this workflow

- Replace Telegram with Slack, Discord, or Notion for alternate alerts.
- Integrate TradingView or Alpaca API for executing mock trades.
- Modify the candlestick intervals (1m, 15m, 1h) or patterns as per strategy.
- Add portfolio tracking or alert thresholds for advanced users.
- Expand to cover crypto, forex, or commodities with minimal edits.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
