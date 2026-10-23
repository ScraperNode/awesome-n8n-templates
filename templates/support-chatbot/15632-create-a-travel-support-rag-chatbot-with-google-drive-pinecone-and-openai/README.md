# 💬 Create a travel support RAG chatbot with Google Drive, Pinecone and OpenAI

> ⚡ **90 views** · 💬 [Support Chatbots](../)

## Description

📊 Description

This workflow helps travel, booking, and customer support businesses create an AI chatbot that answers customer questions from their own knowledge base. Instead of manually replying to repeated questions about bookings, cancellations, refunds, pricing, policies, or service details, the business can upload a knowledge document and let the chatbot respond through a webhook.

Built for travel agencies, booking platforms, hotels, shortlets, service businesses, and automation builders who want to create a simple RAG chatbot using Google Drive, OpenAI, Pinecone, and n8n.

What This Workflow Does

📄 Downloads a knowledge document from Google Drive
✂️ Splits the document into smaller chunks for better retrieval
🧠 Creates embeddings using OpenAI
📦 Stores the knowledge base inside a Pinecone vector index
💬 Receives customer questions through a webhook
🔎 Searches Pinecone for the most relevant information
🤖 Uses OpenAI to generate a short, helpful answer
📤 Returns the chatbot response back to the connected frontend, chatbot, or app

Key Benefits

✅ Turns a simple document into a searchable AI knowledge base
✅ Helps answer repeated customer questions faster
✅ Uses RAG so responses are based on the uploaded business information
✅ Works with any frontend, chatbot, or app that can send a POST request
✅ Easy to customize for different travel, booking, or support businesses
✅ Separates knowledge indexing from live chatbot responses
✅ Includes a simple response formatting step before returning the answer

How It Works

SW1 — Knowledge Base Indexing

The workflow starts with a manual trigger. It downloads a knowledge document from Google Drive, loads the document content, splits it into smaller text chunks, creates embeddings with OpenAI, and stores those chunks inside a Pinecone vector index.

This section should be run first because the chatbot can only answer from information that has already been indexed into Pinecone.

SW2 — Chatbot Question Answering

The webhook receives a customer question from a frontend, chatbot, or app. The workflow sends the question into a retrieval QA chain, searches the Pinecone vector store for relevant context, and uses OpenAI to generate a short answer based on the retrieved information.

The response is then cleaned by a Code node and returned through Respond to Webhook.

Features

Google Drive knowledge document download
OpenAI embeddings
Pinecone vector storage
Recursive text splitting
Webhook-based chatbot input
Retrieval QA chain for context-aware answers
Short customer-support style responses
Response cleanup before returning to the frontend
Reusable structure for travel, booking, hotel, shortlet, and service businesses

Requirements

Google Drive account
OpenAI API key
Pinecone account and index
n8n account or self-hosted n8n instance
A prepared knowledge document such as FAQs, policies, service details, or booking information
A frontend, chatbot, or app that can send questions to the webhook

Setup Steps

1. Connect your Google Drive, OpenAI, and Pinecone accounts.
2. Add your own knowledge document to Google Drive.
3. Create or select a Pinecone index for the vector database.
4. Replace the Google Drive file placeholder with your own file.
5. Replace the Pinecone index placeholder with your own index name.
6. Run the indexing section once to store your document in Pinecone.
7. Connect your frontend, chatbot, or app to the webhook URL.
8. Send a test question using the chatInput field.
9. Customize the system prompt for your business or client use case.

Target Audience

✈️ Travel agencies answering booking and policy questions
🏨 Hotels and shortlet businesses handling repeated guest enquiries
🧳 Booking platforms that need a lightweight support chatbot
🤖 Automation builders creating RAG chatbot demos for clients
📞 Customer support teams that want answers based on internal documents

## 🔗 Nodes Used

Webhook, Google Drive, Question and Answer Chain, Embeddings OpenAI, OpenAI Chat Model, Vector Store Retriever

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
