# 🧾 Process invoices securely with OpenAI, Slack, and ERP webhooks

> ⚡ **27 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This workflow accepts invoice documents via webhook, validates and de-duplicates them, extracts invoice data from PDFs with OpenAI, and either posts approved invoices to an ERP via HTTP or routes exceptions to Slack for human review before continuing.

## How it works
1. Receives a POST request on the `/idp-ingest` webhook containing an invoice document as a binary file.
2. Validates the file type, size, and optional malware-scan status, then creates correlation and document metadata for downstream processing.
3. Performs a duplicate check (demo logic) and routes duplicates or invalid intakes into an exception path.
4. For new documents, extracts text from the PDF and sends the OCR text to OpenAI to return a structured invoice JSON.
5. Evaluates the extracted invoice against a validation policy (required fields, non-negative amounts, line items, and confidence thresholds) and auto-approves or raises an exception.
6. For exceptions, posts a detailed manual-review message to Slack, waits for a reviewer’s webhook-based decision, and routes approved vs. rejected outcomes.
7. Posts approved invoices to an ERP endpoint using an Idempotency-Key header and then generates a sanitized audit log, while rejected/duplicate items are closed without ERP posting.

## Setup
1. Configure the `/idp-ingest` webhook in your source system to send a `document` binary file (or provide `body.fileContent` for the included Convert to File step) and capture the resume webhook URL used by the human-review wait step.
2. Add OpenAI credentials for the OpenAI node and confirm the selected model and prompt/schema meet your compliance requirements.
3. Add Slack OAuth2 credentials and update the target user/channel and message content for the manual-review notification.
4. Update the ERP HTTP Request node with your real endpoint and authentication, and ensure the ERP honors the `Idempotency-Key` header.
5. Replace the demo duplicate-check logic with an atomic lookup/insert in your database (for example Postgres or Redis) keyed by `source_sha256` or `source_id`.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
