# 🔬 Document analysis & chatbot creation with Llama Parser, Gemini LLM & Pinecone DB

> ⚡ **4,318 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### 📄Description
This automation workflow enables users to upload files via an N8N form, automatically analyzes the content using Google Gemini agents, and delivers the analyzed results via email along with a chatbot link. The system leverages Llama Cloud API, Google Gemini LLM, Pinecone vector database, and Gmail to provide a seamless, multilingual content analysis experience.

### ✅ Prerequisites
Before setting up this workflow, ensure the following are in place:

An active N8N instance.

Access to Llama Cloud API.

Google Gemini LLM API keys (for Translator & Analyzer agents).

A Pinecone account with an active index.

A Gmail account with API access configured.

Basic knowledge of N8N workflow setup.

### ⚙️ Setup Instructions
Deploy the N8N Form

Create a public-facing form using N8N.

Configure it to accept:

File uploads.

User email input.

File Preprocessing

Store the uploaded files temporarily.

Organize and preprocess them as needed.

Content Extraction using Llama Cloud API

Feed the files into the Llama Cloud API.

Extract and parse the content for further processing.

### Translation (if required)

Use a Translator Agent (Google Gemini).

Check if the content is in English. If not, translate it.

### Content Analysis

Forward the (translated) content to the Analyzer Agent (Google Gemini).

Perform deep analysis to extract insights.

Vector Storage in Pinecone

### Store both:

The parsed and translated content.

The analyzed content.

Use Pinecone to store the content as embeddings for chatbot use.

### User Notification via Gmail

Send the analyzed content and chatbot link to the user’s provided email using Gmail API.

### 🧩 Customization Guidance
To add more languages: Update the translation logic to include additional language support.

To modify analysis depth: Adjust the prompts sent to the Gemini Analyzer Agent.

To change the chatbot behavior: Retrain or reconfigure the chatbot to utilize the new Pinecone index contextually.

### 🔁 Workflow Summary
User uploads files and email via N8N form.

Files are parsed using Llama Cloud API.

Content is translated (if needed) using Gemini Translator Agent.

Translated content is analyzed by the Gemini Analyzer Agent.

Parsed and analyzed data is stored in Pinecone.

User receives email with analyzed results and a chatbot link.

## 🔗 Nodes Used

HTTP Request, Gmail, Markdown, AI Agent, Question and Answer Chain, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
