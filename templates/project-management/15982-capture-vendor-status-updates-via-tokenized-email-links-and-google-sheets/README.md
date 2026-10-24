# 📋 Capture vendor status updates via tokenized email links and Google Sheets

> ⚡ **30 views** · 📋 [Project Management](../)

## Description

## Quick Overview
This workflow sends scheduled vendor status ping emails with one-click buttons, then captures responses via an n8n webhook and logs the selected status and timestamp to Google Sheets using a one-time token per ping cycle.

## How it works
1. Runs every Monday at 8am on a schedule.
2. Reads all vendors from a Google Sheets “Vendors” tab and keeps only rows where `status` is set to `Active`.
3. Generates a unique token per vendor, builds four status-link URLs (On Track, At Risk, Delayed, Needs PM Input), and timestamps the ping.
4. Updates the matching vendor row in Google Sheets with the new token and ping timestamp and clears any prior response fields.
5. Sends an HTML email to each vendor via SMTP with four one-click status buttons that link back to the n8n webhook.
6. When a vendor clicks a button, the webhook validates the vendor_id, status value, and token against Google Sheets, writes the response status and timestamp back to the sheet (and clears the token), and returns either a confirmation page or an error page.

## Setup
1. Create a Google Sheet with a “Vendors” tab that includes the required columns (including `vendor_id`, `status`, `contact_email`, `ping_token`, `response_status`, and timestamps).
2. Add a Google Sheets OAuth2 credential in n8n and replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets nodes.
3. Add an SMTP email credential (for example, Gmail SMTP with an app password) and set the sender address used for the email.
4. Set your public n8n webhook base URL and sender email in the Config code so the status links point to your production webhook URL.
5. Activate the workflow and use the webhook’s Production URL in the outgoing emails (not the Test URL).

## 🔗 Nodes Used

Send Email, Google Sheets, Webhook, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
