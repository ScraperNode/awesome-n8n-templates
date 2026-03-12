# 📈 Analyze crypto market with CoinGecko: volatility metrics & investment signals

> ⚡ **9,148 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

This n8n template lets you automatically pull market data for the cryptocurrencies from CoinGecko every hour, calculate custom volatility and market-health metrics, classify each coin’s price action into buy/sell/hold/neutral signals with risk ratings, and expose both individual analyses and a portfolio summary via a webhook. It’s perfect for crypto analysts, DeFi builders, or portfolio managers who want on-demand insights without writing a single line of backend code.

---

# 🔧 How it works
- Schedule Trigger fires every hour (or interval you choose).
- HTTP Request (CoinGecko) fetches the top 10 coins by market cap, including 24 h, 7 d, and 30 d price change percentages.
- Split In Batches ensures each coin is processed sequentially.
- Function (Calculate Market Metrics) computes:
  - A weighted volatility score
  - Market-cap-to-volume ratio
  - Price-to-ATH ratio
  - Composite market score

- IF & Switch nodes categorize each coin’s 24 h price action (up &gt;5%, down &gt;5%, high volatility, or stable) and append:
  - signal (BUY/SELL/HOLD/NEUTRAL)
  - riskRating (High/Medium/Low/Unknown)
  - recommendation & investmentStrategy guidance

- NoOp & Merge nodes consolidate each branch back into a single data stream.

- Function (Generate Portfolio Summary) aggregates all analyses into:
  - A Markdown portfolioSummary
  - Counts of buy/sell/hold/neutral signals
  - Risk distribution

- Webhook Response returns the full JSON payload with individual analyses and the summary for downstream consumers.

---

# 👤 Who is it for?
### This workflow is ideal for:

- Crypto researchers and analysts who need scheduled market insights

- DeFi and trading bot developers looking to automate signal generation

- Portfolio managers seeking a no-code overview of top assets

- Automation engineers exploring API integration and data enrichment


---

# 📑 Data Structure
### When you trigger the webhook, you’ll receive a JSON object containing:

- individualAnalyses: Array of { coin, symbol, currentPrice, priceChanges, marketMetrics, signal, riskRating, recommendation }

- portfolioSummary: Markdown report summarizing signals, risk distribution, and top opportunity

- marketSignals: Counts of each signal type

- riskDistribution: Counts of each risk rating

- timestamp: ISO string of analysis time

---

# ⚙️ Setup Instructions
- Import: In n8n Editor → click “Import from JSON” → paste this workflow JSON.

- Configure Schedule: Double-click the Schedule Trigger → set your desired interval (default: every hour).

- Webhook Path: Open the Webhook node → choose a unique path (e.g., /crypto‐analysis) and “POST”.

- Activate: Save and activate the workflow.

- Test:
  - Open the webhook url to other tab or use cURL
```bash
curl -X POST https://&lt;your-n8n-host&gt;/webhook/&lt;path&gt;
```

You’ll get back a JSON payload with both portfolioSummary and individualAnalyses.

---

# 📝 Tips
- Rate-Limit Handling: If CoinGecko returns 429, insert a Delay node (e.g., 500 ms) after the HTTP Request.
- Batch Size: Default is 1 coin at a time; you can bump it to parallelize.
- Customization: Tweak volatility weightings or add new metrics directly in the “Calculate Market Metrics” Function node.
- Extension: Swap CoinGecko for another API by updating the HTTP Request URL and field mappings.

## 🔗 Nodes Used

Function, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
