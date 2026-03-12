# 💬 E-commerce assistant for Shopify & WooCommerce with GPT-4o, Gemini & RAG

> ⚡ **3,435 views** · 💬 [Support Chatbots](../)

## Description

## 🤖 Universal E-Commerce AI Assistant (Shopify, WooCommerce & RAG)

This powerful n8n workflow deploys a sophisticated, multi-talented AI chatbot designed to streamline your e-commerce and customer support operations. The AI assistant can intelligently understand user queries and route them to the correct specialized agent, whether it's for **Shopify**, **WooCommerce**, or general knowledge questions answered by a **Retrieval-Augmented Generation (RAG)** system.

This template automates responses to a wide range of inquiries, from checking Shopify order statuses with GraphQL to fetching product lists from WooCommerce, and even answering general questions by looking up information in a Pinecone vector database.

### How It Works ⚙️

The workflow operates in a series of logical steps, starting from the moment a user sends a message.

1.  **💬 Chat Trigger:** The workflow activates when a user sends a message in the n8n chat interface. It captures the user's input and a unique session ID to track the conversation.

2.  **🧠 Intelligent Routing:** The user's query is first sent to a **Router Agent** powered by GPT-4o-mini. This agent's sole purpose is to classify the intent of the message and output one of three keywords: `SHOPIFY`, `WOOCOMMERCE`, or `None of them`.

3.  **🔀 Conditional Branching:** Based on the Router's output, a series of IF nodes direct the conversation down one of three paths:

      * **General Queries Path**
      * **Shopify Path**
      * **WooCommerce Path**

4.  **📚 General Queries (RAG):** If the query is not about e-commerce, it's handled by a RAG agent.

      * **Embedding:** The user's question is converted into a vector embedding using **AWS Bedrock**.
      * **Retrieval:** The workflow searches a **Pinecone Vector Store** to find the most relevant information from your knowledge base.
      * **Generation:** A **GPT-4o-mini** agent receives the context from Pinecone and generates a comprehensive, helpful answer.

5.  **🛍️ E-Commerce Specialists:** If the query is about Shopify or WooCommerce, it's passed to a dedicated agent.

      * **Shopify Agent:** This agent uses **Google Gemini** and has a suite of tools to manage Shopify tasks. It can `Get Order info`, `Fetch All Products`, or run complex queries using the powerful **GraphQL** tool.
      * **WooCommerce Agent:** This agent also uses **Google Gemini** and is equipped with tools to `Fetch Order Details` and `Fetch All Products` from a WooCommerce store.

6.  **🗣️ Conversation Memory:** Each agent (Router, General, Shopify, WooCommerce) is connected to its own Memory node. This allows the chatbot to remember previous parts of the conversation for a more natural and context-aware interaction.

7.  **🏁 Merge & Respond:** All three paths converge at a final **Merge** node. This ensures that no matter which agent handled the request, the final answer is streamlined into a single output and sent back to the user in the chat.

### Nodes Used 🔗

  * **Triggers:**
      * **Chat Trigger**: Starts the workflow when a chat message is received.
  * **AI & Agents:**
      * **AI Agent**: Four separate agents for Routing, Shopify, WooCommerce, and General Queries.
      * **OpenAI Chat Model**: Uses GPT-4o-mini for the Router and General Queries agent.
      * **Google Gemini Chat Model**: Uses Google Gemini for the Shopify and WooCommerce agents.
  * **Tools & Data:**
      * **Shopify Tool**: To get products and order information from Shopify.
      * **WooCommerce Tool**: To get products and order information from WooCommerce.
      * **GraphQL Tool**: For advanced, custom queries to the Shopify API.
      * **Pinecone Vector Store**: To retrieve context for the RAG agent.
      * **AWS Bedrock Embeddings**: To create vector embeddings for Pinecone.
  * **Logic & Memory:**
      * **IF Node**: To conditionally route the workflow.
      * **Merge Node**: To consolidate the different branches before ending.
      * **Window Buffer Memory**: Four nodes to provide conversational memory to each agent.

### Setup Guide 🛠️

To use this workflow, you'll need to configure several nodes with your own credentials and settings.

#### 1\. AI Model Credentials

  * **OpenAI:** Create an API key in your [OpenAI Platform](https://platform.openai.com/api-keys) dashboard. Add this credential to the **Router Model** and **GPT-4o-mini** nodes.
  * **Google Gemini:** Create an API key in your [Google AI Studio](https://aistudio.google.com/app/apikey) dashboard. Add this credential to the **Shopify Chat Model** and **WooCommerce Chat Model** nodes.

#### 2\. E-Commerce Platform Credentials

  * **Shopify:** You will need a Shopify Access Token. Follow the [n8n documentation](https://docs.n8n.io/integrations/builtin/credentials/shopify/) to generate one. Add the credential to the **Fetch All Products** and **Get Order info** nodes.
  * **WooCommerce:** Create API credentials from your WordPress dashboard. Add the credential to the **Fetch All Products2** and **Fetch Order Details** nodes.

#### 3\. RAG System Credentials (Pinecone & AWS)

  * **Pinecone:**
      * Sign up for a [Pinecone](https://www.pinecone.io/) account and create an API key.
      * Add your Pinecone credentials in n8n.
      * In the **Pinecone Vector Store** node, set the `pineconeIndex` to the name of your index. You must have a pre-existing index with data for the RAG to work.
  * **AWS:**
      * Create an AWS account and an IAM user with programmatic access to **Amazon Bedrock**.
      * Add your AWS credentials in n8n.
      * Select your AWS credentials in the **AWS Bedrock Embeddings** node.

#### 4\. GraphQL Node Configuration

  * In the **GraphQL** node, you must update the `endpoint` URL. Replace the placeholder `https://{subdomain}.myshopify.com/admin/api/2025-04/graphql.json` with your own Shopify store's GraphQL API endpoint.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Embeddings AWS Bedrock, Pinecone Vector Store, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
