# 🤝 Pull Square sales summary reports for automated reporting and analysis

> ⚡ **374 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Programatically Pull Square Report Data Into N8N

## What It Does
This sub-workflow connects to the Square API and generates a daily sales summary report for all of your Square locations. The report matches the figures displayed in the Square Dashboard &gt; Reports &gt; Sales Summary.

It’s designed to be reused in other workflows, ideal for reporting, data storage, accounting, or automation.

## Prerequisites
To use this workflow, you'll need:
- Square API credentials (configured as a Header Auth credential)

## How to Set Up Square Credentials:
- Go to Credentials &gt; Create New
- Choose Header Auth
- Set the Name to "Authorization"
- Set the Value to your Square Access Token (e.g., Bearer &lt;your-api-key&gt;)

## How It Works
1. Trigger: The workflow is triggered as a sub-workflow, requiring a report_date input.
2. Fetch Locations: An HTTP request gets all Square locations linked to your account.
3. Fetch Orders: For each location, an HTTP request pulls completed orders for the specified report_date.
4. Filter Empty Locations: Locations with no sales are ignored.
5. Aggregate Sales Data: A Code node processes the order data and produces a summary identical to Square’s built-in Sales Summary report.
6. Output: A cleaned, consistent summary that can be consumed by parent workflows or other nodes.

## Example Use Cases
- Automatically store daily sales data in Google Sheets, MySQL, or PostgreSQL for analysis and historical tracking
- Automatically send daily email or Slack reports to managers or finance teams
- Build weekly/monthly reports by looping over multiple dates
- Push sales data into accounting software like QuickBooks or Xero for automated bookkeeping
- Calculate commissions or rent payments based on sales volume

## How to Use
- Configure both HTTP Request nodes to use your Square API credential.
- If you are not in the Toronto/New York Timezone, please change the "start_at" and "end_at" parameters in the second HTTP node from "-05:00" to your local timezone
- Use as a sub-workflow inside a main workflow.
- Pass a report_date (formatted as YYYY-MM-DD) to the sub-workflow when you call it.

## Customization Options
- Add pagination to handle locations with more than 1,000 orders per day.
- Expand the workflow to save or send the report output via additional integrations (email, database, webhook, etc.).

## Why It's Useful
This workflow saves time, reduces manual report pulling from Square, and enables smarter automation around sales data—whether for operations, finance, or performance monitoring.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
