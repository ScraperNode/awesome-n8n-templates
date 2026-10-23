# 🔬 Detect maverick spend and alert reviewers via Slack, Gmail, Sheets and Gemini

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow runs daily to compare procurement transactions in Google Sheets against an approved supplier list, flags unapproved (maverick) spend, uses Google Gemini to generate compliant alternatives, alerts reviewers via Slack and Gmail, logs violations back to Google Sheets, and escalates unresolved cases after two hours.

## How it works
1. Runs every day at 11:00 AM on a schedule.
2. Loads the approved supplier list and the latest transactions from Google Sheets and normalizes supplier names for consistent matching.
3. Compares each transaction’s supplier against the approved list and flags transactions from unapproved suppliers as maverick spend.
4. For approved suppliers, marks the transaction as processed in Google Sheets and ends.
5. For maverick spend, sends the transaction details and the approved supplier list to Google Gemini to generate corrective recommendations and alternative suppliers.
6. Formats the AI output with a timestamp, posts a Slack alert, and sends a detailed violation email through Gmail.
7. Appends the violation details to a Google Sheets log, marks the transaction as processed, waits two hours, and then posts an escalation message to Slack.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet and sheet selections for the approved supplier list, transactions list, and violation log.
2. Ensure your transactions sheet includes (at minimum) transaction_id, supplier_name, amount, department, and a processed column used to mark items as handled.
3. Add a Google Gemini (PaLM) API credential for the AI compliance suggestion step.
4. Add Slack OAuth2 credentials and set the target channel for the initial alert and the escalation alert.
5. Add a Gmail OAuth2 credential and set the recipient(s) and sender settings used for the violation report email.
6. Adjust the daily schedule time and the two-hour escalation delay to match your compliance review process.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
