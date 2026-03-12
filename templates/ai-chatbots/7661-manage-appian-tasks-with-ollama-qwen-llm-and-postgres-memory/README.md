# 🤖 Manage Appian tasks with Ollama Qwen LLM and Postgres memory

> ⚡ **172 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This workflow is a simple example of using n8n as an AI chat interface into Appian. It connects a local LLM, persistent memory, and API tools to demonstrate how an agent can interact with Appian tasks.

What this workflow does
- Chat interface: Accepts user input through a webhook or chat trigger
- Local LLM (Ollama): Runs on qwen2.5:7b with an 8k context window
- Conversation memory: Stores chat history in Postgres, keyed by sessionId
- AI Agent node: Handles reasoning, follows system rules (helpful assistant persona, date formatting, iteration limits), and decides when to call tools
- Appian integration tools:
- List Tasks: Fetches a user’s tasks from Appian
- Create Task: Submits data for a new task in Appian (title, description, hours, cost)

How it works
1. A user sends a chat message
2. The workflow normalizes fields such as text, username, and sessionId
3. The AI Agent processes the message using Ollama and Postgres memory
4. If the user asks about tasks, the agent calls the Appian APIs
5. The result, either a task list or confirmation of a new task, is returned through the webhook

Why this is useful
- Demonstrates how to build a basic Appian connector in n8n with an AI chat front end
- Shows how an LLM can decide when to call Appian APIs to list or create tasks
- Provides a pattern that can be extended with more Appian endpoints, different models, or custom system prompts

## 🔗 Nodes Used

Webhook, AI Agent, Ollama Chat Model, Chat Trigger, Postgres Chat Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
