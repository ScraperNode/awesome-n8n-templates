# 🎣 Qualify real estate leads and answer EMI queries via Telegram with OpenAI GPT-4o-mini

> ⚡ **73 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow listens for Telegram bot messages, uses OpenAI (gpt-4o-mini) to detect language and classify intent, then routes requests to either lead qualification, EMI calculation, or support handling with logging to Google Sheets and escalation via Gmail and Slack.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Uses OpenAI to detect the message language and classify the intent as lead qualification, EMI simulation, or support query.
3. For lead enquiries, OpenAI extracts key details and a 0–100 score, logs the lead to Google Sheets, and emails the agent via Gmail plus replies on Telegram when the score is 70 or higher.
4. For lower-scoring lead enquiries, it replies on Telegram with a follow-up question in the user’s language after logging the lead to Google Sheets.
5. For EMI requests, OpenAI extracts loan parameters, the workflow calculates the monthly EMI, logs the simulation to Google Sheets, and sends a formatted breakdown back on Telegram.
6. For support queries, OpenAI drafts an answer in the user’s language and either replies on Telegram if resolved or logs a ticket to Google Sheets and alerts a Slack channel before confirming escalation to the user.
7. If any step fails, an error handler posts an execution alert to Slack.

## Setup
1. Create and connect credentials for Telegram Bot API, OpenAI, Google Sheets OAuth2, Gmail OAuth2, and Slack OAuth2.
2. Create a Google Sheets spreadsheet with tabs named Leads, EMI_Simulations, and Support_Tickets, and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets nodes.
3. Update the Gmail recipient address in the hot-lead notification email.
4. Set YOUR_SLACK_CHANNEL_ID for both the support escalation channel and the workflow error alerts channel.
5. Enable the workflow and message your Telegram bot to test lead, EMI, and support scenarios.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Gmail, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
