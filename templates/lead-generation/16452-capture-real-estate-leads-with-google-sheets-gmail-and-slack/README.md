# 🎣 Capture real estate leads with Google Sheets, Gmail, and Slack

> ⚡ **20 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures real estate property inquiries via a webhook, saves the lead to Google Sheets, sends an auto-reply email through Gmail, and posts a notification to a Slack channel before returning a JSON confirmation to the website.

## How it works
1. Receives a POST request from your website form through a webhook endpoint.
2. Extracts and standardizes the lead details (name, email, phone, property ID, and message) from the incoming request.
3. Appends the inquiry details to a Google Sheets CRM spreadsheet.
4. Sends an acknowledgement email to the prospect using Gmail with the referenced property details.
5. Posts a new-lead alert to your agent team in Slack.
6. Returns a JSON response (for example, `{ "status": "received" }`) to confirm the submission was accepted.

## Setup
1. Connect Google Sheets OAuth credentials and update the target spreadsheet and sheet tab used to store new leads.
2. Connect Gmail OAuth credentials and customize the subject/body of the auto-reply message.
3. Connect Slack OAuth credentials and choose the channel where agent notifications should be posted.
4. Copy the webhook URL from the webhook trigger and configure your website inquiry form to send a POST request with `name`, `email`, `phone`, `property_id`, and `message` in the request body.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
