# 🤝 Coordinate client onboarding sagas via webhook, Data Tables and Gmail

> ⚡ **19 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow coordinates a client onboarding “saga” by receiving onboarding requests via webhook, persisting onboarding and step state in n8n Data Tables, reconciling external child outcomes (offer, invoice, booking, document), and sending stranded-onboarding alerts via Gmail on a 30-minute schedule.

## How it works
1. Receives a POST request on a webhook endpoint and validates an intake token from the request headers.
2. Normalizes and validates the onboarding payload (identity, email, service code, quantity, kickoff slot, and optional document metadata) and returns a 422 response when the request is invalid.
3. Looks up the onboarding in an n8n Data Table and inserts a new “claimed” onboarding row only if no matching onboarding_id and smoke_tag already exist.
4. Reads existing step rows from an n8n Data Table and inserts only the missing step intent records for offer, invoice, kickoff booking, signed document, welcome email, and internal checklist.
5. Fetches matching evidence rows from offer, invoice, booking, and document result Data Tables, resolves each step to a safe terminal/review/blocked/unknown state, and updates only the step rows that materially change.
6. Writes the updated parent onboarding projection back to the Onboardings Data Table (when needed) and responds to the webhook with a 202 saga receipt containing the current decisions.
7. Runs every 30 minutes to re-read onboarding, step, alert, and child-result Data Tables, adopt late evidence, repair parent rollups, and email reconcile alerts through Gmail while recording a sent/throttled receipt.

## Setup
1. Create and select the required n8n Data Tables by replacing each REPLACE_WITH_TABLE_ID for Onboardings, Onboarding_Steps, Onboarding_Reconcile_Alerts, Quote_Offers, Dunning_Invoices, Bookings, and Intake_Documents.
2. Set the ONBOARDING_INTAKE_TOKEN workflow variable (and optionally ONBOARDING_SMOKE_TAG, ONBOARDING_ALLOW_TEST_OVERRIDES, and the ONBOARDING_CHILD_*_VERSION variables).
3. Add a Gmail credential and update the alert recipient email address (ops@example.com) in the reconcile alert email step.
4. Ensure your external offer, invoice, booking, and document workflows write back rows that include onboarding_id, smoke_tag, and their respective keys (submission_id/invoice_key/booking_uid/document_key) so the saga can match evidence deterministically.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
