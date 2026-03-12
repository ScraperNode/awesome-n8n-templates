# 📈 Fetch real-time MEXC spot market data with GPT-4.1-mini and Telegram

> ⚡ **309 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Get real-time MEXC Spot Market data instantly in Telegram!**

This workflow connects the **MEXC REST v3 API** with **Telegram** and optional **GPT-4.1-mini formatting**, providing users with **latest prices, 24h stats, order book depth, trades, and candlesticks** in structured, Telegram-ready messages.

---

## 🔎 How It Works

1. A **Telegram Trigger** node listens for commands.
2. **User Authentication** ensures only authorized Telegram IDs can access the bot.
3. A **Session ID** is generated from `chat.id` for lightweight memory.
4. The **MEXC AI Agent** coordinates multiple API calls via HTTP nodes:

   * **Ticker (Latest Price)** → `/api/v3/ticker/price?symbol=BTCUSDT`
   * **24h Stats** → `/api/v3/ticker/24hr?symbol=BTCUSDT`
   * **Order Book Depth** → `/api/v3/depth?symbol=BTCUSDT&limit=50`
   * **Best Bid/Ask Snapshot** → `/api/v3/ticker/bookTicker?symbol=BTCUSDT`
   * **Candlesticks (Klines)** → `/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=200`
   * **Recent Trades** → `/api/v3/trades?symbol=BTCUSDT&limit=100`
5. **Utility Nodes** refine the data:

   * **Calculator** → spreads, averages, mid-prices.
   * **Think** → formats raw JSON into human-readable summaries.
   * **Simple Memory** → saves symbol, sessionId, and context across turns.
6. **Message Splitter** prevents Telegram messages from exceeding 4000 characters.
7. Results are sent back to **Telegram** in structured, readable reports.

---

## ✅ What You Can Do with This Agent

* Get **latest prices & 24h stats** for any spot pair.
* Retrieve **order book depth** (customizable levels).
* Monitor **best bid/ask quotes** for spreads.
* View **candlestick OHLCV data** for multiple timeframes.
* Check **recent trades** (up to 100).
* Receive **clean Telegram reports** — no raw JSON.

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to create a bot and copy its API token.

2. **Configure in n8n**

   * Import `MEXC AI Agent v1.02.json`.
   * Update the **User Authentication node** with your Telegram ID.
   * Add **Telegram API credentials** (bot token).
   * Add **OpenAI API key** 
* (Optional) Add [MEXC API key](https://www.mexc.com/mexc-api) 

3. **Deploy & Test**

   * Activate the workflow in n8n.
   * Send a query like `BTCUSDT` to your bot.
   * Instantly receive structured MEXC Spot Market data in Telegram.

---

## 📤 Output Rules

* Output grouped into **Price, 24h Stats, Order Book, Candlesticks, Trades**.
* No raw JSON — formatted summaries only.
* Complies with Telegram’s 4000-character message limit (auto-split).

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/x4MZ5SmEPwM/0.jpg)](https://www.youtube.com/watch?v=x4MZ5SmEPwM)


---

⚡ **Unlock real-time MEXC Spot Market insights in Telegram — clean, fast, and API-key free.**

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
