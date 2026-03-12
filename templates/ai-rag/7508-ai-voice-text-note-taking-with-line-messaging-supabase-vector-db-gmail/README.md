# 🔍 Ai voice & text note-taking with LINE Messaging, Supabase Vector DB & Gmail

> ⚡ **942 views** · 🔍 [AI RAG & Knowledge Retrieval](../)

## Description

Overview

This workflow lets you capture, store, and retrieve notes from LINE chats — both text and voice messages — and automatically send them to your Gmail inbox. By leveraging Supabase Vector Database, you can not only store and recall your notes, but also repurpose them for idea generation, quiz creation, or hypothesis building.

Key Features

Receive text and audio messages via LINE

Transcribe audio messages automatically and save them in Supabase

Trigger note storage with a specific keyword (default: “Diane”)

Automatically send the latest notes to your Gmail every morning at 7 AM

Search and reuse your notes (e.g., generate ideas, quizzes, or insights)

Requirements

Supabase account (free plan supported)

LINE Messaging API channel setup (obtain your access token)

Gmail authentication (OAuth2)

Notes

Replace placeholders such as LINE_CHANNELACCESS_TOKEN, YOUR_USERID, and YOUR_EMAIL_ADDRESS with your own information.

All credentials (OpenAI, Supabase, LINE, Gmail, etc.) must be configured securely in the Credentials section of n8n.

You may customize the trigger keyword (“Diane”) to any word you like.

## 🔗 Nodes Used

HTTP Request, Webhook, Schedule Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
