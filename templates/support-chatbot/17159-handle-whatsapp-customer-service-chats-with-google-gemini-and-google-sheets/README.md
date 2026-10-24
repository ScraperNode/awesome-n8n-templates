# 💬 Handle WhatsApp customer service chats with Google Gemini and Google Sheets

> ⚡ **145 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow handles WhatsApp customer service via OpenWA, using Google Gemini and a Google Sheets knowledge base to answer personal chats, while routing conversations to a human queue in Google Sheets when escalation is needed.

## How it works
1. Triggers on OpenWA WhatsApp events and ignores message reactions except for specific ✅/☑ reactions used to re-enable AI handling.
2. Normalizes incoming event fields and processes only personal chats (IDs ending with @c.us) that are not sent by your own WhatsApp account.
3. Checks a Google Sheets “Session Chat” list to decide whether the conversation is currently handled by a human, and only continues to AI when no active human session is found.
4. Uses a Google Gemini chat model with short-term memory and a Google Sheets “Database Company” tool to draft a friendly Indonesian response based only on the sheet data.
5. If the AI response does not contain the #admin escalation token, it sends the reply back to the customer via OpenWA.
6. If the AI response contains #admin, it appends the chat to the Google Sheets “Session Chat” sheet to flag it for human follow-up.
7. When a ✅/☑ reaction is received for a chat, it finds and deletes the corresponding “Session Chat” row in Google Sheets so AI can handle new messages again.

## Setup
1. Configure the OpenWA credentials and set the correct OpenWA sessionId so the trigger and send-message action connect to your WhatsApp session.
2. Add Google Gemini (PaLM/Gemini) API credentials for the chat model used by the AI agent.
3. Add a Google Sheets service account credential and ensure it has access to the spreadsheet used for “Database Company” and “Session Chat.”
4. Confirm the spreadsheet document ID and the two sheet tabs exist and match the workflow configuration (knowledge base tab and “Session Chat” tab with at least a chatId column).

## 🔗 Nodes Used

Google Sheets, AI Agent, Simple Memory, Google Gemini Chat Model, Think Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
