# 💬 Run a multi-session chat agent with OpenAI and data table memory

> ⚡ **128 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow powers an OpenAI-based chat agent in n8n that persists long-term conversation memory in an n8n Data Table by session ID, optionally recalling past context via name/email lookups while enforcing an identity-verification flow.

## How it works
1. Receives a chat message via the n8n Chat Trigger and uses the provided sessionId to identify the conversation.
2. Searches the n8n Data Table for an existing row with the same session_id and either loads the saved fields or creates a new session record.
3. Uses an OpenAI chat model with a sliding window memory (last 10 turns) to generate the assistant response based on the user message and any loaded session context.
4. Updates the current session’s Data Table row with newly captured details (for example name, email, company, interests, topics, and chat history) according to the agent’s rules.
5. When the user provides a name or email, queries the Data Table for past sessions via the lookup-by-name and lookup-by-email tools to support a privacy-preserving “welcome back” flow.

## Setup
1. Create or select an n8n Data Table (for example, chat_session_data) with columns that match the workflow fields you want to store (such as session_id, first_name, last_name, user_id/email, company, interested_in, last_topic, and chat_history).
2. Add an OpenAI API credential and select the model in the OpenAI Chat Model node.
3. Update the Data Table ID references in the Data Table and Data Table Tool nodes to point to your table.
4. Activate the Chat Trigger and use the generated chat/webhook endpoint in your chat entry point (or test from n8n’s chat UI).
5. Set the workflow timezone in n8n settings to ensure timestamps and session timing align with your locale.

## Requirements
- OpenAI GPT-5.2

## Customization
-  Change the agent name, company name, and role description in the system prompt to match your own use case
-  Add or remove data table fields to capture different information relevant to your business domain
- Swap OpenAI for any other LLM that supports tool calling (Anthropic Claude, Google Gemini, etc.)
- Replace email as the identity verification key with phone number or membership ID by updating the lookup tool filters
- Extend to additional chat channels such as WhatsApp or Telegram by adding a channel-specific trigger and reusing the same data table
- Write a schedule triggered workflow to clean-up old session records based on updateAt date, or just manually delete 

## Additional info
Works on self-hosted and cloud

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
