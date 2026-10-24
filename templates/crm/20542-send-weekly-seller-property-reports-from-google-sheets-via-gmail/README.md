# 🤝 Send weekly seller property reports from Google Sheets via Gmail

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow runs every Monday at 8am and reads Listings, Leads, and Viewings from Google Sheets to generate a weekly activity summary per seller, then sends each seller an HTML report email via Gmail and updates the listing rows with the last report date.

## How it works
1. Runs every Monday at 8am on a schedule.
2. Reads listing, lead, and viewing data from the Listings, Leads, and Viewings tabs in a Google Sheets document.
3. Groups active listings by seller email and calculates weekly and total enquiries, viewings, upcoming viewings, average feedback rating, days on market, and recent viewer comments.
4. Builds one HTML email per seller with per-property stats and rule-based advice, and prepares the subject line for the selected reporting period.
5. Sends each seller their report via Gmail, BCC’ing the agent email and using the agency name as the sender name.
6. Writes the current timestamp back to Google Sheets for each reported listing in the “Last Report Sent At” column.

## Setup
1. Add Google Sheets credentials with access to the target spreadsheet and Gmail credentials for the sending mailbox.
2. Update the Config values, including the Google Sheet ID, agency/agent details, timezone, currency symbol, reportDays, reportStatuses, and staleAfterDays.
3. Ensure your Google Sheets file contains tabs named Listings, Leads, and Viewings with the expected columns (including Seller Email, Listing Ref, Status, Listed At, and Last Report Sent At, plus Viewing feedback fields).
4. Confirm seller email addresses are valid in the Listings sheet and that listing statuses match the values in reportStatuses (for example, available and under offer).

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
