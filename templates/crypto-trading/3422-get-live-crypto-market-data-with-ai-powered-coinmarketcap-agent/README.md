# 📈 Get live crypto market data with AI-powered CoinMarketCap agent

> ⚡ **8,320 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**Access real-time cryptocurrency prices, market rankings, metadata, and global stats—powered by GPT-4o and CoinMarketCap!**  
This modular AI-powered agent is part of a broader CoinMarketCap multi-agent system designed for **crypto analysts, traders, and developers**. It uses the **CoinMarketCap API** and intelligently routes queries to the correct tool using AI.

This agent can be used standalone or triggered by a supervisor AI agent for multi-agent orchestration.

---

## **Supported API Tools (6 Total)**  
This agent intelligently selects from the following tools to answer your crypto-related questions:

### 🔍 Tool Summary  
1. **Crypto Map** – Lookup CoinMarketCap IDs and active coins  
2. **Crypto Info** – Get metadata, whitepapers, and social links  
3. **Crypto Listings** – Ranked coins by market cap  
4. **CoinMarketCap Price** – Live prices, volume, and supply  
5. **Global Metrics** – Total market cap, BTC dominance  
6. **Price Conversion** – Convert between crypto and fiat

---

## **What You Can Do with This Agent**  
🔹 Get live prices and volume for tokens (e.g., BTC, ETH, SOL)  
🔹 Convert crypto → fiat or fiat → crypto instantly  
🔹 Retrieve whitepapers, logos, and website links for any token  
🔹 Analyze total market cap, BTC dominance, and circulating supply  
🔹 Discover new tokens and track their CoinMarketCap IDs  
🔹 View the top 100 coins ranked by market cap or volume  

---

## **Example Queries**  
✅ _"What is the CoinMarketCap ID for PEPE?"_  
✅ _"Show me the top 10 cryptocurrencies by market cap."_  
✅ _"Convert 5 ETH to USD."_  
✅ _"What’s the 24h volume for ADA?"_  
✅ _"Get the global market cap and BTC dominance."_  

---

##  AI Architecture  
- **AI Brain**: GPT-4o-mini  
- **Memory**: Session buffer with `sessionId`  
- **Agent Type**: Subworkflow AI tool  
- **Connected APIs**: 6 CoinMarketCap endpoints  
- **Trigger Mode**: Executes when called by a supervisor (via `message` and `sessionId` inputs)

---

## **Setup Instructions**  
1. **Get a CoinMarketCap API Key**  
   - Register here: [https://coinmarketcap.com/api/](https://coinmarketcap.com/api/)  
2. **Configure Credentials in n8n**  
   - Use `HTTP Header Auth` with your API key for each connected endpoint  
3. **Connect This Agent to a Supervisor Workflow (Optional)**  
   - Trigger this agent using `Execute Workflow` with inputs `message` and `sessionId`  
4. **Test Prompts**  
   - Try asking: _“Convert 1000 DOGE to BTC”_ or _“Top 5 coins in EUR”_

---

## Included Sticky Notes  

**Crypto Agent Guide** – Agent overview, node map, and endpoint details  

**Usage Instructions** – Step-by-step usage and sample prompts  

**Error Handling & Licensing** – Troubleshooting and IP rights

---

## ✅ Final Notes  
This agent is part of the **CoinMarketCap AI Analyst System**, which includes multiple specialized agents for cryptocurrencies, exchanges, community data, and DEX insights. Visit [my Creator profile](https://n8n.io/creators/don-the-gem-dealer/) to find the full suite of tools.

---

**Get smarter about crypto—analyze the market in real time with AI and CoinMarketCap.**

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, OpenAI Chat Model, Simple Memory, HTTP Request Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
