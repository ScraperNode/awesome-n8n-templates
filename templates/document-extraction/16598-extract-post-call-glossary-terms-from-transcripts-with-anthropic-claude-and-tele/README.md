# 🔬 Extract post-call glossary terms from transcripts with Anthropic Claude and Telegram

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow accepts a meeting transcript via an n8n form or webhook, uses Anthropic Claude to extract technical terms and acronyms into a JSON glossary, and then sends either the formatted glossary or a “nothing to add” confirmation to Telegram.

## How it works
1. Receives a transcript either from an n8n form submission or from an HTTP POST webhook.
2. Normalizes the incoming payload into consistent `transcript` and `sessionId` fields.
3. Sends the full transcript to an Anthropic Claude chat model to extract distinct technical terms and short definitions as a strict JSON block.
4. Parses the model’s JSON response into structured fields and checks whether any terms were found.
5. Formats a numbered glossary message when terms exist and sends it to a Telegram chat.
6. Sends a short “Nothing to add” message to Telegram when no relevant terms are found.

## Setup
1. Add an Anthropic API credential and select the model in the Anthropic Claude chat model node.
2. Create a Telegram bot, add Telegram credentials in n8n, and replace `<CHAT_ID>` with your target Telegram chat ID in both Telegram send steps.
3. If using the webhook trigger, copy the webhook URL and configure your transcription tool to POST JSON like `{ "transcript": "...", "sessionId": "optional" }` to the `post-call-glossary` endpoint.

## 🔗 Nodes Used

Webhook, Telegram, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
