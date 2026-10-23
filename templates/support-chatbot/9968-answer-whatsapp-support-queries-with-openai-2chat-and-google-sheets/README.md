# 💬 Answer WhatsApp support queries with OpenAI, 2Chat and Google Sheets

> ⚡ **85 views** · 💬 [Support Chatbots](../)

## Description

###  This n8n template demonstrates how to build an **AI-powered WhatsApp customer support chatbot** using **2Chat** for WhatsApp integration and **OpenAI** for natural language understanding. The chatbot is designed to answer customer inquiries about products and business information by querying **Google Sheets** for relevant data.

**Good to know**
- This workflow uses **2Chat** to connect with WhatsApp, so you’ll need a 2Chat account and a connected WhatsApp number.
- OpenAI’s API is used for AI responses, so you’ll need an OpenAI API key.
- The chatbot retrieves product and business information from **Google Sheets**, so ensure your sheets are properly formatted and accessible.
- Costs depend on your OpenAI usage, 2Chat pricing tier, and Google Sheets access.

---
### How it works
- **Trigger:** The workflow starts when a new WhatsApp message is received via **2Chat**.
- **AI Agent:** The chatbot uses an **AI Agent powered by OpenAI** to understand the customer’s query and determine the context (product or business-related).
- **Data Lookup:**
  - If the query is about **products**, the AI Agent searches a designated **Google Sheet** for relevant product information.
  - If the query is about **business information**, the AI Agent searches another **Google Sheet** for the most appropriate response.
- **Response Generation:** The AI Agent crafts a response based on the retrieved data.
- **Reply:** The response is sent back to the customer via WhatsApp using **2Chat’s Send WhatsApp Message** node.

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
