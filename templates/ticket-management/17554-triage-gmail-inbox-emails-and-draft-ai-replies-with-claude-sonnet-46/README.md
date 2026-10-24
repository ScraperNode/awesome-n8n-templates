# 🎫 Triage Gmail inbox emails and draft AI replies with Claude Sonnet 4.6

> ⚡ **369 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for unread messages, uses Anthropic Claude to classify and summarize each email, auto-drafts an HTML reply in the same thread, logs the triage result to an n8n Data Table, and sends an urgent alert email for high-priority items.

## How it works
1. Triggers every minute when a new unread email arrives in Gmail.
2. Extracts the sender, sender email address, subject, body text, thread ID, and message ID from the email.
3. Sends the email content to Anthropic Claude (Sonnet 4.6) to classify category, urgency, and sentiment, generate a one-line summary, and produce a draft subject and HTML reply.
4. Normalizes the AI output into a single triage record and timestamps it for logging.
5. Logs the triage details (category, urgency, sentiment, summary, and whether it needs a human) to the n8n Data Table `email_triage_log`.
6. Creates a Gmail draft reply addressed to the sender and attached to the original thread.
7. Sends an urgent alert email to your chosen address when the email is marked High urgency, otherwise it only drafts and logs.

## Setup
1. Connect Gmail OAuth2 credentials for the Gmail trigger, draft creation, and urgent alert steps.
2. Add Anthropic credentials and ensure the workflow uses the Claude Sonnet 4.6 model.
3. Replace the placeholder recipient in the urgent alert email with your real alert inbox address (for example, you@company.com).
4. Confirm the n8n Data Table `email_triage_log` exists (or select/create it) so triage records can be written.

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, Anthropic Chat Model, Structured Output Parser, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
