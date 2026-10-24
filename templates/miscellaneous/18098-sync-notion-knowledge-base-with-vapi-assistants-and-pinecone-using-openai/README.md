# 🔧 Sync Notion knowledge base with Vapi assistants and Pinecone using OpenAI

> ⚡ **14 views** · 🔧 [Miscellaneous](../)

## Description

## Quick overview
This workflow runs daily to pull knowledge base content from Notion, generate OpenAI embeddings, upsert the documents into Pinecone, and upload two language-specific text knowledge files to Vapi so your voice assistant’s query tool and assistant configuration stay in sync.

## How it works
1. Runs every day at 2:00 AM on a schedule.
2. Clears the existing Pinecone vectors for the configured namespace and waits briefly for deletion to complete.
3. Fetches pages from multiple Notion databases (services, FAQ, scripts, dialogue tree, objections, and disclaimers) and merges them into tagged, language-aware text records.
4. Splits the merged text into chunks, generates OpenAI embeddings, and upserts the resulting vectors into a Pinecone index.
5. Builds two consolidated knowledge base text files (one per language) from the Notion content.
6. Deletes the previous Vapi knowledge file (if configured), uploads the new file, and creates a Vapi query tool that references it.
7. Retrieves each Vapi assistant, replaces its tool list with the newly created query tool, and logs the sync result.

## Setup
1. Add Notion credentials, create a Notion integration, share the relevant pages/databases with it, and replace the Notion database ID placeholders in all Notion nodes.
2. Add a Pinecone API key (HTTP header auth and Pinecone vector store credentials), create a Pinecone index, set the correct index name, and replace the Pinecone host URL placeholder used for vector deletion.
3. Add an OpenAI API key for the embeddings step and ensure your Pinecone index dimensions match the selected embedding model.
4. Add a Vapi API key (HTTP header auth), replace the assistant ID placeholders for both languages, and optionally fill in the old Vapi file IDs after the first successful run to enable cleanup.

## Requirements
- An n8n instance, Notion, a Vapi account, a Pinecone account, and an OpenAI API key

## Customization
- Built for two languages out of the box — easy to extend to more by duplicating the language branch. 
- Remove the Pinecone branch entirely if you only need the Vapi sync half.

## 🔗 Nodes Used

HTTP Request, Notion, Schedule Trigger, Embeddings OpenAI, Recursive Character Text Splitter, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
