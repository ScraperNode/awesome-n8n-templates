# 📁 Archive Discord attachments to Google Drive and log them in Google Sheets

> ⚡ **3 views** · 📁 [File Management](../)

## Description

## Quick Overview
This workflow runs daily to fetch recent Discord messages from selected channels, downloads new attachments, uploads them into a dated Google Drive folder, and appends a detailed archive record to a Google Sheets log to prevent expiring Discord CDN links from being lost.

## How it works
1. Runs every day on a schedule.
2. Reads the existing Google Sheets “Archive Log” tab to find the most recent “Posted At” timestamp and uses it as a watermark (or falls back to a configurable lookback window on first run).
3. For each configured Discord channel ID, pulls the latest messages from Discord and keeps only attachments posted after the watermark.
4. Filters out attachments larger than the configured maximum size before downloading.
5. Creates a Google Drive folder named with the run date under your chosen parent folder.
6. Downloads each attachment from its current Discord URL, uploads it to the dated Google Drive folder with a message-ID-prefixed filename, and appends a row to Google Sheets with the poster, timestamp, message link, file metadata, and Drive link/file ID.

## Setup
1. Create and invite a Discord bot to your server with permission to read message history, enable the MESSAGE CONTENT privileged intent, and add the bot token as Discord Bot credentials in n8n.
2. Connect Google Drive OAuth2 and Google Sheets OAuth2 credentials in n8n.
3. Create a Google Sheet with a tab (default: “Archive Log”) that has headers for Posted At, Channel ID, Posted By, File Name, File Size KB, Content Type, Message Link, Drive File ID, Drive Link, and Archived At.
4. Update the settings in “Set Archive Settings” with your Discord guild ID, comma-separated channel IDs, Google Drive parent folder ID, Google Sheet URL, and optional limits like maxFileMb and firstRunLookbackDays.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Discord, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
