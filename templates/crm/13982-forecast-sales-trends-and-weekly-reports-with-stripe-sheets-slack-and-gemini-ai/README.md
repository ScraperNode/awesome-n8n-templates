# 🤝 Forecast sales trends and weekly reports with Stripe, Sheets, Slack, and Gemini AI

> ⚡ **130 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Forecast sales trends and generate reports with Stripe, Sheets, and Gemini AI

## Who is this for

Revenue operations teams, SaaS growth managers, and sales directors who need automated weekly insights from their Stripe payment data. Perfect for small to medium businesses tracking subscription revenue, one-time charges, and refund patterns without manual spreadsheet work.

## How it works

Every Monday morning, the workflow pulls the previous week's charges, subscriptions, and refunds from Stripe's API. It merges this fresh data with historical sales records stored in Google Sheets, then calculates key metrics like week-over-week growth, moving averages, and MRR estimates.

Google Gemini AI analyzes the compiled data to identify trends, predict next week's performance, and flag unusual revenue patterns. When significant changes are detected (20%+ variance), the system triggers targeted alerts through a separate Slack channel.

All insights get logged to a Google Sheets history for tracking, while a comprehensive dashboard page updates automatically in Notion. The weekly summary posts to your main sales Slack channel, and executives receive detailed email reports with strategic recommendations.

## How to set up

Configure Stripe API credentials with read access to charges, subscriptions, and refunds. Set up Google Sheets OAuth for both reading historical data and writing analysis logs. Create a Notion integration with page update permissions for your sales dashboard.

Add Slack OAuth credentials for posting to your chosen sales and alerts channels. Configure Gmail SMTP for executive email delivery. Update the Configuration Settings node with your specific IDs, channels, and email addresses.

## Requirements

- Stripe account with API access
- Google Sheets with historical sales data
- Notion workspace for dashboard
- Slack workspace with posting permissions
- Gmail account for executive reports
- Google Gemini API access

## How to customize

Adjust the anomaly detection threshold in the Calculate Trends code node (currently 50% variance triggers alerts). Modify the Slack message templates, email formatting, or add additional metrics to the Notion dashboard. Change the schedule trigger from weekly to daily or monthly based on your reporting needs.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
