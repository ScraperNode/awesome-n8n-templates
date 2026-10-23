# ⚒️ Build an event-driven pub/sub bus with webhooks, HTTP services, and Slack

> ⚡ **2 views** · ⚒️ [Engineering](../)

## Description

## Quick overview
This workflow implements an event bus in n8n that accepts event envelopes via webhook or Execute Workflow, validates and logs them to an external event store, routes events to multiple HTTP subscriber endpoints, and handles failures with exponential backoff retries, a dead-letter queue, and Slack alerts.

## How it works
1. Receives an event envelope either from an HTTP POST webhook or from another n8n workflow via Execute Workflow inputs.
2. Validates and normalizes the envelope fields (eventType, eventId, source, timestamp, payload) and rejects invalid webhook requests with a 400 response.
3. Appends every valid event to an external event store over HTTP and returns a 202 “accepted” webhook response.
4. Routes the event by eventType and fans out deliveries to subscriber services via HTTP (Order Service, Notification Service, and an Analytics Service catch-all), while unknown types still flow to analytics.
5. If a subscriber delivery fails, computes an exponential backoff delay and retries up to the configured maximum attempts.
6. When retries are exhausted, writes the failed delivery to an external dead-letter queue over HTTP and posts an alert to a Slack channel.
7. When delivery succeeds, acknowledges the event back to the event store over HTTP.

## Setup
1. Provide reachable HTTP endpoints for the event store append URL, event store ack URL, and dead-letter queue URL, then replace the placeholder URLs in the event bus configuration.
2. Set the subscriber endpoint URLs (order, notification, analytics) in the event bus configuration to your real services that can accept the event JSON payload.
3. Add a Slack credential in n8n and set the target channel name for DLQ alerts in the event bus configuration.
4. If using the webhook ingress, copy the production webhook URL for `POST /event-bus/publish` and configure your event producers to send the event envelope to it.
5. If publishing from other n8n workflows, call this workflow via Execute Workflow and pass at least eventType and payload (and optionally eventId, source, and timestamp).

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
