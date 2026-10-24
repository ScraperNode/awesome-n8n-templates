# 📈 Track gold price changes and send Slack alerts with Gemini

> ⚡ **55 views** · 📈 [Crypto Trading & Stock Market](../)

## Description

## Quick Overview
This workflow logs daily gold prices in INR from MetalpriceAPI into an n8n Data Table, calculates day-over-day changes, and uses Google Gemini to send Slack alerts for ±1% moves and a weekly trend report.

## How it works
1. Runs every morning at 10:00 to fetch the latest XAU price in INR from MetalpriceAPI.
2. Converts the returned rate into a per-10g gold price and stores it as a new row in an n8n Data Table.
3. Retrieves all saved prices, takes the last two entries, calculates absolute and percentage change, and updates the latest row with these metrics.
4. If the percentage change is ≥ 1% or ≤ -1%, Google Gemini drafts a short alert message and posts it to a Slack channel.
5. Runs weekly at 10:00, fetches all Data Table records, and keeps the most recent seven entries.
6. Aggregates the last seven days of prices and changes, Google Gemini generates a formatted summary report, posts it to Slack, and saves the report text back to the latest Data Table row.

## Setup
1. Add your MetalpriceAPI credentials (HTTP header auth) and confirm the request parameters (base=INR, currencies=XAU) match your needs.
2. Create or select an n8n Data Table with columns for gold_prices, price_change, percent_change, and alert_message, and update the workflow’s Data Table ID to point to it.
3. Add Google Gemini (PaLM) API credentials for the alert and reporting prompts.
4. Add Slack credentials and set the target channel for both Slack posting steps.
5. Review the schedule triggers (daily and weekly at 10:00) and adjust the timezone/time as needed.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Google Gemini Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
