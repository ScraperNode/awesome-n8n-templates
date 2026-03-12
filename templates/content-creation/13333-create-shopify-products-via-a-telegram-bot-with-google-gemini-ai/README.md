# 🎬 Create Shopify products via a Telegram bot with Google Gemini AI

> ⚡ **36 views** · 🎬 [Content Creation & Video](../)

## Description

**Now you can create Shopify products remotely on your shop in just a few clicks!**

## How it works?

1. Telegram Trigger polls for actions done on the Telegram bot

2.  The callback query is checked for the abort command, and if it's not found, it moves to the switch node for the product creation process.

3. User is notified to enter the details required for product creation.

4. AI Agents create information required for Product Creation.

5. Product is created on the user's Shopify Store via API call

6. User is notified about product creation

## Setup Steps (20 Minutes)

1. Create a Telegram Bot
2. Create a Shopify API App and add it to your shop, and configure credentials on n8n
3. Get Gemini's / any other LLM's API credentials and add them to n8n
4. Create 2 Data Tables with specifications specified in the workflow.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Markdown, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
