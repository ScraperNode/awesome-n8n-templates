# 🔬 Extract text from images with Telegram Bot & Gemini 2.0 Flash OCR

> ⚡ **5,971 views** · 🔬 [Document Extraction & Analysis](../)

## Description

**Description**
Turn your Telegram bot into a powerful OCR (Optical Character Recognition) tool. This workflow allows you to send any image (like a screenshot, a photo of a document, or a picture of a sign) to your bot, and it will instantly extract and send back the text from that image.

Powered by Google's advanced Gemini AI, this automation is perfect for quickly digitizing notes, saving important snippets, or avoiding manual typing.

**How it works**

This workflow performs a few high-level steps:

1. It triggers when a new image is sent to your Telegram bot.
2. It sends the image to the Google Gemini Vision API to be analyzed.
3. It extracts the text found in the image.
4. It sends the extracted text back to you as a message in Telegram.

**Set up steps**

Estimated set up time: Less than 5 minutes.

The setup is straightforward. You only need to configure two credentials:

1. Telegram Bot Credentials: To connect your bot.

2. Google Gemini API Credentials: To use the OCR feature. You can get a free API key from Google AI Studio.

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
