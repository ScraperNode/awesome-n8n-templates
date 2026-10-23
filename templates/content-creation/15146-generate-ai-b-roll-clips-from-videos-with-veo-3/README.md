# 🎬 Generate AI B-roll clips from videos with Veo 3

> ⚡ **25 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

**1. Analyze the video** – Downloads a 2-minute video and uses Gemini 2.5 Flash to identify emotional peaks, hook moments, and timestamps

**2. Select best moments** – Uses GPT-4o-mini to pick the 3 best moments for B-roll insertion based on confidence scores and emotional impact

**3. Generate B-roll prompts** – For each selected moment, GPT-4o creates an 80–120 word Veo 3 prompt with camera movement, lighting, shot type, and music direction

**4. Create B-roll clips** – Generates four 8-second AI video clips with Veo 3.0 for each moment and uploads to GCS

**5. Deliver** – Aggregates all generated clip URLs and sends them to Telegram

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + Gemini + GCS) and OpenAI

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` and `SET1` nodes with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Set video URL** – Enter the URL of the video you want to analyze in the `VIDEO URL` node

5. **Test** – Execute the workflow to analyze a video and generate B-roll clips

## 🔗 Nodes Used

HTTP Request, Telegram, Google Cloud Storage, Convert to File, Extract from File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
