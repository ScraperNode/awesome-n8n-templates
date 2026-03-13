# 📈 Automated cryptocurrency trading bot with ICT methodology, GPT-4o & Coinbase

> ⚡ **3,284 views** · 📈 [Crypto Trading & Stock Market](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## **Description**

## 🎯 Overview
An advanced automated trading bot that implements ICT (Inner Circle Trader) methodology and Smart Money Concepts for cryptocurrency trading. This workflow combines AI-powered market analysis with automated trade execution through Coinbase Advanced Trading API.

## ⚡ Key Features

### 📊 **ICT Trading Strategy Implementation**
- **Kill Zone Detection**: Automatically identifies optimal trading sessions (Asian, London, New York kill zones)
- **Smart Money Concepts**: Analyzes market structure breaks, liquidity grabs, fair value gaps, and order blocks
- **Session Validation**: Real-time GMT time tracking with session strength calculations
- **Structure Analysis**: Detects BOS (Break of Structure) and CHOCH (Change of Character) patterns

### 🤖 **AI-Powered Analysis**
- **GPT-4 Integration**: Advanced market analysis using OpenAI's latest model
- **Confidence Scoring**: AI generates confidence scores (0-100) for each trading signal
- **Risk Assessment**: Automated risk level evaluation (LOW/MEDIUM/HIGH)
- **ICT-Specific Prompts**: Custom prompts designed for Inner Circle Trader methodology

### 🔄 **Automated Trading Flow**
1. **Signal Reception**: Receives trading signals via Telegram webhook
2. **Data Extraction**: Parses symbol, action, price, and technical indicators
3. **Session Validation**: Verifies current kill zone and trading session strength
4. **Market Data**: Fetches real-time data from Coinbase Advanced Trading API
5. **AI Analysis**: Processes signals through GPT-4 with ICT-specific analysis
6. **Quality Filter**: Multi-condition filtering based on confidence, session, and structure
7. **Trade Execution**: Automated order placement through Coinbase API
8. **Documentation**: Records all trades and rejections in Notion databases

### 📱 **Multi-Platform Integration**
- **Telegram Bot**: Receives signals and sends formatted notifications
- **Coinbase Advanced**: Real-time market data and trade execution
- **Notion Database**: Comprehensive trade logging and analysis tracking
- **Webhook Support**: External system integration capabilities

## 🛠️ **Setup Requirements**

### API Credentials Needed:
- **Coinbase Advanced Trading API** (API Key, Secret, Passphrase)
- **OpenAI API Key** (GPT-4 access)
- **Telegram Bot Token** and Chat ID
- **Notion Integration** (Database IDs for trade records)

### Environment Variables:
```
TELEGRAM_CHAT_ID=your_chat_id
NOTION_TRADING_DB_ID=your_trading_database_id
NOTION_REJECTED_DB_ID=your_rejected_signals_database_id
WEBHOOK_URL=your_external_webhook_url
```

## 📈 **Trading Logic**

### Kill Zone Priority System:
- **London & New York Sessions**: HIGH priority (0.9 strength)
- **Asian & London Close**: MEDIUM priority (0.6 strength)
- **Off Hours**: LOW priority (0.1 strength)

### Signal Validation Criteria:
- Signal quality must not be "LOW"
- Confidence score ≥ 60%
- Active kill zone session required
- ICT structure alignment confirmed

## 🎛️ **Workflow Components**

1. **Extract ICT Signal Data**: Parses incoming Telegram messages for trading signals
2. **ICT Session Validator**: Determines current kill zone and session strength
3. **Get Coinbase Market Data**: Fetches real-time cryptocurrency data
4. **ICT AI Analysis**: GPT-4 powered analysis with ICT methodology
5. **Parse ICT AI Analysis**: Processes AI response with fallback mechanisms
6. **ICT Quality & Session Filter**: Multi-condition signal validation
7. **Execute ICT Trade**: Automated trade execution via Coinbase API
8. **Create ICT Trading Record**: Logs successful trades to Notion
9. **Generate ICT Notification**: Creates formatted Telegram alerts
10. **Log ICT Rejected Signal**: Records filtered signals for analysis

## 🚀 **Use Cases**
- Automated ICT-based cryptocurrency trading
- Smart Money Concepts implementation
- Kill zone session trading
- AI-enhanced market structure analysis
- Professional trading documentation and tracking

## ⚠️ **Risk Management**
- Built-in session validation prevents off-hours trading
- AI confidence scoring filters low-quality signals
- Comprehensive logging for performance analysis
- Automated stop-loss and take-profit calculations

This workflow is perfect for traders familiar with ICT methodology who want to automate their Smart Money Concepts trading strategy with AI-enhanced decision making.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
