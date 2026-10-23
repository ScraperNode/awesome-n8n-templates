# 🎫 Capture cleaning enquiries from WordPress forms with Google Sheets and Gmail

> ⚡ **14 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives cleaning enquiries from a website form via a webhook, normalizes the submitted fields, logs each enquiry to Google Sheets, and (optionally) sends acknowledgement and owner-notification emails through Gmail based on postcode-to-owner routing.

## How it works
1. Receives a POST request on a webhook endpoint when a website enquiry form is submitted.
2. Normalizes common WordPress form payloads into consistent fields (contact details, message, and postcode) and generates a human-readable enquiry reference.
3. Rejects likely spam or incomplete submissions (for example, missing/invalid email or a filled honeypot field) and returns a JSON response to the website.
4. Assigns the enquiry to an area owner by matching the postcode prefix against configured rules and prepares customer and internal email content, including standard follow-up questions.
5. Appends the enquiry as a new row in a Google Sheets tracker so the enquiry is recorded even if email sending fails.
6. If sending is enabled, sends the acknowledgement email to the customer and (if the owner email is set) sends a notification email to the assigned owner via Gmail, then returns a JSON response containing the enquiry reference.

## Setup
1. Create or choose a Google Sheets tracker with the expected header columns (for example Ref, Received, Stage, Owner, Email, Postcode, and Notes) and paste its Sheet ID and tab name into the config values.
2. Connect Google Sheets credentials in n8n for the workflow to append rows to your tracker spreadsheet.
3. Connect Gmail credentials in n8n and set the config values for From name, Reply-To, and owner email addresses (and optionally a test email).
4. Update the postcode-to-area routing rules (areas, owners, and postcode prefixes) in the config so enquiries are assigned correctly.
5. Copy the webhook URL from the trigger and configure your WordPress form/plugin to POST submissions to that endpoint.
6. Choose your run mode in config by setting TEST_RUN/TEST_EMAIL (preview/test/live) before activating the workflow.

## Customization
- Part 1 of a 2 parts workflow series.
- Part 2 : https://n8n.io/workflows/19546-chase-stalled-enquiries-and-send-a-weekday-morning-digest-with-google-sheets-and-gmail/

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
