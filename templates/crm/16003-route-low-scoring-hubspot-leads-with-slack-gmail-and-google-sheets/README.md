# 🤝 Route low-scoring HubSpot leads with Slack, Gmail and Google Sheets

> ⚡ **21 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs hourly to find HubSpot contacts whose lead score drops below a threshold, deduplicates alerts using Google Sheets, notifies the owner via Slack, creates a HubSpot follow-up task, sends a re-engagement email with Gmail, and logs alert activity back to Google Sheets.

## How it works
1. Runs every hour on a schedule.
2. Pulls contacts from HubSpot and compares them against a Google Sheets “Alert Dedup Log” to skip anyone alerted within the last 24 hours while flagging contacts with a HubSpot score under 50.
3. Looks up each contact’s owner in HubSpot and builds an alert payload including urgency (CRITICAL under 20 vs WARNING under 50) and the target Slack channel.
4. Posts the alert to Slack in the appropriate channel (urgent vs standard) and sends a Slack DM to the contact owner.
5. Creates a follow-up task in HubSpot for the at-risk contact and sends the contact a re-engagement email via Gmail.
6. Logs the alert details to a Google Sheets “Lead Score Alerts” tab and updates the dedup log with the contact ID and last-alerted timestamp.

## Setup
1. Connect your HubSpot OAuth2, Slack OAuth2, and Gmail credentials in n8n.
2. Add a Google Sheets Service Account credential and share the target spreadsheet with the service account email.
3. Replace REPLACE_WITH_YOUR_SHEET_ID with your Google Sheets document ID in both Google Sheets nodes.
4. Create two sheet tabs named “Lead Score Alerts” and “Alert Dedup Log” with columns that match the fields written/read (including contact_id and last_alerted for deduplication).
5. Update the Slack channel names (sales-urgent and sales-alerts) and adjust the score thresholds in the code step if your team uses different criteria.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
