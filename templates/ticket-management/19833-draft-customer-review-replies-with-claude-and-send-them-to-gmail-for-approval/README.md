# 🎫 Draft customer review replies with Claude and send them to Gmail for approval

> ⚡ **1 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives customer reviews via a webhook, drafts a short public reply with Anthropic Claude, runs basic safety checks (length, compensation language, and numbers), and emails the review plus the suggested response to Gmail for human approval.

## How it works
1. Receives a POST request on a webhook containing review details such as author, rating, and text.
2. Builds a structured prompt from your business settings and the incoming review, ensuring the review text is treated as data rather than instructions.
3. Sends the prompt to the Anthropic Messages API (Claude) to generate a public review reply in the review’s language.
4. Checks the drafted reply against a maximum word limit, scans for blocked “compensation” phrases, and flags numbers that look like dates or amounts.
5. Composes an email that includes the original review, the suggested reply, and any check alerts.
6. Sends the email through Gmail to the configured approval address so you can review and publish the reply manually.

## Setup
1. Add an Anthropic API credential and select it for the HTTP request to the Anthropic Messages API.
2. Add a Gmail OAuth2 credential and select it in the Gmail node used to send the approval email.
3. Update the Settings values for business name, signature, approval email address, maximum word limit, Claude model name, and your site link.
4. Copy the webhook URL from the webhook trigger and configure your review source (or test tool like curl) to POST JSON fields for author, rating, and text.

## Requirements
- An Anthropic API key with credit, and a Gmail account that will send you the drafts. No access to any review platform is required, and the workflow reads none on its own.

## Customization
- Every sentence comes from the Settings node: edit prompt_system for the tone, blocked_phrases for what gets flagged, and email_body for the email you receive. Raise or lower the word limit, or point the webhook at a different review source.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
