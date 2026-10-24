# 🎫 Triage brand crises with OpenAI, Telegram, Slack, and Google Sheets

> ⚡ **24 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick overview
This workflow receives negative brand mentions via webhook, uses OpenAI to classify crisis severity and draft a holding statement, logs incidents to Google Sheets, and notifies approvers and teams via Telegram and Slack with severity-based escalation plus an approval callback to mark incidents approved or rejected.

## How it works
1. Receives a POST webhook containing a brand mention, source, sentiment score, and related metadata.
2. Normalizes the incoming payload, generates a unique incident ID, and prepares the fields used for triage and notifications.
3. Uses OpenAI (gpt-4o-mini) to classify the incident severity as low, medium, or high, then uses OpenAI again to draft a short holding statement.
4. Appends the incident details, severity, drafted response, and a Pending status to a Google Sheets incident log.
5. Routes notifications by severity, sending a Telegram message to the approver for all incidents, adding a Slack alert to the PR team for medium/high, and escalating to an executive Slack channel for high.
6. Listens for a Telegram inline-button callback and updates the corresponding Google Sheets row to Approved or Rejected, while sending a confirmation message back to the approver.
7. If any step fails, posts an error alert to a designated Slack channel with execution details.

## Setup
1. Add OpenAI API credentials for the severity classification and response drafting steps.
2. Connect Google Sheets OAuth2, create a sheet with the required columns, and replace YOUR_GOOGLE_SHEET_ID in all Google Sheets steps.
3. Connect Telegram Bot credentials and set the approver chat ID (YOUR_TELEGRAM_CHAT_ID) used for approver notifications.
4. Connect Slack OAuth2 and replace the channel IDs for the PR team, executive escalation, and error-alert channels.
5. Copy the production webhook URL from the crisis-signal trigger and configure your brand monitoring tool (or source system) to POST mentions to it.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
