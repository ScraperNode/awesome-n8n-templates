# ⚒️ Prevent duplicate webhook processing with Data Tables idempotency guard

> ⚡ **36 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
Stop repeated webhook deliveries from triggering payments, notifications, database writes, or other side effects more than once by storing scoped idempotency keys in an n8n Data Table.

## How it works
1. A Webhook node receives an idempotency_key, optional scope, and payload.
2. The workflow creates a collision-resistant ledger key by combining scope and idempotency key.
3. It searches an n8n Data Table for an existing unexpired record.
4. Creates a new ledger record, updates duplicate counters, or refreshes an expired record in the Data Table based on the decision.
5. Duplicate deliveries increment duplicate_count and update last_seen_at for auditing.
6. Returns a JSON response with `allow_processing`, the decision/action, and ledger metadata so downstream processing only continues when `allow_processing` is true.

## Setup
1. Create an n8n Data Table named `webhook_idempotency` with the required columns (ledger_key, scope, idempotency_key, status, first_seen_at, last_seen_at, expires_at, duplicate_count) and select it in all Data Table steps.
2. Review and adjust the guard settings in the configuration step (record TTL hours, default scope, and maximum key length) to match your webhook source.
3. Copy the production webhook URL for `/webhook/idempotency-guard` and configure your source system to send POST requests with an `idempotency_key` (and optional `scope` and `payload`).

## 🔗 Nodes Used

Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
