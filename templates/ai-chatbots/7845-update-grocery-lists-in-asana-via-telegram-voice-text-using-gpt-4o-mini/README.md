# 🤖 🍎 Update grocery lists in Asana via Telegram voice & text using GPT-4o mini

> ⚡ **404 views** · 🤖 [AI Chatbots & Agents](../)

## Description

This n8n workflow demonstrates how to use AI to update your grocery list in Asana via Telegram chat or voice. 

## Use cases
- Update grocery list details in Asana eg. check or uncheck the items, update expiry dates, update quantities etc.

## How it works
- Instruct telegram bot (via chat or voice) to update a grocery item using natural language. For example, "we just bought 10 cartons of milk that expires in 6 months".
- If via text, just the text message will be sent to the Grocery Agent.
- If via voice, voice file will be downloaded then transcribed into text using OpenAI.
- Once Grocery agent receives the text, it will search the item in your grocery list in Asana. It will then check the item since it's bought, and update the quantity and expiry date accordingly.
- Once task is done, it will respond with the changes it made and insert a hyperlink to Asana if you want to see it.

## How to set up
- Set up Telegram bot via Botfather. See setup instructions [here](https://core.telegram.org/bots/tutorial) 
- Setup OpenAI API for transcription services (Credits required) [here](https://openai.com/index/openai-api/)
- Set up Openrouter account. See details [here](https://openrouter.ai/docs/api-reference/authentication)
- Set up Asana API using the account where you have your grocery list set in. See details [here](https://developers.asana.com/docs/api-explorer)

## Customization Options
- You can have other custom fields you use to track other than expiry dates or quantity. For example, food type, date purchased etc. 

## Requirements
- Asana account where you manage your grocery list
- Telegram bot
- Open AI account
- Open Router account

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Call n8n Workflow Tool, OpenAI, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
