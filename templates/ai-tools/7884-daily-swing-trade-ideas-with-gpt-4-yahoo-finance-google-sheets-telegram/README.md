# 🎯 Daily swing trade ideas with GPT-4, Yahoo Finance, Google Sheets & Telegram

> ⚡ **3,238 views** · 🎯 [AI Summarization & Classification](../)

## Description

# **Automated daily swing‑trade ideas from end‑of‑day (EOD) data, scored by an LLM, logged to Google Sheets, and pushed to Telegram.**

---

## What this workflow does

* **Fetches EOD quotes** for a chosen stock universe (example: **NSE‑100** via RapidAPI).
* **Cleans & filters** the universe using simple technical/quality gates (e.g., price/volume sanity, avoid illiquid names).
* **Packages market context** and feeds it to **OpenAI** with a strict **JSON schema** to produce **top swing‑trade recommendations** (entry, target, stop, rationale).
* **Splits structured output** into rows and **logs** them to a **Google Sheet** for tracking.
* **Sends an alert** with the day’s trade ideas to **Telegram** (channel or DM).

---

## Ideal for

* Retail traders who want a **daily, hands‑off idea generator**.
* PMs/engineers prototyping **LLM‑assisted quant sidekicks**.
* Creators who publish **daily trade notes** to their audience.

---

## Tech stack

* **n8n** (orchestration)
* **RapidAPI** (EOD quotes; pluggable data source)
* **OpenAI** (LLM for idea generation)
* **Google Sheets** (logging & performance tracker)
* **Telegram** (alerts)

---

## Prerequisites

1. **RapidAPI key** with access to an EOD quotes endpoint for your exchange.
2. **OpenAI API key**.
3. **Google account** with a Sheet named `Trade_Recommendations_Tracker` (or update the node).
4. **Telegram bot token** (via @BotFather) and destination **chat ID**.

&gt; You can replace any of the above vendors with equivalents (e.g., Alpha Vantage, Twelve Data, Polygon, etc.). Only the **HTTP Request** + **Format** nodes need tweaks.

---

## Environment variables

| Key                  | Example                    | Used in               |
| -------------------- | -------------------------- | --------------------- |
| `RAPIDAPI_KEY`       | `xxxxxxxxxxxxxxxxxxxxxxxx` | HTTP Request (quotes) |
| `OPENAI_API_KEY`     | `sk-…`                     | OpenAI node           |
| `TELEGRAM_BOT_TOKEN` | `123456:ABC-DEF…`          | Telegram node         |
| `TELEGRAM_CHAT_ID`   | `5357385827`               | Telegram node         |

---

## Google Sheet schema

Create a Sheet (tab: `EOD_Ideas`) with the headers:

```
Date, Symbol, Direction, Entry, Target, StopLoss, Confidence, Reason, SourceModel, UniverseTag
```


## Node map (name → purpose)

1. **Trigger – Daily Market Close** → Fires daily after market close (e.g., 4:15 PM IST).
2. **Prepare Stock List (NSE 100)** → Provides stock symbols to analyze (static list or from a Sheet/API).
3. **Fetch EOD Data (RapidAPI)** → Gets EOD data for all symbols in one or batched calls.
4. **Format EOD Data** → Normalizes API response to a clean array (symbol, close, high, low, volume, etc.).
5. **Filter Valid Stock Data** → Drops illiquid/invalid rows (e.g., `volume &gt; 200k`, `close &gt; 50`).
6. **Build LLM Prompt Input** → Creates compact market context & JSON instructions for the model.
7. **Generate Swing Trade Ideas (OpenAI)** → Returns **strict JSON** with top ideas.
8. **Split JSON Output (Trade‑wise)** → Explodes the JSON array into individual items.
9. **Log Trade to Google Sheet** → Appends each idea as a row.
10. **Send Trade Alert to Telegram** → Publishes a concise summary to Telegram.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
