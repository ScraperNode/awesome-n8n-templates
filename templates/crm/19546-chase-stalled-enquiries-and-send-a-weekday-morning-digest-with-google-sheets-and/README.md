# 🤝 Chase stalled enquiries and send a weekday morning digest with Google Sheets and Gmail

> ⚡ **1 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow runs every weekday morning to scan an enquiries tracker in Google Sheets, email each owner a single nudge for enquiries that have gone quiet, and optionally send a summary digest email via Gmail showing open enquiries by stage and which ones need chasing.

## How it works
1. Runs on a weekday schedule at 08:30 (or manually) and loads configuration values like tracker sheet/tab, open stages, chase thresholds, and email settings.
2. Reads all rows from the configured Google Sheets tracker tab and analyzes which enquiries are still in an open stage, how long they have been quiet, and how many chases have already been sent.
3. Groups stalled enquiries by owner email so each owner receives one consolidated nudge listing their quiet enquiries and the next actions.
4. Sends the nudge emails through Gmail (or only produces a preview when sending is disabled), then updates Google Sheets to increment “Chases sent” and append a timestamped note for each nudged enquiry matched by Ref.
5. Builds a morning digest email that counts open enquiries by stage and lists the quiet ones (oldest first), including a warning list for enquiries with no owner email.
6. Sends the digest through Gmail only when enabled by configuration and sending mode, otherwise outputs a preview instead.

## Setup
1. Add Google Sheets credentials and set the tracker spreadsheet ID and tab name in the config so the workflow can read and update your tracker.
2. Add Gmail credentials for sending owner nudges and the optional digest, and set FROM_NAME and REPLY_TO in the config if needed.
3. Ensure your Google Sheet has the required headers (at minimum Ref, Stage, Last touch/Received, Chases sent, Notes, Owner email) and that Ref is unique per enquiry.
4. Fill in owner email addresses (in the sheet and/or the config’s area owner list) and set DIGEST_TO if you want the morning digest (leave it blank to disable the digest).
5. Test safely by running with TEST_RUN = true (optionally set TEST_EMAIL to route all emails to yourself), then set TEST_RUN = false and activate the schedule.

## Requirements
- Part 2 of a 2 parts workflow series.

## Customization
- Part 1 : https://n8n.io/workflows/19543-capture-cleaning-enquiries-from-wordpress-forms-with-google-sheets-and-gmail/

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
