# 🎬 Generate images from text prompts with MuAPI Nano Banana 2 Pro

> ⚡ **12 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick Overview
This manual workflow generates an image from a text prompt using the MuAPI Nano Banana 2 Pro text-to-image model, then extracts the generated image URL so you can view it or pass it to downstream steps.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Sets a text prompt to describe the image you want to generate.
3. Sends the prompt to MuAPI’s Nano Banana 2 Pro text-to-image predictor to generate an image.
4. Extracts the first returned output as an `image_url` field for easy reuse.

## Setup
1. Install the `n8n-nodes-muapi` community node in your n8n instance.
2. Create and select MuAPI API credentials (API key) for the MuAPI predictor node.
3. Update the prompt text in the prompt-building step and confirm the predictor is set to the `nano-banana-2-pro` model.

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
