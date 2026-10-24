# 💬 Manage Zendesk tickets and contacts via Placetel AI Voice Agent calls

> ⚡ **17 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This webhook-based workflow lets a Placetel AI Voice Agent look up callers and manage Zendesk users and tickets by sending an operation in each request, returning a speech-ready response for the agent to read back.

## How it works
1. Receives a POST webhook request from Placetel with an `operation` and caller context details.
2. Parses the request, extracts the requested operation, and normalizes the caller phone number to a German +49 format for consistent Zendesk matching.
3. Routes the request by operation to the corresponding Zendesk action (search or create a user, create or update tickets, list open tickets, or update a user).
4. For caller identification operations, searches Zendesk users by the normalized phone number and returns a speech response indicating whether a matching customer is found and/or verified.
5. For ticket operations, creates callback, call-log, or regular tickets in Zendesk, or fetches/updates an existing ticket for status, internal notes, or escalation.
6. Returns a JSON webhook response that includes a concise `speech` string and key IDs (such as `customer_id` or `ticket_id`) for the voice agent to continue the conversation.

## Setup
1. Add a Zendesk OAuth2 credential in n8n and select it in each Zendesk node.
2. Activate the workflow and copy the webhook URL for the `POST /placetel-zendesk` endpoint.
3. In Placetel, configure your AI Voice Agent (custom tool) to POST to the webhook URL and to always send an `operation` plus `phone` from `%%caller_number%%`.
4. Ensure your Zendesk instance supports user search by phone and that your user phone numbers are stored consistently (the workflow normalizes to +49 / 49 formats).
5. Review and adjust the identity verification logic to match your Zendesk user fields and what you consider acceptable `verify_value` inputs before using it in production.

## 🔗 Nodes Used

Webhook, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
