# 💬 Answer product queries via WhatsApp using OpenAI GPT-4o and PDF knowledge base

> ⚡ **829 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

# WhatsApp AI Sales Agent using PDF Vector Store

This workflow turns your WhatsApp number into an intelligent AI-powered Sales Agent that answers product queries using real data extracted from a PDF brochure. It loads a product brochure via HTTP Request, converts it into embeddings using OpenAI, stores them in an in-memory vector store and allows the AI Agent to provide factual answers to users via WhatsApp. Non-text messages are filtered and only text queries are processed. This makes the workflow ideal for building a lightweight chatbot that understands your product documentation deeply.

### Quick Start: 5-Step Fast Implementation

1. **Insert your WhatsApp credentials** in the _WhatsApp Trigger_ and _WhatsApp Send_ nodes.
2. **Add your OpenAI API Key** to all OpenAI-powered nodes.
3. **Replace the PDF URL** in the _HTTP Request_ node with your own brochure.
4. **Run the Manual Trigger once** to build the vector store.
5. **Activate the workflow** and start chatting from WhatsApp.


## What It Does

This workflow converts a product brochure (PDF) into a searchable knowledgebase using LangChain vector embeddings. Incoming WhatsApp messages are processed and if the message is text, the AI Sales Agent uses OpenAI + the vector store to produce accurate, brochure-based answers.

The AI responds naturally to customer queries, supports conversation memory across the session and retrieves information directly from the brochure when needed. Non-text messages are filtered out to maintain clean conversational flow.

The workflow is fully modular: you can replace the PDF, modify AI prompts, plug into CRM systems or extend it into a broader sales automation pipeline.


## Who’s It For

This workflow is ideal for:

- Businesses wanting a **WhatsApp-based AI customer assistant**.
- Sales teams needing **automated product query handling**.
- Companies with **large product catalog PDFs**.
- Marketers wanting a **zero-code product brochure chatbot**.
- Technical teams experimenting with **LangChain + OpenAI inside n8n**.


## Requirements to Use This Workflow

To run this workflow successfully, you need:

- An **n8n instance** (cloud or self-hosted).
- A **WhatsApp Business API** connection.
- An **OpenAI API key**.
- A **publicly accessible PDF brochure URL**.
- Basic familiarity with n8n node configuration.

Optional:

- A custom vector store backend (Qdrant, Pinecone) – the template uses in-memory storage.


## How It Works & How To Set Up

### 1. Import the Workflow JSON

Upload the workflow JSON provided.

### 2. Configure WhatsApp Trigger

- Open **WhatsApp Trigger**
- Add your WhatsApp credentials
- Set the webhook correctly to match your n8n endpoint

### 3. Configure WhatsApp Response Nodes

The workflow uses two WhatsApp send nodes:

- **Reply To User** → Sends AI response
- **Reply To User1** → Sends “unsupported message” reply

Add your WhatsApp credentials to both.

### 4. Replace the PDF Brochure

In **get Product Brochure (HTTP Request)**:

- Update the `url` parameter with your own PDF

### 5. Run the PDF → Vector Store Setup (One-Time Only)

Use the **Manual Trigger** ("When clicking ‘Test workflow’") to:

- Download the PDF
- Extract text
- Split into chunks
- Generate embeddings
- Store them in **Product Catalogue** vector store

&gt; You must run this once after importing the workflow.

### 6. Set OpenAI Credentials

Add your OpenAI API Key to the following nodes:

- `OpenAI Chat Model`
- `OpenAI Chat Model1`
- `Embeddings OpenAI`
- `Embeddings OpenAI1`

### 7. Review the AI Agent Prompt

Inside **AI Sales Agent**, you can edit the system message to match:

- Your brand
- Your product types
- Your tone of voice

### 8. Activate the Workflow

Once activated, WhatsApp users can chat with your AI Sales Agent.


## How to Customize Nodes?

Here are common customization options:

### Customize the PDF / Knowledgebase

Change the URL in **get Product Brochure**

or

Upload your own file via other nodes.

### Customize AI Behavior

Edit the **systemMessage** inside **AI Sales Agent**:

- Change personality
- Set product rules
- Restrict/expand scope

### Change Supported Message Types

Modify **Handle Message Types** switch logic to allow:

- Image → OCR
- Audio → Whisper
- Documents → Additional processing

### Modify WhatsApp Message Templates

Inside the `textBody` of response nodes.

### Extend or replace Vector Store

Swap `vectorStoreInMemory` with:

- Qdrant
- Pinecone
- Redis vector store

By updating the vector store node.


## Add-Ons (Optional Enhancements)

You can extend this workflow with:

### 1. Multi-language support

Add OpenAI translation nodes before agent input.

### 2. CRM Integration

Send user queries and chat logs into:

- HubSpot
- Salesforce
- Zoho CRM

### 3. Product Recommendation Engine

Use embeddings similarity to suggest products.

### 4. Order Placement Workflow

Connect to Stripe or Shopify APIs.

### 5. Analytics Dashboard

Log chats into Airtable / Postgres for analysis.


## Use Case Examples

Here are some practical uses:

1. **Product Inquiry Chatbot**
   Customers ask about specs, pricing, or compatibility.

2. **Digital Catalog Assistant**
   Converts PDF brochures into interactive WhatsApp search.

3. **Sales Support Bot**
   Reduces load on human sales reps by handling common questions.

4. **Internal Knowledge Bot**
   Teams access manuals, training documents, or service guides.

5. **Event/Product Launch Assistant**
   Provides instant details about newly launched items.

And many more similar use cases where an AI-powered WhatsApp assistant is valuable.


## Troubleshooting Guide

| Issue                                      | Possible Cause                         | Solution                                                      |
| ------------------------------------------ | -------------------------------------- | ------------------------------------------------------------- |
| WhatsApp messages not triggering workflow  | Wrong webhook URL or inactive workflow | Ensure webhook is correct & activate workflow                 |
| AI replies are empty                       | Missing OpenAI credentials             | Add OpenAI API key to all AI nodes                            |
| Vector store not populated                 | Manual trigger not executed            | Run the _Test Workflow_ trigger once                          |
| PDF extraction returns blank text          | PDF is image-based                     | Use OCR before text splitting                                 |
| “Unsupported message type” always triggers | Message type filter misconfigured      | Check conditions in _Handle Message Types_                    |
| AI not using brochure data                 | VectorStore tool not linked properly   | Check connections between Embeddings → VectorStore → AI Agent |


## Need Help with Support & Extensions?

If you need help setting up, customizing or extending this workflow, feel free to reach out to our n8n automation developers at WeblineIndia. We can help with

- Custom WhatsApp automation workflows
- AI-powered product catalog systems
- Integrating CRM, ERP or eCommerce platforms
- Building advanced LangChain-powered n8n automations
- Deploying scalable vector stores (Qdrant/Pinecone)
- And so much more.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
