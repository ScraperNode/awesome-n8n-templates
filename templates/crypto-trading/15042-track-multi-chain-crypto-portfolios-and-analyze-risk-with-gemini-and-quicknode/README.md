# 📈 Track multi-chain crypto portfolios and analyze risk with Gemini and QuickNode

> ⚡ **155 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

**This workflow provides a fully automated multi-chain crypto portfolio tracking system powered by AI.**

It fetches wallet balances and gas prices across multiple blockchain networks (e.g., Ethereum, Polygon, and more via QuickNode), retrieves real-time token prices, and calculates total portfolio value in USD.

Using an AI agent, it generates:

- Portfolio insights
- Risk analysis
- Investment suggestions
- Gas fee insights across chains
- Portfolio health score

The final report is formatted and delivered directly to Slack.

⚙️ **Key Features**

🌐 Multi-chain support (Ethereum, Polygon, extendable to any EVM chain via QuickNode)

💰 Real-time USD portfolio valuation

⚖️ Accurate asset allocation (%)

🧠 AI-powered insights, risk & suggestions

⛽ Cross-chain gas fee analysis

📩 Automated Slack alerts

⏰ Daily scheduling support (Cron)

🔌 Powered by QuickNode for reliable blockchain data

🧠 **How It Works**
- Fetch wallet balances across chains (via QuickNode RPC)
- Fetch gas prices for each network
- Retrieve live token prices (ETH, MATIC, etc.)
- Calculate total portfolio value & allocation
- Generate AI-driven insights and recommendations
- Format a clean Slack-ready report
- Send automated alert

⏰ **Scheduling (CORE VALUE)**

Turn this into a Daily AI Portfolio Assistant:

- Add a Cron node
- Run every morning (e.g., 9 AM)
- Get daily portfolio intelligence in Slack

🎯 **Use Cases**

- Multi-chain portfolio tracking
- Daily crypto risk monitoring
- Automated investment insights
- Web3 traders & investors
- DAO treasury monitoring
- Crypto founders & analysts

🔧 **Requirements**

- Wallet address (EVM-compatible chains)
- QuickNode RPC endpoints (Ethereum, Polygon, etc.)
- Slack account (for alerts)
- Price API (CoinGecko / CryptoCompare)

**Sample Output**

![Sample Output.png](fileId:5480)

## 🔗 Nodes Used

HTTP Request, Slack, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
