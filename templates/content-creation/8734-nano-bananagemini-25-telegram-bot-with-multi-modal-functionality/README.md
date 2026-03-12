# 🎬 Nano Banana/Gemini 2.5 Telegram bot with multi-modal functionality

> ⚡ **1,200 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works
* Multi-modal AI Image Generator powered by Google's **Nano Banana (Gemini 2.5 Flash Image)** - the latest state-of-the-art image generation model
* Accepts text, images, voice messages, and PDFs via Telegram for maximum flexibility
* Uses OpenAI GPT models for conversation and image analysis, then Nano Banana for stunning image generation
* Features conversation memory for iterative image modifications ("make it darker", "change to blue")
* Processes different input types: analyzes uploaded images, transcribes voice messages, extracts PDF text
* All inputs are converted to optimized prompts specifically tuned for Nano Banana's capabilities

## Set up steps
* Create Telegram bot via @BotFather and get API token
* Set up Google Gemini API key from Google AI Studio for **Nano Banana** image generation (~$0.04/image)
* Configure OpenAI API key for GPT models (conversation, image analysis, voice transcription)
* Import workflow and configure all three API credentials in n8n
* Update bot tokens in HTTP request nodes for file downloads
* Test with text prompts, image uploads, voice messages, and PDF documents

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
