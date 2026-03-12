# 📖 Chat with Google Drive documents using OpenAI and Pinecone RAG search

> ⚡ **178 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Try it out

This n8n workflow template lets you chat with your Google Drive documents (.docx, .json, .md, .txt, .pdf) using OpenAI and Pinecone vector database. It retrieves relevant context from your files in real time so you can get accurate, context-aware answers about your proprietary data—without the need to train your own LLM.
#### Not interested in chunking and embedding your own data or figuring out which search method to use?

Try our n8n quickstart for Pinecone Assistant [here](https://docs.pinecone.io/guides/assistant/quickstart/n8n-quickstart) or check out the full workflow to chat with your Google Drive documents [here](https://n8n.io/workflows/9942-rag-powered-document-chat-with-google-drive-openai-and-pinecone-assistant/).

### Prerequisites

* A [Pinecone account](https://app.pinecone.io/) and [API key](https://app.pinecone.io/organizations/-/projects/-/keys)
* A GCP project with [Google Drive API enabled and configured](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-single-service/)
* An [Open AI account](https://auth.openai.com/create-account) and [API key](https://platform.openai.com/settings/organization/api-keys)
* A [Cohere account](https://dashboard.cohere.com/welcome/register) and [API key](https://dashboard.cohere.com/api-keys)

### Setup

1. Create a Pinecone index in the Pinecone Console [here](https://app.pinecone.io/organizations/-/projects/-/indexes) 
	1. Name your index `n8n-dense-index`
	2. Select OpenAI's `text-embedding-3-small`
	3. Set the Dimension to `1536`
	4. Leave everything else as default
	5. If you use a different index name, update the related nodes to reflect this change
2. Setup your Pinecone API key, Google Drive OAuth2 API, Open AI, and Cohere credentials in n8n
3. Download these files and add them to a Drive folder named `n8n-pinecone-demo` in the root of your My Drive
	1. [https://docs.pinecone.io/release-notes/2022.md](https://docs.pinecone.io/release-notes/2022.md)
	2. [https://docs.pinecone.io/release-notes/2023.md](https://docs.pinecone.io/release-notes/2023.md)
	3. [https://docs.pinecone.io/release-notes/2024.md](https://docs.pinecone.io/release-notes/2024.md)
	4. [https://docs.pinecone.io/release-notes/2025.md](https://docs.pinecone.io/release-notes/2025.md)
	5. [https://docs.pinecone.io/release-notes/2026.md](https://docs.pinecone.io/release-notes/2026.md)
4. Activate the workflow or test it with a manual execution to ingest the documents
5. Enter the chat prompts to chat with the Pinecone release notes
	1. `What support does Pinecone have for MCP?`
	2. `When was fetch by metadata released?`

### Ideas for customizing this workflow

- Use your own data and adjust the chunking strategy
- Update the AI Agent System Message to reflect how the Pinecone Vector Store Tool will be used. Be sure to include info on what data can be retrieved using that tool.
- Update the Pinecone Vector Store Tool Description to reflect what data you are storing in the Pinecone index
### Need help?

You can find help by asking in the [Pinecone Discord community](https://discord.gg/tJ8V62S3sH) or [filing an issue](https://github.com/pinecone-io/n8n-templates/issues/new/choose) on this repo.

## 🔗 Nodes Used

Google Drive, Google Drive Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
