# 💬 Route Chatwoot customer chats to AI and live agents with Groq and Gemini

> ⚡ **544 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow automates customer chat with Chatwoot & n8n AI agent that handles incoming chats, qualifies leads, answers FAQs from Pinecone knowledge base, and escalates to a live human agent when one is online. Works with any Chatwoot inbox: web widget, WhatsApp, Telegram, and more.

## How it works
1. Receives a POST webhook from Chatwoot when a message is created in a conversation.
2. Extracts message and sender fields into a clean structure, then ignores outgoing messages to prevent the bot from replying to its own messages in an infinite loop.
3. Stops processing if the Chatwoot conversation already has a human assignee (or is escalated to a human during chat) to avoid interrupting live support.
4. Fetches available Chatwoot agents, selects a random online agent (if any), and passes the availability status to the AI assistant.
5. Generates a response using Groq (chat model) with Postgres (Superbase) chat history, optionally retrieving answers from a Pinecone knowledge base using Google Gemini embeddings and chat completions.
6. When escalation is required, assigns the selected Chatwoot agent to the conversation or sends an internal summary email via Gmail.
7. Splits the AI output into short chunks and posts them back to the Chatwoot conversation for human-like short replies

## Setup
1. Chatwoot Agent Bot: In Chatwoot SuperAdmin Console → Agent Bots, create a new bot, and paste the n8n Webhook URL as Outgoing URL.  Assign the bot to your inbox(es) in Bot Configuration settings of those inboxes.
2. Credentials: Add credentials for Groq API, PostgreSQL (Superbase), Pinecone API, Google AI Studio (Gemini embeddings/chat), and Gmail OAuth2.
3. Chatwoot config: Update the Chatwoot base URL and API access token in Chatwoot HTTP requests and the reply-sending code, and set your internal notification email address in the Gmail step.
4. Knowledge base: Create and populate a Pinecone index (and namespace) for your FAQs/knowledge documents, then update the index/namespace values in the Pinecone vector store configuration.

## Requirements
- Chatwoot instance (self-hosted or Chatwoot Cloud) with at least one active inbox.
- Groq API key, or feel free to use any other AI Provider
- PostgreSQL database for conversation memory (Supabase free tier works well)
- Pinecone account with an index populated with your FAQ documents
- Google AI Studio API key for Gemini embeddings
- Gmail account with OAuth2 configured for internal lead notifications

## Customization
- Swap the LLM: Replace the Groq Chat Model node with any LangChain-compatible model — OpenAI, Anthropic Claude, Google Gemini, or a local Ollama model
- Swap the memory store: Replace Postgres Chat Memory with Redis or n8n's In-Memory store for lighter setups
- Swap the vector store: Replace Pinecone with Supabase Vector, or if you prefer a different provider
- Add or edit tools to the agent: Extend with a Google Calendar node for appointment booking, a HubSpot/CRM node for automatic lead creation, or any HTTP Request tool for custom APIs
- Adjust reply chunking: Change the 300ms delay in the Send Reply node or the split pattern to control message pacing

## Additional info
This template is production-tested and was built to solve a real problem: most Chatbot AI integrations are basic single-node setups that break when including multiple sources like Whatsapp, Live Chat, Telegram etc. for a seamless experience, and have long answers that don't feel human-like.

This workflow handles these — through Chatwoot as a medium to connect multiple inboxes and using n8n to power those with Back-end automation, this workflow can help users handle incoming chats across multiple platforms. Plus, it handles human handovers, and only replies when there's no human assigned to the chat.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Pinecone Vector Store, Embeddings Google Gemini, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
