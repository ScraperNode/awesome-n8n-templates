# 🎬 Route chat prompts to text, image, or video replies with Agnes AI and Telegram

> ⚡ **59 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a chat message, routes it to Agnes AI to generate either a text response, an image, or a video, uploads generated images to ImageKit, and sends completed videos to a Telegram chat.

## How it works
1. Receives an incoming chat message and reads the user’s prompt.
2. Routes the prompt based on keywords to either a text chat completion, an image generation request, or a video creation request in Agnes AI.
3. For text prompts, calls the Agnes AI chat completions endpoint and returns the generated reply to the chat.
4. For image prompts, calls the Agnes AI image generation endpoint and uploads the returned image URL to ImageKit.
5. For video prompts, starts a video generation job in Agnes AI and polls the job status until it is marked completed.
6. Downloads the completed video file from the returned URL and sends it to a specified Telegram chat as a video message with a caption.

## Setup
1. Add an Agnes AI HTTP Bearer Auth credential and ensure it is selected for the Agnes AI HTTP requests.
2. Add a Telegram API credential and update the target Telegram chat ID used to send the video.
3. Provide ImageKit upload credentials by replacing the Authorization header value used for the upload request.
4. Review and adjust the keyword routing rules (for text/image/video) to match how you want prompts to be classified.

## 🔗 Nodes Used

HTTP Request, Telegram, Chat Trigger, Chat

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
