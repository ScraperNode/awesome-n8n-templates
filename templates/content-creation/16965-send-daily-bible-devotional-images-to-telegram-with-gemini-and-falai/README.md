# 🎬 Send daily Bible devotional images to Telegram with Gemini and Fal.ai

> ⚡ **12 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily at 7am, fetches a KJV Bible verse from bible-api.com, generates a devotional and an AI image prompt using Google Gemini and OpenRouter, renders a vertical image via Fal.ai, and sends the image plus devotional text to a Telegram chat.

## How it works
1. Runs every day at 7am on a schedule.
2. Formats the current date and looks up the matching row in a Google Sheets “bible plan” spreadsheet.
3. Requests a KJV verse from bible-api.com and sends the verse to Google Gemini, which can also use Tavily and an HTTP request tool to gather context and retrieve full verse text.
4. Sends Gemini’s draft to Anthropic Claude (via OpenRouter) to polish the devotional into Telegram-ready text.
5. Sends the verse and devotional theology to DeepSeek (via OpenRouter) to produce a single, publication-ready image prompt with an on-image KJV text overlay.
6. Submits the prompt to Fal.ai (ByteDance Seedream) to generate a 1080×1920 image, waits briefly, and downloads the resulting image.
7. Sends the generated image to Telegram as a photo with the devotional text as the caption.

## Setup
1. Add credentials for Google Sheets OAuth2, Telegram (bot token/chat), OpenRouter, Google Gemini (PaLM), Tavily, and Fal.ai (HTTP Header auth).
2. Update the Google Sheets document URL/sheet tab and ensure the sheet has a "date" column that matches the formatted date used for filtering.
3. Confirm the schedule time in the schedule trigger and adjust the date source/formatting logic in the JavaScript step if your sheet uses a different date format.
4. Verify the Fal.ai endpoint and image settings (1080×1920) and ensure the Fal.ai queue wait time is long enough for your account and model latency.
5. Set the target Telegram chat/channel and review the caption length so the devotional fits Telegram’s message limits.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Calculator

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
