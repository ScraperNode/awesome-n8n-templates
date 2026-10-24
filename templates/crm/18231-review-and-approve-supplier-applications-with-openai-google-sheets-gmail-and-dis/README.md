# 🤝 Review and approve supplier applications with OpenAI, Google Sheets, Gmail and Discord

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow monitors new supplier applications in Google Sheets, validates required fields, uses OpenAI to assess risk and recommend approval or follow-up, logs decisions back to Sheets, and notifies the team and applicants via Discord and Gmail, plus sends a monthly summary report.

## How it works
1. Triggers when a new row is added to the SupplierApplications sheet in Google Sheets.
2. Normalizes the application fields and checks that company name, contact email, and category are present.
3. Posts an invalid-application alert to Discord when required fields are missing.
4. Sends valid applications to OpenAI (gpt-4o-mini) to categorize the supplier, score risk, and return an approval/request-info/reject recommendation.
5. Writes the AI review results and status into the SupplierLog sheet in Google Sheets.
6. If the application needs review, posts details to Discord and emails the supplier via Gmail requesting more information.
7. If the application does not need review, posts an approval message to Discord and emails the supplier an approval confirmation via Gmail.
8. On the first day of each month, reads SupplierLog from Google Sheets, summarizes the month with OpenAI, then emails and posts the summary to Discord.

## Setup
1. Create or select a Google Sheets document with SupplierApplications (incoming rows) and SupplierLog (review log) sheets, and update the document ID and sheet names if yours differ.
2. Add Google Sheets OAuth credentials for both the trigger and the log read/append actions.
3. Add an OpenAI API credential and confirm the model selection (gpt-4o-mini) in both AI steps.
4. Add a Discord bot credential and set the target server and channel IDs for invalid, review, approval, and monthly report messages.
5. Add a Gmail OAuth2 credential and update the recipient address for the monthly report email and any email templates or sender settings as needed.

## 🔗 Nodes Used

Google Sheets, Discord, Gmail, Schedule Trigger, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
