# 🎫 Log daily unanswered Discord help questions from Discord to Google Sheets

> ⚡ **6 views** · 🎫 [Ticket Management & Triage](../)

## Description

## Quick Overview
This workflow runs daily at 09:00 to scan a Discord help channel for likely questions that have not been answered, then posts a digest to a moderator Discord channel and appends each unanswered question (with jump links) to a Google Sheets log.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Loads configuration values such as the Discord server and channel IDs, lookback window, and Google Sheets location.
3. Fetches the most recent messages from the specified Discord help channel.
4. Identifies messages in the lookback window that look like questions and filters out those that were replied to, got a later mention of the asker, or have an associated thread, while also computing a coverage note if message retrieval is incomplete.
5. If unanswered questions exist, formats a digest with jump links, posts it to the moderator Discord channel, and appends each question as a row in Google Sheets.
6. If no unanswered questions exist, posts an “all clear” scan receipt (including the coverage note) to the moderator Discord channel.

## Setup
1. Create and connect a Discord Bot credential, invite the bot to your server, and grant it View Channel/Read Message History on the help channel and Send Messages on the moderator channel.
2. In the Discord Developer Portal, enable the Message Content privileged intent for the bot so the workflow can evaluate question text.
3. Create and connect a Google Sheets OAuth2 credential and prepare a spreadsheet tab (for example, “Unanswered”) with columns like Digest Date, Asked At, Age Hours, Author, Question, Jump Link, Message ID.
4. Update the values in the settings step with your Discord guild ID, help channel ID/label, moderator channel ID, Google Sheet URL/tab, and any tuning values (lookbackHours, messageFetchLimit, questionWords, and limits).

## 🔗 Nodes Used

Google Sheets, Discord, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
