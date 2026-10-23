# ⚡ Run a voice assistant for Gmail, Google Calendar and Contacts with ElevenLabs and Claude

> ⚡ **0 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow exposes a webhook for an ElevenLabs voice agent and uses Anthropic Claude plus Gmail, Google Calendar, and Google Contacts tools to answer requests, draft or send emails, manage calendar events, and look up or save contacts, returning a cleaned, speech-friendly response.

## How it works
1. Receives a POST webhook request from an ElevenLabs agent containing a spoken-text `query` and a `conversation_id`.
2. Validates an optional `x-api-key` shared secret and returns a 401 response if the caller is not authorized.
3. Normalizes the request into a trimmed query, a session ID (from the ElevenLabs conversation), and a localized “now” timestamp, and returns a 400 response if the query is empty.
4. Sends the user request to an Anthropic Claude agent with conversation memory and lets it call Gmail, Google Calendar, and Google Contacts tools to search emails, draft/send/reply to messages, find/create/update/delete events, and look up/save contacts.
5. Cleans the assistant output (removing markdown, URLs, and extra whitespace) to make it suitable for text-to-speech.
6. Responds to the webhook with a JSON payload containing the final spoken response for ElevenLabs to read aloud.

## Setup
1. Add credentials for Anthropic (Claude), Gmail, Google Calendar, and Google Contacts in n8n.
2. Update the workflow Settings values for `calendar_id`, `timezone`, `owner_name`, and optionally set a `shared_secret` and match it to an `x-api-key` header.
3. In ElevenLabs, configure a Webhook tool that POSTs to this workflow’s Production URL with JSON body fields `query` and `conversation_id` (and the `x-api-key` header if used).
4. Test by executing the workflow with sample data, then activate it so the Production webhook URL is available to your ElevenLabs agent.

## Requirements
- Anthropic API key, a Google account and an ElevenLabs agent.

## Customization
- Switch to a larger Claude model, or remove **Send email** for a draft-only assistant.

## 🔗 Nodes Used

Webhook, AI Agent, Anthropic Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
