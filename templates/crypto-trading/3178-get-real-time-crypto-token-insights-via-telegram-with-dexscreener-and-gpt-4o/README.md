# 📈 Get real-time crypto token insights via Telegram with DexScreener and GPT-4o

> ⚡ **14,756 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Instantly access real-time decentralized exchange (DEX) insights directly in Telegram!** This workflow integrates the **DexScreener API** with **GPT-4o-powered AI** and **Telegram**, allowing users to fetch the latest blockchain token analytics, liquidity pools, and trending tokens effortlessly. Ideal for **crypto traders, DeFi analysts, and investors** who need **actionable market data at their fingertips.**  

## **How It Works**  
1. A **Telegram bot** listens for user queries about tokens or trading pairs.  
2. The workflow interacts with the **DexScreener API** *(no API key required)* to fetch real-time data, including:  
   - Token fundamentals (profiles, images, descriptions, and links)  
   - Trending and boosted tokens (hyped projects, potential market movers)  
   - Trading pair analytics (liquidity, price action, volumes, volatility)  
   - Order and payment activity (transaction insights, investor movements)  
   - Liquidity pool depth (market stability, capital flows)  
   - Multi-chain pair comparisons (performance tracking across networks)  
3. An **AI-powered language model (GPT-4o-mini)** enhances responses for better insights.  
4. The workflow **logs session data** to improve user interaction tracking.  
5. The requested **DEX insights are sent back via Telegram** in an easy-to-read format.  

## **What You Can Do with This Agent**  
This AI-driven Telegram bot enables you to:  

✅ **Track trending and boosted tokens** before they gain mainstream traction.  
✅ **Monitor real-time liquidity pools** to assess token stability.  
✅ **Analyze active trading pairs** across different blockchains.  
✅ **Identify transaction trends** by checking paid orders for tokens.  
✅ **Compare market activity** with detailed trading pair analysis.  
✅ **Receive instant insights** with AI-enhanced responses for deeper understanding.  

## **Set Up Steps**  
1. **Create a Telegram Bot**  
   - Use [@BotFather](https://t.me/BotFather) on Telegram to create a bot and obtain an API token.  
2. **Configure Telegram API Credentials in n8n**  
   - Add your Telegram bot token under **Telegram API credentials**.  
3. **Deploy and Test**  
   - Send a query (e.g., `"SOL/USDC"`) to your Telegram bot and receive real-time insights instantly!  

🚀 **Unlock powerful, real-time DEX insights directly in Telegram—no API key required!** 

## 📺 Setup Video Tutorial

Watch the full setup guide on YouTube:

[![Watch on YouTube](https://img.youtube.com/vi/ZzlxBX6tDbk/0.jpg)](https://www.youtube.com/watch?v=ZzlxBX6tDbk)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
