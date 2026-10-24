# 💬 Handle e-commerce WhatsApp support with OpenAI, WooCommerce, and Notion

> ⚡ **89 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow receives inbound WhatsApp messages via Whapi, screens them with OpenAI-powered guardrails, and replies using an OpenAI support agent that can search a Notion knowledge base, look up live WooCommerce orders/products/customers, and escalate complex cases to a human via Gmail.

## How it works
1. Receives an incoming WhatsApp message via a webhook endpoint configured in Whapi.
2. Extracts key settings and message fields (sender phone, type, text, thresholds, and escalation email) and stops non-text requests by replying with a “text only” message.
3. Uses OpenAI guardrails to detect jailbreak attempts, NSFW content, and off-topic requests, and sends a policy-violation reply when the message is unsafe.
4. Passes safe customer messages to an OpenAI agent with conversation memory keyed to the customer phone number.
5. The agent answers by searching policies and FAQs in Notion and fetching real-time order, product, and customer data from WooCommerce when needed.
6. If the agent decides the issue needs a human, it emails the escalation details to the support manager through Gmail.
7. Sends the agent’s final response back to the customer on WhatsApp via the Whapi API.

## Setup
1. Create a Whapi account, connect your WhatsApp number, and configure Whapi to POST incoming messages to this workflow’s webhook URL.
2. Add OpenAI API credentials and choose the model to use in the workflow’s configuration values.
3. Add WooCommerce REST API credentials (consumer key/secret) and ensure your store API access is enabled.
4. Add a Notion API connection and ensure your support knowledge base exists as searchable Notion pages.
5. Add a Gmail OAuth2 connection and set the support manager email address in the Configuration values for escalations.

## Additional info
# Handle e-commerce customer support on WhatsApp with AI, WooCommerce and Notion
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Handle-e-commerce-customer-support-on-WhatsApp-with-AI-WooCommerce-and-Notion-39f3d6550fd98156b224eeea65e06c93)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, OpenAI Chat Model, Simple Memory, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
