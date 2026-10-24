# ⚒️ Test synthetic identity callbacks and timeout recovery with HTTP and webhooks

> ⚡ **0 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This self-hosted testing workflow exercises synthetic identity onboarding callbacks, duplicate events, account binding and bounded timeout recovery through a local SQLite fixture. It does not verify real people, call paid providers, or change production customer permissions.

## How it works
1. Start fixture creates a synthetic session through the local HTTP service and persists its binding and deadline in SQLite.
2. The fixture returns a session identifier; this is not a provider-issued hosted identity link or a completed identity check.
3. The callback webhook forwards explicitly synthetic events to the fixture. The fixture checks session, tenant and user bindings before applying a business-state transition.
4. Replaying an approved event does not increment the synthetic grant more than once. Incorrect bindings return an error without granting permission.
5. A bounded Wait invokes recovery after the fixture deadline. Pending or expired outcomes are handled without pretending a supplier returned approval.
6. The status webhook reads persisted fixture state. Fixture process restart persistence was tested; n8n Wait resumption after restart was not tested.
7. HTTP failures are surfaced as unknown or unsuccessful outcomes. Keep this synthetic test workflow separate from customer production permissions and live provider credentials.

## Setup
1. Clone https://github.com/immurray/gridzen-developer-kit and follow examples/n8n/README.md to start the bundled Python fixture server with its SQLite database.
2. Run self-hosted n8n and the fixture in the same network namespace so the HTTP nodes can reach 127.0.0.1:8787. n8n Cloud cannot reach this loopback service.
3. Import the workflow, run Start fixture, and send the README callback examples to the test webhook. Exercise duplicate, incorrect-binding, expired and unavailable branches before adapting anything for production.

## Requirements
- Self-hosted n8n, Python 3, the repository fixture service and persistent test SQLite storage. No provider account, document, face image, API key or paid call is required.

## Customization
- Use separate fixture test data and update node URLs deliberately if deploying the fixture elsewhere. Production adaptation requires authenticated provider callbacks, tenant isolation and customer-defined business rules.

## Additional info
Synthetic integration testing only. Approved is not unconditional customer permission. Real identity verification, signed supplier callbacks, OTP delivery and production payments are not supplied by this template. Fixture restart tested; n8n Wait restart recovery remains unverified.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
