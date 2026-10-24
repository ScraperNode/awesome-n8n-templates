# 📖 Create a RAG Telegram bot using Google Drive, PostgreSQL, and local Ollama

> ⚡ **231 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

# Who's it for
This template is for developers, teams, and automation enthusiasts who want a private, PIN-protected Telegram chatbot that answers questions from their own documents — without relying on external AI APIs. Ideal for internal knowledge bases, private document search, or anyone running a local LLM stack with Ollama.

# How it works / What it does
The workflow has two flows running in parallel:

Document Ingestion: Monitors a Google Drive folder for new files. When a file is added, it is downloaded, split into 500-character chunks (with 50-character overlap), embedded using Ollama's nomic-embed-text model, and stored in a PostgreSQL database with pgvector.
Telegram Bot: Accepts messages from users. New users are registered and prompted for a PIN code. Once verified, users can ask any question in plain text. The question is embedded, the top 5 most similar document chunks are retrieved via cosine similarity, and qwen2.5:7b generates a context-aware answer which is sent back to the user. All queries are logged.

# How to set up

Enable the pgvector extension in PostgreSQL and create the 4 required tables — full SQL is included in the workflow's sticky notes
Install Ollama and pull the required models: ollama pull nomic-embed-text and ollama pull qwen2.5:7b
Add your credentials in n8n: Telegram Bot token (from @BotFather), PostgreSQL connection, and Google Drive OAuth2
Open the Google Drive Trigger node and select the folder you want to monitor
In the Register New User node, replace YOUR_PIN_CODE with your chosen access PIN
Activate the workflow and send a message to your Telegram bot

# Requirements

Ollama running locally (accessible at http://host.docker.internal:11434 if using Docker)
PostgreSQL with pgvector extension (Supabase free tier works)
Telegram Bot token from @BotFather
Google Drive account

# How to customize the workflow

Change the LLM model: Replace qwen2.5:7b in the Build Prompt node with any Ollama-supported model
Change the embedding model: Replace nomic-embed-text in Embed Query and Embed Chunk nodes (update vector dimension in the DB schema accordingly)
Adjust chunk size: Modify chunkSize and overlap values in the Split Into Chunks node
Change top-K results: Edit the .slice(0, 5) in Build Prompt to return more or fewer context chunks
Customize the system prompt: Edit the system message in Build Prompt to change the bot's persona or restrict its scope.

## 🔗 Nodes Used

HTTP Request, Postgres, Webhook, Telegram, Google Drive, Google Drive Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
