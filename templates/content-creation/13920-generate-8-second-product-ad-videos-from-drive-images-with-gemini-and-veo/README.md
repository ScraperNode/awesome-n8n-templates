# 🎬 Generate 8-second product ad videos from Drive images with Gemini and Veo

> ⚡ **252 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
This workflow generates an 8-second product advertising video from a single input image. It downloads the image from Google Drive, converts it to base64 for the API request, analyzes it with Gemini (Creative Visualiser), then turns the description into a short video script/prompt. The prompt + image are sent to Veo to start a long-running video generation job. The workflow polls until a video URI is available, downloads the MP4, and uploads it back to Google Drive.

## Setup
1) Connect credentials used in this workflow: Google Drive + Google Gemini, and an API key for the Veo HTTP requests.
2) Set the input image file in **Download ad image**.
3) Set the output folder in **Upload to Drive**.
4) (Optional) Adjust `aspectRatio`, `resolution`, and `durationSeconds` in **Generate Video**, then execute the workflow.

## 🔗 Nodes Used

HTTP Request, Google Drive, Basic LLM Chain, Structured Output Parser, Extract from File, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
