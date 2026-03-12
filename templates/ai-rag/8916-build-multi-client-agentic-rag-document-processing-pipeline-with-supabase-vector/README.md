# 🔍 Build multi-client agentic RAG document processing pipeline with Supabase Vector DB

> ⚡ **1,632 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

# Ultimate n8n Agentic RAG Template

**Author:** [Cole Medin](https://www.youtube.com/@ColeMedin)

## What is this?
This template provides a complete implementation of an **Agentic RAG (Retrieval Augmented Generation)** system in n8n that can be extended easily for your specific use case and knowledge base. Unlike standard RAG which only performs simple lookups, this agent can reason about your knowledge base, self-improve retrieval, and dynamically switch between different tools based on the specific question.

## Why Agentic RAG?
Standard RAG has significant limitations:
- Poor analysis of numerical/tabular data
- Missing context due to document chunking
- Inability to connect information across documents
- No dynamic tool selection based on question type

## What makes this template powerful:
- **Intelligent tool selection**: Switches between RAG lookups, SQL queries, or full document retrieval based on the question
- **Complete document context**: Accesses entire documents when needed instead of just chunks
- **Accurate numerical analysis**: Uses SQL for precise calculations on spreadsheet/tabular data
- **Cross-document insights**: Connects information across your entire knowledge base
- **Multi-file processing**: Handles multiple documents in a single workflow loop
- **Efficient storage**: Uses JSONB in Supabase to store tabular data without creating new tables for each CSV

## Getting Started
1. Run the table creation nodes first to set up your database tables in Supabase
2. Upload your documents through Google Drive (or swap out for a different file storage solution)
3. The agent will process them automatically (chunking text, storing tabular data in Supabase)
4. Start asking questions that leverage the agent's multiple reasoning approaches

## Customization
This template provides a solid foundation that you can extend by:
- Tuning the system prompt for your specific use case
- Adding document metadata like summaries
- Implementing more advanced RAG techniques
- Optimizing for larger knowledge bases

---

I do intend on making a local version of this agent very soon!

## 🔗 Nodes Used

Postgres, Google Drive, Google Drive Trigger, Supabase, Embeddings OpenAI, Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
