# 💬 Transcribe Telegram voice messages with Palatine Speech

> ⚡ **7 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow listens for new Telegram bot messages, transcribes incoming voice notes using Palatine Speech, and replies with the transcript, while echoing back any text messages unchanged.

## How it works
1. Triggers when a new message is received by your Telegram bot.
2. Checks whether the incoming message contains a voice note or a text message.
3. Downloads the voice file from Telegram when a voice note is received.
4. Sends the audio to Palatine Speech to generate a transcription.
5. Replies in the same Telegram chat with the transcription text.
6. If the message is text, replies by echoing the same text back to the chat.

## Setup
1. Install n8n-nodes-palatine-speech on self-hosted n8n, or select the verified Palatine Speech node if it is available in your n8n Cloud workspace.
2. Create a dedicated Telegram bot with BotFather, add its token to Telegram credentials in n8n, and select those credentials in the trigger, download and reply nodes. Use a separate bot for testing to avoid replacing another workflow webhook.
3. Add your Palatine Speech API credentials to the transcription node. Ensure Telegram can reach your n8n HTTPS webhook URL, test a short voice message and a text message, then publish the workflow. Restrict allowed chat IDs if this bot is for a private team.

## Requirements
- Telegram Bot API credentials (bot token from BotFather)
- Palatine Speech API credentials (API key from the Palatine Speech dashboard)
- An n8n installation with the Palatine Speech community node available and a public HTTPS webhook URL reachable by Telegram

## Customization
- Reply with an AI summary instead of the raw transcript
- Log every transcript to Google Sheets or a database
- Restrict the bot to specific chat IDs
- Add sentiment analysis to flag the tone of incoming messages

## Additional info
### Need help with Palatine Speech?

Check info here: [speech.palatine.ru](https://speech.palatine.ru/)

Documentation: [docs.speech.palatine.ru](https://docs.speech.palatine.ru/)

## 🔗 Nodes Used

Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
