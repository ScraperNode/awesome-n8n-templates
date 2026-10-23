# 📱 Send post-visit Google review requests from Google Sheets via Gmail

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow runs hourly to read completed visits from Google Sheets, waits a configurable delay, and emails customers a Google review link with a one-click unsubscribe option via an n8n webhook, then records when each request was sent.

## How it works
1. Runs every hour on a schedule.
2. Reads visit records from the “Visits” tab in Google Sheets.
3. Filters for completed visits with valid emails that ended at least a set number of hours ago, are not older than the max age, have not been asked before, are not opted out, and are not processed during configured quiet hours.
4. Sends an HTML review request email via SMTP/Email, including your Google review link and a personalized unsubscribe link.
5. Updates the matching row in Google Sheets to set `review_requested_at` for successfully sent emails.
6. Serves an unsubscribe webhook that validates the visit and email from the link, marks `opt_out` as TRUE for that email in Google Sheets, and returns an unsubscribe confirmation page.

## Setup
1. Create a Google Sheet with a “Visits” tab containing columns `visit_id, client_name, email, visit_end, timezone, status, review_requested_at, opt_out` and ensure `status` uses `completed` for eligible visits.
2. Add Google Sheets credentials and configure the spreadsheet URL/ID in both configuration steps used for sending and opt-out handling.
3. Add SMTP/Email Send credentials and set the sender address, business name, review link, delay/max-age, timezone, and quiet hours in the configuration values.
4. Activate the workflow, copy the Production webhook URL for the unsubscribe endpoint, and paste it into the `optout_url` value used to generate unsubscribe links.

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
