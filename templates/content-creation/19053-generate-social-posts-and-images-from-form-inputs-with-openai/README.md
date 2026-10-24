# 🎬 Generate social posts and images from form inputs with OpenAI

> ⚡ **11 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a business and topic via an n8n form, uses OpenAI to generate a ready-to-publish social post plus an image prompt, creates a matching image with OpenAI, and returns an HTML preview with the text and embedded image.

## How it works
1. Receives a content request through an n8n Form with fields for business, topic, audience, tone, and language.
2. Cleans and normalizes the submitted inputs to ensure required defaults are present.
3. Uses OpenAI (GPT-5 Mini) to generate a social post and a detailed image prompt, returned as strict JSON.
4. Validates and parses the JSON output to ensure the post text and image prompt are present.
5. Uses OpenAI Images (gpt-image-1) to generate an image from the returned image prompt.
6. Builds an HTML preview that displays the headline, post text, and the generated image inline.
7. Shows the final preview in the form completion screen and keeps the content and image available in the execution data.

## Setup
1. Add an OpenAI API credential in n8n and connect it to both OpenAI steps (text generation and image generation).
2. Open the test URL for the n8n Form trigger and use it as the entry point to submit content requests.
3. If needed, customize the form fields and the OpenAI system instructions to match your brand rules and desired output format.

## 🔗 Nodes Used

n8n Form Trigger, OpenAI, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
