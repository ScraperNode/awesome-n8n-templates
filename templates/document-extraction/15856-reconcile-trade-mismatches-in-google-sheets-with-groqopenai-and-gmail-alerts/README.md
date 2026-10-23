# 🔬 Reconcile trade mismatches in Google Sheets with Groq/OpenAI and Gmail alerts

> ⚡ **20 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Trade Break Reconciliation Assistant

This workflow automates trade reconciliation between internal and external systems using Google Sheets. It detects mismatches (price, quantity, amount, etc.), uses AI to generate insights, updates records and sends email alerts. This eliminates manual effort and improves accuracy.


### Quick Implementation Steps

1. Connect your Google Sheets (Internal & External Trades)
2. Ensure both sheets contain a common `trade_id`
3. Connect Groq/OpenAI model in n8n
4. Configure Gmail for alerts
5. [Run the workflow manually or schedule it](https://n8n.partnerlinks.io/om1efg2qgvwi)
6. Monitor updates and alerts in real-time


## What It Does

This workflow automates the reconciliation of trade data between two systems — internal and external — stored in Google Sheets. It compares records using `trade_id` and identifies mismatches such as differences in price, quantity, amount, side, currency or status.

Once mismatches are detected, the workflow classifies their severity and uses AI to generate meaningful insights, including the likely reason, explanation and recommended action. This transforms raw data into actionable intelligence.

Additionally, it updates both sheets with reconciliation results, handles missing trades by inserting records and sends detailed email alerts to ensure quick resolution of issues.


## Who It's For

- Finance & Operations teams
- Trade reconciliation analysts
- Back-office teams in trading firms
- FinTech automation engineers
- Anyone managing dual-system trade data


## Requirements

- [n8n account (self-hosted or cloud)](https://n8n.partnerlinks.io/om1efg2qgvwi)
- Google Sheets account (with Internal & External trade data)
- Groq/OpenAI API credentials
- Gmail account (for alerts)
- Proper sheet structure with fields like:
  - trade_id
  - price, quantity, amount
  - currency, status


## How It Works & Setup Guide

### 1. Trigger

- Workflow starts using **Manual Trigger**

### 2. Fetch Data

- Fetch Internal Trades (Google Sheets)
- Fetch External Trades (Google Sheets)

### 3. Merge Data

- Uses SQL-based FULL OUTER JOIN on `trade_id`

### 4. Detect Mismatches

- Compares:
  - Price
  - Quantity
  - Amount
  - Side
  - Currency
  - Status
- Flags missing records

### 5. Classify Severity

- High → Price/Amount issues
- Medium → Quantity issues
- Low → Other mismatches

### 6. AI Insight Generation

- Sends trade data to AI model
- Returns:
  - Reason
  - Explanation
  - Action

### 7. Data Update

- Updates Internal & External Sheets
- Fields updated:
  - mismatch
  - reason
  - severity
  - action

### 8. Handle Missing Trades

- Inserts missing records if trade exists only in one system

### 9. Notifications

- Sends email alerts:
  - Trade mismatch alerts
  - Missing trade alerts


## How To Customize Nodes

- **Merge Node**: Modify SQL logic for additional fields
- **Code Node (Detect Trade Breaks)**: Add/remove comparison conditions
- **AI Node**: Customize prompt for deeper analysis
- **Severity Logic**: Adjust classification rules
- **Google Sheets Nodes**: Change column mappings
- **Email Node**: Customize message format and recipients


## Add-ons

- Add Slack/Teams notifications
- Schedule workflow (cron trigger)
- Dashboard using Google Data Studio
- Store logs in database (MySQL/PostgreSQL)
- Add approval workflow before updating sheets


## Use Case Examples

1. Daily trade reconciliation between broker and internal system
2. Detecting missing trades in financial systems
3. Identifying pricing discrepancies in trading operations
4. Automating audit-ready reconciliation reports
5. Real-time monitoring of trade data consistency


## Troubleshooting Guide

| Issue             | Possible Cause        | Solution                         |
| ----------------- | --------------------- | -------------------------------- |
| No data fetched   | Wrong Sheet ID        | Verify Google Sheets connection  |
| Merge not working | Missing trade_id      | Ensure both sheets have trade_id |
| AI output error   | Invalid JSON response | Check AI prompt format           |
| Emails not sent   | Gmail not configured  | Reconnect Gmail credentials      |
| Wrong severity    | Logic mismatch        | Update severity code logic       |


## Need Help?

If you need help setting up this workflow, customizing nodes or building advanced automation, feel free to reach out our [n8n automation experts](https://www.weblineglobal.com/hire/n8n-developers/). 

We can help you:

- Customize this workflow for your business.
- Add advanced features and integrations.
- [Build scalable automation systems](https://www.weblineindia.com/process-automation-solutions.html).

## 🔗 Nodes Used

Google Sheets, Gmail, AI Agent, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
