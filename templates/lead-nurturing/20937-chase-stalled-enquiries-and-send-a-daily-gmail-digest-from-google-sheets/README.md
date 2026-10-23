# 💬 Chase stalled enquiries and send a daily Gmail digest from Google Sheets

> ⚡ **0 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick overview
This workflow runs twice on weekdays (or manually) to read an order board in Google Sheets, pull tracking details from the sheet or ShipStation, and send shipping notification emails through Gmail, then updates the sheet so each shipped order is only emailed once.

## How it works
1. Runs on a weekday schedule at 08:30 and 16:30 (or via a manual trigger) and loads shared configuration values.
2. Reads the Orders tab from Google Sheets, or uses built-in demo rows when the sheet is not yet connected.
3. Identifies orders marked as Shipped that have a confirmation timestamp and have not yet been sent a shipping email, and separately flags any Shipped orders with no confirmation.
4. For each eligible shipped order, uses the tracking number from the Google Sheet if present, otherwise fetches carrier, tracking, and ship date from the ShipStation API when configured.
5. Stops the run for any order where no tracking number can be found, to avoid sending a shipping email without tracking.
6. Composes a personalized shipping email with tracking details and installation information, then either sends it via Gmail (test or live) or holds it in preview mode.
7. After a successful send, writes the carrier, tracking, ship date, and “Ship email sent” timestamp back to Google Sheets to prevent duplicate emails.

## Setup
1. Provide a Google Sheets credential and fill in the spreadsheet ID and tab name in the config so the workflow can read and update your Orders board.
2. Provide a Gmail credential and set the sender details (from name and optional reply-to) in the config.
3. Ensure your Google Sheet contains the expected columns (including Stage, Confirmation sent, Carrier, Tracking no., Shipped date, and Ship email sent) and that the office sets Stage to Shipped to queue an email.
4. (Optional) Add ShipStation API credentials and enable ShipStation in the config to look up tracking automatically when it is not pasted into the sheet.
5. Review the TEST_RUN / TEST_EMAIL settings in the config to run in preview, test, or live mode before activating the schedule.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
