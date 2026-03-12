# 📈 Automate Solana trading with Gemini AI, multi-timeframe analysis & AFK Crypto

> ⚡ **1,241 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## **Try It Out!**

The **SOL/USDT Multi-Timeframe AI Market Analyzer and Trader with Telegram Approval** is your fully automated Solana trading assistant powered by **AI**, **AFK Crypto**, and **Telegram**.

It runs hourly by default, fetches real-time market data for the SOL/USDT pair, and uses AI-driven logic to determine optimal entry, exit, and risk management strategies. You receive a **Telegram approval message** that lets you confirm or reject the trade instantly. Once approved, the bot executes trades via your **AFK Crypto Wallet** and keeps monitoring for Take-Profit or Stop-Loss triggers — sending alerts directly to Telegram when they’re hit.

This system combines automation with manual oversight, giving you AI precision with human approval control.

---

### **How It Works**

1. **Hourly Trigger** – The workflow initiates every hour to analyze the current market status.
2. **Fetch SOL Market Data (Crypto Compare)** – Retrieves multiple timeframe data (1m, 5m, 1h) for trend, momentum, and volatility analysis.
3. **AI Market Analyzer** – Processes data through an AI agent to identify:

   * Market sentiment (bullish, bearish, neutral)
   * Recommended position: LONG / SHORT / HOLD
   * Stop-Loss and Take-Profit levels
   * Confidence rating and reasoning
4. **Balance Check (AFK Crypto)** – Verifies wallet balance via `/v1/wallets/balances?chain=solana` and calculates position size based on 1% risk.
5. **Telegram Approval Message** – Sends a Telegram message containing AI insights and trade details with “✅ Approve” or “❌ Decline” buttons.
6. **Trade Execution (AFK Trade API)** – If approved, executes trade instantly via `/v1/trade/swap` using your AFK Crypto wallet.
7. **Live Trade Monitoring** – Monitors SOL price in real-time. Once Take-Profit or Stop-Loss conditions are met:

   * The position auto-closes.
   * A Telegram notification is sent summarizing results and updated balance.

---

### **How to Use**

1. **Import the workflow** into your n8n workspace.
2. **Add your credentials:**

   * **AFK Crypto API Key** – For balance and trading operations.
   * **Telegram Bot Token + Chat ID** – For sending messages and approvals.
   * **Crypto Compare API Key** – For fetching market data.
3. **Edit “Fetch SOL Market Data” Node:**
   Update the endpoint if you want different timeframes or markets.
4. **Set the schedule:**
   Default trigger = every hour (modifiable in the “Every Hour” node).
5. **Deploy and activate.**
   The bot will send you hourly market analyses via Telegram — allowing you to approve or skip each suggested trade.

---

### **(Optional) Extend This Workflow**

* **Auto Mode:** Allow the AI to auto-trade when confidence &gt; 90%.
* **Portfolio Sync:** Log every trade and PnL automatically to Notion or Airtable.
* **Risk Adjuster:** Dynamically modify the 1% risk per trade based on balance or volatility.
* **Multi-Pair Trading:** Expand to include ETH/USDT or BTC/USDT using the same logic.

---

### **Requirements**

* **AFK Crypto Wallet + API Key**
* **Telegram Bot Token + Chat ID**
* **Crypto Compare API Key**
* **n8n Instance** with HTTP Request, AI, and Telegram nodes enabled

---

### **AFK APIs Used**

* `GET https://api.afkcrypto.com/v1/wallets/balances?chain=solana`
* `POST https://api.afkcrypto.com/v1/trade/swap`

---

### **Summary**

The **SOL/USDT Multi-Timeframe AI Market Analyzer and Trader with Telegram Approval** workflow is an intelligent trading automation system that merges **AI analytics**, **Telegram decision prompts**, and **AFK Crypto execution**.

It empowers you to make data-driven trading decisions — with AI doing the heavy lifting and you retaining the final say before every trade.
A perfect hybrid between automation and control, optimized for active Solana traders who value precision and security.

---

**Our Website**: https://afkcrypto.com/
**Check our blogs**: https://www.afkcrypto.com/blog

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
