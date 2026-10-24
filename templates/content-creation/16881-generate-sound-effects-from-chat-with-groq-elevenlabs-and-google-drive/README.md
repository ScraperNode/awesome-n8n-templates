# 🎬 Generate sound effects from chat with Groq, ElevenLabs and Google Drive

> ⚡ **18 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This workflow turns an n8n Chat message into a generated sound effect using Groq (Llama 3.3) to refine the prompt, calls the ElevenLabs sound-generation API to create an MP3, uploads the file to Google Drive, and replies in chat with a shareable link.

## How it works
1. Receives a message in an n8n Chat trigger containing the user’s description of a sound.
2. Uses Groq (Llama 3.3) to rewrite the description into a single detailed ElevenLabs sound-effects prompt and choose duration and prompt-influence settings.
3. Parses the model’s JSON response and clamps duration (0.5–30s) and prompt influence (0–1), falling back to the original message if parsing fails.
4. Sends the prompt and settings to the ElevenLabs sound-generation API and downloads the generated MP3.
5. Uploads the MP3 to Google Drive with a timestamped filename based on the prompt text.
6. Responds in chat with the prompt used, the final settings, and a Google Drive link, or returns a friendly error message if generation fails.

## Setup
1. Create an ElevenLabs API credential using HTTP Header Auth (header name `xi-api-key`) and select it on the ElevenLabs request.
2. Add a Groq API credential and select it on the Groq Llama model node.
3. Connect your Google Drive OAuth2 account and choose the target Drive and folder for uploads (root by default).
4. If you want external apps to initiate requests, enable and copy the chat trigger/webhook URL and configure it in your chat client or integration.

## 🔗 Nodes Used

HTTP Request, Google Drive, Basic LLM Chain, Chat Trigger, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
