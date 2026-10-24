# 🔒 Send certification expiry alerts from Google Sheets with Gmail

> ⚡ **30 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow runs every Monday at 08:00 to read a Google Sheets roster, calculate days until each agent’s certification expiry date, and send a consolidated HTML alert email via Gmail to the configured manager when certifications expire within a defined threshold.

## How it works
1. Runs every Monday at 08:00 on a scheduled trigger.
2. Loads the configured Google Sheets URL, manager email address, and expiry threshold (in days).
3. Reads all rows from the agent roster in Google Sheets.
4. Calculates how many days remain until each row’s Expiry_Date.
5. Keeps only agents whose certification expires between 0 and the configured threshold.
6. Builds an HTML table row for each expiring agent and aggregates all rows into a single list.
7. Sends one consolidated HTML email through Gmail to the manager with the expiring agents and their remaining days.

## Setup
1. Add a Google Sheets OAuth2 credential and ensure the workflow can access your roster spreadsheet.
2. Add a Gmail OAuth2 credential for the account that sends the alert email.
3. Update the configured sheet URL, manager email, and expiry threshold values.
4. Ensure the Google Sheet contains Agent_Name, Cert_Type, and Expiry_Date formatted as dd/MM/yyyy.

## Requirements
- Go back
- Title
- Send certification expiry alerts from Google Sheets with Gmail
- Description
- Quick overview (10-50 words)
- This workflow runs every Monday at 08:00 to read a Google Sheets roster, calculate days until each agent’s certification expiry date, and send a consolidated HTML alert email via Gmail to the configured manager when certifications expire within a defined threshold.
- 41 / 50 words
- How it works (50+ words)
- Runs every Monday at 08:00 on a scheduled trigger.
- Loads the configured Google Sheets URL, manager email address, and expiry threshold (in days).
- Reads all rows from the agent roster in Google Sheets.
- Calculates how many days remain until each row’s Expiry_Date.
- Keeps only agents whose certification expires between 0 and the configured threshold.
- Builds an HTML table row for each expiring agent and aggregates all rows into a single list.
- Sends one consolidated HTML email through Gmail to the manager with the expiring agents and their remaining days.
- 90 / 50+ words
- Setup (50+ words)
- Add a Google Sheets OAuth2 credential and ensure the workflow can access your roster spreadsheet.
- Add a Gmail OAuth2 credential for the account that sends the alert email.
- Update the configured sheet URL, manager email, and expiry threshold values.

## Customization
- An n8n instance (self-hosted or cloud)
- A Google account with Gmail and Google Sheets access
- A roster spreadsheet with columns: Agent_Name, Cert_Type, Expiry_Date (dd/MM/yyyy)

## Additional info
Change the expiry threshold in the Configure node (default: 30 days)
Filter by a specific certification type (APS, SSIAP, SST) in Filter Expiring Soon
Send one email per agent by removing the Aggregate node
Adjust the run frequency (e.g. daily) in the schedule trigger

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
