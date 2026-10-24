# 💬 Answer RFx sourcing event questions with Gemini and Google Sheets

> ⚡ **1 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow answers RFx sourcing questions from a chat widget by combining Google Sheets event/FAQ data with Google Gemini, then scores each response for confidence and logs usage or escalations back to Google Sheets.

## How it works
1. Receives a message from an n8n chat trigger and captures the question, timestamp, and session ID.
2. Classifies the requester (supplier vs internal), detects the RFx stage and question category, and extracts any referenced RFx event ID from the text.
3. Pulls RFx event details from Google Sheets and builds a context summary, prioritizing active events and the referenced event when provided.
4. Pulls FAQ rules from Google Sheets, selects the most relevant entries, and builds a role-specific prompt that includes event data, FAQ guidance, and response instructions.
5. Sends the prompt to Google Gemini to generate a concise, audience-adapted answer.
6. Scores the answer for uncertainty and sensitive topics, then appends the interaction to a Google Sheets usage log or creates a pending escalation record in a Google Sheets escalation log.

## Setup
1. Add Google Sheets OAuth2 credentials in n8n and ensure the workflow’s Google Sheets nodes point to your spreadsheet document ID.
2. Create and populate a Google Sheets workbook with the required tabs: RFx_Events, FAQ_Rules, FAQ_Usage_Log, and Escalation_Log, using columns that match the fields the workflow appends.
3. Add a Google Gemini (Google PaLM / Gemini) API credential in n8n and assign it to the Gemini Chat Model node.
4. Enable and configure the n8n Chat trigger (webhook) and connect its chat/web widget to the generated endpoint so messages reach the workflow.

## 🔗 Nodes Used

Google Sheets, Gmail, Basic LLM Chain, Chat Trigger, Google Gemini Chat Model, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
