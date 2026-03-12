# 📈 Daily ETH wallet monitoring with Etherscan, CoinGecko pricing & Discord alerts

> ⚡ **148 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Daily ETH Wallet Balance & Holdings Alerts

Never miss a snapshot of your (or others) ETH wallet, this workflow polls your wallet on a schedule, fetches balances and current ETH prices, formats a concise summary, and posts it to Discord (or email/Slack/Telegram). Easy to customize to track multiple wallets, tokens, or alert on thresholds.

### How it works
1. **Schedule Trigger** - Runs on your cadence (default: morning and evening).  
2. **Query Blockchain** - Calls Etherscan (or another API) to get wallet balances and token holdings.  
3. **Process Balances** - Calculates totals and converts values using CoinGecko price lookups.  
4. **Format Summary** - Creates a readable report (holdings, USD value, % change, etc.).  
5. **Deliver Alert** - Sends the snapshot to Discord (swap in Slack/Telegram/email/webhook as needed).

### Quick setup notes
- Add your **Etherscan** (or preferred) API key and **CoinGecko** key where indicated.  
- Set the wallet address(es) in the code node(s) supports one or many.  
- Adjust the schedule, number of snapshots, and message format to suit your needs.

### Use cases / variations
- **Single-wallet daily snapshot** - Quick morning/evening balances.  
- **Multi-wallet portfolio digest** - Aggregate several addresses into one report.  
- **Token breakdown** - Show ERC-20 token amounts and fiat values.  
- **Price/threshold alerts** - Ping when ETH or a token crosses a set price or % change.  
- **On-demand reporting** - Trigger via webhook or command to pull a live snapshot.  
- **NFT & token inventory** - Report owned collections and token counts.  
- **Tax / bookkeeping exports** - Add CSV output for record-keeping.

### Why use this
- **Hands-off monitoring** - automated snapshots replace manual checks.  
- **Customizable** - swap APIs, add wallets, or change channels in minutes.  
- **Actionable** - get the data you need (holdings, fiat value, alerts) where you already work.

## 🔗 Nodes Used

HTTP Request, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
