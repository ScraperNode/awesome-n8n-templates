# 🔬 Summarize meeting transcripts with DeepSeek and email summaries via Gmail

> ⚡ **23 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a meeting transcript via webhook, sends it to the DeepSeek chat-completions API to extract a structured summary (decisions, action items, objections, next steps), then formats the result and emails it as plain text through Gmail.

## How it works
1. Receives a POST request to a webhook containing a meeting title and transcript text.
2. Normalizes the incoming payload, truncates the transcript to 60,000 characters, and flags whether it meets a minimum length threshold.
3. Sends the title and transcript to the DeepSeek chat-completions API (or a compatible OpenAI-style endpoint) and requests a JSON-only structured extraction.
4. Parses the returned JSON and formats a plain-text email with summary, decisions, action items (with owners and due dates), objections/risks, and next step.
5. Sends the formatted meeting summary email to the configured recipient using Gmail.

## Setup
1. Create an HTTP Header Auth credential with your AI provider API key (for example, `Authorization: Bearer <key>`) and update the chat-completions URL/model if you use a provider other than DeepSeek.
2. Connect a Gmail OAuth2 credential and set the recipient address in the Gmail send step.
3. Activate the workflow, copy the Production webhook URL, and configure your transcript source to POST JSON such as `{ "title": "Acme call", "transcript": "..." }` to that URL.

## 🔗 Nodes Used

HTTP Request, Webhook, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
