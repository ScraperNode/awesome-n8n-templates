# 💬 Send proposal follow-ups and update deals with HubSpot, Gmail, Sheets and Slack

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow runs every weekday morning to find HubSpot deals with stale proposal activity, pulls the associated contact email, enforces opt-out and follow-up limits using Google Sheets, sends a value-based follow-up via Gmail, updates the HubSpot deal stage, and notifies the sales team in Slack with error alerts.

## How it works
1. Runs on a weekday schedule at 9:00 AM.
2. Pulls all HubSpot deals and filters to those with no activity in the last 3 days, extracting the associated contact ID and key deal fields.
3. Fetches the associated HubSpot contact to get the prospect’s email and opt-out status, and skips contacts who are opted out or missing an email.
4. Looks up the deal in a Google Sheets FollowUpLog to count prior “Follow-Up Email Sent” actions and stops processing if the deal has already reached 3 follow-ups.
5. Alerts a Slack channel when the follow-up cap is reached so a salesperson can take manual action.
6. Sends a follow-up email via Gmail using a high-value template for deals ≥ 5000 and a standard template otherwise, then updates the deal stage in HubSpot.
7. Appends the follow-up action to Google Sheets and posts a Slack notification to the sales team, while sending a separate Slack alert if any step errors.

## Setup
1. Add HubSpot OAuth2 credentials and ensure deals have an associated contact with an email address.
2. Add Google Sheets credentials, create a sheet/tab named “FollowUpLog” with columns like “Deal ID” and “Action”, and replace REPLACE_WITH_YOUR_SHEET_ID with your spreadsheet ID.
3. Add Gmail credentials for the mailbox that sends the follow-up emails.
4. Add Slack OAuth2 credentials and set the correct destination channels for the sales notifications, max-follow-up alerts, and error alerts.
5. Update the HubSpot deal stage value (currently set to "decisionmakerboughtin") and the deal amount threshold (currently 5000) to match your pipeline rules.

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
