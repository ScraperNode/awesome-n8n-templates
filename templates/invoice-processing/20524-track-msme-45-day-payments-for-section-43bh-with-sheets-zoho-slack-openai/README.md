# 🧾 Track MSME 45-day payments for Section 43B(h) with Sheets, Zoho, Slack, OpenAI

> ⚡ **16 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow tracks MSME vendor bills for Section 43B(h) compliance using Google Sheets as a bill register, optionally syncing bills from Zoho Books, verifying vendors via a Udyam API, and sending Slack alerts, a CSV payment-priority list, and an OpenAI-generated CFO briefing with an approve/hold step.

## How it works
1. Runs every morning (Mon–Sat) on a schedule or starts instantly when bills or payments are posted to a webhook.
2. Loads the Vendor Master and Vendor Bills from Google Sheets and optionally pulls the latest bills from Zoho Books when an organization ID is configured.
3. Appends new bills and updates payment status/amounts in the Google Sheets bill register based on webhook payloads and Zoho Books balances.
4. Optionally verifies new or stale vendors against your Udyam verification API and writes the latest MSME category and verification status back to the Vendor Master sheet.
5. Calculates each unpaid Micro/Small MSME bill’s 15/45-day deadline, days left/overdue, estimated tax-at-risk, and estimated MSMED interest, then posts Slack alerts as bills approach or exceed the limit.
6. Builds a cash-constrained payment plan, generates a CSV payment-priority list, and uploads it to Slack.
7. Uses OpenAI (gpt-4o-mini) to draft a CFO briefing, sends a Slack approve/hold request, and writes the approval decision back to the relevant bill rows in Google Sheets.

## Setup
1. Create a Google Sheets file with two tabs named to match your configuration (default: “Vendor Master” and “Vendor Bills”) and ensure the bill sheet contains columns like bill_id, vendor_name, bill_number, bill_date, acceptance_date, amount, amount_paid, payment_status, and due_date_43bh.
2. Add Google Sheets OAuth2 credentials and set the Google Sheet ID in the workflow’s finance configuration.
3. Add Slack OAuth2 credentials, set your target channel ID, and set the Slack user ID for the finance head to receive the approve/hold prompt.
4. Add an OpenAI API credential for the gpt-4o-mini briefing generation.
5. (Optional) Add Zoho Books OAuth2 credentials and fill in zoho_org_id and zoho_api_domain to enable daily bill sync.
6. (Optional) Configure a Udyam verification API endpoint and Header Auth credentials, then paste the API URL into udyam_api_url and ensure Vendor Master includes vendor_id and udyam_number for verification.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
