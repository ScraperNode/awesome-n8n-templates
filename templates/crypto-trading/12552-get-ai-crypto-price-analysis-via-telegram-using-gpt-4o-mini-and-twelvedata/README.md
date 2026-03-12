# 📈 Get AI crypto price analysis via Telegram using GPT-4o-mini and TwelveData

> ⚡ **63 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 📊 Description
Automate real-time cryptocurrency analysis by turning Telegram messages into professional, AI-generated market reports. 📈🤖 This workflow listens to user queries in Telegram, classifies intent using AI, fetches recent OHLC price data, and generates clear, structured crypto insights covering short-term and weekly trends. Each response is formatted for mobile-friendly Telegram delivery with key metrics, insights, and disclaimers. Ideal for crypto communities, analysts, and bot builders who want instant, reliable market analysis without manual charting. 🚀📊
## 🔁 What This Template Does
1️⃣ Listens for incoming Telegram messages in real time. 💬
 2️⃣ Extracts the user’s query text and chat ID. 🧾
 3️⃣ Uses AI to classify intent (price check, overview, trend analysis). 🤖
 4️⃣ Identifies the requested crypto symbol (BTC, ETH, etc.). 🔍
 5️⃣ Fetches 1-hour OHLC price data from CoinMarketCap/TwelveData. 📊
 6️⃣ Compares current price with 24h and 7d historical levels. ⏱️
 7️⃣ Evaluates volume and short-term market strength. 📈
 8️⃣ Generates a structured AI market analysis with confidence scoring. 🧠
 9️⃣ Formats the analysis into a clean, Telegram-friendly message. ✉️
 🔟 Sends the final report directly back to the user in Telegram. 📲
## ⭐ Key Benefits
✅ Delivers instant crypto analysis inside Telegram
 ✅ Eliminates manual chart reading and calculations
 ✅ Uses AI for consistent, structured market insights
 ✅ Mobile-friendly responses with key metrics
 ✅ Supports multiple crypto symbols on demand
 ✅ Ideal for bots, communities, and trading tools
## 🧩 Features
- Telegram Bot trigger and message handling
- AI intent classification and symbol extraction
- Real-time OHLC price data retrieval
- AI-based price trend and volume analysis
- Structured JSON output for reliability
- Telegram-optimized message formatting
- Confidence scoring and risk disclaimers
- Built-in error handling with email alerts
## 🔐 Requirements
- Telegram Bot API token
- OpenAI API key (GPT-4o-mini recommended)
- CoinMarketCap or TwelveData API key
- Gmail OAuth2 credentials (for error alerts)
- n8n instance with AI nodes enabled
## 🎯 Target Audience
- Crypto traders and analysts
- Telegram bot builders
- Crypto communities and channels
- Fintech and trading platforms
- Automation teams building market insight bots

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Gmail, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
