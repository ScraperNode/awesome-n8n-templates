# 🎬 Generate UGC e-commerce video ads with GPT-4o Vision, Gemini 2.5 Pro and Sora 2

> ⚡ **24 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a product image URL and product name from an n8n form, uses OpenAI Vision to build an ideal UGC creator persona, uses Google Gemini to generate three 12‑second UGC scripts, and then generates portrait videos for each script via the Prototipal Sora 2 gateway.

## How it works
1. Receives a submission from an n8n Form Trigger containing a Product Image URL and Product Name.
2. Downloads the product image and converts it to base64 so it can be sent to AI models.
3. Uses OpenAI (GPT‑4o with image input) to analyze the product image and generate a detailed UGC creator persona profile.
4. Sends the persona, product name, and product image to Google Gemini 2.5 Pro to generate multiple 12‑second UGC video scripts.
5. Extracts the individual scripts into an array, then iterates through them one by one.
6. For each script, requests a Sora 2 video generation job via the Prototipal API, polls the job status every 15 seconds until it is completed, and downloads the resulting video file.

## Setup
1. Add OpenAI API credentials for the OpenAI Vision step (GPT‑4o) and ensure your account has access to image inputs.
2. Add Google Gemini (Google PaLM / Generative Language API) credentials for the script generation request.
3. Create or obtain a Prototipal API key with access to the Sora 2 gateway and replace the hardcoded Bearer token in the generate/status/download HTTP requests.
4. Publish the n8n form and provide the form link to users, ensuring submissions include a publicly accessible product image URL.

## Requirements
- Sora-2 API
- Google Gemini API

## Customization
- User can change the AI supplier from prototipal to any supplier such as fal.ai.
- User can change the model from Sora-2 to newer and updated models for better result.

## 🔗 Nodes Used

HTTP Request, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
