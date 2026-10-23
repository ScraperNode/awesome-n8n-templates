# 💬 Triage and answer college WhatsApp enquiries with OpenAI and Supabase

> ⚡ **41 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow ingests college documents from Google Drive into a Supabase vector store, then runs a WhatsApp-based admissions receptionist that handles text, voice, and image enquiries using OpenAI with retrieval and a reviewer step before replying and logging the conversation in Supabase.

## How it works
1. When a WhatsApp message is received, the workflow detects whether the user sent text, a voice note, or an image.
2. For voice notes, it fetches the WhatsApp media URL, downloads the audio, and uses OpenAI to transcribe it into text.
3. For images, it fetches the WhatsApp media URL, downloads the image, and uses OpenAI Vision to extract all readable content and combine it with any image caption.
4. It normalizes all input types into a single “question” format, then creates a conversation record in Supabase.
5. An OpenAI chat agent uses the Supabase vector-store retriever tool to look up relevant college information (with chat history stored in Postgres) and generates a draft reply.
6. A second OpenAI reviewer validates the draft against the same Supabase knowledge base, then either approves it, retries generation once with correction instructions, or falls back to a safe response.
7. The workflow updates the Supabase conversation record with the final response and sends the reply back to the user via WhatsApp.

## Setup
1. Connect WhatsApp Cloud API credentials for both the WhatsApp Trigger and WhatsApp nodes, then configure the webhook in Meta to point to the trigger URL.
2. Add an OpenAI API credential for chat completions, audio transcription, image analysis, and embeddings.
3. Create and connect a Supabase project with a documents table and a match_documents query (RPC) for vector search, then add Supabase API credentials and set the table name used by the vector store nodes.
4. Connect a Postgres database for chat memory and ensure it is reachable from your n8n instance.
5. Replace placeholders like YOUR_GOOGLE_DRIVE_FILE_ID, YOUR_CLIENT_UUID, and YOUR_USER_UUID, and ensure the Supabase conversations table contains the referenced columns (client_id, user_id, phone, user_message, message_type, ai_response, response_type, language, status).

## Requirements
- WhatsApp Cloud API, OpenAI, Supabase with pgvector, PostgreSQL, and Google Drive credentials are required.

## Customization
- Replace the college branding and placeholder IDs, then customize the AI prompts, supported languages, response tone, retry rules, and WhatsApp messages.

## 🔗 Nodes Used

HTTP Request, Google Drive, Supabase, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
