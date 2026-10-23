# 🤝 Log ecommerce orders, send Slack alerts, and store data in Google Sheets

> ⚡ **59 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow receives ecommerce orders via a webhook, formats key order fields, appends each order to Google Sheets, and posts a Slack notification to different channels based on whether the order total exceeds 200.

## How it works
1. Receives a POST webhook request containing a new order payload from your store.
2. Extracts and normalizes the order ID, customer name, email, total, and items from the webhook body.
3. Appends the order data to a Google Sheets spreadsheet for logging and reporting.
4. Compares the numeric order total to a 200 threshold to determine whether the order is high value.
5. Posts a message to a Slack VIP channel for orders over 200, or to a standard Slack orders channel for all other orders.
6. Returns a JSON confirmation response (including the order ID) back to the webhook caller.

## Setup
1. Configure your store to send new order events to this workflow’s webhook URL (POST /new-order).
2. Add a Google Sheets OAuth2 credential and set the target spreadsheet and sheet where orders should be appended.
3. Add a Slack OAuth2 credential and set the channel IDs for the VIP and standard order notifications.
4. Adjust the high-value threshold (currently 200) to match your order routing needs and ensure the incoming payload includes order_id, customer_name, email, total, and items.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
