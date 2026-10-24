# ⚙️ Filter and accept first-time webhook events with a replay-safe dedupe key

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
This workflow receives POST webhooks and validates each event’s envelope, then deduplicates events by a derived source:event_id key to safely accept only the first delivery and reject invalid requests with a structured error response.

## How it works
1. Receives an HTTP POST request via an n8n webhook endpoint.
2. Validates the JSON body fields (event_id/eventId and source/origin), normalizes them, and builds a deduplication key in the format source:event_id.
3. If validation fails, returns a 422 response with an invalid_event_envelope error payload.
4. If validation succeeds, checks whether the deduplication key has been seen in previous executions using n8n’s built-in deduplication history.
5. For a first-seen key, returns a 202 response confirming the event was accepted and includes the event_id, source, and dedupe_key.

## Setup
1. Activate the workflow and copy the webhook URL from the “Receive Event” trigger to configure it in the system that sends events.
2. Ensure the sender includes a JSON body with a stable event_id (or eventId) and source (or origin) that match the workflow’s format rules.
3. Adjust the webhook path, HTTP method, or response codes if your source system expects different endpoint settings.
4. Review and tune the deduplication history size (currently 10,000 keys) to fit your replay window and memory requirements.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
