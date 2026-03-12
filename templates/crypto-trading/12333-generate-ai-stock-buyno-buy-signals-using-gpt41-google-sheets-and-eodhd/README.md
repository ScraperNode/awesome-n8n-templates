# 📈 Generate AI stock buy/no-buy signals using GPT‑4.1, Google Sheets and EODHD

> ⚡ **416 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## What this workflow does
This workflow automates **end-to-end stock analysis** using real market data and AI:

- Reads a list of stock tickers from **Google Sheets**
![image.png](fileId:3859)

- Fetches **fundamental data** (valuation, growth, profitability) and **OHLCV price data** from **EODHD APIs**
- Computes key **technical indicators** (RSI, SMA 20/50/200, volatility, support & resistance)
- Uses an **AI model** to generate:
  - Buy / Watch / Sell recommendation
  - Entry price, stop-loss, and take-profit levels
  - Investment thesis, pros & cons
  - Fundamental quality score (1–10)
- Stores the final structured analysis back into **Google Sheets**

This creates a **repeatable, no-code stock analysis pipeline** ready for decision-making or dashboards.

![eodhd_ouput.png](fileId:3860)

### Data source
Market data is powered by  
**[EODHD APIs](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)**

## How to configure this workflow

### 1. Google Sheets (Input)
Create a sheet with a column called:
- `ticker` (e.g. MSFT, AAPL, AMZN)

Each row represents one stock to analyze.

---

### 2. EODHD APIs
- Create an EODHD account
- Get your API token
- Add it to the HTTP Request nodes as:
  - `api_token=YOUR_API_KEY`

[EODHD APIs](https://eodhd.com/pricing-special-10?via=kmg&ref1=Meneses)

---

### 3. AI Model
- Configure your AI provider (OpenAI / compatible model)
- The AI receives:
  - Fundamentals
  - Technical indicators
  - Growth potential score
- It returns structured JSON with recommendations and trade levels


### 4. Google Sheets (Output)
Results are appended to a `Signals` tab with:
- Signal (BUY / WATCH / SELL)
- Entry, Stop Loss, Take Profit
- Fundamental score (1–10)
- Investment thesis and risk notes

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
