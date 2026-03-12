# 🤝 Send a daily WooCommerce sales snapshot to Slack with Google Sheets logging

> ⚡ **31 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Daily WooCommerce Sales Snapshot to Slack with Google Sheets Logging

This workflow automatically collects WooCommerce sales data every day, calculates key sales metrics, sends a clean summary to Slack and logs the same data into Google Sheets for historical tracking. It helps teams stay informed about daily performance without manually checking dashboards or reports.

### Quick Implementation Steps (Get Started Fast)

1. Import the workflow JSON into n8n.
2. Connect your WooCommerce, Slack and Google Sheets credentials.
3. Verify the Slack channel and Google Sheet selection.
4. Activate the workflow.
5. Receive daily sales updates automatically.


## What It Does

This workflow runs on a daily schedule and fetches all recent orders from a WooCommerce store. It filters the orders to include only paid ones (Processing and Completed) and further narrows them down to those created within the last 24 hours.

Using separate Code nodes, the workflow calculates essential sales metrics such as total revenue, number of orders, average order value (AOV) and the top-selling products. These metrics are merged into a single structured object for consistent downstream use.

Finally, the workflow sends a formatted sales summary to a Slack channel for quick visibility and appends the same data as a row in Google Sheets. This creates a reliable daily log that can be used for trend analysis and reporting.


## Who’s It For

- WooCommerce store owners  
- Sales and operations teams  
- Marketing teams tracking daily performance  
- Business managers who prefer Slack updates  
- Analysts maintaining sales history in spreadsheets  


## Requirements to Use This Workflow

- Active WooCommerce store with API access  
- n8n instance (self-hosted or cloud)  
- Slack workspace with permission to post messages  
- Google Sheets document for logging data  
- Valid credentials configured in n8n for:
  - WooCommerce
  - Slack
  - Google Sheets


## How It Works

1. A Schedule Trigger runs the workflow once per day.
2. Orders are fetched from WooCommerce.
3. Only paid orders (Processing / Completed) are considered.
4. Orders from the last 24 hours are filtered.
5. Sales metrics are calculated:
   - Total Revenue
   - Order Count
   - Average Order Value (AOV)
   - Top Selling Products
6. Metrics are merged into a single object.
7. A formatted summary is:
   - Sent to Slack
   - Appended or updated in Google Sheets

## How To Set Up

1. Configure the Schedule Trigger time.
2. Add WooCommerce credentials.
3. Review paid order filtering logic.
4. Select Slack channel.
5. Select Google Sheet and worksheet.
6. Test the workflow.
7. Activate it.


## How To Customize Nodes

- Change schedule time in the Schedule Trigger.
- Modify order statuses in the Filter Paid Orders node.
- Adjust the 24-hour window in the Code node.
- Increase or decrease top products count.
- Customize Slack message formatting.
- Add or remove Google Sheets columns.


## Add-ons (Optional Enhancements)

- Weekly or monthly summaries
- Revenue comparison (day-over-day / week-over-week)
- Revenue threshold alerts
- Multiple Slack channels
- Dashboard integrations from Google Sheets


## Use Case Examples

- Daily sales snapshot for store owners  
- Morning updates for sales teams  
- Automated sales logging for finance teams  
- Performance tracking without dashboards  
- Remote team visibility via Slack  

Many more variations are possible depending on business needs.


## Troubleshooting Guide

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| Slack message not received | Slack credentials or channel issue | Verify Slack API and channel |
| Google Sheet not updating | Incorrect sheet or mapping | Recheck sheet selection |
| Orders missing | Order status filter too strict | Update filter conditions |
| Revenue incorrect | Time filter issue | Verify last 24-hour logic |
| Workflow not running | Workflow inactive | Activate workflow |


## Need Help?

If you need help setting up, customizing or extending this workflow, our n8n automation experts at **WeblineIndia** can assist.

We specialize in:
- n8n automation workflows
- Business process automation
- Custom integrations and reporting

[Contact WeblineIndia](https://www.weblineindia.com/contact-us.html) to build reliable and scalable automation tailored to your business.

## 🔗 Nodes Used

Google Sheets, Slack, WooCommerce, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
