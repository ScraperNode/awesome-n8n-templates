# 🎫 Capture and reply to cleaning enquiries with webhooks, Google Sheets and Gmail

> ⚡ **9 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives commercial cleaning enquiries via a webhook, normalizes and validates the submitted form data, logs each valid enquiry to Google Sheets, and optionally sends acknowledgement and internal notification emails via Gmail before returning a JSON response to the website.

## How it works
1. Receives a POST request from your website form via an n8n webhook.
2. Loads pipeline settings and parses the incoming payload to normalize common WordPress form fields (contact details, message, and postcode) into a consistent structure.
3. Validates the submission to filter out spam or incomplete enquiries and immediately returns a webhook response for rejected submissions.
4. Routes valid enquiries to an owner and area based on postcode prefix rules and generates the customer acknowledgement and internal owner notification email content.
5. Appends a standardized enquiry row to a Google Sheets tracker for reporting and follow-up.
6. If sending is enabled, sends the acknowledgement email to the customer via Gmail and, when an owner email exists, sends the internal notification to the assigned owner.
7. Returns a JSON webhook response to the website that includes an ok status and the generated enquiry reference.

## Setup
1. Configure the website form to POST to the workflow’s webhook URL (path: /cleaning-enquiry).
2. Add and authorize Google Sheets credentials, then set the tracker spreadsheet ID and tab name in the configuration code and ensure the sheet headers match the configured column names.
3. Add and authorize Gmail credentials for sending customer acknowledgements and owner notifications, and set the sender name and optional Reply-To address in the configuration.
4. Update the configuration code with your postcode-to-owner routing rules, fallback owner details, company details, and the list of questions included in the first reply.
5. Choose your sending mode by setting TEST_RUN/TEST_EMAIL (preview logs only, test sends to a single inbox, live sends to customers and owners).

## 🔗 Nodes Used

Google Sheets, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
