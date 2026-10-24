# 🤝 Calculate Shopify variant prices from Google Sheets with Slack approvals

> ⚡ **5 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Video Explanation: https://youtu.be/_geRatkc1kU?si=qALW_nrPrNB4THuO

This workflow runs daily to calculate Shopify variant prices from Google Sheets COGS inputs, automatically updates qualifying prices in Shopify, and posts Slack alerts for changes that need manual approval; it also supports Slack-based approvals to apply a proposed price from a Slack thread.

## How it works
1. Runs every day on a scheduled trigger.
2. Reads product dependency/recipe data from Google Sheets and looks up the latest supplier prices in a second Google Sheets sheet.
3. Calculates raw COGS, landed COGS (with hidden cost percentage), and a target-margin retail price for each Shopify variant.
4. Checks the calculated price against thresholds and either updates the Shopify variant price via the Shopify Admin API or posts an approval-required alert to Slack.
5. Posts a Slack confirmation message when a scheduled Shopify price update succeeds.
6. Triggers on Slack reaction events, verifies an authorized Slack user approved the change, then fetches the Slack thread replies and extracts the variant ID and approved price.
7. Updates the Shopify variant price with the extracted value and posts a final status message to Slack.

## Setup
1. Connect Google Sheets with a Service Account and set the spreadsheet/document IDs and sheet names for both the product dependencies sheet and supplier prices sheet.
2. Connect a Slack OAuth credential, set the channel to monitor for reactions, and set the channel where approval alerts and confirmations are posted.
3. Connect Shopify OAuth2 credentials (Admin API access) and update the myshopify domain in the Shopify Admin API request URLs.
4. Replace the placeholder authorized Slack user ID and adjust the approval reaction name if you want a different approver or reaction.
5. Set your hidden cost percentage and profit margin percentage values used in the COGS and price calculation.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Slack Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
