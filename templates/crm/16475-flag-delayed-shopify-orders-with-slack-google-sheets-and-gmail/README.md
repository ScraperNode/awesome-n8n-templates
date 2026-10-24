# 🤝 Flag delayed Shopify orders with Slack, Google Sheets and Gmail

> ⚡ **7 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs daily to check Shopify for open, unfulfilled orders older than two days, classifies them by delay severity, posts a digest to Slack, logs each delayed order to Google Sheets, and emails an HTML summary report via Gmail.

## How it works
1. Runs every day at 08:00 (server time) on a schedule trigger.
2. Calls the Shopify Admin REST API to fetch up to 250 open orders with `fulfillment_status=unfulfilled`.
3. Calculates each order’s age in days and extracts key details (customer, totals, items, and Shopify Admin order link).
4. Filters to only orders delayed by 2+ days and labels each one as WARNING (2–4 days), CRITICAL (5–7 days), or ESCALATION (8+ days).
5. Checks whether any delayed orders exist and stops without notifying if the delayed list is empty.
6. Builds a Slack message grouped by severity and posts the delay digest to the configured Slack channel.
7. Appends each delayed order as a row in a Google Sheets tracker, then aggregates the list and sends an HTML summary email via Gmail to the operations manager.

## Setup
1. Add Shopify Admin API credentials (HTTP header auth) and replace `YOUR_STORE` in the Shopify API and admin order URLs with your store domain.
2. Add Slack credentials and set the target channel ID in the Slack message step.
3. Add Google Sheets credentials, set `YOUR_GOOGLE_SHEET_ID`, and ensure the worksheet named “Fulfillment Delay Tracker” exists with matching columns.
4. Add Gmail credentials and set `YOUR_OPS_MANAGER_EMAIL` to the recipient address for the summary report.
5. Adjust the cron schedule and the delay thresholds (2/5/8 days) in the filtering and severity rules if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
