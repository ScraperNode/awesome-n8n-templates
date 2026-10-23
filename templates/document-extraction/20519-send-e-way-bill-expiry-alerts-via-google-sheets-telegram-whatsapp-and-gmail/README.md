# 🔬 Send e-way bill expiry alerts via Google Sheets, Telegram, WhatsApp and Gmail

> ⚡ **6 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow tracks India E-Way Bills in Google Sheets from a form or webhook, calculates validity when missing, and sends staged expiry alerts to an ops Telegram group, drivers via WhatsApp Cloud API, and dispatchers via Gmail, while logging all alerts and handling status updates.

## How it works
1. Receives new E-Way Bill details from an n8n Form trigger or a POST webhook from your ERP/GSP.
2. Normalizes the input, calculates “Valid Upto” from distance when missing, deduplicates against the Google Sheets tracker, and appends new bills to the tracker sheet.
3. Sends a Telegram confirmation to the ops group and writes a “tracking started” entry to the Google Sheets alert log.
4. Runs every 30 minutes, reads active bills from Google Sheets, and determines which alert stage (12/6/2/0/-6/-8 hours) or delivery-risk condition has newly been reached.
5. Posts every triggered alert to Telegram, and sends a WhatsApp template message to the driver and an email via Gmail to the dispatcher for the configured urgent stages.
6. Updates the bill’s last-alert markers/status in the Google Sheets tracker and appends each alert event to the Google Sheets alert log so stages fire only once.
7. Accepts extension/delivery/vehicle change/cancellation updates from a second form or webhook, validates them against the tracker, updates the Google Sheets record, and confirms or rejects the update via Telegram while logging the change.

## Setup
1. Create a Google Sheet with two tabs named “EWB Tracker” and “Alert Log”, and ensure the tracker contains columns matching the fields used (at minimum ewb_no, status, valid_upto, driver_phone, dispatcher_email, alert_stage, and risk_alerted_for).
2. Add Google Sheets OAuth2 credentials and update the Sheet ID and tab names in the three configuration steps (Intake/Monitor/Update).
3. Create a Telegram bot, add its credential in n8n, add the bot to your ops group, and set the ops Telegram chat ID in the configuration steps.
4. Add Gmail credentials for sending dispatcher emails and set the ops/dispatcher email addresses used by the workflow.
5. Create a Meta WhatsApp Cloud API app, add the HTTP Header Auth credential with your access token, set your WhatsApp Phone Number ID and API version, and get the “ewb_expiry_alert” message template approved with parameters matching the workflow payload.
6. If you intake or update from external systems, copy the two webhook URLs (/ewb-track and /ewb-update) from n8n and configure them in your ERP/GSP to POST matching fields (for example ewb_no, ewb_date, valid_upto, distance_km, and update_type/new_valid_upto).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
