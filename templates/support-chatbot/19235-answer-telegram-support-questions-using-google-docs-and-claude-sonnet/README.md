# 💬 Answer Telegram support questions using Google Docs and Claude Sonnet

> ⚡ **49 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a Google Docs knowledge base into a Telegram customer support chatbot using Anthropic Claude, logs each Q&A to Google Sheets, and replies back to the user in Telegram.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Fetches the latest content from a specified Google Docs document to use as the knowledge source.
3. Combines today’s date, the Google Docs text, and the user’s Telegram question into a single prompt.
4. Sends the prompt to an Anthropic Claude chat model via an AI Agent with conversation memory keyed by Telegram chat ID.
5. Generates a timestamp, then records the date, question, answer, chat ID, and username to a Google Sheets spreadsheet.
6. Cleans the AI response text (for example, flattening Markdown links) and sends the final answer back to the user in Telegram.

## Setup
1. Create a Telegram bot with BotFather, add your Telegram credentials in n8n, and start a chat with the bot so it can receive messages.
2. Add Google Docs OAuth2 credentials and replace the document URL with your own knowledge base document.
3. Add an Anthropic API credential and confirm the selected Claude model is available for your account.
4. Add Google Sheets OAuth2 credentials, set the target spreadsheet, and ensure it has columns for the logged fields (date/question/answer/chatid/username) as mapped in the workflow.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Docs, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
