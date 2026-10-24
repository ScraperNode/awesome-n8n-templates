# 🤝 Sync customer and vendor master data between ERP and CRM via webhook

> ⚡ **0 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow exposes a POST webhook that ingests customer or vendor master-data changes, normalizes and deduplicates them into a golden record, pushes the resolved record to ERP and CRM endpoints via HTTP requests, verifies the sync, and returns an audit-style status report.

## How it works
1. Receives a POST request on an n8n webhook containing a customer or vendor master-data payload.
2. Validates required fields and normalizes the incoming data into a canonical master-data model.
3. Matches the canonical record to a simulated golden record using tax ID, external ID, email, or a new-record fallback and assigns a golden ID.
4. Detects field-level conflicts against the matched golden record and resolves them using a “prefer incoming” policy.
5. Sends the resolved master record to ERP and CRM systems using HTTP POST requests and records each response status.
6. Calls a verification endpoint to confirm the record is synced, then compiles match details, conflicts, sync results, and verification status into a final report.
7. Returns a JSON response to the webhook caller with an overall status and the full synchronization report.

## Setup
1. Activate the workflow and copy the webhook URL for the `POST /master-data-sync` endpoint into the source system that emits master-data change events.
2. Replace the demo HTTP endpoints (currently httpbin.org) with your real ERP, CRM, and verification API URLs in the workflow configuration.
3. Configure any required authentication and headers for your ERP/CRM/verification APIs in the HTTP request steps (none are included by default beyond Content-Type and X-Request-Id).
4. Align your source payload to include at minimum `entityType` (customer/vendor), `name`, and one identifier (`externalId`, `taxId`, or `email`), and optionally `requestId` and `simulateStatus` for testing.

## 🔗 Nodes Used

HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
