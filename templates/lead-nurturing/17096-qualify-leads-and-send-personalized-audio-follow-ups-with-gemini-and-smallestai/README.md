# 💬 Qualify leads and send personalized audio follow-ups with Gemini and Smallest.ai

> ⚡ **45 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

## Quick Overview
This workflow receives lead submissions via a webhook, uses Google Gemini to qualify the lead and write a personalized spoken follow-up script, and for qualified leads generates an MP3 with Smallest.ai, shares it from Google Drive, emails it via Gmail, logs outcomes to Google Sheets, and alerts sales in Slack.

## How it works
1. Receives a POST webhook request containing a lead’s name, email, and message.
2. Sends the lead details to a Google Gemini–powered AI agent to determine whether the lead is qualified and, if so, generate a short personalized audio script.
3. Parses the agent’s JSON response and routes the workflow based on the qualified flag.
4. If the lead is qualified, Smallest.ai synthesizes the script into an MP3 and uploads it to Google Drive.
5. Shares the Google Drive audio file publicly and sends the lead a Gmail message with a link to listen.
6. Appends the qualified lead record (including the audio link and timestamp) to Google Sheets and posts a notification to a Slack channel.
7. If the lead is unqualified, appends the lead details and timestamp to Google Sheets without generating audio or sending email.

## Setup
1. Enable the webhook and copy the generated /lead-capture URL into your lead form or source system that sends the POST request.
2. Add credentials for Google Gemini (LangChain Chat Model) and Smallest.ai so the workflow can generate the qualification result and synthesize speech.
3. Connect your Google Drive and Gmail accounts, and confirm the Drive/folder and email content/recipient mapping match your lead fields.
4. Connect your Google Sheets account and update the spreadsheet/document ID and sheet tab to the leads log you want to append to.
5. Connect your Slack account and replace YOUR_SLACK_CHANNEL_ID with the channel where sales should be notified.

## 🔗 Nodes Used

Google Sheets, Slack, Webhook, Google Drive, Gmail, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
