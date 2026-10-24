# 📈 Send daily XAUUSD macro signals with TwelveData, GDELT, Groq, OpenAI and Telegram

> ⚡ **75 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs daily to fetch XAU/USD price, DXY, and US 10Y yield data, pulls related US financial news from GDELT and RSS feeds, uses Groq-hosted LLM analysis to generate a BUY/SELL/WAIT bias with probabilities, and sends the brief to Telegram.

## How it works
1. Runs every day at 12:00 via a cron schedule.
2. Fetches the latest DXY and US10Y daily closes from Stooq and the current XAU/USD quote from TwelveData.
3. Collects up to 25 related US-market headlines from GDELT and reads top stories from CNBC and Yahoo Finance RSS.
4. Normalizes and deduplicates the market data and headlines, then flags “high impact” macro topics (for example CPI, NFP, or FOMC) based on keyword detection.
5. Sends the compiled context to a Groq chat model through an AI agent to produce a structured macro bias, indicative signal (BUY/SELL/WAIT), probabilities, and confidence.
6. Formats the AI output into a Telegram-friendly message (including probability bars) and sends it to the configured Telegram chat.

## Setup
1. Add your TwelveData API key and replace `YOUR_TWELVEDATA_API_KEY` in the TwelveData HTTP request URL.
2. Create a Groq credential/connection and select it for the Groq chat model used by the AI agent.
3. Create a Telegram bot, add Telegram credentials in n8n, and replace `YOUR_TELEGRAM_CHAT_ID` in both Telegram send nodes.
4. Review and adjust the cron schedule time if you want the daily report to run at a different hour.

## 🔗 Nodes Used

Cron, HTTP Request, RSS Read, Telegram, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
