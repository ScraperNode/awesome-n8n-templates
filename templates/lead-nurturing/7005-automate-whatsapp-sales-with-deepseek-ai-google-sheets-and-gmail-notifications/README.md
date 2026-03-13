# 💬 Automate WhatsApp sales with DeepSeek AI, Google Sheets and Gmail notifications

> ⚡ **232 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Turn WhatsApp Into a 24/7 AI Sales Assistant — n8n + DeepSeek + Sheets + Gmail

⚠️ **Self-Hosted n8n Only**

### Description

Turn your WhatsApp channel into a smart sales assistant! This workflow listens for inbound customer messages, looks up product data in Google Sheets, uses a DeepSeek Chat Model to answer in Saudi dialect, collects purchase details, and notifies your service rep only when the customer is ready to buy.

---

### 🔧 How to Install Community Nodes

Go to **Settings → Community Nodes**
Click **Install Node**, then add:

```bash
n8n-nodes-evolution-api
```

Restart n8n if prompted.

---

### 🔄 What This Workflow Does

1. **Webhook Listener**
   Captures inbound WhatsApp messages (`MESSAGES_UPSERT` via Evolution API).
2. **Filters**
   Ignores outbound (fromMe) and group (`@g.us`) messages.
3. **Data Extraction**
   Pulls the customer’s message and phone number.
4. **AI Response**
   Uses the **DeepSeek Chat Model** node to answer from your Google Sheets product list, greeting with “هلا وغلا” and speaking in Saudi dialect.
5. **Purchase Flow**
   Prompts for name, phone, and delivery/pickup date.
6. **Notify Sales**
   Sends an email via Gmail only when the customer requests to purchase.
7. **Context Memory**
   (Optional) Stores conversation history in Postgres for coherent multi-turn chats.

---

### 📸 Visual Preview

#### 🧩 Workflow 

![WhatsApp AI Product Bot.png](fileId:2316)

---

### 🛠️ Setup Instructions

1. **Evolution API Webhook**

   * In Evolution API dashboard → **Events → Webhook**
   * Enable only **MESSAGES\_UPSERT**
   * Set **Webhook URL** to:
     `https://your-n8n-domain/webhook/whatsAppListen`

2. **Google Sheets**

   * Create a spreadsheet (“You Conmanay Name Items”) with your product data [Item name, Item Model, Item Description, Item Components, Item Price, Item Availability, ...]
   * Connect your Google Sheets credentials in n8n

3. **DeepSeek Chat Model**

   * Configure your DeepSeek API credentials in the **DeepSeek Chat Model** node
   * Ensure the system prompt matches your company’s tone and data columns

4. **Gmail Notifications**

   * Add Gmail OAuth2 credentials to the **Send a message in Gmail** node
   * Customize subject and email template if needed

5. **Postgres Memory (Optional)**

   * Connect a Postgres instance in the **Postgres Chat Memory** node for session context

---

### 👥 Who Is This For?

* **E-commerce teams** automating first-touch customer replies
* **Sales reps** needing AI-driven chat support on WhatsApp
* **Businesses** using WhatsApp as a primary customer channel

---

### 🔐 Credentials Required

* Evolution API (webhook only)
* Google Sheets API
* DeepSeek API
* Gmail OAuth2
* Postgres (optional, for memory)

---

### 🏷 Tags

```
whatsapp bot, deepseek, google sheets, evolution api, gmail, postgres memory, ecommerce, sales automation, n8n template, no-code, ai, agent, ai agent
```

## 🔗 Nodes Used

Webhook, AI Agent, Postgres Chat Memory, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
