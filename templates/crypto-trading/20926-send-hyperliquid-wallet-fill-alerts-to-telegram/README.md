# 📈 Send Hyperliquid wallet fill alerts to Telegram

> ⚡ **0 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
Monitor one public Hyperliquid wallet every five minutes and receive Telegram summaries of new fills. Alerts show recent trades and perpetual position changes, with a link to inspect the same address in the Market Depth Lab wallet tracker.

## How it works
1. Runs every five minutes (or manually in preview mode).
2. Loads the target Hyperliquid wallet address, a label, and the Telegram chat ID, then validates inputs and restores the last saved checkpoint when available.
3. Queries the Hyperliquid Info API (userFillsByTime) for fills within a bounded time window that includes a small overlap to catch late-indexed records.
4. Validates and deduplicates returned fills, filters out anything already seen or older than the baseline, and formats up to six of the latest fills into a Telegram HTML message.
5. Sends one Telegram alert per batch only during scheduled monitoring, after the first silent baseline run. Manual preview never sends messages. Each alert displays at most six fills; any additional fills are counted and marked as processed.
6. Advances the checkpoint only after confirmed Telegram delivery or a successful check with no alert needed. Workflow static data persists after successful active/published production executions; manual previews do not change stored state.

## Setup
1. Enter the public Hyperliquid wallet address (0x…), a label, and your Telegram chat ID in the Wallet settings.
2. Create/select Telegram bot credentials in n8n and ensure the bot can post to the target chat (and use the correct chat ID).
3. Run Preview manually and inspect the final node output. This reads recent fills without sending a message or saving state. When ready, activate scheduled monitoring: the first successful scheduled run is silent. Check execution history and avoid concurrent runs.

## Requirements
- An n8n instance, a public Hyperliquid master-account or subaccount address, and a Telegram bot credential with permission to message the destination chat. No wallet connection, private key, or Hyperliquid trading API key is needed.

## Customization
- Change the wallet address and label in Wallet settings. Use one lower-volume wallet per workflow and keep the five-minute interval with sequential executions. Connect an n8n error workflow if you need failure notifications.

## Additional info
Created by Market Depth Lab. Each alert opens the monitored address in the [Market Depth Lab Hyperliquid Wallet Tracker](https://marketdepthlab.com/tools/hyperliquid-wallet-tracker/).

Scope: returned fills only, not deposits, withdrawals, funding, or a complete portfolio. Spot pair codes and returned HIP-3 prefixes are preserved.

Static-data persistence is experimental. Interrupted deliveries can cause duplicate alerts; fills arriving after the overlap window may be missed. This version does not paginate: responses of 500 or more fills, malformed responses, or checkpoint gaps over 24 hours stop with an error. It is designed for lower-volume wallets, not high-frequency or concurrent monitoring.

[Hyperliquid Info API documentation](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint) · [n8n static-data documentation](https://docs.n8n.io/code/cookbook/builtin/get-workflow-static-data/)

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
