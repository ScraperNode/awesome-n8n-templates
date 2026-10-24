# 🎬 Generate AI images from form inputs with Claude Sonnet and Google Gemini

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects an image request via an n8n form, uses Anthropic Claude to expand it into a detailed style-aware prompt, generates an image with Google Gemini, then emails the image via Gmail and logs the request details to an n8n Data Table.

## How it works
1. Receives an image request from an n8n Form Trigger that captures the requester’s email, image description, and preferred style.
2. Normalizes the submitted fields into consistent values for email, description, and style.
3. Uses Anthropic Claude (Sonnet 4.6) to turn the description and style into a single vivid image-generation prompt.
4. Sends the enhanced prompt to Google Gemini to generate an image and outputs it as binary data.
5. Emails the generated image as an attachment to the requester via Gmail, including the style and prompt used.
6. Logs the description, style, prompt, and timestamp to an n8n Data Table for tracking and reuse.

## Setup
1. Add an Anthropic credential (for Claude Sonnet 4.6) to the workflow’s prompt-enhancement step.
2. Add a Google Gemini (PaLM) API credential and ensure the selected image model is available in your account.
3. Add a Gmail OAuth2 credential and confirm the sender mailbox has permission to send emails.
4. Create or select an n8n Data Table named `image_gen_log` (or update the workflow to your table name).
5. Activate the workflow and share the form URL so users can submit image requests.

## Requirements
- n8n instance with the Data Table feature enabled
- Anthropic API key (Claude — prompt engineering)
- Google Gemini (PaLM) API key — image generation
- Gmail account connected via OAuth2

## Customization
- Add or edit Style presets in the form dropdown to match your brand aesthetic
- Bake brand colours, logo cues, or aspect ratio into the prompt-enhancer system message for on-brand output every time
- Deliver to Google Drive, S3, or a CMS to auto-publish instead of emailing
- Switch Gemini to image edit (upload + modify) or video generate for motion assets / B-roll
- Generate multiple variations per request by looping the generation step

## Additional info
Built on the new Google Gemini image node — one of the newest n8n integrations, so competing templates are almost non-existent (clear first-mover advantage).
Claude turns a one-line description into a detailed, style-aware prompt (subject, lighting, composition, palette) for far better output than a raw description.
Fits marketers, content creators, agencies, e-commerce (product/ad visuals), and social teams.

## 🔗 Nodes Used

Gmail, AI Agent, Anthropic Chat Model, n8n Form Trigger, Google Gemini, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
