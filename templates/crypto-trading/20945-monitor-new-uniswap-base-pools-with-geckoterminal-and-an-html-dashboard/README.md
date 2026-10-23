# 📈 Monitor new Uniswap Base pools with GeckoTerminal and an HTML dashboard

> ⚡ **2 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick overview
This workflow monitors newly created Uniswap V3 pools on Base using the GeckoTerminal API, stores pool metrics and a simple risk score in an n8n Data Table, and serves an auto-refreshing HTML dashboard via a webhook.

## How it works
1. Runs manually to fetch the latest Base new-pools feed from the GeckoTerminal API.
2. Parses each pool’s name and metrics (liquidity, 24h volume, and 24h transaction count), computes a risk score and risk level, and filters out major-token pairs and pools below the liquidity threshold.
3. Stores the resulting pool records in an n8n Data Table for later display.
4. Receives a webhook request for the dashboard page.
5. Loads all stored pool records from the n8n Data Table, deduplicates and sorts them by creation time, and calculates summary stats (total, last-hour count, and risk distribution).
6. Returns an HTML dashboard (auto-refreshing every 30 seconds) that shows the latest pool cards and links each pool to its GeckoTerminal page.

## Setup
1. Create an n8n Data Table (for example, "new_pools_official") with the columns used by the workflow (pool address, token symbols/addresses, fee tier, liquidity, 24h volume, tx count, created_at, risk fields, and network).
2. In the Data Table nodes, select your Data Table for both storing new pools and retrieving all pools.
3. Publish the workflow and open the webhook URL at `/webhook/new-pools-dashboard` (prepend your n8n domain) to view the live dashboard.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
