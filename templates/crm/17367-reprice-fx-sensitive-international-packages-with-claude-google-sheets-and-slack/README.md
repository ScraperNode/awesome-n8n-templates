# 🤝 Reprice FX-sensitive international packages with Claude, Google Sheets and Slack

> ⚡ **6 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs on a schedule to fetch live FX rates and a package price list from Google Sheets, recalculates margin drift in USD, uses Anthropic Claude to finalize rounded repricing decisions, writes updated prices and an audit log back to Google Sheets, and posts a Slack alert.

## How it works
1. Runs every hour on a scheduled trigger.
2. Fetches the latest USD-based FX rates from frankfurter.app and reads the Packages sheet from Google Sheets via the Sheets API.
3. Calculates each package’s FX-adjusted USD cost, current margin, margin drift versus the target, and a recommended USD list price, then evaluates each package individually.
4. Filters to only packages whose margin drift exceeds the configured threshold.
5. Sends each flagged package to Anthropic Claude to apply conservative psychological rounding and return a JSON repricing decision with reasoning (and an optional customer note).
6. Updates the package’s USD list price, target margin, and repriced timestamp in the Packages sheet, appends an audit row to the RepricingLog sheet, and posts a summary message to a Slack channel.

## Setup
1. Add an Anthropic API credential and select the Claude model used by the workflow.
2. Configure Google OAuth2 credentials for the Google Sheets API requests and replace YOUR_SHEET_ID in all Sheets API URLs.
3. Create a Google Sheets spreadsheet with two tabs named Packages and RepricingLog and ensure the Packages tab has the expected columns (A–I).
4. Add a Slack credential and replace YOUR_SLACK_CHANNEL_ID with the channel ID to receive repricing alerts.
5. (Optional) Update the schedule interval and the margin drift threshold in the pricing calculation code to match how frequently and aggressively you want repricing to occur.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
