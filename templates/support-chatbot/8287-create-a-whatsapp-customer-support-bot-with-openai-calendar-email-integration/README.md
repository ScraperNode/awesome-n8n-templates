# 💬 Create a WhatsApp customer support bot with OpenAI, calendar & email integration

> ⚡ **1,971 views** · 💬 [Support Chatbots](../)

## Description

### Who’s it for  
This template is for businesses, customer support teams, and professionals who want to deliver **AI-powered WhatsApp assistance**. It helps automate conversations, schedule meetings, answer FAQs, and send follow-up emails — all from WhatsApp.  

### How it works  
- A customer sends a WhatsApp message, which is captured by the **Twilio Trigger**.  
- The incoming text is formatted and passed to the **AI Support Agent**.  
- Based on the request, the agent can:  
  - Manage Google Calendar events (create, list, delete).  
  - Answer questions from your knowledge base (Supabase + embeddings).  
  - Draft and send emails via Gmail.  
  - Reply directly on WhatsApp with the appropriate response.  

### How to set up  
1. Connect your **Twilio account** with WhatsApp enabled.  
2. Add your **OpenAI API key**.  
3. Connect **Google Calendar**.  
4. Connect **Gmail**.  
5. Configure **Supabase** for knowledge base storage.  

### Requirements  
- Twilio account (with WhatsApp number)  
- OpenAI API key  
- Google Calendar  
- Gmail account  
- Supabase project  

### How to customize  
- Update the **Set Fields node** with your Twilio number, API keys, and Gmail details.  
- Add custom documents to Supabase for domain-specific FAQs.  
- Adjust AI prompts for different roles (e.g., booking bot, HR assistant, customer support).  
- Extend by adding more tools (CRM, Slack, Notion, etc.) as needed.  

![Whatsapp Text Agent.png](fileId:2315)

## 🔗 Nodes Used

Twilio, Execute Workflow Trigger, AI Agent, Embeddings OpenAI, OpenAI Chat Model, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
