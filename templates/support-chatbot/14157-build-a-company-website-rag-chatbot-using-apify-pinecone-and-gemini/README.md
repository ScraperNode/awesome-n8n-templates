# 💬 Build a company website RAG chatbot using Apify, Pinecone and Gemini

> ⚡ **320 views** · 💬 [Support Chatbots](../)

## Description

AI chatbots are only as good as the data they learn from. Most large language models (LLM) rely only on their training datasets.

If you want the chatbots to know more about your business, the best is to implement a retrieval-augmented generation (RAG) pipeline to train Gemini with your website data. This is what this workflow will help you to do.

This workflow uses a scheduler to scrape a website on a regular basis using [Apify](https://apify.com/); web pages are then indexed or updated in a [Pinecone](https://www.pinecone.io/) vector database. This allows the chatbot to provide accurate and up-to-date information. The workflow uses [Google's Gemini AI](https://aistudio.google.com/) for both embeddings and response generation.
## How does it work?
This workflow is split into 2 sub-logics highlighted with green sticky notes:
* RAG Training logic
* Chatbot logic
### RAG training logic
1. Use the [Apify Website Content Crawler](https://apify.com/apify/website-content-crawler) to retrieve all content from your website
2. The Pinecone Vector Store node indexes the text chunk in a Pinecone index.
3. The Embeddings Google Gemini node generates embeddings for each text chunk
### Chatbot logic
1. The Chat Trigger node receives user questions through a chat interface. An AI Agent node handles those requests.
1. The AI Agent node uses a Vector Store Tool node, linked to a Pinecone Vector Store node in query mode, to retrieve relevant text chunks from Pinecone based on the user's question.
2. The AI Agent sends the retrieved information and the user's question to the Google Gemini Chat Model (gemini-pro).
## How to set up this template?
All nodes with an orange sticky note require setup.

### Get your tools set up:
1 Google Cloud Project and Vertex AI API:
* Create a Google Cloud project.
* Enable the Vertex AI API for your project.
* Obtain a Google AI API key from Google AI Studio

2 Get an Apify account
* Create an [Apify account](https://apify.com/)

3 Pinecone Account:
* Create a free account on the Pinecone website.
* Obtain your API key from your Pinecone dashboard.
* Create an index named company-website in your Pinecone project.

### Configure credentials in your n8n environment for:
* Google Gemini(PaLM) Api (using your Google AI API key)
* Pinecone API (using your Pinecone API key)

### Setup trigger frequency:
* Edit the Schedule  Trigger to match the frequency at which you wish to update your RAG
* If you want to train your chatbot only once, you can replace it with a click trigger.

### Set up the Apify node
* Authenticate (via OAuth or API)
* Set up your website URL in the JSON input


## FAQ
### What is RAG?
RAG stands for retrieval-augmented generation.
It is a technique that provides an AI model (such as a large language model) with additional data. That allows the LLM to give more up-to-date and topic-specific information.
### What is the difference between RAG and LLM?
RAG is a way to complement an LLM by giving it more up-to-date information.
You can think of the LLM as the CPU processing your question, and RAG as the hard drive providing information.
### Do I have to use my website as training data?
No. Website Content Crawler can scrape any website. So you can, in theory, use this template to build a RAG for someone else. You can even combine data from multiple websites.
### Can I use another model other than Gemini?
In theory, yes. You could replace the Gemini node with another LLM model. If you are looking for inspiration about RAG implementation with the Ollama model, check out [this template](https://n8n.io/workflows/5148-local-chatbot-with-retrieval-augmented-generation-rag/).

## 🔗 Nodes Used

Schedule Trigger, AI Agent, Simple Memory, Recursive Character Text Splitter, Pinecone Vector Store, Default Data Loader

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
