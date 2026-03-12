# 🎬 Create short-form AI videos for any topic using OpenAI, Veo 3 & Gmail

> ⚡ **1,214 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow automatically creates daily AI-generated videos for any niche.  
It generates a short script, converts it into a cinematic video prompt, and produces an 8-second video with Veo 3.  
The workflow waits for the video, downloads it, and sends it via Gmail with a ready-to-post social media description.  
You can customize the script prompt to match any industry or topic.

## Step-by-step

**1. Trigger the workflow**  
- **Daily Trigger** – Starts the workflow automatically every day.  

**2. Generate content**  
- **Generate Script** – Creates a short, engaging script for your chosen niche.  
- **Generate Veo3 Prompt** – Turns the script into a cinematic video prompt for Veo 3.  
- **Social Media Description** – Writes an SEO-friendly description for LinkedIn, Instagram, and YouTube.  

**3. Generate the video**  
- **Create Video** – Sends the prompt to Veo 3 for video generation.  
- **Wait for Video** – Pauses until video processing is complete.  
- **Status** – Checks whether the video is ready.  
- **If** – Loops until the video is successfully generated.  

**4. Download and share**  
- **Download Video** – Fetches the completed video file.  
- **Send a message** – Emails the video with the social media description attached.  

## Why use this?

- Create short, engaging videos in any niche automatically.  
- Combine scriptwriting, video creation, and content delivery in one workflow.  
- Save time by eliminating manual editing and waiting.  
- Ensure consistent, professional social content for multiple platforms.  
- Flexible for marketing, education, news, product updates, and more.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
