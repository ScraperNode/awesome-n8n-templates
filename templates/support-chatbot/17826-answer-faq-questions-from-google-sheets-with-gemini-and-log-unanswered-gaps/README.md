# 💬 Answer FAQ questions from Google Sheets with Gemini and log unanswered gaps

> ⚡ **66 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow provides a public chat that answers customer questions strictly from an FAQ stored in Google Sheets using Google Gemini, and logs any questions not covered by the FAQ to a separate Google Sheets tab for follow-up.

## How it works
1. Receives a customer question via the built-in public chat trigger.
2. Loads all FAQ rows from a Google Sheets worksheet.
3. Formats the FAQ into a single context block and sends it with the customer question to Google Gemini with instructions to answer only from the FAQ or mark it as unanswered.
4. Cleans the model output and extracts whether the question was answered from the FAQ.
5. If the FAQ covers the question, returns the cleaned reply to the chat.
6. If the FAQ does not cover the question, appends the question to an “Unanswered” Google Sheets worksheet and returns the fallback reply to the chat.

## Setup
1. Connect Google Sheets OAuth2 credentials and select the spreadsheet and worksheet for both the FAQ read step and the “Unanswered” append step.
2. Connect a Google Gemini (PaLM) API credential for the Gemini chat model.
3. Create a Google Sheets “FAQ” tab with columns named Question and Answer (case-insensitive variants also work), and create an “Unanswered” tab to store unanswered questions.
4. Enable the workflow and use the chat URL from the trigger to ask test questions.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
