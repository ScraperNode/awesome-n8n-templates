# ⚡ Voice-to-Ideas: Transcribe Telegram Voice Notes with OpenAI Whisper to Google Sheets

> ⚡ **214 views** · ⚡ [Personal Productivity](../)

## Description

## Voice-to-Ideas: Auto-Transcribe Telegram Voice Notes to Google Sheets

### Who it's for
Creators, entrepreneurs, writers, and anyone who wants to capture ideas quickly without typing. This workflow is ideal for storing thoughts, content ideas, brainstorms, reminders, or voice memos on the go.

### What it does
This workflow listens for Telegram voice messages, sends the audio to OpenAI Whisper for transcription, and saves the raw text directly into a Google Sheet. No formatting or additional processing is applied. The exact transcription from the audio is stored as-is.

### How it works
1. A Telegram Trigger detects when you send a voice message to your bot.  
2. The Telegram node downloads the audio file.  
3. OpenAI Whisper transcribes the voice note into text.  
4. The raw transcription is appended to Google Sheets along with the current date.

### Requirements
- Telegram bot token (created via BotFather)  
- OpenAI API key with Whisper transcription enabled  
- Google Sheets credentials connected in n8n  
- A Google Sheet with **two columns**:
  - **Notes** (stores the transcription text)  
  - **Date** (timestamp of the voice note)

### Setup steps
1. Create a Telegram bot with BotFather and connect Telegram credentials in n8n.  
2. Add your OpenAI API key to the OpenAI node.  
3. Connect Google Sheets credentials in n8n.  
4. Create a Google Sheet with two columns: **Notes** and **Date**.  
5. Send a voice message to your Telegram bot to test the workflow.

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
