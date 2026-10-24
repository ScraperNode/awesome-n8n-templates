# 🎫 Classify cold email replies and triage Gmail with Claude and Slack

> ⚡ **71 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors Gmail for new email replies, uses Anthropic Claude to classify each reply and draft a suggested response, then routes interested replies to Slack and a Gmail draft while labeling all other replies in Gmail for triage.

## How it works
1. Triggers every minute when a new email reply is received in Gmail.
2. Loads configuration values such as your offer/voice context, Slack channel, and Gmail label IDs.
3. Sends the email details to Anthropic Claude to classify the reply, score confidence, summarize it, and draft a suggested response as structured JSON.
4. Routes the message by category so “interested” replies post an alert to Slack.
5. Creates a Gmail draft reply in the same thread using Claude’s suggested response.
6. For non-interested categories (not now, out of office, unsubscribe, referral, objection) and any unmatched output, adds the corresponding Gmail label to the incoming message.

## Setup
1. Add credentials for Gmail OAuth2, Anthropic API, and Slack OAuth in the respective nodes.
2. Update the “Config (edit me)” values with your offer/voice context, Slack channel name, and the Gmail label IDs for each category (not_now, out_of_office, unsubscribe, referral, objection, and review).
3. Create the required Gmail labels and copy their label IDs into the config so each category is applied correctly.

## Additional info
Step-by-step guides:
- Google (Gmail) for n8n → https://winflowai.com/blog/get-google-api-key-n8n/
- Anthropic (Claude) API key → https://winflowai.com/blog/get-claude-api-key/

## 🔗 Nodes Used

Slack, Gmail, Gmail Trigger, Basic LLM Chain, Anthropic Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
