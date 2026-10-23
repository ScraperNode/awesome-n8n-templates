# 📈 Analyze stocks in Telegram with Twelve Data, GPT-4o and o3-mini

> ⚡ **151 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# TwelveData Pro Analyst — AI-Powered Stock Analysis Bot for Telegram

**Turn your Telegram into a personal Bloomberg terminal. Ask any question about any stock — get institutional-grade analysis back in seconds.**

***

## What Is This?

TwelveData Pro Analyst is a complete, ready-to-import n8n workflow that connects a Telegram bot to live financial market data and an AI analyst called **Ade** — a persona built to deliver the kind of rigorous, data-backed stock analysis that professional traders rely on.

You message the bot. Ade fetches live data, runs the numbers, and sends back a full analysis — technical indicators, fundamentals, risk score, sector context, and a clear BUY / HOLD / SELL verdict. No spreadsheets. No manual research. No switching between platforms.

This is not a toy chatbot. Every response is grounded in real-time data from the Twelve Data API and processed through a suite of purpose-built analytical sub-workflows before Ade writes a single word.

***

## What Can It Do?

### 📊 Deep-Dive Stock Analysis
Ask *"Analyse Apple"* or *"What do you think about TSLA?"* and Ade will pull:
- Live real-time quote (price, change, volume, 52-week range)
- 90 days of historical price data
- RSI, MACD and Bollinger Bands technical indicators
- Company profile (CEO, sector, industry, employees, description)
- Income statement (revenue, net income, EBITDA, EPS, R&D spend — with YoY growth)

She then calculates price momentum, volume trend, support and resistance levels from the 30-day price history, and delivers a structured report with a price target, stop-loss level and 3 data-backed reasons for her verdict.

### 📈 Stock Comparison
Ask *"Compare AAPL, MSFT and GOOGL"* and get a side-by-side breakdown of price performance, RSI momentum signal, 52-week range positioning, sector and industry, and a Quick Verdict per stock — all ranked by daily performance.

### 🏢 Sector Analysis
Ask *"How is the Technology sector doing?"* and get a full sector report across 5 representative stocks covering combined market cap, average P/E, average beta, top and bottom performers, industry sub-group breakdown, and a Bullish / Mixed / Bearish sector recommendation.

**Supported sectors:** Technology, Healthcare, Finance, Energy, Consumer, Real Estate, Utilities, Industrials

### ⚠️ Risk Calculator
Ask *"What is the risk on Tesla?"* or *"Calculate risk for NVDA with a $5,000 position"* and get:
- Annualised and daily volatility
- Maximum drawdown with exact peak and trough dates
- Value at Risk (95% confidence, 1-day) in both % and dollar terms
- Composite risk score out of 10 (across volatility, drawdown, beta, valuation and leverage)
- Financial health metrics (margins, ROE, free cash flow, debt vs cash)
- Short interest, institutional ownership, dividend sustainability
- Stop-loss recommendation and position sizing guidance

***

## What's Included

This single JSON file contains **5 fully built workflows** in one import:

| Workflow | Purpose |
|---|---|
| **TwelveData Pro Analyst** | Main bot — Telegram trigger, AI agent (Ade), routes to sub-tools |
| **Stock Analysis Tool** | Deep single-stock analysis with 7 data streams + AI report |
| **Stock Comparison Tool** | Side-by-side multi-stock comparison |
| **Sector Analysis Tool** | Sector-wide performance and investment recommendation |
| **Risk Calculator Tool** | Institutional risk metrics and position sizing |

***

## What You Need Before Starting

### 1. n8n Instance
You need a running n8n instance — either:
- **n8n Cloud** — sign up at [n8n.io](https://n8n.io) (easiest option, no server needed)
- **Self-hosted** — install n8n on your own server or VPS via Docker or npm

### 2. Twelve Data Community Node for n8n *(Required)*
This workflow uses the official **Twelve Data community node** for n8n. You must install this before importing the workflow, otherwise the Twelve Data nodes will not be recognised.

**Install via npm:**
```
npm i n8n-nodes-twelve-data
```

**Or install directly inside n8n:**
1. Go to **Settings → Community Nodes**
2. Click **Install a community node**
3. Enter `n8n-nodes-twelve-data` and click Install
4. Restart n8n if prompted

**npm package page:** [https://www.npmjs.com/package/n8n-nodes-twelve-data](https://www.npmjs.com/package/n8n-nodes-twelve-data)

&gt; ⚠️ **Important:** Install the community node *before* importing the workflow JSON. If you import first, the Twelve Data nodes will show as unrecognised and you will need to re-link them manually.

### 3. Twelve Data API Key *(Required)*
All market data in this workflow is powered by **Twelve Data** — one of the most comprehensive financial data APIs available.

👉 **Get your API key here: [https://twelvedata.com/?ref=Z6yTIDU](https://twelvedata.com/?ref=Z6yTIDU)**

**Free plan** — You can get started immediately at no cost. The free tier gives you access to real-time quotes and basic time series data, which means core stock analysis and comparisons will work out of the box.

**To unlock the full functionality of this workflow** — including fundamentals, income statements, statistics, sector analysis with complete valuation metrics, and the full risk calculator — you will need one of Twelve Data's paid plans:

| Plan | Price | Best For |
|---|---|---|
| **Grow** | $19.99/month | Profile endpoint, sector and comparison tools |
| **Pro** ⭐ Recommended | $49.99/month | Full fundamentals, statistics, all 5 tools at full power |
| **Ultra** | $99.99/month | High-volume usage, real-time WebSocket data |

👉 **Upgrade here: [https://twelvedata.com/?ref=Z6yTIDU](https://twelvedata.com/?ref=Z6yTIDU)**

### 4. OpenAI or OpenRouter API Key *(Required)*
The AI analysis engine uses GPT-4o (via OpenAI directly or OpenRouter). You need an active API key from either:
- **OpenAI** — [platform.openai.com](https://platform.openai.com)
- **OpenRouter** — [openrouter.ai](https://openrouter.ai) (supports multiple models including o3-mini)

### 5. Telegram Bot Token *(Required)*
The bot communicates through Telegram. You need to create a free Telegram bot:
1. Open Telegram and search for **@BotFather**
2. Send `/newbot` and follow the prompts
3. Copy the bot token provided — you'll need it during setup

***

## Setup Instructions

### Step 1 — Install the Twelve Data Community Node
**Do this first — before importing the workflow.**

Inside n8n:
1. Go to **Settings → Community Nodes**
2. Click **Install a community node**
3. Enter `n8n-nodes-twelve-data` and confirm
4. Restart n8n if prompted

Or via terminal if self-hosting:
```
npm i n8n-nodes-twelve-data
```

📦 npm page: [https://www.npmjs.com/package/n8n-nodes-twelve-data](https://www.npmjs.com/package/n8n-nodes-twelve-data)

### Step 2 — Import the Workflow
1. Open your n8n instance
2. Go to **Workflows → Import from file**
3. Select the `TwelveData_Pro_Analyst_n8n.json` file
4. All 5 workflows will be imported together

### Step 3 — Connect Your Twelve Data API Key
1. In n8n, go to **Credentials → New Credential**
2. Search for **Twelve Data API**
3. Paste your API key from [https://twelvedata.com/?ref=Z6yTIDU](https://twelvedata.com/?ref=Z6yTIDU)
4. Save as `Twelve Data account`
5. Open each of the 5 workflows and confirm all Twelve Data nodes are linked to this credential

### Step 4 — Connect Your OpenAI / OpenRouter Key
1. Go to **Credentials → New Credential**
2. Search for **OpenAI** or **OpenRouter**
3. Paste your API key and save
4. Open the **Stock Analysis Tool** workflow and link the `AI Analysis` node to this credential
5. Open the **TwelveData Pro Analyst** workflow and link the `Analytics_Model` node

### Step 5 — Connect Your Telegram Bot
1. Go to **Credentials → New Credential**
2. Search for **Telegram API**
3. Paste your bot token from BotFather and save
4. Open the **TwelveData Pro Analyst** workflow
5. Link both the `Telegram Trigger` node and the `Send Response` node to this credential

### Step 6 — Activate the Workflow
1. Open the **TwelveData Pro Analyst** workflow (the main one)
2. Toggle **Active** in the top right
3. Open Telegram, find your bot, and send it a message

&gt; ⚠️ **Important:** Only the main **TwelveData Pro Analyst** workflow needs to be activated. The 4 sub-workflows (Stock Analysis Tool, Stock Comparison Tool, Sector Analysis Tool, Risk Calculator Tool) are called automatically and should remain **inactive** — do not activate them manually.

***

## How to Use It

Once your bot is active, simply message it in plain English. Here are example prompts:

**Single stock analysis:**
- *"Analyse AAPL"*
- *"What do you think about Tesla?"*
- *"Give me a full breakdown of NVDA"*

**Stock comparison:**
- *"Compare AAPL and MSFT"*
- *"AAPL vs TSLA vs GOOGL"*
- *"Compare Apple, Amazon and Meta"*

**Sector analysis:**
- *"How is the Technology sector performing?"*
- *"Give me a Healthcare sector report"*
- *"What's happening in Energy?"*

**Risk analysis:**
- *"What's the risk on TSLA?"*
- *"Calculate risk for NVDA with a $10,000 position"*
- *"How volatile is Tesla?"*

On your **very first message**, Ade will introduce herself and ask for your name. From that point on, she remembers your conversation and personalises every response — each user gets their own private memory session.

***

## API Plan Feature Matrix

| Feature | Free Plan | Grow ($19.99) | Pro ($49.99) | Ultra ($99.99) |
|---|---|---|---|---|
| Real-time quotes | ✅ | ✅ | ✅ | ✅ |
| Stock comparison (basic) | ✅ | ✅ | ✅ | ✅ |
| Technical indicators (RSI, MACD, BBands) | ✅ | ✅ | ✅ | ✅ |
| Company profile & sector data | ❌ | ✅ | ✅ | ✅ |
| Sector analysis tool (full) | ❌ | ✅ | ✅ | ✅ |
| Fundamentals & income statement | ❌ | ❌ | ✅ | ✅ |
| Risk calculator (full metrics) | ❌ | ❌ | ✅ | ✅ |
| Deep stock analysis (AI report) | Partial | Partial | ✅ Full | ✅ Full |
| API calls per day | 800 | 800 | 3,000 | 10,000 |

👉 **Get your Twelve Data API key: [https://twelvedata.com/?ref=Z6yTIDU](https://twelvedata.com/?ref=Z6yTIDU)**

***

## Frequently Asked Questions

**Do I need coding experience?**
No. The workflow is fully pre-built. You only need to install the community node, connect your API keys and activate the bot — everything else is done for you.

**Do I need to install anything extra for n8n?**
Yes — one thing. You must install the `n8n-nodes-twelve-data` community node before the workflow will function. This takes less than a minute inside n8n's settings, or one command (`npm i n8n-nodes-twelve-data`) if you are self-hosting.

**Can multiple people use the bot at the same time?**
Yes. Each Telegram user gets their own independent memory session. Ade will remember each person's name and conversation history separately.

**What happens if I'm on the free Twelve Data plan?**
The bot will still work for basic stock analysis and comparisons. If a feature requires a paid endpoint, Ade will acknowledge the limitation honestly rather than making up data, and will suggest upgrading your plan.

**Can I use this with n8n Cloud?**
Yes, n8n Cloud is fully supported and is the easiest way to get started without managing your own server.

**Can I customise Ade's persona or responses?**
Absolutely. The AI agent system prompt is fully editable inside the `TwelveData Pro Analyst` workflow. You can change her name, tone, branding, and analytical framework to suit your needs.

***

## Support

For questions about this workflow, contact: **admin@hgrayai.agency**

For questions about your Twelve Data API plan: [https://twelvedata.com/?ref=Z6yTIDU](https://twelvedata.com/?ref=Z6yTIDU)

For the Twelve Data n8n community node: [https://www.npmjs.com/package/n8n-nodes-twelve-data](https://www.npmjs.com/package/n8n-nodes-twelve-data)

***

*⚠️ Disclaimer: This workflow is for informational and educational purposes only. Nothing produced by this tool constitutes financial advice. Always conduct your own research and consult a qualified financial adviser before making investment decisions.*

## 🔗 Nodes Used

Telegram, Telegram Trigger, Execute Workflow Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
