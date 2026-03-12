# 📈 Send crypto BUY/SELL alerts for top 5 coins with OpenAI, WhatsApp, Telegram, and email

> ⚡ **516 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Overview

This workflow is designed to monitor the Top 5 cryptocurrencies in real-time, calculate trading signals (BUY, SELL, HOLD), and send human-readable alerts through multiple channels. It integrates data fetching, signal processing, AI-generated insights, and multi-channel notifications to provide a professional-grade crypto monitoring solution.

## Setup

1. Schedule the trigger
2. Fetch real-time coin data (CoinGecko, Binance API)
3. Filter only required fields
4. Check each data from loop
5. Add the logic for minimum percentage comparison
6. Use AI for analysis enhanced insights
8. Send the notification only if signal is 'SELL' or  'BUY'

## Key Features

- Real-Time Crypto Monitoring: Continuously evaluates the top 5 cryptocurrencies for trading signals.
- Dynamic Signal Calculation: Generates BUY, SELL, HOLD signals based on 24h price change.
- If price changed below or above 2% the dynamic signal will assign to dedicated coin.
- Signal Change Alerts: Sends notifications only when meaningful changes occur.
- Human-Readable Messaging: Converts numeric signals into readable alerts.
- AI Insights: Provides explanations or trading advice via OpenAI.
- Multi-Channel Delivery: Supports WhatsApp, Telegram, and Email.
- Looped Processing: Each coin is processed independently for accurate alerting.
- Wait / Delay Node: Prevents API rate limit issues and controls alert flow.
## Requirements

1. OpenAI API
2. WhatsApp API
3. Telegram API
4. SMTP Credentials or Gmail Credentials.

## 🔗 Nodes Used

Send Email, HTTP Request, Telegram, WhatsApp Business Cloud, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
