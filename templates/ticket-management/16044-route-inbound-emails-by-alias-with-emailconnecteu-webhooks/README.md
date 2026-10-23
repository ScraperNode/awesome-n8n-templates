# 🎫 Route inbound emails by alias with EmailConnect.eu webhooks

> ⚡ **7 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives inbound emails from EmailConnect.eu via an n8n webhook, extracts key message fields, drops spam, and routes emails to different downstream paths based on the recipient alias (for example support@ or invoices@).

## How it works
1. Receives a POST webhook from EmailConnect.eu containing a structured JSON payload for an inbound email.
2. Extracts the sender, recipient, subject, text content, attachments, and spam flag from the payload.
3. Stops processing for messages marked as spam.
4. Routes non-spam emails based on whether the recipient address starts with support@, invoices@, or falls back to a catch-all path.
5. Hands each route off to placeholder steps where you add your own actions, such as creating a support ticket or filing an invoice.

## Setup
1. Publish or activate the workflow and use the webhook Test URL (for testing) or Production URL (for live traffic) as appropriate.
2. In EmailConnect.eu, create an inbound alias (catch-all) and configure it to forward incoming email to this workflow’s Webhook (Production) URL (from step 1).
3. Find the `verification_token` in the webhook's verification payload and enter it in EmailConnect.
4. Update the routing rules to match your aliases (for example support@ and invoices@) and replace the placeholder actions with your real integrations.
5. (Optional) If you enable EmailConnect webhook signing, add an HMAC-SHA256 signature verification step using your whsec_ secret and the webhook headers plus raw body.

## Requirements
- Free EmailConnect.eu account (100 emails per month included)

## Additional info
This example flow checks against 'contains support@ or invoices@' to support both custom domain aliases (support@mydomain.tld) _and_ aliases hosted on user.emailconnect.eu (e.g. abc12+support@user.emailconnect.eu). Depending on your situation, consider switching to 'starts with support@' or 'contains +support'.

## 🔗 Nodes Used

Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
