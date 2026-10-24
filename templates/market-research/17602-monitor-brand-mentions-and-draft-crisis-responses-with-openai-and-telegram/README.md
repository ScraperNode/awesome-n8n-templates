# 📊 Monitor brand mentions and draft crisis responses with OpenAI and Telegram

> ⚡ **26 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow monitors brand mentions stored in Google Sheets on a 15-minute schedule, uses OpenAI to classify crisis severity and draft PR responses, logs incidents to a crisis sheet, and routes approval decisions through Telegram, with Slack alerts for workflow errors.

## How it works
1. Runs every 15 minutes and reads mention rows from the Google Sheets `Mentions` tab.
2. Evaluates each mention individually and uses OpenAI (gpt-4o-mini) to classify severity, sentiment, and crisis type.
3. Updates the mention row in Google Sheets as “No Action Needed” when severity is `None`.
4. For any severity above `None`, uses OpenAI (gpt-4o-mini) to draft a holding statement, a full press response, and a recommended response channel.
5. Appends the drafted crisis event to the Google Sheets `Crisis_Log` tab, sends the draft to an approver via Telegram, and marks the mention as “Awaiting Approval.”
6. Listens for the approver to reply `approve` or `reject` in Telegram, updates the matching `Crisis_Log` entry in Google Sheets, and sends a confirmation back to Telegram.
7. If any node fails, posts an execution error alert to a designated Slack channel.

## Setup
1. Add credentials for Google Sheets OAuth2, OpenAI, Telegram Bot API, and Slack OAuth2.
2. Create a Google Sheets document with `Mentions` and `Crisis_Log` tabs and ensure the columns match the template (including IDs and status fields).
3. Replace `YOUR_GOOGLE_SHEET_ID` in all Google Sheets steps and set `YOUR_APPROVER_CHAT_ID` in the Telegram approval message step.
4. Set `YOUR_SLACK_CHANNEL_ID` in the Slack error alert step.
5. Review and customize the brand tone and messaging guidelines in the OpenAI response-drafting prompt before enabling the workflow.

## 🔗 Nodes Used

Google Sheets, Slack, Telegram, Telegram Trigger, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
