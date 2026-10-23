# 🎬 Generate social posts and images with Claude, Gemini, and OpenAI

> ⚡ **17 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow receives a webhook request with a topic and context, generates platform-specific copy for LinkedIn, X, Facebook, and Instagram using Anthropic Claude, Google Gemini, or OpenAI, optionally creates a matching image via OpenAI Images or Gemini Flash Image, and returns the results as JSON.

## How it works
1. Receives a POST request on the `/webhook/social-content` webhook containing the topic, context, provider selection, and optional tone/audience/brand/CTA/language and image settings.
2. Normalizes and validates the payload (including provider, content length limits, and image options) and returns a 400 response if required fields are missing or invalid.
3. Routes the request to Anthropic Claude, Google Gemini, or OpenAI to generate structured social posts for LinkedIn, X (single post and thread), Facebook, and Instagram.
4. If image generation is enabled and requested, routes to OpenAI Images (gpt-image-1) or the Gemini image generation API to create an image prompt based on the Instagram image idea and requested style/size.
5. Merges the generated text and optional image (or an image error) into a single JSON payload.
6. Responds to the webhook caller with a 200 success JSON payload, or a 500 error payload if text generation fails.

## Setup
1. Add credentials for at least one text provider you plan to use: Anthropic API (Claude), Google Gemini / PaLM API, and/or OpenAI API.
2. If you want image generation, also configure the required credential for the chosen image provider (OpenAI API for gpt-image-1 and/or Google Gemini / PaLM API for Gemini image generation).
3. Set your preferred default behavior in the workflow settings payload (for example, toggle the `image_generation_enabled` master switch) and adjust the prompts/models/temperatures in the respective provider nodes as needed.
4. Activate the workflow and copy the production webhook URL into your calling app or script that will send POST requests to `/webhook/social-content`.

## 🔗 Nodes Used

HTTP Request, Webhook, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
