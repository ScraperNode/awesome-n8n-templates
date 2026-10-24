# 📱 Create AI social posts from Telegram links with OpenAI, Grok and Blotato

> ⚡ **94 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow listens for a Telegram message containing an idea or URL, extracts any linked page text, uses OpenAI to generate LinkedIn/X/Instagram captions plus an image prompt, creates an illustration via AtlasCloud (Grok Imagine), then publishes the posts with the image to LinkedIn, X, and Instagram using Blotato.

## How it works
1. Receives a Telegram message with an idea, topic, or URL.
2. If the message includes a link, fetches the web page and extracts a cleaned text snippet to use as reference context.
3. Uses OpenAI (via an AI agent with conversation memory) to generate a LinkedIn post, an X caption, an Instagram caption, and a detailed image-generation prompt in the specified brand voice.
4. Sends the image prompt to AtlasCloud’s image generation API (Grok Imagine) and polls the prediction endpoint until the image is completed or errors.
5. Extracts the generated image URL and publishes the image with the platform-specific captions to LinkedIn, X, and Instagram via Blotato.
6. Sends a confirmation message back to Telegram including the generated image URL.

## Setup
1. Create and connect Telegram bot credentials, then message the bot using the Telegram Trigger webhook.
2. Add an OpenAI API credential and ensure the selected chat model is available in your OpenAI account.
3. Add an AtlasCloud API key as HTTP Header Auth and confirm the configured model name, aspect ratio, and resolution match your AtlasCloud account capabilities.
4. Install and configure the Blotato community node, connect your Blotato API credential, and replace the LinkedIn/X/Instagram account IDs in each publish step with your own.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Stop and Error, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
