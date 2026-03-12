# 🔧 Monitor blood bank stock & send low level alerts with Google Sheets and WhatsApp

> ⚡ **489 views** · 🔧 [Miscellaneous](../)

## Description

This n8n workflow monitors blood stock levels daily and sends alerts when availability is low. It fetches data from a Google Sheet, checks stock status, and notifies via WhatsApp.

## Key Features
- **Daily Monitoring**: Checks blood stock every day.
- **Automated Alerts**: Sends notifications when stock is low.
- **Real-Time Updates**: Uses live data from Google Sheets.
- **Efficient Delivery**: Alerts sent instantly via WhatsApp.
- **Continuous Check**: Loops to ensure ongoing monitoring.

## Workflow Process
1. **Daily Check Blood Stock**: Triggers the workflow daily.
2. **Fetch Blood Stock**: Reads data from a Google Sheet.
3. **Get All Stock**: Collects all available blood stock details.
4. **Check Stock Availability**: Analyzes stock levels for low thresholds.
5. **Send Alert Message**: Sends WhatsApp alerts if stock is low.

## Sheet Columns
- **Blood Type**: Type of blood (e.g., A+, O-).
- **Quantity**: Current stock amount.
- **Threshold**: Minimum acceptable stock level.
- **Last Updated**: Date and time of last update.
- **Status**: Current status (e.g., Low, Sufficient).

## Setup Instructions
- **Import Workflow**: Add the workflow to n8n via the import option.
- **Configure Sheet**: Set up a Google Sheet with blood stock data.
- **Set Up WhatsApp**: Configure WhatsApp API credentials in n8n.
- **Activate**: Save and enable the workflow.
- **Test**: Simulate low stock to verify alerts.

## Requirements
- **n8n Instance**: Hosted or cloud-based n8n setup.
- **Google Sheets**: Access with stock data.
- **WhatsApp API**: Integration for sending alerts.
- **Admin Access**: For monitoring and updates.

## Customization Options
- **Adjust Threshold**: Change low stock limits.
- **Add Channels**: Include email or SMS alerts.
- **Update Frequency**: Modify daily trigger time.

## 🔗 Nodes Used

Cron, Google Sheets, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
