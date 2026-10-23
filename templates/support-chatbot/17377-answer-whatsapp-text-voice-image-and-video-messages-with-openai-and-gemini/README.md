# 💬 Answer WhatsApp text, voice, image and video messages with OpenAI and Gemini

> ⚡ **281 views** · 💬 [Support Chatbots](../)

## Description

## Quick overview
This workflow replies to incoming WhatsApp Business messages (text, voice notes, images, and videos) by transcribing or describing media with OpenAI and Google Gemini, then generating a conversational response with an OpenAI-powered agent that can reference Wikipedia and remembers each sender.

## How it works
1. Triggers when a new WhatsApp message is received and splits the payload into individual message parts.
2. Routes each message by type (text, audio, image, or video) to the appropriate processing path.
3. For voice notes, retrieves the WhatsApp media URL, downloads the audio, and transcribes it to text with OpenAI.
4. For images and videos, retrieves and downloads the media from WhatsApp, then analyzes images with OpenAI Vision and videos with Google Gemini to produce a description.
5. Normalizes the message (text/transcription/description plus any caption) and sends it to an OpenAI agent with per-user memory and an optional Wikipedia lookup tool.
6. Sends the agent’s reply back to the original sender via WhatsApp, trimming the text to the configured maximum length.

## Setup
1. Connect WhatsApp Trigger OAuth and WhatsApp Business Cloud credentials, then configure the webhook in Meta so incoming messages reach this workflow.
2. Add an OpenAI API credential for chat replies, audio transcription, and image analysis.
3. Add a Google Gemini (PaLM) API credential for video analysis.
4. In the WhatsApp send step, select your WhatsApp Business Phone Number ID and ensure replies target the sender’s phone number.
5. Review the Configuration values (system prompt, model IDs, image/video prompts, memory window, and max reply length) to match your needs.

## Additional info
# Answer WhatsApp text, voice, image and video messages with GPT-5 and Gemini
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Answer-WhatsApp-text-voice-image-and-video-messages-with-GPT-5-and-Gemini-39e3d6550fd981d2b319d9773c808e21)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, WhatsApp Business Cloud, AI Agent, OpenAI Chat Model, Simple Memory, Wikipedia

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
