# 💬 Provide ecommerce support with Qdrant RAG, WooCommerce, and human backup

> ⚡ **300 views** · 💬 [Support Chatbots](../)

## Description

This workflow is a complete **AI-powered customer support automation for WooCommerce e-commerce websites**.
It combines conversational AI, Retrieval-Augmented Generation (RAG), vector search, WooCommerce integration, and human escalation into a single intelligent support system.

The workflow allows customers to interact with an AI assistant through a website chat interface, providing real-time support, product discovery, policy assistance, and personalized shopping guidance. 

---

### Key Advantages

#### 1. ✅ Intelligent Customer Support

The chatbot can answer customer questions instantly, reducing response times and improving customer satisfaction.

Benefits:

* 24/7 automated assistance
* Faster customer response times
* Reduced support workload
* Consistent customer experience

#### 2. ✅ Real-Time WooCommerce Integration

The workflow connects directly to WooCommerce to retrieve live product data.

Capabilities:

* Product search
* Availability checks
* Price retrieval
* Product recommendations
* Category browsing

This ensures customers always receive accurate and up-to-date information.

#### 3. ✅ RAG-Powered Knowledge Base

The workflow uses **Qdrant Vector Store** and OpenAI embeddings to create a semantic knowledge base from company documents stored in Google Drive.

Advantages:

* AI can answer questions about:

  * shipping policies
  * returns and refunds
  * FAQs
  * store information
  * sizing guides
  * promotions
* Context-aware responses
* Better accuracy than traditional keyword search
* Easy document updates through Google Drive synchronization

#### 4. ✅ AI Guardrails and Safer Conversations

The workflow includes dedicated AI guardrails before the AI agent processes customer messages.

Benefits:

* Safer interactions
* Reduced hallucinations
* Better brand protection
* More controlled AI behavior
* Prevention of off-topic conversations


#### 5. ✅ Personalized Shopping Experience

The AI agent acts like a virtual shopping assistant.

Capabilities:

* Product recommendations
* Outfit suggestions
* Personalized guidance
* Product comparisons
* Contextual conversations using memory

This creates a premium customer experience similar to an in-store assistant.

#### 6. ✅ Conversation Memory

The workflow includes a buffer memory system that maintains context during conversations.

Advantages:

* More natural conversations
* Better understanding of customer preferences
* Improved multi-step interactions
* Personalized responses across the session


#### 7. ✅ Human Escalation System

When the AI cannot fully resolve a request, the workflow automatically escalates the conversation to human support via Gmail.

Benefits:

* Seamless customer handoff
* Better customer satisfaction
* Reduced frustration
* Support continuity
* Full conversation transcript included

---

#### 8. ✅ Scalable and Modular Architecture

The workflow is built using modular n8n nodes and reusable AI tools.

Advantages:

* Easy to customize
* Easy to scale
* Simple maintenance
* Flexible integrations
* Suitable for multiple e-commerce industries


#### Ideal Use Cases

This workflow is ideal for:

* Fashion e-commerce stores
* Luxury boutiques
* WooCommerce websites
* Online retail businesses
* Customer support automation
* AI shopping assistants

---

### How it works

This workflow implements an **AI-powered customer support chatbot** for an e-commerce store (Fashionart). It integrates with **webiste chatbot** (chat trigger), **Qdrant** (vector store), **Google Drive** (knowledge base), **WooCommerce** (product data), and **Gmail** (human escalation).

1. **User message received** – The workflow starts when a customer sends a message via the chat trigger.
2. **Guardrails applied** – The input is first passed through a Guardrails node to enforce safety and content policies.
3. **AI Agent processes the request** – An `E-Commerce Customer Support AI Agent` (LangChain agent) decides which tool to call based on the user’s intent:
   - `rag_search` – Retrieves company policies, FAQs, and static knowledge from Qdrant (populated from Google Drive documents).
   - `get_product` – Fetches live product details from WooCommerce.
   - `get_many_products` – Searches/multiple products from WooCommerce.
   - `get_human_support` – Escalates to staff by sending a transcript + customer phone/email via Gmail.
   - `Calculator` – Optional tool for simple calculations.
4. **Memory context** – A **Window Buffer Memory** node keeps conversation history (last 10 messages) for contextual replies.
5. **Response returned** – The agent’s output is sent back to the customer via the chat node.

&gt; The workflow also includes a **manual ingestion branch** (Test workflow → Google Drive → Qdrant) to vectorize documents into the knowledge base.

---

## Set up steps

1. **Create Qdrant collection**  
   - Ensure Qdrant is running at `http://qdrant_jush:6333`  
   - Run the `Create collection` HTTP request node (or manually create a collection named `fashionart` with vector size 1536, Cosine distance).

2. **Configure Google Drive**  
   - Set the folder ID in the `Get folder` node (contains all product/policy documents).  
   - Ensure the `Download Files` node can access the drive (authenticate with OAuth2).

3. **Set up OpenAI embeddings**  
   - Add your **OpenAI API key** in the `Embeddings OpenAI` and `Embeddings OpenAI2` nodes.  
   - Same for `OpenAI Chat Model1` (or switch to the existing `Google Gemini Chat Model` with proper credentials).

4. **Configure WooCommerce tools**  
   - Add WooCommerce credentials (API key, secret, store URL) in `get_product` and `get_many_products` nodes.

5. **Set up Gmail for human escalation**  
   - Authenticate the `get_human_support` Gmail node.  
   - Update the recipient email (`info@n3w.it` to the actual support email).

6. **Adjust agent system prompt**  
   - Review the system prompt inside the `E-Commerce Customer Support AI Agent` node – it contains the full assistant behavior, tone, and tool usage logic.  
   - Change any store-specific details (name, address, examples).

7. **Activate chat trigger**  
   - Deploy the workflow.  
   - Use the **webhook URL** from the `When chat message received` node to connect to javascript chatbot or any chat frontend.

8. **Populate the vector store**  
   - Click **Test workflow** (manual trigger) to run the ingestion branch – this will read documents from Google Drive, split them, embed them, and store them in Qdrant.

9. **Set workflow to active** – Change `"active": false` to `true` in the JSON or via n8n UI.


---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
