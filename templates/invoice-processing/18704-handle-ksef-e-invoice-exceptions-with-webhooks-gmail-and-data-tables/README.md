# 🧾 Handle KSeF e-invoice exceptions with webhooks, Gmail and Data Tables

> ⚡ **11 views** · 🧾 [Invoice Processing](../)

## Description

## Quick overview
Persist KSeF invoice intake, simulate submission outcomes, query status before retrying, and route unresolved cases through Data Tables and Gmail.

## How it works
1. Receives explicit invoice data through a token-protected webhook or the built-in synthetic intake fixture. Missing or incorrect tokens return 401.
2. Validates required fields, basic XML shape, NIP checksums, caller-provided VAT-whitelist status, and supplied approval records before storing the exact JSON snapshot and SHA-256 hash.
3. Routes one manual execution to submission, recovery, or fixture intake. Submission rereads lifecycle state and writes a fail-stop durable intent row before the bundled adapter can run.
4. Runs only the local mock submit adapter, then appends lifecycle transitions, evidence, exceptions, and run summaries to four n8n Data Tables.
5. Queries the local mock status adapter before recovery, adopts accepted references and UPOs, and keeps UNKNOWN, ERROR, or non-authoritative results on hold without submitting.
6. Retries at most once and only after authoritative NOT_FOUND. Gmail sends controlled internal intake summaries and aged-recovery alerts after the related persistence checks succeed.

## Setup
1. Create KSeF_Lifecycle, KSeF_Evidence_Log, KSeF_Exception_Queue, and KSeF_Run_Summaries; add the mapped fields and re-select each table ID in every Data Table node.
2. Create the KSEF_INTAKE_TOKEN n8n Variable. Configure the webhook caller to send it in x-ksef-token or as a Bearer token.
3. Optionally create KSEF_MANUAL_SWEEP_MODE with submission, recovery, or intake_fixture. Missing or unrecognized values default to submission.
4. Connect Gmail credentials to both send nodes and replace ops@example.com and ops.lead@example.test with controlled internal inboxes.
5. Keep the workflow inactive while testing each branch and failure path. Before real use, replace and review every mock KSeF, status, VAT-whitelist, and authentication adapter.

## Requirements
- n8n Data Tables, Gmail credentials, and an n8n plan that supports $vars (or a replacement server-side secret mechanism).

## Customization
- Adjust approval thresholds, circuit-breaker timing, recovery age, internal inboxes, and the production adapter implementations to match your controls.

## Additional info
This template does not call the real KSeF or government VAT-whitelist APIs. Mock references and UPOs are synthetic; whitelist_status is supplied by the caller. Approval records are validated, not collected. XML checks are structural, not legal or tax compliance. Data Table read-backs and workflow static data are not atomic locks, so manual and scheduled runs can overlap. Certificate mode fails closed until a reviewed production adapter and credential design are implemented.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
