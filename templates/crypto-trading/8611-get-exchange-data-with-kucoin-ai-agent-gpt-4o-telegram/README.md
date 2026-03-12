# 📈 Get exchange data with KuCoin AI Agent | GPT-4o + Telegram

> ⚡ **250 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Access live KuCoin Spot Market data instantly in Telegram!**

This workflow integrates the **KuCoin REST API** with **Telegram** and an optional **GPT-4.1-mini formatter**, delivering real-time insights like **latest prices, 24h stats, order book depth, trades, and candlesticks** — all structured into clean Telegram messages.

---

## 🔎 How It Works

1. A **Telegram Trigger** listens for user commands.
2. **User Authentication** validates the Telegram ID against an allowlist.
3. A **SessionId** is generated from the chat ID to support memory across turns.
4. The **KuCoin AI Agent** orchestrates API requests:

   * **24h Stats** → `/api/v1/market/stats?symbol=BTC-USDT`
   * **Order Book Depth** → `/api/v1/market/orderbook/level2_100?symbol=BTC-USDT`
   * **Latest Price** → `/api/v1/market/orderbook/level1?symbol=BTC-USDT`
   * **Best Bid/Ask** → `/api/v1/market/orderbook/level1?symbol=BTC-USDT`
   * **Klines (Candles)** → `/api/v1/market/candles?symbol=BTC-USDT&type=15min&limit=20`
   * **Recent Trades** → `/api/v1/market/histories?symbol=BTC-USDT`
   * **Average Price (via Ticker)** → `/api/v1/market/orderbook/level1?symbol=BTC-USDT`
5. **Utility Tools** process results:

   * **Calculator** → spreads, % changes, averages.
   * **Think** → reshapes JSON, selects fields, formats outputs.
6. **Message Splitter** breaks outputs &gt;4000 chars (Telegram limit).
7. Final report is sent back via **Telegram SendMessage** in human-readable format.

---

## ✅ What You Can Do with This Agent

* Get **24h rolling statistics** (open, high, low, close, last, volume).
* Retrieve **full order book depth** (20, 100 levels) or best bid/ask.
* Monitor **real-time latest prices** with spreads.
* Analyze **candlestick data** (OHLCV) across supported intervals.
* View **recent public trades** with price, size, side, and time.
* Use **average price proxies** from bid/ask + last trade.
* Receive structured Telegram reports — not raw JSON.

---

## 🛠️ Setup Steps

1. **Create a Telegram Bot**

   * Use [@BotFather](https://t.me/BotFather) to create a bot and copy its token.

2. **Configure in n8n**

   * Import `KuCoin AI Agent v1.02.json`.
   * Update **User Authentication node** with your Telegram ID.
   * Add **Telegram API credentials** (bot token).
   * Add **OpenAI API key**.
* (Optional) Add [KuCoin API key](https://www.kucoin.com/api) 

3. **Deploy & Test**

   * Activate the workflow in n8n.
   * Send a query like `BTC-USDT` to your bot.
   * Instantly receive structured KuCoin Spot Market insights in Telegram.

---

## 📤 Output Rules

* Responses grouped into **Price, 24h Stats, Order Book, Klines, Trades**.
* No raw JSON (only human-readable summaries).
* No financial advice or predictions.
* Always fetch directly from KuCoin’s official API.

---

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/B0GWDELUOUw/0.jpg)](https://www.youtube.com/watch?v=B0GWDELUOUw)

---

If you want, I can also update embed links & thumbnails elsewhere to match this.


---

⚡ **Unlock KuCoin Spot Market insights in Telegram — fast, reliable, and API-key free.**

---

### 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.

**No unauthorized rebranding permitted.**

🔗 **For support:** [Don Jayamaha – LinkedIn](https://www.linkedin.com/in/donjayamahajr/)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
