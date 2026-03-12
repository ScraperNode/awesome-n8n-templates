# 🎬 Generate hyper-realistic images from Telegram via Gemini Nano Banana 2

> ⚡ **92 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate hyper-realistic images from Telegram messages with Nano Banana 2

Send any image description to your Telegram bot and receive a hyper-realistic AI-generated photo back in seconds. 

### How it works
1. A user sends a natural language image request to the Telegram bot
2. The bot confirms the receipt
3. Gemini Pro 3 expands the request into a detailed JSON prompt: focal length, aperture, ISO, lighting behavior, material physics, etc.
4. Gemini Flash generates the image and returns it as a base64 string
5. The image is sent back as a photo in the same Telegram chat

### Setup steps
1. **Telegram** — Create a bot via @BotFather, copy the token, and add it as a Telegram credential in n8n. Connect it to the Telegram Trigger node and both Telegram send nodes
2. **OpenRouter** — Add your OpenRouter API key (or any other tool you use) as a credential in n8n. Connect it to the Expand to JSON Prompt and Generate Image nodes.
3. Activate the workflow and send your bot an image description to test

### Optional
Modify the config node with your system prompt preferences for a more diverse pool of results.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
