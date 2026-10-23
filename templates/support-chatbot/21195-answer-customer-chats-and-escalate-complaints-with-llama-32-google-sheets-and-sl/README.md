# 💬 Answer customer chats and escalate complaints with Llama 3.2, Google Sheets, and Slack

> ⚡ **6 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles customer chat messages for an online shoe store by routing them to order lookup and product search in Google Sheets or answering policy questions with Llama 3.2 via Ollama, while escalating complaints and other handoffs to Slack and logging all conversations.

## How it works
1. Receives a customer chat message (or runs on a daily schedule for reporting) and loads the store configuration values.
2. Classifies the incoming chat by keyword rules (and extracts order numbers and email addresses), using Llama 3.2 via Ollama only when the message is unclear.
3. Answers product questions by searching the Products tab in Google Sheets and returns matching items with prices, sizes, and colors.
4. Answers order-status questions by looking up the order in the Orders tab in Google Sheets and returns a status update, flagging delayed or unclear statuses for human follow-up.
5. Answers FAQ/policy questions by sending the message and store policy text to Llama 3.2 via Ollama and escalates the chat if the model returns NOT_SURE.
6. When a human is needed (complaints, human requests, emails, unclear messages, or flagged orders), creates a ticket in the Tickets tab in Google Sheets and posts an alert to a Slack channel.
7. Logs every interaction to the Conversations tab in Google Sheets and returns the final reply back to the chat, and each morning posts a 24-hour activity summary to Slack.

## Setup
1. Run Ollama with the Llama 3.2 model (or another OpenAI-compatible chat endpoint) and update the LLM URL and model name in the workflow configuration.
2. Create a Google Sheet with the tab names and columns required for Products, Orders, Conversations, and Tickets, then add Google Sheets OAuth2 credentials and set your spreadsheet ID in the configuration.
3. Add Slack credentials, set the target Slack channel ID in the configuration, and ensure the workflow can post messages to that channel.
4. Update the store name and store policy text in the configuration so FAQ answers are generated strictly from your rules.
5. Set the workflow timezone and adjust the daily schedule time (default 08:00) and summary lookback window (default 24 hours) as needed.

## Requirements
- Google account with Sheets access (the workflow reads native Google Sheets, so save the sample sheet as a Google Sheet)
- Slack workspace and a channel for alerts
- Ollama running locally with Llama 3.2 (or another OpenAI-compatible chat API)
- Sample sheet with all tabs and columns: https://github.com/shaharukanik/ai_support_agent_shoe_store

## Customization
- Swap the local Llama model for GPT-4o or Claude by changing the model name and URL in Load Config (OpenAI-style APIs also need the HTTP Request body updated)
- Edit the keyword lists in Detect Intent by Rules and the store info in Load Config to fit another store
- Replace the Orders tab with your real orders, for example filled by a Shopify or WooCommerce orders webhook
- Turn on Make Chat Publicly Available in the Chat Trigger to share the hosted chat page, or use Embedded Chat to put it on your own site

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
