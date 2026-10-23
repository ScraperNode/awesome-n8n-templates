# 📁 Route Gmail PDF attachments to Google Drive with Slack or Telegram alerts

> ⚡ **2 views** · 📁 [File Management](../)

## Description

## Quick overview
This workflow runs daily to find unread Gmail messages matching a keyword, uploads any PDF attachments to Google Drive, and sends a single upload summary notification to Slack or Telegram.

## How it works
1. Runs every day on a scheduled trigger.
2. Searches Gmail for unread emails with attachments whose filenames match PDF and include the configured keyword, downloading attachments for processing.
3. Normalizes each email into a consistent record (sender, subject, date, and a filtered list of PDF-only attachments).
4. Uploads each PDF attachment to the specified Google Drive folder and aggregates the results into a single per-run summary (including partial upload failures).
5. Formats a concise notification message listing the sender/subject and any Google Drive links for uploaded files.
6. Routes the notification to Slack or Telegram based on your configuration, and posts an error notification via the same routing if the workflow fails.

## Setup
1. Add Gmail OAuth2 credentials and ensure the account has access to the inbox you want to scan.
2. Add Google Drive OAuth2 credentials and set a target folder ID that the Drive account can write to.
3. Add either Slack OAuth2 credentials (and set the channel ID) or Telegram bot credentials (and set the chat ID), then set `notification_channel` to `slack` or `telegram` in the global configuration. You can disable any of them if not used.

## Customization
- search_keyword: Keyword or phrase used to find unread Gmail messages. Example: Google Payments
- target_drive_folder_id: ID of the existing Google Drive folder where PDFs will be stored
- notification_channel: Notification channel. Allowed values: slack or telegram
- slack_channel_id: Slack channel ID or identifier used for notifications
- telegram_chat_id: Telegram chat ID used for notifications

## 🔗 Nodes Used

Slack, Telegram, Google Drive, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
