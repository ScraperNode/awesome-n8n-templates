# 🎫 Reply to support emails in-thread with SendRaven and OpenAI

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow receives inbound support emails from SendRaven via a signed webhook, loads the full email thread, uses an OpenAI-powered agent to decide whether to reply, mark the thread handled, or escalate, and posts any reply back through SendRaven in the same email thread.

## How it works
1. Receives an inbound email event from SendRaven through a webhook endpoint.
2. Validates the HMAC-SHA256 signature and timestamp from the request headers and immediately returns 200 to SendRaven or 401 if the signature is invalid.
3. Deduplicates webhook retries and filters out automated messages (such as auto-replies) so only human inbound emails continue.
4. Fetches the full conversation thread from the SendRaven API and formats the transcript with sender and authentication context.
5. Uses an OpenAI chat model to decide whether to reply, mark as no reply needed, or escalate, and generates a plain-text reply when applicable.
6. If the agent chooses to reply, sends a threaded response via the SendRaven Emails API using the original message ID and an idempotency key to prevent double-sends.
7. If the agent chooses no reply needed, marks the SendRaven thread as handled, or routes the message to an escalation placeholder step.

## Setup
1. Create a SendRaven account, verify your sending domain, and configure inbound receiving (MX) so emails reach SendRaven.
2. Create a SendRaven API key with permissions to read threads and send emails, and add it to n8n as an HTTP Bearer Auth credential used by the SendRaven API requests.
3. Copy the workflow’s production webhook URL into SendRaven Webhooks for inbound events and set the webhook signing secret (whsec_…) in n8n as a Crypto credential for HMAC verification.
4. Add your OpenAI API credentials and confirm the selected model is available in your account.
5. Update the company context in the workflow settings (company name, description, and sign-off) so the agent replies in your preferred voice and policy constraints.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Structured Output Parser, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
