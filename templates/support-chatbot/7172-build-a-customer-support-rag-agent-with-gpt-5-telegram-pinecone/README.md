# 💬 Build a customer support RAG agent with GPT-5, Telegram & Pinecone

> ⚡ **2,091 views** · 💬 [Support Chatbots](../)

## Description

🧠 RAG-Based Customer Support Agent (GPT-5 + Telegram)
Description:

This workflow builds a powerful Retrieval-Augmented Generation (RAG) Customer Support Agent that interacts with users directly through Telegram using the GPT-5 model. It combines real-time conversational capabilities with context-aware responses by leveraging vector search via Pinecone, making it ideal for automated, intelligent support systems.

Watch Video Tutorial Build on Workflows Like These:
https://www.youtube.com/@Automatewithmarc

💬 Key Features:

Telegram Integration: Listens to customer queries via the Telegram Trigger node and sends back intelligent responses in the same chat.
GPT-5 Agent (LangChain): A powerful AI agent node orchestrates the conversation using OpenAI's GPT-5 model.
Contextual Memory: A Memory Buffer stores the last 15 interactions per user to provide more personalized and coherent multi-turn conversations.

RAG with Pinecone: Integrates with Pinecone to fetch relevant answers from your “Customer FAQ” vector namespace, enabling grounded and accurate responses.
Embeddings Generation: Uses OpenAI’s Embeddings node to process and vectorize documents for retrieval.
End-to-End AI Pipeline: Connects all components from input to output, providing seamless and intelligent customer support.

🔧 Tech Stack:

GPT-5 via OpenAI API
Pinecone vector store (namespace: Customer FAQ)
Telegram Bot API
LangChain agent, memory, and embedding tools
n8n self-hosted or cloud instance

📌 Ideal Use Cases:

Automated customer support for e-commerce, SaaS, or community support
FAQ bots with up-to-date product or policy documents
Multilingual support agents (customizable via GPT-5)

🛠️ Setup Instructions:

Set up your Telegram bot and insert credentials.
Add your OpenAI and Pinecone API keys.
Upload or index your support documents into the Customer FAQ namespace on Pinecone.
Deploy and test your Telegram bot.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
