# 💬 Build a Telegram chatbot with Gemini

> ⚡ **2,779 views** · 💬 [Support Chatbots](../)

## Description

## Overview
- This workflow connects a Telegram bot to OpenAi/Google Gemini (PaLM API) so the bot can reply to users with AI-generated answers.
- Useful for FAQs, assistants, classroom helpers, or bots that fetch document content to answer questions.

Who is this for
- Educators, creators, developers, and support teams who want a low-code Telegram chatbot powered by Gemini.

What it does (quick)
- Listens for messages sent to your Telegram bot.
- Sends incoming text to Google Gemini and receives a generated reply.
- Optionally fetches content from Google Docs or an external API to enrich replies.
- Sends the reply back to the original Telegram user.
- Processes messages in batches and adds short delays to avoid spamming.

Quick setup (5 steps)
1. Create a Telegram bot with @BotFather and copy the bot token.  
2. Add Telegram credentials to n8n (Telegram node).  
3. OpenAi API key and add it to n8n.
3. Get a Google Gemini (PaLM) API key and add it to n8n.  
4. (Optional) Connect Google Docs OAuth2 if you want the bot to read documents.  
5. Activate the workflow and test by messaging the bot.

Required items
- Telegram bot token
- OpenAi API key
- Google Gemini (PaLM) API key
- n8n instance with Telegram and HTTP nodes enabled
- (Optional) Google Docs OAuth2 credential

How it works (step-by-step)
1. Telegram message arrives → Trigger node.  
2. Workflow extracts message and user info.  
3. (Optional) Pull supporting content from Google Docs or an API.  
4. Send prompt + context to Gemini → receive reply.  
5. Send reply back to the Telegram user.  
6. Add small delays and batch processing to handle volume safely.

How to customize
- Edit the Gemini prompt to change response style and behavior.  
- OpenAi Chat model
- Switch Gemini model (Flash vs Pro) for speed vs. quality.  
- Add conditions (If / Switch) to route different inputs to different behaviors.  
- Append more data sources (Sheets, external APIs) to enrich replies.  
- Add error handling to retry or log failed requests.

Testing checklist
- Send a test message to the bot and confirm a reply.  
- If using Google Docs, confirm the bot can read the target document.  
- Check logs and node outputs in n8n for any errors.

Tips and best practices
- Keep prompts concise and include only needed context to reduce costs.  
- Use rate limiting (Wait node) and batching to avoid API throttling.  
- Store API keys securely in n8n credentials.  
- Start with small tests before enabling automated production runs.

## 🙋 For Help & Community
- 👾 Discord: [n8n channel](https://discord.gg/9SDFKGnh2Y)
- 🌐 Website: [devcodejourney.com](https://devcodejourney.com)
- 🔗 LinkedIn: [Connect with Shakil](https://www.linkedin.com/in/shakilpg/)
- 📱 WhatsApp Channel: [Join Now](https://whatsapp.com/channel/0029Vb5l6JuDTkK5BRORNn0B)
- 💬 Direct Chat: [Message Now](https://wa.me/8801316320957)

## 🔗 Nodes Used

Telegram, Telegram Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
