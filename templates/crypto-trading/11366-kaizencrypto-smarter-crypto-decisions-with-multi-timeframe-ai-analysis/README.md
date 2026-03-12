# 📈 KaizenCrypto - smarter crypto decisions with multi-timeframe AI analysis

> ⚡ **382 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

### This n8n template automates crypto market analysis by combining multi-timeframe candlestick data with real-time news sentiment to generate actionable AI-backed Buy / Sell / Hold signals for any cryptocurrency. Built around the Kaizen principle of continuous improvement, it delivers sharper, more reliable insights with every run.

**Use cases**
- Automatically analyze crypto market trends using 15m, 1h, and 1d candlestick data.
- Aggregate global crypto news sentiment to reinforce price-action confidence.
- Generate AI-powered Buy / Sell / Hold recommendations for traders.
- Build your own Telegram-based crypto trading assistant or analytics bot.
- Create backends for crypto dashboards, portfolio advisors, or auto-alert systems.
- Expand trading strategies using AI reasoning instead of manual analysis.

**Good to know**
This workflow merges both technical analysis (candlesticks) and fundamental sentiment (news), then passes them through an AI model (Gemini) to produce clean, easy-to-understand trading signals.
It works seamlessly on n8n Cloud and self-hosted setups, with configuration taking about 5 minutes.

### Requirements
- n8n Cloud or self-hosted instance
- Crypto price data API key 
- Crypto news API key
- AI model API key (Google Gemini)
- Telegram Bot Token (via @BotFather)

### Customising this workflow
- Replace Telegram with Slack, Discord, WhatsApp Cloud API, or Notion for alerts.
- Switch AI models (Gemini, OpenAI, Claude) to change tone or reasoning style.
- Modify candlestick intervals (15m, 1h, 1d) or add more timeframes.
- Attach TradingView webhooks for live alerts or automated triggers.
- Add portfolio tracking, price-level alerts, or risk scoring for advanced users.
- Expand the template to support forex, stocks, indices, or commodities with minimal edits.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
