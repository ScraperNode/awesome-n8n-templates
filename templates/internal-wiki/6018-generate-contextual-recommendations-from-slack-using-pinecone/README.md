# 📖 Generate contextual recommendations from Slack using Pinecone

> ⚡ **417 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This advanced Retrieval-Augmented Generation (RAG) automation template for n8n enables contextual, real-time recommendations using Slack messages as input. The workflow extracts referenced documents from Google Drive, performs semantic retrieval from Pinecone, and generates next-step advice using GPT-4o — tailored specifically for executives and knowledge workers.

Perfect for AI copilots, Slack-based assistants, or CTO coaching tools, this no-code RAG implementation gives you the building blocks to combine unstructured inputs with memory-augmented intelligence.

**What This Template Does**

✅ Triggers from a Slack Message or Mention
Monitors a Slack channel using a bot, capturing user input in real-time.
🔍 Extracts Key Info from Message
GPT-4o parses the message to identify the subject person and Google Drive link (if present).
📥 Downloads File from Google Drive
Automatically fetches and extracts PDF content using the built-in extractor.
📇 Retrieves Metadata from Google Sheets & Pinecone

Looks up user ID from Google Sheets and retrieves context from Pinecone based on embeddings and reranking.

🧠 Contextual Response via GPT-4o (RAG)
Combines user data and document context to generate a single, actionable next step using a tightly scoped GPT-4o prompt.

🛠️ Auto-Fixes & Structures Output
Ensures formatted response with recommended_action, rationale, and optional risk_note.

📨 Sends Final Output Back to Slack
Posts the recommendation directly to the channel as a reply.

**Required Integrations**

- Slack Bot with channels:history & app_mentions:read
- Google Drive OAuth for file fetching
- Google Sheets for ID mapping
- Pinecone for vector document retrieval
- Azure OpenAI or OpenAI GPT-4o for language processing
- (Optional) Cohere for reranking results

**Ideal Use Cases**

🧑‍💼 Executive coaching bots (e.g., for CTOs or founders)
🧠 Slack-based internal AI assistants
📄 AI-powered document summarization with memory
💬 Actionable recommendations based on real Slack conversations
📊 Enterprise knowledge augmentation from vector DBs

**Why This Template Stands Out**

1. Combines live Slack interaction, file ingestion, and Pinecone retrieval into a fully RAG-powered response system.
2. AI prompts are carefully scoped for actionable, context-aware, and time-bound responses.
3. No-code setup with modular components for scaling or adapting to new use cases (e.g., different roles or goals).

## 🔗 Nodes Used

Slack, Google Drive, AI Agent, Auto-fixing Output Parser, Structured Output Parser, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
