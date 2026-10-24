# 🔒 Secure and rate-limit webhooks with Slack alerts and HTTP audit logs

> ⚡ **2 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick overview
This workflow provides a hardened security layer for inbound POST webhooks, adding rate limiting, HMAC signature verification, replay/timestamp protection, payload validation, optional IP allow-listing, audit logging to an HTTP endpoint, and Slack alerting before passing accepted requests to your business logic.

## How it works
1. Receives an inbound POST request on an n8n Webhook with raw body capture enabled.
2. Extracts request metadata (source IP, headers, raw body, parsed body, and timestamps) and applies a per-IP sliding-window rate limit, returning a 429 response when exceeded.
3. Verifies the request’s HMAC-SHA256 signature against the raw body using a timing-safe comparison.
4. Validates the timestamp to enforce an allowed clock skew and blocks replays by rejecting previously seen signature+timestamp pairs.
5. Enforces basic payload rules by checking required fields and rejecting bodies that exceed the configured maximum size, and optionally blocks requests not in the configured IP/CIDR allow-list.
6. Writes a structured audit record for every request to the configured HTTP endpoint and decides whether to proceed or reject based on the aggregated security verdict.
7. If the request passes, it runs your “Business Logic” step and returns a 200 response, and if it fails, it tracks repeated failures per IP, posts an alert to Slack when the threshold is reached, and returns an appropriate error status.

## Setup
1. Configure the Webhook path as needed and copy the production webhook URL into the system sending requests.
2. Replace the placeholder HMAC secret in the security configuration with a credential- or environment-backed value and ensure the sender uses the same secret, signature header, and timestamp header.
3. Set your rate-limit, clock-skew, required-fields, max-payload-size, and (optionally) IP allow-list values in the security configuration.
4. Set up an HTTP endpoint to receive audit logs and update the auditLogUrl to point to it.
5. Add Slack credentials and set the target channel used for security alerts.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
