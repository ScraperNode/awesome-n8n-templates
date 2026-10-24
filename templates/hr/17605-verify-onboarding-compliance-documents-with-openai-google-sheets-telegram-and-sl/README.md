# 👥 Verify onboarding compliance documents with OpenAI, Google Sheets, Telegram, and Slack

> ⚡ **33 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow monitors new hires in Google Sheets, downloads onboarding documents from Google Drive, uses OpenAI (gpt-4o-mini) to verify each file and determine overall compliance, then notifies HR via Telegram and updates the sheet, with a daily scheduled reminder loop for pending cases.

## How it works
1. Triggers when a new row is added to the NewHires tab in Google Sheets.
2. Looks up the required documents for the employee’s role from the Checklist tab and determines which document links are missing.
3. Downloads the provided documents (ID Proof, Tax Form, Signed Policy, and NDA) from Google Drive, extracts text from the PDFs, and sends the text to OpenAI for per-document classification and validation.
4. Merges the four document review results and runs a final OpenAI compliance pass that outputs a structured compliance report with any gaps.
5. If gaps are found, sends an HR alert via Telegram and updates the employee row in Google Sheets as Pending with a gap summary and reminder metadata.
6. If no gaps are found, sends a confirmation via Telegram and marks the employee row in Google Sheets as Compliant.
7. Runs daily on a schedule to find Pending hires due for follow-up, sends a Telegram reminder, and increments the reminder count in Google Sheets (with an escalation flag after three reminders).
8. Triggers on workflow errors and posts an execution alert to a Slack channel for operational monitoring.

## Setup
1. Connect Google Sheets OAuth2 credentials and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes, ensuring the spreadsheet has NewHires and Checklist tabs with matching column names.
2. Connect Google Drive OAuth2 credentials and ensure the NewHires document link fields contain downloadable Google Drive file URLs for the four document types.
3. Add an OpenAI credential with access to gpt-4o-mini and assign it to the four document classifiers and the compliance reasoning step.
4. Create a Telegram bot, add Telegram credentials in n8n, and replace YOUR_HR_TELEGRAM_CHAT_ID in all Telegram messages.
5. Add Slack OAuth2 credentials, set YOUR_SLACK_CHANNEL_ID in the error-alert step, and select the channel where workflow failures should be posted.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Google Drive, Schedule Trigger, Google Sheets Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
