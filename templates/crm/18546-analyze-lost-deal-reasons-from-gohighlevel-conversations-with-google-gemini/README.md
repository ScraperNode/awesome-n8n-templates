# 🤝 Analyze lost deal reasons from GoHighLevel conversations with Google Gemini

> ⚡ **4 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick overview
Youtube Video: https://youtu.be/2FqDRG11Y88?si=yF_kn0lFDodXK5f3
This workflow listens for a GoHighLevel (LeadConnector) opportunity status change, fetches the related contact, opportunity, and conversation messages, uses Google Gemini via an n8n AI Agent to infer the primary lost reason, and saves the result as a note back on the contact.

## How it works
1. Receives a POST webhook when a GoHighLevel opportunity status changes.
2. Retrieves the related contact from GoHighLevel and stops if the contact record is missing.
3. Fetches the opportunity from GoHighLevel and continues only if the opportunity status is `lost` and the contact IDs match.
4. Searches GoHighLevel conversations for that location and contact, then downloads the messages for the first matching conversation.
5. Filters out non-message activity events, builds a chronological transcript, and proceeds only if there is more than one message.
6. Sends the transcript to Google Gemini (via an AI Agent with structured output) to generate a primary lost reason and a short summary.
7. Creates a note on the GoHighLevel contact containing the lost-deal analysis.

## Setup
1. Create and connect a GoHighLevel (HighLevel OAuth2) credential with access to contacts, opportunities, conversations, and contact notes.
2. Add a Google Gemini (PaLM) API credential for the Gemini chat model used by the AI Agent.
3. Copy the webhook URL from the Webhook trigger and configure it as the “opportunity status change” callback in GoHighLevel (or your integration that sends the event).
4. Confirm the incoming webhook payload includes `body.contact.id` and `body.opportunity.id`, and adjust the workflow mappings if your event schema differs.
5. Review the note text in the “Add Lost Reason Note” request body to match your preferred formatting and language.

## 🔗 Nodes Used

HTTP Request, Webhook, HighLevel, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
