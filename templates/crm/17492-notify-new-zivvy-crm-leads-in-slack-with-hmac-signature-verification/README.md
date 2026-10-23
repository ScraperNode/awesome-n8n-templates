# 🤝 Notify new Zivvy CRM leads in Slack with HMAC signature verification

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
This workflow receives Zivvy CRM lead creation webhooks, verifies the HMAC signature, fetches lead details from the Zivvy API, and posts a formatted notification to Slack via an incoming webhook.

## How it works
1. Receives a POST webhook from Zivvy at `/zivvy/crm-leads` and captures the raw request body.
2. Verifies the `X-Zivvy-Signature` HMAC (sha256) using the raw body and your `ZIVVY_WEBHOOK_SECRET`.
3. Stops with an error if the signature is invalid.
4. Checks that the event is `leads.created` and ignores any other events.
5. Fetches the full lead record from the Zivvy API (`GET /v1/leads/:id`) using the lead identifier from the webhook payload.
6. Formats key lead fields into a Slack-friendly message.
7. Sends the message to Slack using your Slack Incoming Webhook URL.

## Setup
1. Create an n8n variable named `ZIVVY_WEBHOOK_SECRET` with your Zivvy webhook signing secret.
2. Add an HTTP Header Auth credential for Zivvy API access (header `Authorization: Bearer zk_live_...`) and select it for the Zivvy API request.
3. Create an n8n variable named `SLACK_WEBHOOK_URL` pointing to your Slack Incoming Webhook URL.
4. Copy the workflow’s Production webhook URL and configure it in Zivvy as a webhook subscribed to `leads.created` (or `leads.*`).

## Requirements
- Zivvy Account

## 🔗 Nodes Used

HTTP Request, Webhook, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
