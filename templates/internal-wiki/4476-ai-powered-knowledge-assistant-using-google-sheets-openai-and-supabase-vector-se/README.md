# 📖 AI-powered knowledge assistant using Google Sheets, OpenAI, and Supabase Vector Search

> ⚡ **559 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

Description
An intelligent conversational AI system that provides contextual responses by combining chat history, vector database knowledge retrieval, and web search capabilities.
How it Works (High-level steps)

Message Detection: Google Sheets trigger monitors for new user messages and filters out already-processed entries
Context Preparation: Extracts user message, retrieves chat history, and formats conversation context with system prompt
Knowledge Retrieval: AI agent searches vector database for relevant context using Supabase + OpenAI embeddings
Response Generation: LangChain agent processes the request using:

OpenAI GPT-4 language model
Vector store tool for knowledge base queries
SerpAPI tool for web search when needed
Buffer memory for conversation continuity


Response Storage: Updates Google Sheets with AI response and assigns unique timestamp ID

Setup Steps

Configure Google Sheets with columns: user_message, ai_respond, id
Set up Supabase vector store with OpenAI embeddings
Connect OpenAI API credentials (GPT-4 + embeddings)
Configure SerpAPI for web search functionality
Set up Google Sheets trigger and update permissions

## 🔗 Nodes Used

Function, Google Sheets, Google Sheets Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
