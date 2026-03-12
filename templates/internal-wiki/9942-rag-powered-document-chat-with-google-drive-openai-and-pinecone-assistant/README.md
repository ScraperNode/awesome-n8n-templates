# 📖 RAG-powered document chat with Google Drive, OpenAI, and Pinecone Assistant

> ⚡ **1,980 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Try it out

This n8n workflow template lets you chat with your Google Drive documents (.docx, .json, .md, .txt, .pdf) using OpenAI and Pinecone Assistant. It retrieves relevant context from your files in real time so you can get accurate, context-aware answers about your proprietary data—without the need to train your own LLM.

### What is Pinecone Assistant?

[Pinecone Assistant](https://docs.pinecone.io/guides/assistant/overview) allows you to build production-grade chat and agent-based applications quickly. It abstracts the complexities of implementing retrieval-augmented (RAG) systems by managing the chunking, embedding, storage, query planning, vector search, model orchestration, reranking for you.

### Prerequisites

* A [Pinecone account](https://app.pinecone.io/) and [API key](https://app.pinecone.io/organizations/-/projects/-/keys)
* A GCP project with [Google Drive API enabled and configured](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
  * Note: When setting up the OAuth consent screen, skip steps 8-10 if running on localhost
* An [Open AI account](https://auth.openai.com/create-account) and [API key](https://platform.openai.com/settings/organization/api-keys)

### Setup

1. Create a Pinecone Assistant in the Pinecone Console [here](https://app.pinecone.io/organizations/-/projects/-/assistant) 
	1. Name your Assistant `n8n-assistant`
	2. No need to configure a Chat model or Assistant instructions
2. Setup your Google Drive OAuth2 API credential in n8n
	1. In the File added node -&gt; Credential to connect with, select Create new credential
	2. Set the Client ID and Client Secret from the values generated in the prerequisites
	3. Set the OAuth Redirect URL from the n8n credential in the Google Cloud Console ([instructions](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/#create-your-google-oauth-client-credentials))
	4. Name this credential `Google Drive account` so that other nodes reference it
3. Setup Pinecone API key credential in n8n
	1. In the Upload file to Assistant node -&gt; PineconeApi section, select Create new credential
	2. Paste in your Pinecone API key in the API Key field
4. Select your Assistant Name in each of the Pinecone Assistant nodes
5. Setup the Open AI credential in n8n
	1. In the OpenAI Chat Model node -&gt; Credential to connect with, select Create new credential
	2. Set the API Key field to your OpenAI API key
6. Add your files to a Drive folder named `n8n-pinecone-demo` in the root of your My Drive
	1. If you use a different folder name, you'll need to update the Google Drive triggers to reflect that change
7. Activate the workflow or test it with a manual execution to ingest the documents
8. Chat with your docs!

### Ideas for customizing this workflow

- Customize the System Message on the AI Agent node to your use case to indicate what kind of knowledge is stored in Pinecone Assistant
- Change the Top K and/or Snippet Size values to help manage token consumption by adding the Top K and/or Snippet Size parameters to Get context from Assistant node
- Filter the context snippets even further by adding metadata filters to the Get context from Assistant node

### Need help?

You can find help by asking in the [Pinecone Discord community](https://discord.gg/tJ8V62S3sH) or [filing an issue](https://github.com/pinecone-io/n8n-templates/issues/new/choose) on this repo.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
