# 🤝 Send weekly low‑stock alerts from WooCommerce to Slack and Jira

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

# (Retail Automation) Low-Stock Alerts to Slack

This workflow automates the process of managing product inventory levels, categorizing them into low stock and urgent low stock, sending alerts to Slack and creating Jira issues for urgent low stock products.

This workflow runs weekly and helps inventory and operations teams stay ahead of stock issues. It fetches products from WooCommerce, categorizes them based on stock thresholds and sends alerts about low stock and urgent low stock products. It also creates Jira issues for urgent stock shortages to ensure immediate action. Additionally, the workflow provides detailed Slack alerts for easy tracking.

**You receive:**

- Weekly automated low stock and urgent low stock alerts
- Slack summaries for quick review
- Jira issues for urgent stock items

Ideal for inventory managers and teams using WooCommerce, Slack and Jira.


## Quick Start – Implementation Steps

1. Import the provided n8n workflow JSON file.
2. Add your WooCommerce credentials in the relevant nodes.
3. Add your Slack API credentials to send alerts.
4. Add your Jira API credentials to create issues for urgent stock.
5. Activate the workflow — it will run automatically every Monday at midnight.


## What It Does

This workflow automates inventory tracking and alerting for products with low and urgent low stock levels:

- Fetches all active products from WooCommerce.
- Categorizes products into low stock and urgent low stock based on predefined thresholds.
- Generates alerts for low stock products, sending them to a designated Slack channel.
- Creates Jira issues for products with urgent low stock.
- Sends Slack alerts with key product details, stock levels and categories.
- Notifies teams of urgent stock issues that require immediate attention.

This ensures teams can quickly respond to inventory issues and avoid stockouts.


## Who's It For

This workflow is ideal for:

- Inventory managers
- Operations teams
- WooCommerce users
- Teams using Jira for issue tracking
- Teams using Slack for real-time alerts


## Requirements

To run this workflow, you need:

- n8n instance (cloud or self-hosted)
- WooCommerce account with API access
- Slack workspace with API permissions
- Jira Software Cloud account for issue creation
- Basic understanding of product inventory management


## How It Works

1. **Weekly Trigger** – The workflow automatically runs every Monday at midnight.
2. **Fetch Products** – Retrieves all products from WooCommerce.
3. **Categorize Products** – Categorizes products into low stock and urgent low stock.
4. **Generate Slack Alerts** – Sends messages to the respective Slack channels for low and urgent low stock items.
5. **Create Jira Issue** – If urgent low stock items exist, a Jira issue is created with product details.
6. **Send Summary Alerts** – Sends a clear summary to Slack with product details and Jira ticket information.


## Setup Steps

1. Import the workflow JSON file into n8n.
2. Add WooCommerce credentials to the relevant nodes.
3. Add Slack API credentials for sending alerts.
4. Add Jira credentials to create issues for urgent low stock.
5. Activate the weekly trigger to automatically run every Monday.


## How To Customize Nodes

### Threshold Adjustments

Modify the **Separate products to low stock and very low stock** node to adjust the stock thresholds for different product categories.

### Slack Alerts

You can customize the format of Slack alerts in the **Send Low Stock Alert to Slack** and **Send Urgent Low Stock Alert to Slack** nodes, including changing message text, adding emojis or mentioning team members.

### Jira Issues

In the **Create an Issue in Jira** node, you can adjust the issue summary, description and priority based on your team's needs.


## Add-Ons (Optional Enhancements)

- Integrate additional stock management systems for more robust tracking.
- Customize Jira issue types based on different urgency levels.
- Add product tags or descriptions to enhance Slack alerts.
- Implement custom notifications for specific product categories.


## Use Case Examples

### 1. Proactive Inventory Management

Identify products that are about to run out and take corrective actions before stockouts occur.

### 2. Issue Tracking for Urgent Stock

Create Jira tickets for products with urgent low stock and prioritize restocking.

### 3. Real-Time Alerts

Keep your team informed in real time with Slack messages about low and urgent low stock products.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| No Slack alerts | Invalid credentials | Re-check Slack API key and channel |
| WooCommerce products not fetched | WooCommerce API error | Verify WooCommerce credentials |
| Jira issue not created | Incorrect Jira configuration | Ensure Jira API permissions are correct |
| Missing products in categorization | Incorrect stock thresholds | Update product thresholds in the node |


## Need Help?

For help customizing or extending this workflow like adding advanced stock alerts, integrating additional tools or extending AI insights, feel free to reach out to our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) team at WeblineIndia. We're happy to assist with advanced inventory management automation solutions.

## 🔗 Nodes Used

Slack, Jira Software, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
