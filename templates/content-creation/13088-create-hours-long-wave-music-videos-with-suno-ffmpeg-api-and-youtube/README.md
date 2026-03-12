# 🎬 Create hours-long wave music videos with Suno, ffmpeg-api and YouTube

> ⚡ **970 views** · 🎬 [Content Creation & Video](../)

## Description

# Overview

This workflow automatically creates **hours-long wave music videos** by combining AI-generated music from **Suno** with a background video, fully automated using **n8n** and **ffmpeg-api**.

It connects music prompt generation, AI song creation, audio aggregation, video merging, and YouTube publishing into a single end-to-end automation. Once configured, the workflow runs continuously with no manual editing required.

This workflow is built for creators producing lo-fi, wave, ambient, or long-play music content who want a reliable and scalable way to generate long-form videos automatically.

---

# What can this workflow do?

- Collect music themes, background video URLs, and track counts via an input form  
- Generate multiple AI music tracks using Suno  
- Automatically check rendering status and retrieve completed songs  
- Concatenate multiple tracks into a single long-form audio file  
- Merge the final audio with a background video using ffmpeg-api  
- Upload the completed video to YouTube automatically  
- Generate SEO-optimized titles and descriptions using an AI model  

This workflow reduces manual work while keeping the entire music video production process structured and repeatable.

---

# How it works

You start by submitting a **music theme**, a **background video URL**, and the **number of music tracks** through an n8n form. The workflow initializes a working directory using ffmpeg-api to manage all audio and video assets.

An AI agent converts the music theme into structured Suno prompts. Suno then generates multiple music tracks, and the workflow continuously checks their rendering status until all songs are ready.

Once completed, the songs are downloaded, uploaded to ffmpeg-api storage, and concatenated into a single long-form audio track. This audio is merged with the background video to create the final hours-long wave music video.

Finally, the completed video is uploaded to YouTube. An AI model generates SEO-friendly metadata, and the video is published automatically without manual intervention.

---

# Setup steps

1. Connect an AI model (Gemini) for music prompt generation and YouTube metadata creation  
2. Configure Suno API access for AI music generation  
3. Set up ffmpeg-api for directory creation, file uploads, audio concatenation, and video merging  
4. Connect your YouTube account for automated uploads  
5. Review and customize the input form fields if needed  

After setup, the workflow runs end to end automatically.

---

# Documentation

For a full walkthrough and advanced customization ideas, watch the detailed tutorial on [YouTube](https://youtu.be/RBoLAgaWzFo?si=MqFcTTRWSb5AEOjr).

## 🔗 Nodes Used

Google Sheets, HTTP Request, AI Agent, Structured Output Parser, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
