# 💬 Match medical symptoms to products with OpenAI, Qdrant & Google Sheets RAG

> ⚡ **167 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## 🧠 RAG AI Medical Agent – n8n Workflow

## 👥 Who’s it for
This workflow is perfect for:
- **Healthcare ecommerce businesses** that want to automate product recommendations.
- **Founders or developers** building an AI assistant using retrieval-augmented generation (RAG) with product data.
- **Anyone** wanting to combine OpenAI, Qdrant vector search, and Google Sheets to power intelligent medical queries.

---

## ⚙️ How it works / What it does

This RAG-based workflow allows users to **ask medical questions** related to hair or scalp issues (e.g., hair loss, thinning). It:

1. Retrieves product info from a **Google Sheet**.
2. Converts product data into **text embeddings** using OpenAI.
3. Stores those embeddings in a **Qdrant vector database**.
4. On chat message trigger, performs a **vector similarity search** to match user symptoms with relevant products.
5. Uses an **AI agent** to respond with top 3 matching products from your catalog.

---

## 🛠️ How to set up

## Step 1: 🗂 Get your data
- Make sure your **Google Sheet** contains the following columns:
  - `Product Name`
  - `Symptoms Involved`
  - `Product Description`
  - `ForeverBetty Product Page Link`
  - `Category` (optional but recommended)

## Step 2: 🔐 Connect your accounts
- Add your **Google Sheets OAuth2 credentials** in the "Get all products" node.
- Add your **OpenAI API key** in the embedding nodes.
- Add your **Qdrant credentials** in the vector store nodes.

## Step 3: 🧠 Populate the Vector DB
1. Click **“Execute workflow”** manually.
2. This pulls data from the Google Sheet.
3. Each row is:
   - Formatted properly into a vector-friendly string.
   - Converted into an embedding using OpenAI.
   - Stored into Qdrant.

## Step 4: 💬 Enable Chat Interface
- Use the **ChatTrigger** to receive user queries.
- The agent searches Qdrant for relevant vectors.
- Replies with product suggestions via LangChain's LLM agent.

---

## 📋 Requirements

- 🧠 **n8n**
- 📄 A Google Sheet with product data.
- 🔐 Google Sheets OAuth2 credentials.
- 🧠 OpenAI API key (for embeddings + chat LLM).
- 🗃️ Qdrant Vector DB instance (Cloud or self-hosted).
---

## 🧩 How to customize it

## 🔄 Change the data structure
- Update the "Set Data Properly in vector database" node to modify what fields are embedded.
- Example:
  ```handlebars
  --- 
  Product: {{ $json['Product Name '] }}
  Use-case: {{ $json['Symptoms Involved'] }}
  Link: {{ $json['ForeverBetty Product Page Link '] }}

## 🔗 Nodes Used

Google Sheets, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory, Character Text Splitter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
