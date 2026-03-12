# 📖 Automate Document Q&A with Multi-Agent RAG Orchestration using Contextual AI & Gemini

> ⚡ **1,265 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## PROBLEM  
Managing multiple RAG AI agents can be complex when each has its own purpose and vector database.  
- Manually tracking agents and deciding which one to query wastes time.  
- LLMs often struggle to determine which agent best fits a user’s request.  

### This workflow enables automated multi-agent orchestration, dynamically selecting and querying the correct agent using Contextual AI Query Tool and Gemini 2.5 Flash.  

## How it works  
- A **form trigger** allows users to create new agents by specifying a name, description, datastore, and uploading files.  
- A new agent is created with the provided information and files are ingested in the datastore
- We get the status of file ingestion every 30 seconds until the ingestion process is complete
- When users send queries, the **Agent Orchestrator** identifies the most relevant agent to generate grounded, context-aware responses.  

**Note:** The document ingestion process is asynchronous and may take a few minutes before your agent has the document fully available in the datastore for querying.

## How to set up  
- Create a free [Contextual AI account](https://app.contextual.ai/) and obtain your `CONTEXTUALAI_API_KEY`.  
- Add `CONTEXTUALAI_API_KEY` as an **environment variable** in n8n. 
- For the baseline model, we have used Gemini 2.5 Flash Model, you can find your Gemini API key[ here](https://ai.google.dev/gemini-api/docs/api-key) 


## How to customize the workflow  
- Replace the **Form Trigger** with a **Webhook Trigger** or manual input to integrate with custom systems.  
- Swap **Gemini 2.5 Flash** with another LLM provider
- Update the wait time as per user requirement
- Modify the system prompt to fine-tune how the orchestration logic selects and queries agents.  
- You can check out this [Contextual AI API reference](https://docs.contextual.ai/api-reference/agents/create-agent) for more details on agent creation and usage.  
- If you have feedback or need support, please email **feedback@contextual.ai**.

## 🔗 Nodes Used

AI Agent, Simple Memory, n8n Form Trigger, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
