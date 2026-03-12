# 💬 AI-powered Telegram & WhatsApp business agent workflow

> ⚡ **1,198 views** · 💬 [Support Chatbots](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

**Deliver seamless, AI-driven customer support on Telegram and WhatsApp—powered by GPT-4 Turbo and n8n.**

---

## 🌟 Key Features
- **Unified Messaging:** Receive and normalize messages from both Telegram (via Bot Trigger) and WhatsApp (via Webhook).  
- **Contextual AI Responses:** Build customer context from Google Sheets, then craft personalized replies with GPT-4 Turbo.  
- **Smart Routing:** Automatically detect platform and send replies with platform-appropriate formatting (HTML for Telegram, plain for WhatsApp).  
- **Intent Detection & Escalation:** Flag orders, appointments or complex queries and trigger Slack notifications for human handoff.  
- **Comprehensive Logging:** Append every interaction to a “conversations” sheet and upsert customer profiles in a “customers” sheet.  

## 📋 Prerequisites
1. **n8n instance** (self-hosted or n8n Cloud)  
2. **Credentials**:
   - OpenAI API key  
   - Telegram Bot Token  
   - WhatsApp Business API credentials (`WHATSAPP_PHONE_ID`)  
   - Google Sheets service-account credentials  
   - Slack Incoming Webhook URL  
3. **Google Sheets Setup**:
   - **customers** sheet with columns: `user_id`, `user_name`, `previousOrders`, `lastInteraction`, `preferences`, `conversationHistory`  
   - **conversations** sheet with columns: `user_id`, `user_name`, `platform`, `message`, `ai_response`, `timestamp`, `needs_escalation`, `is_order`, `is_appointment`  

## 🚀 Setup & Usage
1. **Import** the provided JSON into your n8n editor.  
2. **Configure** each node’s credentials in n8n’s Credentials panel.  
3. **Set** the following Workflow Variables:
   - `GOOGLE_SHEET_ID`  
   - `WHATSAPP_PHONE_ID`  
4. **Activate** the Telegram Bot Trigger and WhatsApp Webhook nodes.  
5. **Test** by messaging your bot on Telegram and WhatsApp.  

## 🔍 How It Works
1. **Trigger:** Listens for new Telegram updates or WhatsApp webhook calls.  
2. **Normalize Message:** Standardizes payload into `{ user_id, user_name, message_text, platform, chat_id, timestamp }`.  
3. **Get Customer Data:** Reads from “customers” sheet to fetch past history and order count.  
4. **Build AI Context:** Merges incoming message with customer info and history.  
5. **AI Assistant:** Sends context to GPT-4 Turbo (temperature 0.8, maxTokens 800).  
6. **Process Response:** Cleans formatting, identifies intents (order, appointment), and sets escalation flags.  
7. **Platform Router:** Routes reply to the appropriate “Send Telegram” or “Send WhatsApp” node.  
8. **Log Conversation:** Appends each message and response to the “conversations” sheet.  
9. **Update Customer:** Increments `previousOrders`, updates last interaction timestamp, and saves a snippet of the latest message.  
10. **Escalation:** If flagged, posts a formatted alert to your Slack channel for immediate attention.  

---
Empower your business with 24/7 AI-powered support—save time, increase conversions, and ensure no customer inquiry goes unanswered.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
