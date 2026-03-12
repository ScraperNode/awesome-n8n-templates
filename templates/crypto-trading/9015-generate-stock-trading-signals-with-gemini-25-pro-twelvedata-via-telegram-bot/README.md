# 📈 Generate stock trading signals with Gemini 2.5 Pro & TwelveData via Telegram Bot

> ⚡ **479 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Purpose and Audience
This n8n workflow template creates an intelligent stock technical analysis system that delivers professional-grade trading signals directly to your Telegram. Designed for retail traders, investors, and financial professionals who want to combine technical analysis with AI-powered insights for better market timing decisions.

## Who Is It For
- Retail Traders: Looking to enhance their technical analysis with AI-driven insights
- Swing Traders: Need reliable signals for entry and exit timing
- Investment Professionals: Want automated technical screening for multiple stocks
- Financial Enthusiasts: Interested in combining traditional TA with modern AI tools
- Portfolio Managers: Seeking systematic approach to market timing

## How It Works
The workflow operates as a comprehensive technical analysis engine:
1. Data Collection: Fetches real-time stock prices and 90-day historical data from TwelveData API
2. Technical Calculation: Computes key indicators including EMAs, RSI, ATR, and support/resistance levels
3. AI Analysis: Uses Google Gemini 2.5 Pro to analyze confluence of indicators and generate single, high-probability signals
4. Signal Generation: Produces clear BUY/SELL/NEUTRAL recommendations with specific entry, stop-loss, and take-profit levels
5. Delivery: Sends formatted analysis and interactive charts via Telegram bot
6. Risk Management: Includes built-in risk parameters and confidence scoring

## Setup Requirements
1. Create Telegram bot via BotFather
2. Set up Google Gemini credentials
3. Configure additional nodes as you see in the sticky notes
4. Deploy and test with stock symbols (e.g., "AAPL", "TSLA")

**Note:** Complete setup guide is provided with the workflow file.


## Technical Indicators Used in Strategy
**Core Indicators (1-Day Timeframe):**
1. EMA 50 & EMA 200: Trend direction and momentum confirmation
2. RSI (14-period): Momentum oscillator for overbought/oversold conditions
3. ATR (14-period): Volatility measurement for risk sizing
4. Support/Resistance: Dynamic levels calculated from 90-day price history.
5. Fibonacci Retracements: Additional confluence levels.

### Important Disclaimers
- ⚠️ Analysis timeframe is set to 1-day by default - suitable for swing trading, not day trading
- ⚠️ Not a get-rich-quick system - This tool provides technical analysis, not financial advice
- ⚠️ Use with fundamental analysis - Technical signals work best when combined with fundamental research for timing entries and exits
- ⚠️ Not recommended for isolated use - Always consider fundamentals, market conditions, news, and risk management

## Key Features
- Single, clear signal per analysis (no conflicting recommendations; either buy or sell)
- Built-in confidence scoring system
- Automated chart generation and delivery
- Support for any US stock ticker
- Professional-grade risk management parameters

## Use Case Examples
1. Pre-market Analysis: Send "AAPL" stock ticker as a message to your telegram bot and get comprehensive technical analysis with 1 Day candlesticks chart
2. Swing Trading: Use signals to time entries on already-researched stocks
3. Portfolio Review: Analyze multiple positions for exit timing
4. Educational Tool: Learn technical analysis through AI explanations

This template transforms complex technical analysis into accessible, actionable trading insights while maintaining professional risk management standards.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
