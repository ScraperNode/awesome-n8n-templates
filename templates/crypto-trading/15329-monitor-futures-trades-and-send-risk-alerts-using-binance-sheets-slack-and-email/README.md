# 📈 Monitor futures trades and send risk alerts using Binance, Sheets, Slack and email

> ⚡ **105 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

# Futures Trade Monitoring & Risk Alert Workflow 
&gt; n8n, Binance API, Google Sheets, Slack, Telegram, Jira & Email


This workflow automates futures trade monitoring by fetching live prices from Binance, calculating trade performance (PnL, ROI, fees), evaluating risk levels and sending alerts across Slack, Telegram, Jira and Email. It also stores trade history and analytics in Google Sheets.

### Quick Implementation Steps

1. [Import workflow into your n8n account](https://n8n.partnerlinks.io/om1efg2qgvwi).
2. Configure trade input (Function or Google Sheets).
3. Connect Slack, Telegram, Jira, Gmail credentials.
4. Set up Google Sheets (Trades & Analytics).
5. Run workflow or enable schedule trigger.


## What It Does

This workflow continuously monitors futures trading positions by combining user-defined trade data with real-time market prices fetched from the Binance public API. It calculates key metrics such as profit/loss (PnL), return on investment (ROI) and transaction fees to evaluate trade performance.

Based on calculated values, the workflow applies a risk scoring mechanism to classify trades into different severity levels. These levels determine how alerts are routed across communication platforms such as Slack, Telegram, Jira and Email.

Additionally, the workflow stores all trade data and daily analytics in Google Sheets, enabling users to track performance trends and maintain a history of trades without manual effort.


## Who It's For

- Crypto futures traders
- Trading teams and analysts
- Risk management teams
- Automation enthusiasts using n8n
- Developers building trading dashboards


## Requirements

- [n8n account (cloud or self-hosted)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Binance public API access (no API key required)
- Google Sheets account
- Slack workspace (optional)
- Telegram bot (optional)
- Jira account (optional)
- Gmail account (optional)


## How It Works & Setup Instructions

### Step 1: Trigger Setup

Configure Schedule Trigger to run at intervals (e.g., every 5 minutes).

### Step 2: Trade Input

Use Function node or Google Sheets to define:

- symbol
- entry_price
- quantity

### Step 3: Fetch Market Data

HTTP Request node calls Binance API:

- Endpoint: `/api/v3/ticker/price`

### Step 4: Merge Data

Merge node combines trade input with live price.

### Step 5: Process Trade Metrics

Function node calculates:

- PnL
- Fees
- Net PnL
- ROI

### Step 6: Filter Valid Trades

IF node ensures valid calculations (e.g., non-null values).

### Step 7: Risk Scoring

Assigns risk score based on loss and position size.

### Step 8: Alert Routing

Switch node routes alerts:

- Low → Slack
- Medium → Slack + Telegram
- High → Slack + Telegram + Jira + Email

### Step 9: Store Trade Data

Google Sheets (Trades):

- Stores trade history

### Step 10: Analytics

Function node generates:

- Daily trade count
- Net PnL summary

### Step 11: Store Analytics

Google Sheets (Analytics):

- Stores summarized data


## How To Customize Nodes

- Modify Function node to change trade input logic.
- Adjust HTTP Request node for different APIs.
- Update PnL logic for leverage or futures margin.
- Modify risk scoring thresholds.
- Customize alert messages per platform.
- Change Google Sheets structure as needed.


## Add-ons (Extend Functionality)

- Duplicate alert prevention using Google Sheets lookup
- Dashboard integration (Google Data Studio / Power BI)
- Auto trade sync via exchange APIs
- Webhook-based real-time alerts
- Error handling and retry logic


## Use Case Examples

1. Monitor crypto futures trades in real time.
2. Receive instant alerts for high-risk positions.
3. Track daily profit/loss automatically.
4. Manage multiple assets without manual checking.
5. Enable centralized monitoring for trading teams.

Note: This workflow can be adapted for many other financial monitoring and automation use cases.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|--------------|---------|
| PnL is null | Incorrect field mapping | Ensure correct price field is used |
| Telegram error | Formatting issue | Set Parse Mode to NONE |
| No alerts triggered | Risk condition not met | Check Switch node logic |
| Empty rows in Sheets | Wrong data source | Connect correct node to Sheets |
| API error | Invalid request | Verify Binance endpoint |


## Need Help?

If you need help setting up, customizing or extending this workflow, feel free to reach out our [n8n workflow developers at WeblineIndia](https://www.weblineindia.com/hire-n8n-developers/).

We can help you:

- Customize workflows
- Integrate additional APIs
- Build scalable automation systems
- Add advanced analytics and dashboards
- And so much more.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Telegram, Jira Software, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
