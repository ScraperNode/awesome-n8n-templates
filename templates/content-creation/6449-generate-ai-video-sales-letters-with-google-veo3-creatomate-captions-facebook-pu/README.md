# 🎬 Generate AI video sales letters with Google VEO3, Creatomate captions & Facebook publishing

> ⚡ **183 views** · 🎬 [Content Creation & Video](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# VEO3 VSL Generator & Facebook Auto-Publisher

## What this workflow does

This n8n workflow automates the full process of creating a short-form Video Sales Letter (VSL) using Google VEO3, adding captions via Creatomate, and publishing the final video directly to a Facebook Page.

It's designed for creators, ecommerce brands, and marketers who want to generate and publish high-converting videos without video editing, manual uploads, or third-party tools.

## Technologies used

- Google Vertex AI (VEO3) – for AI-generated video generation
- Creatomate – for dynamic captioning
- Google Cloud Storage – for video hosting (public access)
- Upload Post – for direct video publishing
- OpenAI (optional) – for script generation
- n8n – as the automation engine

## Required inputs

The workflow starts from a form and expects:

- `Product Name` – the product or offer to promote
- `Product Image` – a visual representation of the product

Optional:
- `Prompt override` – custom prompt text if you want to bypass the AI script generation

## Output

- One AI-generated vertical video (9:16), rendered via VEO3
- Captions applied automatically via Creatomate
- Final video posted to your connected Facebook Page
- File stored in Google Cloud Storage with public access

## Documentation

This template includes full step-by-step setup instructions:

- Setting up JWT credentials for Google VEO3
- Configuring a public GCS bucket
- Creating and connecting a Creatomate API key
- Generating a long-lived Facebook Page token
- Connecting credentials inside n8n
- Editing the form, caption templates, and upload destination
- Notes on maintenance, quota limits, and API behavior

## Customization

This workflow is modular and easy to adapt. You can:

- Replace the form trigger with Google Sheets, Airtable, or webhook
- Swap Facebook with Instagram, LinkedIn, or Telegram
- Modify prompt structure, voice, visual style, or caption format

## Summary

Just submit a product name and image via form — and get a ready-to-publish VSL on your Facebook Page. Fast, automated, and fully editable.

## 🔗 Nodes Used

HTTP Request, Google Cloud Storage, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
