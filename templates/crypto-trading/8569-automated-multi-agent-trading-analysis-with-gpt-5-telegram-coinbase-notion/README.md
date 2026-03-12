# 📈 Automated multi-agent trading analysis with GPT-5, Telegram, Coinbase & Notion

> ⚡ **2,651 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## 🚀 Overview  
This modern n8n workflow implements a **multi-agent trading engine** that orchestrates valuation, sentiment, fundamentals, technicals, and macro analyses to generate a single portfolio action with built-in risk controls. It integrates Telegram for live commands, fetches market data, fans out to expert LLM agents, applies position limits via a Risk Manager, executes orders, logs to Notion, and sends a summary back to Telegram.  

## 🔧 What It Does  
- **Telegram Trigger** listens for ticker commands and context inputs 📲  
- **Market Data Node** fetches live prices and exchange rates from an API (no hardcoded keys) 🔗  
- **LLM Agents** run parallel analyses: valuation, sentiment, macro, fundamentals, technicals 🌐  
- **Risk Manager** enforces max position sizes, stop-loss limits, and confidence thresholds ⚖️  
- **Portfolio Manager** aggregates signals into a final BUY/SELL/HOLD decision with allocation % 📊  
- **Execute Order** sends trade requests via HTTP Request 🔒  
- **Log to Notion** writes a full audit trail for compliance 📓  
- **Telegram Output** posts a concise report with signals, risk notes, and final decision 📤  

## 💡 Why It’s Useful  
This template illustrates a **modular “investment committee”** architecture that is easy to extend, swap agents, and maintain. It follows n8n’s best practices for template submissions: sticky-note documentation, placeholder credentials, markdown descriptions, and clear H2 headings.  

## 🔑 Prerequisites  
- Telegram Bot credentials configured in n8n  
- Exchange or data API credentials stored as n8n Credentials (no inline keys)  
- OpenAI (or other LLM) API credential  
- Notion integration credentials  

## 🛠️ How to Use  
1. Import the JSON into n8n and open the canvas.  
2. Read each **Sticky Note** for node-by-node setup tips and rate-limit guidance 🗒️  
3. Configure credentials via the n8n Credentials Manager 🔐  
4. Test each branch (data fetch, agents, risk logic) in isolation before enabling order execution ✅  

## 📐 Architecture Layers  
- **Trigger**: Telegram Trigger →  
- **Data**: HTTP Request →  
- **Analysis**: Parallel LLM Agents →  
- **Risk**: Risk Manager →  
- **Decision**: Portfolio Manager →  
- **Action**: Execute Order, Log to Notion, Send Telegram summary  

## 🔒 Security & Maintenance  
All API keys are stored securely as credentials. Sticky Notes document required scopes, retry strategies, and error-handling paths to ensure observability and safe testing.  

Enjoy building and customizing your own AI-powered hedge-fund workflow!

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
