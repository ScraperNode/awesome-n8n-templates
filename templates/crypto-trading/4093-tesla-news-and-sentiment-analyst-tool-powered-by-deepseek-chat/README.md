# 📈 Tesla news and sentiment analyst tool (Powered by DeepSeek Chat)

> ⚡ **2,862 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

📰 **This AI-powered agent performs real-time sentiment analysis on Tesla (TSLA) news to support trading decisions**.
It aggregates headlines from 5 trusted sources and uses **DeepSeek Chat** to classify sentiment and generate structured summaries. This tool is a critical sub-agent in the broader **Tesla Quant Trading AI Agent** system.

 ⚠️ **Not standalone** — this agent is designed to be executed by the [Tesla Quant Trading AI Agent](https://n8n.io/workflows/4092-tesla-quant-trading-ai-agent-using-telegram-gpt-41-main-interface/).
 ⚙️ Requires: **DeepSeek Chat API Key**

---

## 🔌 Workflow Role

This tool processes Tesla-related news and produces output like:

```json
{
  "sentiment": "bullish",
  "summary": "Tesla stock rallied today after strong delivery numbers and Cybertruck updates. Analysts remain optimistic.",
  "topHeadlines": [
    "Tesla beats Q2 delivery forecast – Yahoo Finance",
    "Cybertruck ramps up in Texas – Electrek",
    "Berlin Gigafactory expands battery production – CleanTechnica"
  ]
}
```

Its output feeds directly into the master trading agent’s final trade report.

---

## 📰 News Sources Used

This agent collects real-time headlines from:

* Google News (filtered by “Tesla” or “TSLA”)
* Yahoo Finance (TSLA-specific feed)
* Electrek (Tesla archive)
* CleanTechnica (Tesla sustainability news)
* TeslaNorth (app/product release updates)

These five tools are always queried together to ensure market-wide signal coverage.

---

## 🤖 What the Agent Does

1. Pulls headlines from all 5 Tesla-specific RSS feeds
2. Uses **DeepSeek Chat** to:

   * Analyze narrative tone (bullish / bearish / neutral)
   * Identify macro/financial drivers
   * Generate a 2–3 sentence summary
   * Return top 3–5 headlines
3. Outputs structured JSON for downstream use

---

## 🛠️ Setup Instructions

### 1. Install & Name

* Import this file and name it: `Tesla_News_and_Sentiment_Analyst_Tool`

### 2. Add DeepSeek API Credentials

* Go to: **Credentials → Add New → DeepSeek API**
* Save as: `DeepSeek account`

### 3. Internet Access Required

* Ensure RSS feeds can fetch live headlines
* Works best with a cloud-hosted n8n instance or tunnel-enabled local install

### 4. Must Be Triggered by Parent

* Triggered via `Execute Workflow` by the Tesla Quant Trading AI Agent
* Requires these inputs:

  * `message`: optional query context
  * `sessionId`: passed to maintain short-term memory across executions

---

## 🧠 Agent Architecture

| Node Name                          | Function                                         |
| ---------------------------------- | ------------------------------------------------ |
| `DeepSeek Chat Model`              | Performs AI-based sentiment analysis             |
| `Tesla News and Sentiment Analyst` | Combines results, formats output in strict JSON  |
| `Simple Memory`                    | Stores session-level context (short-term memory) |
| 5x `RSS` nodes                     | Aggregate Tesla news from trusted media outlets  |

---

## 📌 Sticky Notes Included

🟢 **Trigger from Parent Workflow** – Executed only by main TSLA agent
🟠 **News Feeds Overview** – Lists and explains each of the 5 feeds
🧠 **DeepSeek Chat Notes** – Describes LLM behavior and parsing role
🔵 **Short-Term Memory** – Buffers sentiment context during user session
📘 **Sentiment Analyst Agent** – Summarizes key responsibilities

---

## 📎 Licensing & Attribution

© 2025 **Treasurium Capital Limited Company**
This architecture, workflow structure, and prompt design are licensed for educational and operational use only. Commercial resale or rebranding prohibited without authorization.

🔗 Creator: [Don Jayamaha](https://linkedin.com/in/donjayamahajr)
🔗 Templates: [https://n8n.io/creators/don-the-gem-dealer/](https://n8n.io/creators/don-the-gem-dealer/)

---

🚀 **Power your TSLA trading with AI-driven sentiment—built with DeepSeek Chat and 5 trusted news sources.**
**This tool is required by the Tesla Quant Trading AI Agent.**

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
