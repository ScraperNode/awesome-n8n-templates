# ⚡ Run a Telegram voice and chat assistant with OpenAI, Gmail, Calendar, and Notion

> ⚡ **274 views** · ⚡ [Personal Productivity](../)

## Description

## Quick overview
This workflow turns a Telegram bot into a personal assistant that understands text or voice notes (transcribed with OpenAI), can read Gmail and Google Calendar, look up Notion tasks and contacts, and can draft and send emails with an approval step in Telegram.

## How it works
1. Triggers when a new Telegram message arrives.
2. Loads assistant settings (name, OpenAI model, languages, memory window) and checks whether the message is a voice note or plain text.
3. If it is a voice note, downloads the audio from Telegram and transcribes it with OpenAI; otherwise it uses the message text as the user input.
4. Sends the user input to an OpenAI-powered agent that keeps short-term chat memory and decides whether to call Gmail, Google Calendar, or Notion tools to answer the request.
5. If the agent decides to send an email via Gmail, it asks for explicit approval in Telegram before proceeding.
6. Sends the agent’s final response back to the user in Telegram.

## Setup
1. Create a Telegram bot with @BotFather, add your Telegram credentials in n8n, and start a chat with the bot so it can reply to you.
2. Add an OpenAI API credential and set the desired chat model and transcription language in the Configuration step.
3. Add Gmail OAuth2 credentials for reading emails and sending emails.
4. Add Google Calendar OAuth2 credentials and ensure the workflow can access the calendar you want to query.
5. Add a Notion credential and select the correct Notion databases for tasks and contacts in the two Notion tools.

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
