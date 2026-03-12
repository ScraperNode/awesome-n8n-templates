# 💬 Build an AI powered phone agent 📞🤖 with Retell, Google Calendar and RAG

> ⚡ **28,111 views** · 💬 [Support Chatbots](../)

## Description

This Workflow simulates an AI-powered phone agent with [RetellAI](https://dashboard.retellai.com/?ref=davide) with two main functions:

1. **📅 Appointment Booking** – It can schedule appointments directly into Google Calendar.  
2. **🧠 RAG-based Information Retrieval** – It provides answers using a Retrieval-Augmented Generation (RAG) system. For example, it can respond to questions such as store opening hours, return policies, or product details.

The guide also explains **how to purchase a dedicated phone number** (with a +1 prefix) and link it to the AI agent. This setup is cost-effective, as it uses a **FREE $10 credit** to operate without additional charges in the beginning.

![](https://i.postimg.cc/brtBkgfH/Retellai-flow.png)

---

### **✨ Advantages**

- **🕐 24/7 Availability** – The AI agent can answer calls and assist customers at any time.  
- **🤖 Automation** – It reduces the workload on human staff by handling repetitive tasks like appointment scheduling and FAQ responses.  
- **🔌 Easy Integration** – Built with n8n, it’s flexible and customizable for various platforms and tools.  
- **💸 Low-cost Setup** – Using the free credit, businesses can get started without an upfront investment.

---

### **📦 Use Cases**

- **🛍 E-commerce** – Answer common product questions or order inquiries.  
- **🏬 Retail Stores** – Provide store hours, address info, and return policies.  
- **🍽 Restaurants** – Take reservations or share menu information.  
- **💼 Service Providers** – Book appointments or consultations.  
- **📞 Any Local Business** – Offer phone support without needing a live operator.

---

### **How It Works**  
This Workflow simulates an AI-powered phone agent with two primary functions:  

1. **Appointment Booking**  
   - The workflow captures call events (e.g., `call_ended` or `call_analyzed`) and extracts key details (transcript, caller info, duration, etc.).  
   - Using OpenAI, it summarizes the conversation and parses structured data (e.g., names, contact info, dates).  
   - For scheduling, it converts user-provided dates into Google Calendar-compatible formats and creates events automatically.  

2. **RAG-Based Information Retrieval**  
   - When a query is received (e.g., store hours, product details), the workflow retrieves relevant information from a Qdrant vector store.  
   - An AI agent processes the query using the retrieved data and responds via a webhook, ensuring accurate, context-aware answers.   

---  

### **Set Up Steps**  
1. **Prepare Qdrant Vector Store**  
   - Create/refresh a Qdrant collection (via HTTP requests).  
   - Upload and vectorize documents (e.g., from Google Drive) using OpenAI embeddings.  

2. **Configure RetellAI Agent**  
   - Sign up for [RetellAI](https://dashboard.retellai.com/?ref=davide), create an agent, and set the webhook URLs (`n8n_call` for call events, `n8n_rag_function` for RAG queries).  
   - Purchase a Twilio phone number and link it to the agent.  

3. **n8n Workflow Setup**  
   - Connect OpenAI, Qdrant, Google Calendar, and Telegram nodes with credentials.  
   - Customize prompts for summarization, date parsing, and RAG responses.  
   - Test the workflow to ensure data flows from call events → processing → actions (e.g., calendar bookings, Telegram alerts).  

4. **Deploy**  
   - Trigger the workflow via RetellAI webhooks during calls.  
   - Monitor outputs (e.g., call summaries in Telegram, calendar events).  

**Note**: Replace placeholders (e.g., `QDRANTURL`, `COLLECTION`, `CHAT_ID`) with actual values. 

---


👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Webhook, Telegram, Google Drive, Google Calendar, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
