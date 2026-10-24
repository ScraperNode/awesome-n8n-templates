# 🎣 Capture and deduplicate website leads in Google Sheets with Slack alerts

> ⚡ **1 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow receives website lead submissions via a webhook, normalizes and validates the fields, prevents duplicate rows by matching on email in Google Sheets, and posts a Slack alert only when a genuinely new lead is captured.

## How it works
1. Receives a POST request on a webhook endpoint containing lead data from a website form or any JSON sender.
2. Normalizes common field-name variants into a consistent lead schema, flags free-mail domains, and validates that the submission contains a usable email address.
3. Immediately responds to the sender with a JSON acknowledgement for valid leads, or returns HTTP 400 with an error message for invalid submissions.
4. Looks up the submitted email in a Google Sheets “Leads” worksheet to determine whether the lead already exists.
5. If the email is new, appends a full lead record to Google Sheets (including first/last seen timestamps and times seen) and posts a formatted “new lead” message to Slack.
6. If the email already exists, updates the existing Google Sheets row by bumping the times seen counter and updating the last seen timestamp without sending a Slack notification.

## Setup
1. Create a Google Sheets spreadsheet with a worksheet named `Leads` and the exact header columns: `email, name, company, phone, source, message, first_seen, last_seen, times_seen, status`.
2. Add Google Sheets OAuth2 credentials (with Google Sheets API and Google Drive API enabled) and select the target spreadsheet and `Leads` worksheet in the Google Sheets steps.
3. Add Slack credentials (OAuth2 or a bot token with permission to post messages) and select the channel to receive new-lead alerts.
4. Activate the workflow, copy the production webhook URL, and configure your form or website to POST submissions to that endpoint as JSON.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
