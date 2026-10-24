# 📈 Analyze crypto trades and sentiment with Binance, NewsAPI, OpenAI, and Telegram

> ⚡ **55 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow listens for a crypto ticker in Telegram, pulls multi-timeframe candlestick data from Binance and recent headlines from NewsAPI, uses OpenAI to score market sentiment and generate trade ideas, and sends back a TradingView chart image plus a two-part analysis message. 

## How it works
1. Receives a Telegram message containing a coin ticker and converts it into a USDT trading pair symbol (for example, BTC → BTCUSDT).
2. Requests the last 200 candlesticks for five timeframes (1h, 4h, 1d, 1w, 1M) from the public Binance REST API and bundles them into a single payload.
3. Fetches popular crypto news from the last three days via NewsAPI, keeps only the article titles and descriptions, and asks OpenAI to return short-term and long-term sentiment as structured JSON.
4. Generates a TradingView chart snapshot for the Binance symbol using chart-img (with Bollinger Bands, Volume, and RSI), downloads the rendered image, and sends it to the same Telegram chat.
5. Combines the candlestick bundle and the sentiment output and uses an OpenAI-powered agent to produce spot and leveraged trade recommendations in Telegram-friendly formatting.
6. Splits the generated analysis into two messages to stay within Telegram’s message length limit and sends both back to the user.

## Setup
1. Create a Telegram bot with @BotFather, add a Telegram credential in n8n, and select it for the Telegram Trigger and both Telegram send nodes.
2. Add an OpenAI API credential and select it for the sentiment analysis step and the agent’s chat model.
3. Get a NewsAPI key and replace the placeholder apiKey value in the NewsAPI request parameters.
4. Get a chart-img API key and replace the x-api-key header value in both chart-img HTTP requests.
5. Activate the workflow and send your bot a ticker symbol (for example, BTC or ETH).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
