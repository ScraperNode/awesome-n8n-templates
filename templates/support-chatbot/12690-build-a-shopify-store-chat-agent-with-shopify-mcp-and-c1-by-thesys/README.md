# 💬 Build a Shopify store chat agent with Shopify MCP and C1 by Thesys

> ⚡ **40 views** · 💬 [Support Chatbots](../)

## Description

## Build your own Shopify Store Agent with Shopify MCP and C1 by Thesys
This n8n template can setup a embeddable web chat widget for your Shopify store.
### [Check out a working demo of this template here](https://www.thesys.dev/n8n?url=https%3A%2F%2Fasd2224.app.n8n.cloud%2Fwebhook%2F814526b2-6ee5-498a-a2a7-472b0827c139%2Fchat).
### What this workflow does
1. A user sends a message in the **n8n Chat** UI (public chat trigger).
2. The **AI Agent** interprets the request.
3. The agent calls **CoinGecko Free MCP** to fetch market data (prices, coins, trending, etc.).
4. The model responds through **C1 by Thesys** with a **streaming, UI** answer.
### Example prompts you can try right away
Copy/paste any of these into the chat:
- “What are the products in the catalog?”
- "Purchase white shirt"
- "Checkout my cart"
### How it works
1. User sends a prompt
2. C1 model based on prompt will use Shopify MCP to fetch live catalog
3. C1 Model generates a UI Schema Response
4. Schema is rendered as UI using Thesys GenUI SDK on the frontend
### Setup
Make sure you have the following:
#### 1.  Thesys API Key
You’ll need an API key to authenticate and use Thesys services.
Get your key [here](https://console.thesys.dev/keys)
#### 2. Shopify MCP URL
You’ll need the URL of your Shopify Storefront MCP to access the catalog.
For more information, please refer to the [Shopify MCP Docs](https://shopify.dev/docs/apps/build/storefront-mcp/servers/storefront).
### What is C1 by Thesys?
C1 by [Thesys](https://www.thesys.dev/)  is an API middleware that augments LLMs to respond with **interactive UI (charts, buttons, forms)** in real time instead of text.
### Facing setup issues?
#### If you get stuck or have questions:
- #### :speech_bubble: Join the [Thesys Community](https://discord.com/invite/Pbv5PsqUSv)
- #### :e-mail: Email support:  support@thesys.dev

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, MCP Client Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
