# 💬 Run an AI student helpdesk with OpenAI, Google Sheets, Slack, and Gmail

> ⚡ **84 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow handles incoming student chat messages, answers questions using a Google Sheets knowledge base with OpenAI, escalates unresolved or distressed conversations to Slack, logs conversations and FAQ gaps back to Google Sheets, and emails a weekly metrics report via Gmail.

## How it works
1. Receives a student chat message via an n8n Chat trigger and extracts the session ID, student name, and message text.
2. Builds and updates a per-session conversation history and turn count to maintain context across messages.
3. Reads Q&A entries from a Google Sheets knowledge base and formats them into prompt-ready text.
4. Sends the student message, conversation history, and knowledge base to OpenAI (gpt-4o-mini) to generate a constrained reply that can flag unresolved or distressed cases.
5. Checks the AI reply for unresolved and distressed markers and escalates the full context to a Slack channel when the student appears distressed or the query remains unresolved after two turns.
6. Appends each exchange to a Google Sheets conversation log and records unresolved questions to a separate “FAQ Gaps” sheet for knowledge base updates.
7. Runs every Monday at 9 AM to read the conversation log from Google Sheets, calculate weekly metrics, and email an HTML report to the admin using Gmail.

## Setup
1. Add credentials for Google Sheets (OAuth2), OpenAI (API key), Slack (OAuth2), and Gmail (OAuth2).
2. Create a Google Sheets spreadsheet with tabs for the knowledge base, “Conversation log sheet”, and “FAQ Gaps”, and update the workflow’s spreadsheet ID and sheet/tab selections as needed.
3. Set the Slack channel ID in the escalation and error-alert Slack nodes to your counsellor/ops channel.
4. Replace the Gmail recipient (sendTo) in the weekly report node with your admin email address.
5. If you use the chat webhook externally, copy the Chat trigger URL and configure it in your chat interface or source application.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Chat Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
