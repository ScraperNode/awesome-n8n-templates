# 📈 Fetch real-time Bitget Spot Market Data with GPT-4o + Telegram

> ⚡ **463 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Instantly fetch real-time Bitget spot market data directly in Telegram!** This workflow integrates the **Bitget REST v2 API** with **Telegram** (plus optional **AI-powered formatting**) to deliver the latest crypto price, order book, candles, and recent trades. Perfect for **crypto traders, analysts, and investors** who need **reliable market data at their fingertips—no API key required.**&#x20;

**Sign-up for Bitget for 6,200 USDT in rewards to trade:** [Collect Now](https://partner.bitget.com/bg/AEC3JB)

## **How It Works**

1. A **Telegram bot** listens for user requests (e.g., `BTCUSDT`).
2. The workflow connects to **Bitget public endpoints** to fetch:

   * **Ticker (latest price & 24h stats)**
   * **Order book depth** (top bids/asks)
   * **Recent trades** (price, side, volume, timestamp)
   * **Candlestick data** (1m, 15m, 1h, 4h, 1d)
   * **Historical candles** (optional, for backfill before `endTime`)
3. A **Calculator node** derives useful metrics like mid-price and spread.
4. A **Think node** reshapes raw JSON into Telegram-ready text.
5. A **splitter** ensures reports over 4000 characters are chunked safely.
6. The **final market insights** are delivered instantly back to Telegram.

## **What You Can Do with This Agent**

✅ **Track live prices & 24h stats** for any Bitget spot pair.
✅ **Monitor order book liquidity** and spreads in real-time.
✅ **Analyze candlesticks** across multiple timeframes.
✅ **Review recent trades** to see execution flow.
✅ **Fetch historical candles** for extended market context.
✅ **Receive clean, structured reports** with optional AI-enhanced formatting.

## **Set Up Steps**

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to generate a bot token.
2. **Configure in n8n**

   * Import `Bitget AI Agent v1.02.json` into your n8n instance.
   * Add your **Telegram credentials** (bot token + your Telegram ID in the `User Authentication` node).
   * Add an **OpenAI key** if you want AI-powered formatting.
   *(Optional) Add an **[Bitget api key](https://www.bitget.com/bitget-api)** .

3. **Deploy and Test**

   * Send `BTCUSDT` to your bot.
   * Get live Bitget spot data instantly in Telegram!

🚀 **Unlock powerful, real-time Bitget insights in Telegram—zero setup, zero API keys required!**

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/KNppg7xhySA/0.jpg)](https://www.youtube.com/watch?v=KNppg7xhySA)


---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
