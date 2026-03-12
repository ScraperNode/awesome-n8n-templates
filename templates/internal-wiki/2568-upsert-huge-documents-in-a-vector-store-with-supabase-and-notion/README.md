# 📖 Upsert huge documents in a vector store with Supabase and Notion

> ⚡ **14,145 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Purpose

This workflow adds the capability to build a RAG on living data. In this case Notion is used as a Knowledge Base. Whenever a page is updated, the embeddings get upserted in a Supabase Vector Store.

It can also be fairly easily adapted to PGVector, Pinecone, or Qdrant by using a custom HTTP request for the latter two.

## Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/ELAxebGmspY/0.jpg)](https://youtu.be/ELAxebGmspY)

## How it works

- A trigger checks every minute for changes in the Notion Database. The manual polling approach improves accuracy and prevents changes from being lost between cached polling intervals.
- Afterwards every updated page is processed sequentially
- The Vector Database is searched using the Notion Page ID stored in the metadata of each embedding. If old entries exist, they are deleted.
- All blocks of the Notion Database Page are retrieved and combined into a single string
- The content is embedded and split into chunks if necessary. Metadata, including the Notion Page ID, is added during storage for future reference.
- A simple Question and Answer Chain enables users to ask questions about the embedded content through the integrated chat function

## Prerequisites

- To setup a new Vector Store in Supabase, follow [this guide](https://supabase.com/docs/guides/ai/vector-columns)
- Prepare a simple Database in Notion with each Database Page containing at least a title and some content in the blocks section. You can of course also connect this to an existing Database of your choice.

## Setup

- Select your credentials in the nodes which require those
- If you are on an n8n cloud plan, switch to the native Notion Trigger by activating it and deactivating the Schedule Trigger along with its subsequent Notion Node
- Choose your Notion Database in the first Node related to Notion
- Adjust the chunk size and overlap in the Token Splitter to your preference
- Activate the workflow

## How to use

Populate your Notion Database with useful information and use the chat mode of this workflow to ask questions about it. Updates to a Notion Page should quickly reflect in future conversations.

## 🔗 Nodes Used

Notion, Notion Trigger, Supabase, Schedule Trigger, Question and Answer Chain, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
