# 🎬 Generate VEO3 videos from form ideas with ChatGPT, fal.ai, Drive and Gmail

> ⚡ **150 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video idea via an n8n Form, uses OpenAI to turn it into an optimized prompt, generates an 8-second VEO3 video with native audio via fal.ai, saves the MP4 to Google Drive, and emails the Drive link via Gmail.

## How it works
1. Receives a submission from an n8n Form with the requester’s email, a plain-English video idea, and a selected style.
2. Uses OpenAI (via an AI Agent) to convert the idea and style into a structured VEO3 title and detailed prompt returned as JSON.
3. Cleans and parses the AI JSON, creates a filename-safe title, and sets the generation parameters to 16:9 and 8 seconds.
4. Submits the prompt to fal.ai’s queue endpoint for the fal-ai/veo3 model and gets a request ID.
5. Polls fal.ai every 30 seconds until the job status returns COMPLETED.
6. Retrieves the final MP4 URL from fal.ai, downloads the video, uploads it to Google Drive, and emails the Google Drive web link to the requester via Gmail.

## Setup
1. Create a fal.ai account, generate an API key, and replace `YOUR_FAL_AI_API_KEY` in the fal.ai HTTP request headers.
2. Add an OpenAI API credential in the OpenAI Chat Model node and select the model you want to use.
3. Connect Google Drive OAuth2 and replace `YOUR_GDRIVE_FOLDER_ID` with the target folder ID where videos should be saved.
4. Connect Gmail OAuth2 for sending emails, then activate the workflow and use the Form URL (path `veo3-video-generator`) to submit requests.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, AI Agent, OpenAI Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
