# 💬 Re-engage stalled HubSpot deals with OpenAI, Gmail, Slack, and Google Sheets

> ⚡ **23 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs every weekday morning to find HubSpot deals with no recent activity, uses OpenAI to generate a personalized re-engagement email, sends it via Gmail, logs the outcome to Google Sheets, and notifies your team in Slack with per-deal alerts and a daily digest.

## How it works
1. Runs on a weekday schedule at 08:00 and retrieves all open deals from HubSpot.
2. Calculates days since the last deal activity and keeps only deals stalled for 7 days or more.
3. Checks whether each stalled deal has an associated HubSpot contact and logs deals without a contact to Google Sheets as skipped.
4. Fetches the associated contact from HubSpot, verifies an email address exists, and logs deals without an email to Google Sheets as skipped.
5. Sends the deal and contact context to OpenAI to generate a JSON email subject and body, then parses the result into fields.
6. Sends the re-engagement email to the contact via Gmail, adds a note to the HubSpot deal, posts a Slack alert to the sales channel, and appends the action to Google Sheets.
7. Builds a run summary (re-engaged vs skipped) and posts a single daily digest message to Slack.

## Setup
1. Add credentials for HubSpot, OpenAI, Gmail, Slack, and Google Sheets in n8n.
2. Replace `REPLACE_WITH_YOUR_SHEET_ID` with your Google Sheet document ID and ensure the target sheet name (for example, `Sheet1`) exists.
3. Create the Google Sheet columns used for logging (Date, Deal Name, Contact Email, Stage, Days Stalled, Email Sent, Slack Notified, Status).
4. Update the Slack channel names/IDs for the sales notifications (for example, `sales-team`) and the error channel (for example, `n8n-errors`).

## 🔗 Nodes Used

Google Sheets, Slack, HubSpot, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
