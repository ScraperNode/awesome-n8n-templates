# 🤝 Send a daily sales report to WhatsApp from Google Sheets with MoltFlow

> ⚡ **37 views** · 🤝 [CRM & Sales Operations](../)

## Description

## How it works

1. Runs every day at 6 PM and reads sales data from Google Sheets
2. Filters rows matching today's date and calculates total revenue, order count, and top product
3. Sends a formatted sales summary to your WhatsApp via MoltFlow
4. If no sales today, sends a "no sales" notification instead

## Set up steps (~5 min)

1. Create a MoltFlow account at molt.waiflow.app and connect your WhatsApp
2. Create a Google Sheet with columns: Date, Product, Amount, Customer
3. Connect your Google Sheets OAuth2 credential in n8n
4. Paste your Sheet URL in the Google Sheets node
5. Set YOUR_SESSION_ID and YOUR_PHONE in the Build Report code node
6. Add your MoltFlow API Key as Header Auth credential (header name: X-API-Key)

## Prerequisites

- MoltFlow account with active WhatsApp session
- Google Sheet with daily sales data (Date column in YYYY-MM-DD format)
- Google Sheets OAuth2 credential configured in n8n

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
