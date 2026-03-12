# 📈 CoinMarketCap telegram price bot

> ⚡ **6,546 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Get real-time cryptocurrency prices directly in Telegram!** This workflow integrates **CoinMarketCap API** with **Telegram**, allowing users to request live crypto prices simply by sending a message to the bot. Ideal for **crypto traders, analysts, and enthusiasts** who need quick and easy access to market data.  

## **How It Works**  
1. A **Telegram bot** listens for user input (e.g., "BTC" for Bitcoin).  
2. The workflow sends a request to the **CoinMarketCap API** to fetch the latest price.  
3. The response is processed using an **AI-powered language model (GPT-4o-mini)** for structured messaging.  
4. The workflow logs session data using a **memory buffer** for better response tracking.  
5. The latest price is **sent back to the user via Telegram**.  

## **Set Up Steps**  
1. **Create a Telegram Bot**  
   - Use [@BotFather](https://t.me/BotFather) on Telegram to create a bot and obtain an API token.  
2. **Get a CoinMarketCap API Key**  
   - Sign up at [CoinMarketCap](https://coinmarketcap.com/api/) and retrieve your API key.  
3. **Configure API Credentials in n8n**  
   - Add the CoinMarketCap API key under **HTTP Header Auth**.  
   - Add your Telegram bot token under **Telegram API credentials**.  
4. **Deploy and Test**  
   - Send a message (e.g., "BTC") to your Telegram bot and receive live price updates instantly!  

 **Automate your crypto price tracking today with this powerful Telegram bot!**

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
