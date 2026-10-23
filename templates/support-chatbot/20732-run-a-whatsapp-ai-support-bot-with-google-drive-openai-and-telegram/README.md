# 💬 Run a WhatsApp AI support bot with Google Drive, OpenAI, and Telegram

> ⚡ **9 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow runs an AI WhatsApp support bot that answers using Google Drive documents indexed into n8n Data Tables with OpenAI embeddings, and hands conversations to your team via Telegram when needed while logging handoffs to Google Sheets.

## How it works
1. Runs once manually to create n8n Data Tables for chats, messages, and the knowledge base, then indexes documents from a Google Drive folder.
2. Runs every hour to list supported files in the Google Drive folder, detect new/changed/deleted documents, and keep the knowledge base table in sync.
3. Triggers on incoming WhatsApp messages, skips duplicates and old messages, transcribes voice notes with OpenAI when present, and saves the customer message to the messages table.
4. Checks whether the chat is currently assigned to a human and either forwards the message to a Telegram group or proceeds with the AI response.
5. Retrieves recent conversation history, embeds the customer question with OpenAI, ranks the most relevant document passages from the knowledge base, and asks an OpenAI chat model to answer only from those passages.
6. If the AI can answer, it saves the reply and sends it back to the customer on WhatsApp.
7. If the AI cannot answer or a human is requested, it pauses the bot for that chat, alerts your Telegram group with context, logs the handoff to a Google Sheets tab, and sends a handoff message to the customer on WhatsApp.
8. Triggers on team replies in Telegram and, when within WhatsApp’s 24-hour reply window, sends the staff response to WhatsApp, keeps the chat in human mode, and allows “#bot on” to hand the conversation back to the AI.

## Setup
1. Set up WhatsApp Cloud API credentials in n8n, configure the WhatsApp webhook for this workflow, and ensure you have a permanent access token.
2. Add OpenAI API credentials for embeddings, chat responses, and audio transcription.
3. Add Google Drive credentials and update the Configuration values for the target Drive folder ID.
4. Add Google Sheets credentials, set the handoff spreadsheet URL, and create a sheet tab named “Handoffs” with headers Date, Phone, Name, Question, Reason, Status.
5. Create a Telegram group, add your Telegram bot, add Telegram credentials in n8n, and set the group chat ID in the Configuration node.

## Requirements
- Meta WhatsApp Cloud API app with a phone number (WhatsApp Trigger credential and a permanent System User token)
- OpenAI API key (gpt-5.4-mini for answers, text-embedding-3-small for search, Whisper for voice notes)
- Google Drive folder with your support documents (Google Docs, Sheets, Slides, PDF or text files)
- Google Sheet with a tab named Handoffs (columns: Date, Phone, Name, Question, Reason, Status)
- Telegram bot added to your team group
- n8n version with Data Tables

## Customization
- Change humanTimeoutMinutes to keep chats with your team for longer or shorter
- Change topPassages and minRelevance to control how much of your documents the AI sees
- Edit the system message to change the tone, or the rules for when to hand over
- Swap the Telegram nodes for Slack, and OpenAI for any other chat model
- Change the schedule to re-index your documents more or less often
- Point driveFolderId at a different folder per brand or language

## Additional info
The knowledge base is stored in an n8n Data Table, so it needs no vector database and survives restarts. Every hour only new or edited Drive files are re-indexed and deleted files are removed. If the folder listing comes back empty, nothing is deleted. The AI must answer from the retrieved passages or hand over. A handoff pauses the AI for that customer, sends your Telegram group the full transcript, and logs the question in a Google Sheet that becomes your list of missing documentation. Your team answers by replying to the Telegram message; the reply is sent on WhatsApp only inside the 24-hour customer service window, otherwise the team is told why it was blocked. Duplicate webhooks and delivery receipts never trigger a reply, and an AI failure is treated as a handoff, so no customer is left without an answer.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, WhatsApp Business Cloud

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
