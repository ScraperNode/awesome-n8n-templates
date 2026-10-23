# 💬 Answer WhatsApp support chats with OpenRouter, Pinecone, Gemini and Gmail

> ⚡ **169 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow triggers on incoming WhatsApp messages, uses an OpenRouter chat model with Pinecone retrieval (Gemini embeddings) to answer from your support knowledge base, and escalates unanswered or sensitive requests to a human via Gmail before replying back on WhatsApp.

## How it works
1. Triggers when a new WhatsApp message is received on your WhatsApp Business number.
2. Loads workflow settings (business name, models, support email, language, memory window) and extracts the customer message, phone number, and WhatsApp phone number ID.
3. Ignores events that don’t contain an incoming text message.
4. Uses an OpenRouter chat model with per-customer conversation memory and queries a Pinecone knowledge base (with Google Gemini embeddings) to generate an answer based only on retrieved content.
5. If the request can’t be answered from the knowledge base or needs human help (e.g., refund/complaint/cancellation or the customer asks for a person), emails the support team via Gmail and returns the predefined escalation notice.
6. Sends the resulting reply back to the customer over WhatsApp.

## Setup
1. Connect your WhatsApp Business Cloud credentials for both receiving messages (trigger) and sending replies, and ensure the workflow uses the correct phone number.
2. Add an OpenRouter API credential and set the desired OpenRouter model ID in the configuration.
3. Set up a Pinecone index populated with your support content, create a Pinecone credential, and select the target index in the knowledge base connector.
4. Add a Google Gemini (PaLM) API credential for embeddings and ensure the embedding model matches the one used when you ingested documents into Pinecone.
5. Add a Gmail OAuth2 credential and set the support team destination email address in the configuration.

## Additional info
# Answer WhatsApp support chats from a Pinecone knowledge base with human escalation
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/3b73d6550fd9811ba6e9d33642c2fcab)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

WhatsApp Business Cloud, Filter, AI Agent, Simple Memory, Pinecone Vector Store, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
