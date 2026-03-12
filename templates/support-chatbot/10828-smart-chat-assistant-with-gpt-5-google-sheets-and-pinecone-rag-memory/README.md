# 💬 Smart chat assistant with GPT-5, Google Sheets, and Pinecone RAG memory

> ⚡ **468 views** · 💬 [Support Chatbots](../)

## Description

## 📊 Description
Empower your workflows with an intelligent AI chat assistant that retrieves real-time context from Google Sheets and a Pinecone knowledge base using Retrieval-Augmented Generation (RAG). 🤖📂
 This workflow processes chat messages, retrieves relevant contextual data, generates natural and context-aware responses via OpenAI GPT-5, and automatically logs every interaction in Google Sheets. It also auto-indexes new documents from Google Drive into Pinecone for knowledge expansion and emails weekly chat history summaries for review. 💬📊

## What This Template Does
1️⃣ Chat Trigger – Receives incoming chat messages through a webhook. 💬
 2️⃣ Data Enrichment – Extracts topic, intent, and context from messages. 🧩
 3️⃣ Context Retrieval – Fetches structured data from Google Sheets and semantic data from Pinecone. 🧠
 4️⃣ AI Response Generation – Uses GPT-5 to produce relevant, human-like replies with contextual references. 🤖
 5️⃣ Conversation Logging – Stores chat sessions with timestamps and detected intent in Google Sheets. 📋
 6️⃣ Knowledge Base Expansion – Automatically indexes new files from Google Drive to Pinecone for future RAG responses. 📂
 7️⃣ Weekly Report – Aggregates all chats and sends an email summary with logs attached via Gmail every Monday. 📧

## Key Benefits
✅ AI chat assistant with contextual accuracy using RAG
 ✅ Auto-updating knowledge base via Google Drive → Pinecone
 ✅ End-to-end chat tracking and audit-ready logging
 ✅ Weekly performance reports via Gmail
 ✅ Seamless integration with Google Workspace

## Features
- Retrieval-Augmented Generation (RAG) workflow
- Google Sheets integration for structured memory
- Pinecone vector database for semantic retrieval
- GPT-5 for context-aware conversation generation
- Google Drive watcher for automatic knowledge updates
- Gmail integration for weekly report delivery
- Built-in JSON validation and session memory

## Requirements
- OpenAI API key (GPT-4/GPT-5)
- Google Sheets OAuth2 credentials
- Pinecone API credentials
- Google Drive OAuth2 credentials
- Gmail OAuth2 credentials

## Replace:
- PINECONE_INDEX with your index name
- GOOGLE_SHEET_ID with your log sheet ID
- GOOGLE_DRIVE_FOLDER_ID with monitored folder

## Target Audience
- Support and helpdesk automation teams 💬
- AI chatbot developers enhancing context recall 🤖
- Businesses maintaining searchable conversation history 🏢
- Knowledge managers syncing chat + document intelligence 🧠

## Step-by-Step Setup Instructions
1️⃣ Connect your OpenAI, Pinecone, Google Sheets, Google Drive, and Gmail credentials.
 2️⃣ Update the Pinecone index and Google Sheet ID in the nodes.
 3️⃣ Set your chat webhook URL for real-time message input.
 4️⃣ Add your Google Drive folder ID for automated knowledge ingestion.
 5️⃣ Test the chat workflow with sample messages.
 6️⃣ Enable the schedule trigger to email weekly chat logs automatically. ✅

## 🔗 Nodes Used

Google Sheets, Google Drive, Gmail, Google Drive Trigger, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
