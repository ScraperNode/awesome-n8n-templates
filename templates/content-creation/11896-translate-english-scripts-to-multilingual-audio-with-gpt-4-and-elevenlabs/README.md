# 🎬 Translate English scripts to multilingual audio with GPT-4 and ElevenLabs

> ⚡ **55 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Description
Automate multilingual voice content creation by translating an English script into multiple languages and generating natural-sounding audio files using AI. 🌍🎙️ This workflow receives a script via webhook, translates it into selected target languages using GPT-4, converts each translation into high-quality speech with ElevenLabs, and uploads the resulting MP3 files to Google Drive. It’s ideal for teams producing localized videos, podcasts, courses, or educational content at scale — without manual translation or recording. 🚀✨

## 🔁 What This Template Does
1️⃣ Receives an English script and target languages via webhook. 🌐
 2️⃣ Extracts and normalizes request parameters for processing. 📝
 3️⃣ Uses GPT-4 with a strict JSON schema to translate the script into multiple languages. 🤖🌍
 4️⃣ Splits each translated language into individual processing items. 🔀
 5️⃣ Converts each translation into natural-sounding speech using ElevenLabs. 🎙️
 6️⃣ Processes translations sequentially to avoid API limits. ⏳
 7️⃣ Uploads language-specific MP3 files to Google Drive with clean naming. ☁️
 8️⃣ Returns generated audio as a webhook response for frontend usage. 🔁
 9️⃣ Triggers Slack alerts if any workflow error occurs. 🚨

## ⭐ Key Benefits
✅ Instantly localizes audio content into multiple languages
 ✅ Produces human-quality voiceovers without recording studios
 ✅ Ensures consistent tone and meaning across all translations
 ✅ Fully automated from script input to audio delivery
 ✅ Scales easily for videos, podcasts, training, and education
 ✅ Clean Google Drive storage for easy access and reuse

## 🧩 Features
- Webhook-based script ingestion
- GPT-4 multilingual translation with structured JSON output
- AI memory for consistent translation behavior
- ElevenLabs multilingual text-to-speech generation
- Batch processing for multiple languages
- Google Drive MP3 upload with language-based filenames
- Webhook audio response for frontend apps
- Slack-based error handling and alerts

## 🔐 Requirements
- OpenAI API key (GPT-4 / GPT-4.1-mini)
- ElevenLabs API key (multilingual voice model)
- Google Drive OAuth2 credentials
- Slack API credentials (for error alerts)
- Webhook client sending Script, first_language, and second_language

## 🎯 Target Audience
- Content teams creating localized videos or podcasts
- EdTech platforms producing multilingual learning material
- Marketing teams localizing campaigns across regions
- Creators building AI-driven voice pipelines
- Automation teams integrating audio localization into products

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
