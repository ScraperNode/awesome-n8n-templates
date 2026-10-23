# 🎬 Generate Veo 3 short-form videos from a form using Groq and Google Sheets

> ⚡ **150 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a video topic via an n8n form, uses Groq to generate a short-form video idea and Veo 3 prompt, logs the content to Google Sheets, generates the video through Vertex AI (Veo 3), uploads it to Google Drive, and writes the Drive URL to the sheet.

## How it works
1. Receives a submission from an n8n form with a topic, desired vibe, and target audience.
2. Uses Groq (llama-3.3-70b-versatile) to generate a structured video concept (caption, idea, environment, status) and then expands it into a detailed cinematic prompt for Google Veo 3.
3. Appends the generated idea, caption, environment, status, and prompt to a Google Sheets content log.
4. Submits the prompt to Google Veo 3 via the Vertex AI REST API and polls the long-running operation until the generation reports it is done.
5. If the Veo 3 response returns an API error, waits and retries the full generation up to five times before stopping.
6. Converts the returned base64 video into an MP4 file, uploads it to Google Drive, and updates Google Sheets with the Drive webViewLink matched by the prompt.

## Setup
1. Add Groq API credential and select it in the Groq Chat Model used by the idea and prompt generation steps.
2. Create a Google Sheet with columns like `Idea`, `Captions`, `Environment`, `Status`, `Prompt`, and `Video URL`, then replace `YOUR_GOOGLE_SHEET_ID` and set the target sheet name.
3. Add a Google Service Account credential with Vertex AI access, enable the Veo API in your GCP project, and replace `YOUR_GCP_PROJECT_ID` in both Vertex AI HTTP request URLs.
4. Add a Google Drive OAuth2 credential and replace `YOUR_DRIVE_FOLDER_ID` with the folder where the generated MP4s should be uploaded.
5. Publish the n8n form (or use the test URL) and share it with users who should be able to submit video requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, AI Agent, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
