# 💬 Run a multimodal WhatsApp AI assistant with OpenAI for text, voice and images

> ⚡ **538 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns WhatsApp into a multimodal assistant that answers text, voice notes, images, and PDF documents using OpenAI, and can generate images with DALL·E on demand, replying back in WhatsApp with either text, audio, or an image.

## How it works
1. Triggers when a new WhatsApp message is received.
2. Detects whether the incoming message is text, a voice note, an image, a PDF document, or an unsupported type.
3. For text messages, generates an image with OpenAI DALL·E when the message starts with the configured /image command, and sends the generated image back to the sender.
4. For voice notes, fetches the WhatsApp media URL, downloads the audio, transcribes it with OpenAI, and forwards the transcript to the assistant.
5. For images, fetches the WhatsApp media URL, downloads the image, describes it with OpenAI vision using the configured analysis prompt, and forwards the description (plus any caption) to the assistant.
6. For PDF documents, downloads the file from WhatsApp, extracts the PDF text, and forwards the extracted content (plus any caption) to the assistant, while non-PDF files receive an error message.
7. Uses an OpenAI chat model with per-contact short-term memory to generate a reply, then sends it back to WhatsApp as audio (via OpenAI text-to-speech) for voice-note conversations or as a text message otherwise.

## Setup
1. Connect WhatsApp Business Cloud credentials for the WhatsApp Trigger and all WhatsApp send/media nodes, and set up the webhook callback URL in Meta so incoming messages reach n8n.
2. Create an HTTP Header Auth credential for WhatsApp media downloads (Authorization: Bearer <Meta access token>) and select it in the three HTTP Request download steps for audio, images, and files.
3. Add an OpenAI API credential with access to a chat model (gpt-4o-mini), image analysis, audio transcription, text-to-speech, and DALL·E image generation.
4. In the Configuration step, set your WhatsApp phone number ID and optionally adjust the /image command, image size/style/quality, the image analysis prompt, and the TTS voice and voice-to-voice toggle.

## Additional info
# Run a multimodal WhatsApp AI assistant with text, voice, images, PDFs and image generation

# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Run-a-multimodal-WhatsApp-AI-assistant-with-text-voice-images-PDFs-and-image-generation-39d3d6550fd9817fb911fbd4151ebb3c)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
