# 🎫 Label and triage support emails in Gmail with DeepSeek or OpenAI

> ⚡ **19 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox, filters out auto-replies and mailing-list noise, classifies each incoming email with DeepSeek (or OpenAI-compatible chat completions), and applies a corresponding Gmail label (order status, product question, refund/complaint, or other) without sending any replies.

## How it works
1. Triggers every 5 minutes when new messages arrive in Gmail.
2. Checks message headers, sender, and subject to skip auto-replies, mailing lists, and noreply/system senders.
3. Sends the email subject and body to the DeepSeek chat completions API to classify the intent into one of four categories.
4. Parses the model’s JSON response and maps the intent to a Gmail label ID.
5. Adds the mapped label to the original Gmail message to triage the inbox.

## Setup
1. Connect a Gmail OAuth2 credential and ensure the trigger has access to the mailbox you want to monitor.
2. Create an HTTP Header Auth credential for your AI provider (for example, `Authorization: Bearer <API_KEY>`) and attach it to the classification request.
3. Create four Gmail labels (for example, `AI/Order`, `AI/Product`, `AI/Refund`, `AI/Other`) and update the workflow’s intent-to-label mapping with your label IDs or select them after import.
4. Optional: If using OpenAI instead of DeepSeek, update the API base URL and model name in the classification request to match your provider.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
