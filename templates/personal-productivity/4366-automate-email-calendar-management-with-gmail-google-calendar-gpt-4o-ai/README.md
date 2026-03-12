# ⚡ Automate email & calendar management with Gmail, Google Calendar & GPT-4o AI

> ⚡ **20,511 views** · ⚡ [Personal Productivity](../)

## Description

Boost your productivity with this AI-powered email and calendar assistant:

This AI-powered template has 2 workflows. It manages your Gmail inbox and Google Calendar, classifies emails with custom labels, and suggests replies and meeting times — all fully automated with OpenAI and n8n.


Automatically analyze your Gmail inbox

Suggest replies, priorities, and meeting times

Checks your Google Calendar for conflicts and free slots

Maintain conversation context using Thread History Vector Store

The agent proactively acts using a Tools Agent architecture, with integrated memory and real-time tool invocation. It's perfect for busy professionals who want a personal assistant for communication and scheduling.

Included features:

✅ Do actions on incoming mails 8like Labeling etc)
✅ Summarize and Assist fot the latest emails
✅ Draft replies and schedule meetings contextually
✅ Handle time zone conversion and MessageID referencing
✅ Context retention of last conversation history - using VectorStore

📦 Requirements:

Gmail + Google Calendar credentials via n8n credentials

OpenAI API key

n8n VectorStore nodes (or external integration like Pinecone, Qdrant, or Chroma)

## 🔗 Nodes Used

Gmail, Gmail Trigger, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
