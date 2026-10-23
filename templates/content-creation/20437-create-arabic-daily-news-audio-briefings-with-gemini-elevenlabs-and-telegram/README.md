# 🎬 Create Arabic daily news audio briefings with Gemini, ElevenLabs and Telegram

> ⚡ **32 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily at 07:00, pulls Arabic headlines from an RSS feed, uses Google Gemini to rank and rewrite the top five stories into a short Modern Standard Arabic briefing, then sends the briefing as text and ElevenLabs-generated audio to Telegram while logging delivery details to Google Sheets.

## How it works
1. Runs every morning at 07:00 on a schedule.
2. Reads up to 20 items from the configured Arabic RSS news feed.
3. Sends the feed items to Google Gemini to select the five most important stories and rewrite them into a JSON briefing in Modern Standard Arabic.
4. Parses Gemini’s JSON response into a formatted Telegram message and extracts key fields like date, top headline, and top summary.
5. Sends the formatted text briefing to a Telegram chat using Markdown formatting.
6. Converts the briefing text to Arabic speech with the ElevenLabs Text-to-Speech API and sends the resulting audio file to the same Telegram chat.
7. Appends a delivery log row to a Google Sheets document with the date, top headline, top summary, audio sent status, and overall status.

## Setup
1. Add Google Gemini credentials (API key) for the Google Gemini node.
2. Create a Telegram bot and add your Telegram bot token as credentials, then set the target Telegram chat ID in both Telegram send steps.
3. Add an ElevenLabs API key using an HTTP header authentication credential and update the ElevenLabs voice ID in the Text-to-Speech request URL if needed.
4. Connect Google Sheets credentials and replace `YOUR_GOOGLE_SHEET_ID` with your document ID, ensuring the `Briefings` sheet exists with matching columns (Date, Headline, Summary, Audio Sent, Status).
5. Review and update the RSS feed URL if you want to source headlines from a different publisher or feed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
