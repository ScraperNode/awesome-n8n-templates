# 📈 Analyze stocks from Telegram using GPT-4, TwelveData, NewsAPI and Chart-IMG

> ⚡ **485 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

AI Stock Tracking Agent is a Telegram-based AI workflow built in n8n that transforms a simple stock name into a complete trading analysis report.

Users send a stock/company name through Telegram, and the workflow automatically:

- Converts the company name into a stock symbol
- Fetches multi-timeframe market data
- Collects recent stock news
- Performs AI-powered sentiment analysis
- Generates a chart image
- Creates a professional BUY / SELL / HOLD report
- Sends the final analysis back to Telegram

---

# Node-by-Node Explanation

---

## 1. Telegram Stock Request Trigger

### What This Node Does

This is the entry point of the workflow.

It listens for incoming Telegram messages and starts the workflow automatically whenever a user sends a stock/company name.

### Example

```text
Apple
Tesla
Nvidia
```
---

## 2. Convert to Stock Symbol

### What This Node Does

Uses OpenAI to convert a company name into a valid stock ticker symbol.

### Example

| User Input | AI Output |
|---|---|
| Apple | AAPL |
| Tesla | TSLA |
| Microsoft | MSFT |

### Why This Node Matters

Users do not need to know the exact stock ticker symbol.

The AI intelligently maps company names into valid trading symbols.

---

## 3. Fetch 4H Market Data

### What This Node Does

Fetches 4-hour interval market data from the TwelveData API.

### Data Returned

- Open Price
- High Price
- Low Price
- Close Price
- Volume

### Why This Node Matters

Helps analyze:
- Short-term momentum
- Intraday trends
- Swing trading opportunities

---

## 4. Fetch Daily Market Data

### What This Node Does

Retrieves daily stock candle data from TwelveData.

### Why This Node Matters

Daily candles help identify:
- Medium-term trends
- Support and resistance
- Trend direction
- Market strength

---

## 5. Fetch Weekly Market Data

### What This Node Does

Fetches weekly timeframe stock data.

### Why This Node Matters

Weekly charts help analyze:
- Long-term market structure
- Major breakouts
- Investor sentiment
- Macro trend direction

---

## 6. Merge Multi-Timeframe Data

### What This Node Does

Combines:
- 4H chart data
- Daily chart data
- Weekly chart data

into one unified dataset.

### Why This Node Matters

Creates a complete technical analysis context for the AI model.

---

## 7. Structure Technical Dataset

### What This Node Does

Organizes all merged technical data into a clean structured object.

### Why This Node Matters

Makes it easier for downstream AI nodes to process the technical dataset efficiently.

---

## 8. Fetch Stock News

### What This Node Does

Fetches recent stock-related news using NewsAPI.

### Data Collected

- Headlines
- Article descriptions
- Sources
- Publication dates

---

## 9. News Sentiment Analyzer

### What This Node Does

Uses OpenAI to evaluate how recent news may impact the stock price.

### AI Analysis Includes

- Bullish sentiment
- Bearish sentiment
- Neutral sentiment
- Confidence score
- Market rationale

### Why This Node Matters

Transforms raw news into actionable trading insight.

---

## 10. Merge Technical and News Data

### What This Node Does

Combines:
- Technical market data
- News sentiment analysis

into one AI-ready context.

### Why This Node Matters

Allows the AI agent to analyze both technical and fundamental signals together.

---

## 11. Final AI Context Builder

### What This Node Does

Structures all combined stock intelligence into a clean dataset.

### Why This Node Matters

Prepares the final AI context before advanced trading analysis begins.

---

## 12. AI Stock Tracking

### What This Node Does

Acts as the master AI trading analyst.

### AI Responsibilities

- Analyze technical data
- Analyze news sentiment
- Detect bullish/bearish setups
- Generate trading verdicts
- Suggest entry zones
- Calculate stop losses
- Generate target prices
- Calculate risk/reward ratio

### Output Includes

- BUY / SELL / HOLD verdict
- Confidence score
- Technical rationale
- Trade setup
- Risk analysis
- Chart link

---

## 13. Get Chart Image for Stock

### What This Node Does

Generates a TradingView-style chart image using the Chart-IMG API.

### Features

- Professional chart visualization
- Weekly timeframe chart
- Shareable chart image

### Why This Node Matters

Adds visual confirmation to the AI trading analysis.

---

## 14. Send Telegram Analysis Report

### What This Node Does

Sends the final AI-generated stock analysis report back to the Telegram user.

### Final Output Includes

- Trading verdict
- Confidence score
- Entry zone
- Stop loss
- Target price
- Risk/reward ratio
- Chart link

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
