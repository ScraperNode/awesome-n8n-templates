# 📱 Automated WooCommerce abandoned cart recovery with Google Sheets email reminders

> ⚡ **112 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Recover lost revenue on autopilot with this powerful WooCommerce Abandoned Cart Automation.

This workflow connects directly to your WooCommerce store using the REST API to fetch all recent orders. It logs them in Google Sheets for easy tracking and visibility. Every day at a scheduled time, it checks for orders with the "pending" status that haven't received a reminder email yet — and sends a personalized follow-up email to the customer.

## Use it to:

Automatically remind customers about unpaid orders

Recover abandoned carts without any manual effort

Keep clean logs of all orders and reminders via Google Sheets

Boost conversion rates and revenue with timely, helpful emails


## Requirements:
To use this workflow, you need:

A WooCommerce store with REST API access

A connected Google Sheets account

No external plugins are required in WooCommerce. Just make sure the REST API is enabled and credentials are added to n8n.

### Google Sheets Configuration
Create a Google Sheet with the following column headers (first row): 

Order ID | Buyer | E-mail | Products | Price | Status | Order date | Payment url | Reminder sent

### Customize Mail:
Customize the reminder message to match your brand voice and offer incentives like a discount or free shipping to encourage payment.

Set it once and let your abandoned cart recovery run in the background — 24/7.

contact: contact@streamlinemakers.com

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
