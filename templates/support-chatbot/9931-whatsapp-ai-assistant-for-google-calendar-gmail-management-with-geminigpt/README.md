# 💬 WhatsApp AI assistant for Google Calendar & Gmail management with Gemini/GPT

> ⚡ **982 views** · 💬 [Support Chatbots](../)

## Description

⚠️ **Disclaimer:** This workflow uses WhatsApp, Google Calendar, and Gmail nodes that must be configured manually.  

## Who’s it for  
This workflow is built for professionals, teams, and automation enthusiasts who want to **manage their Google Calendar and Gmail directly from WhatsApp**, powered by an AI assistant using OpenAI GPT or Google Gemini. It enables users to chat naturally through WhatsApp to schedule meetings, send emails, and check events — all without opening Gmail or Google Calendar.  

## How it works  
- The **WhatsApp Trigger** node captures incoming messages from users.  
- The **AI Agent** (powered by Gemini or GPT) interprets user queries and determines the best tool to use.  
- The **Simple Memory** node keeps context between messages using the user’s phone number.  
- The **Google Calendar nodes** handle:  
  - Listing, creating, and updating events.  
  - Checking your availability before scheduling.  
- The **Gmail nodes** handle:  
  - Sending emails.  
  - Reading and summarizing recent messages.  
- The **Date & Time node** converts natural language like “next Monday at 3 PM” into proper ISO time format.  
- The assistant responds via **Send WhatsApp Response**, sending clear confirmations and replies.  

## Features  
- Manage Gmail and Calendar entirely via WhatsApp.  
- AI-powered understanding of natural language commands.  
- Integrated with Google Meet for automatic conferencing links.  
- Short-term memory for context retention.  
- Fully modular – swap Gemini with OpenAI GPT or any LLM.  

## Setup Steps  
1. Configure WhatsApp Cloud API via Meta for Developers.  
2. Set up Google Calendar and Gmail OAuth2 credentials.  
3. Add your Google API keys and calendar email.  
4. Connect your OpenAI or Gemini model credentials.  
5. Activate and test the workflow with messages like:  
   - “Schedule a meeting tomorrow at 5 PM.”  
   - “Check my latest emails.”  
   - “Send an email to alex@example.com about our project.”  

## Requirements  
- n8n instance (self-hosted or cloud)  
- WhatsApp Business API (Meta Developer Account)  
- Google Workspace or Gmail account  
- OpenAI API key or Google Gemini API key  
- Properly configured webhooks for WhatsApp Trigger  

## Example Prompts  
- “What’s on my calendar this week?”  
- “Email John to confirm our meeting.”  
- “When am I free tomorrow afternoon?”  

## Customization  
- Replace Gemini with OpenAI GPT in the AI Agent node.  
- Adjust memory length for longer or shorter conversations.  
- Add Slack or Teams notification nodes.  
- Modify the prompt personality or response tone.  

## Credits  
Created by [Praneel](https://www.praneel.tech)  
For detailed setup help, visit [praneel.tech/contact](https://www.praneel.tech/contact)

## 🔗 Nodes Used

WhatsApp Business Cloud, AI Agent, Simple Memory, WhatsApp Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
