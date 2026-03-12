# 📖 Build AI-ready knowledge base from Outlook & Notion using Pinecone & GPT-4

> ⚡ **424 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Outlook & Notion Knowledge Base Builder for AI Agents  

This n8n template lets you automatically **build and maintain an AI-ready knowledge base** from Outlook emails and Notion pages.  
It stores both sources in a Pinecone vector database so your AI agent can reference them when generating answers, extracting information, or drafting context-aware emails.  

## Who’s it for  
- Teams using Outlook for client or customer communications.  
- Businesses maintaining documentation or notes in Notion.  
- Developers or AI builders who want to create custom knowledge bases for intelligent agents.  

## How it works / What it does  
1. **Outlook Integration:**  
   - When you move an email or thread to a specific folder (e.g., “knowledgebase”), the workflow triggers automatically.  
   - It captures the entire conversation, removes duplicates, and stores it in Pinecone under a namespace called `"emails"`.  
   - The AI agent later uses these stored emails to learn tone, structure, and context for drafting responses.  

2. **Notion Integration:**  
   - When a page is added to a designated Notion database, the workflow triggers.  
   - The page content is extracted and embedded into Pinecone under the `"knowledgebase"` namespace.  
   - This allows your agent to use your Notion pages as factual reference material when answering questions.  

3. **AI Agent Setup:**  
   - Uses **two Pinecone tools** — one to reference Notion content (knowledge base) and another for emails (style & tone).  
   - Equipped with **Cohere embeddings** for multilingual support and **OpenAI** for conversation or drafting tasks.  
   - When queried, the agent retrieves relevant knowledge from both namespaces to produce accurate, context-rich replies.  

## How to set up  
1. Import this template into your n8n account.  
2. Connect your **Outlook account** and specify which folder to watch (e.g., “knowledgebase”).  
3. Connect your **Notion account** and select your target database.  
4. Connect your **Pinecone**, **Cohere**, and **OpenAI** credentials.  
5. Activate the workflow — new Notion pages and Outlook threads will automatically update your knowledge base.  

## Requirements  
- n8n account.  
- Microsoft Outlook account.  
- Notion account and database.  
- Pinecone account for vector storage.  
- Cohere API key for embeddings.  
- OpenAI API key for AI model.  

## How to customize the workflow  
- **Namespaces:** Rename or expand namespaces (e.g., “sales_emails”, “internal_docs”) to organize knowledge types.  
- **Embeddings Model:** Replace Cohere with OpenAI embeddings if preferred.  
- **Agent Behavior:** Adjust the agent’s system message to change its tone or purpose (e.g., “act as a sales assistant”).  
- **Extra Sources:** Extend this workflow to include PDFs, websites, or Slack messages.  
- **Sync Schedule:** Modify trigger intervals to control how frequently updates are captured.  

---

This workflow automatically builds a living, AI-powered knowledge base from your Outlook and Notion data — perfect for intelligent support, research, or content generation.

## 🔗 Nodes Used

Microsoft Outlook, Notion, Notion Trigger, AI Agent, Embeddings Cohere, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
