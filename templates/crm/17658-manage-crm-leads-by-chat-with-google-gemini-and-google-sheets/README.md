# 🤝 Manage CRM leads by chat with Google Gemini and Google Sheets

> ⚡ **54 views** · 🤝 [CRM & Sales Operations](../)

## Description

## Quick Overview
This workflow provides a chat-based CRM assistant powered by Google Gemini that can append new leads to a Google Sheets “Leads” tab, answer pipeline questions by reading the sheet, and log each conversation message and intent to a “Chat Log” tab.

## How it works
1. Receives a new message through the built-in n8n chat interface.
2. Uses a Google Gemini agent with short-term conversation memory to interpret the request and decide whether to add a lead, list leads, or compute totals.
3. Appends a new row to the Google Sheets “Leads” worksheet when the user asks to add a lead, and confirms the add in a short reply.
4. Reads rows from the Google Sheets “Leads” worksheet when the user asks questions about the pipeline and answers based on the returned data, using a calculator tool for counts or totals.
5. In parallel, classifies each incoming message intent (add, query, update, or other) with Google Gemini.
6. Appends the message and its tagged intent to a Google Sheets “Chat Log” worksheet for tracking assistant usage.

## Setup
1. Add Google Gemini (PaLM) API credentials for the agent model and the intent-tagging model.
2. Add a Google Sheets OAuth2 connection and select your CRM spreadsheet in the Google Sheets nodes.
3. Ensure your spreadsheet contains two worksheets named “Leads” (for CRM rows) and “Chat Log” (for interaction logging), with columns that match what you want to capture.
4. Open the Chat Trigger URL in n8n and share or embed it where you want users to chat with the assistant.

## 🔗 Nodes Used

Google Sheets, AI Agent, Basic LLM Chain, Simple Memory, Calculator, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
