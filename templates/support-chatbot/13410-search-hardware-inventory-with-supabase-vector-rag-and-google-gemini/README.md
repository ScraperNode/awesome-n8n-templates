# 💬 Search hardware inventory with Supabase vector RAG and Google Gemini

> ⚡ **104 views** · 💬 [Support Chatbots](../)

## Description

## Advanced AI Inventory Agent: Supabase Vector RAG & Gemini

This workflow upgrades your AI agent from [simple sheet reading](https://n8nplaybook.com/post/2026/02/simple-n8n-inventory-ai-agent/) to high-performance Vector RAG. It allows your assistant to search through thousands of items with lightning speed and high accuracy.

### Purpose:

To provide a scalable, professional-grade retrieval system for hardware inventory. It uses "semantic search" to find products even when the user makes typos or uses different terminology.

### Setup Instructions:

1. **Supabase:** Run the provided SQL to create the documents table and the match_documents function.
2. **Credentials:** Connect your Supabase (Service Role Key) and Google Gemini API credentials.
3. **Sync Workflow:** Run the "Path A" workflow to index your Google Sheets data into the vector database.
4. **Chat Workflow:** Use the "Path B" workflow as your production chat interface.
5. **Prompt:** Customize the System Prompt to define your brand's specific tone and sales rules.


**Ideal for:** Large product catalogs (100+ items), technical hardware inventories, and high-traffic customer support bots.

To learn more about how to build and optimize this workflow, read the full blog post [here](https://n8nplaybook.com/post/2026/02/scaling-n8n-inventory-ai-agent-supabase-vector-rag/).

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Supabase Vector Store, Default Data Loader, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
