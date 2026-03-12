# 🤝 Send weekly WooCommerce sales KPIs to Slack and Google Sheets

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

# WooCommerce Weekly Sales KPI Reporting to Slack & Google Sheets

This workflow automatically generates a **weekly sales performance report** from WooCommerce and shares it with your team. It runs on a weekly schedule, fetches last week’s orders and refunds, calculates key sales KPIs, stores the results in Google Sheets and sends a summarized report to a Slack channel.


### Quick Implementation Steps (Get Started Fast)

1. Connect WooCommerce, Slack and Google Sheets credentials in n8n.  
2. Update the WooCommerce store domain in the **Configure WooCommerce Store** node.  
3. Review the Slack channel and Google Sheet settings.  
4. Activate the workflow.  

That’s it — your weekly sales KPIs will now be generated and shared automatically.


## What It Does

This workflow helps you track and share weekly WooCommerce performance without manual effort. It automatically calculates key sales metrics such as total orders, total revenue, average order value, refunds and top-performing products based on the previous week’s data.

The workflow begins on a weekly schedule and determines the exact date range for the last completed week. Using this date range, it pulls sales orders and refund data from WooCommerce through HTTP requests. Multiple calculations are then performed to generate meaningful KPIs that are useful for both operational and leadership-level reporting.

Once the KPIs are calculated, the workflow consolidates them into a clean report format. The data is saved in Google Sheets for long-term tracking and a readable summary is sent to a Slack channel so stakeholders can quickly review weekly performance.


## Who’s It For

- E-commerce store owners using **WooCommerce**  
- Operations and sales teams tracking weekly performance  
- Business managers who want automated KPI reporting  
- Teams using **Slack** and **Google Sheets** for collaboration and reporting  


## Requirements to Use This Workflow

- An active **WooCommerce** store with REST API access  
- WooCommerce **Consumer Key and Secret** (Basic Auth)  
- An **n8n** instance with scheduled workflows enabled  
- A **Slack** workspace with permission to post messages  
- A **Google Sheets** account with access to the target spreadsheet  


## How the Workflow Works

1. **Weekly Schedule Trigger**  
   The workflow runs once per week. The exact day and time are configurable.

2. **Calculate Last Week’s Date Range**  
   A Code node calculates the start and end dates of the previous week.

3. **Configure WooCommerce Store**  
   The WooCommerce store domain is defined once and reused across API requests.

4. **Fetch Weekly Data from WooCommerce**  
   - Orders with `completed` and `processing` status  
   - Refund data for the same date range  

5. **Calculate KPIs**  
   Separate Code nodes calculate:
   - Total orders and total revenue  
   - Average order value  
   - Refund count and refund amount  
   - Top products based on revenue  

6. **Merge KPI Results**  
   All calculated KPIs are combined into a single dataset.

7. **Prepare Final KPI Report Fields**  
   Only required, clean fields are retained for reporting.

8. **Store Data in Google Sheets**  
   Each workflow run appends **one new row** with weekly KPI data.

9. **Send Weekly Report to Slack**  
   A formatted summary is posted to the selected Slack channel.


## Setup Instructions

- Update the WooCommerce domain in the **Configure WooCommerce Store** node.
- Verify WooCommerce API credentials in all HTTP Request nodes.
- Select the desired Slack channel in the Slack node.
- Confirm the target Google Sheet and worksheet.
- Adjust the weekly schedule if needed.
- Activate the workflow.


## How To Customize Nodes

- **Weekly Sales KPI Trigger**  
  Change the day or time to run the workflow at any point during the week.

- **Configure WooCommerce Store**  
  Update the domain if you move to a different store or environment.

- **HTTP Request Nodes**  
  Modify order statuses or add filters as needed.

- **KPI Calculation Code Nodes**  
  Add new metrics or adjust existing calculations.

- **Slack Node**  
  Send reports to a different channel or workspace.

- **Google Sheets Node**  
  Store data in another sheet or spreadsheet.


## Add-ons (Additional Features)

- Monthly or daily KPI reporting  
- Email-based KPI reports  
- Separate reports for different WooCommerce stores  
- Alerting when revenue drops below a threshold  
- Dashboard integration using BI tools  


##  Use Case Examples

- Weekly sales performance review for management  
- Tracking revenue and refunds trends over time  
- Sharing automated reports with remote teams  
- Maintaining a historical KPI log in Google Sheets  
- Supporting business decisions with consistent weekly data  

*There can be many more use cases depending on how this workflow is customized or extended.*


## Troubleshooting Guide  

| Issue | Possible Cause | Solution |
|------|---------------|----------|
| No data in Slack | Workflow not active | Activate the workflow |
| Empty KPIs | No orders in the selected week | Verify WooCommerce data |
| Incorrect dates | Schedule misconfiguration | Review trigger timing |
| Google Sheets not updating | Permission issue | Reconnect Google Sheets credentials |
| WooCommerce API error | Invalid credentials | Check Consumer Key and Secret |


## Need Help?  

If you need help setting up this workflow, customizing KPIs or building advanced reporting automation, our [n8n workflow developers](https://www.weblineindia.com/hire-n8n-developers/) at **WeblineIndia** are here to help.

Our team has strong expertise in **n8n workflow automation**, **WooCommerce integrations** and **business intelligence reporting**. Whether you want to extend this workflow or build a similar solution tailored to your business needs, feel free to reach out to **WeblineIndia** for expert support.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
