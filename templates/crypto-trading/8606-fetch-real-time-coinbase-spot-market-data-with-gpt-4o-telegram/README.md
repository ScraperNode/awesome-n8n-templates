# 📈 Fetch real-time Coinbase spot market data with GPT-4o + Telegram

> ⚡ **425 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Coinbase AI Agent instantly fetches real-time market data directly in Telegram!** 

This workflow integrates the **Coinbase REST API** with **Telegram** (plus optional **AI-powered formatting**) to deliver the latest crypto price, order book, candles, and trade stats in seconds. Perfect for **crypto traders, analysts, and investors** who want **actionable market data at their fingertips—without API keys.**

## **How It Works**

1. A **Telegram bot** listens for user requests (e.g., `BTC-USD`).
2. The workflow calls **Coinbase public endpoints** *(no key required)* to fetch real-time data:

   * **Latest price (ticker)**
   * **24h stats** (open, high, low, close, volume)
   * **Order book snapshots** (best bid/ask + depth)
   * **Candlestick data** (OHLCV for multiple intervals)
   * **Recent trades** (executed orders)
3. A **Calculator node** derives useful values like mid-price and spread.
4. An **AI or “Think” node** reshapes JSON into clear, human-readable messages.
5. A **splitter** ensures long messages are broken into safe Telegram chunks.
6. The final **market insights** are sent instantly back to Telegram.

## **What You Can Do with This Agent**

This Telegram bot gives you:

✅ **Get instant price & 24h stats** for any Coinbase spot pair.
✅ **Monitor live order books** with top bids/asks.
✅ **Analyze candle data** (e.g., 15m, 1h, 4h, 1d).
✅ **Track recent trades** to see market activity.
✅ **Receive clean, structured reports**—optionally AI-enhanced.

## **Set Up Steps**

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) on Telegram to create your bot and get an API token.
2. **Configure in n8n**

   * Import the provided workflow JSON.
   * Add your **Telegram credentials** (bot token + your Telegram ID for authentication).
   * (Optional) Add an **OpenAI key** if you want AI-enhanced formatting.
3. **Deploy and Test**

   * Send a query like `BTC-USD` to your bot.
   * Instantly receive [Coinbase spot data](https://www.coinbase.com/developer-platform/products/exchange-api) in Telegram!

🚀 **Unlock powerful, real-time Coinbase market insights directly in Telegram—no Coinbase API key required!**

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/AnLG0tnnhSs/0.jpg)](https://www.youtube.com/watch?v=AnLG0tnnhSs)


---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
**No unauthorized rebranding or resale permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
