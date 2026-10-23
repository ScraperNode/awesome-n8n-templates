# 💬 Route grounded RAG support tickets with Claude, Pinecone, Zendesk, Slack

> ⚡ **3 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives support questions via a webhook, retrieves relevant context from Pinecone using Voyage AI embeddings, and uses Anthropic Claude to draft a grounded, cited answer. It auto-replies when confidence is high, otherwise escalates to Zendesk and Slack, and logs every interaction to Google Sheets.

## How it works
1. Receives a customer support query via an HTTP webhook and keeps the connection open for a synchronous response.
2. Normalizes the incoming payload (query text, customer/ticket identifiers, and product line) and generates an embedding with Voyage AI.
3. Searches Pinecone for the most relevant documentation chunks in the matching namespace, then deduplicates/ranks results and builds a numbered context block with retrieval confidence scores.
4. If retrieval confidence is sufficient, sends the question plus context to Anthropic Claude to generate a JSON answer with citations, then validates cited sources and checks confidence and escalation keywords.
5. If the request qualifies for auto-answer, replies to the webhook with the grounded answer and cited sources and tags the Zendesk ticket as auto-resolved.
6. If retrieval is weak or escalation is required, creates an escalation package, opens/updates a Zendesk ticket, notifies the support team in Slack, and replies to the webhook with an escalation notice.
7. Logs the query, retrieval metrics, decision path, and sources used to Google Sheets for auditing and improvement.

## Setup
1. Add credentials for Voyage AI (HTTP header auth), Pinecone (HTTP header auth), Anthropic (HTTP header auth), Zendesk, Slack, and Google Sheets.
2. Replace the Pinecone query URL with your index host and confirm the namespace strategy matches your productLine values.
3. Connect the Google Sheets node to your logging spreadsheet and worksheet and ensure the target columns exist for the appended fields.
4. Configure Zendesk and Slack targets (ticket fields/tags and the Slack channel) to match your support workflow.
5. Adjust the retrieval threshold and auto-reply/escalation rules in the code steps (confidence thresholds and keyword list) to match your risk tolerance.
6. Copy the webhook URL and configure your chat widget, email-to-webhook, or helpdesk integration to POST queries to it.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Webhook, Zendesk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
