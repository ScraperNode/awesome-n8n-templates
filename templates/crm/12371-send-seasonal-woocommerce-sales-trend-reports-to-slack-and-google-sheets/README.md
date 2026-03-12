# 🤝 Send seasonal WooCommerce sales trend reports to Slack and Google Sheets

> ⚡ **71 views** · 🤝 [CRM & Sales Operations](../)

## Description

# WooCommerce Seasonal Sales Planning & Monitor → SET Pattern Compare → Slack

This workflow automatically aggregates sales data, calculates performance trends (Revenue & Orders) against previous months and years, identifies the top-selling SKU and sends a strictly formatted, professional summary report to Slack.

This workflow runs on a schedule (e.g., daily or weekly) to generate a snapshot of your business performance. It fetches sales data from your database or e-commerce platform, calculates growth percentages (vs. Month, vs. Year), formats the data into a clean JSON structure and sends a structured report to Slack without unnecessary clutter or emojis.

You receive:

* **Automated comparison of Revenue & Order counts**
* **Trend analysis (Percentage change & directional trend)**
* **Identification of the Top Performing SKU**
* **A clean, professional Slack alert for team visibility**

Ideal for management teams needing a quick, data-driven pulse check on store performance without manually running reports.

### Quick Start – Implementation Steps

1.  Add your **Database or API Credentials** (e.g., Postgres, Shopify, WooCommerce) in the data fetching nodes.
2.  Connect your **Slack** account credentials and select the target channel.
3.  Ensure your data source provides `current`, `vsMonth` and `vsYear` metrics (or use the calculation nodes provided).
4.  Review the **Slack Node** to ensure the JSON block formatting matches your preference.
5.  Activate the workflow — automated reporting begins instantly.


## What It Does

This workflow automates the generation of your business trend report:

1.  **Trigger:** Starts automatically based on a schedule (e.g., every morning at 8 AM).
2.  **Fetch Data:** Retrieves raw sales numbers for the current period, previous month and previous year.
3.  **Process Trends:** Calculates the percentage difference and determines the trend direction (Increase, Flat, Decrease).
4.  **Identify Top SKU:** Sorts product sales to find the highest-performing item of the period.
5.  **Format Report:** Constructs a strict JSON object containing:
    * Revenue (Current, vs Month, vs Year)
    * Orders (Current, vs Month, vs Year)
    * Top SKU Name
6.  **Send Slack Alert:** Pushes a cleanly formatted message (using Block Kit or Markdown) to your team channel.

This ensures your team focuses on the numbers that matter, with zero manual effort.


## Who’s It For

This workflow is ideal for:

* E-commerce Store Owners
* Sales & Marketing Managers
* Data Analysts
* Operations Teams
* Executive leadership requiring daily snapshots
* Teams preferring data-heavy, emoji-free reports


## Requirements to Use This Workflow

To run this workflow, you need:

* **n8n instance** (cloud or self-hosted)
* **Data Source** (PostgreSQL, MySQL, Shopify, WooCommerce or Google Sheets)
* **Slack workspace** with API permissions (Webhook or Bot Token)
* Basic understanding of JSON structure for Slack Block Kit


## How It Works

1.  **Scheduled Trigger** – Initiates the workflow at a specific time.
2.  **Get Sales Data** – Queries your backend to get the raw numbers.
3.  **Calculate Logic** – Compares current numbers vs. historical data to generate percentages.
4.  **Create Report Object** – Maps the values into a standardized JSON format (e.g., `revenue.current`, `orders.vsYear`).
5.  **Format Message** – Converts the JSON object into a Slack-readable text block or UI block.
6.  **Send Notification** – Posts the final report to Slack.

## Setup Steps

1.  Import the provided n8n JSON file.
2.  Open the **Data Fetch** nodes and configure your database/API connection.
3.  Ensure your query returns the necessary fields (Revenue Orders, SKU).
4.  Verify the **Format Data** node is correctly mapping your variables to the JSON structure:
    * `{{ $json["revenue"]["current"] }}`
    * `{{ $json["orders"]["vsMonth"]["percent"] }}`
5.  Connect **Slack API** credentials and choose your channel.
6.  Run a test execution to verify the numbers appear correctly in Slack.
7.  Activate the workflow — done!


## How To Customize Nodes

### Customize Report Metrics

Modify the **Set/Calculation** nodes:

* Add Average Order Value (AOV)
* Include Customer Acquisition Cost (CAC)
* Change the comparison period (e.g., vs Last Week instead of Month)

### Customize Slack Layout

You can modify the JSON in the Slack node to:

* Use **Block Kit** for a table-like structure (columns for Revenue/Orders)
* Use **Plain Text** for a simple list view
* Add or remove bold formatting (`*bold*`)
* Add a "View Dashboard" button link

### Customize Data Source

Replace the generic database node with:

* **Shopify Node** (Get Orders)
* **WooCommerce Node** (Get Sales Report)
* **Stripe Node** (Get Balance Transactions)
* **Google Sheets** (Read Row)


## Add-Ons (Optional Enhancements)

You can extend this workflow to:

* Send reports to **Email** or **Microsoft Teams** in addition to Slack.
* Generate a PDF report using an HTML-to-PDF service.
* Save the daily snapshot into a "History" table in Airtable/Database.
* Add conditional alerts (e.g., @mention the CEO if Revenue drops by &gt;20%).
* Integrate with OpenAI to write a qualitative analysis of the trends.


## Use Case Examples

### 1. Morning Standup Report

Delivers key metrics to the team channel 15 minutes before the daily meeting.

### 2. Performance Monitoring

Quickly identifies if a new marketing campaign is driving order volume.

### 3. Inventory Awareness

Highlights the "Top SKU" so the warehouse team knows what is moving fast.

### 4. Executive Summaries

Provides leadership with a noise-free, "just the numbers" view of the business.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
| :--- | :--- | :--- |
| **"N/A" in Trend** | No historical data found | Ensure database has data for previous month/year |
| **Slack formatting broken** | Invalid JSON syntax | Check quotes and brackets in Slack node |
| **Wrong Top SKU** | Sorting logic incorrect | Verify the "Sort" node is ordering by Count DESC |
| **Authentication Error** | Slack token expired | Re-connect Slack credentials in n8n |
| **Workflow not running** | Schedule disabled | Toggle "Active" switch to ON |


## Need Help?

If you need help customizing or extending this workflow — integrating specific ERPs, creating complex visual dashboards or scaling your data reporting, feel free to contact our [n8n workflow development](https://www.weblineindia.com/n8n-automation/) experts at **WeblineIndia**. We are happy to assist you with advanced automation solutions.

## 🔗 Nodes Used

Google Sheets, Slack, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
