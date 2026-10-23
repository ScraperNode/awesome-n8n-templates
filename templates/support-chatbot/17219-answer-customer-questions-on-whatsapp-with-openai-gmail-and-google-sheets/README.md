# 💬 Answer customer questions on WhatsApp with OpenAI, Gmail, and Google Sheets

> ⚡ **390 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow answers incoming WhatsApp customer questions using an OpenAI-powered agent that reads your live website via HTTP requests, escalates unclear or sensitive cases to your support team via Gmail, and logs each conversation to Google Sheets.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Loads configuration values (company name, website root URL, AI model, language rules, escalation email, and WhatsApp phone number ID) and extracts the customer phone number and message text.
3. Ignores non-text WhatsApp updates (such as images, audio, and status messages).
4. Uses OpenAI with conversation memory to navigate your website by listing links and fetching relevant pages, then generates a structured result containing an answer, escalation flag, sentiment, topic, and source URLs.
5. If the agent marks the request as needing a human, sends an escalation email via Gmail to your support address with the customer details and the drafted reply.
6. Sends the final plain-text reply back to the customer on WhatsApp.
7. Appends the conversation details to a Google Sheets log.

## Setup
1. Connect credentials for WhatsApp Trigger/WhatsApp Cloud API, OpenAI, Gmail, and Google Sheets.
2. In the Configuration step, set your company_root_url, support_email, whatsapp_phone_number_id, and optionally adjust ai_model, output_language, memory_context_length, and max_pages_per_answer.
3. In Google Sheets, select the target spreadsheet and worksheet for logging and ensure it has columns to store the conversation fields you want to capture.
4. Configure your Meta WhatsApp webhook to point to the workflow’s WhatsApp trigger URL, then activate the workflow and test by sending a text message to your WhatsApp number.

## Additional info
# Answer customer questions on WhatsApp with an AI agent that reads your website
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Answer-customer-questions-on-WhatsApp-with-an-AI-agent-that-reads-your-website-39d3d6550fd981c18370d13c840d1e11)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, Gmail, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
