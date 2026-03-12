# 🤝 Manage WooCommerce store operations via AI Telegram bot with OpenRouter

> ⚡ **663 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Who’s it for
This template is built for WooCommerce store owners, eCommerce managers, and automation agencies who want to manage store operations directly from Telegram using an AI assistant. It’s ideal for users looking to save time, automate support, and access store data conversationally.

## How it works
When a user sends a message via Telegram, the workflow triggers an AI agent that understands the request using a chat model with memory. Based on the intent, the agent executes the appropriate action such as retrieving orders, fetching product data, updating product information, logging data into Google Sheets, or sending email notifications.

## How to set up
1. Connect your Telegram bot credentials  
2. Add your WooCommerce API keys  
3. Connect Google Sheets for data storage  
4. Connect your Gmail account  
5. Configure your OpenRouter or OpenAI API key  
6. Test the workflow via Telegram commands  

## Requirements
- WooCommerce store with API access  
- Telegram bot token  
- Google Sheets account  
- Gmail credentials  
- OpenRouter or OpenAI API key  

## How to customize
You can expand this agent by adding tools like order creation, refund processing, CRM integrations, shipping updates, or advanced reporting. The AI prompt can also be modified to match your store operations.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
