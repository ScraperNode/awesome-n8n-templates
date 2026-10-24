# 🤝 Deduplicate and send server-side conversions to Meta Conversions API

> ⚡ **21 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives conversion events via a webhook, normalizes and SHA-256 hashes supported identifiers, deduplicates retries using an n8n Data Table, and sends the event to the Meta Conversions API (Graph API), validating the response body to ensure Meta accepted the event.

## How it works
1. Receives a POST webhook request containing a conversion event in plain JSON.
2. Normalizes the event fields (including event time) and repairs the `fbc` value from a raw `fbclid` when needed.
3. Checks an n8n Data Table for an existing dedupe key and stops duplicates before they reach Meta.
4. Records the event’s dedupe key in the Data Table and SHA-256 hashes provided user identifiers (email, phone, name, city, zip, and country).
5. Builds a Meta Conversions API payload, including `event_id`, action/source fields, unhashed `external_id`, and optional `test_event_code`.
6. Sends the event to the Meta Graph API endpoint for your pixel/dataset and verifies `events_received` in the response body.

## Setup
1. Create an n8n Data Table with a `dedupe_key` text column and set the table name in the workflow Settings values.
2. Set your Meta pixel/dataset ID and Graph API version in the workflow Settings values.
3. Add a Meta access token as an HTTP Query Auth credential named `access_token` and attach it to the HTTP request to Meta.
4. Copy the webhook production URL and configure your CRM, backend, or form provider to POST conversion events to it.

## 🔗 Nodes Used

HTTP Request, Webhook, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
