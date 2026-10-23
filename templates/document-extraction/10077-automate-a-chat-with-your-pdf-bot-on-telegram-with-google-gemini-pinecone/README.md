# 🔬 Chat with PDFs on Telegram using Google Gemini and Pinecone

> ⚡ **1,195 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow lets users upload PDFs or ask questions in Telegram, indexes PDF content in Pinecone using Google Gemini embeddings, and answers follow-up questions with a Google Gemini chat model using retrieval-augmented generation formatted for Telegram HTML.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Checks whether the message includes a document; if it does, it downloads the file from Telegram and forces the binary metadata to application/pdf.
3. Splits the PDF text into overlapping chunks, generates embeddings with Google Gemini, and inserts the vectors into a Pinecone index.
4. Sends a Telegram confirmation message indicating how many PDF pages were saved to Pinecone.
5. If the message is a text question, retrieves relevant context from the Pinecone index and uses the Google Gemini chat model to generate an answer constrained to that context.
6. Sends the generated answer back to Telegram using HTML parse mode formatting.

## Setup
1. Create a Telegram bot with BotFather and add Telegram credentials in n8n for the Telegram Trigger and Telegram nodes.
2. Add a Google Gemini (PaLM) API credential for both the embeddings and chat model nodes.
3. Set up a Pinecone account, create (or select) an index named `telegram`, and add your Pinecone credentials in n8n.
4. Activate the workflow and start a chat with your Telegram bot to upload a PDF for indexing and then send text questions to query it.

## Requirements
- n8n Instance & Required Nodes: An active n8n account (Cloud or self-hosted).
- Telegram Account: A Telegram bot created via the BotFather, along with its API token.
- Google Gemini AI Account: A Google Cloud account with the Vertex AI API enabled and an associated API Key.
- Pinecone Account: A Pinecone account with an API key.

## Additional info
Connect with us:
Website: https://www.intuz.com/n8n-workflow-automation-templates/
Email: getstarted@intuz.com
LinkedIn: https://www.linkedin.com/company/intuz

## For Custom Workflow Automation
Get Started: https://n8n.partnerlinks.io/intuz

## 🔗 Nodes Used

Telegram, Telegram Trigger, Stop and Error, Question and Answer Chain, Vector Store Retriever, Recursive Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
