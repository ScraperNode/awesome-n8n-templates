# 🎫 Summarize and answer Re:amaze support emails with Gemini and SOP knowledge base

> ⚡ **137 views** · 🎫 [Ticket Management & Triage](../)

## Description

This template demonstrates an AI-powered email automation system for Re:amaze, summarizing and responding to customer inquiries using a structured knowledge base to ensure accurate and consistent replies.

🔹 Ideal for:
- Customer support teams handling high volumes of email queries (e.g., e-commerce, SaaS)
- Businesses looking to automate SOP-based responses with AI while integrating actions like order lookup or issue logging

### What this workflow does
- Fetches incoming customer emails from Re:amaze
- Filters only customer messages (ignores agent replies)
- Classifies email intent (e.g. security, pricing, setup etc.)
- Matches the request against a structured SOP knowledge base
- Generates a response using AI based strictly on SOP
- Sends reply back to the customer automatically


### Key Features:
- Prevents duplicate replies using deduplication logic
- Ensures responses follow SOP (reduces hallucination)
- Scalable for high-volume email handling

### Requirements
- Re:amaze API access (for fetching & replying to conversations)
- AI model (e.g., OpenAI / Gemini configured in n8n)
- SOP knowledge base (Google Sheets or Code tool)

### How to set up
1. Add your Re:amaze API credentials in HTTP nodes

To get the API Key, you have to login to the Re:amaze plateform(https://www.reamaze.com/)

Here is the API documentation -https://www.reamaze.com/api/get_messages

2. Configure your AI model credentials
3. Connect your SOP knowledge base (Google Sheets or internal tool)
4. Test the workflow using sample customer emails

🚀 This template can be extended to support multi-channel support (chat, tickets, etc.)

### Need Help?
ask in the [Forum](https://community.n8n.io/)!

Happy Hacking!

## 🔗 Nodes Used

HTTP Request, AI Agent, Structured Output Parser, Code Tool, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
