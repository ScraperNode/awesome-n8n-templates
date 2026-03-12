# 💬 Build a WhatsApp customer support bot with OpenAI and CRM integration

> ⚡ **123 views** · 💬 [Support Chatbots](../)

## Description

## Full Customer Support WhatsApp AI Bot (Self-Hosted, Evolution API)

### 🧑‍💼 Who’s it for

This template is for businesses using **WhatsApp for customer communication** who want to automate support using AI and real-time CRM data — especially in **retail, food & beverage, e-commerce, or service sectors**.
It’s ideal for **self-hosted n8n** users with access to **OpenAI** and a **CRM with API endpoints**.

---

## 💡 What It Does

This workflow creates a **multi-intent AI chatbot** that handles WhatsApp conversations and connects to your CRM using HTTP APIs. It uses **LangChain’s AI Agent** to dynamically classify and respond to customer queries in real time.

### 🔄 Supported Use Cases:

* 📍 Branch inquiries (nearest location, hours, contact)
* 🍰 Menu & product info (availability, categories, images)
* 🛒 Order creation & tracking
* ⚠️ Complaint submission and follow-up
* ⭐ Loyalty points lookup
* ✨ Concierge & custom orders

Each user message is routed using AI to the appropriate path, where a tailored system prompt and real-time API call generate a smart, emoji-rich reply.

---

## 🚀 Key Advantages

* **Plug-and-play AI support bot** with 6 distinct customer intents
* **No code logic building** — uses natural language instructions via LangChain
* **Connects to your CRM** using `httpRequestTool` nodes
* **Smart classification** with OpenAI (via LangChain agent)
* **Sticky notes and prompt modularity** for easy customization
* **Real-time replies** using dynamic data from your API
* **Short, branded, emoji-friendly replies** with support for Arabic NLP patterns

---

## 🔧 How It Works

1. 🧲 A **Webhook** (via `evolution-api` node) receives incoming WhatsApp messages.
2. 🧠 An **AI Router Agent** classifies the message intent using GPT-4.
3. 🧰 Based on the intent, a specific **system prompt** is injected.
4. 🧠 A **LangChain Agent** uses tools (CRM APIs) to fetch data.
5. 💬 A final reply is generated and sent back via WhatsApp.

Everything is modular, explainable, and built with clarity in mind using **sticky notes** and renamed nodes.

---

## 🛠️ Requirements

* ✅ Self-hosted n8n (required for community nodes)
* ✅ `evolution-api` node (for WhatsApp messaging)
* ✅ OpenAI API Key
* ✅ Your own CRM HTTP API endpoints for:

  * Order creation/status
  * Menu & category lookup
  * Complaints
  * Branch search
  * Loyalty points

---

## ⚙️ Setup Instructions

1. 🔌 Install the `evolution-api` node via n8n community nodes.
2. 🔐 Replace all `YOUR_AUTHORIZATION_TOKEN_HERE` with your real credentials.
3. 🧠 Add your OpenAI credentials in n8n.
4. 🛠️ Update all CRM URLs to point to your environment.
5. 📲 Connect the webhook URL to your WhatsApp provider.

---

## 🎨 How to Customize

* Edit the **intent categories** in the AI router prompt.
* Modify each **system prompt** for tone, brand, or language (supports Arabic).
* Add more tools or branches (e.g., shipping, feedback, upselling).
* Use n8n’s credentials manager for production security.

---

## 🧠 User Experience & Design

* Sticky notes provide full visual explanation of logic.
* Prompts ensure short, relevant, context-aware replies.
* User session memory improves continuity across messages.
* Optimized for performance and ease of onboarding.

---

## 🔍 SEO Tags

`whatsapp support bot`, `n8n chatbot`, `gpt-4 ai support`, `langchain agent`, `self-hosted n8n`, `crm integration`, `customer support automation`, `evolution-api`, `loyalty bot`, `menu chatbot`, `orders automation`, `arabic whatsapp bot`, `real-time crm bot`, `openai n8n workflow`

## 🔗 Nodes Used

Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
