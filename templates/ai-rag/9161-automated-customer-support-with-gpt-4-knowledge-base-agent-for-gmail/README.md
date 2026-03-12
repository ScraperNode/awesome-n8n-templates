# 🔍 Automated customer support with GPT-4 knowledge base agent for Gmail

> ⚡ **631 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

# Customer Support AI Agent for Gmail  

This n8n template demonstrates how to build an **AI-powered customer support workflow** that automatically handles incoming Gmail messages, classifies them, finds answers from your knowledge base, and sends a personalized reply.  

## Who’s it for  
- SaaS founders or teams who want to automate customer support.  
- Freelancers and solopreneurs who receive repetitive customer queries.  
- Companies that want to reduce manual email triage and improve response times.  

## How it works / What it does  
1. **Trigger**: A new email arrives in Gmail.  
2. **Classification**: The workflow uses a text classifier to decide whether the email is customer support-related or not.  
   - If not, it’s ignored.  
   - If yes, it proceeds.  
3. **AI Agent**:  
   - Queries a knowledge base (vector database with OpenAI embeddings).  
   - Retrieves the most relevant answer.  
   - Drafts a reply using AI (OpenAI or Google Gemini model).  
4. **Post-processing**:  
   - Labels the email in Gmail for organization.  
   - Sends a reply automatically.  

This ensures that your customers get timely, relevant responses without manual intervention.  

## How to set up  
1. Import this template into your n8n account.  
2. Connect your **Gmail account** in the Gmail Trigger, Label, and Reply nodes.  
3. Connect your **AI model provider** (OpenAI or Google Gemini).  
4. Configure the **knowledge base embeddings** (upload your docs/FAQ into the vector database).  
5. Activate the workflow — and your AI customer support agent is live!  

## Requirements  
- n8n account.  
- Gmail account (with API access enabled).  
- OpenAI or Google Gemini account for LLM and embeddings.  
- Knowledge base data (FAQ, documentation, or past tickets).  
- Google Drive account for auto update your vector database(with API access enabled).

## How to customize the workflow  
- **Knowledge Base**: Replace or expand with your own company docs, FAQs, or past conversations.  
- **Classification Rules**: Train or adjust the classifier to handle more categories (e.g., Sales, Partnership, Technical Support).  
- **Reply Style**: Customize AI prompts for tone — professional, casual, or friendly.  
- **Labels**: Change Gmail labels to match your workflow (e.g., “Support,” “Sales,” “Priority”).  
- **Multi-language**: Add translation steps if your customers speak different languages.  

---

This template saves you hours of manual email triage and ensures your customers always get quick, accurate responses.

## 🔗 Nodes Used

Google Drive, Gmail, Google Drive Trigger, Gmail Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
