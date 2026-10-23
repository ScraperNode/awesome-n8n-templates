# 🎫 Monitor low-rated WooCommerce reviews with Google Sheets, Slack and OpenAI

> ⚡ **12 views** · 🎫 [Ticket Management & Triage](../)

## Description

# (Retail) Social Review Monitoring

This workflow automatically monitors WooCommerce product reviews, detects low-rated and approved reviews, checks whether the review already exists in Google Sheets, updates or inserts records accordingly, and sends a clear Slack alert generated using OpenAI for new low-rated reviews.

This workflow runs on a schedule, fetches WooCommerce product reviews, filters only approved reviews with low ratings (≤ 2 stars), checks if the review already exists in Google Sheets, and then:

*   **Updates** the existing record if the review is already stored
*   **Generates a Slack alert** using OpenAI and **adds a new row** if the review is new
    
You receive:

*   **Automated monitoring of customer reviews**
*   **Centralized Google Sheets tracking** for low-rated reviews
*   **Instant Slack alerts** for new negative feedback
    
Ideal for support, product and operations teams who want fast visibility into unhappy customer feedback without manual checks.


## What It Does

This workflow automates negative review detection and response:

1.  Runs automatically every 5 hours
2.  Fetches product reviews from WooCommerce
3.  Processes reviews one by one
4.  Filters only approved reviews
5.  Identifies low-rated reviews (≤ 2 stars)
6.  Checks if the review already exists in Google Sheets
7.  Updates existing records or inserts new ones
8.  Sends a professional Slack alert for new reviews

This ensures no duplicate alerts and keeps your review data up to date.


## Who’s It For

This workflow is ideal for:

*   E-commerce teams
*   Customer support teams
*   Product managers
*   QA and operations teams
*   Store owners monitoring customer satisfaction
    

## Requirements to Use This Workflow

To run this workflow, you need:

*   **n8n instance** (cloud or self-hosted)
*   **WooCommerce REST API credentials**
*   **Google Sheets account** with edit access
*   **Slack workspace** with API permissions
*   **OpenAI API key**
    

## How It Works

1.  **Scheduled Trigger** – Workflow runs automatically every 5 hours
2.  **Fetch Reviews** – Pulls product reviews from WooCommerce
3.  **Normalize Data** – Extracts required fields
4.  **Loop Reviews** – Processes reviews one by one
5.  **Approval Check** – Allows only approved reviews
6.  **Rating Check** – Filters reviews rated 2 stars or lower
7.  **Sheet Lookup** – Checks if review ID already exists
8.  **Decision Logic** – Routes based on review existence
9.  **AI Message Creation** – Generates a Slack alert for new reviews
10.  **Slack Notification** – Sends alert to the configured channel
11.  **Sheet Update** – Updates or appends review data
    

## Setup Steps

1.  Import the provided n8n workflow JSON file
2.  Configure **WooCommerce HTTP Request** node with your credentials
3.  Connect your **Google Sheets** account and select the correct sheet
4.  Connect your **Slack** account and choose a channel
5.  Add your **OpenAI API key** to the OpenAI node
6.  Verify column names match your Google Sheet
7.  Activate the workflow
    

## How To Customize Nodes

### Change Rating Threshold

Modify the **Check Low Rating** IF node:

*   Adjust rating value (e.g., ≤ 3 stars)
*   Add additional conditions if needed
    
### Customize Slack Message

Edit the OpenAI prompt to:

*   Change tone
*   Add mentions
*   Include product links

### Customize Google Sheet

You can add extra columns such as:

*   Response status
*   Assigned team member
*   Resolution notes
    

## Add-Ons (Optional Enhancements)

You can extend this workflow to:

*   Auto-create support tickets
*   Send email alerts
*   Detect repeated negative reviewers
*   Add sentiment analysis
*   Generate daily or weekly summary reports
    

## Use Case Examples

### 1\. Customer Support Alerts

Notify support teams instantly about negative feedback.

### 2\. Product Quality Tracking

Identify recurring product issues early.

### 3\. Review Auditing

Maintain a clean, duplicate-free review log.


## Troubleshooting Guide

| Issue                | Possible Cause            | Solution                              |
|----------------------|--------------------------|----------------------------------------|
| No Slack alert       | Slack credentials missing| Reconnect Slack API                    |
| Duplicate rows       | Review ID mismatch       | Verify lookup column                   |
| Sheet update fails   | Column name mismatch     | Match sheet headers                    |
| Workflow not running | Trigger disabled         | Enable Schedule Trigger                |


## Need Help?

If you need help customizing or extending this workflow with advanced features like adding ticketing, dashboards or analytics, then our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** will be happy to assist.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
