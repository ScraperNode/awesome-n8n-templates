# 🎫 Draft and approve Gmail replies with OpenAI and CustomJS

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow pulls unread Gmail messages, generates draft replies with OpenAI, and publishes an approval dashboard via CustomJS. When you approve or edit a draft in the dashboard, it posts back to a webhook that sends the reply in Gmail and marks the original message as read.

## How it works
1. Runs manually to fetch unread messages from Gmail.
2. Filters out messages from common no-reply senders to avoid automated emails.
3. Uses OpenAI (GPT-5) to generate a draft reply from the email subject, snippet, sender, and recipient.
4. Compiles the original emails and AI drafts into a single HTML approval dashboard and publishes it as a CustomJS page.
5. Receives an approval submission from the dashboard via an n8n webhook containing the edited reply text plus the Gmail message and thread IDs.
6. Replies to the original Gmail message with the approved text and then marks the message as read.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail nodes that read messages, reply, and mark messages as read.
2. Add an OpenAI API credential and select the model you want to use for draft generation.
3. Add your CustomJS credentials and confirm the target page name used to publish the dashboard.
4. Set your n8n base URL and choose the correct webhook path prefix (test vs production) in the dashboard HTML so submissions reach your webhook endpoint.
5. Activate the workflow so the webhook can receive approval submissions from the hosted dashboard.

## 🔗 Nodes Used

Webhook, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
