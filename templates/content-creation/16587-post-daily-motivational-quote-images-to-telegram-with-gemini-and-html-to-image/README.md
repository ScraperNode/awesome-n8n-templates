# 🎬 Post daily motivational quote images to Telegram with Gemini and HTML to Image

> ⚡ **125 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs daily on a schedule, uses Google Gemini to generate a short motivational quote and author, renders it into an image via htmlcsstoimg.com, and posts the resulting photo to a Telegram channel.

## How it works
1. Runs once per day at the configured hour using a schedule trigger.
2. Sends a prompt to Google Gemini to generate an original motivational quote and an author name in a strict two-line format.
3. Extracts the quote and author from the Gemini response and falls back to default values if parsing fails.
4. Calls the htmlcsstoimg.com API to render the quote and author into a styled 1080×1080 image using an HTML/CSS template.
5. Sends the generated image URL to Telegram and posts it as a photo to the configured channel.

## Setup
1. Add Google Gemini (PaLM) API credentials in n8n for the quote generation step.
2. Create a Telegram bot with @BotFather, add it as an admin to your target channel, and connect the bot token as a Telegram credential in n8n.
3. Sign up for an htmlcsstoimg.com API key and set it in the HTTP request header as CLIENT-API-KEY.
4. Replace @your_channel_username with your Telegram channel username and adjust the schedule time and quote prompt as needed.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
