# 📖 Answer internal policy questions from Google Drive with OpenAI and Qdrant

> ⚡ **15 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
This workflow keeps a Qdrant knowledge base synced with Google Drive documents and lets users ask questions via n8n Chat or Slack, using OpenAI for embeddings and responses with source citations.

## How it works
1. Triggers every minute when a file is created or updated in a specific Google Drive folder and downloads the file.
2. Detects whether the file is a PDF, Google Doc, DOCX, or TXT and extracts plain text (DOCX files are copied to a temporary Google Doc, exported as text, then deleted).
3. Deletes any existing vectors in the Qdrant collection that match the same Google Drive file ID to prevent outdated or duplicate content.
4. Splits the extracted text into chunks, attaches metadata (file ID, name, Drive URL, last modified time), creates OpenAI embeddings, and inserts the chunks into the Qdrant collection.
5. Triggers when a message is received from the public n8n Chat endpoint or when the Slack app is mentioned/receives a message, then normalizes both inputs into a single format and ignores bot-generated Slack events.
6. Uses an OpenAI chat model with conversation memory and a Qdrant “company_knowledge_base” retrieval tool to draft an answer based only on retrieved document content and includes formatted source citations.
7. If the question came from Slack, posts the formatted response back to the same Slack channel/thread.

## Setup
1. Add credentials for Google Drive OAuth2, OpenAI, and Qdrant (REST API for delete-by-filter and Qdrant API for vector store insert/retrieval).
2. Create a Qdrant collection named `company_docs` and create a payload index on `metadata.file_id` (type `keyword`) so delete-by-filter works.
3. Set the Google Drive folder ID to watch (and ensure the account has access) and confirm your documents are supported (PDF, Google Docs, TXT, and DOCX via the copy/export flow).
4. If using Slack, connect Slack OAuth credentials, configure a Slack app with `app_mention` and `message.im` (and/or message events) subscriptions, reinstall the app to the workspace, and set the target channel in the Slack trigger.
5. Example Slack Message: @IntuzBot What is the notice-period policy? IntuzBot answers general greetings and identity questions directly, searches the knowledge base for company-related questions, and gives a friendly fallback when the requested information is not available.

## Requirements
- n8n with LangChain nodes enabled.
- Google Drive account with access to the source folder.
- OpenAI API key for chat responses and embeddings.
- Qdrant Cloud cluster and API key.
- Qdrant collection named company_docs, or update the collection name in both workflows.
- A Google Drive folder containing supported documents.
- Slack credentials and a configured Slack app if Slack responses are required.
- A Qdrant payload index on the file ID field for delete-before-insert synchronization.
- Supported document extraction or conversion for PDF, TXT, Google Docs, and DOCX files.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

HTTP Request, Slack, Google Drive, Google Drive Trigger, Filter, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
