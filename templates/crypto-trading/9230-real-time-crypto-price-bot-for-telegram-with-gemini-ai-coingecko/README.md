# 📈 Real-time crypto price bot for Telegram with Gemini AI & CoinGecko

> ⚡ **104 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Purpose
Transform your Telegram into a powerful cryptocurrency price tracker! This n8n workflow creates an intelligent Telegram bot that instantly fetches and beautifully formats real-time crypto market data. Simply send any cryptocurrency ticker symbol, and get comprehensive market information in seconds.

## Who Is This For?
Perfect for:
- Crypto traders and investors who need quick price checks
- Portfolio managers tracking multiple cryptocurrencies
- Automation enthusiasts building custom bot solutions
- Teams needing shared crypto price information
- Developers learning n8n and bot automation
- Content creators monitoring crypto markets

No coding experience required! All code is pre-written and ready to use.

## What It Does
This workflow creates a fully functional Telegram bot that:
✅ Intelligent Ticker Recognition - Uses Google Gemini AI to extract crypto symbols from natural language (understands "BTC", "$ETH", "Check Solana price", etc.)
✅ Real-Time Market Data - Fetches live data from CoinGecko API including:
- Current price (6 decimal precision)
- 24-hour high/low prices
- Price change percentage with trend indicators (📈/📉)
- Market capitalization and rank
- 24-hour trading volume
- All-time high (ATH) and all-time low (ATL) with percentage difference
- Circulating and total supply
- Last update timestamp
- Direct link to CoinGecko page

✅ Beautiful Formatting - Professionally formatted messages with:
- Emoji indicators for easy reading
- Bold text for key metrics
- Markdown formatting optimized for Telegram
- Clean, mobile-friendly layout

✅ Instant Responses - Get market data in under 2 seconds

## Setup Guide
**Prerequisites:**
1. n8n instance (cloud or self-hosted)
2. Telegram account
3. Google account (for Gemini AI)
4. CoinGecko account (free tier available)

**Quick Setup (15 minutes):**
**Step 1: Telegram Bot**
- Open @BotFather on Telegram
- Send /newbot and follow prompts
- Copy your bot token
- Add "Telegram API" credential in n8n

**Step 2: Google Gemini AI**
- Visit Google AI Studio
- Generate free API key
- Add "Google Gemini API" credential in n8n

**Step 3: CoinGecko API**
- Sign up at CoinGecko
- Get your free Demo API key from Dashboard
- Replace the API key in the HTTP Request node header
- Free tier: 30 calls/minute, 10,000/month

**Step 4: Import & Activate**
- Import the workflow JSON into n8n
- Configure the three credentials
- Activate the workflow
- Test by sending "BTC" to your bot!


## Features & Benefits
**Key Features:**
- AI-powered natural language processing
- Real-time data from CoinGecko
- Works with any Telegram client
- Mobile-optimized formatting
- Professional emoji-enhanced design
- Direct links to detailed coin pages
- Lightning-fast responses
- Supports all CoinGecko-listed cryptocurrencies (14,000+)

**Technical Highlights:**
1. Modular node structure (easy to customize)
2. Error handling built-in
3. Efficient API usage
4. Scalable architecture
5. Well-documented with sticky notes
6. Clean, maintainable code


## Use Cases
1. Personal Price Tracking - Quick market checks on your phone
2. Team Collaboration - Share bot in Telegram groups for team-wide access
3. Trading Signals - Integrate with your trading strategy workflows
4. Learning Tool - Study n8n automation and bot development
5. Client Services - Offer crypto price checking as a service
6. Portfolio Monitoring - Quick checks before trading decisions
7. Content Creation - Get accurate data for crypto content.

## API Limits & Scaling
**Free Tier (Included):**
- CoinGecko: 30 calls/min, 10,000/month
- Gemini AI: Generous free quota
- Telegram: Unlimited messages

**Perfect for:**
- Personal use: 100+ price checks daily
- Small teams: 500+ checks daily
- Moderate usage: Plenty of headroom

Need more? Easy upgrade to CoinGecko Pro for higher limits.

## What's Included
✅ Complete n8n workflow (JSON)
✅ 7 comprehensive sticky notes with setup guides
✅ Pre-written, tested code
✅ All API integration configured
✅ Professional message formatting
✅ Direct links to all required services
✅ Example test messages
✅ Troubleshooting tips

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
