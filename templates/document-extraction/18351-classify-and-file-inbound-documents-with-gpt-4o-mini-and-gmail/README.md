# 🔬 Classify and file inbound documents with GPT-4o-mini and Gmail

> ⚡ **5 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow receives documents through a token-protected webhook, validates OCR and file metadata, and uses OpenAI to classify and extract key fields. It stores every outcome in an n8n Data Table, records highconfidence results as logically Filed, and sends Gmail alerts when OCR or AI cases need human review.

## How it works
1. Receives a POST request to an n8n webhook and verifies the request using a shared intake token.
2. Normalizes the payload (filename, MIME type, IDs, OCR text), generates a deterministic document key, redacts PII for the model, and places a temporary in-memory claim to reduce concurrent reprocessing.
3. Checks the n8n Data Table for an existing row with the same document key scope and immediately returns a “duplicate” response if the document was already processed.
4. If the input is permanently invalid (for example unsupported MIME type or malformed identifiers), it records the item as a dead letter in the Data Table and responds with the dead-letter reason.
5. If OCR quality is acceptable, it sends a bounded, redacted excerpt to OpenAI to extract document metadata (type, party, date, amount, currency) and validates the returned JSON against strict rules and confidence thresholds.
6. Records a fully validated, high-confidence result as Filed with a logical archive path. All other results become Needs Review and trigger the appropriate Gmail alert before the workflow responds.
7. Runs hourly to find “Needs Review” rows where no alert was recorded and retries sending the Gmail notification, then updates the Data Table with the alert evidence.

## Setup
1. Create an n8n Data Table for document intake and replace all `REPLACE_WITH_TABLE_ID` values with your table ID.
2. Set the `DOC_INTAKE_WEBHOOK_TOKEN` variable and send it to the webhook as `X-Doc-Intake-Token` (or an Authorization Bearer token).
3. Add OpenAI credentials (for the GPT-4o-mini model) and Gmail credentials, then replace `ops@example.com` with your review mailbox.
4. Update the webhook path as needed and configure your source system to POST the required fields (filename, mime_type, OCR text, and either attachment_id or file_sha256).
5. Review and adjust the supported MIME types, OCR quality thresholds, document taxonomy enums, and auto-file confidence thresholds to match your process.

## Requirements
- An n8n instance with Data Tables and Variables support. An upstream OCR process that sends extracted text. This workflow does not perform OCR or accept binary files directly.

## Customization
- Review inbox and logical archive-path format. Supported MIME types and OCR quality thresholds. Document taxonomy and AI confidence thresholds.

## Additional info
This workflow expects OCR text in the webhook payload and does not move or store the original file. Filing is logical: it records a Filed status and archive_path in the Data Table. The duplicate claim is a best-effort replay guard, not an atomic lock. Gmail delivery and the following Data Table update are not transactional, so reconciliation can resend an alert after a partial failure.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
