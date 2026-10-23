# 🔬 Sweep unread Gmail junk to spam with GPT-5, Telegram, and Google Sheets

> ⚡ **1 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow sweeps unread Gmail inbox messages on a schedule or via Telegram, uses OpenAI GPT-5 to identify high-confidence junk from unknown senders, moves selected emails to Gmail Spam, logs each run to Google Sheets, and sends a Telegram report with a one-tap undo.

## How it works
1. Runs daily on a cron schedule or starts from a Telegram message/callback button.
2. Fetches unread messages from Gmail Inbox and pulls recent Gmail Sent mail to build a list of known contacts and domains.
3. Filters out emails from people you have written to, then sends only remaining candidates to OpenAI GPT-5 for junk classification with a confidence rating.
4. Keeps borderline/low-confidence items in the inbox and prepares an undo batch for the high-confidence junk selected for moving.
5. Stores the undo batch in workflow static data, then moves each selected Gmail message to Spam (and removes Inbox/Unread labels).
6. Sends a Telegram report listing what moved and why with an inline “Undo” button, and appends a run log entry to Google Sheets.
7. If the undo button is tapped later, restores the batch from Spam back to the Inbox and confirms the result in Telegram (or reports that the undo batch expired).

## Setup
1. Add a Gmail OAuth2 credential with permission to read messages and modify labels.
2. Add an OpenAI credential and ensure the model selection is available for the OpenAI node (set to gpt-5).
3. Create a Telegram bot with @BotFather, add a Telegram credential, and set the admin_chat_id value in the Config step for scheduled notifications.
4. Add a Google Sheets credential, then select the target spreadsheet and sheet/tab in both Google Sheets logging steps.
5. Review and adjust the Config values (Gmail search query, inbox limit, sent lookback, max moves per run, and undo window) before enabling the daily schedule.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
