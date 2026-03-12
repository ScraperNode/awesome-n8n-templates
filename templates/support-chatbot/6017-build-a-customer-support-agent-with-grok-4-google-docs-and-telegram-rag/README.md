# 💬 Build a customer support agent with Grok-4, Google Docs, and Telegram [RAG]

> ⚡ **2,455 views** · 💬 [Support Chatbots](../)

## Description

🤖 Grok-4 Customer Support Agent with Document-Based Intelligence
Template [RAG]

This workflow creates a smart, AI-powered customer support agent using Grok-4 that can answer questions based on a preloaded Google Doc knowledge base. It listens for incoming customer queries via Telegram, then uses Grok-4’s language reasoning + memory features to generate helpful responses pulled directly from the doc.

Watch the Step-by-Step Tutorial of this Workflow: https://www.youtube.com/watch?v=OXzsh-Ba-8Y&t=2s

It’s perfect for solopreneurs, startups, or businesses that want to:
Automate first-level support
Build a Telegram-based knowledge agent
Answer FAQs using internal docs (like manuals, policies, product details)

🔍 How It Works:
Telegram Trigger – Listens for incoming messages from users

Google Docs Tool – Retrieves a specified doc to serve as the knowledge base

Grok-4 AI Agent – Uses xAI’s latest LLM with built-in memory and the document as a tool

Memory Buffer – Keeps track of ongoing context in the conversation

Telegram Reply – Sends the final response back to the customer

🧠 Tools & Integrations Used:
xAI Grok-4 Model (via Langchain-compatible node)

Google Docs Tool (as a reference knowledge base)

Telegram Bot API (chat interface)

n8n Agent Framework (for chaining memory, model, and tools)

💡 Use Cases:
AI-powered FAQ assistant for your product

Internal HR bot answering company policy questions

Support assistant trained on onboarding documents or technical manuals

Private support bot for VIP groups on Telegram

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, xAI Grok Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
