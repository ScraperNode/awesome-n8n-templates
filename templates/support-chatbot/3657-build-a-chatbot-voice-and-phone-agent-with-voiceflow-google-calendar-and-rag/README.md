# 💬 Build a chatbot, voice and phone agent with Voiceflow, Google Calendar and RAG

> ⚡ **32,877 views** · 💬 [Support Chatbots](../)

## Description

**Voiceflow** is a no-code platform that allows you to design, prototype, and deploy conversational assistants across multiple channels—such as **chat**, **voice**, and **phone**—with advanced logic and natural language understanding. It supports integration with APIs, webhooks, and even tools like Twilio for phone agents. It's perfect for building customer support agents, voice bots, or intelligent assistants.

This workflow connects **n8n** and **Voiceflow** with tools like **Google Calendar**, **Qdrant (vector database)**, **OpenAI**, and an **order tracking API** to power a smart, multi-channel conversational agent.

![image](https://i.postimg.cc/3rSPwMn2/langflow.png)

There are 3 main webhook endpoints in n8n that Voiceflow interacts with:

1. **`n8n_order`** – receives user input related to order tracking, queries an API, and responds with tracking status.
2. **`n8n_appointment`** – processes appointment booking, reformats date input using OpenAI, and creates a Google Calendar event.
3. **`n8n_rag`** – handles general product/service questions using a RAG (Retrieval-Augmented Generation) system backed by:
   - **Google Drive** document ingestion,
   - **Qdrant vector store** for search,
   - and **OpenAI** models for context-based answers.

Each webhook is connected to a corresponding **"Capture" block** inside Voiceflow, which sends data to n8n and waits for the response.

---

### **How It Works**  
This n8n workflow integrates **Voiceflow** for chatbot/voice interactions, **Google Calendar** for appointment scheduling, and **RAG (Retrieval-Augmented Generation)** for knowledge-based responses. Here’s the flow:  

- **Trigger**:  
  - Three webhooks (`n8n_order`, `n8n_appointment`, `n8n_rag`) receive inputs from Voiceflow (chat, voice, or phone calls).  
  - Each webhook routes requests to specific functions:  
    - **Order Tracking**: Fetches order status via an external API.  
    - **Appointment Scheduling**: Uses OpenAI to parse dates, creates Google Calendar events, and confirms via WhatsApp.  
    - **RAG System**: Queries a Qdrant vector store (populated with Google Drive documents) to answer customer questions using GPT-4.  

- **AI Processing**:  
  - **OpenAI Chains**: Convert natural language dates to Google Calendar formats and generate responses.  
  - **RAG Pipeline**: Embeds documents (via OpenAI), stores them in Qdrant, and retrieves context-aware answers.  
  - **Voiceflow Integration**: Routes responses back to Voiceflow for multi-channel delivery (chat, voice, or phone).  

- **Outputs**:  
  - Confirmation messages (e.g., "Event created successfully").  
  - Dynamic responses for orders, appointments, or product support. 

---

### **Setup Steps**  

##### **Prerequisites**:  
- **APIs**:  
  - Google Calendar & Drive OAuth credentials.  
  - Qdrant vector database (hosted or cloud).  
  - OpenAI API key (for GPT-4 and embeddings).  

##### **Configuration**:  
1. **Qdrant Setup**:  
   - Run the **"Create collection"** and **"Refresh collection"** nodes to initialize the vector store.  
   - Populate it with documents using the **Google Drive → Qdrant** pipeline (embeddings generated via OpenAI).  

2. **Voiceflow Webhooks**:  
   - Link Voiceflow’s "Captures" to n8n’s webhook URLs (`n8n_order`, `n8n_appointment`, `n8n_rag`).  

3. **Google Calendar**:  
   - Authenticate the **Google Calendar node** and set event templates (e.g., `summary`, `description`).  

4. **RAG System**:  
   - Configure the **Qdrant vector store** and **OpenAI embeddings** nodes.  
   - Adjust the **Retrieve Agent**’s system prompt for domain-specific queries (e.g., electronics store support).   

#### **Optional**:  
- Add Twilio for phone-agent capabilities.  
- Customize OpenAI prompts for tone/accuracy.  

![image](https://i.postimg.cc/855gyTZP/voiceflow-agent.png)
![image](https://i.postimg.cc/5Nn4Sk43/voiceflow-agent2.png)

PS. You can import a Twilio number to assign it to your agent for becoming a Phone Agent

![image](https://i.postimg.cc/cLymTTFv/voiceflow-agent3.png)

---
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/)

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, Google Calendar, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
