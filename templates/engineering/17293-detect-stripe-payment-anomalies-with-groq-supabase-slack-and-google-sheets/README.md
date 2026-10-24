# ⚒️ Detect Stripe payment anomalies with Groq, Supabase, Slack, and Google Sheets

> ⚡ **36 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow runs hourly to read Stripe transaction logs from Google Sheets, normalize and load them into Supabase, then uses Groq (OpenAI-compatible chat completions) to detect anomalies and, when found, records incidents in Supabase and posts an alert to Slack while logging errors back to Google Sheets.

## How it works
1. Runs every hour on a schedule.
2. Reads raw Stripe-like transaction rows from a Google Sheets worksheet and normalizes fields (for example converting cents to USD and parsing risk scores).
3. Inserts the cleaned transactions into a Supabase table for analytics.
4. Sends the inserted transaction data to Groq’s chat completions API with a prompt to return an anomaly result as strict JSON.
5. Parses the Groq response into structured fields and checks whether an anomaly is flagged.
6. If an anomaly is true, writes an incident record to a Supabase incident_logs table and posts an alert message to a Slack channel.
7. If Supabase, Groq, or Slack steps error, appends an error entry (including node name, severity, and transaction_id) to an error_logs sheet in Google Sheets.

## Setup
1. Connect Google Sheets OAuth2 credentials and set the spreadsheet and worksheet IDs for the raw input sheet and the error_logs sheet.
2. Connect Supabase credentials and ensure the analytics_data and incident_logs tables exist with columns matching the fields used (for example transaction_id, amount, risk_score, anomaly_type, severity, ai_label, and record_id).
3. Add your Groq API key (or replace the Authorization header) and confirm the model name and endpoint URL are correct for your Groq account.
4. Connect Slack OAuth2 credentials and select the target channel for anomaly alerts.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Supabase, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
