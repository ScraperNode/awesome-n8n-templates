# 💬 WooCommerce AI post-sales chatbot with GPT-4o, RAG, Google Drive and Telegram

> ⚡ **3,835 views** · 💬 [Support Chatbots](../)

## Description

This **WooCommerce-integrated chatbot** is designed to transform post-sales customer support by combining automation and artificial intelligence to deliver fast, secure, and personalized assistance. 

The chatbot **retrieves real-time order information, including shipping details and tracking numbers,** after verifying the customer's identity through a strict email-based authentication system.

Beyond order management, the chatbot answers frequently asked questions about return policies, delivery times, and terms of service using **RAG**. 

If a request is too complex, the system seamlessly **escalates it to a human operator via Telegram**, guaranteeing no customer query goes unresolved. 

---

#### **Key Features of the Chatbot**  
1. **Order Tracking**: Retrieves real-time tracking information for WooCommerce orders, including carrier URLs and pickup dates.  
2. **Order Details Retrieval**: Provides customers with past/current order information after strict email verification.  
3. **Policy & FAQ Assistance**: Answers questions about shipping, returns, and store policies using a vectorized knowledge base (ToS tool).  
4. **Identity Verification**: Ensures privacy by requiring exact email-order matches before sharing sensitive data.  
5. **Human Escalation**: Transfers complex issues to human agents via Telegram when the AI cannot resolve them.  
6. **Context-Aware Conversations**: Maintains dialogue context using memory buffers for seamless interactions.  
---


#### **Who Benefits from This Chatbot?**  
1. **E-commerce Stores**: WooCommerce businesses needing 24/7 automated post-sales support.  
2. **Customer Support Teams**: Reduces ticket volume by handling repetitive queries (tracking, policies).  
3. **SMBs**: Small-to-medium businesses lacking resources for full-time support staff.  
4. **Customers**: Shoppers who want instant, self-service access to order status and FAQs.  

---

#### **How It Works**  
1. **Customer Interaction**: The workflow starts when a customer sends a chat message, triggering the AI agent.  
2. **Identity Verification**: The agent requests the order number and associated email, strictly verifying the match before proceeding.  
3. **Order & Tracking Retrieval**: Using WooCommerce API tools (`get_order`, `get_tracking`), it fetches order details and tracking information.  
4. **Policy & Support**: The `ToS` tool answers shipping and policy questions, while `human_assistance` escalates unresolved issues to a human agent via Telegram.  
5. **Memory & Context**: A buffer memory retains conversation context for coherent interactions.  

---

#### **Set Up Steps**  
1. **Configure Qdrant Vector Store**: Replace `QDRANTURL` and `COLLECTION` in the nodes to set up document storage.  
2. **Add Telegram Chat ID**: Insert your Telegram `CHAT_ID` in the `human_assistance` node for escalations.  
3. **Integrate WooCommerce Tracking Plugin**: Install the YITH WooCommerce Order Tracking plugin and update the HTTP request URL in the tracking node.  
4. **Test & Activate**: Verify the workflow by testing order queries and ensuring proper email verification.  

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Google Drive, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
