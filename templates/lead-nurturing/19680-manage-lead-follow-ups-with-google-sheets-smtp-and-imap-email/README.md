# 💬 Manage lead follow-ups with Google Sheets, SMTP, and IMAP email

> ⚡ **80 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow captures new leads via a webhook, sends a compliant acknowledgment email via a guardrail sub-workflow, and logs the lead to Google Sheets. It then runs a daily follow-up sequence via email (SMTP), alerts an attorney after the final stage, and stops outreach when replies arrive via IMAP.

## How it works
1. Receives a new lead submission via a webhook and normalizes the lead details (name, email, phone, practice area) into a tracking record.
2. Generates an acknowledgment email, sends the message through a compliance/opt-out guardrail sub-workflow, and emails the lead via SMTP only when approved.
3. Appends the lead to a Google Sheets “Lead Follow-Up Tracker” sheet for ongoing tracking regardless of whether the acknowledgment email is sent.
4. Runs daily on a schedule, reads the tracker from Google Sheets, calculates which unresponsive leads are due for the next follow-up stage, and builds a stage-specific follow-up email.
5. Sends each follow-up message through the same compliance/opt-out guardrail and emails approved follow-ups via SMTP, then updates the lead’s last sent timestamp and stage in Google Sheets.
6. When a lead reaches the final configured follow-up stage without responding, sends an internal no-response alert email to the attorney via SMTP.
7. Watches the sending mailbox via IMAP for incoming replies, matches the sender to a tracked lead by email address, and marks that lead as responded in Google Sheets to prevent further follow-ups.

## Setup
1. Create and connect SMTP credentials for sending emails, and set the sender address variables (for example, `FIRM_FROM_EMAIL`, and optionally `FIRM_ATTORNEY_EMAIL`).
2. Create and connect IMAP credentials for the same mailbox, and confirm the workflow monitors the correct folder (default: INBOX).
3. Create a Google Sheets spreadsheet with a “Lead Follow-Up Tracker” sheet (columns such as `lead_id`, `name`, `email`, `phone`, `practice_area`, `submitted_at`, `responded`, `last_sent_at`, `last_stage_sent`) and set `LEAD_FOLLOWUP_SHEET_ID`.
4. Set `GUARDRAIL_WORKFLOW_ID` to an existing compliance/opt-out guardrail workflow that returns an `approved` boolean for email sends.
5. Copy the webhook URL from the lead intake trigger and configure your form tool (for example, Typeform or JotForm) to POST submissions to it, then adjust the parsing code if your field names differ.
6. Review and customize `FOLLOW_UP_STAGES`, `FIRM_NAME`, and the email template text in the code steps to match your timing and messaging.

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, Google Sheets, Webhook, Execute Sub-workflow, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
