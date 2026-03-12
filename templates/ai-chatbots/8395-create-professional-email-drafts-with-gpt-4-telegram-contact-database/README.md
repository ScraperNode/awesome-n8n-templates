# 🤖 Create professional email drafts with GPT-4, Telegram & contact database

> ⚡ **188 views** · 🤖 [AI Chatbots & Agents](../)

## Description

**Transform** your email workflow with this intelligent automation that drafts professional emails through Telegram commands using AI and contact retrieval.
Key Features

📱 Telegram Integration: Send email requests directly from Telegram
🤖 AI-Powered Email Generation: Uses OpenAI GPT-4 to create formal, professional emails
📧 Smart Contact Retrieval: Leverages Pinecone vector database with RAG to automatically find recipient email addresses
✉️ Gmail Draft Creation: Automatically creates email drafts in your Gmail account
📋 Google Docs Integration: Sync contact data from Google Docs to vector database
🎯 Structured Email Formatting: Ensures consistent professional email format with proper recipients and formal tone

## How It Works

Send Message: Send a message via Telegram with your email request
AI Processing: AI agent processes your request and queries the contact database to find recipient emails
Email Generation: OpenAI generates a professionally formatted email based on your input
Draft Creation: Gmail draft is automatically created with the formatted content
Confirmation: Receive confirmation via Telegram with a completion sticker

### Perfect For

Business professionals managing multiple contacts
Academic professionals (professors, researchers) who frequently send formal emails
Anyone wanting to streamline their email creation process with AI assistance

#### Required Credentials

Telegram Bot API
OpenAI API
google OAuth2 for(gmail&docs)
Pinecone Vector Database


##### Setup Instructions

**Load Contact Data:** Add your contact information to the Google Docs document
**Configure Pinecone:** Set up your Pinecone index with namespace "contacts"
**Connect Services:** Add all required API credentials to their respective nodes
**Customize AI:** Modify the AI system message and sender name in the AI Agent node
**Test Workflow:** Run the manual trigger to populate your vector database first **


 #### Ex. of the google docs data

![image.png](fileId:2327)

## 🔗 Nodes Used

Telegram, Telegram Trigger, Gmail, Google Docs, AI Agent, Embeddings OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
