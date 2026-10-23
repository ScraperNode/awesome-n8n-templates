# 📈 Send daily AI crypto morning brief with CoinGecko, Google Gemini and Telegram

> ⚡ **21 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily at 8AM to pull crypto market data from CoinGecko and the Fear & Greed Index, generates a short AI-written morning brief with Google Gemini, logs key metrics to Google Sheets, and sends a Telegram brief plus optional volatility alerts.

## How it works
1. Runs every day at 8AM on a schedule.
2. Fetches BTC/ETH/SOL prices and 24h changes from CoinGecko, then pulls the latest Fear & Greed Index, global market stats, and CoinGecko trending coins.
3. Retrieves a 7-day Bitcoin market chart from CoinGecko and passes the collected market context to Google Gemini to generate a concise 5-bullet morning brief.
4. Appends the day’s metrics (prices, changes, Fear & Greed, BTC dominance, and top trending coin) to a Google Sheets “Daily Log” worksheet.
5. Sends a formatted daily morning brief to Telegram, including the AI-generated analysis and the latest market snapshot.
6. Checks for threshold conditions (BTC ±5% in 24h, Fear & Greed <20 or >80, and ETH or SOL ±10% in 24h) and posts the relevant Telegram alerts.
7. When an altcoin spike is detected, also appends a record to a Google Sheets “High Activity Days” worksheet before finishing.

## Setup
1. Add Google Sheets OAuth credentials and set the correct spreadsheet ID and worksheet names for “Daily Log” and “High Activity Days.”
2. Add Telegram bot credentials and replace the chatId values with your target Telegram chat or channel ID.
3. Add Google Gemini (PaLM) credentials and ensure the AI Agent node is connected to the Gemini chat model you want to use.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
