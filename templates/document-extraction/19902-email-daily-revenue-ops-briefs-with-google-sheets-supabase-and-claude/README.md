# 🔬 Email daily revenue ops briefs with Google Sheets, Supabase, and Claude

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow sends daily operations briefs by reading each client’s revenue data from Google Sheets, analyzing week-over-week performance, generating a short summary with Anthropic Claude, emailing the brief via SMTP, and logging results in Supabase, plus a webhook flow to onboard new clients.

## How it works
1. Runs every day at 07:00 on a schedule.
2. Fetches all active clients from Supabase and processes them one by one.
3. Reads each client’s Google Sheets “Revenue” tab and calculates totals for the last seven complete days versus the prior seven days, plus overdue/failed/unpaid transaction counts and category breakdowns.
4. Sends the computed metrics and any detected anomalies to Anthropic Claude to generate a plain-English operations brief.
5. Emails the brief to the client using SMTP and includes a link to the client’s dashboard.
6. Stores the brief text and supporting metrics in a Supabase brief history table, then continues to the next client (skipping clients where sheet reads or Claude calls fail).
7. Exposes a header-authenticated signup webhook that validates business details and a Google Sheets URL, creates the client record in Supabase, returns a dashboard URL, and sends a welcome email via SMTP.

## Setup
1. Add credentials for Supabase, Google Sheets OAuth2, SMTP, and an Anthropic HTTP Header Auth connection (using the `x-api-key` header) and update the Claude model ID in the Anthropic request.
2. Create Supabase `clients` and `brief_history` tables with fields matching the workflow mappings, and ensure each client Google Sheet has a “Revenue” tab with `Date`, `Amount`, `Category`, and `Status` columns.
3. Replace `REPLACE_WITH_YOUR_APP_DOMAIN` and `REPLACE_WITH_VERIFIED_SENDER@example.com` in both email steps (and the dashboard URL response) with your actual domain and verified sender address.
4. Configure and protect the signup webhook by setting a header-auth secret in n8n and sending the required header from your app when calling the webhook URL.
5. Verify the workflow timezone and the 07:00 cron schedule, then test the signup flow and a full daily run before activating.

## Requirements
- Self hosted n8n.

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
