# 📊 Web3 Wallet Tracker: Sync Balances to GA4, BigQuery, and Discord Whale Alerts

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

## Description

This workflow bridges the gap between anonymous website traffic and on-chain wallet activity. It captures wallet connections via a webhook, enriches the data with real-time USD balances from the Zerion API, and syncs the results to Google Analytics 4, BigQuery, and Discord for immediate action.

This directly helps Web3 marketing and growth teams identify high-value "whales" the moment they connect to your dApp, allowing for real-time monitoring and advanced attribution analysis.

How it works

Video tutorial: https://youtu.be/2_wuTRzRpkg

How it works
Webhook Trigger: Receives the wallet address, GA Client ID, and Session ID from your website via GTM.

Zerion API Integration: Queries the real-time USD balance and individual chain distributions for the connected wallet.

Whale Filtering (Switch): A logic that filters wallets based on a USD threshold (e.g., &gt;$50) to trigger high-priority alerts.

Dynamic Discord Alerts: Sends a formatted message to Discord with a 2-decimal rounded total balance and a dynamic breakdown of assets across all active chains (Base, Ethereum, etc.).

GA4 Push: Sends the wallet_usd_balance as a custom metric to GA4 via the Measurement Protocol to maintain session continuity.

BigQuery Archive: Records the wallet address, hashed ID, and USD balance into a secure table for SQL joining with raw GA4 data

Prerequisites
Zerion API Key: Required for fetching real-time balance and chain data.

Discord Bot Token: Required to send automated whale alerts to your team server.

Google Cloud Project: A project with BigQuery enabled and a JSON Service Account key for secure data insertion.

GA4 Measurement Protocol API Secret: Required to push custom metrics back into active GA4 sessions.

![WEB3 Wallets 1.jpg.jpeg](fileId:4225)

## 🔗 Nodes Used

HTTP Request, Webhook, Discord, Google BigQuery

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
