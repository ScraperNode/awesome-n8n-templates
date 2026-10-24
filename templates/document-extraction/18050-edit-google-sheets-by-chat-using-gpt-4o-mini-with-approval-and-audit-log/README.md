# 🔬 Edit Google Sheets by chat using GPT-4o-mini with approval and audit log

> ⚡ **9 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
Ask your spreadsheet questions in plain language — "best month?", "revenue by country?", "rows missing an email?" — and an AI agent reads the live sheet and answers with real numbers. Conversation memory makes follow-up questions work. Five nodes, five-minute setup.

## How it works
1. When You Ask a Question is n8n's hosted chat — open the chat URL and type a question in plain language.
2. Answer With Data, Not Guesses is an AI agent with one tool: Read the Spreadsheet. It pulls the live rows from your Google Sheet and computes the answer from real data — it never guesses from memory.
3. Remember the Conversation keeps context, so follow-ups like "and the month before that?" just work.
4. Answers come back in the chat with the actual numbers.

## Setup
1. Connect an OpenAI (or compatible) credential in OpenAI Analyst Model — any OpenAI-compatible endpoint works.
2. Connect your Google Sheets account in Read Data from Sheets and pick the spreadsheet and sheet the agent should read.
3. Optional but worth it: add one line describing your columns to the system message in Data-Driven Response Agent (e.g. "Columns: Date, Country, Revenue in USD") — answers get noticeably better.
4. Activate the workflow and open the chat via When User Asks Question → Chat, then ask something like "what was our best month?" to test.

## Requirements
- OpenAI (or compatible) API key, Google Sheets.

## Customization
- Describe your columns in the agent's system prompt for noticeably better answers ("Revenue is in USD, Date is YYYY-MM-DD"). Add more sheet tools for multi-tab analysis. Add an append/update Sheets tool to let the agent write rows, not just read them. For big datasets, swap the Sheets tool for a Postgres/MySQL tool - the agent pattern is identical.

## Additional info
The chat is n8n's hosted chat page. Set it to public to share the analyst with teammates who don't have n8n access.

## 🔗 Nodes Used

Google Sheets, Telegram, AI Agent, OpenAI Chat Model, Simple Memory, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
