# 📖 Answer HR policy and benefits questions with BambooHR, OpenAI and Supabase

> ⚡ **41 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow ingests company policy PDFs from BambooHR into a Supabase vector database and provides an employee chat interface that answers policy and benefits questions using OpenAI, with an additional employee/department lookup powered by BambooHR employee data.

## How it works
1. Starts a manual run to fetch files from BambooHR and keep only PDFs in the “Company Files” category.
2. Downloads each selected PDF, splits it into chunks, generates OpenAI embeddings, and inserts the content into a Supabase vector table for retrieval.
3. Exposes a chat trigger where employees submit questions to an HR assistant.
4. Uses OpenAI with conversation memory and retrieves relevant policy content from the Supabase vector store to ground responses.
5. When a question requires a contact person, looks up employee details in BambooHR by exact name or finds the most senior person in a requested department using an OpenAI-assisted department extraction and ranking step.
6. Returns the final answer to the chat, including policy-based guidance and any retrieved employee contact details.

## Setup
1. Add BambooHR credentials and ensure your policies/benefits PDFs are available in the BambooHR file category named “Company Files.”
2. Add Supabase credentials and create a `company_files` table with a `match_files` similarity search function configured for your embedding dimensions.
3. Add an OpenAI API key for both chat models and embeddings used across ingestion, retrieval, classification, and seniority selection.
4. Run the manual ingestion once to populate Supabase before using the chat trigger, then share the chat webhook/URL with your chat client or n8n Chat UI.

## 🔗 Nodes Used

BambooHR, Execute Workflow Trigger, Filter, AI Agent, Basic LLM Chain, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
