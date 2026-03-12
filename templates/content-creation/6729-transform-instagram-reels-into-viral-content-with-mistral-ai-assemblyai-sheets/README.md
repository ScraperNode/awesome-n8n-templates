# 🎬 Transform Instagram reels into viral content with Mistral AI, AssemblyAI & Sheets

> ⚡ **1,525 views** · 🎬 [Content Creation & Video](../)

## Description

**📍Overview**
This no-code workflow is built for creators, agencies, and operators who want to automate the repurposing of Instagram Reels. It runs end-to-end and outputs structured insights and content-ready scripts—without touching a single tool manually.

**🧰 What It Does**
- Triggered simply by sending an Instagram Reel URL via Telegram.
- Downloads the Reel automatically.
- Converts video to audio using FreeConvert API.
- Transcribes speech to text using AssemblyAI.
- Analyzes both transcript and description using a connected LLM (OpenAI or Mistral).

**Extracts:**

- Niche
- Core message
- 3 viral content hooks
- 3 ready-to-use short-form video scripts
- Saves all data to a Google Sheet for easy reuse by the creator or team.

**🧪 APIs & Integrations**
- Telegram Bot API (for triggering)
- FreeConvert API (MP4 to MP3 conversion)
- AssemblyAI (for transcription)
- OpenAI or Mistral (LLM for content analysis)
- Google Sheets API (for logging all outputs)

**✅ Requirements**
- An n8n instance (self-hosted or cloud)
- AssemblyAI API key
- FreeConvert API key
- Telegram Bot token
- Google service account credentials
- Your preferred LLM key (OpenAI or Mistral)

**💡 Why Use This Workflow**
- Runs entirely from Telegram—no dashboards required
- Helps you extract deep insights and reusable content from any Instagram Reel
- All tools used are free or very low cost
- Ideal for scaling personal brands or agency operations

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
