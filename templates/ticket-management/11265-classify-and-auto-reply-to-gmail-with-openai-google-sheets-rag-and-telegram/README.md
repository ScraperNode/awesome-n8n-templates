# 🎫 Classify and auto-reply to Gmail with OpenAI, Google Sheets RAG and Telegram

> ⚡ **17 views** · 🎫 [Ticket Management & Triage](../)

## Description

# 📨 Gmail Classifier —Classify emails using AI and automate responses

This workflow delivers a complete, enterprise-grade Gmail automation system designed for high-volume teams. It classifies incoming emails, applies labels, generates AI-powered responses, and routes messages to the right department. It also includes optional demo email generation and an inbox cleanup utility so teams can test the workflow instantly.

## 🚀 What This Workflow Does
- Classifies Gmail messages into **High Priority**, **Customer Support**, **Promotions**, or **Finance/Billing**
- Generates AI-written replies or drafts based on category
- Applies Gmail labels automatically
- Uses RAG from Google Sheets for Support queries
- Sends real-time internal notifications (Telegram)
- Includes tools to generate & delete test emails for repeatable QA

## 🏢 Who This Is For
Teams that want **reliable, automated inbox management**:
- Customer Support  
- Sales  
- Billing & Finance  
- Operations  
- Solo founders who need executive inbox automation  
- AI-powered enterprise workflows using Gmail

## 🧩 Internal Workflow Overview
1. **Gmail Trigger** pulls unread emails from the inbox  
2. **Email Classifier Agent** (OpenAI) cleans + classifies the email  
3. **Switch Node** routes to the correct workflow lane  
4. Labels are added → AI responders generate the message → internal teams get notified  
5. Optional: Demo email generator + inbox cleanup for testing

## 🛠️ How to Set Up
1. Add credentials:  
   - Gmail OAuth2  
   - OpenAI / Gemini  
   - Google Sheets OAuth2  
2. Copy the demo sheet:  
   **https://docs.google.com/spreadsheets/d/1A959skQt0a7RbdsD0IGaCbPxMv4a-HjmQL4hwB9TcXc/edit?usp=sharing**  
3. Update the Google Sheets nodes with your Document ID + Sheet Name  
4. Enable **Gmail Trigger** (UNREAD filter recommended)  
5. Use “Send Demo Emails” → test end-to-end behavior  
6. Run the Gmail Classifier workflow live

## 📦 Requirements
- Gmail API access  
- OpenAI/Gemini API key  
- Google Sheets OAuth (for RAG/lookup)  
- n8n (latest recommended version)

## 🎯 Ideal Enterprise Use Cases
- Automated customer support with AI-written replies  
- High-priority routing for executives  
- Finance & billing summarization for operations  
- Filtering promotions/marketing noise from shared inboxes  
- AI-augmented helpdesk workflows

## 🧪 Test Data Included
Use the Demo Sheet tabs:
- **Sample_Emails** → pre-written emails for every category  
- **Demo_Emails** → rows sent as live test emails  

Copy → paste → run.

## 🔖 Tags
Gmail, AI, Inbox Automation, Support Automation, Enterprise, Email Classification, OpenAI, RAG, Google Sheets

---

**Template Author:** Sandeep Patharkar  
LinkedIn: https://www.linkedin.com/in/sandeeppatharkar  
Skool: https://www.skool.com/aic-plus

## 🔗 Nodes Used

Google Sheets, Telegram, Gmail, Gmail Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
