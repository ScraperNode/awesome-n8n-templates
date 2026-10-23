# 📈 Generate AI stock trade recommendations from TwelveData, NewsAPI and Gemini via Telegram

> ⚡ **551 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
ZenTrade is an AI-powered trading assistant that combines multi-timeframe analysis, volume confirmation, and news sentiment to generate Buy, Sell, and Hold recommendations with market bias, risk assessment, and trade setups delivered directly to Telegram.

## How it works
1. ZenTrade analyzes live market data across multiple timeframes (1-minute, 15-minute, and 1-hour) using TwelveData. The workflow evaluates trend direction, volume activity, and news sentiment, then processes this information through a proprietary market scoring engine. Based on the calculated market bias, Gemini AI generates a concise trade analysis with a recommendation, risk assessment, and trade setup including entry, stop loss, and target levels. Results are automatically delivered to Telegram in real time.


## Setup
1. Import the workflow into n8n and configure your API credentials for TwelveData, NewsAPI, Gemini (or OpenAI), and Telegram. Create a Telegram bot using BotFather and add the bot token to the workflow credentials. Once configured, users can submit stock tickers directly through Telegram. The workflow will fetch market data, analyze sentiment, calculate market bias, and return a complete trading report within seconds.


## Requirements
- n8n Cloud or self-hosted n8n instance
- TwelveData API key (market data)
- NewsAPI key (news sentiment)
- Google Gemini API key or OpenAI API key
- Telegram Bot Token (via @BotFather)

## Customization
- Replace Telegram with Slack, Discord, Email, or Notion
- Connect TradingView, Alpaca, or brokerage APIs
- Modify scoring weights and trading logic
- Add portfolio tracking and performance monitoring
- Extend support to crypto, forex, ETFs, or commodities
- Create custom trading strategies using the built-in scoring engine

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
