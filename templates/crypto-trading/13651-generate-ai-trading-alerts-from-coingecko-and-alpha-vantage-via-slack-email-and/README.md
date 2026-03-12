# 📈 Generate AI trading alerts from CoinGecko and Alpha Vantage via Slack, email and SMS

> ⚡ **480 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Automates real-time market monitoring, technical analysis, AI-powered signal generation for cryptocurrencies (and stocks), filters high-confidence trades, and delivers actionable alerts via multiple channels.

## Good to Know
- Runs **every 5–30 minutes** (configurable trigger) to catch fresh market opportunities
- Pulls **real-time price data** from multiple crypto/stock sources in parallel
- Calculates popular **technical indicators** (RSI, MACD, Moving Averages, etc.)
- Uses an **AI model** (likely Grok/xAI, OpenAI, or similar) to interpret indicators and generate buy/sell signals with confidence scores
- Applies **multi-layer filtering** to reduce noise (thresholds, validation rules)
- Stores signals in a **database**, logs execution history, and sends notifications
- Supports **email**, **Telegram**, **Discord**, **SMS** (via Twilio), or **trading execution** webhooks
- Saves significant time compared to manual chart watching

## How It Works

### 1. Trigger
- **Schedule Trigger** or **Manual Trigger** (every 5–30 minutes)
- Optional: **Market Hours / Kill-zone** filter (e.g. avoid low-volume periods)
- Can be webhook-based for on-demand runs

### 2. Fetch & Prepare Data
- Fetches **real-time / recent OHLCV data** for a watchlist of cryptocurrencies (and possibly stocks)
- Sources: CoinGecko, Binance, Alpha Vantage, CoinMarketCap, Bybit, Kraken, etc. (multiple in parallel)
- Combines data from different APIs
- Prepares structured dataset (candles, volume, current price)
- Calculates **technical indicators** in parallel or via Code node / community nodes (e.g. RSI(14), MACD, EMA/SMA crossovers, Bollinger Bands, etc.)

### 3. Analysis & Signal Generation
- Sends prepared market data + calculated indicators to an **AI model**
- Prompt instructs the model to:
  - Analyze current market structure
  - Evaluate indicator confluence
  - Generate **Buy / Sell / Hold** signal
  - Assign **confidence score** (e.g. 0–100%)
  - Provide short reasoning
- Optional: Rule-based pre-filter (e.g. only proceed if RSI &lt; 30 or MACD crossover)

### 4. Validate, Alert & Store
- **Filters** signals: minimum confidence threshold, no-duplicate check, max signals per run, etc.
- **Validates** against additional rules (e.g. volume spike, no recent opposite signal)
- **Stores** signal in database (PostgreSQL, Supabase, Airtable, Google Sheets, etc.)
  - Includes: timestamp, symbol, signal type, confidence, price, indicators snapshot, AI reasoning
- **Logs** full execution trace
- **Sends alerts**:
  - Email notification
  - Telegram / Discord message (with formatting)
  - SMS (Twilio)
  - Webhook to trading bot / execution system
  - Optional: Push to tradingview alert or auto-execute (paper/live)

## Data Sources
- **Market Data APIs** — CoinGecko, Binance, Alpha Vantage, CoinMarketCap, etc.
- **Technical Indicators** — Calculated via Code node, community nodes (e.g. phoenix indicators), or external libraries
- **AI Model** — Grok (xAI), OpenAI (GPT-4o), Claude, Gemini, or local LLM
- **Notification Channels** — Email (Gmail/SMTP), Telegram, Discord, Twilio, webhook
- **Storage** — Google Sheets, PostgreSQL, Supabase, Notion, Airtable

## How to Use
1. **Import** the workflow JSON into your n8n instance
2. **Configure credentials**:
   - API keys for market data providers (Alpha Vantage, CoinGecko Pro, Binance, etc.)
   - AI provider (Grok API key, OpenAI key, etc.)
   - Notification services (Telegram bot token, email SMTP, Twilio, etc.)
   - Database connection if used
3. **Set your watchlist** — edit the symbols in the fetch node(s)
4. **Tune the schedule** — change interval in the trigger node
5. **Customize AI prompt** — adjust in the AI node for more aggressive/conservative signals
6. **Set filters** — confidence threshold, max alerts per cycle, etc.
7. **Test manually** — use Execute Workflow button with sample data
8. **Activate & monitor** — check Executions tab for logs

## Requirements
- n8n (self-hosted or cloud)
- API keys for at least one market data provider
- AI API access (Grok, OpenAI, etc.)
- Notification credentials (Telegram bot, email account, etc.)
- Optional: Database for persistent signal history

## Customizing This Workflow
- Add more **exchanges/sources** for better data redundancy
- Include **on-chain metrics** (whale alerts, funding rates) via additional APIs
- Switch AI model or fine-tune prompt for your trading style
- Add **risk management** rules (position sizing, stop-loss levels)
- Integrate **auto-trading** via exchange API (Binance, Bybit, Alpaca, etc.)
- Create **dashboard** output (Google Sheets + Looker Studio / Grafana)
- Add **backtesting mode** using historical data
- Implement **blackout periods** or news filter to avoid high-impact events

## 🔗 Nodes Used

Send Email, HTTP Request, Postgres, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
