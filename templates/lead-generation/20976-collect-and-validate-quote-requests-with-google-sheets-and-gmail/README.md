# 🎣 Collect and validate quote requests with Google Sheets and Gmail

> ⚡ **13 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick Overview
This workflow captures quote requests via an n8n Form, checks whether key details are missing, stores the request in Google Sheets, and sends notification and customer emails through Gmail with either a confirmation or a request for more information.

## How it works
1. Receives a new quote request submission from an n8n Form.
2. Normalizes the submitted fields, generates a unique request reference, and checks the submission against a configurable list of required details.
3. Looks up the generated request reference in Google Sheets to prevent saving duplicate requests from the same day.
4. If the request is new, appends it to the Google Sheets “Requests” tab with a status of either `ready_to_quote` or `missing_info`.
5. Sends the business owner an email via Gmail with the request details and the current status.
6. Sends the customer a Gmail message that either asks for the missing details or confirms the request and shows the expected reply timeframe, then displays a thank-you completion page.

## Setup
1. Create a Google Sheets spreadsheet with a tab named “Requests” and add the expected columns (including `request_id`) to match what the workflow appends.
2. Add a Google Sheets credential in n8n and paste your spreadsheet URL/ID into the Google Sheets steps used to check for duplicates and append new rows.
3. Add a Gmail credential in n8n for the account that sends emails, and update the `owner_email`, `business_name`, `reply_within`, and `required_fields` values in the workflow settings.
4. Customize the form questions and service options as needed, then share the form’s Production URL with customers.

## 🔗 Nodes Used

Google Sheets, Gmail, n8n Form Trigger, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
