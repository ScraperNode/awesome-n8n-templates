# ⚡ Create Notion to-do items from Telegram voice notes using Groq Whisper AI

> ⚡ **49 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for?

Busy professionals, entrepreneurs, and anyone who thinks faster than they type. If you've ever had a brilliant idea while driving, walking, or halfway through another task — and lost it because you didn't stop to write it down — this workflow is for you. Speak a task into Telegram, it appears as a checkbox on today's Notion page. Zero typing. Zero friction.

## What problem does this solve?

Traditional to-do apps demand that you stop, open the app, type the task, and tag it with a date. That friction means ideas get lost. This workflow removes every step between "thought" and "captured task" — you just press the Telegram mic button and speak. Groq's Whisper AI transcribes your voice, and the text lands in Notion under today's date automatically. If today's page doesn't exist yet, it gets created on the fly.

## How it works

1. You send a voice note to your Telegram bot from anywhere
2. n8n downloads the audio file from Telegram
3. A small JavaScript step renames the `.oga` extension to `.ogg` so Groq accepts it
4. Groq's Whisper Large v3 Turbo transcribes the audio into text (fast, free, multi-lingual)
5. The workflow searches your Notion workspace for a page titled with today's date (DDMMYYYY format, IST timezone)
6. If today's page exists, a new to-do checkbox is appended with your transcription
7. If today's page does not exist, a new page is created automatically and the to-do is added as the first block

## Setup steps

Setup takes around 15-20 minutes. You will need:

- A Telegram bot (free — created via @BotFather)
- A Groq API key (free tier — console.groq.com)
- A Notion integration (free — notion.so/my-integrations)
- A Notion parent page shared with your integration

Complete step-by-step setup instructions, credential configuration, and customization tips are included as sticky notes inside the workflow canvas. Import the workflow, read the yellow setup sticky note, and follow along — no guesswork required.

## Customization ideas

- Change the timezone from `Asia/Kolkata` to your own (e.g. `Europe/London`, `America/New_York`)
- Swap Groq's Whisper Large v3 Turbo for Whisper Large v3 for higher accuracy
- Change the date format from `DDMMYYYY` to whatever matches your Notion naming convention
- Add a Telegram confirmation reply so you know the task was captured successfully
- Route different keywords to different Notion databases (e.g. "work:" → Work page, "personal:" → Personal page)

## Why Groq Whisper?

Groq offers one of the fastest Whisper inference speeds available, transcribing minute-long audio clips in under a second. The free tier includes generous daily limits that cover most personal use cases without ever hitting a paywall.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
