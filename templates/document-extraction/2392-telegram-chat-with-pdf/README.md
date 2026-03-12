# 🔬 Telegram chat with PDF

> ⚡ **18,563 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## What this template does
This template serves as a Chatbot that enables you to ask questions about the content of a PDF directly in Telegream.

It checks incoming Telegram messages if they contain a document. If they do, it stores the PDF in a Pinecone Vector store. If there's no document, it will search the Vector Store for information and try to answer your question.

## Setup
1. Open the Telegram app and search for the BotFather user (@BotFather) 
2. Start a chat with the BotFather 
3. Type /newbot to create a new bot 
4. Follow the prompts to name your bot and get a unique API token 
5. Save your access token and username
Once you set your bot, you can send the pdf, and then ask questions about the content.

## How to adjust it to your needs
- You can exchange the Groq chat model with any model that you like
- Exchange Pinecone with any other vector store tool you like (e.g. Supabase, Postgres or QDrant)

#Telegram, #Pinecone, #Openai, #GroQ

## 🔗 Nodes Used

Telegram, Telegram Trigger, Stop and Error, Question and Answer Chain, Embeddings OpenAI, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
