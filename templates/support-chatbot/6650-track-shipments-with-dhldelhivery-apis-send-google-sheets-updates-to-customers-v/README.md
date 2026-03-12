# 💬 Track shipments with DHL/Delhivery APIs & send Google Sheets updates to customers via WhatsApp/Email

> ⚡ **607 views** · 💬 [Support Chatbots](../)

## Description

This workflow automatically tracks shipments across multiple courier services, updates Google Sheets, and notifies customers via WhatsApp/Email when status changes.

## Good to know
* Runs daily at 9 AM and only sends notifications when shipment status actually changes
* API costs may apply for courier tracking (Delhivery, DHL) and WhatsApp notifications
* Requires Google Sheet with proper column structure and valid API credentials
* Currently supports Delhivery and DHL APIs but easily expandable

## How it works
* **Daily Trigger**: Cron node runs workflow every day at 9 AM
* **Get Shipments List**: Fetches all shipment data from Google Sheet
* **Filter Active Shipments**: Excludes delivered orders and empty tracking numbers
* **Route by Courier**: Directs shipments to appropriate API (Delhivery or DHL)
* **Track via APIs**: Makes real-time tracking calls to courier services
* **Parse Tracking Data**: Normalizes different API responses and detects status changes
* **Check Status Change**: Only processes shipments with actual status updates
* **Update & Notify**: Simultaneously updates Google Sheet, sends WhatsApp message, and email notification
* **Execution Summary**: Logs workflow performance metrics

## How to use
* Import the JSON workflow into n8n
* Create Google Sheet with columns: `tracking_number`, `order_id`, `customer_email`, `customer_phone`, `courier`, `status`, `location`, `last_updated`, `estimated_delivery`
* Configure credentials: Google Sheets OAuth2, Delhivery API, DHL API, WhatsApp API, SMTP
* Replace `YOUR_GOOGLE_SHEET_ID` with actual sheet ID
* Test workflow manually before enabling daily schedule

## Requirements
* Google Sheets API access
* Courier API keys (Delhivery, DHL)
* WhatsApp Business API credentials
* SMTP email service
* n8n instance (self-hosted or cloud)

## Customizing this workflow
* **Add courier services**: Create new HTTP Request node and update routing logic
* **Change frequency**: Modify cron expression (hourly: `0 * * * *`, twice daily: `0 9,17 * * *`)
* **Customize notifications**: Edit WhatsApp/Email templates in respective nodes
* **Add CRM integration**: Insert CRM update node after status change detection

## 🔗 Nodes Used

Cron, Send Email, Google Sheets, HTTP Request, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
