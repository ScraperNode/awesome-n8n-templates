# 💬 Route chatbot requests to humans with OpenAI and Google Sheets

> ⚡ **22 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow processes incoming chat messages, uses Google Sheets to deduplicate and track escalation status by session, and calls OpenAI to decide whether to answer or escalate to a human, muting the bot during active handoffs and re-enabling it after a timeout.

## How it works
1. Runs manually (replace with your chat webhook in production) and maps the incoming message fields like sessionId, messageId, channel, and userMessage.
2. Checks a Google Sheets “processed_messages” sheet to detect whether the messageId was already handled and stops if it is a duplicate.
3. Logs the messageId to Google Sheets for idempotency and looks up the session’s escalation status in an “escalations” sheet.
4. If the escalation status is PENDING and the configured timeout has not expired, the workflow stays silent so a human can continue the conversation.
5. Otherwise, it sends the user message to an OpenAI-powered agent to either generate a normal reply or return the signal ESCALATE_TO_HUMAN.
6. If escalation is needed, it upserts a PENDING escalation record in Google Sheets, sets a holding message for the user, and prepares a notification payload for a human agent.
7. If escalation is not needed, it outputs the AI’s response for you to send back via your messaging provider.

## Setup
1. Add an OpenAI API credential and select the chat model in the OpenAI Chat Model node.
2. Add a Google Sheets OAuth credential and create a spreadsheet with two sheets named “processed_messages” (messageId, processedAt) and “escalations” (sessionId, userMessage, channel, status, escalatedAt, resolvedAt).
3. Update the Google Sheets document URL/ID and sheet references to point to your spreadsheet.
4. Replace the manual trigger and sample input mapping with your real inbound webhook payload (for example from Evolution API, Twilio, or WhatsApp Cloud).
5. Replace the “Notify Human” placeholder with a real notification action (for example Slack or email) and connect the normal and escalation responses to your messaging provider to reply to the user.
6. Adjust the workflow config values (escalationTimeoutMinutes and holdingMessage) to match your handoff process.

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
