# 🤝 Monitor Shopify low-stock items with OpenAI, Google Sheets, Slack and email

> ⚡ **133 views** · 🤝 [CRM & Sales Operations](../)

## Description

# (Retail) Supplier Restock Request Trigger

This workflow automatically monitors your Shopify inventory, detects low-stock products, generates smart alert messages, logs records in Google Sheets and sends priority-based notifications to Slack.

This workflow checks your Shopify store every 5 hours, identifies products with low inventory (≤10 units), generates professional alert messages using AI, prevents duplicate alerts using Google Sheets, assigns priority based on stock level and notifies your team on Slack.

You receive:

*   **Automated inventory checks every 5 hours**
*   **Google Sheet tracking for low-stock products**
*   **Priority-based Slack alerts (High / Medium / Low)**

Ideal for teams that want proactive inventory visibility without manual stock checks.


### Quick Start – Implementation Steps

1.  Connect your **Shopify account** to fetch products and inventory.
2.  Connect **OpenAI** to generate alert messages.
3.  Connect a **Google Sheet** for tracking alerts.
4.  Connect **Slack** to receive notifications.
5.  Activate the workflow — monitoring starts automatically.
    

## What It Does

This workflow automates low-stock monitoring for Shopify products:

1.  Runs automatically every 5 hours.
2.  Fetches all products and inventory levels from Shopify.
3.  Cleans and prepares product data (SKU, name, stock, vendor).
4.  Processes products in small batches to avoid overload.
5.  Filters only products with stock ≤ 10 units.
6.  Generates a professional alert message using AI.
7.  Checks Google Sheets to avoid duplicate records.
8.  Appends new records or updates existing ones.
9.  Assigns priority based on stock level:
    *   2 units → High priority
    *   6 units → Medium priority
    *   10 units → Low priority
10.  Sends a clear Slack alert to the team.

This ensures timely restocking with no duplicate alerts.


## Who’s It For

This workflow is ideal for:

*   E-commerce store owners
*   Inventory & operations teams
*   Shopify store managers
*   Supply chain teams
*   Startups managing limited stock
*   Businesses wanting automated restock alerts
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   **Shopify store** with API access
*   **OpenAI API key**
*   **Google Sheets** access
*   **Slack workspace** with API permissions
    
No advanced technical knowledge required.


## How It Works

1.  **Scheduled Check** – Workflow runs every 5 hours.
2.  **Fetch Products** – Retrieves all Shopify products.
3.  **Prepare Data** – Extracts SKU, name, stock, vendor.
4.  **Low-Stock Filter** – Keeps only items ≤ 10 units.
5.  **AI Message Creation** – Generates alert text.
6.  **Duplicate Check** – Looks up Google Sheet records.
7.  **Update or Insert** – Keeps the sheet up to date.
8.  **Priority Assignment** – Sets urgency level.
9.  **Slack Alert** – Notifies the team instantly.
    

## Setup Steps

1.  Import the provided n8n workflow JSON.
2.  Open the **Shopify nodes** → connect your Shopify credentials.
3.  Add your **OpenAI API key** in the AI nodes.
4.  Connect your **Google Sheets** account and map fields.
5.  Connect **Slack** and select the alert channel.
6.  Adjust stock thresholds if needed.
7.  Activate the workflow — done!
    

## How To Customize Nodes

### Customize Stock Thresholds

Modify the **IF / Switch** nodes to:

*   Change low-stock limits
*   Add more priority levels
    
### Customize Alert Messages

Edit the **AI prompt** to:

*   Change tone (urgent, friendly, formal)
*   Add emojis or mentions
*   Include pricing or vendor info
    
### Customize Google Sheet Fields

You can add:

*   Vendor name
*   Last updated date
*   Restock status
*   Assigned team member
    
### Customize Slack Alerts

Enhance messages with:

*   @mentions
*   Emojis
*   Links to Shopify product pages
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Send email alerts
*   Create weekly summary reports
*   Add auto-restock triggers
*   Integrate with ERP systems
*   Track restock completion
*   Add dashboards using Google Sheets
    

## Use Case Examples

### 1\. Inventory Monitoring

Automatically track low-stock items.

### 2\. Restock Planning

Prioritize restocking based on urgency.

### 3\. Team Alerts

Notify operations instantly via Slack.

### 4\. Audit & Tracking

Maintain a clean inventory alert log.

### 5\. Store Scaling

Prevent stock-outs as order volume grows.


## Troubleshooting Guide

| Issue                | Possible Cause        | Solution                         |
|----------------------|----------------------|----------------------------------|
| No Slack alerts      | Slack not connected  | Check Slack credentials          |
| Duplicate rows       | SKU mismatch         | Ensure SKU is consistent         |
| No low-stock items   | Threshold too low    | Adjust IF condition              |
| AI message empty     | OpenAI key missing   | Verify API key                   |
| Workflow not running | Trigger disabled     | Enable Schedule Trigger          |


## Need Help?

If you need help customizing or extending this workflow with advanced features like adding analytics, ERP integrations, advanced alerts or scaling it for high-volume stores, then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are happy to help.

## 🔗 Nodes Used

Google Sheets, Slack, Shopify, Gmail, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
