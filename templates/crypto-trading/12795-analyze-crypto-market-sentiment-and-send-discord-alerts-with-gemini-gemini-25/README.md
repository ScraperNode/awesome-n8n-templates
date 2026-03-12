# 📈 Analyze crypto market sentiment and send Discord alerts with Gemini Gemini 2.5

> ⚡ **39 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Who is this for?

Crypto traders, investors, and enthusiasts who want automated daily market analysis delivered to Discord without manually checking multiple data sources.

## What it does

Fetches real-time cryptocurrency data from 6 free APIs, analyzes market sentiment and indicators using Google Gemini AI, and sends beautifully formatted investment recommendations to your Discord channel.

**✅ Uses Free APIs Only** — CoinGecko, Yahoo Finance, Alternative.me, and OKX public endpoints require no paid subscriptions or API keys.

## How it works

- Triggers daily at scheduled time (default: 5PM)
- Fetches BTC/ETH/USDT prices and global market metrics from CoinGecko
- Gets DXY (US Dollar Index) from Yahoo Finance
- Retrieves Fear & Greed Index from Alternative.me
- Pulls BTC and ETH funding rates from OKX
- Combines all data and builds comprehensive analysis prompt
- Gemini AI analyzes correlations, sentiment, and provides investment stance
- Formats rich Discord embed with market overview, dominance metrics, indicators, and AI insights
- Sends alert to your Discord webhook

## Set up steps

- Get a free Google Gemini API key from [Google AI Studio](https://aistudio.google.com/)
- Create a Discord webhook in your server (Server Settings → Integrations → Webhooks)
- Connect your Gemini API credentials to the **Gemini AI Analysis** node
- Update the webhook URL in the **Send to Discord Webhook** node with your Discord webhook URL
- Optionally adjust the trigger time in the **Daily Schedule Trigger (5PM)** node

Setup time: ~5 minutes

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
