# 🎬 Edit, clip and dub Telegram videos with Renderster, OpenAI and Google Sheets

> ⚡ **28 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns Telegram messages into Renderster video processing jobs (auto edit, clips, dubbing, or transcripts) using OpenAI to interpret the request, then delivers the results back to Telegram and logs each job to Google Sheets.

## How it works
1. Triggers when the Telegram bot receives a message and extracts the chat ID, text/caption, file ID, and any URL.
2. Checks the chat ID against an allowlist and replies with instructions to add the chat ID if the user is not authorized.
3. Uses OpenAI (gpt-4o-mini) to interpret the message into a structured action (auto edit, clips, dub, transcript, or help) and a short reply.
4. Sends a help message in Telegram if the request is help or no video/link is provided, otherwise builds the Renderster job options from the parsed request.
5. Starts a Renderster /media job by either downloading the attached video from Telegram and uploading it, or sending the provided link, and confirms the job start in Telegram.
6. Waits for Renderster to call back via webhook (with periodic status checks), then fetches the final status and result.
7. Sends finished videos back to Telegram (uploading files up to Telegram’s limit, otherwise sending a light copy or link), logs the job details to Google Sheets, and posts an error message if the job fails.

## Setup
1. Create a Renderster API key and add an n8n HTTP Header Auth credential with header name `X-API-Key` and your key as the value.
2. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and send a message to the bot to retrieve your chat ID.
3. Add an OpenAI credential (gpt-4o-mini) for request interpretation.
4. Add a Google Sheets OAuth2 credential, select the target spreadsheet and sheet in the Google Sheets node, and ensure it has columns for Date, Chat, Request, Type, Credits, and Result.
5. Populate `allowed_chat_ids` in the Settings node (comma-separated) and adjust defaults like edit style, clip count, dubbing language, captions, and music as needed.

## Requirements
- A Renderster account and API key (clips work on the Free plan; auto edit and dub need a paid plan, with a 7-day free trial)
- A Telegram bot token from @BotFather
- An OpenAI API key (gpt-4o-mini)
- A Google Sheets account for the job log

## Customization
- Change the default edit style, clip count, dub language, captions and music in the Settings node
- Teach the bot new commands or phrases by editing the prompt of Understand the request
- Allow more people by adding their chat IDs to allowed_chat_ids

## Additional info
Video tutorial: https://www.youtube.com/watch?v=lijTDCFuPoA . Self-hosted n8n: set WEBHOOK_URL to your public address so Renderster can resume the Wait node at once (otherwise it checks every 10 minutes).

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
