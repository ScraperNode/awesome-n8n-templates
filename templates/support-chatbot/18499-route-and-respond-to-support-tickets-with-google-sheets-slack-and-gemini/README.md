# 💬 Route and respond to support tickets with Google Sheets, Slack, and Gemini

> ⚡ **33 views** · 💬 [Support Chatbots](../)

## Description

## Quick Overview
This workflow receives customer support requests via a webhook, validates and deduplicates them using Google Sheets, classifies and drafts replies with Google Gemini, escalates high-risk cases to Slack, logs every interaction back to Google Sheets, and posts a daily operations summary to Slack.

## How it works
1. Receives a POST request on the `/support/incoming` webhook and normalizes key fields like customer details, message text, and generated ticket/conversation IDs.
2. Validates required fields and immediately returns an HTTP 400 response for invalid payloads.
3. Checks Google Sheets for the incoming `event_id` to ignore duplicates, then loads conversation history and customer records from the same spreadsheet.
4. Uses Google Gemini to extract structured intent, sentiment, urgency, required context, and a recommended action, then applies deterministic rules to set customer priority and choose the best routing outcome.
5. Pulls only the needed order and/or policy rows from Google Sheets based on the required context and evaluates decision rules to auto-resolve, request more information, or escalate to a human.
6. Uses Google Gemini to generate a customer-facing reply that follows the chosen route and only uses the retrieved order/policy context.
7. If escalation is required (or AI analysis errors occur), posts a formatted high-priority alert to a Slack channel.
8. Appends the ticket, classification, decision, and response to Google Sheets (support logs and conversation history) and returns a JSON response to the original webhook caller.

## Setup
1. Create Google Sheets service account credentials in n8n and update the spreadsheet/document ID and sheet/tab names (customers, orders, policies, support_logs, support_history) to match your database.
2. Add a Google Gemini (Google PaLM) API credential and ensure the Gemini chat model nodes are set to a model available in your account.
3. Add Slack credentials, select the target Slack channel(s) for escalations, daily summaries, and error alerts, and confirm the bot has permission to post there.
4. Configure your support intake source to send POST requests to the n8n webhook URL at `/support/incoming` with the expected fields (customer, message, and optional order identifiers).
5. Review and adjust routing thresholds and escalation rules (for example confidence, sentiment/urgency, and VIP handling) to fit your support policy.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
