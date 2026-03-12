# 📖 Chat with PDF / MD / text files using GraphRAG (no vector store needed)

> ⚡ **5,249 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Set up a chat with your documents without the complex vector store setup.

This templates helps you 
- **ingest** your PDF / text / MD documents into a knowledge graph
- use the graph as the **knowledge base** for your AI chatbots (and other workflows)
- **visualize the main topics** and **gaps** in your documents (good for observability and research)


The knowledge base is provided using the [InfraNodus GraphRAG](https://infranodus.com/use-case/ai-knowledge-graphs) with the knowledge graphs  offering high-quality responses without the need to set up complex RAG vector store workflows.

The advantages of using GraphRAG instead of the standard vector stores for knowledge are:

- **Easy and quick to set up and update** — no complex data import workflows needed
- A knowledge graph offers a **holistic and interactive view of your knowledge base** (accessible via our API or a web interface — also shareable)
- **Better retrieval of relations** between the document chunks = higher quality responses

![InfraNodus knowledge graph](https://support.noduslabs.com/hc/article_attachments/20266752795292)


## How it works
This template uses the [InfraNodus knowledge graph](https://infranodus.com) as a knowledge base for your n8n AI agent node.

The knowledge graph contains the documents you can upload using this template from your Google Drive.

When the user asks a question via the chat interface, the agent forwards this question to the InfraNodus knowledge graph, retrieves a response, a summary, and a list of matching statements (based advanced Graph RAG), then delivers the final response back the user.

Here's a description **step by step**:

**Step 1: Upload your documents**
- Put the PDF / text / MD files you want to chat with into a folder on your Google drive
- Authorize access to that folder using the Google drive node in the template. 
- Add the [InfraNodus API key](https://infranodus.com/api-access) to the InfraNodus Save to Graph HTTP node 
- Optional: change the name of the graph you want to save the data to in the InfraNodus HTTP node (in the `name` field of the HTTP post request).
- Run the workflow to ingest all the files and save them into the graph
- Optional: check the link provided in the Step 1 workflow description to see the visualization of your knowledge base. It will look something like that:

![InfraNodus graph knowledge base](https://support.noduslabs.com/hc/article_attachments/20266752795292)

***Note:** you can replace the PDF to Text convertor node with a better quality **PDF convertor** from [ConvertAPI](https://convertapi.com?ref=4l54n) which respects the original file layout and doesn't split text into small chunks*


**Step 2: Chat with your documents**

- Deactive the trigger in the Step 1
- Activate the chat trigger in the Step 2
- Add your InfraNodus API credentials to Knowledge Base GraphRAG InfraNodus node
- Optional: change the graph `name` in the Knowledge Base node to match the name you provided in the step 1 above
- Run the chat and ask the question
- Watch the magic 

## How to use

You need an [InfraNodus GraphRAG API account and key](https://infranodus.com/use-case/ai-knowledge-graphs) to use this workflow. 

- Create an InfraNodus account
- Get the API key at [https://infranodus.com/api-access](https://infranodus.com/api-access) and create a Bearer authorization key for the InfraNodus HTTP nodes.

## Requirements

- An [InfraNodus](https://infranodus.com/use-case/ai-knowledge-graphs) account and API key
- An OpenAI (or any other LLM) API key
- A Google Drive OAuth access (follow the n8n instructions)
- Optional: [ConvertAPI](https://convertapi.com?ref=4l54n) API key for better quality PDF conversion


## Customizing this workflow

You can customize this workflow by adding several experts to your AI agent. 

Check out the **complete guide** at [https://support.noduslabs.com/hc/en-us/articles/20174217658396-Using-InfraNodus-Knowledge-Graphs-as-Experts-for-AI-Chatbot-Agents-in-n8n](https://support.noduslabs.com/hc/en-us/articles/20174217658396-Using-InfraNodus-Knowledge-Graphs-as-Experts-for-AI-Chatbot-Agents-in-n8n)

Also check out the **video tutorial** with a demo:

[![Video tutorial](https://img.youtube.com/vi/kS0QTUvcH6E/sddefault.jpg)](https://www.youtube.com/watch?v=kS0QTUvcH6E)

For **support and feedback**, please, contact us at [https://support.noduslabs.com](https://support.noduslabs.com)

To learn more about **InfraNodus**: [https://infranodus.com](https://infranodus.com)

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Simple Memory, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
