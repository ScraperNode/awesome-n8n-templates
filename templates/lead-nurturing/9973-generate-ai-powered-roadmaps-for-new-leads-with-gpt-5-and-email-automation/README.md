# 💬 Generate AI-powered roadmaps for new leads with GPT-5 and email automation

> ⚡ **346 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## How it works  
This workflow automates the delivery of personalized, AI-generated reports or roadmaps for new leads.  
When someone submits their information through a form, the workflow:  
1. Captures and stores the lead data.  
2. Uses an AI model to generate a customized report or roadmap.  
3. Formats the output into a professional, email-ready HTML document.  
4. Sends the report automatically to the lead via email.  
5. Optionally sends internal notifications (e.g., via chat or email) for tracking and follow-up.  

The process eliminates manual work and ensures every lead receives instant, high-quality output tailored to their input.

---

## Setup steps  
1. **Webhook** – Connect your form or website to the webhook endpoint to receive lead data.  
2. **Data Table** – Create or link a table to store incoming leads and track delivery status.  
3. **AI Configuration** – Add your OpenAI (or compatible) API credentials and customize prompts for your desired output.  
4. **Email Setup** – Configure SMTP credentials and define sender/recipient addresses for report delivery.  
5. **Notifications** – Optionally connect a chat or messaging service (e.g., Telegram) for internal alerts.  
6. **Activation** – Test the workflow, confirm the data flow and email delivery, then activate it for live use.  

---

This workflow transforms manual lead engagement into a fully automated, AI-driven experience that delivers instant, personalized value to every new contact.

## 🔗 Nodes Used

Send Email, Webhook, Telegram, AI Agent, OpenAI Chat Model, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
