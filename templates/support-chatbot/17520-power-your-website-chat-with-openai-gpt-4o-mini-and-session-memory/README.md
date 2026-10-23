# 💬 Power your website chat with OpenAI GPT-4o-mini and session memory

> ⚡ **36 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow exposes an n8n chat webhook that powers a website chatbot using an OpenAI chat model, with short-term session memory to keep recent conversation context.

## How it works
1. Receives a visitor message via the public n8n chat webhook trigger.
2. Uses an AI agent with a custom system prompt to interpret the user’s message and decide on a response.
3. Provides recent chat history from buffer memory (last 10 messages) to keep the conversation coherent within the session.
4. Calls the OpenAI Chat Model (gpt-4o-mini) to generate the chatbot’s reply.
5. Returns the generated response back to the chat widget.

## Setup
1. Add an OpenAI API credential and select it in the OpenAI Chat Model node.
2. Update the AI agent system prompt to match your website, tone, and support boundaries.
3. Activate the workflow and embed the n8n chat widget on your site using the workflow’s public chat URL.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
