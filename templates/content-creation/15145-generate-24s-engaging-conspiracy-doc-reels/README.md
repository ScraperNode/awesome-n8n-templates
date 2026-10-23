# 🎬 Generate 24s engaging conspiracy doc reels

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Find trending theories** – Uses Grok-4 to scan X (Twitter) for the top emerging conspiracy theory from the last 3 days

**2. Write the script** – Takes the theory and creates a 24-second documentary-style script with 4 scenes (Hook, Segment 1, Segment 2, CTA) using Gemini 2.5 Pro

**3. Create Veo prompts** – Translates each scene's visual description into a production-ready prompt (120–150 words) optimized for Google Veo 3.0

**4. Generate voiceover** – Converts each scene's script into dark, mysterious narration using Google Text-to-Speech and uploads to GCS

**5. Generate video clips** – Creates four 8-second AI-generated video clips with Veo 3.0 and uploads each to GCS

**6. Merge & render** – Combines all video clips and audio tracks using Creatomate into a single 24-second vertical video

**7. Deliver** – Sends the final conspiracy reel to Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + Text-to-Speech + GCS), xAI (Grok-4), and Creatomate

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` node with your Google Cloud `PROJECT_ID`, `CLIENT_EMAIL`, and `bucket_name`

4. **Test** – Execute the workflow to find a trending theory and generate a video

## 🔗 Nodes Used

HTTP Request, Telegram, Google Cloud Storage, Basic LLM Chain, Structured Output Parser, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
