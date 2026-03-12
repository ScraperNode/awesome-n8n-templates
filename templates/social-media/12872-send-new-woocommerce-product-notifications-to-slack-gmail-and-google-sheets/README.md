# 📱 Send new WooCommerce product notifications to Slack, Gmail and Google Sheets

> ⚡ **34 views** · 📱 [Social Media & Email Marketing](../)

## Description

# Retail – New Product Drop Notifications

This workflow automatically detects when a new product is created in WooCommerce and instantly notifies internal teams through Slack and email. At the same time, it logs all product details into Google Sheets for tracking and reporting. A centralized data formatting step ensures consistent and reusable product data across all nodes.

### Quick Implementation Steps

1. Import the workflow JSON into n8n.
2. Connect WooCommerce, Slack, Gmail and Google Sheets credentials.
3. Review the **Format Product Details** node for field mappings.
4. Select the Slack channel and Google Sheet.
5. Activate the workflow.


## What It Does

This workflow listens for new product creation events from WooCommerce. When a product is created, the workflow extracts key product attributes such as name, price, status, permalink and images and prepares them in a single centralized configuration node.

Using this standardized data, the workflow sends a real-time Slack notification to inform internal teams, sends a formatted HTML email announcing the product launch and appends the same product information into a Google Sheet for historical reference and reporting.

By centralizing data preparation and reusing it across all downstream nodes, the workflow remains easy to maintain, highly readable and simple to extend for future requirements.


## Who’s It For

This workflow is ideal for:
- E-commerce teams using WooCommerce
- Marketing teams managing product launches
- Operations teams maintaining product logs
- Sales teams needing instant product visibility
- Business owners tracking new product releases


## Prerequisites

To use this workflow, you need:
- An active n8n instance (self-hosted or cloud)
- WooCommerce REST API credentials
- Slack workspace with API access
- Gmail account with OAuth2 access
- Google Sheets API access
- A Google Sheet with predefined columns


## How to Use & Setup

1. Import the workflow JSON into n8n.
2. Configure **WooCommerce – New Product Created** with your WooCommerce credentials.
3. Review the **Format Product Details** node to verify product field mappings.
4. Configure **Notify Team on Slack** and select the target Slack channel.
5. Configure **Send Product Launch Email** and update the recipient email if required.
6. Configure **Log Product in Google Sheets** and select the target spreadsheet and sheet.
7. Save and activate the workflow.

Once activated, the workflow runs automatically whenever a new product is created in WooCommerce.


## How To Customize Nodes

- **Format Product Details**
  - Add or remove product attributes such as SKU, categories or tags.
  - Modify how images are processed or stored.
- **Slack Notification**
  - Customize message format, emojis or mentions.
- **Email Notification**
  - Adjust branding, layout or additional product details.
- **Google Sheets Logging**
  - Add more columns like product ID, category or creator.


## Add-ons (Optional Enhancements)

This workflow can be extended to:
- Prevent duplicate product entries in Google Sheets
- Route Slack notifications to different channels by category
- Send emails to multiple stakeholder groups
- Add approval or review steps before notifications
- Integrate with CRM or ERP systems
- Generate daily or weekly product launch summaries


## Use Case Examples

1. Marketing teams receiving instant alerts for new product launches.
2. Operations teams maintaining a centralized product creation log.
3. Sales teams staying updated on new offerings.
4. Business owners tracking product launch activity over time.
5. Teams ensuring consistent communication across Slack, email and reports.

There can be many additional use cases depending on business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| Slack message not sent | Invalid Slack credentials | Reconnect Slack API credentials |
| Email not delivered | Gmail OAuth expired | Reauthorize Gmail account |
| Google Sheet not updated | Sheet permissions missing | Verify Google Sheets access |
| Images missing | Product has no images | Check WooCommerce product data |
| Workflow not executing | Workflow inactive | Activate the workflow |


## Need Help?

If you need help setting up, customizing or extending this workflow or want to build similar automations tailored to your business, our n8n developers at **WeblineIndia** can assist with advanced workflow design and automation solutions.

## 🔗 Nodes Used

Google Sheets, Slack, WooCommerce Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
