# 🧾 Extract and review invoice data with Temlavo in a sub-workflow

> ⚡ **13 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
This sub-workflow receives a single invoice file from another n8n workflow, uploads it to Temlavo for extraction, then polls Temlavo until the document reaches a terminal state and returns a structured result (completed, needs_review, failed) or a recovery safe-stop.

## How it works
1. Receives one invoice item from a calling workflow, including the binary.invoice file and a temlavo_submission payload with saved idempotency tokens and file metadata.
2. Validates the input (file type, size, and required Temlavo submission fields) and prepares a fixed Temlavo API request context.
3. Creates a Temlavo document via the Temlavo REST API using an Idempotency-Key header and decides whether to upload, poll, retry after backoff, or stop with a structured recovery response.
4. Uploads the invoice bytes to Temlavo using the signed URL and headers provided by the API, then confirms upload completion with Temlavo.
5. Polls the Temlavo document status until it becomes completed, needs_review, or failed, applying bounded waits and retry logic for transient API errors.
6. Returns a single JSON item to the caller containing the final document payload (and review reasons when applicable) or a temlavo.n8n-safe-stop.v1 object describing how to recover.

## Setup
1. Register at [Temlavo](https://temlavo.com/sign-up), then open [API keys](https://temlavo.com/app/api-keys) and create a key. Copy the full key shown once; the shortened key hint will not work. In n8n, create an HTTP Header Auth credential: Name `Authorization`; Value `Bearer ` followed by your full key, with one space and no quotes.
2. Select that credential on the Temlavo API calls (Create Document, Confirm Upload, and Get Document) and leave the signed upload request unauthenticated.
3. Import and save this workflow. Publish your configured workflow in your n8n instance. In workflow settings, allow only the intended callers, then select Publish before production parent workflows call it. This publishes your configured copy inside your instance. Manual editor tests can use a saved draft. In the parent, use Execute Sub-workflow with Run once with all items and Wait for Sub-Workflow Completion enabled. Keep this workflow’s trigger on Accept all data. Pass exactly one item containing binary.invoice and the temlavo_submission fields documented in the input sticky note. Save the submission tokens and original file before calling; reuse the same values for retries.

## Requirements
- A Temlavo account with an active API key and available usage, an n8n instance, and one PDF, JPEG, or PNG invoice up to 20 MiB per call. The template is free; [Temlavo API usage](https://temlavo.com/pricing) and n8n hosting costs are separate.

## Customization
- Use Gmail, Drive, a webhook, or another source in your parent workflow. Map each attachment to binary.invoice. For batches, use Loop Over Items with batch size 1. Route completed results to your next step, needs_review results to human review, and handle failed or recovery-stop outcomes separately.

## Additional info
A completed result means no blocking declared check; it does not independently verify accounting correctness. The workflow’s canvas notes explain input fields, retries, timeouts, credential setup, and data retention.

## 🔗 Nodes Used

HTTP Request, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
