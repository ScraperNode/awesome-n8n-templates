# 📈 Smart stock trading recommendations with GPT-4, TwelveData & NewsAPI analysis

> ⚡ **4,189 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Smart Stock Trading Recommendations with GPT-4, TwelveData & NewsAPI

## What It Does
This template automates stock analysis by combining **technical analysis**, **news sentiment**, and **real-time market data** to generate actionable trading recommendations with confidence scores, risk management parameters, and entry/exit levels.

## Why It's Useful
- **Data-Driven Decisions:** Eliminates emotional trading by synthesizing multiple data sources
- **Time-Saving:** Analyzes a stock in seconds instead of hours of manual research
- **Risk Management:** Automatically calculates stop losses and risk/reward ratios
- **Real-Time Context:** Combines historical trends with breaking news and latest sentiment

## How It Works

1. **Technical Analysis** (TwelveData)
   - Fetches 4-hour, 1-day, and 1-week price trends
   - Calculates moving averages and identifies support/resistance levels

2. **News Sentiment** (NewsAPI + GPT-4)
   - Pulls recent news articles about the stock
   - Uses AI to score sentiment impact on price (-1.0 to +1.0)
   - Distinguishes between "bad news" and "sell pressure"

3. **Live Market Intelligence** (Perplexity API)
   - Checks for real-time catalysts (earnings, Fed announcements, rumors)
   - Catches breaking news that historical data might miss

4. **Visual Confirmation** (Chart-Img API)
   - Generates 1-week chart visualization for quick pattern recognition

5. **AI Decision Engine** (GPT-4)
   - Synthesizes all signals using quantitative decision rules
   - Outputs: BUY/SELL/HOLD verdict with confidence level, entry zone, stop loss, and profit target

## Trade Setup Output
Each recommendation includes:
- **Verdict:** BUY, SELL, or HOLD (with confidence score)
- **Entry Zone:** Optimal price to enter
- **Stop Loss:** Risk protection level
- **Target:** Profit objective
- **Risk/Reward Ratio:** Trade viability metric

## Required API Keys
- TwelveData (stock prices)
- NewsAPI (news articles)
- OpenAI (GPT-4 analysis)
- Perplexity (live sentiment)
- Chart-Img (optional - for chart visualization)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Chat Trigger, OpenAI, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
