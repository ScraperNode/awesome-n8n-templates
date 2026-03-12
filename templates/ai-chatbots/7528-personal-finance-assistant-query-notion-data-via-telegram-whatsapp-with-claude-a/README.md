# 🤖 Personal finance assistant: Query Notion data via Telegram & WhatsApp with Claude AI

> ⚡ **1,701 views** · 🤖 [AI Chatbots & Agents](../)

## Description

## Query personal finance data in Notion via Telegram and WhatsApp

### Who’s it for
This workflow is for individuals who track their finances in Notion and want quick answers via chat. Entrepreneurs, freelancers, and professionals can use it to check expenses, income, or budgets instantly without opening Notion.

### How it works
The workflow acts as an **Accountant Agent** powered by Claude AI through OpenRouter. When you send a query like *“Total expenses for August 2025”* through Telegram or WhatsApp, the agent identifies the right Notion database, applies filters, and retrieves the requested data. It then replies with a summarized result directly to your phone.

### How to set up
1. **Clone the [Personal Finance System Notion template](https://www.notion.so/templates/personal-finance-system)** into your workspace.  
2. Create a Telegram bot with BotFather and collect the bot token and chat ID.  
3. Get an API key from OpenRouter.  
4. Create a Notion integration token and connect it with your duplicated finance template.  
5. Set up WhatsApp Business credentials via Meta (WABA ID, Phone Number ID, and permanent access token).  

### Requirements
- n8n instance (self-hosted or cloud)  
- Accounts on Telegram, OpenRouter, Notion, and WhatsApp Business  
- Your duplicated **Personal Finance System Notion template**  

### How to customize the workflow
You can extend the workflow to handle assets, liabilities, or budgets. Add more Notion databases, adjust query filters, or configure WhatsApp templates for automated financial updates.

## 🔗 Nodes Used

Telegram, Telegram Trigger, WhatsApp Business Cloud, AI Agent, Simple Memory, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
