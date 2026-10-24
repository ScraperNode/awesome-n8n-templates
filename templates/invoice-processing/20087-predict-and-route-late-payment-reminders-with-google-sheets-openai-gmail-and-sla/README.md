# 🧾 Predict and route late payment reminders with Google Sheets, OpenAI, Gmail and Slack

> ⚡ **18 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow runs every weekday morning to read invoices and payment history from Google Sheets, score each open invoice for late-payment risk, and use OpenAI plus Gmail to send friendly or firm reminders, or create a call task with a Slack alert, then log actions back to Google Sheets.

## How it works
1. Runs at 9 AM on weekdays using a schedule trigger.
2. Loads dunning thresholds and business settings, then reads open invoices and payment history from Google Sheets.
3. Calculates a per-client payment profile and a 0–100 risk score for each unpaid invoice, selects a dunning tone (friendly, firm, or call), and enforces cooldown rules so reminders don’t repeat too frequently or soften.
4. For friendly items, uses OpenAI (gpt-4o-mini) to draft a short pre-due or gentle overdue email and sends it via Gmail.
5. For firm items, uses OpenAI (gpt-4o-mini) to draft a clear overdue notice and sends it via Gmail.
6. For call items, appends a call task row to a Google Sheets “Call Tasks” tab and posts an escalation message to a Slack #collections channel.
7. Updates the invoice row in Google Sheets with the latest reminder stage, reminder date, and risk score to track follow-ups.

## Setup
1. Create a Google Sheets workbook with “Invoices”, “Payment History”, and “Call Tasks” tabs and include the columns referenced by the workflow (for example Invoice ID, Client Email, Due Date, Status, Last Reminder Stage/Date, and history Paid Date).
2. Add Google Sheets credentials and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes with your spreadsheet ID.
3. Add an OpenAI API key and a Gmail OAuth2 credential, and ensure the Gmail account is allowed to send reminders to your customers.
4. Add a Slack OAuth2 credential and set the target channel (for example #collections) in the Slack message node.
5. Update the dunning settings in “Set Dunning Rules” (company name, payment link, reply-to address, owner name, and thresholds like preDueNudgeDays and highRiskScore) to match your process.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
