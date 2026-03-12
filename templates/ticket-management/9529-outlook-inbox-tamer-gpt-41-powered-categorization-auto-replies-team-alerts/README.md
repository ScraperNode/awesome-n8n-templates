# 🎫 Outlook inbox tamer: GPT-4.1 powered categorization, auto replies & team alerts

> ⚡ **358 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Outlook Inbox Tamer: AI-Powered Categorization, Auto Replies & Team Alerts

This workflow automatically classifies and routes incoming **Outlook emails** into smart categories using **n8n + OpenAI GPT-4.1-mini**.  
It helps professionals and teams stay organized by intelligently sorting and responding to high-priority messages, customer support emails, promotions, and finance-related messages — all without manual effort.

---

## 🧠 Who’s It For
- Professionals or teams overwhelmed by email volume.  
- Customer support, operations, or finance teams needing real-time triage.  
- Anyone who wants AI to help manage and prioritize their Outlook inbox.

---

## ⚙️ How It Works
1. **Microsoft Outlook Trigger** monitors your inbox for new emails.  
2. **OpenAI GPT-4.1-mini** analyzes each email and classifies it as one of:  
   - High_Priority  
   - Customer_Support  
   - Promotions  
   - Finance/Billing  
3. **Routing node** moves emails to matching Outlook folders.  
4. AI-generated replies and **Telegram notifications** keep the right team informed instantly.  
5. (Optional) Use **Google Sheets + Manual Trigger** to test with sample data before going live.

---

## 🛠️ Requirements
- Outlook account connected via **Microsoft Outlook OAuth2**.  
- **OpenAI API key** (set up in n8n credentials).  
- (Optional) **Telegram bot token** for team alerts.  
- (Optional) **Google Sheets** for test emails.

---

## 🔧 How to Set Up
1. Import the workflow into your n8n instance.  
2. Add credentials for:
   - Microsoft Outlook  
   - OpenAI  
   - Telegram (optional)  
3. Deploy and activate the workflow.  
4. Start sending or receiving emails — watch them get auto-classified and organized!

---

## 🧩 How to Customize
- Update the **system prompt** in the **Email_Classifier_Agent** to add more categories (like HR, Legal, etc.).  
- Change Telegram recipients for alerts.  
- Extend the workflow to post classified data into Notion, Slack, or CRM.

---

## 📘 Example Use Case
An AI agent monitors your Outlook inbox, classifies incoming emails in real time, moves them to their respective folders, creates response drafts, and alerts your team instantly through Telegram.

---

## 💬 Connect with the Creator
👋 Created by **Sandeep Patharkar**  
💼 [Connect on LinkedIn](https://www.linkedin.com/in/sandeeppatharkar/)  
🌐 [Join my Skool community](https://www.skool.com/n8n-ai-automation-champions) for n8n + AI automation tutorials, live Q&As, and exclusive workflow templates.

---

**Category:** Email Automation / AI Productivity  
**Difficulty:** Intermediate  
**Estimated Setup Time:** ⏱️ 10–15 minutes

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Microsoft Outlook, Microsoft Outlook Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
