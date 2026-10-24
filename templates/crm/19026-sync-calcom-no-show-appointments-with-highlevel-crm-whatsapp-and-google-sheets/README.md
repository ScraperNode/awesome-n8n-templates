# 🤝 Sync Cal.com no-show appointments with HighLevel CRM, WhatsApp, and Google Sheets

> ⚡ **24 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Cal.com no-show webhook events, fetches full booking details, updates the matching contact in HighLevel (GoHighLevel), logs the no-show to Google Sheets, and sends a WhatsApp reschedule link when the no-show count is below a defined threshold.

## How it works
1. Receives a POST webhook from Cal.com when an appointment attendee is marked as a no-show.
2. Fetches the full booking details from the Cal.com API and extracts the attendee’s name, email, phone, booking UID, and time slot.
3. Checks a Google Sheets “NoShowLog” tab for the booking UID to prevent logging and processing the same no-show twice.
4. Looks up the contact in HighLevel (GoHighLevel) by the attendee’s email and, if found, updates custom fields to set a no_show flag and increment the no_show_count.
5. Logs the no-show event (timestamp, slot details, booking UID, contact details, and no-show count) as a new row in Google Sheets.
6. If the no-show count is less than 3, sends a WhatsApp message to the contact with a Cal.com reschedule link that includes the booking UID.

## Setup
1. Create a Cal.com API credential in n8n and configure Cal.com to send no-show events to this workflow’s webhook URL at the `/cal-noshow` path.
2. Add a Google Sheets OAuth2 credential, replace `REPLACE_WITH_YOUR_GOOGLE_SHEET_ID`, and ensure a sheet/tab named `NoShowLog` exists with a `bookingUid` column for duplicate checks.
3. Add a HighLevel (GoHighLevel) OAuth2 credential and select the correct custom field IDs for `no_show` and `no_show_count` in your account.
4. Add a WhatsApp Business Cloud credential, set the correct Phone Number ID, and ensure the HighLevel contact records include a valid phone number for messaging.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, HighLevel, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
