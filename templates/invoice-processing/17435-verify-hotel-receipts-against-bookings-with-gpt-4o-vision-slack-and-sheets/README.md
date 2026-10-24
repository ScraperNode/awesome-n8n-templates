# 🧾 Verify hotel receipts against bookings with GPT-4o vision, Slack, and Sheets

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow receives receipt or invoice uploads via a webhook, uses OpenAI GPT-4o vision to extract structured fields, validates totals and currency against expected booking values, logs the result to Google Sheets, and routes mismatches or failures to Slack for review and engineering alerts.

## How it works
1. Receives a POST request via a webhook containing document and booking context (IDs, image URL, expected amount, and currency).
2. Normalizes the incoming fields into a consistent record with defaults for missing values.
3. Sends the document image URL to OpenAI (GPT-4o) to extract vendor, date, total, currency, line items, and a confidence score, retrying on failure.
4. Parses the extracted JSON and validates it against the expected booking amount and currency (including a 2% tolerance) to produce an APPROVED, REVIEW, or REJECTED verdict with reasons.
5. Posts a Slack message to the #finance-review channel when the verdict is not APPROVED.
6. Appends the extracted data, verdict, and reasons to a Google Sheets “Verifications” sheet and returns the verdict as a JSON webhook response.
7. If the extraction fails after retries or an unhandled error occurs, records an ERROR verdict in Google Sheets and posts a Slack alert to #automation-alerts.

## Setup
1. Add OpenAI API credentials (OpenAI node credential type) for the HTTP request that calls the Chat Completions API.
2. Add Slack credentials and ensure the #finance-review and #automation-alerts channels exist (or update the workflow to use your channel names).
3. Add Google Sheets credentials, set the target spreadsheet ID, and ensure a sheet named “Verifications” exists with columns matching the fields being appended.
4. Copy the webhook URL for the “receipt-verify” path and configure your upload system to POST the required fields (including a publicly reachable image_url).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
