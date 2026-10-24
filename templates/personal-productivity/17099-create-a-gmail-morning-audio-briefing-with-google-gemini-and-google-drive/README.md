# ⚡ Create a Gmail morning audio briefing with Google Gemini and Google Drive

> ⚡ **40 views** · ⚡ [Personal Productivity](../)

## Description

## Quick Overview
This workflow runs every weekday at 7 AM to fetch up to 10 unread Gmail messages from the last day, summarize them into a narrated script with Google Gemini, convert the script to an MP3 using Smallest.ai, upload it to Google Drive, and email you a public listening link.

## How it works
1. Runs on a schedule every weekday at 7:00 AM.
2. Pulls up to 10 unread Gmail emails from the last 24 hours.
3. Cleans and categorizes the emails into URGENT, NEWSLETTERS, and OTHER sections while skipping common job-alert style messages.
4. Uses a LangChain AI Agent powered by Google Gemini to turn the digest into a plain-text morning briefing script.
5. Truncates the script to a safe character limit and converts it to speech as an MP3 with Smallest.ai.
6. Uploads the MP3 to Google Drive, makes the file publicly readable, and sends a Gmail message with the listening link and the script text.

## Setup
1. Connect your Gmail credentials for both reading unread emails and sending the briefing email, and update the recipient address in the outgoing email step.
2. Add Google Gemini credentials in the Google Gemini Chat Model used by the AI Agent.
3. Add your Smallest.ai API credentials for text-to-speech generation.
4. Connect your Google Drive credentials and choose the target Drive/folder where the MP3 should be uploaded.
5. (Optional) Adjust the Gmail search query, schedule cron expression, and the AI system prompt to match your preferred filtering, timing, and narration style.

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
