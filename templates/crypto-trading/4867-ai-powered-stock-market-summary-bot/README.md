# 📈 AI-powered stock market summary bot

> ⚡ **30,472 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

An automated n8n workflow that analyzes stocks using RSI and MACD, summarizes insights with OpenAI, and sends a Slack-ready market update every hour.

This workflow:
Runs hourly from 6:30 AM to 2:30 PM PT, Mon–Fri
Checks if the U.S. stock market is open using Alpaca’s /clock API
Pulls daily stock bars for a list of tickers via Alpaca’s /v2/stocks/bars
Calculates RSI and MACD using a Python code node
Categorizes each stock as Buy / Hold / Sell
Uses OpenAI Assistant to summarize the results in Slack markdown
Sends the message to a specific Slack user or channel

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
