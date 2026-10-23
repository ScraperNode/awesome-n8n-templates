# ⚒️ Reconcile claimed workflow successes with provider HTTP APIs and code

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Every 15 minutes this workflow compares your own log of successful runs with the provider's confirmed events over a six-hour window, joins both sides by idempotency key, and emits one of six honest verdicts instead of assuming silence means success.

## How it works
1. Runs every 15 minutes on a schedule.
2. Builds a six-hour reconciliation window ending 15 minutes ago, so normal provider ingestion lag is never mistaken for a missing event, and sets the overdue and re-alert thresholds.
3. Fetches the actions you recorded as successful from your internal logging endpoint over HTTP, following pagination so that a truncated page is never read as a missing confirmation.
4. Fetches the provider's events for the same window over HTTP, also paginated, and keeps the raw status code instead of discarding it.
5. If either source did not answer cleanly, reports the window as UNKNOWN_WINDOW rather than reporting that nothing is wrong.
6. Joins claims and provider events by idempotency key and classifies every row as CONFIRMED, PENDING, MISSING_OVERDUE, PROVIDER_REJECTED, AMBIGUOUS_PROVIDER_STATE or UNRECONCILABLE_NO_KEY; splits PENDING from MISSING_OVERDUE by age, flags provider events you never claimed, suppresses rows already alerted inside the cooldown, and builds a source-traceable alert only when something actionable is new.

## Setup
1. Configure the two HTTP Request nodes with your own claimed-successes endpoint and your provider's events or messages API, including any credentials n8n needs.
2. Ensure both sides carry the same stable idempotency key for each operation (for example, `idempotency_key`), because rows without one are reported as UNRECONCILABLE_NO_KEY rather than silently dropped.
3. Adjust the window and threshold node: window length, the end-time lag, `overdue_after_minutes` which separates PENDING from MISSING_OVERDUE, and `realert_after_hours` which bounds the alert cooldown.
4. Update the reconciliation code to match your response shapes (`CLAIM_PATH`/`PROVIDER_PATH`), key field names and the provider's accepted status values, then route the prepared alert subject and body to your preferred destination.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
