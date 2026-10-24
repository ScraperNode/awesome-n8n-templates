# 🎬 Generate faceless video scripts from a topic with Gemini or Claude Haiku

> ⚡ **386 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a topic and settings via an n8n form, generates a short scene-by-scene faceless video script using either Google Gemini or Anthropic Claude Haiku, then normalizes the model output into a consistent JSON structure and outputs one item per scene.

## How it works
1. Receives a submission from an n8n Form with the video topic, target language, number of scenes, and the chosen LLM provider.
2. Validates the selected language and calculates a per-scene word limit to keep the full script under roughly 60 seconds.
3. Sends the prompt to either Google Gemini or Anthropic Claude (Haiku) and requests a strict JSON response containing scenes with voice_over and image_prompt fields.
4. Extracts the text from the provider-specific API response, strips any code fences, and parses it into a validated {"scenes": [...]} JSON object.
5. Splits the scenes array so the output emits one item per scene, each containing a voice_over line and an English image_prompt.

## Setup
1. Configure credentials for the provider you plan to use: Google Gemini via an HTTP Query Auth credential (parameter name key) or Anthropic Claude via an HTTP Header Auth credential (header name x-api-key).
2. Review the form fields (topic, language, number of scenes, provider) and adjust options if you want different languages or scene counts.
3. If you need longer or shorter scripts, edit the TOTAL_WORDS constant in the word-budget step to change the per-scene cap.

## Requirements
- A Google Gemini API key (free tier works) or an Anthropic Claude API key
- Runs on both n8n Cloud and self-hosted (HTTP only, no Execute Command node)

## Customization
- Change TOTAL_WORDS in the word-budget node to make scripts longer or shorter
- Add more languages by extending the LANGUAGES map in the same node
- Swap in any other chat model by editing one HTTP node and adding its response shape to the parser

## Additional info
This is the script-writing half of a faceless-video pipeline: feed each scene's voice_over into a text-to-speech step and its image_prompt into an image generator to build the full video. Only space-separated languages are supported, since downstream karaoke captions split on whitespace (Chinese, Japanese and Thai would break). Both providers are asked for strict JSON, so the output is reliably machine-readable.

Want the finished video instead of just the script? Render faceless vertical shorts (https://n8n.io/workflows/17566-render-faceless-vertical-shorts-with-gemini-or-claude-edge-tts-and-ffmpeg/) turns a topic straight into a rendered vertical MP4 - script, voiceover, AI images and karaoke captions in one run, same $0/video stack.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
