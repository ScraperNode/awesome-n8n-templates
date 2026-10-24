# 🎬 Generate chat-based sound effects with OpenAI and ElevenLabs

> ⚡ **48 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow turns an n8n chat message into a detailed sound-effect prompt using OpenAI, then generates an MP3 sound effect via the ElevenLabs Sound Generation API and replies in chat with the audio and the settings used.

## How it works
1. Receives a message in n8n Chat describing the sound effect the user wants.
2. Uses OpenAI to rewrite the message into a single, literal ElevenLabs-ready sound prompt and to propose duration and prompt-influence settings as JSON.
3. Parses the JSON response, falls back to the original user text if parsing fails, and clamps duration (0.5–30s) and prompt influence (0–1) to valid ranges.
4. Calls the ElevenLabs sound-generation endpoint to create an MP3 file using the prompt and settings, retrying on failures.
5. Replies in chat with the generated MP3 and a text summary of the prompt and settings, or returns a friendly error message if generation fails.

## Setup
1. Add an OpenAI API credential and select it for the OpenAI chat model used to generate the sound-effect prompt.
2. Create an ElevenLabs API key header-auth credential (header name `xi-api-key`) and select it for the ElevenLabs HTTP request.
3. Ensure n8n Chat is enabled in your n8n environment and test by sending a clear sound description (for example, “a heavy wooden door creaking open”).

## Additional info
# Generate sound effects from chat using OpenAI and ElevenLabs
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-sound-effects-from-chat-using-OpenAI-and-ElevenLabs-39f3d6550fd9818aa664cfde59a5d1cd)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, OpenAI Chat Model, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
