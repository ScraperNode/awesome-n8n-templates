# ⚙️ Route Stripe webhook alerts to Slack, Discord, and Resend email

> ⚡ **0 views** · ⚙️ [DevOps & CI/CD](../)

## Description

## Quick overview
Verify Stripe signatures, route typed events, alert Slack/Discord/email, and ignore duplicate event IDs.

## How it works
1. Receives a POST webhook request from Stripe with the raw request body enabled.
2. Verifies the Stripe-Signature header against your webhook secret (or optionally skips verification via an environment flag) and extracts key event fields like type, amount, customer, and object IDs.
3. Checks the Stripe event ID against workflow static data to prevent processing the same event more than once.
4. Immediately returns HTTP 200 with a “duplicate” response when the event was already seen.
5. Maps the Stripe event type to a severity/title, builds Slack/Discord message bodies and a Resend email payload, and enables channels based on configured environment variables.
6. Sends the alert to Slack and/or Discord via incoming webhooks and to email via the Resend API, recording any send errors without failing the webhook.
7. Appends a compact log entry to workflow static data and responds to Stripe with HTTP 200 including the event ID, type, severity, and notification results.

## Setup
1. Create a Stripe webhook endpoint pointing to this workflow’s webhook URL (path `stripe-ops`) and configure Stripe to send the event types you care about.
2. Set `STRIPE_WEBHOOK_SECRET` (and optionally `STRIPE_TOLERANCE_SEC`) in your n8n environment to enable signature verification.
3. To receive alerts, set `SLACK_WEBHOOK_URL` and/or `DISCORD_WEBHOOK_URL`, and for email set `RESEND_API_KEY`, `ALERT_FROM_EMAIL`, and `ALERT_TO_EMAIL`.
4. If needed, adjust `IDEMPOTENCY_MAX_IDS` to control how many Stripe event IDs are kept for de-duplication, and avoid using `STRIPE_SKIP_VERIFY=true` except for local testing.

## Requirements
- n8n 1.40+; env STRIPE_WEBHOOK_SECRET; optional SLACK_WEBHOOK_URL, DISCORD_WEBHOOK_URL, RESEND_API_KEY, ALERT_FROM_EMAIL, ALERT_TO_EMAIL

## Customization
- Toggle alert channels via env vars (empty skips). Adjust IDEMPOTENCY_MAX_IDS. STRIPE_SKIP_VERIFY=true for local curl tests only.

## Additional info
Honest limits: Idempotency uses workflow static data (per instance, last 2000 IDs), not a database. HMAC needs the raw body. Alerts only — does not capture/refund/update Stripe objects. STRIPE_SKIP_VERIFY=true is for local tests only.

A fuller pack (GitHub ship-ready changelog workflow, error alerter, example payloads, README) is sold separately as n8n Ops Pack v1, payee Hudson Gouge. This Hub template is the free Stripe router so you can evaluate it.

Author contact: hudson.gouge@projxon.ai
Tags: stripe, webhook, slack, discord, email, idempotency, alerts, ops

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
