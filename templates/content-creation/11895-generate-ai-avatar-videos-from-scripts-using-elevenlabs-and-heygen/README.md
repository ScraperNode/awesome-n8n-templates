# 🎬 Generate AI avatar videos from scripts using ElevenLabs and HeyGen

> ⚡ **100 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Description
Automate end-to-end AI video creation by transforming text scripts into professional avatar videos with natural voiceovers. 🎬🤖 This workflow receives a script via webhook, generates realistic audio using ElevenLabs, creates an AI avatar video through HeyGen, continuously polls for completion, and uploads the final MP4 file to Google Drive. The completed video is also returned directly via webhook for frontend or app usage. Perfect for product demos, onboarding videos, explainers, and content platforms that need scalable video generation without manual editing. 🚀📹

## 🔁 What This Template Does
1️⃣ Receives a POST request containing script, avatar ID, voice ID, and style via webhook. 🌐
 2️⃣ Extracts and validates request parameters for processing. 🧾
 3️⃣ Generates natural-sounding voiceover audio using ElevenLabs. 🎙️
 4️⃣ Uploads the generated audio file to HeyGen as a video asset. ⬆️
 5️⃣ Creates an AI avatar video using the selected HeyGen avatar and audio track. 🤖🎥
 6️⃣ Polls HeyGen every few seconds until video generation is complete. ⏳
 7️⃣ Retrieves video URLs, captions, thumbnails, and metadata. 📊
 8️⃣ Downloads the finished MP4 video file. ⬇️
 9️⃣ Uploads the final video to Google Drive with structured naming. ☁️
 🔟 Returns the video file via webhook response for frontend display or download. 🔁
 1️⃣1️⃣ Sends Slack alerts automatically if any workflow error occurs. 🚨

## ⭐ Key Benefits
✅ Converts plain text into studio-quality avatar videos automatically
 ✅ Uses human-like AI voiceovers from ElevenLabs
 ✅ Eliminates manual video recording, editing, and rendering
 ✅ End-to-end automation from script → video → Drive
 ✅ Frontend-ready with webhook video response
 ✅ Ideal for scalable video content production

## 🧩 Features
- Webhook-based video generation trigger
- ElevenLabs multilingual text-to-speech integration
- HeyGen AI avatar video creation
- Dynamic avatar, voice, and style selection
- Polling loop to handle async video rendering
- Google Drive video upload
- Binary video return via webhook
- Slack-based error handling and alerts

## 🔐 Requirements
- ElevenLabs API key (voice generation)
- HeyGen API key (avatar video creation)
- Google Drive OAuth2 credentials
- Slack API credentials (optional, for error alerts)
- Webhook client sending script, avatar_id, voice_id, and video_style

## 🎯 Target Audience
- SaaS teams creating onboarding or explainer videos
- Content creators producing AI talking-head videos
- EdTech platforms generating video lessons
- Marketing teams scaling video production
- Automation teams building AI video pipelines

## 🔗 Nodes Used

HTTP Request, Slack, Webhook, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
