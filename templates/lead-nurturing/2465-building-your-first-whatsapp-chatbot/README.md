# 💬 Building your first WhatsApp chatbot

> ⚡ **474,783 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

This n8n template builds a simple WhatsApp chabot acting as a Sales Agent. The Agent is backed by a product catalog vector store to better answer user's questions.

This template is intended to help introduce n8n users interested in building with WhatsApp.

## How it works
* This template is in 2 parts: creating the product catalog vector store and building the WhatsApp AI chatbot.
* A product brochure is imported via HTTP request node and its text contents extracted.
* The text contents are then uploaded to the in-memory vector store to build a knowledgebase for the chatbot.
* A WhatsApp trigger is used to capture messages from customers where non-text messages are filtered out.
* The customer's message is sent to the AI Agent which queries the product catalogue using the vector store tool.
* The Agent's response is sent back to the user via the WhatsApp node.

## How to use

Once you've setup and configured your WhatsApp account and credentials
* First, populate the vector store by clicking the "Test Workflow" button.
* Next, activate the workflow to enable the WhatsApp chatbot.
* Message your designated WhatsApp number and you should receive a message from the AI sales agent.
* Tweak datasource and behaviour as required.

## Requirements
* WhatsApp Business Account
* OpenAI for LLM

## Customising this workflow

* Upgrade the vector store to [Qdrant](https://qdrant.tech) for persistance and production use-cases.
* Handle different WhatsApp message types for a more rich and engaging experience for customers.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
