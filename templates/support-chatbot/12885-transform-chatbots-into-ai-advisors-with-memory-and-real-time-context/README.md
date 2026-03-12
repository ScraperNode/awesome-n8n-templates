# 💬 Transform chatbots into AI advisors with memory and real-time context

> ⚡ **93 views** · 💬 [Support Chatbots](../)

## Description

## How it works
• Receives a user message from a chat 
• Uses an LLM node to understand user intent and generate a response
• Retrieves and stores conversation memory in a database (Supabase)
• Fetches real-time product or business data from an external API (e.g. Shopify)
• Applies custom logic to ensure a consistent, human-like tone
• Sends a contextual response back to the user

## Set up steps
• Import the workflow into n8n
• Create and connect the required credentials (LLM, database, API)
• Configure environment variables and placeholders
• Adjust the prompt and logic to your specific business needs
• Test the workflow using sample user messages

## 🔗 Nodes Used

Telegram, Telegram Trigger, Shopify, AI Agent, OpenAI Chat Model, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
