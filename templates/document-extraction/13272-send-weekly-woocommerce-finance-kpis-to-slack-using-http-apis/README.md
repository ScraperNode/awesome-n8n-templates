# 🔬 Send weekly WooCommerce finance KPIs to Slack using HTTP APIs

> ⚡ **11 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Weekly WooCommerce Finance KPI Automation with HTTP APIs & Slack

This workflow automatically gathers **weekly WooCommerce order and refund data**, calculates essential **financial KPIs**, detects potential **refund-related risks** and sends a **clear weekly finance summary to Slack**. Once configured, it runs on a schedule and delivers leadership-ready insights without any manual reporting.

### Quick Implementation Steps

1. Import the workflow into your automation platform.
2. Update the WooCommerce store domain in the configuration step.
3. Add WooCommerce **Consumer Key and Consumer Secret** for API access.
4. Connect your Slack account and choose a destination channel.
5. Enable the workflow to receive weekly finance updates automatically.


## What It Does

This workflow automates the weekly finance reporting process for WooCommerce stores by combining **sales and refund data** into a single, structured summary. It collects completed orders, cleans and standardizes the data and processes refund records to ensure accurate totals and counts.

Using this data, the workflow calculates key metrics such as **total sales amount**, **number of orders**, **total refunds** and **refund ratios**. These KPIs help teams quickly assess store performance and identify refund patterns that may require attention.

The workflow concludes by sending a **well-formatted, executive-friendly digest to Slack**, ensuring that finance and leadership teams always have timely and reliable insights.


## Who’s It For

This workflow is designed for:

* Finance and accounting teams
* CFOs and business leaders
* WooCommerce store owners
* Operations and revenue managers
* Agencies managing WooCommerce stores


## Requirements to Use This Workflow

To use this workflow, you need:

* A workflow automation platform
* A WooCommerce store with REST API access enabled
* WooCommerce **Consumer Key and Consumer Secret**
* Access to a Slack workspace
* Permission to configure API credentials and Slack integrations


## How It Works & How To Set Up

### 1. Weekly Schedule Trigger

* Automatically runs the workflow once every week.
* Controls when KPI data is generated.

### 2. WooCommerce Store Configuration

* Defines the WooCommerce domain used for all API calls.
* Makes it easy to reuse or update the workflow for another store.

### 3. Fetch WooCommerce Orders

* Retrieves order data using the WooCommerce Orders API.
* Pulls data relevant to the weekly reporting period.
* Uses HTTP Basic Authentication.

### 4. Filter Completed Orders

* Keeps only orders with a **completed** status.
* Ensures only successful sales are included.

### 5. Normalize Order Data

* Extracts essential finance fields:
  * Order ID
  * Order date
  * Order total
  * Line items
* Creates a clean data structure for KPI calculations.

### 6. Fetch WooCommerce Refunds

* Retrieves refund records using the WooCommerce Refunds API.
* Ensures refunds are analyzed alongside sales data.

### 7. Normalize Refund Data

* Extracts refund ID, parent order ID and refund amount.
* Standardizes refund information for accurate aggregation.

### 8. Combine Orders & Refunds

* Merges sales and refund datasets into a single input.
* Prepares the data for KPI calculations.

### 9. Calculate Finance KPIs

* Calculates:
  * Total sales amount
  * Total order count
  * Total refund amount
  * Total refund count
  * Refund-to-sales ratio
  * Refund-to-order ratio
* Removes duplicate refunds.
* Adds automatic risk flags when thresholds are exceeded.

### 10. Send Weekly KPI Digest to Slack

* Posts a formatted summary message to Slack.
* Users can select **any Slack channel** for delivery.
* Designed for quick review by leadership teams.


## How To Customize Nodes

* **Schedule**: Change the weekly run day or time.
* **Order Filters**: Include additional order statuses if required.
* **KPI Logic**: Modify ratios, thresholds or calculations.
* **Slack Message**: Adjust formatting, wording or emojis.
* **Store Setup**: Reuse the workflow for different WooCommerce stores.


## Add-Ons (Optional Enhancements)

This workflow can be extended with:

* Explicit weekly date filters
* Spreadsheet or database exports
* Email delivery in addition to Slack
* Multi-store KPI reporting
* Product-level or category-level metrics
* Automated alerts for unusual refund activity


## Use Case Examples

Common use cases include:

1. Weekly WooCommerce finance performance reporting
2. Refund trend monitoring for leadership teams
3. Automated CFO-level summaries
4. Operations and revenue review meetings
5. Agency reporting for managed WooCommerce stores

There are many additional business-specific use cases where this workflow can be applied.


## Troubleshooting Guide

| Issue                       | Possible Cause                     | Solution                                     |
| --------------------------- | ---------------------------------- | -------------------------------------------- |
| Slack message not received  | Slack integration not configured   | Reconnect Slack account and select a channel |
| Sales totals appear as zero | No completed orders for the period | Verify order status and store activity       |
| Refund data missing         | API permission issue               | Confirm WooCommerce API access               |
| Authentication error        | Invalid credentials                | Regenerate Consumer Key and Secret           |
| Workflow not running        | Automation not activated           | Enable the workflow                          |


## Need Help?

If you need assistance setting up this workflow, customizing KPIs or extending it with advanced reporting features?

**WeblineIndia** can help you:

* Configure and deploy automation workflows
* Customize finance and reporting logic
* Integrate WooCommerce with Slack and other tools
* Build similar workflows tailored to your business

👉 Reach out to our [n8n automation experts](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** for expert support and custom automation solutions.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
