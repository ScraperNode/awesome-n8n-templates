# 💬 Reply to LINE customer chats with Google Gemini and log to Google Sheets

> ⚡ **21 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow turns a LINE Official Account into an AI chat assistant by receiving customer messages via a webhook, generating a reply with Google Gemini, sending the response through the LINE Messaging API, and logging each conversation to Google Sheets.

## How it works
1. Receives incoming LINE Messaging API events through a POST webhook.
2. Extracts the reply token, user ID, and message text from the LINE event payload.
3. Skips processing when the incoming event does not contain a text message.
4. Adds a predefined brand name and support persona to guide the reply style.
5. Sends the customer message and persona instructions to Google Gemini to generate a short, helpful response in the customer’s language.
6. Replies to the customer via the LINE Messaging API using the reply token and then appends the exchange to a Google Sheets log.

## Setup
1. In your LINE Official Account settings, enable webhooks and set the workflow’s webhook URL as the channel webhook endpoint.
2. Add a LINE channel access token as an HTTP Header Auth credential (Authorization: Bearer <token>) for the LINE Messaging API request.
3. Add Google Gemini (PaLM) API credentials for the Gemini chat model.
4. Add Google Sheets OAuth credentials, select the target spreadsheet, and ensure a sheet (for example, “LINE Log”) exists for appending conversation rows.
5. Update the brand name and persona text to match your business tone and response rules.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
