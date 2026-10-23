# 👥 Track tenant reference requests with forms, Gmail, and Google Sheets

> ⚡ **1 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow collects tenant reference requests via an n8n Form, logs them in Google Sheets, emails the previous landlord a feedback form link, and automatically sends reminders and escalations via email (SMTP/Gmail) when responses are overdue.

## How it works
1. Receives an agent’s tenant reference request through an n8n Form with the applicant, property, landlord email, and agent email.
2. Appends a “Pending” tracking row to a Google Sheets tracker and alerts the agent via Gmail if the sheet write fails.
3. Sends the landlord an email (via SMTP) containing a link to the landlord feedback form with the Submission ID in the URL, and alerts the agent via Gmail if the email fails.
4. Waits 48 hours, looks up the tracking row in Google Sheets by Submission ID, and if the status is still “Pending” sends a reminder email to the landlord.
5. Marks the tracking row as “Reminder Sent” in Google Sheets and emails the agent to prompt manual follow-up.
6. Accepts the landlord’s feedback through a separate n8n Form and updates the matching Google Sheets row with the answers and a “Responded” status (or logs the raw response to a backup sheet if the update fails).
7. Runs hourly to find “Pending” rows older than 49 hours, emails an escalation to the agent, and updates the row status to “Escalated” in Google Sheets.

## Setup
1. Connect Google Sheets credentials and select the “Tenant Reference Tracker” spreadsheet (and ensure it contains the expected columns in Sheet1 plus a “Raw Response Backup” sheet for fallback logging).
2. Add email credentials: an SMTP account for landlord/reminder/escalation messages and a Gmail connection for agent failure alerts.
3. Replace the placeholder URL in all email templates (YOUR-N8N-DOMAIN and REPLACE-WITH-LANDLORD-FEEDBACK-FORM-ID) with your Landlord Feedback Form production URL so the Submission ID query parameter is preserved.
4. Review the schedule and timing values (48-hour wait and 49-hour escalation threshold) and adjust them to match your process before activating the workflow.

## Requirements
- Google Sheets account (with a "Tenant Reference Tracker" spreadsheet)
- SMTP account for outbound landlord/reminder/escalation emails
- Gmail account for agent failure alerts

## Customization
- Customize the reminder delay (default 48 hours), escalation threshold (default 49 hours), and email templates to match your agency's tone.

## 🔗 Nodes Used

Send Email, Google Sheets, Gmail, Schedule Trigger, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
