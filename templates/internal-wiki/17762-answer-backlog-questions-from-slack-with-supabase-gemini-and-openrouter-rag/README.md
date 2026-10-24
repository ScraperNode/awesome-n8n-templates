# 📖 Answer backlog questions from Slack with Supabase, Gemini, and OpenRouter RAG

> ⚡ **152 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow indexes a product backlog PDF into a Supabase vector store and lets users query it from Slack using a slash command, with Google Gemini embeddings for retrieval and an OpenRouter chat model to generate answers.

## How it works
1. Receives a form submission with a product backlog PDF upload.
2. Extracts text from the PDF and generates embeddings with Google Gemini before inserting the content into a Supabase vector store table.
3. Loads default documents and embeddings to initialize the same Supabase knowledge base.
4. Receives a Slack slash command request and immediately returns an in-channel “search in progress” acknowledgment.
5. Sends the Slack question to an OpenRouter chat model–powered RAG agent, which uses Google Gemini embeddings to retrieve relevant backlog passages from Supabase.
6. Posts the final, Slack-formatted answer back to the originating channel using Slack’s response_url.

## Setup
1. Configure the n8n form trigger (or share it) so users can upload a PDF file for indexing.
2. Add a Supabase API credential and ensure a vector store table named `backlog_documents` exists (or update the table name in both Supabase nodes).
3. Add a Google Gemini (PaLM) API credential for the embeddings nodes.
4. Add an OpenRouter API credential and select the target model in the chat model node.
5. Create a Slack slash command that sends POST requests to the workflow webhook path `/backlog-query` and use the generated webhook URL in Slack.

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, n8n Form Trigger, Supabase Vector Store, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
