# 📈 Stock technical analysis with Google Gemini

> ⚡ **5,087 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

The purpose of this workflow, "Sell: Stock Vision," is to create an AI-powered technical analysis agent capable of analyzing financial charts for equity stocks and cryptocurrencies. This workflow provides users with actionable insights into market trends, price movements, candlestick patterns, and technical indicators to support informed trading decisions.

**How It Works**

- **Integration with TradingView:** The workflow uses the Chart-Img.com API to fetch detailed financial charts for the specified stock or cryptocurrency.
- **AI-Powered Analysis:** The workflow employs advanced AI models, including Google's Gemini Chat Model, to analyze the retrieved charts for candlestick patterns, support/resistance levels, and technical indicators like MACD and RSI.
- **News and Sentiment Analysis:** By integrating with SerpAPI, the workflow gathers relevant news about the stock or cryptocurrency to evaluate its potential impact on market movements.
- **Comprehensive Insights:** It provides detailed trading strategies, including buy/sell recommendations, stop-loss levels, and risk-reward evaluations.
- **Continuous Memory:** The AI agent uses buffer memory to retain context for enhanced analysis and continuity.

**Use Case**
This workflow is perfect for traders and analysts who need reliable and AI-powered market analysis to make informed trading decisions efficiently.

**Tutorial**

- Obtain API keys for Chart-Img.com and SerpAPI.
- Configure the workflow in your n8n instance by inputting the required API keys and connecting the nodes.
- Trigger the workflow by providing the stock or cryptocurrency symbol, and let the agent do the rest!

https://youtu.be/9fR4qNMT5LM

## 🔗 Nodes Used

HTTP Request, AI Agent, Simple Memory, SerpApi (Google Search), Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
