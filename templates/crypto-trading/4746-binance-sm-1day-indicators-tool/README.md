# 📈 Binance SM 1day indicators tool

> ⚡ **3,843 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This advanced agent analyzes long-term price action in the Binance Spot Market using 1-day candles. It calculates key macro indicators like RSI, MACD, BBANDS, EMA, SMA, and ADX to identify high-confidence trend setups and market momentum. Used by the Quant AI system for directional bias and macro-level signal validation.

---
🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

## 🎯 Purpose

* Detect major **trend reversals**, **consolidation zones**, and **macro bias**
* Support long-term **swing trading** decisions
* Provide reliable 1-day signals for downstream agents

---

## 🧠 Core Features

| Feature                     | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| 🔁 Trigger                  | Called by parent workflows via `Execute Workflow`            |
| 📥 Input Format             | `{ "message": "MATICUSDT", "sessionId": "telegram_id" }`     |
| 📡 Webhook Call             | Sends request to internal 1d indicators webhook              |
| 🧮 Technical Indicators     | RSI, MACD, BBANDS, EMA, SMA, ADX (based on 40 daily candles) |
| 🧠 GPT (gpt-4.1-mini) Agent | Interprets numerical data into human-readable trend signals  |
| 💬 Output                   | Summary suitable for Telegram or further agent consumption   |

---

## 🔗 External Tools Called

* `https://treasurium.app.n8n.cloud/webhook/1d-indicators`

Sends:

```json
{
  "symbol": "SOLUSDT"
}
```

---

## 📊 Indicator Calculations

| Indicator      | Purpose                         |
| -------------- | ------------------------------- |
| RSI (14)       | Overbought / Oversold Signals   |
| MACD (12,26,9) | Trend Reversals / Momentum      |
| BBANDS (20, 2) | Volatility Expansion            |
| EMA (20)       | Short-Term Trend Confirmation   |
| SMA (20)       | Macro-Level Support/Resistance  |
| ADX (14)       | Trend Strength + Directional DI |

---

## 📦 Setup

1. **Import the JSON** into n8n.
2. Add your **OpenAI API credentials**.
3. Ensure webhook `/1d-indicators` is connected and working.
4. Use this agent as a **sub-workflow** in:

   * Binance SM Financial Analyst Tool
   * Binance Spot Market Quant AI Agent

---

## 📤 Output Example

```
📅 1D Overview – MATICUSDT

• RSI: 71 → Overbought  
• MACD: Bearish Cross forming  
• BBANDS: Widening Volatility  
• EMA &lt; SMA → Downtrend Momentum  
• ADX: 33 → High Trend Strength
```

---

## 📌 Notes

* Not user-facing — outputs are structured JSON or Telegram-style summaries.
* Pairs well with shorter timeframe tools (15m–4h) for confidence stacking.

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
No unauthorized rebranding permitted.

🔗 **Need help?** Reach out on [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
