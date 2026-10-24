# 🎫 Draft and approve Gmail replies with OpenAI and CustomJS

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow drafts replies for unread Gmail messages using OpenAI, publishes a Tailwind/Alpine approval dashboard to CustomJS, and sends approved replies back through Gmail via a webhook submission.

## How it works
1. Starts manually and pulls unread emails from Gmail (up to the configured limit).
2. Filters out messages whose sender contains common no-reply patterns.
3. Sends each remaining email’s subject, snippet, sender, and recipient to OpenAI (gpt-5) to generate a draft reply.
4. Combines the email metadata with the generated drafts and builds a single HTML inbox-style approval page that posts approvals back to an n8n webhook.
5. Uploads (upserts) the generated HTML dashboard to CustomJS as a hosted page.
6. Receives approved/edited reply text via the webhook, replies to the original message in Gmail using the message ID, and then marks the message as read.

## Setup
1. Add a Gmail OAuth2 credential and select it for the Gmail read, reply, and mark-as-read steps.
2. Add an OpenAI API credential and ensure the selected model (gpt-5) is available in your OpenAI account.
3. Add a CustomJS credential and set the target page name you want to upsert (for example, “Dashboard”).
4. In the HTML builder code, set `N8N_BASE_URL` to your reachable n8n URL and switch the webhook prefix from `webhook-test` to `webhook` for production.
5. Activate the workflow so the “email-reply-submit” webhook endpoint can receive approvals from the hosted dashboard.

## 🔗 Nodes Used

Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
