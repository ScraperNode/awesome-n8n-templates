# 🎬 Create AI music videos from a prompt with OpenAI, Kie.ai and BeatAPI

> ⚡ **27 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a music video theme via an n8n form, uses OpenAI to generate music, image, and video prompts, then calls Kie to create an instrumental track and a Nano Banana image, and finally uses BeatAPI to render a publish-ready AI music video.

## How it works
1. Receives a submission from an n8n Form Trigger with inputs like theme, genre, mood, duration, aspect ratio, and quality.
2. Uses OpenAI (via an AI Agent with a structured output schema) to generate a Suno-style music prompt, an image prompt, a BeatAPI music-video prompt, and YouTube metadata.
3. Sends the generated music prompt and settings to Kie to start audio generation, then polls Kie until the track is ready and validates the duration is within 10–180 seconds.
4. Sends the generated image prompt to Kie (Nano Banana model) to create key art, then polls Kie until an image URL is returned.
5. Creates a BeatAPI AI music video task using the generated audio URL, one or two image URLs (generated image plus optional cover image), and the BeatAPI prompt, then polls BeatAPI until the render succeeds.
6. Returns the final video URL along with YouTube-ready title, description, tags, and provider task IDs in a single publish-ready output object.

## Setup
1. Add an OpenAI API credential for the OpenAI Chat Model used by the AI Agent.
2. Create an HTTP Header Auth credential for Kie with `Authorization: Bearer <KIE_API_KEY>` and attach it to the Kie HTTP Request steps.
3. Create a BeatAPI account at [beatapi.io](https://beatapi.io/), then add an HTTP Header Auth credential using `Authorization: Bearer <BEATAPI_API_KEY>` and attach it to the BeatAPI HTTP Request steps.
4. Publish the n8n form (or copy its public URL/path) and confirm the default inputs like aspect ratio, duration, resolution, and quality match your target platform requirements.

## Requirements
- Requires an OpenAI account credential, a Kie API key, and a BeatAPI API key. Generated audio and image URLs must be public HTTPS URLs so BeatAPI can fetch them. The workflow is designed for short AI music videos and uses polling instead of callbacks.

## Customization
- Customize the form fields, OpenAI model, music style, Nano Banana image model, BeatAPI aspect ratio, resolution, quality, duration, and downstream publishing destination. You can connect Final Output to YouTube, Google Sheets, Airtable, Postiz, Blotato, or a webhook.

## Additional info
This template intentionally stops at a final publish-ready output instead of publishing automatically, so users can choose their own approval and distribution process. It does not use FFmpeg and does not store real API keys in the exported workflow.

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
