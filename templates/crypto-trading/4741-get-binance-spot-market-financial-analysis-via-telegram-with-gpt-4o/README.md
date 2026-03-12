# 📈 Get Binance spot market financial analysis via Telegram with GPT-4o

> ⚡ **5,808 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This workflow powers the **Binance Spot Market Quant AI Agent**, acting as the **Financial Market Analyst**. It fuses real-time market structure data (price, volume, kline) with multiple timeframe technical indicators (15m, 1h, 4h, 1d) and returns a structured trading outlook—perfect for intraday and swing traders who want actionable analysis in Telegram.

🔗 **Requires the following sub-workflows** to function:
• [Binance SM 15min Indicators Tool](https://n8n.io/workflows/4743-binance-sm-15min-indicators-tool/)
• [Binance SM 1hour Indicators Tool](https://n8n.io/workflows/4744-binance-sm-1hour-indicators-tool/)
• [Binance SM 4hour Indicators Tool](https://n8n.io/workflows/4745-binance-sm-4hour-indicators-tool/)
• [Binance SM 1day Indicators Tool](https://n8n.io/workflows/4746-binance-sm-1day-indicators-tool/)
• [Binance SM Price/24hStats/Kline Tool](https://n8n.io/workflows/4742-binance-sm-price-24hrstats-orderbook-kline-tool/)

## ⚙️ How It Works

1. Triggered via webhook (typically by the Quant AI Agent).
2. Extracts user symbol + timeframe from input (e.g., "DOGE outlook today").
3. Calls all linked sub-workflows to retrieve indicators + live price data.
4. Merges the data and formats a clean trading report using GPT-4o-mini.
5. Returns HTML-formatted message suitable for Telegram delivery.

---

## 📥 Sample Input

```json
{
  "message": "SOLUSDT",
  "sessionId": "654321123"
}
```

---

## ✅ Telegram Output Format

```
📊 SOLUSDT Market Snapshot

💰 Price: $156.75  
📉 24h Stats: High $160.10 | Low $149.00 | Volume: 1.1M SOL

🧪 4h Indicators:
• RSI: 58.2 (Neutral-Bullish)  
• MACD: Crossover Up  
• BB: Squeezing Near Upper Band  
• ADX: 25.7 (Rising Trend)

📈 Resistance: $163  
📉 Support: $148
```

---

## 🔍 Use Cases

| Scenario                        | Outcome                                                   |
| ------------------------------- | --------------------------------------------------------- |
| User asks for “BTC outlook”     | Returns 1h + 4h + 1d indicators + live price + key levels |
| Telegram bot prompt: “DOGE now” | Returns short-term 15m + 1h analysis snapshot             |
| Strategy trigger inside n8n     | Enables other workflows to consume structured signal data |

---

🎥 **Watch Tutorial**:
[![Click to Watch](https://img.youtube.com/vi/HWHD-eXP0IE/hqdefault.jpg)](https://youtu.be/HWHD-eXP0IE)

---

## 🧾 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
Architecture, prompts, and trade report structure are IP-protected.
**No unauthorized rebranding or redistribution permitted.**

🔗 For support: [LinkedIn – Don Jayamaha](https://linkedin.com/in/donjayamahajr)

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
