# 🎬 Generate vertical product video ads with OpenAI, Groq, Google Drive and JSON2Video

> ⚡ **16 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Our workflow takes product data, generates AI images and voiceover, stores assets in Google Drive, then combines everything into a 9:16 video with automatic captions using JSON2Video.

## How it works
1. Receives a product description and product image from an n8n Form Trigger submission.
2. Uploads the submitted image to Google Drive and sends the description to Groq to generate three cinematic scene prompts.
3. Downloads a sample reference image from Google Drive and uses OpenAI image editing (gpt-image-1-mini) to generate three scene images from the prompts, uploading each generated image back to Google Drive.
4. Uses Groq to write a single-paragraph voiceover script based on the three scenes, then generates an audio voiceover with OpenAI and uploads the audio file to Google Drive.
5. Lists and downloads the uploaded scene images from a Google Drive folder, then compiles a JSON2Video project payload that assembles the three images into timed scenes with audio and subtitle settings.
6. Sends the payload to JSON2Video to render the video, waits briefly, checks rendering status, downloads the final video file, and returns it as the form completion response.

## Setup
1. Add Groq API credentials for the two Groq chat model steps (openai/gpt-oss-120b and openai/gpt-oss-20b).
2. Add OpenAI credentials (or enable n8n’s AI Gateway) for image generation and audio generation.
3. Connect a Google Drive OAuth2 account, ensure the target Drive folder used for scenes/audio exists and is accessible, and update any file/folder IDs if you don’t want to use the provided ones.
4. Create a JSON2Video account, replace the hardcoded x-api-key header value with your own API key, and adjust the project JSON (resolution, scene durations, subtitles) if needed.

## Requirements
- Product information
- Google Drive account
- OpenAI account
- Groq account
- JSON2Video API key
- Publicly accessible Google Drive files
- n8n Cloud workflow
- Internet connection

## Customization
- Product information
- Google Drive account
- OpenAI account
- Groq account
- JSON2Video API key
- Publicly accessible Google Drive files
- n8n Cloud workflow
- Internet connection

## Additional info
Branding, colors, fonts, logo, background music, transitions, animations, call-to-action text, product positioning, scene order, video duration, and export format.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, Structured Output Parser, n8n Form Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
