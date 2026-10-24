# 📊 Score community job posts with Google Gemini, Google Sheets and Telegram

> ⚡ **20 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow checks the n8n Community Jobs RSS feed every 15 minutes, tracks already-seen posts in Google Sheets, uses Google Gemini to classify and score new posts, sends high-quality client requests to Telegram, and logs all scored posts back to Google Sheets.

## How it works
1. Runs every 15 minutes on a schedule.
2. Reads previously processed post IDs from a Google Sheets “seen” tab and fetches the latest items from the n8n Community Jobs RSS feed.
3. Extracts a post ID from each RSS item and filters out any posts already listed as seen.
4. Immediately appends the new post IDs to the Google Sheets “seen” tab to prevent duplicate scoring on future runs.
5. Sends each new post to Google Gemini (via the Generative Language API) to return a JSON rating with request detection, language, type, scope, score, and a one-sentence summary (batched at one request every 7 seconds).
6. Parses the Gemini response and, if the post is a real client request with a score of 5 or higher, sends a formatted alert to a Telegram chat.
7. Appends every rated post (including low scores and non-requests) to a Google Sheets “log” tab for tracking.

## Setup
1. Create a Google Sheet with tabs named `seen` (columns `id`, `date`) and `log` (columns like `date`, `score`, `isRequest`, `type`, `language`, `summary`, `title`, `link`) and update the spreadsheet URL/ID in the three Google Sheets nodes.
2. Add Google Sheets credentials with access to that spreadsheet.
3. Add a Google Gemini (PaLM / Generative Language API) credential and ensure it can call the `gemini-flash-latest:generateContent` endpoint.
4. Add a Telegram bot credential, set your target `chatId`, and start a chat with the bot so it can message you.
5. Customize `MY_PROFILE` and `PREFERRED_LANGUAGE` in the AI prompt code and adjust the minimum score threshold (currently 5) if needed.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
