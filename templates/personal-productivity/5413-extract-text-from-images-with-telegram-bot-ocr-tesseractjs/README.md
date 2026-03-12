# ⚡ Extract text from images with Telegram Bot & OCR Tesseractjs

> ⚡ **11,761 views** · ⚡ [Personal Productivity](../)

## Description

**Description**
This n8n workflow enables users to send an image to a Telegram bot and receive the extracted text using Tesseract OCR (via the n8n-nodes-tesseractjs Community Node). It's a quick and straightforward way to convert images into readable text directly through chat.

**How it Works**

- The workflow listens for new image messages coming in via the Telegram bot.

- Once an image is received, it downloads the image file from Telegram (which initially arrives as application/octet-stream).

- The image data, now properly identified, is then sent to the Tesseract OCR node to extract the text.

- Finally, the recognized text is sent back as a reply to the Telegram user.

**Setup Steps**

- Install Community Node: Ensure you have installed n8n-nodes-tesseractjs in your n8n instance.

- Connect Telegram Bot: Configure the Telegram Trigger node with your Telegram bot.

- Bot Token: Add your Telegram bot token to the Send Message node to send replies.

- Deploy & Test: Activate (deploy) the workflow and send an image to your Telegram bot to test.

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
