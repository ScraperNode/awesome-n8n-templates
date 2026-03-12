# 🔬 Build a RAG chat system using Aryn DocParse, AWS S3, Pinecone and GPT-4o

> ⚡ **78 views** · 🔬 [Document Extraction & Analysis](../)

## Description

### How it works
1. Provide your S3 bucket containing documents such as PDFs and MS Word in the "Get Files from S3" node.  You will need to provide AWS credentials that will allow the node to access the bucket and download the files in the specified location.
2. Choose document processing options in the Aryn node.  The main options are for text and table extraction.  You can also provide a JSON schema for property extraction.  You can refer to https://docs.aryn.ai/docparse/processing_options for details on these options.  You will also need an Aryn API key which you can obtain by going to https://aryn.ai/signup.  Please note that use of vision models for OCR and table extraction is restricted to paid tiers.
3. The resulting content of parsing and extraction is then chunked and ingested into Pinecone.
4. Once at least one document has been ingested into a Pinecone index, you can start asking questions about anything that may be found in ingested documents in the chat box.

### Setup steps
1. For data retrieval, you will need a "folder" in a bucket on AWS S3 as well as valid AWS credentials with permission to fetch those files.
2. For document parsing, you will need to obtain an Aryn API key.  You can sign up for free at https://aryn.ai/signup.
3. For the Pinecone vector database, head over to https://pinecone.io and create an account and create a sample index for free.  You will also need to generate an API key.
4. For the AI agent and RAG, you will also need an OpenAI API key.  Please go to https://openai.com and get a free API key.

## 🔗 Nodes Used

AWS S3, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Recursive Character Text Splitter, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
