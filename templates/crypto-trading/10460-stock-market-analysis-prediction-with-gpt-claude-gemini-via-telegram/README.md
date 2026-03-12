# 📈 Stock market analysis & prediction with GPT, Claude & Gemini via Telegram

> ⚡ **2,758 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Introduction
Automates stock market analysis using multiple AI models to predict trends, analyze sentiment, and generate consensus-based investment insights. For traders and analysts seeking data-driven forecasts by eliminating manual research and combining AI perspectives for accurate predictions.

## How It Works
Daily trigger fetches stock data, news, ratings, and sentiment → AI models analyze each source → OpenAI generates report → Three AI validators (OpenAI, Anthropic, Gemini) cross-verify → Consensus evaluation → Telegram alert with insights.

## Workflow Template
Schedule → Fetch Stock Data → Fetch News → Fetch Ratings → Fetch Sentiment → AI Analysis → Combine → Generate Report (GPT) → Validate (3 AIs) → Evaluate Consensus → Send Telegram

## Workflow Steps
1. **Data Collection:** Scheduled trigger fetches prices, news, analyst ratings, and social trends
2. **AI Analysis:** Separate models analyze stocks, news sentiment, ratings, and social discussions
3. **Report Generation:** OpenAI GPT combines analyses into comprehensive market report
4. **Multi-AI Validation:** Three AI models independently validate predictions for accuracy
5. **Consensus Building:** Evaluates AI agreement to determine confidence levels
6. **Alert Delivery:** Sends Telegram alerts with buy/sell/hold recommendations

## Setup Instructions
1. **Schedule:** Configure daily trigger time
2. **Data Sources:** Add API keys for stock data, news APIs, and social platforms
3. **AI Models:** Configure OpenAI, Anthropic, and Google Gemini credentials
4. **Telegram:** Create bot and add token
5. **Thresholds:** Define consensus requirements for recommendations

## Prerequisites
- Stock data API (Alpha Vantage, Yahoo Finance)
- News API key
- Social media API
- OpenAI API key
- Anthropic API key
- Google Gemini API key
- Telegram bot token

## Use Cases
**Day Trading:** Real-time volatile stock analysis with multiple AI perspectives. **Portfolio Management:** Daily consensus reports for rebalancing.  

## Customization
Add technical indicators (RSI, MACD). Include crypto analysis. Integrate portfolio tracking. Add email/Slack notifications. Configure sector-specific analysis.  

## Benefits
Eliminates hours of daily research. Reduces AI hallucination through multi-model validation. Provides 24/7 monitoring. Combines multiple data sources.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
