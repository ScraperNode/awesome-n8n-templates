# 🔬 Send on-demand CSV report summaries from Google Sheets forms via Gmail

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow collects a report request via an n8n Form, reads the matching tab in Google Sheets, filters and aggregates rows by a date range, and emails the requester an HTML summary plus a CSV attachment using Gmail.

## How it works
1. Receives a report request from an n8n Form submission with report type, start/end dates, and an email address.
2. Validates the date range and maps the selected report type to a Google Sheets tab and the date/grouping/sum columns to use.
3. Reads all rows from the selected Google Sheets tab.
4. Filters rows to the requested date range, groups them by the configured column, and totals the configured numeric column.
5. If results exist, generates a CSV file from the aggregated output and builds an HTML email with a preview table and totals.
6. Sends the email to the requester via Gmail with the CSV attached, or sends a plain-text “no data” notice when nothing matches.

## Setup
1. Add a Google Sheets credential and select your spreadsheet document in the Google Sheets read step.
2. Add a Gmail credential for sending emails from both Gmail send steps.
3. Update the REPORTS mapping in the validation step so each report type matches your sheet tab name and header column names exactly.
4. Activate the workflow and share the n8n Form production URL so teammates can submit report requests.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
