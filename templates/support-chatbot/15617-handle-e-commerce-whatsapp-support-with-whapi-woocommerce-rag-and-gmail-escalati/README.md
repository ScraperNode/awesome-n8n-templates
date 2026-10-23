# 💬 Handle e-commerce WhatsApp support with Whapi, WooCommerce, RAG and Gmail escalation

> ⚡ **294 views** · 💬 [Support Chatbots](../)

## Description

This workflow is a complete **AI-powered customer support automation for e-commerce** businesses.

The system allows customers to interact with an AI assistant directly through **WhatsApp**.
 This chatbot can:

* Answer customer questions in real time
* Retrieve order information from WooCommerce
* Search products and provide recommendations
* Access company policies and FAQs using RAG (Retrieval-Augmented Generation)
* Escalate conversations to human support when necessary
* Maintain conversation memory for contextual interactions
* Apply AI guardrails for safer conversations

---

### Key Advantages

#### 1. ✅ Fully Automated Customer Support

The workflow dramatically reduces manual customer support workload by automating:

* FAQs
* Order tracking
* Product inquiries
* Return policy questions
* Technical troubleshooting

This enables 24/7 support availability without human intervention.

#### 2. ✅ Native WhatsApp Integration

Using Whapi, customers can communicate through WhatsApp — one of the most widely used messaging platforms globally.

#### 3. ✅ AI-Powered Product Assistance

The assistant can:

* Search products in WooCommerce
* Compare items
* Recommend products
* Check stock availability
* Provide real-time pricing

This transforms the chatbot into an intelligent sales assistant, increasing conversion opportunities.

#### 4. ✅ RAG Knowledge Base with Qdrant

The workflow uses Retrieval-Augmented Generation (RAG) powered by Qdrant vector search.

#### 5. ✅ Human Escalation System

When the AI cannot solve an issue, the workflow automatically escalates the conversation to human support via Gmail.

#### 6. ✅ Multi-Model AI Architecture

The workflow combines:

* Google Gemini for conversational reasoning
* OpenAI embeddings for semantic retrieval

#### 7. ✅ Persistent Conversation Memory

The Window Buffer Memory node maintains contextual conversations.

#### 8. ✅ Built-In Guardrails & Security

The workflow includes AI Guardrails to:

* Filter inappropriate content
* Block unsafe requests
* Prevent policy violations
* Improve AI reliability

This is essential for production-ready AI assistants.

#### 9. ✅Real-Time WooCommerce Integration

The chatbot interacts directly with WooCommerce APIs to:

* Retrieve customer profiles
* Access order history
* Check shipment status
* Query products

This provides live data instead of static responses.

#### 10. ✅ Modular & Scalable Architecture

The workflow is highly modular:

* Easily customizable
* Extendable with new tools
* Compatible with additional APIs
* Scalable for large e-commerce operations

New AI tools or integrations can be added without redesigning the entire system.


#### Ideal Use Cases

This workflow is ideal for:

* E-commerce stores
* Fashion brands
* Electronics retailers
* Customer support automation
* AI sales assistants
* WhatsApp commerce
* Technical support automation
* Multilingual support systems


This workflow represents a production-ready AI customer support system capable of combining conversational AI, semantic search, real-time e-commerce operations, and human escalation into a single automated pipeline. 


---

### How it works

1. **WhatsApp message reception**  
   - The workflow starts when a WhatsApp message is received via the `Get WhatsApp` webhook (Whapi).  
   - It checks if the message is of type `text` — if not, it replies with a message saying only text is supported.

2. **Guardrails & policy check**  
   - The message passes through a `Guardrails` node that filters inappropriate content or policy violations.  
   - If the message violates policies, a rejection reply is sent.

3. **Customer support AI Agent**  
   - The message is passed to an **AI Agent** (powered by Google Gemini or OpenAI).  
   - The agent has access to:
     - **Memory** (`Window Buffer Memory`) to keep conversation context.
     - **Tools** for:
       - Retrieving company knowledge via `rag_search` (from Qdrant).
       - Fetching WooCommerce orders, products, and customers.
       - Performing calculations.
       - Escalating to human support via Gmail.
   - The agent follows a detailed system prompt covering product info, order assistance, technical support, and escalation logic.

4. **Response normalization & sending**  
   - The agent's raw output is cleaned (newlines/tabs escaped) via a `Code` node.  
   - The cleaned response is sent back to the customer via Whapi (`Send WhatsApp`).

5. **Knowledge base vectorization (separate flow)**  
   - A separate part of the workflow (triggered manually) loads documents from **Google Drive**, splits them into chunks, generates embeddings via OpenAI, and stores them in **Qdrant** for semantic search.

---

### Set up steps

1. **Configure external services & credentials**  
   - **Whapi**: [Sign up (FREE TRIAL available)](https://panel.whapi.cloud/partner_registration/n3w), get API credentials, and set the webhook URL in Whapi settings to point to your n8n webhook.  
   - **OpenAI**: Create an API key for embeddings and chat model (or use Google Gemini).  
   - **Qdrant**: Set up a Qdrant instance (e.g., on Hetzner) and create API credentials.  
   - **Google Drive**: Authenticate to access document folders.  
   - **WooCommerce**: Generate API keys for order/product/customer retrieval.  
   - **Gmail**: Authenticate for human support escalation.

2. **Create Qdrant collection**  
   - Run the `Create collection` HTTP request node (update `QDRANTURL` and `COLLECTION` name).

3. **Upload & vectorize documents**  
   - Place your knowledge base files (PDFs, text, Google Docs) in a Google Drive folder.  
   - Set the folder ID in the `Get folder` node.  
   - Run the manual trigger to load, split, embed, and store documents into Qdrant.

4. **Configure the AI Agent**  
   - Set the system prompt (already provided in the `E-Commerce Customer Support AI Agent` node).  
   - Choose the language model (Gemini or OpenAI) and connect credentials.  
   - Ensure all tools (`rag_search`, WooCommerce nodes, calculator, Gmail) are enabled and properly connected.

5. **Set webhook & activate workflow**  
   - Copy the webhook URL from the `Get WhatsApp` node.  
   - Paste it into your Whapi dashboard as the incoming message webhook.  
   - Toggle the workflow to `active`.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
