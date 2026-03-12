# 🎬 Transform HR PDFs into engaging onboarding videos with AI, HeyGen and Google Drive

> ⚡ **312 views** · 🎬 [Content Creation & Video](../)

## Description

## 📊 Description
Automate your HR onboarding process by transforming complex policy PDFs into friendly, structured onboarding videos using AI and HeyGen. 📄🎬 This workflow receives HR policy documents via webhook, extracts and simplifies the content with GPT-based AI, generates a natural script for a HeyGen avatar, renders the onboarding video, checks its status until completion, and finally uploads the finished video to Google Drive. Perfect for HR teams who want scalable, consistent, and engaging onboarding experiences without manual video production. ✨👥

## 🔁 What This Template Does
1️⃣ Receives an HR policy PDF through a webhook for processing. 🌐
 2️⃣ Downloads the PDF and extracts readable text from it. 📄
 3️⃣ Uses AI to simplify policy language into structured onboarding guidance. 🤖
 4️⃣ Converts structured guidance into a friendly onboarding video script. 🗣️
 5️⃣ Sends the script to HeyGen to generate a video with avatar narration. 🎥
 6️⃣ Repeatedly checks the HeyGen API until the video is complete. ⏳
 7️⃣ Downloads the completed video automatically. 📥
 8️⃣ Uploads the final onboarding MP4 file into Google Drive. ☁️
 9️⃣ Returns the video file via webhook for further automation or client-side display. 🔁

## ⭐ Key Benefits
✅ Converts dense HR documents into engaging onboarding videos
 ✅ Ensures consistency across all onboarding materials
 ✅ Reduces manual video scripting and editing workload
 ✅ Provides warm, friendly, employee-ready onboarding guidance
 ✅ Fully automated pipeline from PDF → AI script → HeyGen video → Drive
 ✅ Ideal for remote, hybrid, or fast-scaling HR teams

## 🧩 Features
- PDF ingestion via secure webhook
- Text extraction for accurate AI processing
- Two-stage AI workflow: policy simplification + script creation
- Structured JSON enforcement for reliable outputs
- HeyGen video generation with avatar narration
- Automated status polling loop
- Google Drive upload with dynamic file naming
- End-to-end error handling
- Webhook response with video delivery

## 🔐 Requirements
- Google Drive OAuth2 credentials
- HeyGen API key
- OpenAI API key (GPT-4.1-mini or GPT-4o required)
- Webhook endpoint for PDF uploads
- Valid avatar ID + voice ID for HeyGen

## 🎯 Target Audience
- HR teams onboarding new employees
- L&D (Learning & Development) teams
- Companies that want to modernize policy training
- Fast-growing startups needing scalable onboarding content
- Agencies creating onboarding videos for clients

## 🔗 Nodes Used

HTTP Request, Webhook, Google Drive, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
