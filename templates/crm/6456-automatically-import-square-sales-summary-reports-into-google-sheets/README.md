# 🤝 Automatically import Square sales summary reports into Google Sheets

> ⚡ **192 views** · 🤝 [CRM & Sales Operations](../)

## Description

## What It Does
This workflow automatically connects to the Square API and generates a daily sales summary report for all your Square locations. The report matches the figures displayed in Square Dashboard &gt; Reports &gt; Sales Summary.

It's designed to run daily and pull the previous day's sales into a Google Sheet for easy analysis and reporting.

This workflow builds on my previous template, which allows users to automatically pull data from the Square API into N8N for processing. (See here: [https://n8n.io/workflows/6358](https://n8n.io/workflows/6358))

## Prerequisites
To use this workflow, you'll need:
- A Square API credential (configured as a Header Auth credential)
- A Google Sheets credential

## How to Set Up Square Credentials:
- Go to **Credentials &gt; Create New**
- Choose **Header Auth**
- Set the **Name** to "Authorization"
- Set the **Value** to your **Square Access Token** (e.g., Bearer &lt;your-api-key&gt;)

## How It Works
- Trigger – The workflow runs daily at 4:00 AM
- Fetch Locations – An HTTP request retrieves all Square locations linked to your account
- Fetch Orders – For each location, an HTTP request pulls completed orders for the specified report_date
- Filter Empty Locations – Locations with no sales are ignored
- Aggregate Sales Data – A Code node processes the order data and produces a summary identical to Square’s Sales Summary report
- Append to Google Sheets – The data will automatically be appended to an existing Google sheet

# Example Use Cases
- Automatically store daily sales data in Google Sheets for analysis and historical tracking
- Automatically create charts or visualizations from the imported data
- Build weekly/monthly reports after running for multiple days
- Quickly calculate commissions or rent payments based on sales volume

## How to Use
- Configure both HTTP Request nodes to use your Square API credential
- Set the workflow to Active so it runs automatically
- Select the Google Sheet you want to import data into, and map the data to your columns

## Customization Options
- Add pagination to handle locations with more than 1,000 orders per day
- Expand the workflow to save or send the report output via other integrations (email, database, webhook, etc.)

## Why It's Useful
This workflow saves time, reduces manual report pulling from Square, and enables smarter automation around sales data—whether for operations, finance, or performance monitoring.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
