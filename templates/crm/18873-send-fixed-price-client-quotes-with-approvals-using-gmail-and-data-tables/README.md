# 🤝 Send fixed-price client quotes with approvals using Gmail and data tables

> ⚡ **3 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Price authenticated quote requests, prevent replay sends, route exceptions for approval, and surface stale delivery state.

## How it works
1. Authenticates quote intake with the server-side QUOTE_INTAKE_TOKEN and rejects malformed, array-shaped, padded-scope, or out-of-range requests before state access.
2. Calculates integer USD cents from a versioned fixed price book and derives the exact workflow 08-compatible submission id plus a full request fingerprint.
3. Reads all rows in the submission_id + onboarding_id + smoke_tag scope to distinguish a new request, exact replay, identity conflict, or ambiguous duplicate.
4. Persists standard-send or review-alert intent and verifies the exact acknowledgement before Gmail.
5. Sends an eligible standard offer only when email and verified_email normalize to the same valid submitted address; otherwise it alerts only the operations inbox.
6. Authenticates approval separately with QUOTE_APPROVAL_TOKEN, records approve or reject evidence, and blocks expired, terminal, ambiguous, pending-send, unverified-recipient, and unknown-price rows.
7. Confirms an offer as sent only after Gmail provider evidence and an exact compare-and-set delivery acknowledgement.
8. Sweeps hourly for stale review or pending-email state and records alert intent and confirmed alert delivery in separate fields.

## Setup
1. Create one n8n Data Table named Quote_Offers using the exact columns in the workflow README, then re-select it in every Data Table node.
2. Create separate n8n Variables named QUOTE_INTAKE_TOKEN and QUOTE_APPROVAL_TOKEN.
3. Connect Gmail to the four Gmail nodes. Replace ops@example.test with a controlled operations inbox. Keep the client-recipient expressions bound to the validated stored email; do not add request-controlled recipient overrides.
4. Replace and version the sample price book, currency, automatic-send threshold, review phrases, offer copy, expiry window, and stale thresholds for your business.
5. Keep the workflow inactive while testing wrong tokens, exact replay, identity conflict, ambiguous rows, standard delivery, review, approve, reject, expiry, partial Gmail evidence, failed durable acknowledgement, and stale alerts.

## Requirements
- One n8n Data Table named Quote_Offers with the exact README columns; two n8n Variables named QUOTE_INTAKE_TOKEN and QUOTE_APPROVAL_TOKEN; Gmail credentials for four Gmail nodes; a controlled operations inbox; and source systems that can call the intake and approval webhooks with the correct lane token.

## Customization
- Replace and version the sample price book, currency, automatic-send threshold, review phrases, offer copy, expiry window, stale thresholds, and schedule. Add tenant-specific authentication and a transactional store with unique keys when mutually untrusted tenants or concurrency risk require them.

## Additional info
This is a fixed-price sample, not tax, accounting, legal, signature, payment, or commercial advice; it does not calculate VAT or another tax. n8n Data Tables do not provide an atomic unique constraint or transaction across lookup, writes, and Gmail, so concurrent first deliveries or approvals can race. Gmail acceptance and Data Table acknowledgement are separate; a crash between them leaves explicit pending state for operator reconciliation, and the workflow does not blindly resend. Review and stale alerts are operational notifications with separate provider ids and sent flags. Concurrent hourly sweeps can still duplicate an operator alert. Raw webhook bodies and tokens can appear in execution history, so configure retention, pruning, and access controls. One token authorizes its whole webhook lane; add tenant-specific authorization for mutually untrusted tenants. The template does not claim exactly-once email, legal acceptance, signature, CRM synchronization, automatic recovery, or end-to-end sales fulfilment.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
