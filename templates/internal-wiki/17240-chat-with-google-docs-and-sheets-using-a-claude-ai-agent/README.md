# 📖 Chat with Google Docs and Sheets using a Claude AI agent

> ⚡ **56 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow opens an n8n chat interface where an AI agent powered by Anthropic Claude answers questions by reading a connected Google Doc and/or Google Sheet on demand, using short-term conversation memory for follow-up questions.

## How it works
1. Receives a user question through n8n’s built-in chat trigger.
2. Uses an AI agent powered by Anthropic Claude to decide whether it needs to consult Google Docs, Google Sheets, or both.
3. Reads the full text of the configured Google Doc when the question is about document content.
4. Fetches rows from the configured Google Sheet tab when the question is about spreadsheet data.
5. Answers in the chat based only on the retrieved Doc/Sheet content (or states the information isn’t present), while keeping the last 10 messages in memory for contextual follow-ups.

## Setup
1. Add credentials for Anthropic (Claude), Google Docs, and Google Sheets.
2. Replace `YOUR_GOOGLE_DOC_ID_OR_URL` with your target Google Doc URL or ID.
3. Set the Google Sheet document ID and choose the tab (sheet name) to read in the Google Sheets tool.
4. Confirm the connected Google account has access to both the Doc and the Sheet, then open the workflow chat and start asking questions.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
