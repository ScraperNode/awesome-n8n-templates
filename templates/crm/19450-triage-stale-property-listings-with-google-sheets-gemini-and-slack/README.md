# 🤝 Triage stale property listings with Google Sheets, Gemini, and Slack

> ⚡ **20 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Demo Link: https://www.linkedin.com/feed/update/urn:li:activity:7503832069614215168/

This workflow runs daily to scan property listings in Google Sheets, detect stale or low-performing leads using portfolio benchmarks, generate a diagnosis with Google Gemini, and post actionable alerts to Slack while logging alert history back to the sheet.

## How it works
1. Runs every day at 8:00 AM on a schedule.
2. Reads all listing rows from a Google Sheets “Listings” spreadsheet.
3. Calculates days-on-market and conversion metrics, compares each listing to portfolio medians, and flags listings for review (or flags data-quality issues) while applying a 7-day alert cooldown and a 10-day grace period after price changes.
4. Writes the latest enquiry/viewing/offer snapshot back to Google Sheets to track trends over time.
5. For eligible flagged listings, sends the listing context to Google Gemini to return a JSON diagnosis (likely issue, suggested action, and severity).
6. Posts an alert to a Slack channel (including escalation for repeat flags and optional agent/manager mentions) and updates Google Sheets with the alert date, issue/action, and incremented alert count.
7. If the workflow errors, sends a failure notification to Slack with the workflow, node, and error details.

## Setup
1. Connect Google Sheets using a Google Service Account credential and set the target spreadsheet and “Listings” sheet.
2. Ensure the Google Sheet includes the required columns (for example: Listing ID, Property, Status, Listed Date or Days on Market, Enquiries, Viewings, Offers, Last Price Change Date, Prev Enquiries/Viewings/Offers, Prev Snapshot Date, Last Alert Date, Alert Count, Agent Name, and Agent Slack ID).
3. Add a Google Gemini (PaLM) API credential for the Gemini HTTP request.
4. Add a Slack credential and choose the channel to receive alerts and error notifications.
5. Set the MANAGER_SLACK_ID environment variable if you want urgent alerts to mention a manager.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
