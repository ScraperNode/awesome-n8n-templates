# 🤝 Tag high-risk WooCommerce SKUs and send daily alerts to Slack

> ⚡ **49 views** · 🤝 [CRM & Sales Operations](../)

## Description

# (Retail) Auto-Tag High-Risk SKUs

This workflow automatically monitors product sales in your WooCommerce store, detects fast-selling items, applies risk tags and sends a clear alert to Slack—so you never miss products that need attention.

This workflow checks your WooCommerce store every day, reviews product sales from the last 14 days and calculates how fast each product is selling. Based on sales volume, it assigns a risk level (OK, Watchlist, High-Risk or Critical), updates product tags in WooCommerce and sends a single, easy-to-read Slack alert for products that need attention.

You receive:

*   **Daily automated sales analysis**
*   **Automatic risk tagging inside WooCommerce**
*   **One clean Slack alert with product name, units sold and risk level**
    
Ideal for store owners and operations teams who want proactive inventory control without manual reports.

### Quick Start – Implementation Steps

1.  Connect your **WooCommerce API credentials**.
2.  Connect your **Slack workspace** and choose an alert channel.
3.  Adjust sales thresholds if needed (optional).
4.  Activate the workflow — daily monitoring starts automatically.
    

## What It Does

This workflow automates inventory risk detection:

1.  Runs automatically on a daily schedule.
2.  Fetches completed WooCommerce orders from the last 14 days.
3.  Fetches product details from WooCommerce.
4.  Counts how many units of each product were sold.
5.  Assigns a risk level:
    *   OK
    *   Watchlist
    *   High-Risk
    *   Critical
6.  Updates product tags in WooCommerce based on risk.
7.  Combines all risky products into one list.
8.  Sends a single Slack alert summarizing:
    *   Product name
    *   Units sold
    *   Risk level

This prevents stock issues and highlights fast-selling products early.


## Who’s It For

This workflow is ideal for:

*   WooCommerce store owners
*   E-commerce operations teams
*   Inventory & supply chain managers
*   Marketing teams tracking fast-selling products
*   Businesses managing limited or high-demand stock
*   Anyone who wants automated inventory visibility
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   **WooCommerce store** with REST API access
*   **WooCommerce API keys** (Read + Write)
*   **Slack workspace** with API access
*   Basic understanding of WooCommerce products & orders
    

## How It Works

1.  **Daily Trigger** – Workflow runs at a scheduled time.
2.  **Fetch Orders** – Gets completed orders from the last 14 days.
3.  **Fetch Products** – Retrieves product details.
4.  **Calculate Sales & Risk** – Counts sold units and assigns risk level.
5.  **Split by Risk** – Routes products based on risk category.
6.  **Update Product Tags** – Applies correct WooCommerce tags.
7.  **Merge Results** – Combines all risky products.
8.  **Build Alert Message** – Creates a readable Slack message.
9.  **Send Slack Alert** – Sends one summary alert to your team.
    

## Setup Steps

1.  Import the workflow JSON into n8n.
2.  Configure **WooCommerce credentials** in all WooCommerce nodes.
3.  Ensure risk tags exist in WooCommerce:
    *   Watchlist
    *   High-Risk
    *   Critical
4.  Connect your **Slack API** credentials.
5.  Select the Slack channel for alerts.
6.  Review or adjust sales thresholds in the risk calculation node.
7.  Activate the workflow.
    

## How To Customize Nodes

### Customize Risk Thresholds

Update the **Calculate Risk** code node to change when products move into:

*   Watchlist
*   High-Risk
*   Critical
    
### Customize WooCommerce Tags

Replace tag IDs in the **Update Product** nodes with your own tag IDs.

### Customize Slack Alerts

You can add:

*   Emojis
*   Mentions (@channel, @team)
*   Product links
*   Stock status or category info
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Include stock quantity checks
*   Send separate alerts per risk level
*   Create weekly or monthly summaries
*   Store alerts in Google Sheets or Airtable
*   Add email or SMS notifications
*   Predict out-of-stock dates
*   Add AI-based sales trend insights
    

## Use Case Examples

### 1\. Inventory Risk Monitoring

Detect products that may go out of stock soon.

### 2\. Sales Trend Tracking

Identify fast-selling products automatically.

### 3\. Operations Alerts

Notify teams before stock issues occur.

### 4\. Marketing Signals

Spot trending products for promotions.

### 5\. Daily Store Health Check

Get a quick snapshot of product risk every day.


## Troubleshooting Guide

IssuePossible CauseSolutionNo Slack alertNo risky productsCheck thresholdsTags not updatedWrong tag IDVerify WooCommerce tag IDsUnits sold = 0Orders not completedCheck order status filterWorkflow not runningSchedule disabledEnable Schedule TriggerSlack errorInvalid credentialsReconnect Slack account


## Need Help?

If you need help customizing, scaling or extending this workflow—such as adding forecasting, dashboards or multi-store support—the **WeblineIndia team** can help you build production-ready e-commerce automation.

## 🔗 Nodes Used

Slack, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
