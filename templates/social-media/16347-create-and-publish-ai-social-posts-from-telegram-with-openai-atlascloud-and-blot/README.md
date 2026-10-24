# 📱 Create and publish AI social posts from Telegram with OpenAI, AtlasCloud and Blotato

> ⚡ **112 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick Overview
This workflow takes a Telegram message containing an idea or URL, uses OpenAI to generate platform-ready captions plus an image prompt, creates an image via AtlasCloud (Grok Imagine), then publishes the post to LinkedIn, X, and Instagram through Blotato and confirms back in Telegram.

## How it works
1. Triggers when your Telegram bot receives a message with a topic, idea, or link to repurpose.
2. Applies workflow defaults (language, brand voice, and image style) and sends the request to OpenAI to generate a LinkedIn post, X caption, Instagram caption, and an image-generation prompt.
3. If the message includes a URL, the agent fetches and summarizes the page content via an HTTP “read web link” tool before writing the captions.
4. Sends the image prompt to AtlasCloud’s image generation API and polls the prediction endpoint until the image is completed or fails.
5. Extracts the generated image URL and publishes it with the generated captions to LinkedIn, X, and Instagram via Blotato.
6. Sends a Telegram confirmation message back to the original chat with the published status and image URL.

## Setup
1. Create a Telegram bot with @BotFather and connect your Telegram credentials to the Telegram Trigger and Telegram message nodes.
2. Add an OpenAI API key and select the model you want to use in the OpenAI Chat Model configuration.
3. Add an AtlasCloud API key (HTTP Header Auth) and ensure your account has credits for Grok Imagine image generation.
4. Install/enable the Blotato community node, connect your Blotato API credentials, and select your LinkedIn, X, and Instagram accounts in each publish step.
5. Review the “Workflow settings” values (language, brand voice, image style, model, aspect ratio, resolution) to match your posting preferences.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Stop and Error, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
