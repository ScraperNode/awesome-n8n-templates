# 📈 Trade forex using multi-strategy OANDA orders with Telegram alerts

> ⚡ **156 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow runs every 5 minutes during active forex market hours, pulls recent candle data from OANDA for three technical strategies, and when a BUY/SELL signal appears it sizes the trade from account balance and risk settings, places a market order on OANDA, and sends a Telegram alert.

## How it works
1. Runs every 5 minutes on a schedule and stops execution during the defined weekend market closure window (Fri 18:00 UTC to Sun 21:00 UTC).
2. Sets per-strategy inputs (instrument, timeframe, risk percentage, OANDA account ID, and Telegram destination) for three parallel strategy paths.
3. Fetches the latest 50 candles from the OANDA Instruments Candles endpoint for each strategy’s instrument and timeframe.
4. Calculates trade signals using three algorithms: EMA momentum (EMA9/EMA20 with touch confirmation), RSI breakout with SMA trend filter and ATR-based stops, and MACD crossover.
5. Merges the strategy outputs and filters out any results where the signal is “none”.
6. Retrieves the OANDA account details to get the current account balance, then calculates position size plus stop-loss and take-profit prices from the configured risk and stop distance.
7. Places a MARKET order on OANDA with stop-loss and take-profit attached, and sends a formatted signal/execution message to Telegram.

## Setup
1. Create an OANDA (practice or live) account, generate an API token, and add it in n8n as an HTTP Bearer Auth credential used by the OANDA HTTP Request steps.
2. Create a Telegram bot with @BotFather, add it to your target group/channel, and configure a Telegram API credential in n8n.
3. Update the three input steps with your instrument, timeframes, risk values, OANDA account IDs, and Telegram chat ID/topic thread ID (and switch OANDA URLs to api-fxtrade.oanda.com if you want live trading).

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
