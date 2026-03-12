# 📈 Analyze crypto markets with CoinGecko MCP and C1

> ⚡ **107 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Analyze crypto markets with interactive graphs using CoinGecko and C1 by Thesys

This n8n template   can answer questions about **real-time prices, market moves, trending coins, and token details** with **interactive UI in real time** (cards, charts, buttons) instead of plain text using C1 by Thesys. Data is fetched through the **CoinGecko Free MCP tool**.

### [Check out a working demo of this template here](https://www.thesys.dev/n8n?url=https://www.thesys.dev/n8n?url=https%3A%2F%2Fasd2224.app.n8n.cloud%2Fwebhook%2F51638b0c-7765-4fa8-9b95-a0422128e203%2Fchat).

### What this workflow does
1. A user sends a message in the **n8n Chat** UI (public chat trigger).
2. The **AI Agent** interprets the request.
3. The agent calls **CoinGecko Free MCP** to fetch market data (prices, coins, trending, etc.).
4. The model responds through **C1 by Thesys** with a **streaming, UI** answer.

### Example prompts you can try right away
Copy/paste any of these into the chat:

- “What’s the current price of Bitcoin and Ethereum?”
- “Give me today’s market summary: total market cap, BTC dominance, top gainers/losers.”
- “Compare ETH vs SOL over 30 days with a chart.”

&gt; Note: This template is for information and visualization, not financial advice.


### How it works

1. User sends a prompt
2. C1 model based on prompt will use CoinGecko MCP to fetch live data
3. C1 Model generates a UI Schema Response
4. Schema is rendered as UI using Thesys GenUI SDK on the frontend


### Setup 

Make sure you have the following:

#### 1️⃣  Thesys API Key
You’ll need an API key to authenticate and use Thesys services.

👉 Get your key [here](https://console.thesys.dev/keys)  

### What is C1 by Thesys?
C1 by [Thesys](https://www.thesys.dev/)  is an API middleware that augments LLMs to respond with **interactive UI (charts, buttons, forms)** in real time instead of text.

### Facing setup issues?
#### If you get stuck or have questions:

- #### 💬 Join the [Thesys Community](https://discord.com/invite/Pbv5PsqUSv)  
- #### 📧 Email support:  support@thesys.dev

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
