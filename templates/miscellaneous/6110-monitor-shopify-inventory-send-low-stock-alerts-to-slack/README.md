# 🔧 Monitor Shopify inventory & send low stock alerts to Slack

> ⚡ **971 views** · 🔧 [Miscellaneous](../)

## Description

## Inventory Low Stock Alerts
**E-commerce Automation**
This n8n template automatically monitors your Shopify inventory levels and sends alerts when products fall below your defined threshold. Prevent stockouts and maintain sales revenue with proactive inventory management.
Good to know

Default threshold is 10 units but easily customizable in the Code node
Monitors all product variants individually
Runs daily at 9 AM but schedule is fully adjustable
Only sends alerts when action is needed (no empty notifications)

## How it works

The schedule runs daily at 9 AM and connects to Shopify to download all products and variants. The workflow loops through every product and variant, checking inventory quantity for each item. It compares current stock against your threshold (default: 10 units) and identifies items below threshold. If any low stock items are found, it creates a comprehensive list and formats an alert message. The formatted report is sent to your Slack team so they can take immediate restocking action.

## Set up instructions

Set up Shopify credentials in n8n: API Key, Password, Shop Subdomain, and Shared Secret
The schedule trigger runs daily at 9 AM but feel free to adjust timing based on your business needs

Modify "lowStockThreshold" variable in the Code node (default is set to 10 units)
Set up Slack credentials and create a dedicated #inventory channel for alerts
Ensure your Shopify products have inventory tracking enabled in product settings

Test the workflow manually to verify it correctly identifies low-stock items

## What team sees:
"🚨 Low Stock Alert!

T-Shirt Blue (Medium): 3 left
Coffee Mug (White): 7 left
Phone Case (Black): 2 left"

**Business logic**:
Stock above threshold equals no alert. Stock at or below threshold equals alert sent. Stock at zero equals out of stock which is critical.

## Customising this workflow

Add email alerts for critical out-of-stock items
Set different thresholds for different product categories
Include supplier contact information in alerts

## 🔗 Nodes Used

Slack, Shopify, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
