# 📖 Talk to your SQLite database with a LangChain AI Agent 🧠💬  

> ⚡ **26,939 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This n8n workflow demonstrates how to create an agent using LangChain and SQLite. The agent can understand natural language queries and interact with a SQLite database to provide accurate answers. 💪  
  
## 🚀 Setup  
  
Run the top part of the workflow once.  
It downloads the example SQLite database, extracts from a ZIP file and saves locally (`chinook.db`).  
  
## 🗣️ Chatting with Your Data  
  
1. Send a message in a chat window.  
2. Locally saved SQLite database loads automatically.  
3. User's chat input is combined with the binary data.  
4. The LangChain Agend node gets both data and begins to work.  
  
The AI Agent will process the user's message, perform necessary SQL queries, and generate a response based on the database information. 🗄️  
  
## 🌟 Example Queries  
  
Try these sample queries to see the AI Agent in action:  
  
1. "Please describe the database" - Get a high-level overview of the database structure, only one or two queries are needed.  
2. "What are the revenues by genre?" - Retrieve revenue information grouped by genre, LangChain agent iterates several time before producing the answer.  
  
The AI Agent will store the final answer in its memory, allowing for context-aware conversations. 💬 
 
Read the full article: 👉 https://blog.n8n.io/ai-agents/

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Simple Memory, Read/Write Files from Disk, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
