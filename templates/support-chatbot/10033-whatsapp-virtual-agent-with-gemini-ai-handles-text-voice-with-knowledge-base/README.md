# 💬 WhatsApp virtual agent with Gemini AI - handles text & voice with knowledge base

> ⚡ **1,751 views** · 💬 [Support Chatbots](../)

## Description

### Overview  
This project is an **AI-powered WhatsApp virtual agent** built using **n8n**, designed to handle both **text** and **voice-based customer messages** automatically.  
The workflow integrates **Google Gemini**, **Pinecone**, and the **WhatsApp Business API** to provide intelligent, context-aware responses that feel natural and professional.  

---

## How It Works  

### Message Detection  
The workflow begins when a message arrives on WhatsApp. It identifies whether the message is **text** or **voice** and routes it accordingly.  

### Voice Message Handling  
1. Audio messages are securely **downloaded from WhatsApp**.  
2. The files are **converted to Base64** format and sent to the **Gemini API** for transcription.  
3. The **transcribed text** is then passed to the AI Agent for further processing.  

### AI Agent Processing  
The **LangChain AI Agent** acts as the brain of the system. It uses:  
- **Google Gemini Chat Model** for natural language understanding and response generation.  
- **Pinecone Vector Store** to retrieve company-specific information and product data.  
- **Memory Buffer** to remember the last 20 user messages, ensuring context-aware responses.  

The agent also follows a set of **custom communication rules** — replying only in approved languages, skipping greetings, and focusing on direct, helpful, and professional responses (e.g., product recommendations, support, or guidance).  

### Knowledge Retrieval  
The **AI Agent** connects to a **Pinecone database** containing detailed company data, such as product catalogs or service FAQs. Using **Gemini-generated embeddings**, it retrieves the most relevant information for each user query.  

### Response Delivery  
Once the AI Agent prepares the response, it is **instantly sent back to the user** via WhatsApp, completing the conversational loop.  

---

## Who It’s For  
This system is ideal for businesses seeking to **automate their customer communication** through WhatsApp. It’s especially valuable for:  
- **Product-based companies** with frequent customer inquiries.  
- **Service providers** offering 24/7 customer assistance or quote requests.  
- **SMBs** looking to scale their communication without hiring additional staff.  

---

## Tech Stack & Requirements  

- **n8n** – Workflow automation and orchestration.  
- **WhatsApp Cloud API** – For sending and receiving messages.  
- **Google Gemini (PaLM)** – For LLM-based transcription and response generation.  
- **Pinecone** – Vector database for product and service knowledge retrieval.  
- **LangChain Integration** – For connecting memory, vector store, and reasoning tools.  
- **Custom Business Rules** – Configurable within the AI Agent node to manage tone, style, and workflow behavior.  

---

## Key Features  

- Handles **both text and voice** messages seamlessly.  
- Responds in **multiple languages**, including English.  
- Maintains **conversation memory** per user session.  
- Retrieves **accurate company-specific information** using vector search.  
- Fully **automated**, with customizable behavior for different industries or use cases.  

---

## Setup Instructions  

### 1. Prerequisites  
Before importing the workflow, ensure you have:  
- An active **n8n instance** (self-hosted or n8n Cloud).  
- **WhatsApp Cloud API credentials** from Meta.  
- **Google Gemini API key** with model access (for chat and transcription).  
- **Pinecone API key** with a preconfigured vector index containing your company data.  

### 2. Environment Setup  
- Install all required credentials under **Settings → Credentials** in n8n.  
- Add environment variables (if applicable) for keys like:  
  ```bash
  GOOGLE_API_KEY=your_google_gemini_key  
  PINECONE_API_KEY=your_pinecone_key  
  WHATSAPP_ACCESS_TOKEN=your_whatsapp_token  
  ```  

### 3. Pinecone Configuration  
- Create a Pinecone index named, for example, `products-index`.  
- Upload company documents or product details as **vector embeddings** using Gemini or LangChain utilities.  
- Adjust the **retrieval limit** in the Pinecone node settings for broader or narrower search responses.  

### 4. WhatsApp API Configuration  
- Set up a **WhatsApp Business Account** via Meta Developer Dashboard.  
- Create a webhook endpoint URL (n8n’s public URL) to receive WhatsApp messages.  
- Use the **WhatsApp Trigger Node** to capture messages in real time.  

### 5. AI Agent Customization  
You can personalize how the AI behaves by editing the **system prompt** inside the AI Agent node:  
- Modify tone, response length, or product focus.  
- Add new “rules” for language preferences or conversation flow.  
- Include links or custom text output (e.g., quotation formats, product catalog messages).  

### 6. Handling Voice Messages  
- Ensure your WhatsApp Business Account has **media message permissions** enabled.  
- Verify the **HTTP Request node** that connects to the Gemini API for transcription is correctly authenticated.  
- You can adjust the transcription model or prompt if you prefer shorter, keyword-based outputs.  

### 7. Testing  
- Send both **text and voice messages** from a test WhatsApp number.  
- Check response time and message formatting.  
- Use n8n’s **execution logs** to debug errors (especially for media downloads or API credentials).  

---

## Customization Options  

### 🧩 AI Behavior  
- Modify the **AI Agent’s system message** to adapt tone and personality (e.g., sales-oriented, support-driven).  
- Update memory length (default: last 20 messages) for longer or shorter conversations.  

### 🌍 Multi-language Support  
- Add or remove allowed languages in the rules section of the AI Agent node.  
- For multilingual businesses, duplicate the AI Agent path and route messages by language detection.  

### 📦 Industry Adaptation  
- Swap the Pinecone dataset to suit different industries — retail, hospitality, logistics, etc.  
- Replace product data with FAQs, customer records, or support documentation.

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Simple Memory, Pinecone Vector Store, WhatsApp Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
