# 🔬 Turn meeting transcripts or audio into Google Docs action summaries with Groq Whisper, OpenRouter, and Google Docs

> ⚡ **70 views** · 🔬 [Document Extraction & Analysis](../)

## Description

# Meeting Transcript → AI Summary & Google Doc (Text + Audio)

Turn raw meeting transcripts or audio recordings into structured, 
ready-to-share Google Docs — automatically. No manual note-taking, 
no copy-pasting.

## What It Does

Send a meeting transcript (text or audio file) via a webhook and this 
workflow will:

- Auto-detect whether you sent text or an audio file
- Transcribe audio using Groq Whisper (free — 28,800 sec/day)
- Use AI to extract a structured summary via OpenRouter
- Create a formatted Google Doc with 4 clearly defined sections:
  - 📌 Executive Summary (2–3 sentences)
  - ✅ Key Decisions Made
  - 📋 Action Items (with Owner & Deadline)
  - 🗓️ Suggested Next Meeting Agenda
- Return the Google Doc link instantly in the webhook response

## Who Is This For

- Teams and managers who want automatic meeting notes without extra tools
- Anyone recording calls or meetings who needs structured follow-ups fast
- Operations and project managers tracking decisions and action items

## How It Works

1. **Trigger** — Send a POST request to the webhook with either:
   - JSON body: `transcript`, `meeting_title`, `meeting_date`
   - Multipart form-data: `audio` file (.mp3, .mp4, .wav, .m4a)
2. **Route** — An If node detects whether text or audio was sent
3. **Transcribe** *(audio path only)* — Groq Whisper transcribes the audio
4. **Summarize** — OpenRouter AI (GPT-4o-mini) structures content into JSON
5. **Format** — A Code node builds the final document content
6. **Publish** — A Google Doc is created and the summary is written into it
7. **Respond** — Webhook returns the doc title, URL, and summary preview

## Requirements

| Service | Purpose | Cost |
|---|---|---|
| [Groq](https://console.groq.com) | Audio transcription (Whisper) | Free (28,800 sec/day) |
| [OpenRouter](https://openrouter.ai) | AI summarization | Free models available |
| Google Docs OAuth2 | Create & write documents | Free |

## Setup Steps

1. **Groq Credential**
   - Get a free API key at console.groq.com
   - In n8n → Settings → Credentials → New → **Header Auth**
   - Set Name: `Authorization`, Value: `Bearer YOUR_GROQ_KEY`
   - Select this credential in the **Transcribe Audio** node

2. **OpenRouter Credential**
   - Get a free API key at openrouter.ai
   - In n8n → Settings → Credentials → New → **Header Auth**
   - Set Name: `Authorization`, Value: `Bearer YOUR_OPENROUTER_KEY`
   - Select this credential in the **Call AI API** node

3. **Google Docs**
   - In n8n → Settings → Credentials → New → **Google Docs OAuth2**
   - Sign in and allow access
   - Select this credential in both Google Docs nodes

4. **Activate** the workflow and copy the webhook URL from the trigger node

## Example Request (Text)

POST to your webhook URL with:
```json
{
  "transcript": "John: Let's move the launch to Q3...",
  "meeting_title": "Q2 Planning Sync",
  "meeting_date": "2025-05-05"
}
```

## Example Request (Audio)

POST with `multipart/form-data`:
- `audio` → your audio file (.mp3, .mp4, .wav, .m4a)
- `meeting_title` → optional
- `meeting_date` → optional

## 🔗 Nodes Used

HTTP Request, Webhook, Google Docs

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
