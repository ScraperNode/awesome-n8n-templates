# 🎫 Classify support tickets and build a human review queue with Apixly OpenAI API

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This manual workflow validates a small batch of support tickets, sends each ticket to Apixly’s OpenAI-compatible chat/completions API for classification and reply drafting, then builds a single human review queue that includes both successful results and any failures.

## How it works
1. Runs when you manually execute the workflow.
2. Loads a configured model, API endpoint, and a batch of up to 10 tickets, then validates required fields, size limits, and unique ticket IDs.
3. Processes tickets one by one and sends each to Apixly’s chat/completions endpoint with instructions to return a strict JSON classification (category, priority, summary, and draft reply).
4. Validates the HTTP response and parses the model output, ensuring the JSON schema matches, the ticket_id is preserved, and the content is complete.
5. Flags any transport/API errors, non-2xx responses, invalid JSON, schema mismatches, or unsafe refund claims for manual triage.
6. Produces a consolidated human review report containing every ticket, the classification where available, and summary counts by category and priority.

## Setup
1. Create an n8n HTTP Header Auth credential with header name `Authorization` and value `Bearer <your Apixly API key>`, then select it in the Apixly HTTP request step.
2. Set your Apixly `endpoint` (chat/completions URL) and desired `model` in the ticket configuration step.
3. Replace the synthetic demo tickets with your own authorized ticket data and keep batches to 1–10 tickets per run.

## Requirements
- An Apixly account and API key; n8n 2.37.10 or a compatible version; and an HTTP Header Auth credential selected in the Apixly request node.

## Customization
- Replace the synthetic tickets with authorized helpdesk data. If you change categories or priorities, update both the prompt and validator, and keep ticket IDs unique. Review every draft before taking action.

## Additional info
Maintained by the Apixly team. API requests are billed separately. This workflow never sends customer replies, processes refunds, changes accounts, or treats reported token usage as verified billing.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
