# 📖 Convert Telegram voice messages to Google Docs with Whisper & GPT-4o tagging

> ⚡ **359 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

This n8n template demonstrates how to automatically convert voice messages from Telegram into structured, searchable notes in Google Docs using AI transcription and intelligent tagging.

Use cases are many: Try capturing ideas on-the-go while walking, recording meeting insights hands-free, creating voice journals, or building a personal knowledge base from spoken thoughts!

## Good to know

- OpenAI Whisper transcription costs approximately $0.006 per minute of audio
- ChatGPT tagging adds roughly $0.001-0.003 per message depending on length
- The workflow supports both German and English voice recognition
- Text messages are also supported - they bypass transcription and go directly to AI tagging
- **Perfect companion**: Combine with the "**Weekly AI Review**" workflow for automated weekly summaries of all your notes!

## How it works


- Telegram receives your voice message or text and triggers the workflow
- An IF node intelligently detects whether you sent audio or text content
- For voice messages: Telegram downloads the audio file and OpenAI Whisper transcribes it to text
- For text messages: Content is passed directly to the next step
- ChatGPT analyzes the content and generates up to 3 relevant keywords (Work, Ideas, Private, Health, etc.)
- A function node formats everything with Swiss timestamps, message type indicators, and clean structure
- The formatted entry gets automatically inserted into your Google Doc with date, keywords, and full content
- Telegram sends you a confirmation with the transcribed/original text so you can verify accuracy

## How to use

- Simply send a voice message or text to your Telegram bot - the workflow handles everything automatically
- The manual execution can be used for testing, but in production this runs on every message
- Voice messages work best with clear speech in quiet environments for optimal transcription

## Requirements

- Telegram Bot Token and configured webhook
- OpenAI API account for Whisper transcription and ChatGPT tagging
- Google Docs API access for document writing
- A dedicated Google Doc where all notes will be collected

## Customising this workflow

- Adjust the AI prompt to use different tagging categories relevant to your workflow (e.g., project names, priorities, emotions)
- Add multiple Google Docs for different contexts (work vs. private notes)
- Include additional processing like sentiment analysis or automatic task extraction
- Connect to other apps like Notion, Obsidian, or your preferred note-taking system


And don't forget to also implement the complimentary workflow **Weekly AI Review!**

## 🔗 Nodes Used

Function, Telegram, Telegram Trigger, Google Docs, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
