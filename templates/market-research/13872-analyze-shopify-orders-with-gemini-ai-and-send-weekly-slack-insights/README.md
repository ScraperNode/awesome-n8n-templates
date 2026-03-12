# 📊 Analyze Shopify orders with Gemini AI and send weekly Slack insights

> ⚡ **55 views** · 📊 [Market Research & Insights](../)

## Description

## Who is this for

E-commerce store owners and sales managers who want AI-powered insights from their Shopify data without manually crunching numbers every week.

## What it does

This workflow automatically analyzes your Shopify sales performance every Monday morning and delivers intelligent insights via Slack and email. It pulls the last 7 days of orders, calculates key metrics (revenue, order count, average order value), and sends the data to Gemini AI for trend analysis and actionable recommendations.

The AI identifies patterns in your sales data and provides specific suggestions for improving performance. All metrics are logged to Google Sheets for historical tracking, and the team receives instant alerts when revenue drops more than 20% compared to the previous week.

## How to set up

1. Connect your Shopify store with order read permissions
2. Add your Gemini API key for AI analysis
3. Set up Slack integration and choose your target channels (#sales and #alerts)
4. Configure Gmail credentials for stakeholder email reports
5. Create a Google Sheets document with a "Weekly Metrics" tab for data tracking
6. Update the email recipients and spreadsheet ID in the respective nodes

## Requirements

- Shopify store with API access
- Google Gemini API key
- Slack workspace
- Gmail account
- Google Sheets access

## How to customize

Adjust the revenue drop threshold in the IF node (default: 20%), modify the schedule frequency, customize Gemini prompts for different analysis types, or add additional Slack channels for department-specific reports.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Shopify, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
