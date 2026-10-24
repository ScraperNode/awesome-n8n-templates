# 📋 Create Notion tasks from meeting transcripts with OpenAI, Slack, and Sheets

> ⚡ **34 views** · 📋 [Project Management](../)

## Description

## Quick overview
This workflow receives meeting transcripts via webhook, uses OpenAI to extract a summary, action items, and decisions, logs the meeting to Google Sheets, posts the results to Slack, and creates one Notion task per action item.

## How it works
1. Receives a POST webhook request containing meetingTitle, meetingDate, attendees, and transcriptText.
2. Sends the meeting details and transcript to OpenAI to return structured JSON with a summary, action items (task/owner/dueDate), and decisions.
3. Parses the OpenAI response as JSON and flags the run for manual review if the response cannot be parsed.
4. If parsing fails, posts an alert to a Slack review channel with the meeting title.
5. If parsing succeeds, appends the meeting summary and action item count to Google Sheets and posts a formatted summary, action items, and decisions to a Slack channel.
6. Splits the extracted action items into individual records and creates a Notion database page for each task.

## Setup
1. Create credentials for OpenAI, Slack, Notion, and Google Sheets in n8n.
2. Create a Notion database for tasks and ensure it includes properties named Owner, Due Date, Meeting, and Status.
3. Create a Google Sheet with columns meetingTitle, meetingDate, summary, actionItemCount, and loggedAt, and note its spreadsheet ID.
4. Replace notionDatabaseId, googleSheetId, slackChannelId, and slackReviewChannelId in the Config step with your own IDs.
5. Copy the webhook production URL and configure your transcript source to POST JSON to it (meetingTitle, transcriptText, meetingDate, attendees).

## Requirements
- OpenAI API key
- Slack workspace with two channels (main + review)
- Notion database for tasks (with Owner, Due Date, Meeting, Status properties)
- Google Sheet for meeting log
- A way to POST meeting transcripts to the webhook (Zoom/Google Meet export, or manual)

## Customization
- Adjust the AI prompt to extract risks or blockers
- Add a default due date for action items where AI couldn't find one
- Route tasks to different Notion databases based on owner

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Notion, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
