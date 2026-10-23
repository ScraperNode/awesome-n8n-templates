# 💬 Send HubSpot deal follow-ups with Gmail, Slack, and Google Sheets

> ⚡ **27 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow triggers when a new deal is created in HubSpot, sends a two-step follow-up sequence via Gmail, checks HubSpot for a recent email reply, then updates the deal stage, alerts a Slack channel on replies, and logs outcomes to Google Sheets.

## How it works
1. Triggers when a new deal is created in HubSpot and retrieves the full deal record.
2. Fetches the associated HubSpot contact and verifies a contact and email address exist.
3. If contact data is missing, appends a “skipped” entry to Google Sheets and stops.
4. If valid, sends an intro email from Gmail and updates the HubSpot deal stage to reflect the initial outreach.
5. Waits 2 days, sends a follow-up email from Gmail, then waits 3 more days and re-fetches the HubSpot contact.
6. If HubSpot shows a recent email reply date, posts an alert to Slack, updates the deal to “Meeting Booked,” and logs the result to Google Sheets.
7. If no reply is detected, sends a final breakup email, updates the deal to “Closed Lost,” and logs the result to Google Sheets.

## Setup
1. Connect HubSpot credentials and ensure deals have an associated contact with an email address.
2. Connect a Gmail account used to send the intro, follow-up, and breakup emails.
3. Connect Slack credentials and replace the Slack channel ID with your target channel.
4. Connect Google Sheets credentials, replace the spreadsheet ID, and ensure the target sheet has columns for Date, Deal Name, Contact Name, Contact Email, and Sequence Status.
5. Review and customize the email subjects/bodies and the HubSpot deal stage updates to match your pipeline stages.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, HubSpot Trigger, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
