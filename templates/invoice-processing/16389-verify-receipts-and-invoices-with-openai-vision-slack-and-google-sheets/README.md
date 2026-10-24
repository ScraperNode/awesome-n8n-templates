# 🧾 Verify receipts and invoices with OpenAI vision, Slack and Google Sheets

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## Quick Overview
This workflow receives receipt or invoice image URLs via a webhook, uses OpenAI Vision to extract structured totals and currency, validates them against expected booking values, logs the result to Google Sheets, and posts non-approved cases to Slack for human review.

## How it works
1. Receives a POST webhook request containing a document image URL plus booking details like expected amount and currency.
2. Normalizes the incoming payload and assigns a document ID for consistent downstream processing.
3. Sends the image URL to OpenAI (GPT vision) to extract vendor, date, totals, currency, line items, and an extraction confidence score as strict JSON.
4. Parses the model output and validates total, currency, and confidence against the expected booking values (with a 2% amount tolerance) to produce an APPROVED, REVIEW, REJECTED, or ERROR verdict.
5. Posts any non-APPROVED verdict to a Slack channel with the extracted values and validation reasons.
6. Appends the verification result to Google Sheets and returns a JSON response with the documentId, verdict, and reasons to the webhook caller.
7. Alerts an engineering Slack channel if the workflow fails unexpectedly.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used by the AI extraction step.
2. Add a Slack OAuth2 credential and set the target channels for review notifications and engineering error alerts.
3. Add a Google Sheets OAuth2 credential and update the spreadsheet and sheet/tab used to append verification results.
4. Copy the webhook URL from the webhook trigger and configure your source system to POST `image_url` (or `imageUrl`), `expected_amount`, `currency`, `guest_id`, and `booking_id`, ensuring the image URL is publicly reachable by OpenAI.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
