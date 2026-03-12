# 💬 Create a customer support voice agent with GPT-5, ElevenLabs & calendar booking

> ⚡ **7,256 views** · 💬 [Support Chatbots](../)

## Description

# Build a Customer Support AI Voice Agent with GPT-5 and ElevenLabs

![Workflow Screenshot](https://www.dr-firas.com/VOICE-AI-AGENTS.png)

### 👥 Who is this for?

This template is ideal for:  
- Businesses that want to provide **24/7 automated voice-based customer support**  
- Service providers needing to **schedule appointments via voice interaction**  
- Teams looking to handle multilingual customer queries automatically  
- Entrepreneurs aiming to boost customer engagement without hiring large support teams  

---

### 💡 What problem is this workflow solving?

Traditional customer support requires:  
- Human agents to answer repeated questions  
- Manual handling of bookings and confirmations  
- Limited availability outside office hours  

This workflow solves those issues by combining **GPT-5 intelligence** with **ElevenLabs voice synthesis**, enabling your website visitors to:  
- Ask questions and receive **spoken answers** in multiple languages  
- Request appointment availability  
- Confirm bookings and receive **automatic email confirmations**  

All of this happens automatically, reducing costs and ensuring consistent customer experience.

---

### ⚙️ What this workflow does

1. **Receive customer voice input** via webhook from your website  
2. **Transcribe and understand intent** using GPT-5 and LangChain reasoning  
3. **Fetch information** from your knowledge base (Google Sheets) for FAQs, services, or policies  
4. **Check availability** in Google Calendar in real-time  
5. **Create confirmed appointments** only after explicit user confirmation  
6. **Send confirmation emails** with booking details via Gmail  
7. **Respond back to the user** with a multilingual spoken reply using ElevenLabs  

---

### 🧰 Setup

Before launching this workflow, make sure you:  
1. Have an **OpenAI API key** for GPT-5  
2. Set up an **ElevenLabs account** and API key for voice input/output  
3. Enable **Google Sheets API** and prepare a sheet with your FAQ/knowledgebase  
4. Enable **Google Calendar API** and connect your calendar for scheduling  
5. Connect your **Gmail account** for booking confirmation emails  
6. Configure the **Webhook URL** on your website for sending voice requests  
7. Follow the sticky note instructions inside the workflow for final setup  

---

### 🛠️ How to customize this workflow

- **Knowledgebase:** Add or update information in your Google Sheets to cover new FAQs  
- **Voice settings:** Configure ElevenLabs voice style, tone, or supported languages  
- **Appointment rules:** Adjust event duration or add reschedule/cancellation options  
- **Notifications:** Add Slack or Telegram alerts for each new confirmed booking  
- **Email templates:** Customize the confirmation email with your brand style  

---

With this workflow, your website becomes an **AI-powered voice assistant** — capable of handling customer inquiries, providing multilingual support, and managing bookings seamlessly.

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/AI-Voice-Agent-25f3d6550fd9807cbf55e202138d5291?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
