# 📖 Chat with a research assistant using Google Gemini, Wikipedia, and Sheets

> ⚡ **17 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick Overview
This workflow provides a chat-based research assistant powered by Google Gemini that can look up facts on Wikipedia, do calculations, and remember context, while also tagging each user question and logging it to a Google Sheets spreadsheet.

## How it works
1. Receives a user message through the built-in n8n chat webhook trigger.
2. Sends the message to a Google Gemini agent that can consult Wikipedia for factual lookups and use a Calculator tool for arithmetic.
3. Uses a buffer memory window to keep recent conversation context so follow-up questions stay coherent.
4. Streams the agent’s plain-language, cited response back to the chat.
5. In parallel, uses Google Gemini to generate a short 1–3 word topic label for the question.
6. Appends the original question and its topic label to a Google Sheets tab for tracking what users ask.

## Setup
1. Add Google Gemini (PaLM) API credentials for the agent model and the topic-tagging model.
2. Add a Google Sheets OAuth2 connection and select the target spreadsheet and the “Questions” sheet in the logging step.
3. Open the chat URL for the workflow’s public chat trigger and share it with users who should be able to ask questions.

## 🔗 Nodes Used

Google Sheets, AI Agent, Basic LLM Chain, Simple Memory, Calculator, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
