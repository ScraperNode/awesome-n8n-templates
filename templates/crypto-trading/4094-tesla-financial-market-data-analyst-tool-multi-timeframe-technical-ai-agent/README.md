# 📈 Tesla financial market data analyst tool (multi-timeframe technical AI agent)

> ⚡ **2,421 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

📊 **This AI sub-agent aggregates Tesla (TSLA) trading signals across multiple timeframes using real-time technical indicators and candlestick behavior.**
It is a **core component** of the Tesla Quant Trading AI system. Powered by **GPT-4.1**, it consolidates 15-minute, 1-hour, and 1-day indicators, adds candlestick pattern data, and produces a unified JSON signal for downstream use by the master agent.

 ⚠️ This agent is **not standalone**. It is triggered by the Tesla Quant Trading AI Agent via `Execute Workflow`.
 🧠 Requires: **4 connected sub-agents** and **Alpha Vantage Premium API Key**

---

## 🔌 Required Sub-Workflows

To use this workflow, you must install:

1. **[Tesla 15min Indicators Tool](https://n8n.io/workflows/4096-tesla-15min-indicators-tool-short-term-ai-technical-analysis/)**
2. **[Tesla 1hour Indicators Tool](https://n8n.io/workflows/4097-tesla-1hour-indicators-tool-mid-term-technical-analysis-ai/)**
3. **[Tesla 1day Indicators Tool](https://n8n.io/workflows/4098-tesla-1day-indicators-tool-macro-level-technical-ai/)**
4. **[Tesla 1hour and 1day Klines Tool](https://n8n.io/workflows/4099-tesla-1hour-and-1day-klines-tool-candlestick-and-volume-ai-pattern-detector/)**
5. **[Tesla Quant Technical Indicators Webhooks Tool](https://n8n.io/workflows/4095-tesla-quant-technical-indicators-webhooks-tool/)** *(provides Alpha Vantage data)*

---

## 🧠 What This Agent Does

1. **Fetches pre-cleaned 20-point JSON outputs** from the 4 sub-agents listed above
2. **Analyzes each timeframe individually**:

   * 15m: momentum and short-term setups
   * 1h: confirmation of emerging trends
   * 1d: macro positioning and trend alignment
   * Klines: candlestick reversal patterns and volume divergence
3. **Generates a structured final signal** in JSON with:

   * Trading stance: `Buy`, `Sell`, `Hold`, or `Cautious`
   * Confidence score (0.0–1.0)
   * Multi-timeframe indicator breakdown
   * Candlestick and volume divergence annotations

---

### 📋 Sample Output

```json
{
  "summary": "TSLA momentum is weakening short-term. 1h MACD shows bearish crossover, RSI declining. 1d candles confirm potential reversal setup.",
  "signal": "Cautious Sell",
  "confidence": 0.81,
  "multiTimeframeInsights": {
    "15m": { "RSI": 68.3, "MACD": { "macd": 0.53, "signal": 0.61 }, ... },
    "1h": { "RSI": 65.0, "MACD": { "macd": -0.32, "signal": 0.11 }, ... },
    "1d": { "BBANDS": { ... }, ... },
    "candlestickPatterns": { "1h": "Doji", "1d": "Bearish Engulfing" },
    "volumeDivergence": { "1h": "Bearish", "1d": "Neutral" }
  }
}
```

---

## 🛠️ Setup Instructions

1. **Import this workflow into n8n**

   * Name it: `Tesla_Financial_Market_Data_Analyst_Tool`

2. **Add Required API Credentials**

   * `Alpha Vantage Premium` (via HTTP Query Auth)
   * `OpenAI GPT-4.1` for reasoning and synthesis

3. **Link Required Sub-Agents**

   * Connect the 4 tool workflows listed above to their respective `Tool Workflow` nodes
   * Connect the webhook provider for data fetches

4. **Set Up as Sub-Agent**

   * This workflow must be triggered using `Execute Workflow` from the parent agent
   * Pass in:

     * `message` (optional context)
     * `sessionId` (used for memory continuity)

---

## 🧾 Sticky Notes Provided

📘 Tesla Financial Market Data Analyst — Core logic overview
📈 15m / 1h / 1d Tool Notes — Indicator lists + use cases
🕯️ Klines Tool Note — Candlestick and volume divergence patterns
🧠 GPT Reasoning Note — GPT-4.1 handles final synthesis
🧩 Sub-Workflow Trigger — Proper integration with parent agent
🧠 Memory Buffer — Maintains session context across evaluations

---

## 🔒 Licensing & Support

© 2025 **Treasurium Capital Limited Company**
The logic, prompt design, and multi-agent architecture are proprietary and IP-protected.

For support or collaboration inquiries:
🔗 [Don Jayamaha – LinkedIn](https://linkedin.com/in/donjayamahajr)
🔗 [n8n Creator Profile](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Unify your Tesla trading logic across timeframes—automated, AI-powered, and built for scalers and swing traders.**

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
