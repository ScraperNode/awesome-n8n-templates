# 🤝 Monitor WooCommerce inventory daily and send Slack alerts with Supabase

> ⚡ **36 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Daily Inventory Monitoring & Reorder System

This workflow automatically monitors your WooCommerce store inventory, calculates stock health based on recent sales, classifies products, computes reorder quantities, assigns urgency levels and sends actionable alerts to Slack.

This workflow runs daily to track your inventory and prevent stock issues. It fetches all active products and recent completed orders, calculates units sold in the last 30 days, evaluates stock health, and classifies products as **Top Performer, Steady, At Risk, or Consider Discontinue**.  

You receive:

* **Daily inventory check (automated)**
* **Database record of each product’s stock and recommended action**
* **Slack alerts for urgent items and a daily summary**

Ideal for teams wanting simple, automated visibility of inventory without manually reviewing stock levels.


### Quick Start – Implementation Steps

1. Connect your **WooCommerce** account (products and orders).
2. Connect **Supabase** to store inventory records.
3. Connect **Slack** to receive alerts and daily summaries.
4. Set the schedule time for daily checks.
5. Review and adjust stock thresholds (lead time, safety days) if needed.
6. Activate the workflow — daily inventory monitoring begins automatically.


## What It Does

This workflow automates inventory monitoring:

1. Fetches all published products from WooCommerce with current stock.
2. Retrieves completed orders from the last 30 days to calculate sales.
3. Calculates units sold per product and estimates average daily demand.
4. Merges product and sales data for stock evaluation.
5. Classifies products based on stock and demand:
    *   Top Performer
    *   Steady
    *   At Risk
    *   Consider Discontinue
6. Calculates safety stock, reorder points, and reorder quantities.
7. Assigns urgency levels (Normal, High, Critical) with clear action messages.
8. Sends Slack alerts for high-priority products.
9. Saves all inventory data into Supabase for tracking.
10. Builds and sends a daily summary with totals, at-risk products, and reorder needs.

This ensures your team always knows stock status and can act quickly to prevent shortages.


## Who’s It For

This workflow is ideal for:

* Inventory managers
* Operations teams
* E-commerce teams
* Supply chain planners
* Anyone needing automated stock monitoring and alerts


## Requirements to Use This Workflow

To run this workflow, you need:

* **n8n instance** (cloud or self-hosted)
* **WooCommerce API credentials** (products & orders)
* **Supabase account** (database for inventory tracking)
* **Slack workspace** with API permissions
* Basic understanding of inventory management and reorder logic


## How It Works

1. **Daily Check** – Workflow triggers automatically at the scheduled time.
2. **Fetch Products & Orders** – Gets all published products and completed orders from the last 30 days.
3. **Calculate Sales & Demand** – Determines units sold and average daily demand per product.
4. **Merge Data** – Combines stock data with sales to evaluate inventory health.
5. **Inventory Classification** – Categorizes products as Top Performer, Steady, At Risk, or Consider Discontinue.
6. **Reorder Calculations** – Computes safety stock, reorder point, and recommended reorder quantity.
7. **Assign Urgency & Actions** – Flags products as Normal, High, or Critical and sets clear action messages.
8. **Immediate Action Check** – Identifies high-priority products that need urgent attention.
9. **Save to Database** – Stores inventory status and recommendations in Supabase.
10. **Daily Summary** – Builds summary and sends Slack notifications for overall stock health.


## Setup Steps

1. Import the provided n8n JSON workflow.
2. Connect your **WooCommerce account** (products and orders).
3. Connect **Supabase account** and configure the table for inventory tracking.
4. Connect **Slack** and select channels for urgent alerts and daily summary.
5. Adjust **lead time**, **safety stock days**, and any thresholds if needed.
6. Activate the workflow — daily automated inventory monitoring and reporting begins.


## How To Customize Nodes

### Customize Reorder Calculations

Adjust safety stock days, lead time, or reorder formulas in the Reorder Calculator node.

### Customize Urgency & Actions

Modify logic in the Urgency & Recommendation node to change thresholds or messaging.

### Customize Slack Alerts

You can change:
* Slack channel
* Message format
* Include emojis or tags

### Customize Database Storage

Add extra fields in Supabase to store more product information if needed.


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Track multiple warehouses
* Send alerts only for specific categories
* Generate weekly inventory reports
* Include stock valuation or cost metrics
* Integrate with other communication channels (email, Teams)


## Use Case Examples

### Daily Inventory Check

Automatically tracks stock levels for all products.

### Urgent Stock Alerts

Notifies the team immediately when items are At Risk or need reorder.

### Reporting & Tracking

Keeps a historical record of stock health in the database.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|-------|----------------|---------|
| Slack alerts not sent | Invalid credentials | Update Slack API key |
| Supabase row not saved | Wrong table/field mapping | Check table and field names |
| Wrong stock classification | Thresholds incorrect | Adjust lead time, safety days, or demand calculation |
| Workflow not running | Schedule not active | Enable Schedule Trigger node |


## Need Help?

If you need help in customizing or extending this workflow with multi-warehouse tracking, advanced alerts, dashboards or scaling, then our [n8n automation developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** will be happy to assist you.

## 🔗 Nodes Used

Slack, WooCommerce, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
