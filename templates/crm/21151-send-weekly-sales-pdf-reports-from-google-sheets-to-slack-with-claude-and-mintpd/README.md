# 🤝 Send weekly sales PDF reports from Google Sheets to Slack with Claude and MintPDF

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every Monday, reads sales data from Google Sheets, compares the last 7 days to the previous week, generates an executive summary with Anthropic Claude, renders a PDF via MintPDF, posts it to Slack, and archives the report in Google Drive.

## How it works
1. Runs every Monday at 8:00 on a schedule.
2. Loads report settings and fetches all rows from the specified Google Sheets Sales tab.
3. Splits rows into “this week” and “last week,” totals KPIs (revenue, refunds, orders, units, customers), and calculates changes plus top products, regions, and daily revenue.
4. If there are no sales in the current period, posts a no-sales message to the configured Slack channel and stops.
5. Sends the computed metrics to Anthropic Claude to write a 3–5 bullet executive summary, falling back to a basic summary if the AI output is empty.
6. Builds a Markdown report, converts it to a PDF using MintPDF, then posts the PDF to Slack and uploads it to Google Drive or alerts Slack if rendering fails.

## Setup
1. Install the community node `n8n-nodes-mintpdf` and add a MintPDF API credential.
2. Add credentials for Google Sheets, Slack (with `files:write` and `chat:write` scopes), Google Drive, and Anthropic (Claude).
3. Update the Report settings values for your Google Sheet ID, Sales tab name, Slack channel ID, and Google Drive folder ID.
4. Ensure your Google Sheet has columns named Date, Order ID, Customer, Product, Region, Quantity, Amount, and Status with parseable dates and amounts.

## Requirements
- A MintPDF API key (free plan: 100 PDFs a month)
- Google Sheets, Google Drive and a Slack bot with files:write and chat:write
- An Anthropic API key (or another chat model)

## Customization
- Replace "Get sales rows" with Shopify, Stripe or Postgres and keep the same columns
- Change the period in "Compare this week with last week"
- Send the PDF by Gmail instead of Slack

## 🔗 Nodes Used

Google Sheets, Slack, Google Drive, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
