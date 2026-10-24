# 🤝 Forecast inventory and route purchase orders with Google Sheets, OpenAI, Telegram, Slack, and Gmail

> ⚡ **54 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to forecast SKU demand from Google Sheets data, drafts purchase-order justifications with OpenAI, routes critical and warning items for Telegram review and Slack alerts, logs decisions back to Google Sheets, and sends an HTML digest and supplier emails via Gmail.

## How it works
1. Runs every day on a schedule and reads Sales History, Inventory, Vendors, and Purchase Orders tabs from Google Sheets.
2. Calculates 7/30-day demand, estimates days of stock remaining, skips SKUs with recent open POs, and classifies each SKU as Critical, Warning, Watch, or OK.
3. For Critical and Warning SKUs, uses OpenAI (gpt-4o-mini) to generate a short purchase-order justification and appends a new row to the Purchase Orders sheet with the draft and recommended quantities.
4. Sends Critical items to Telegram with inline Approve/Reject buttons and posts a critical stockout alert to a Slack channel.
5. Sends Warning items to Telegram as a draft notification, and logs Watch items to Google Sheets without sending messages.
6. Builds an HTML summary of Critical/Warning/Watch items and emails the daily digest to procurement via Gmail.
7. Listens for Telegram approval callbacks, updates the PO status in Google Sheets, and on approval emails the PO details to the supplier via Gmail and confirms the outcome in Telegram.

## Setup
1. Add Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes, ensuring the spreadsheet has tabs named Sales History, Inventory, Vendors, and Purchase Orders with matching columns (for example SKU, Date, UnitsSold, CurrentStock, SupplierEmail, Status, POId).
2. Add an OpenAI credential (or API key) for the two PO drafting steps and keep the model selection as gpt-4o-mini or update it to your preferred model.
3. Add Gmail OAuth2 credentials and update the digest recipient and supplier-facing email fields (for example procurement@yourcompany.com) to the correct addresses.
4. Add Telegram Bot credentials and replace YOUR_TELEGRAM_CHAT_ID with the chat/group that should receive approval requests and confirmations, then enable the Telegram callback trigger webhook.
5. Add Slack OAuth2 credentials and replace YOUR_SLACK_CHANNEL_ID for critical alerts and workflow error alerts.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
