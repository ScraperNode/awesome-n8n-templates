# 🎫 AI Gmail support automation with Google Gemini, OpenAI & Pinecone

> ⚡ **305 views** · 🎫 [Ticket Management & Triage](../)

## Description

## 💬 AI Gmail Support Automation with Google Gemini, OpenAI & Pinecone

### 🚀 How it Works
This workflow turns your Gmail inbox into an **AI-powered customer support assistant** using **Google Gemini**, **OpenAI embeddings**, and **Pinecone vector search**.  
It automatically classifies incoming emails, retrieves context-based answers from your knowledge base, and replies instantly saving your support team valuable time.

### 🔁 Workflow Overview
- **Gmail Trigger** → Detects new incoming customer emails.  
- **Intent Classifier** → Identifies if the email is a support query or something else.  
- **Vector Store (Pinecone)** → Retrieves the most relevant information.  
- **Email Support Agent (Gemini)** → Generates a clear, human-like response.  
- **Gmail Node** → Sends the AI-generated reply automatically.  
- **Slack Notification** → Updates your team about the response.  
- **Label Query** → Adds Gmail labels for tracking and organization.

This automation provides **24/7 AI-based email support**, faster customer responses, and zero manual data lookup — ideal for busy teams handling repetitive queries.

---

### 👥 Who It’s For
- **SaaS companies** managing frequent customer support requests  
- **Startups and agencies** looking to automate inbox replies  
- **Customer success teams** aiming to improve response time  
- **Freelancers or small businesses** who want smart, auto-handled Gmail support  

---

## ⚙️ Set Up Steps

**Estimated setup time:** 10–15 minutes  

1. **Connect your Gmail and Slack accounts** to n8n.  
2. **Add your API keys**:  
   - Google Gemini API key  
   - OpenAI API key  
3. **Link your Pinecone Vector Database** (or create a new one).  
4. **Customize the system message** in the “Email Support Agent” node to match your tone or brand style.  
5. **Send test emails** to ensure the automation responds correctly and labels messages as intended.  
6. **Check Slack notifications** to confirm your team gets updates on replies.  

💡 *Detailed setup notes are included in the sticky notes inside the workflow.*

---

### 🧩 Integrations Used
- Gmail API  
- Google Gemini LLM  
- OpenAI Embeddings  
- Pinecone Vector Database  
- Slack API  

---

### 💡 Key Benefits
- Provides **instant AI-based email replies** 24/7  
- Reduces manual workload for support teams  
- Maintains consistent and accurate tone using your knowledge base  
- Keeps your inbox **organized with automatic labels and team alerts**  
- Ideal for **scaling customer support without hiring more agents**

## 🔗 Nodes Used

Slack, Gmail, Gmail Trigger, AI Agent, Embeddings OpenAI, Pinecone Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
