# 🧾 Approve invoices with Claude vision, Google Drive, and Google Sheets

> ⚡ **17 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow watches a Google Drive folder for new invoices, extracts invoice fields with Anthropic Claude vision, validates totals and checks for duplicates in Google Sheets, then auto-approves low-risk invoices or pauses for human approval before logging results and moving files to Processed or Flagged.

## How it works
1. Triggers when a new file is created in a specific Google Drive “Inbox” folder (or runs manually with a test file ID).
2. Downloads the invoice file from Google Drive, converts the binary to base64, and prepares an Anthropic Messages API request for Claude vision.
3. Calls Anthropic Claude to extract structured invoice data as JSON, then parses the response and flags the run if extraction cannot be parsed.
4. Performs a deterministic math check (subtotal + tax vs total) and reads a Google Sheets ledger to detect duplicate invoice numbers.
5. Routes invoices needing review (extraction failure, math mismatch, or duplicate) or invoices at/above the configured amount threshold to a human approval step by sending approve/reject links to a webhook and waiting for the decision.
6. Computes the vendor’s prior approved spend from Google Sheets, appends a normalized ledger row with the final approval status, and moves the invoice file in Google Drive to either the Processed or Flagged folder while sending a final outcome notification via webhook.

## Setup
1. Create and connect Google Drive credentials with access to an Inbox, Processed, and Flagged folder, then paste those folder IDs into the workflow Settings.
2. Create a Google Sheets ledger with the required header columns and add Google Sheets credentials, then select the correct spreadsheet and sheet in the duplicate check, vendor total, and ledger append steps.
3. Create an Anthropic API key and add it as an HTTP Header Auth credential (header `x-api-key`) for the Claude vision HTTP request.
4. Set the Settings values for `approvalThreshold`, `anthropicModel`, and `notifyWebhookUrl` (the endpoint that receives the approval request text and posts the approve/reject links).
5. Enable the Google Drive trigger to point at your Inbox folder, and optionally set `testFileId` to validate the workflow end-to-end before processing real invoices.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
