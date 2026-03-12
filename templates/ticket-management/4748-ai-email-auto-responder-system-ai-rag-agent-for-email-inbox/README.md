# 🎫 Ai email auto-responder system- AI RAG agent for email inbox

> ⚡ **922 views** · 🎫 [Ticket Management & Triage](../)

## Description

# AI Email Auto-Responder – Smart Client Reply Automation with RAG

This workflow is built for individuals, teams, and businesses that receive regular inquiries via email and want to automate responses in a way that’s intelligent, brand-aligned, and always up to date. Its core purpose is to generate high-quality, professional email replies using internal company data, brand voice, and semantic search — fully automated through Gmail, Pinecone, and OpenAI.

The system is divided into three steps. First, it allows you to index your internal knowledge base (Docs, Sheets, PDFs) with embeddings. Second, it injects a consistent brand brief into every interaction to ensure tone and positioning. Finally, the main flow listens for incoming emails, understands the user query, retrieves all needed data, and writes a full HTML reply — sending it directly to the original thread via Gmail.

This solution is ideal for support teams, solopreneurs, B2B service providers, or anyone looking to scale high-quality client communication without scaling manual work. It can be extended to handle multilingual queries, intent routing, or CRM logging.

## How it works

When a new email arrives in Gmail, the workflow checks whether it's a valid client inquiry. If so, it:
- Extracts the subject and message content
- Sends the message through OpenAI to understand the question
- Queries a Pinecone vector database (populated via a separate embedding workflow) to find relevant internal knowledge
- Loads a brand brief from a Google Doc or Notion block
- Combines retrieved data and brand context to generate a clear, structured HTML reply using OpenAI
- Sends the reply via Gmail and logs the message

This process ensures every reply is relevant, accurate, and consistent with your brand — and takes under 10 seconds.

## Set up steps

Getting started takes about 30–60 minutes.

- Create three workflows: one for embedding documents (Step 1), one sub-workflow for the brand brief (Step 2), and one main responder flow (Step 3)
- Connect the following APIs: Gmail (OAuth2), OpenAI, Pinecone, Google Drive, and optionally Notion
- Replace all placeholders: folder ID in Google Drive, Pinecone index and namespace, your brand brief URL or doc ID, and Gmail credentials
- Test your embedding workflow by uploading a document and verifying its presence in Pinecone
- Trigger the responder by sending an email and reviewing the AI’s reply

Detailed setup instructions are stored in sticky notes within each workflow to guide you through configuration.

## 🔗 Nodes Used

Google Drive, Gmail, Notion, Google Docs, Google Drive Trigger, Gmail Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
