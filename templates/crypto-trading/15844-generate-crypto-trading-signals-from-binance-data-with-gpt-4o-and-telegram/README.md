# 📈 Generate crypto trading signals from Binance data with GPT-4o and Telegram

> ⚡ **585 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

Automated crypto TA scanner that calculates 15+ indicators from Binance data, uses AI to generate objective BUY/SELL/HOLD signals with entry/SL/TP levels, and delivers alerts via Telegram with Google Sheets logging.

### Who is this for?
 
Crypto traders and enthusiasts who want automated, objective technical analysis of their watchlist — without manually checking charts or relying on paid signal groups. Works for both beginners (just follow the signals) and experienced traders (use as a second opinion alongside your own analysis).
 
### What it does
 
This workflow runs every 4 hours and automatically:
 
1. **Reads your watchlist** from Google Sheets — add or remove coins anytime, no workflow changes needed
2. **Fetches real-time market data** from Binance public API (4H klines, daily klines, 24h ticker, order book depth) — no Binance API key required
3. **Calculates 15+ technical indicators natively in JavaScript** — RSI-14, EMA20/50, full MACD (line + signal + histogram + crossover detection), Bollinger Bands (width + position %), buy/sell volume ratio, candlestick pattern recognition (Hammer, Shooting Star, Doji, Three White Soldiers, Three Black Crows), and price structure analysis. No external TA library or paid API needed.
4. **Analyzes with AI using a structured 5-step scoring system** — the prompt forces the AI to list all bearish signals, all bullish signals, assess conflicts, evaluate reliability based on volume, then conclude. Scoring starts from 5 (neutral) with strict rules: +1 per confirming signal, −0.5 per conflict, automatic HOLD when signals are ambiguous.
5. **Returns actionable trading signals** — BUY/SELL/HOLD with entry price, stop-loss (2–5%), take-profit (min 1:2 R:R), confidence score, risk level, and a list of any conflicting signals
6. **Sends formatted alerts to Telegram** (only BUY/SELL — no HOLD spam) and **logs all results to Google Sheets** for tracking history
### Key features that make this different
 
- **Single self-contained workflow** — no sub-workflows or external dependencies to set up. Import one file and you're ready.
- **All TA computed in native JavaScript** — RSI, EMA, MACD, Bollinger Bands, volume analysis, and candlestick patterns are calculated inside Code nodes. Zero reliance on third-party TA APIs.
- **Multi-timeframe analysis** — uses 1D candles for macro trend context (trend direction, EMA slope, daily RSI) and 4H candles for primary trading signals. The AI is instructed to use daily trend as context without letting it override 4H evidence.
- **Anti-bias prompt engineering** — the AI prompt includes explicit no-entry rules (auto HOLD on low volume + weak patterns, balanced signals, or negative MACD without crossover), confidence caps when signals conflict, and mandatory risk escalation when daily RSI is overbought.
- **Candlestick pattern recognition** — detects both single-candle patterns (Hammer, Shooting Star, Doji) and 3-candle patterns (Three White Soldiers, Three Black Crows, Hammer After Decline, Star After Rally).
- **Order book pressure** — analyzes top 5 bid/ask levels to gauge real-time buying vs selling pressure.
- **Google Sheets as both input and output** — watchlist tab for easy coin management, results tab for historical tracking with appendOrUpdate (upsert by symbol).
### How to set up
 
1. Create a Google Sheet with two tabs:
   - `watchlist` — add a `symbol` column with your coins (e.g., BTCUSDT, ETHUSDT, SOLUSDT)
   - `chatgpt` — this will be auto-populated with analysis results
2. Import the workflow into n8n
3. Connect three credentials:
   - **Google Sheets** (OAuth2) — for reading watchlist and writing results
   - **OpenAI** — GPT-4o recommended for best analysis quality
   - **Telegram** — create a bot via @BotFather and set your chat ID
4. Paste your Google Sheet document ID into both Google Sheets nodes
5. Set the Telegram chat ID in the "Send Telegram Alert" node
6. Activate — the workflow runs every 4 hours automatically
### Requirements
 
- OpenAI API key (GPT-4o recommended, GPT-4o-mini also works)
- Google Sheets OAuth2 credentials
- Telegram Bot Token (free via @BotFather)
- **No Binance API key needed** — all data comes from public endpoints
### Customization ideas
 
- Change the schedule trigger interval (e.g., every 1 hour for more frequent scans)
- Adjust the kline interval in the HTTP nodes (e.g., 1h instead of 4h)
- Modify the AI scoring rules in the "Build AI Prompt" node to match your risk tolerance
- Add more coins to your Google Sheets watchlist at any time
- Replace OpenAI with another LLM provider by updating the AI node

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
