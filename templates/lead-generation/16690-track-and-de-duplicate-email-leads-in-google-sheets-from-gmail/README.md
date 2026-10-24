# 🎣 Track and de-duplicate email leads in Google Sheets from Gmail

> ⚡ **35 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow polls Gmail for new unread emails with a specific label, extracts lead details from each message, checks Google Sheets for duplicates by email or message ID, and appends only new leads to a designated spreadsheet.

## How it works
1. Polls Gmail every minute for unread messages matching the search query (for example, emails labeled “Leads”).
2. Extracts sender name and email, subject, message text, phone number (if found), received timestamp, and the Gmail message ID.
3. Reads existing rows from the target Google Sheets tab to compare against previously captured leads.
4. Flags the incoming lead as a duplicate if an existing row matches either the sender email address or the message ID.
5. Appends the lead as a new row in Google Sheets only when it is not flagged as a duplicate.

## Setup
1. Connect your Gmail OAuth2 credentials and adjust the Gmail trigger query/label and read status filter to match your intake process.
2. Connect your Google Sheets OAuth2 credentials.
3. Update the Google Sheet ID and sheet tab name in the extraction step, and ensure the sheet has columns for Email, Name, Subject, Phone, Message, Received At, and Message ID.

## Requirements
- n8n Cloud or self-hosted n8n instance
- Gmail account with OAuth2 credentials configured in n8n
- Google Sheets account with OAuth2 credentials configured in n8n
- A Google Sheet with columns: Email, Name, Subject, Phone, Message, Received At, Message ID

## Customization
- Change the Gmail search query or label filter on Gmail Trigger
- Edit GOOGLE_SHEET_ID and SHEET_NAME in Extract Lead Details
- Adjust phone extraction or add more parsed fields in Extract Lead Details
- Change duplicate logic in Verify Unique Lead
- Map different column names in Add Lead to Sheets

## Additional info
The workflow checks duplicates by sender email and Gmail message ID. If a lead already exists, no new row is appended. Create a Gmail label called "Leads" and filter incoming lead emails to that label, or change the trigger search query to match your process.

## 🔗 Nodes Used

Google Sheets, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
