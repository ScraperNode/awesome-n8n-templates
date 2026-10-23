# 🤝 Reconcile CRM and invoicing owner fields with HTTPS APIs and Data Tables

> ⚡ **13 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Reconcile CRM billing details and invoice summaries using field ownership. This vendor-neutral template reads both current records, applies only source-owned differences through conditional REST adapters, verifies the target independently, and keeps a metadata journal for replay and uncertain-write review.

## How it works
1. An authenticated webhook accepts only an entity reference. Distinct source tokens choose CRM or invoicing ownership; the caller cannot supply field values or a destination URL.
2. The workflow validates the request and checks the entity journal. Unresolved intent or uncertain outcomes block new requests in either direction before provider writes.
3. Both normalized adapters return current records with strong ETags. The workflow compares only the authenticated source’s owned fields; matching values return unchanged without a PATCH.
4. For a valid difference, it persists and verifies a minimal intent row, then reads the source again. A changed or unavailable source becomes a no-write conflict.
5. It sends a per-field target PATCH with If-Match and an Idempotency-Key. Proven revision conflicts and uncertain outcomes are retained for review; an acknowledgement alone does not establish an applied result.
6. After a valid acknowledgement, an independent target GET must match the expected fields, revision and write marker. The final journal update is verified before returning applied. Missing, deleted or invalid records are held; records are never created or revived.

## Setup
1. Import inactive into n8n with Variables and Data Tables. In Workflow settings, explicitly confirm UTC, execution order v1 and Do not save for successful, failed and manual executions; editor imports may preserve destination settings.
2. Create Reconciliation_Journal using the full schema in Additional info and select it in all three Data Table nodes. Configure distinct RECON_CRM_TOKEN and RECON_INVOICE_TOKEN tokens plus RECON_CRM_BASE_URL and RECON_INVOICE_BASE_URL. The exact token and HTTPS URL constraints are documented below.
3. Create separate Header Auth credentials for the two adapters. Assign each to its four HTTP Request nodes. Implement both normalized REST adapters using the complete GET/PATCH contract below; ordinary vendor endpoints cannot be substituted by changing only the base URL.
4. Serialize the entire lane, including both directions, manual runs and retries. Use an upstream queue with one request in flight and wait for completion. Data Tables are not a transactional lock. Configure error monitoring and review of old intent or reconcile_required rows.
5. Test synthetic records in isolated adapters: both directions, unchanged replay, malformed requests, missing/deleted records, source changes, target revision conflicts, uncertain writes, independent readback and journal failures. Only then connect trusted source events or a separate scheduler to the webhook.

## Requirements
- Requires n8n Variables, Data Tables, the crypto built-in for Code nodes, two separately authenticated normalized REST adapters, strong revisions, provider-enforced conditional writes and durable idempotency, and serialized execution. Use CRM/customer records and mutable invoice summaries; do not rewrite issued fiscal documents. Uncertain writes require manual reconciliation. This is not a plug-and-play connector for a named CRM or accounting product.

## Customization
- Map provider fields to the documented ownership policy and unique entity mapping. Trigger requests from source-system changes, an operator action or a separate scheduler. Use separate adapters, credentials and journals for different authorization scopes. The template does not include a scheduled scan or durable intake queue.

## Additional info
It uses native n8n Webhook, Code, IF, HTTP Request, Data Table and Respond to Webhook nodes. There are no simulator tables, embedded provider credentials, community nodes, customer emails or invoice-creation actions. It imports inactive.

## Before choosing this template

This is a **vendor-neutral integration template**, not a ready-made connector for a named CRM or accounting product. You must supply two normalized REST adapters implementing the exact contract below. A small integration service, an existing API gateway, or provider-specific n8n subworkflows can expose that contract. Merely changing the base URL to a vendor's ordinary API is insufficient.

The adapters must enforce unique entity mapping, strong record revisions, conditional per-field updates and durable idempotency at the underlying provider boundary. If your provider cannot prevent an intervening edit from being overwritten, stop at review instead of claiming conditional synchronization. Use the workflow for CRM billing/contact records and mutable invoice summary/customer records; do not use it to rewrite issued fiscal documents.

One trusted team and one pair of systems share this lane. A source token authorizes requests for every entity available to those configured adapters. Use separate credentials, adapters and journals for separate authorization scopes.

## Field ownership

| Source of truth | Fields copied to the counterpart |
|---|---|
| CRM | `client_name`, `billing_email`, `billing_address`, `tax_id`, `deal_stage` |
| Invoicing | `invoice_number`, `invoice_status`, `paid_at_utc`, `balance_due_minor`, `currency`, `invoice_due_at_utc` |

Only fields whose values differ enter the PATCH. The caller cannot supply values, a destination URL or a source role in the request body. The authenticated source role determines direction. A conflict between values resolves to the declared field owner; there is no timestamp-wins policy or AI inference. Explicit empty strings in an authoritative record propagate as deliberate clears, so adapters must distinguish empty values from missing/unavailable data.

Ownership is about **data synchronization**, not accounting decisions. The workflow does not calculate tax, authorize payments, issue or cancel invoices, refund customers, or determine whether an invoice should be marked paid. The invoicing source supplies the status and balance.

## Setup

1. Import `workflow-annotated-v2.json` into a new inactive workflow. In Workflow settings, confirm UTC, execution order v1, and **Do not save** for successful, failed and manual executions. Editor imports may preserve destination settings instead of the JSON's settings.
2. Create the `Reconciliation_Journal` Data Table using the schema below. Select it in `Find Entity Reconciliation Journal`, `Insert Reconciliation Intent` and `Persist Reconciliation Outcome`.
3. Configure the four Variables below. Source tokens are 24–256 characters from `[A-Za-z0-9._~-]` and must be distinct. Generate real secrets; do not reuse example values.
4. Create separate **Header Auth** credentials for the two adapters, for example an `Authorization` header with the adapter's bearer credential. Attach the CRM credential to `Read Current CRM Record`, `Recheck CRM Source`, `Patch CRM Owner Fields` and `Read CRM After Patch`; attach the invoicing credential to the corresponding four Invoice HTTP nodes.
5. Implement and verify both REST adapters. They must expose current snapshots and conditional PATCH on the same entity URL, with no redirects. All eight HTTP nodes have automatic retries disabled and a 15-second timeout.
6. Serialize the **entire lane**, including both directions, manual runs and retries. Data Tables are not a transactional lock. Use an upstream queue with one in-flight request and wait for completion; also prevent parallel manual executions. Before concurrent use, replace the journal claim with transactional uniqueness/locking and preserve the provider guards.
7. Test synthetic records in isolated non-production adapters. Connect your source-system change events, an operator action, or a separate scheduler to the webhook only after those tests pass. The template itself has no scheduled scan or durable intake queue.

| Variable | Example shape / use |
|---|---|
| `RECON_CRM_TOKEN` | Source-event bearer token for CRM-owned changes |
| `RECON_INVOICE_TOKEN` | Different bearer token for invoice-owned changes |
| `RECON_CRM_BASE_URL` | `https://crm-adapter.example.com/reconciliation/records` |
| `RECON_INVOICE_BASE_URL` | `https://invoice-adapter.example.com/reconciliation/records` |

Base URLs must be distinct HTTPS URLs on DNS hostnames, with optional port 443 and simple slash-separated path segments. Do not include a trailing slash, query, fragment, embedded credentials or an entity suffix. The workflow appends the URL-encoded entity key. These Variables are administrator configuration, never request inputs. Code nodes require the `crypto` built-in on self-hosted n8n.

## Trigger contract

`POST /webhook/crm-invoicing-reconcile`

Exactly one header: `Authorization: Bearer <source-role-token>`.

```json
{
  "entity_key": "example-14"
}
```

The body contains exactly that field. An entity key is 1–128 characters matching `[A-Za-z0-9][A-Za-z0-9._:-]*`. It identifies an already-mapped pair of records. The token selects the source side, so an invoice event cannot gain CRM field authority by adding an actor/source property. Invalid authentication returns 401 before provider or table access; invalid input returns 400. Invalid adapter configuration returns 503 before those accesses.

Each request reconciles one direction using **current records**, not a historical event payload. To refresh all owned fields in both systems, send one request per source role, sequentially. Source-generated notifications for workflow writes may trigger another request; matching owned values return `unchanged`. A write marker alone never suppresses a differing record, so dirty echoes remain visible and are reconciled according to ownership.

The request is synchronous. If the caller times out, the workflow may still be running. Do not overlap another attempt. Query the journal and provider evidence before any replay after an unknown response.

## Normalized adapter contract

For each base URL, both operations use `<base>/<encoded-entity_key>`. Adapters authenticate using their assigned Header Auth credential. They must reject ambiguous entity mapping rather than choosing a record by position.

### GET current record

Return HTTP **200**, header `ETag: "crm-v1"`, and exactly this object surface:

```json
{
  "entity_key": "example-14",
  "record_id": "crm-record-14",
  "revision": "crm-v1",
  "deleted": false,
  "last_sync_write_id": "",
  "fields": {
    "client_name": "Example Company",
    "billing_email": "billing@example.test",
    "billing_address": "Synthetic street 1",
    "tax_id": "EXAMPLE-14",
    "deal_stage": "won",
    "invoice_number": "EX-14",
    "invoice_status": "issued",
    "paid_at_utc": null,
    "balance_due_minor": 12900,
    "currency": "PLN",
    "invoice_due_at_utc": "2026-09-30T10:00:00Z"
  }
}
```

Both adapters expose all eleven normalized fields so they can be compared without guessing. Requirements:

- `record_id` and `revision` use the same 1–128 character reference syntax as the entity key. Revisions change on every record mutation; do not reuse old revisions. Return the strong, quoted revision as the ETag. Weak or missing ETags fail validation.
- `last_sync_write_id` is empty for records with no recorded sync write, or the 64-character lowercase hexadecimal key from a prior successful synchronization. Preserve it atomically with the PATCH, not in a disconnected log.
- `deleted` is a boolean. A tombstone must have `fields: null`, while preserving identity and revision. Missing records return 404. Neither missing records nor tombstones are created or revived by this workflow.
- `client_name` is a nonblank string up to 200 characters. `billing_email` is empty or a bounded email-shaped string up to 254 characters. `billing_address` is up to 1000 characters, `tax_id` up to 64, `deal_stage` up to 80, and `invoice_number` up to 100. No prohibited control characters.
- `invoice_status` is `draft`, `issued`, `partially_paid`, `paid`, `overdue`, or `void`. `balance_due_minor` is a nonnegative safe integer in the currency's minor units; `currency` is three uppercase letters. The adapter owns the currency/exponent mapping. No conversion or money arithmetic is performed.
- Date values are `null` or a real UTC timestamp with seconds and optional 1–3 millisecond digits, ending in `Z`. A `paid` record requires a zero balance and a non-null `paid_at_utc`.
- Missing fields, additional fields, arrays, malformed values and mismatched identity fail closed. Do not wrap the object in a list or `data` envelope.

### PATCH existing record

The workflow sends:

```http
PATCH /reconciliation/records/example-14
If-Match: "invoice-v1"
Idempotency-Key: <64-character write key>
Content-Type: application/json
```

```json
{
  "entity_key": "example-14",
  "source_side": "crm",
  "source_revision": "crm-v1",
  "sync_write_id": "<same 64-character write key>",
  "patch": {
    "client_name": "Example Company"
  }
}
```

The shown key placeholder is illustrative; actual requests contain a lowercase hexadecimal key. The adapter must:

1. Atomically require the existing target's current revision to equal `If-Match`, and reject missing/deleted targets. **Never** implement this as an unguarded GET followed by PUT.
2. Allow only the source-owned fields for this target. Apply only those fields, leaving other fields untouched. Do not create records or whole-record replacements.
3. Atomically record `sync_write_id` with the provider mutation and a new revision. Enforce durable idempotency for the same key and payload; reject key/payload conflicts. A repeat must not cause another mutation.
4. Return HTTP **200**, a strong ETag for the new revision, and the complete normalized updated snapshot. The returned identity, all expected field values, changed revision and write marker must match.
5. On a revision conflict, return **409 or 412** with `{ "code": "revision_conflict" }`, guaranteeing that **no write occurred**. Do not use this response for partial or ambiguous outcomes. Other errors, unexpected success shapes, 204 responses or transport timeouts require manual reconciliation.

The workflow rechecks the source immediately before PATCH and uses the original target revision as the target guard. After a valid acknowledgement, it performs an independent GET and requires the exact same normalized record. A later edit between acknowledgement and readback becomes `reconcile_required`, even if the PATCH itself succeeded. There is no cross-system transaction: the source can change after its final read. A later source event reconciles that change; this template does not claim a globally atomic snapshot.

## Journal schema

Create the following columns in `Reconciliation_Journal`. n8n supplies the physical `id` and system timestamps.

| Type | Columns |
|---|---|
| String | `event_key`, `entity_hash`, `source_side`, `source_revision`, `target_revision`, `status`, `changed_fields`, `sync_write_id`, `result_revision`, `reason` |
| Date | `created_at_utc`, `updated_at_utc` |

The placeholder table ID is `REPLACE_WITH_RECONCILIATION_JOURNAL_TABLE_ID`. A deterministic entity hash scopes lookup; a deterministic write key binds the entity hash, direction, source/target revisions and planned changed values. The journal contains field **names**, revision references and hashes, not the entity key, patch values, before/after snapshots, client names, addresses, raw requests or raw provider errors. Hashes are pseudonymous metadata, not guaranteed anonymization.

Before a PATCH, the inserted `intent` row must be acknowledged with every expected column. Afterwards, a guarded update matches its physical ID, write key and `status=intent`. Every resulting column must be acknowledged before the workflow returns success. A storage error or ambiguous write acknowledgement stops execution. Data Tables do not guarantee uniqueness across concurrent requests; serialization is part of the operating contract.

## Results and recovery

| Status | Meaning / action |
|---|---|
| `unchanged` | Current source-owned fields already agree; no intent or provider write. |
| `applied` | Conditional PATCH, independent provider readback and journal outcome were verified. |
| `held` | Missing, invalid or deleted provider record; repair mappings/data manually. No new journal intent. |
| `conflict` | Source changed/unavailable before PATCH, or adapter proved a target revision conflict with no write. Journal retains the plan. |
| `reconcile_required` | A write might have happened, or readback did not confirm the exact acknowledged result. Do not resend automatically. |
| `journal_reconcile_required` | Invalid or duplicate physical journal state; resolve it before continuing. |
| `prior_plan_requires_review` | The identical journaled plan still differs from provider state; no new write is attempted. |

`intent` and `reconcile_required` block later requests for the entity **in either direction**. A confirmed `applied` or no-write `conflict` remains historical evidence. If a later request has new current revisions it can form a new plan; an identical recorded plan is held.

For an unresolved write, pause the lane and inspect the actual provider record and its idempotency/write log using the original entity reference held in the source system. Recompute its entity hash if needed. If the exact write is proven applied, record its real result revision, mark the journal row `applied`, clear `reason` and update `updated_at_utc`. If the provider proves no write occurred, preserve incident evidence outside the live retry ledger and deliberately remove only that failed intent so an operator-approved request can create a new plan. Unknown is not proof of no write. If state cannot be established, retain the blocking record and reconcile the business records manually.

Do not bulk-delete history or fabricate revision/write IDs to clear a block. There is no automatic rollback: restoring stale copies of billing or invoice values could overwrite legitimate later edits. Configure n8n error monitoring plus checks for old `intent` / `reconcile_required` rows; execution-data saving is disabled, so store incident evidence only under an appropriate access/retention policy.

## Safe acceptance test

With synthetic records and credentials in isolated adapters:

1. Reject missing/wrong/duplicate authentication before any adapter request.
2. Change a CRM-owned field and confirm one invoice PATCH; replay returns unchanged.
3. Change an invoice-owned field and confirm one CRM PATCH; unrelated fields remain unchanged.
4. Preserve a sync marker but change an owned value; verify the difference is not silently suppressed.
5. Return a missing record, tombstone, malformed value or weak ETag; confirm no PATCH.
6. Change the source before the second read or the target before PATCH; confirm no stale overwrite.
7. Simulate a timeout/500 after applying a write, missing write marker, changed unrelated field and readback mismatch; confirm the unresolved ledger blocks the next request.
8. Fail intent insertion and final journal update separately. The first prevents PATCH; the second does not claim success and requires reconciliation.

## Limits

The workflow depends on correct adapters and serialized operation. It provides no transactional lock, blanket exactly-once guarantee, bulk discovery, queue, scheduler, cross-system transaction, automatic incident resolution or customer communication. It does not erase PII from upstream provider logs or transient n8n node data. Keep raw execution saving disabled, restrict provider credentials to the necessary records/fields, and choose an appropriate retention policy for the minimal journal. A template test proves the exercised code and adapter contract, not compatibility with an untested named CRM/accounting provider.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
