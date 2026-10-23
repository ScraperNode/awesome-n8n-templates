# 🎫 Classify and draft Gmail replies with OpenRouter and a Google Docs RAG KB

> ⚡ **5 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox, uses OpenRouter (Qwen) to classify each incoming email, and either auto-replies, creates a Gmail draft for human review, or ignores the message, with Google Docs used as a knowledge base to ground the generated responses.

## How it works
1. Triggers every minute when a new email arrives in Gmail.
2. Retrieves the full email content from Gmail using the message ID.
3. Sends the email text to OpenRouter (Qwen) to classify it as Reply, Draft, or Nothing based on sensitivity and whether action is required.
4. If classified as Reply, pulls reference content from a Google Docs knowledge base and generates a final response with OpenRouter, then replies to the email in Gmail.
5. If classified as Draft, pulls reference content from a Google Docs knowledge base and generates a suggested response with OpenRouter, then saves it as a Gmail draft addressed to the original sender and threaded with the original conversation.
6. If classified as Nothing, the workflow takes no further action.

## Setup
1. Connect a Gmail OAuth2 credential with permission to read messages, reply, and create drafts.
2. Connect an OpenRouter API credential and confirm the selected model (qwen/qwen-2.5-7b-instruct) is available for your account.
3. Connect a Google Docs OAuth2 credential and replace the two document URLs with your own knowledge-base documents (and ensure the account has access).

## 🔗 Nodes Used

Gmail, Gmail Trigger, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
