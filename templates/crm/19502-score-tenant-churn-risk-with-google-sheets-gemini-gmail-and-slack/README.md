# 🤝 Score tenant churn risk with Google Sheets, Gemini, Gmail and Slack

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
YouTube video: https://youtu.be/wtTylRmZ4D8
This workflow runs daily to score tenant churn risk using Google Sheets data and Google Gemini sentiment analysis, then updates the tenant spreadsheet, alerts high-risk cases in Slack, and sends targeted Gmail outreach to medium- and low-risk tenants.

## How it works
1. Runs every 24 hours on a schedule.
2. Loads churn model weights and reads tenant master records from Google Sheets.
3. Scores each tenant for payment friction, maintenance friction, and lease proximity based on spreadsheet fields.
4. Uses Google Gemini to analyze tenant communications sentiment and returns a 0–100 sentiment risk score with a one-sentence summary.
5. Calculates a weighted churn risk score, labels the tenant as High/Medium/Low risk, and routes the tenant down the appropriate path.
6. For High risk, updates the tenant record in Google Sheets with a CRM flag and risk score and sends a Slack alert to the property manager.
7. For Medium and Low risk, writes the risk score/flag back to Google Sheets and sends a tailored renewal or check-in email via Gmail.

## Setup
1. Add Google Sheets service account credentials and update the spreadsheet ID and sheet (gid) used for reading and writing tenant records.
2. Add a Google Gemini (PaLM) API credential for the sentiment scoring step.
3. Add Gmail OAuth2 credentials and confirm the email copy and the calendar link placeholder used in the outreach messages.
4. Add Slack credentials and set the target channel for high-risk alerts, completion notices, and workflow failure notifications.
5. Ensure your Google Sheet contains the expected columns (for example resident_email, months_remaining, payment/maintenance metrics, and communication text fields) and that resident_email uniquely identifies rows for updates.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
