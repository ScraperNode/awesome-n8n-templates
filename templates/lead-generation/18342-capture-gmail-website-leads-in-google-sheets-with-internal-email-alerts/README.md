# 🎣 Capture Gmail website leads in Google Sheets with internal email alerts

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
Qualify Real Estate Leads From Gmail And Build A Google Sheets Mini CRM
Automatically classify real estate inquiries from Gmail, score lead urgency, prevent duplicate records, save new leads to Google Sheets, create an activity log, send priority-based internal alerts, and reply to the lead.

## How it works
1. Triggers every minute and searches Gmail for messages newer than one day whose subject matches lead/contact/inquiry terms.
2. Extracts received time, sender name, sender email, subject, and a cleaned message snippet from the email content.
3. Appends the extracted lead details as a new row in a Google Sheets tab.
4. Sends an internal notification email with the captured lead details using Gmail.

## Setup
1. Connect a Gmail OAuth2 credential for both reading lead emails and sending the notification email.
2. Connect a Google Sheets OAuth2 credential and set the target spreadsheet ID and sheet name (default: `Leads`) in the Google Sheets node.
3. Create the `Leads` sheet with columns: Received At, Name, Email, From, Subject, Message, Source (or update the column mapping to match your headers).
4. Update the Gmail search query and polling settings to match how your lead emails are identified.
5. Replace `your-team@example.com` with the internal recipient address for notifications.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
