# 💬 Build a multimodal WhatsApp assistant with GPT-5, Gemini, and Wikipedia

> ⚡ **111 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow turns a WhatsApp Business number into a multimodal assistant by handling text, voice notes, images, and videos, using OpenAI (GPT-5 for chat/vision and audio transcription) plus Google Gemini for video understanding, and replying back on WhatsApp with per-user conversation memory and Wikipedia lookups.

## How it works
1. Triggers on incoming WhatsApp messages and splits the payload to process each message individually.
2. Captures sender details and shared configuration (models, memory window, system prompt, and reply length) and routes the message based on whether it is text, audio, image, or video.
3. For voice notes, it fetches the media from WhatsApp, downloads the audio file, and transcribes it with OpenAI.
4. For images and videos, it fetches and downloads the media from WhatsApp, then describes images with OpenAI vision and describes/transcribes videos with Google Gemini.
5. Normalizes the resulting text (original text or media description) along with any caption and the sender phone number into a single message format.
6. Uses an OpenAI-powered agent with per-sender conversation memory and a Wikipedia tool to generate a concise reply in the user’s language.
7. Cleans and truncates the reply for WhatsApp-friendly formatting and sends it back to the original sender via WhatsApp.

## Setup
1. Connect WhatsApp Business Cloud credentials for both the WhatsApp Trigger and WhatsApp nodes, then select your WhatsApp Business phone number ID in the send-reply step.
2. Add an OpenAI API credential for chat, image understanding (vision), and audio transcription.
3. Add a Google Gemini (PaLM) API credential for the video description request.
4. Review the Configuration values (models, system prompt, memory context window, and max reply length) to match your needs before activating the workflow.

## Additional info
# Build a multimodal AI assistant on WhatsApp with GPT-5 and Gemini
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Build-a-multimodal-AI-assistant-on-WhatsApp-with-GPT-5-and-Gemini-39e3d6550fd981468128d322b0d5bf71)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, Basic LLM Chain, OpenAI Chat Model, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
