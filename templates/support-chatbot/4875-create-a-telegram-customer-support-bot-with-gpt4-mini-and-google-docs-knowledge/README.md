# 💬 Create a Telegram customer support bot with GPT4-mini and Google Docs knowledge

> ⚡ **8,637 views** · 💬 [Support Chatbots](../)

## Description

🤖 AI Customer Support Agent with Google Docs Knowledge (Telegram + OpenAI)

This no-code workflow turns your Telegram bot into an intelligent, always-on AI support agent that references your business documentation in Google Docs to respond to customer queries—instantly and accurately.

Watch full step-by-step video tutorial of the build here:
https://youtu.be/Mlv7CjGO7wI

🔧 How it works:
Telegram Trigger – Captures incoming messages from users on your Telegram bot

Langchain AI Agent (OpenAI GPT) – Interprets the message and uses RAG (retrieval-augmented generation) techniques to craft an answer

Google Docs Tool – Connects to and retrieves context from your specified Google Doc (e.g. FAQ, SOPs, policies)

Memory Buffer – Keeps track of recent chat history for more human-like conversations

Telegram Reply Node – Sends the AI-generated response back to the user

💡 Use Cases:
E-commerce customer service

SaaS product onboarding

Internal helpdesk bot for teams

WhatsApp-style support for digital businesses

🧠 What makes this powerful:
Supports complex questions by referencing a live Google Doc knowledge base

Works in plain conversational language (no buttons or forms needed)

Runs 24/7 with zero code

Easily extendable to Slack, WhatsApp, or email support

🛠️ Tools used:
Telegram Node (trigger + send)

Langchain Agent with OpenAI GPT

Google Docs Tool

Memory Buffer

Sticky Notes for easy understanding

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
