# ⚡ AI-powered Gmail and Calendar assistant with Gemini chat interface

> ⚡ **678 views** · ⚡ [Personal Productivity](../)

## Description

⚠️ **Disclaimer:** This workflow uses Google Calendar and Gmail nodes which you will have to configure yourself  

## Who’s it for
Anyone who wants an **AI-powered personal assistant** that can handle Gmail and Google Calendar tasks through a simple webhook. This is useful for developers, small teams, and productivity enthusiasts who want to connect a chatbot (Discord, Telegram, WhatsApp, or custom frontends) to their email and calendar.

## How it works / What it does
This workflow acts as a **chat-based AI assistant**. You send text requests through a webhook (e.g., from a chatbot), and the AI agent interprets them to take actions like:

- 📧 Sending emails in Gmail  
- 📥 Reading and summarizing your emails  
- 📅 Checking your Google Calendar events  
- ✅ Checking your availability before booking  
- 📝 Creating new calendar events with Google Meet links  
- ✏️ Updating existing events  
- ⏰ Converting natural time expressions like “tomorrow at 3 PM” into exact timestamps  

The AI agent is powered by the **Google Gemini Chat Model (or any LLM you choose)** and follows strict guardrails:
- Confirms actions before executing  
- Asks for clarification if details are missing  
- Prevents double-booking by checking availability  

## How to set up
1. Import this workflow into n8n.  
2. Set up credentials for:  
   - Gmail (OAuth2)  
   - Google Calendar (OAuth2)  
   - AI provider (Gemini, OpenAI, Claude, etc.)  
3. Configure the webhook node (`/chat`) as your chatbot endpoint.  
   - You can connect it to Discord, WhatsApp, Telegram, or a frontend app.  
4. Customize the AI Agent’s system prompt if you want to tweak tone or rules.  
5. Deploy and start sending messages like:  
   - “Check my emails from today”  
   - “Schedule a meeting with John tomorrow at 3 PM”  
   - “Email my team about the deadline extension”  

## Requirements
- n8n installed and running (cloud or self-hosted)  
- Gmail and Google Calendar accounts with API access  
- API key for your chosen AI provider
- [Webhook Chatbot interface](https://github.com/Praneel7015/webhook-chatbot-interface)  

## How to customize
- Swap **Google Gemini** with another LLM node (e.g., OpenAI GPT or Anthropic Claude).  
- Add more tools (e.g., Slack, Notion, Trello) to extend capabilities.  
- Adjust memory length in the **Simple Memory** node.  
- Modify sticky notes with instructions tailored to your use case.  

## Disclaimer
- This workflow uses the **community webhook entry point**, so it is best suited for **self-hosted n8n instances**.  
- Do not hardcode API keys or sensitive credentials. Always use n8n’s **Credentials** system.  
## Other Details
Thanks for viewing this automation!
Feel Free to contact me at [praneel.tech](https://www.praneel.tech)
Also Use [my Webhook chatbot interface](https://github.com/Praneel7015/webhook-chatbot-interface) Which is configured perfectly for n8n Automations!

## 🔗 Nodes Used

Webhook, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
