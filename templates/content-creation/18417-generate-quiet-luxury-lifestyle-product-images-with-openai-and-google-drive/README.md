# 🎬 Generate quiet luxury lifestyle product images with OpenAI and Google Drive

> ⚡ **78 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow collects a product image and scene brief via an n8n form, uses OpenAI to analyze the image and generate three “Quiet Luxury” lifestyle variations with GPT Image, and uploads both the original and generated images to Google Drive.

## How it works
1. Receives an n8n form submission containing a product image, a scene brief, and a preferred model gender.
2. Uploads the submitted product image to Google Drive, then downloads it again to continue processing from a stored file.
3. Converts the downloaded image to base64 and uses OpenAI (GPT-4o) to analyze the image so the prompts keep the original brand vibe.
4. Uses OpenAI to turn the user’s scene brief into three structured scene ideas and to refine each idea into a strict “Quiet Luxury” prompt.
5. Downloads the product image from Google Drive for each scene and sends it to the OpenAI Images Edits endpoint (gpt-image-2) to generate three zoomed-out lifestyle images without changing the product.
6. Converts each generated image response to a file and uploads the three outputs to Google Drive in the configured target folders.

## Setup
1. Add an OpenAI API credential with access to GPT-4o, GPT-4.1, and the Images Edits endpoint (gpt-image-2).
2. Add a Google Drive OAuth2 credential.
3. In each Google Drive upload step, select the destination folders (the template placeholders like “Select your Google Drive folder here” must be replaced).
4. Publish the n8n form and use it to submit a product image plus a scene brief (written to produce three scenes) and a value for the gender field.

## 🔗 Nodes Used

HTTP Request, Google Drive, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
