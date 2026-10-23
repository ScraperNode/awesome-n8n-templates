# 💬 Handle chat support and escalate unresolved tickets with Google Gemini and Gmail

> ⚡ **17 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This webhook-based customer support workflow uses Google Gemini and a Google Docs knowledge base to answer chat messages, remembers conversation context, and escalates unresolved issues by summarizing the chat and sending a support email via Gmail.

## How it works
1. Receives an incoming chat message via a webhook request.
2. Uses a Google Gemini-powered support agent with a Google Docs knowledge base and short-term memory to draft a user reply and decide whether escalation is needed.
3. Returns the agent’s reply to the chat client as a JSON webhook response.
4. If the agent flags the conversation for escalation, summarizes the chat with Google Gemini and formats an email subject and body.
5. Sends the escalation email through Gmail to the configured support address and responds to the user with a confirmation message.

## Setup
1. Copy the webhook URL from the trigger and configure your chat app or frontend to POST messages (including a sessionId) to it.
2. Add Google Gemini (PaLM) API credentials for the Google Gemini chat model nodes.
3. Add Google Docs OAuth credentials and point the Google Docs tool to the document you want to use as the support knowledge base.
4. Add Gmail OAuth2 credentials and replace `Youremail@example.com` with your real escalation inbox in the Gmail send step.
5. Ensure your client sends the expected fields (for example `body.message` and `body.sessionId`) so memory and replies work correctly.

## 🔗 Nodes Used

Webhook, Gmail, AI Agent, Simple Memory, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
