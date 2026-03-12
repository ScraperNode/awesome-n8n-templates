# 🤝 Analyze WooCommerce category sales over time with Airtable and Slack

> ⚡ **31 views** · 🤝 [CRM & Sales Operations](../)

## Description

# WooCommerce Product Category Sales Performance Report

This workflow automatically analyzes sales data by product category, compares performance across time periods (daily, weekly or monthly), stores structured results in Airtable and sends a clear summary to Slack for quick decision-making.

This workflow pulls order data for two time periods (current and previous), groups sales by product category and calculates key metrics like revenue, units sold and share of total sales. Each category is then classified (Top Performer, Steady, Needs Attention, etc.) with a recommended action.

The results are saved to Airtable for tracking & history and a short, easy-to-read summary is sent to Slack so stakeholders can understand performance at a glance.

You get:

*   **Automated sales comparison (daily / weekly / monthly)**
*   **Category-wise performance classification**
*   **Historical tracking in Airtable**
*   **One clean Slack summary — no dashboards required**
    
Ideal for product, sales and operations teams who want fast, consistent insights without manual reporting.

### Quick Start – Implementation Steps

1.  Configure the **date granularity** (daily, weekly or monthly).
2.  Connect your **Orders data source** (API, DB or platform node).
3.  Connect and configure your **Airtable** base & table.
4.  Connect your **Slack** workspace and choose a channel.
5.  Activate the workflow — reports start running automatically.

    
## What It Does

This workflow automates category-level sales analysis:

1.  Builds current and previous date ranges dynamically.
2.  Fetches orders for both time periods.
3.  Normalizes and aggregates orders by product category.
4.  Calculates key metrics:
    *   Current revenue
    *   Previous revenue
    *   Units sold
    *   Share of total sales
5.  Classifies each category (Top Performer, Steady, At Risk, etc.).
6.  Adds a recommended business action for each category.
7.  Saves the final results to Airtable.
8.  Generates a short summary message.
9.  Sends a single Slack report to stakeholders.
    
This ensures consistent, repeatable insights with no manual effort.

## Who’s It For

This workflow is ideal for:

*   Sales & revenue teams
*   Product managers
*   E-commerce operations teams
*   Business analysts
*   Startup founders & leadership
*   Anyone needing automated sales performance insights
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   Access to **orders data** (API, database or platform integration)
*   **Airtable base** + Personal Access Token
*   **Slack workspace** with API permissions
*   Basic understanding of sales metrics (revenue, units, categories)
    

## How It Works

1.  **Scheduler Trigger** – Workflow runs on a defined schedule.
2.  **Build Date Ranges** – Calculates current and previous periods.
3.  **Fetch Orders (Current)** – Pulls orders for the active period.
4.  **Fetch Orders (Previous)** – Pulls orders for comparison.
5.  **Aggregate by Category** – Groups sales and calculates metrics.
6.  **Classify Performance** – Assigns tags and actions.
7.  **Save to Airtable** – Stores structured results.
8.  **Build Slack Summary** – Creates a readable summary message.
9.  **Send to Slack** – Delivers insights to the team.
    

## Setup Steps

1.  Import the provided n8n workflow JSON.
2.  Configure the **Scheduler** timing.
3.  Set your preferred **granularity** (daily / weekly / monthly).
4.  Connect and map your **Orders data source**.
5.  Connect **Airtable** and map fields:
    *   Category ID / Name
    *   Current Revenue
    *   Previous Revenue
    *   Units
    *   Share
    *   Tag
    *   Recommended Action
6.  Connect **Slack API** credentials and select a channel.
7.  Activate the workflow — done!
    

## How To Customize Nodes

### Change Time Period

*   Switch between daily, weekly or monthly comparisons.
*   Adjust rolling windows for testing or analysis.

### Adjust Performance Thresholds

*   Modify revenue or share thresholds.
*   Change category labels or actions.

### Customize Airtable Storage

Add optional fields such as:

*   Report date
*   Growth percentage
*   Notes or owner
*   Review status    

### Customize Slack Summary

You may add:

*   Emojis or highlights
*   Mentions (@channel, @team)
*   Links to Airtable records
*   Separate sections for risks or wins
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Add Teams or Email notifications
*   Track trends over multiple periods
*   Generate charts or dashboards
*   Add alerts for sudden drops or spikes
*   Include AI-based insights or explanations
*   Export reports to Google Sheets or CSV
    

## Use Case Examples

### 1\. Weekly Sales Review

Automatically send category performance every week.

### 2\. Product Decision Support

Identify which categories to promote or discontinue.

### 3\. Leadership Updates

Share clear performance summaries with management.

### 4\. E-commerce Optimization

Spot declining categories before revenue drops.

### 5\. Historical Analysis

Track performance trends over time in Airtable.


## Troubleshooting Guide

| Issue                 | Possible Cause            | Solution                                |
|-----------------------|--------------------------|------------------------------------------|
| No Slack message      | Slack node not connected | Verify Slack credentials                 |
| No Airtable data      | Field mapping mismatch   | Match Airtable column names              |
| Missing current orders| Date range incorrect     | Check UTC date logic                     |
| Empty summary         | No category data         | Verify aggregation step                  |
| Workflow not running  | Trigger disabled         | Enable Scheduler node                    |


## Need Help?

If you need help extending or customizing this workflow with adding alerts, dashboards, AI insights or scaling it for production then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** can assist with advanced automation and reporting solutions.

## 🔗 Nodes Used

Airtable, Slack, WooCommerce, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
