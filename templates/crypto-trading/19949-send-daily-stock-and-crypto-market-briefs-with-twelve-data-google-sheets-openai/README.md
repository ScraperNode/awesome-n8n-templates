# 📈 Send daily stock and crypto market briefs with Twelve Data, Google Sheets, OpenAI, Gmail and Telegram

> ⚡ **21 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs each morning (or manually) to generate a daily market brief by pulling stock price history from Twelve Data, scoring Google News headlines with an OpenAI-compatible model, adding CoinGecko crypto data, saving scores to Google Sheets, and sending an HTML report via Gmail plus a Telegram digest.

## How it works
1. Runs on a daily schedule at 07:00 (or on manual trigger) and loads your stock tickers, crypto list, and recipient email.
2. Reads prior ticker scores from Google Sheets so the report can calculate day-over-day score changes.
3. For each ticker, fetches 250 daily price bars from Twelve Data and computes technical indicators and signals (for example SMA/EMA, RSI, MACD, Bollinger Bands, ATR, and 52‑week position).
4. Pulls recent headlines for each ticker from Google News RSS and uses an OpenAI-compatible chat model to return a structured sentiment score and short summary based only on those headlines.
5. Combines trend, momentum, sentiment, and volatility into a 0–100 composite score with a BUY/HOLD/AVOID verdict, then waits between tickers to respect free API rate limits.
6. Ranks all tickers, detects verdict changes and indicator events, appends today’s scores back to Google Sheets, and fetches your crypto prices from CoinGecko.
7. Uses an OpenAI-compatible model to write an executive summary, builds a formatted HTML email and compact Telegram message, and sends them via Gmail and Telegram.

## Setup
1. Add your Twelve Data API key by replacing `YOUR_TWELVEDATA_KEY` in the Twelve Data HTTP request URL.
2. Create or connect an OpenAI-compatible credential for the two AI steps (news sentiment scoring and executive summary).
3. Create a Google Sheet with columns `Date, Symbol, Score, Verdict`, then select the document and sheet in both Google Sheets nodes (read history and append today’s scores).
4. Connect a Gmail account and set the watchlist tickers, crypto IDs, and recipient email in the watchlist configuration.
5. Create a Telegram bot, add Telegram credentials, set `YOUR_CHAT_ID`, and ensure the bot can message that chat.

## Additional info
Not financial advice. The BUY / HOLD / AVOID verdicts are a mechanical summary of the computed indicators and news sentiment, produced for research and learning. They are not recommendations to trade. Data comes from free public sources (Twelve Data free tier, Google News RSS, CoinGecko) and can be delayed or incomplete. Always do your own research.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
