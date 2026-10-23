# 🎫 Answer Gmail support emails with OpenAI and a Pinecone knowledge base

> ⚡ **0 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow monitors a Gmail inbox for new unread messages, classifies them with OpenAI (or keyword rules), searches a Pinecone knowledge base for relevant help content, and either replies in the original Gmail thread or escalates the case to a support team address.

## How it works
1. Triggers every minute when an unread email arrives in a Gmail inbox (excluding messages sent from your own account).
2. Normalizes the email into a clean format (sender, subject, new message text, thread/message IDs) and drops auto-replies, empty emails, or messages without a usable sender.
3. Classifies the message as support or not-support using OpenAI Chat Completions (with a keyword fallback) and routes non-support emails out without replying.
4. Escalates sensitive or uncertain cases (for example complaints, refunds, legal, cancellations, or low-confidence classifications) by preparing an internal alert email for the support team.
5. For answerable support requests, embeds the question with OpenAI and queries Pinecone for the top matching knowledge chunks (or uses a built-in demo knowledge base when Pinecone is not configured).
6. If the best knowledge match is above the configured score threshold, drafts a reply using OpenAI constrained to the retrieved excerpts (or a template reply when OpenAI is disabled), otherwise escalates to a person.
7. Depending on preview/test/live mode, either shows the drafted reply without sending, emails a test copy to a specified address, or replies to the customer in the original Gmail thread.

## Setup
1. Connect Gmail credentials for the Gmail Trigger and Gmail send/reply actions, and ensure the trigger query matches the inbox you want to monitor.
2. Add an OpenAI API credential for the HTTP Request steps (chat completions and embeddings) and set your chosen chat and embedding models in the config node if you change defaults.
3. Create a Pinecone index with the configured embedding dimensions (default 1536) and add a Pinecone Header Auth credential (Api-Key), then set the Pinecone index host and namespace in the config node.
4. Update the config node with your support team escalation address, your own “do not reply” sender addresses, and tune the confidence and match-score thresholds to control when the workflow is allowed to auto-reply.
5. Start in preview or test mode by setting TEST_RUN/TEST_EMAIL in the config node, then switch to live mode only after verifying replies and escalations behave as expected.

## 🔗 Nodes Used

HTTP Request, Gmail, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
