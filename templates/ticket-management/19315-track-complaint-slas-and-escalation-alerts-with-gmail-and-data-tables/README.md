# 🎫 Track complaint SLAs and escalation alerts with Gmail and data tables

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
Accept complaint metadata, assign an owner, and track a separately supplied response deadline. Authenticated owner actions acknowledge or close cases. A 15-minute sweep escalates unacknowledged ownership and sends internal Gmail alerts, with durable records and manual reconciliation for uncertain sends.

## How it works
1. An authenticated webhook validates a strict metadata contract. Stable tenant/source identity detects exact sequential replays and conflicting retries. The case is persisted before the webhook confirms success.
2. Ownership escalates from owner to lead to manager when the assigned role does not acknowledge within the configured interval, two elapsed hours by default.
3. A separate supplied response deadline produces 72-hour, 24-hour, breach and daily overdue alerts. Acknowledging ownership does not stop deadline alerts. Missing deadlines produce a review alert.
4. The currently assigned role can acknowledge or close a case through a second authenticated webhook. Closure requires a resolution reference and stops future alerts.
5. Before internal Gmail delivery, the workflow verifies case state and a durable alert intent. A provider message ID is required for success. Uncertain outcomes surface an error and require reconciliation before any retry.

## Setup
1. Import inactive. In Workflow settings, confirm UTC, execution logic v1, and Do not save for failed, successful and manual executions; editor imports can retain destination settings. Create Complaint_Cases and Complaint_Alerts with the schemas below, then select them in every Data Table node.
2. Configure COMPLAINT_INTAKE_TOKEN and distinct COMPLAINT_OWNER_TOKEN, COMPLAINT_LEAD_TOKEN and COMPLAINT_MANAGER_TOKEN in n8n Variables. Each token must be 24–256 characters, and all role tokens must differ from the intake token.
3. Configure COMPLAINT_OWNER_EMAIL, COMPLAINT_LEAD_EMAIL and COMPLAINT_MANAGER_EMAIL with internal inboxes, then connect Gmail OAuth. Optional COMPLAINT_ACK_SLA_HOURS accepts integer 1–168 and defaults to 2. Self-hosted Code nodes require the crypto built-in.
4. Use the exact intake and owner-action examples below. Keep original complaint text, customer addresses and attachments in your source system. Provide explicit timestamp offsets and a reviewed deadline with policy reference, or null plus an empty policy reference for review.
5. Serialize intake, owner actions and sweeps for this lane, or replace Data Tables with transactional storage before concurrent use. Test synthetic intake, exact replay, acknowledgement, overdue acknowledged cases, closure and ambiguous delivery handling before activation.

## Requirements
- n8n Variables, Data Tables, Gmail OAuth and a trusted source-system caller. One configured team owns the entire lane. Deadlines come from your policy process; the template does not calculate statutory periods or decide complaints.

## Customization
- Adjust internal recipients, ownership SLA hours and sweep frequency. Connect the metadata contract to your existing complaint source and reviewed deadline policy.

## Additional info
### Variables
| Variable | Purpose |
|---|---|
| `COMPLAINT_INTAKE_TOKEN` | Bearer token for the source-system intake lane |
| `COMPLAINT_OWNER_TOKEN` | Bearer token for the `owner` role |
| `COMPLAINT_LEAD_TOKEN` | Bearer token for the `lead` role |
| `COMPLAINT_MANAGER_TOKEN` | Bearer token for the `manager` role |
| `COMPLAINT_OWNER_EMAIL` | Internal inbox for initial owner alerts |
| `COMPLAINT_LEAD_EMAIL` | Internal inbox for first escalation |
| `COMPLAINT_MANAGER_EMAIL` | Internal inbox for final escalation |
| `COMPLAINT_ACK_SLA_HOURS` | Optional integer 1–168; default 2 elapsed hours |

Each token must be 24–256 characters. All three owner-role tokens must be configured, distinct from each other and distinct from the intake token. Use generated secrets, not the illustrative values in tests. All webhooks require exactly one `Authorization: Bearer <token>` header. Owner identity is derived from the matched server-side role token; a caller-supplied actor field grants no authority. These are role credentials, not individual SSO or tenant-level authorization. One configured team owns the entire lane.

## Intake contract

`POST /webhook/complaint-sla-intake`

```json
{
  "tenant_id": "tenant-example",
  "source_ref": "ticket-013",
  "category": "complaint",
  "received_at_utc": "2026-09-07T08:00:00Z",
  "response_due_at_utc": "2026-09-10T16:00:00+02:00",
  "policy_ref": "response-policy-v1"
}
```

The six fields are required; any additional field rejects the request. `category` is exactly `complaint`, `reclamation`, or `other`, supplied by the trusted source, with no keyword/AI inference. The category does not select urgency or a legal deadline.

`tenant_id` is 1–64 characters, `source_ref` 1–128, and `policy_ref` 1–80 when present. These references use `[A-Za-z0-9][A-Za-z0-9._:-]*`. Timestamps require a real date, seconds, and `Z` or a numeric timezone offset. Receipt time cannot be more than five minutes in the future. A supplied deadline must follow receipt time; past deadlines are accepted and alert as breached. To route a missing deadline for review, use `response_due_at_utc: null` and `policy_ref: ""`.

The case key is SHA-256 of `tenant_id + "\n" + source_ref`. A second hash binds the normalized metadata. A sequential exact retry returns the existing case without another insert. A changed payload under the same key returns `409 identity_conflict`; multiple or invalid physical rows return `409 ambiguous_case_reconcile_required`. No success response is returned until the inserted row is acknowledged with the expected values.

A new case returns `201 created`, its key, current revision, owner role, deadline status and a generic acknowledgement text for manual use. The workflow does not send that acknowledgement or persist a customer response draft. Invalid inputs return `400`; unauthorized requests return `401`; uncertain intake persistence returns `503`.

## Owner actions

`POST /webhook/complaint-sla-owner-action`, authenticated with the **currently assigned role's** token:

```json
{
  "case_key": "<64-character case key from intake>",
  "action": "ack",
  "expected_revision": 1,
  "resolution_ref": ""
}
```

For closure, use `action: "close"` and a nonempty opaque `resolution_ref` (1–128 characters), such as the ID of the source-system record documenting the actual response or resolution. Closing is an authorized human declaration: the template does not inspect that record or prove that a response was legally sufficient or delivered.

Find the latest revision and owner in `Complaint_Cases`; internal alerts also include the revision at alert planning time. A different role receives `403`; a stale revision receives `409`. Exact repeats of an already-applied acknowledgement or closure return the existing result without another write. Acknowledgement preserves the response deadline. Closing ends future ownership and deadline reminders. There is no reopen action.

For a missing or corrected deadline, an authorized operator must verify the source-system policy, pause this lane, update `response_due_at_utc` and `policy_ref` together in `Complaint_Cases`, increment `revision`, and reconcile the related alert history before resuming. Intake replay deliberately does not overwrite established cases. Automated deadline changes and their approval UI are outside this template.

## Data Table schemas

Create columns exactly as listed. n8n supplies the physical `id` and system timestamps; do not create them yourself. The JSON's mapping schema defines the same types.

### Complaint_Cases

String columns:

- `case_key`, `intake_fingerprint`, `tenant_id`, `source_ref`, `category`
- `policy_ref`, `deadline_status`, `owner_id`, `ack_status`, `lifecycle_status`, `resolution_ref`

Number columns: `owner_level`, `ack_sla_hours`, `revision`.

Date columns:

- `received_at_utc`, `response_due_at_utc`
- `ack_at_utc`, `owner_assigned_at_utc`, `closed_at_utc`
- `created_at_utc`, `updated_at_utc`

Placeholder: `REPLACE_WITH_COMPLAINT_CASES_TABLE_ID`.

### Complaint_Alerts

String columns: `event_key`, `case_key`, `event_kind`, `event_status`, `owner_id`, `gmail_message_id`.

Date columns: `event_at_utc`, `updated_at_utc`.

Placeholder: `REPLACE_WITH_COMPLAINT_ALERTS_TABLE_ID`.

## Alert delivery and recovery

The 15-minute sweep reads open cases, rejects invalid or duplicate physical state, and processes them one at a time. It reloads each case and its alert history. Response-deadline events have priority; an ownership event can follow on the next sweep. A confirmed event suppresses its sequential replay.

Before Gmail, the workflow verifies a guarded case update, inserts an `intent` in `Complaint_Alerts`, and verifies that insert. Gmail success requires a message ID; an error or missing ID becomes `reconcile_required`. The returned ID is recorded and the update is verified. There is no automatic Gmail-node retry. `intent`, `reconcile_required`, ambiguous history or failed writes stop processing and surface an execution error rather than silently sending again. This can delay later cases in the sweep; configure n8n execution-error monitoring and handle it promptly.

**Recovery:** inspect the original internal mailbox and Gmail provider evidence for the specific case/event. If delivery is proven, record its real message ID and mark the alert `sent`. If delivery is proven not to have happened, pause the lane, preserve the incident evidence, and deliberately remove only that failed intent so a later sweep can recreate it. If the outcome is unknown, retain the intent and resolve the complaint manually. Never fabricate a provider ID or treat a timeout as proof of no send.

Owner assignment is persisted before the internal alert. If Gmail fails, the assigned role may already have changed; inspect the case table as well as the alert ledger during recovery. Closing a case does not recall an email already in flight.

## Privacy and operating limits

- The workflow does not accept or persist customer names, email addresses, complaint text, attachment names, URLs, or contents. Opaque source references still require an appropriate access and retention policy; hashing a reference does not guarantee anonymization.
- Internal alerts contain case key, assigned role, revision, deadline and policy reference only. The caller cannot choose recipients or message text.
- Successful, failed and manual execution-data saving is disabled in the supplied settings. Raw requests can still exist transiently, in upstream logging, or when an operator enables execution recording. Configure the environment accordingly.
- The Data Tables do not provide transactional uniqueness across this whole workflow. Guarded updates and exact row acknowledgements detect many stale/ambiguous results but do not guarantee atomic or exactly-once delivery. Concurrent first deliveries or overlapping operations can still race; serialized operation is required for this reference template.
- One role ladder and one set of credentials serve all supplied tenant references. This is a trusted team/source lane, not mutually isolated multi-tenant hosting.
- Alert thresholds are elapsed hours in UTC, sampled every 15 minutes. Downtime, execution errors, queue delay and missing credentials can delay alerts. There is no guaranteed legal-service clock or delivery SLA.
- Alert history grows until the operator applies a retention policy. Do not purge open-case history: doing so can re-enable duplicate alerts.
- No mailbox ingestion, source-system retrieval, automatic customer reply, refund, legal decision, or attachment processing is included.

## 🔗 Nodes Used

Webhook, Gmail, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
