# 🎣 Save website form leads to Google Sheets with Slack alerts and Gmail replies

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures website form submissions via a webhook, validates and normalizes the fields, appends each lead to Google Sheets, notifies a Slack channel, and sends an automatic confirmation email from Gmail.

## How it works
1. Receives a POST request from your website form via an n8n webhook.
2. Normalizes the submitted fields, timestamps the lead, and validates the email address format.
3. Stops processing if the email is invalid.
4. Appends the lead details to a Google Sheets spreadsheet.
5. Posts a formatted new-lead alert message to a Slack channel.
6. Sends an auto-reply confirmation email to the lead using Gmail and returns a JSON `{ "ok": true }` response to the form.

## Setup
1. Create a Google Sheet with columns for `received_at`, `name`, `email`, `message`, and `source`, then connect Google Sheets credentials and replace `YOUR_SHEET_ID` with your spreadsheet URL/ID.
2. Connect Slack credentials and set the target channel (for example, `#leads`) where notifications should be posted.
3. Connect Gmail credentials and customize the auto-reply subject and message content (including your sign-off).
4. Copy the webhook URL from the webhook trigger and configure your form tool/site to send POST requests to it with `name`, `email`, `message`, and optionally `source`.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
