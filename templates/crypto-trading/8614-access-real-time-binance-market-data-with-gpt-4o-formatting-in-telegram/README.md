# 📈 Access real-time Binance market data with GPT-4o formatting in Telegram

> ⚡ **752 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Instantly access real-time Binance Spot Market data in Telegram!**

This workflow connects the **Binance REST API** with **Telegram** and optional **GPT-4.1-mini formatting**, delivering structured insights such as **latest prices, 24h stats, order book depth, trades, and candlesticks** directly into chat.

---

## 🔎 How It Works

1. A **Telegram Trigger** listens for incoming user requests.
2. **User Authentication** validates the Telegram ID to restrict access.
3. A **Session ID** is generated from `chat.id` to manage session memory.
4. The **Binance AI Agent** executes HTTP calls to the Binance public API:

   * **Latest Price (Ticker)** → `/api/v3/ticker/price?symbol=BTCUSDT`
   * **24h Statistics** → `/api/v3/ticker/24hr?symbol=BTCUSDT`
   * **Order Book Depth** → `/api/v3/depth?symbol=BTCUSDT&limit=50`
   * **Best Bid/Ask Snapshot** → `/api/v3/ticker/bookTicker?symbol=BTCUSDT`
   * **Candlestick Data (Klines)** → `/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=200`
   * **Recent Trades** → `/api/v3/trades?symbol=BTCUSDT&limit=100`
5. **Utility Tools** refine outputs:

   * **Calculator** → computes spreads, midpoints, averages, % changes.
   * **Think** → extracts and reformats JSON into human-readable fields.
   * **Simple Memory** → saves symbol, sessionId, and user context.
6. **Message Splitter** ensures outputs &gt;4000 characters are chunked for Telegram.
7. Final **structured reports** are sent back to Telegram.

---

## ✅ What You Can Do with This Agent

* Get **real-time Binance Spot prices** with 24h stats.
* Fetch **order book depth** and liquidity snapshots.
* View **best bid/ask quotes**.
* Retrieve **candlestick OHLCV data** across timeframes.
* Check **recent trades** (up to 100).
* Calculate **spreads, mid-prices, % changes** automatically.
* Receive **clean, structured messages** instead of raw JSON.

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) and save the bot token.

2. **Configure in n8n**

   * Import `Binance AI Agent v1.02.json`.
   * Update the **User Authentication node** with your Telegram ID.
   * Add **Telegram credentials** (bot token).
   *  Add **OpenAI API key** 
* (Optional) Add [Binance API key](https://www.binance.com/en/binance-api) 

3. **Deploy & Test**

   * Activate the workflow in n8n.
   * Send `BTCUSDT` to your bot.
   * Instantly receive Binance Spot Market insights inside Telegram.

---

## 📤 Output Rules

* Group outputs by **Price, 24h Stats, Order Book, Candles, Trades**.
* Respect Telegram’s 4000-char message limit (auto-split enabled).
* Only structured summaries — no raw JSON.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/XoteI6YCOHU/0.jpg)](https://www.youtube.com/watch?v=XoteI6YCOHU)


---

⚡ **Unlock Binance Spot Market insights instantly in Telegram — clean, fast, and API-key free.**


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
