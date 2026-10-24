# 🤝 Audit CRM lead data quality with Google Sheets and NeverBounce

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs weekly to audit and clean CRM lead data in Google Sheets, optionally revalidating stale emails via NeverBounce, then logs a data quality summary and human-review items back to Google Sheets and can post the report to a configurable webhook.

## How it works
1. Runs every Sunday at 20:00 to start an out-of-hours data hygiene pass.
2. Reads all lead rows from the “Leads” tab in Google Sheets and applies safe, non-destructive fixes like trimming fields, lowercasing emails, normalizing domains, and rebuilding missing lead IDs.
3. Flags issues that require human review (for example duplicates, missing domains, malformed emails, unsynced live leads, and missing CRM owners) and compiles an audit summary.
4. If write-back is enabled, updates the original rows in the “Leads” sheet in place with the safe fixes; otherwise it performs a dry run and writes nothing.
5. If a NeverBounce API key is provided, selects a batch of stale email addresses and rechecks them with NeverBounce, then writes the updated email status back to the “Leads” sheet and suppresses leads that become invalid.
6. Builds a weekly quality report, appends aggregate metrics to the “Data Quality Summary” sheet, and appends one row per issue to the “Data Quality” sheet.
7. If an alert webhook URL is configured, sends the formatted report text to that webhook endpoint.

## Setup
1. Create a Google Sheets OAuth credential in n8n and set your spreadsheet ID in the workflow’s config so the “Leads”, “Data Quality Summary”, and “Data Quality” tabs can be read and written.
2. Ensure your spreadsheet contains the required columns for each tab (including row data in “Leads” and the metric/review columns described in the workflow notes).
3. Review the config values (dry run/write enabled, reverify-after days, and batch size) and keep dry run on until you are comfortable enabling write-back.
4. (Optional) Add your NeverBounce API key in the config to enable stale email rechecks.
5. (Optional) Set an alert webhook URL in the config and ensure the receiving service accepts JSON with a text/content field.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
