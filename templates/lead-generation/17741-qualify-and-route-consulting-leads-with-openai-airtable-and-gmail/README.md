# 🎣 Qualify and route consulting leads with OpenAI, Airtable, and Gmail

> ⚡ **9 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow captures inbound SME leads via a webhook, validates and deduplicates submissions, classifies the request with OpenAI, stores results in Airtable, and sends internal notifications through Gmail, with an hourly reconciliation sweep to retry any pending email deliveries.

## How it works
1. Receives a POST request on a webhook endpoint and normalizes the payload into consistent lead fields, generates a submission ID, and runs validation and sensitive-content checks.
2. Claims the submission in workflow static data to prevent concurrent double-processing, and short-circuits with a “duplicate” response if the same submission is already in progress.
3. If validation fails, it checks Airtable for an existing record with the same submission ID, creates a “Dead Letter” lead record when needed, and responds to the webhook with the rejection reason.
4. If the lead already exists in Airtable, it records the existing status in the claim store and responds to the webhook as a duplicate.
5. If sensitive patterns are detected, it creates a “Needs Review” record in Airtable, emails ops via Gmail with the review details, updates Airtable with delivery confirmation, and responds to the webhook as needs_review.
6. Otherwise, it sends the lead’s needs text to OpenAI (gpt-4o-mini) for structured qualification, validates the model output, and creates an Approved or Needs Review lead record in Airtable.
7. For approved leads it emails ops a test welcome copy and an approval alert (and for review leads it emails a review alert), then updates Airtable with message IDs and responds to the webhook with the final status.
8. Runs hourly to find Airtable leads with Delivery State = PENDING_SEND, retries the missing Gmail delivery (welcome or alert), and updates Airtable and the claim store when delivery succeeds.

## Setup
1. Create an Airtable base with a “Leads” table and fields that match the workflow’s mappings (for example Submission ID, Status, Company, Email, Raw Needs, Need Summary, Delivery State, Welcome Sent, Alert Sent, and message ID fields), then replace YOUR_AIRTABLE_BASE_ID in all Airtable nodes.
2. Add an Airtable credential in n8n with access to the target base.
3. Add a Gmail credential in n8n and update the internal notification recipient (ops@example.com) and sender name as needed.
4. Add an OpenAI credential in n8n and ensure the OpenAI node can access the gpt-4o-mini model.
5. Copy the production webhook URL for the “lead-intake” endpoint and configure your form/app to POST lead submissions to it (ensuring it includes at least company, email, and a needs message of 20+ characters).

## Additional info
github.com/kuliberdalabs/n8n-sme-workflows (MIT) this is a reference-grade template — the engineering decisions (idempotency, durable email outbox, LLM output treated as untrusted input) are documented per workflow in the repo, and the hardening history is tracked openly in its GitHub Issues.

## 🔗 Nodes Used

Airtable, Webhook, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
