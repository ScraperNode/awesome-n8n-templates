# 📖 Answer Slack knowledge questions with Notion, Google Drive, Pinecone, and OpenAI

> ⚡ **4 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow syncs Notion pages and Google Drive files into a Pinecone vector index nightly, then answers Slack @mentions using an OpenAI chat model with retrieval from that Pinecone knowledge base and replies with a source URL.

## How it works
1. Runs every night at 2am and searches for content across Notion and Google Drive.
2. Combines both result sets into a single normalized list of documents with IDs, titles, URLs, and source labels.
3. Iterates through each document and extracts plain text either from Notion page blocks or by downloading and text-extracting the Google Drive file.
4. Generates OpenAI embeddings and inserts each document plus metadata into a Pinecone index.
5. Triggers when the bot is @mentioned in a specified Slack channel, cleans the message to a plain question, and keeps the thread context.
6. Uses an OpenAI chat model with a Pinecone retrieval tool to answer the question and posts the response back to the originating Slack thread, while sending any workflow errors to an ops Slack channel.

## Setup
1. Add credentials for Notion, Google Drive, Slack, OpenAI, and Pinecone.
2. Create or select a Pinecone index and replace the placeholder index name in both the ingestion and retrieval Pinecone nodes.
3. Set the Slack channel ID for Q&A mentions and the ops-alerts channel ID for error notifications, then install/configure the Slack app so it can receive app_mention events.

## 🔗 Nodes Used

Slack, Google Drive, Notion, Schedule Trigger, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
