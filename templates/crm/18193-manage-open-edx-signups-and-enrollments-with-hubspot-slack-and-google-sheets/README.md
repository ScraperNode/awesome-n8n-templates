# 🤝 Manage Open edX signups and enrollments with HubSpot, Slack and Google Sheets

> ⚡ **20 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow captures Open edX user registration and course enrollment events via webhooks, then syncs the activity to HubSpot, sends confirmation emails, posts Slack notifications, and appends execution results to Google Sheets.

## How it works
1. Receives an Open edX user registration event via a POST webhook.
2. Searches HubSpot for an existing contact and, if found, posts a Slack notification to alert sales.
3. If no contact exists, creates the HubSpot contact, adds it to the “Open edX Users” contact list, and sends a welcome email.
4. Posts a Slack team notification about the registration and appends the result to Google Sheets.
5. Receives an Open edX course enrollment event via a POST webhook.
6. Searches HubSpot for the enrolled user, creates an enrollment record in HubSpot, sends an enrollment confirmation email, then posts a Slack notification and logs the result to Google Sheets.

## Setup
1. Configure Open edX to send registration and enrollment events to this workflow’s webhook URL (same path is used by both webhook triggers).
2. Connect HubSpot credentials, set the target contact list ID for “Open edX Users,” and review the enrollment record configuration to match your HubSpot objects/properties.
3. Set up SMTP (or an email provider) for the Email Send nodes and replace the “from” address and email templates.
4. Connect your Slack API credentials and choose the channel(s) for the sales/team notifications.
5. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet names for both logging steps.

## 🔗 Nodes Used

Send Email, Google Sheets, Slack, Webhook, HubSpot

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
