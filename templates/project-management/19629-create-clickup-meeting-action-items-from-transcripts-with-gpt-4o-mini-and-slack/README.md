# 📋 Create ClickUp meeting action items from transcripts with GPT-4o-mini and Slack

> ⚡ **23 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow ingests meeting transcripts from Telegram messages or new .txt files in Google Drive, uses OpenAI (gpt-4o-mini) to extract a summary and action items, creates corresponding tasks in ClickUp, and posts a formatted recap to Slack with an optional Telegram confirmation.

## How it works
1. Triggers when a Telegram bot receives a message or when a new file is created in a specific Google Drive folder.
2. Validates that the Telegram message contains enough transcript text or downloads and reads the text from the new Google Drive file.
3. Normalizes the transcript into a consistent structure (meeting title, transcript text, source, and Telegram chat ID when available).
4. Sends the normalized transcript to OpenAI (gpt-4o-mini) to return JSON containing a short meeting summary and a list of action items with owner, deadline, and priority.
5. Parses the AI JSON, splits the action items into individual records, and creates a ClickUp task for each item with mapped due date and priority.
6. Builds a Slack-formatted message with the meeting summary and a numbered list of created tasks, posts it to a Slack channel, and sends the same text back to the originating Telegram chat when available.

## Setup
1. Add credentials for Telegram Bot API, Google Drive OAuth2, OpenAI, ClickUp, and Slack.
2. In Google Drive, choose the folder to watch in the Google Drive trigger and ensure transcript files are uploaded as .txt.
3. Replace REPLACE_WITH_YOUR_CLICKUP_LIST_ID in the ClickUp task creation step with your target ClickUp List ID.
4. Replace REPLACE_WITH_YOUR_SLACK_CHANNEL_ID in the Slack posting step with your target Slack channel ID.
5. (Optional) Replace REPLACE_WITH_YOUR_TELEGRAM_CHAT_ID in the Telegram confirmation step if you want a fallback chat destination when the workflow can’t read a chat ID.
6. Activate the workflow so both triggers can start processing transcripts.

## 🔗 Nodes Used

Airtable, Slack, Telegram, Telegram Trigger, Google Drive, ClickUp

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
