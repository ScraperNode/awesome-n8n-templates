# 🎬 Generate images via webhook with Sublyx image generation API

> ⚡ **4 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow exposes a webhook that accepts an image prompt and optional parameters, sends them to the Sublyx Images Generation API, and returns the generated image back in the webhook response as a PNG file.

## How it works
1. Receives a POST webhook request containing an image prompt plus optional model and size parameters.
2. Calls the Sublyx AI Images Generations API to generate one image using the provided prompt and settings.
3. Extracts the returned image URL or base64 image data from the Sublyx API response.
4. Converts base64 image data into a PNG binary file.
5. Responds to the original webhook request with the generated image as a binary download.

## Setup
1. Create a Sublyx API credential in n8n (HTTP templated custom auth) and add your Sublyx API key.
2. Activate the workflow and copy the webhook URL, then configure your client/application to send POST requests to it.
3. Ensure your webhook payload includes a `prompt` field, and optionally pass `model` (default `gpt-image-2`) and `size` (default `1024x1024`).

## Requirements
- An n8n instance, a Sublyx account, a valid Sublyx API key, and an n8n HTTP templated custom auth credential configured with the API key. The webhook request must include a prompt field.

## Customization
- Customize the image model, output size, prompt, and response format. You can also connect the webhook response to Telegram, Discord, Google Drive, Notion, or another application.

## Additional info
The workflow uses the Sublyx AI Images Generation API and returns the generated image as a PNG binary response. New users can register and receive available trial credits according to the current promotion.

Get started with the [Sublyx AI API Gateway](https://sublyx.org/).

## 🔗 Nodes Used

HTTP Request, Webhook, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
