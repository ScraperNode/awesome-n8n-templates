# 🔬 Create replay-safe client report Gmail drafts with webhooks and Data Tables

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Validate a multi-client report batch, render deterministic tenant-branded HTML, and create replay-suppressed Gmail drafts without sending them.

## How it works
1. Receives one authenticated webhook batch of one to 20 client reports from your upstream system. It verifies CLIENT_REPORT_INTAKE_TOKEN before any Data Table or Gmail work and strips authorization data from the normalized payload.
2. Validates exact batch and per-report keys, scalar types and bounds, locale, six-digit brand color, equal verified recipient, explicit-offset source time, narrative arrays, nonnegative integer metrics, and funnel ordering. Invalid siblings return bounded errors without blocking valid reports, and invalid scalar values are never reflected.
3. Renders deterministic, HTML-escaped tenant-branded email for complete reports, or an explicit no-data statement when complete_no_data has an empty metrics object. The workflow uses no AI and never fetches CRM, analytics, finance, or other source systems.
4. Computes deterministic SHA-256 scope, recipient, content, and fingerprint identities, then reads every physical Data Table row in the exact tenant-period-template scope. Confirmed identical drafts replay, changed content conflicts, partial state requires reconciliation, and ambiguous duplicates fail closed.
5. Persists privacy-minimal Draft Intent metadata and requires exactly one matching acknowledgement before Gmail. Gmail creates a draft only—it never sends—and provider evidence plus the exact lifecycle update must be acknowledged; missing evidence becomes Draft Pending Reconcile.
6. Returns one bounded JSON response summarizing every input report without recipient addresses or report HTML.

## Setup
1. Create one n8n Data Table named Client_Report_Ledger with the exact string and date columns in the workflow README, then re-select it in all three Data Table nodes to replace REPLACE_WITH_CLIENT_REPORT_LEDGER_TABLE_ID.
2. Create the server-side n8n Variable CLIENT_REPORT_INTAKE_TOKEN with at least 16 characters, and configure the upstream system to provide it as Authorization: Bearer ... or X-Client-Report-Intake-Token.
3. Attach Gmail OAuth only to Create Gmail Report Draft. Keep the workflow inactive during testing and use synthetic .example.test recipients.
4. Configure n8n execution retention, pruning, encryption, and access controls before using real webhook data, because raw bodies and authorization data may remain in execution history.

## Requirements
- One n8n Data Table with the documented Client_Report_Ledger schema; one server-side CLIENT_REPORT_INTAKE_TOKEN Variable; one Gmail OAuth credential with draft-creation access; and an upstream system that emits the documented webhook schema with verified recipient addresses and explicit-offset timestamps.

## Customization
- Adapt the upstream mapping, accepted locales, deterministic email subject and HTML presentation, brand fields, narrative bounds, and synthetic test fixtures. Preserve exact key validation, replay identities, the persist-before-draft order, draft-only Gmail behavior, privacy-minimal ledger fields, and bounded response projection.

## Additional info
Gmail drafts are created but never sent. This template does not fetch source systems, generate AI content or PDFs, forecast, detect anomalies, or reconcile automatically. n8n Data Tables provide sequential replay suppression, not an atomic unique constraint, lock, or transaction, so concurrent first deliveries can race. Gmail creation and Data Table acknowledgement are separate; partial state is held for reconciliation and never blindly redrafted. The ledger omits recipient addresses, report HTML, client name, brand fields, highlights, risks, and next steps. Configure retention, pruning, encryption, and access controls because raw webhook bodies and authorization data may remain in execution history. The workflow does not claim exactly-once delivery or automatic sending.

## 🔗 Nodes Used

Webhook, Gmail, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
