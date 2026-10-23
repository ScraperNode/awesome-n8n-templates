# 🎫 Triage support emails and draft Gmail replies with OpenAI

> ⚡ **4 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new messages, detects emails by subject keywords, uses OpenAI to draft a reply grounded only in your provided guidelines, and saves the response as a Gmail draft in the original thread for manual review.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Checks the email subject for support-style keywords (for example “pricing”, “refund”, or “help”) and continues only if it matches.
3. Adds your FAQ/policy text as context for the response.
4. Uses OpenAI (GPT-4o-mini) to generate a friendly, concise reply using only the FAQ content and the incoming email snippet.
5. Creates a Gmail draft reply (not sent) with “Re:” subject and the original thread ID so it stays on the same conversation.

## Setup
1. Connect your Gmail OAuth2 credentials for both the Gmail trigger and the Gmail draft action.
2. Add your OpenAI credentials for the OpenAI Chat Model node.
3. Replace the placeholder FAQ/policy text in the FAQ context step with your real support content.
4. Update the subject keyword filters to match the types of support/FAQ messages you want to auto-draft replies for.

## 🔗 Nodes Used

Google Sheets, Gmail, Gmail Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
