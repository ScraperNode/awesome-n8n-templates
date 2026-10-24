# 📈 Send daily AI crypto market insights with Google Gemini to Telegram

> ⚡ **1,635 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## **Daily Crypto AI Market Insight to Telegram**

This workflow generates a daily AI-powered crypto market insight and sends it to Telegram using Binance public market data, the Crypto Fear & Greed Index, and Google Gemini.

It fetches BTC/USDT daily OHLCV data, calculates technical indicators, builds a structured analysis payload, asks Gemini for a buy/hold/sell confidence breakdown, and delivers the result as a clean Telegram report.

It is useful for traders, builders, and crypto enthusiasts who want an automated daily technical summary without manually checking charts.

## **Common use cases:**

- Send a daily BTC market insight to your Telegram
- Monitor crypto technical indicators automatically
- Build a personal AI crypto analyst bot
- Create a lightweight daily trading signal workflow
- Learn how to combine market data, technical indicators, LLMs, and Telegram in n8n

## **How it works**

- Starts from a Schedule Trigger, which you can customize
- Sets the trading pair, for example `BTCUSDT`
- Fetches 300 daily OHLCV candles from Binance public API
- Normalizes Binance candle data into readable fields
- Fetches the latest market price and merges it into the latest candle
- Fetches the Crypto Fear & Greed Index from Alternative.me
- Calculates EMA(20), EMA(50), EMA(100), RSI(14), MACD histogram, ADX(14), +DI, and -DI
- Builds a structured technical payload
- Sends the payload to Google Gemini
- Parses Gemini’s response into structured JSON
- Formats the result into a Telegram message
- Sends the AI-generated insight to Telegram

## **Setup steps**

- Choose your trading pair in the **Set Trading Pair** node
- Connect your Google Gemini credentials
- Connect your Telegram credentials
- Set your Telegram chat ID in the Telegram node
- Adjust the Schedule Trigger if you want a different run time
- Test the workflow manually
- Activate the workflow

## **Notes**

This workflow uses Binance public API data and does not require a Binance API key.
The AI insight is generated only from the provided technical payload and should not be treated as financial advice.

## **Need Help?**  
Have questions or want to connect? Reach me on [LinkedIn](https://www.linkedin.com/in/athaahsan/).

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
