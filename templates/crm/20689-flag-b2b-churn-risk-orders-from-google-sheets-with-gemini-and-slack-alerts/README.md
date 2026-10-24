# 🤝 Flag B2B churn-risk orders from Google Sheets with Gemini and Slack alerts

> ⚡ **2 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/yjCtj3-QLws

This workflow runs daily and monitors new B2B order rows in Sheets, compares them to account baselines, and flags churn-risk anomalies. For qualifying accounts, it uses Gemini to generate a structured risk assessment, then sends alerts to Slack and Gmail and logs back to Sheets.

## How it works
1. Runs every day at 2:00 AM on a schedule.
2. Reads unprocessed orders from the Google Sheets “Orders_Ingest” sheet and proceeds only when an order_id is present.
3. Loads account baseline metrics from the “Account_Baselines” sheet, joins each order to its account_id baseline, and ignores Tier-3 accounts.
4. Calculates volume, cadence, and core-SKU-mix anomaly signals and keeps only orders that meet at least one anomaly rule.
5. Suppresses repeat alerts if the account’s last alert date is within the configured cooldown window.
6. Sends the order and baseline context to Google Gemini to classify risk, propose a primary hypothesis, and return two sales talking points as structured JSON.
7. Posts an alert to Slack, emails the assigned rep via Gmail, appends an audit record to the “Alert_Audit_Log” sheet, updates last_alert_date in “Account_Baselines,” and marks the order as processed in “Orders_Ingest.”

## Setup
1. Create a Google Sheets Service Account credential in n8n and share the spreadsheet with the service account email.
2. Create a Google Gemini (Google PaLM) API credential in n8n for the Gemini chat model.
3. Add Slack OAuth credentials and set the target channel for the alert message.
4. Add Gmail OAuth2 credentials for sending the rep briefing email.
5. Update the spreadsheet ID and cooldown_days values in the workflow configuration, and ensure the spreadsheet contains the sheets and columns referenced (Orders_Ingest, Account_Baselines, Alert_Audit_Log, including processed, account_id, and last_alert_date).

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
