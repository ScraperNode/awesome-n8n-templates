# 🤝 Create sales orders with Web POS interface, AI reports, Telegram alerts & sheets

> ⚡ **1,205 views** · 🤝 [CRM & Sales Operations](../)

## Description

# Smart POS System with Live Updates to Telegram & Sheets

This Smart POS (Point of Sale) System template provides a lightweight yet powerful sales management solution. It features a modern web based interface for placing orders, with **real time integration** to **Google Sheets** and **instant Telegram notifications**, enhanced by **AI-generated reports**.  
Ideal for small businesses, mobile vendors, or anyone who needs a quick and smart POS system.

## ✨ Key Features
- 🖥️ Modern web interface with product catalog and search
- 🛒 Cart system with quantity, price, and discount handling
- 🆔 Unique Sales ID generation for every transaction
- 📊 Google Sheets integration to store product and sales data
- 🤖 AI-generated sales summary via OpenRouter
- 🚀 Instant Telegram notifications for new orders

---

## 🔧 Requirements
- A Google Sheet to store products and sales data  
  👉 [Use this Google Sheets template to get started](https://docs.google.com/spreadsheets/d/YOUR_GOOGLE_SHEETS_ID/edit?usp=sharing)
- Telegram Bot Token and User ID  
  (Create a bot via [@BotFather](https://t.me/BotFather))
- OpenRouter API Key  
  (Sign up at [openrouter.ai](https://openrouter.ai) and use the LLM model)

---

## ⚙️ Setup Instructions
1. **Set Up Your Google Sheets**
   - Use the template and fill in product details in the `products` tab

2. **Configure Telegram Bot**
   - Create a bot via BotFather
   - Obtain your Bot Token and Chat ID (message the bot once to get ID)

3. **Set Up AI Agent**
   - In the AI agent node, replace the placeholder with your actual OpenRouter API Key

---

## 🚀 Deploy the Workflow
1. **Activate** the workflow in n8n
2. **Open** the webhook URL to access the POS interface
3. **Enter** product orders and customer details
4. **Submit** the order
5. **Receive** an instant Telegram notification with AI-generated sales summary
6. **Data** is automatically saved to Google Sheets for tracking and analysis

## 🔗 Nodes Used

Google Sheets, Webhook, Telegram, AI Agent, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
