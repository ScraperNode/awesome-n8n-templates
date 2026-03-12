# 📈 Binance SM 1hour indicators tool

> ⚡ **3,863 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# 🧪 Binance SM 1hour Indicators Tool

A precision trading signal engine that interprets **1-hour candlestick indicators** for Binance Spot Market pairs using a GPT-4.1-mini LLM. Ideal for swing traders seeking directional bias and momentum clarity across medium timeframes.

---

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

## 🎯 Purpose

This tool provides a structured 1-hour market read using:

* **RSI** (Relative Strength Index)
* **MACD** (Moving Average Convergence Divergence)
* **BBANDS** (Bollinger Bands)
* **SMA & EMA** (Simple and Exponential Moving Averages)
* **ADX** (Average Directional Index)

It’s invoked as a sub-agent in broader AI workflows, such as the Binance Financial Analyst Tool and the Spot Market Quant AI Agent.

---

## ⚙️ Key Features

| Feature                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| 🔄 Subworkflow Trigger | Runs only when called by parent agent (not standalone)        |
| 🧠 GPT-4.1-mini LLM    | Translates numeric indicators into natural-language summaries |
| 📊 Real-time Data      | Pulls latest 40×1h candles via internal webhook from Binance  |
| 📥 Input Format        | `{ "message": "ETHUSDT", "sessionId": "telegram_chat_id" }`   |
| 📤 Output Format       | JSON summary + Telegram-friendly HTML overview                |

---

## 💡 Example Output

```
📊 1h Technical Overview – ETHUSDT

• RSI: 59 (Neutral)  
• MACD: Bullish Crossover  
• BBANDS: Price at Upper Band  
• EMA &gt; SMA → Positive Slope  
• ADX: 28 → Moderate Trend Strength
```

---

## 🧩 Use Cases

| Scenario                               | Result                                          |
| -------------------------------------- | ----------------------------------------------- |
| Mid-frame market alignment             | Verifies momentum between 15m and 4h timeframes |
| Quant AI Agent input                   | Supplies trend context for entry/exit decisions |
| Standalone medium-term signal snapshot | Validates swing trade setups or filters noise   |

---

## 📦 Installation Instructions

1. **Import workflow** into your n8n instance
2. Confirm internal webhook `/1h-indicators` is live and authorized
3. Insert your OpenAI credentials for GPT-4.1-mini node
4. Use only when triggered via:

   * Binance Financial Analyst Tool
   * Binance Spot Market Quant AI Agent

---

## 🧾 Licensing & Support

🔗 **Don Jayamaha – LinkedIn**
[linkedin.com/in/donjayamahajr](https://linkedin.com/in/donjayamahajr)

© 2025 Treasurium Capital Limited Company
Architecture, prompts, and signal logic are proprietary. Redistribution or commercial use requires explicit licensing. No unauthorized cloning permitted.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
