# ⚡ Run a voice-enabled AI assistant on Telegram with OpenAI, Gmail and Notion

> ⚡ **107 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a personal assistant that handles text and voice messages using OpenAI, can read Gmail and Google Calendar, looks up tasks and contacts in Notion, and can draft and send emails with a required approval step in Telegram.

## How it works
1. Triggers when a new Telegram message is received by your bot.
2. Detects whether the message is a voice note or text, and if it is voice, downloads it from Telegram and transcribes it with OpenAI.
3. Sends the resulting user text to an OpenAI-powered agent that keeps a short conversation memory per chat.
4. When needed, the agent fetches recent emails from Gmail, lists upcoming events from Google Calendar, and pulls tasks or contacts from Notion to answer the request.
5. If the agent decides to send an email, it asks for approval in Telegram and only proceeds after you approve within the time limit.
6. Sends the assistant’s final response back to the same Telegram chat.

## Setup
1. Create a Telegram bot with @BotFather, add the Telegram credentials in n8n, and use the workflow’s Telegram trigger to connect the bot.
2. Add an OpenAI API credential for both chat responses and voice transcription, and set your preferred model and languages in the Configuration values.
3. Add Gmail OAuth2 credentials for reading and sending emails, and ensure the account has access to the inbox you want to manage.
4. Add Google Calendar OAuth2 credentials and select the calendar to read upcoming events from.
5. Add a Notion credential and select your Notion databases for tasks and contacts in the two Notion tools.

## Additional info
# Nova, your personal AI assistant on Telegram (voice, email and calendar)

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Build-Nova-a-personal-AI-assistant-on-Telegram-39a3d6550fd981af9a71e5e18feefe7b)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
