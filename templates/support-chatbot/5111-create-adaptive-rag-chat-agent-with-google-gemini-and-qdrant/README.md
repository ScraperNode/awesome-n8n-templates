# 💬 Create adaptive RAG chat agent with Google Gemini and Qdrant

> ⚡ **5,484 views** · 💬 [Support Chatbots](../)

## Description

Unlock adaptive, context-aware AI chat in your automations—no coding required!

This template is a plug-and-play n8n workflow that transforms how your chatbots, support agents, and knowledge systems respond to users. Powered by Google Gemini and a Qdrant vector database, it automatically classifies every incoming query and applies a tailor-made strategy for Factual, Analytical, Opinion, or Contextual requests—delivering the right answer, every time.

🛠️ Key Features
Automatic Query Classification:
Seamlessly detects whether the user wants facts, a deep analysis, opinions, or context—then routes each input to the best answering strategy.

Four Dynamic Retrieval Modes:
1) Factual: Delivers precise, accurate information
2) Analytical: Breaks down complex topics for deep dives
3) Opinion: Surfaces diverse viewpoints and perspectives
4) Contextual: Connects the dots using implied or user-specific context

End-to-End RAG Pipeline:
Uses Gemini to classify and answer, while Qdrant powers fast, smart knowledge retrieval.

No-Code Visual Editing:
Import into n8n, connect your LLM and vector database credentials, and you’re live—customize, extend, and scale with zero backend code.

Reusable in Any Project:
Perfect for customer support, research, onboarding bots, internal knowledgebases, or any adaptive AI chat interface.

🚀 How it Works
1) User submits a query (via chat or API)
2) Query is auto-classified as Factual, Analytical, Opinion, or Contextual
3) Adaptive retrieval strategy is triggered
(each with its own prompt logic and memory buffer)
4) Smart knowledge search is performed using Gemini and Qdrant
5) Response is generated and sent back to the user—tailored to the query type!

🧩 What’s Included
- Full n8n workflow (.json)
- Step-by-step setup instructions
- Sample prompts and system messages for each strategy
- Lifetime updates (as the workflow evolves)

💡 Use Cases
- Chatbots that adapt to every user’s intent
- Internal/external FAQ and helpdesk automations
- AI research and summarization agents
- Product support and onboarding flows

Any scenario where smarter, more relevant answers = better user experience

Ready to build smarter automations? Import this template, connect your Gemini & Qdrant accounts, and let your AI agent adapt to every conversation.

## 🔗 Nodes Used

Execute Workflow Trigger, AI Agent, Simple Memory, Summarize, Chat Trigger, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
