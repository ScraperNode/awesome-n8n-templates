# 🔒 Secure inbound webhooks with HMAC, rate limits, audit logs, and Slack alerts

> ⚡ **1 views** · 🔒 [SecOps & Security Automation](../)

## Description

## Quick Overview
This workflow adds a hardened security layer in front of an inbound n8n webhook, applying rate limiting, HMAC signature verification, replay and timestamp protection, payload validation, optional IP allow-listing, audit logging via an HTTP endpoint, and security alerting to Slack.

## How it works
1. Receives inbound POST requests on an n8n webhook endpoint with raw body capture enabled.
2. Extracts request metadata (source IP, headers, raw body, parsed body, timestamps) and enforces a per-IP sliding-window rate limit, immediately returning HTTP 429 for over-limit traffic.
3. Verifies the request’s HMAC-SHA256 signature from a configured header using a timing-safe comparison against the raw payload.
4. Validates the request timestamp for allowed clock skew, blocks replays by rejecting previously seen signature+timestamp pairs, and checks required fields plus a maximum payload size.
5. Optionally enforces a CIDR-aware IP allow-list and computes a single pass/fail verdict with an appropriate HTTP status code.
6. Writes a structured audit log record for every request to a configured HTTP endpoint, including verdict details and a truncated hash of the body.
7. If the request passes, runs your placeholder “Business Logic” step and responds 200, and if it fails, tracks repeated failures per IP and posts an alert to Slack when a threshold is exceeded before responding with the rejection status.

## Setup
1. Configure the webhook path as needed and copy the production webhook URL into the system that sends requests.
2. Replace the placeholder HMAC secret with a credential- or environment-backed value and confirm the signature and timestamp header names match your sender.
3. Update rate-limit, clock-skew, payload-size, required-fields, replay/failure thresholds, and (optionally) the IP allow-list values in the security configuration.
4. Set an audit log endpoint URL that can accept JSON POST requests (or swap the HTTP request for a Postgres/Airtable node).
5. Add Slack credentials and set the target channel for security alerts.

## 🔗 Nodes Used

HTTP Request, Slack, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
