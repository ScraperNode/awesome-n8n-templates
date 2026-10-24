# 🔬 Review electricity bills and flag anomalies with OpenAI, Google Sheets, and SendGrid

> ⚡ **15 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts electricity bill submissions via webhook or a monthly schedule, uses OpenAI to validate and summarize the bill, pulls up to 12 months of billing history and either returns an advisory report immediately or escalates high-severity cases via SendGrid email after a 24-hour wait.

## How it works
1. Receives a bill submission through a POST webhook or runs monthly on a cron schedule to recheck submitted bills.
2. Uses OpenAI to extract, normalize, and validate key bill fields (such as billing period, units consumed, bill amount, and tariff category) and rejects invalid submissions with an error response.
3. Fetches the account’s historical bill records from a Google Sheets BillsLog sheet and analyzes the most recent 12 months in Python to calculate a weighted anomaly score and severity.
4. Uses OpenAI to generate a plain-language advisory report based on the anomaly metrics and recommended next steps.
5. Returns the advisory report immediately and appends the result to Google Sheets for Normal and Moderate cases.
6. For High-severity cases, responds with an “escalation pending” message, waits 24 hours (with an optional resume webhook), then sends a support alert email via SendGrid and logs the escalated case to Google Sheets.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used by the extraction/validation and advisory generation steps.
2. Add Google Sheets OAuth2 credentials and replace YOUR_SHEET_ID in the Google Sheets API HTTP request and both Google Sheets append steps.
3. Add a SendGrid API key as an HTTP Header Auth credential (Authorization: Bearer <key>) and set the verified sender/recipient details in the SendGrid email request payload.
4. If using the webhook intake, copy the production webhook URL from n8n and configure your app or gateway to POST the required bill fields to it.
5. Ensure your Google Sheets document contains a BillsLog sheet with columns that match the workflow’s expected row positions used for history parsing.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
