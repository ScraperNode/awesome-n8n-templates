# 💬 Build an AI agent for WhatsApp with WOZTELL and Google Gemini

> ⚡ **51 views** · 💬 [Support Chatbots](../)

## Description

## ✨ What this template does
This workflow automatically replies to incoming WhatsApp messages using AI.

When a customer sends a text message, the workflow retrieves the recent conversation history, generates a professional AI reply based on context, and sends it back through WOZTELL.

Use this to provide instant automated responses without live agents.

## 👷 Who it’s for
Ideal for businesses that receive frequent WhatsApp inquiries and want automated, context aware replies without manual handling. Suitable for teams looking to reduce response workload using AI.

## ⚙️ How it works
1. Receives an incoming WhatsApp message via webhook.
2. Checks that the message is a text message and not handled by live chat.
3. Retrieves the recent conversation history.
4. Formats the conversation for AI analysis.
5. Generates a professional reply using Google Gemini.
6. Sends the reply back to the customer.

## 🧭 How to use
1. Import the template into your n8n workspace.
2. Copy the webhook Production URL into your WOZTELL inbound webhook settings.
3. Connect your WOZTELL credentials.
4. Connect your Google Gemini API credentials.
5. Activate the workflow.

## 🧩 Requirements
- n8n account
- WOZTELL account with WhatsApp channel configured
- Google Gemini API key

## 🧠 Customization ideas
- Modify the AI system prompt to match your brand tone and response style
- Add additional IF nodes for routing logic, keyword detection, or data validation
- Replace the AI provider with another supported model instead of Google Gemini
- Customize the WOZTELL message format, tone rules, or response structure

## 🤖About WOZTELL
This template uses WOZTELL to connect n8n with the official WhatsApp Business Platform, allowing you to send and receive WhatsApp messages through approved templates and automation workflows.

You can create a WOZTELL account and register a WhatsApp Business API account for free.

1. Sign up [here](
https://platform.woztell.com/signup?lang=en&utm_campaign=plugin-n8n&utm_medium=plugin-n8n&utm_source=N8N)
2. Verify your email and complete your account setup.
3. Follow the WhatsApp Business API [setup guide](
https://doc.woztell.com/docs/procedures/basic-whatsapp-chatbot-setup/standard-procedures-wa-connect-waba/)

Once your WhatsApp Business account is connected and message templates are approved, you can activate this workflow.

## 🚀 More templates
We’re continuously building more WOZTELL n8n templates. Check our n8n profile to explore the latest workflows.

## 🔗 Nodes Used

Webhook, Filter, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
