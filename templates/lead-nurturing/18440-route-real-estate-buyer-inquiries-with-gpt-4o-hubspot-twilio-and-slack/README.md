# 💬 Route real estate buyer inquiries with GPT-4o, HubSpot, Twilio and Slack

> ⚡ **4 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs daily to pull 30-day account usage from your product API, compute a health score, and use OpenAI to classify churn risk and recommend a retention play, then routes actions to Slack, Gmail, HubSpot, and Google Sheets.

## How it works
1. Runs every morning at 7am on a schedule.
2. Requests the last 30 days of account usage metrics from your product API.
3. Calculates a 0–100 health score per account from usage and support signals.
4. Sends the account context to OpenAI (GPT-4o) to classify churn risk (high/medium/low) and recommend one retention play.
5. Routes high-risk accounts to a Slack alert for the #customer-success channel, medium-risk accounts to a nurture email via Gmail, and low-risk accounts to a CRM update in HubSpot.
6. Appends the account’s signals, score, and chosen action to a Google Sheets “Churn Signals” tab for tracking and reporting.

## Setup
1. Provide a reachable product usage endpoint and update the HTTP request URL (and any required auth headers) to match your product API.
2. Add an OpenAI credential and ensure the selected GPT-4o model is available to your account.
3. Connect Slack credentials and confirm the target channel (for example, #customer-success) exists and is selectable.
4. Connect a Gmail account authorized to send emails and verify the account owner email field returned by your API is correct.
5. Connect HubSpot credentials and configure the contact lookup/update fields you want to write (for example, a custom health score property).
6. Connect Google Sheets credentials and replace REPLACE_WITH_SHEET_ID with your spreadsheet ID (and ensure a “Churn Signals” sheet/tab exists).

## 🔗 Nodes Used

HTTP Request, Slack, Twilio, Webhook, HubSpot, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
