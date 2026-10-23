# 🎬 Generate Mind-Bending 'What If' Videos with Google Veo 3

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Generate the script** – Takes a "what if" question and creates a 24-second video script with 4 scenes (Hook, Wonder, Reality, CTA) using Gemini 2.5 Pro

**2. Create Veo prompts** – Translates each scene's visual description into a production-ready prompt (120–150 words) optimized for Google Veo 3.0

**3. Generate voiceover** – Converts each scene's script into natural speech using Google Text-to-Speech and uploads to GCS

**4. Generate video clips** – Creates four 8-second AI-generated video clips with Veo 3.0 and uploads each to GCS

**5. Merge & render** – Combines all video clips and audio tracks using Creatomate into a single 24-second video

**6. Deliver** – Sends the final video back via Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + Text-to-Speech + GCS), DeepSeek, Creatomate, and Telegram Bot

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Test** – Enter a "what if" question and execute the workflow

## 🔗 Nodes Used

HTTP Request, Telegram, Google Cloud Storage, Basic LLM Chain, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
