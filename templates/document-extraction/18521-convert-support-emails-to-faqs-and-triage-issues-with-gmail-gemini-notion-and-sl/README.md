# 🔬 Convert support emails to FAQs and triage issues with Gmail, Gemini, Notion and Slack

> ⚡ **16 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick Overview
This workflow polls a Gmail support inbox, uses Google Gemini to turn emails into structured FAQ entries saved in Notion, posts updates to Slack, analyzes urgency and sentiment for escalation, replies to the sender with an acknowledgment, and logs failures to Google Sheets.

## How it works
1. Polls a Gmail inbox every minute for new support emails.
2. Validates that the email payload contains an ID and routes invalid events to a Google Sheets error log.
3. Sends the email subject and snippet to Google Gemini to summarize the issue, assign an FAQ category, and generate an FAQ title and short answer as JSON.
4. Parses and cleans the AI response, then saves the FAQ entry to a Notion database.
5. Posts a Slack message with the new FAQ’s title, category, summary snippet, and Notion link.
6. Runs a second Google Gemini analysis to detect urgency and sentiment, then posts a Slack alert for flagged messages and sends an acknowledgment email back to the original sender with the AI-generated answer.

## Setup
1. Connect your Gmail OAuth credentials for both the Gmail polling trigger and the Gmail send (reply) action.
2. Add Google Gemini credentials for both AI analysis steps.
3. Connect your Notion credential and replace the target database ID and property mappings (Title, Category, Answer, Summary) to match your Notion database schema.
4. Connect your Slack credential and select the channels for both the FAQ announcement and critical alert messages.
5. Connect your Google Sheets credential and update the spreadsheet ID and sheet tab used for error logging.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Notion, Gmail Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
