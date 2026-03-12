# 📱 Create Branded Social Media Images with Bannerbear (Sync/Async modes)

> ⚡ **225 views** · 📱 [Social Media & Email Marketing](../)

## Description

Automatically create branded social media graphics, certificates, thumbnails, or marketing visuals using Bannerbear's template-based image generation API. 
**Bannerbear's API is primarily asynchronous by default**: this workflow shows you how to use both asynchronous (webhook-based) and synchronous modes depending on your needs.

## What it does

This workflow connects to Bannerbear's API to generate custom images based on your pre-designed templates. You can modify text, colors, and other elements programmatically. 

By default, Bannerbear works asynchronously: you submit a request, receive an immediate 202 Accepted response, and get the final image via webhook or polling. This workflow demonstrates both the standard asynchronous approach and an alternative synchronous method where you wait for the image to be generated before proceeding.

## How it works

1. **Set parameters** - Configure your Bannerbear API key, template ID, and content (title, subtitle)
2. **Choose mode** - Select synchronous (wait for immediate response) or asynchronous (standard webhook delivery)
3. **Generate image** - The workflow calls Bannerbear's API with your modifications
4. **Receive result** - Get the image URL, dimensions, and metadata in PNG or JPG format

**Async mode (recommended):** The workflow receives a pending status immediately, then a webhook delivers the completed image when ready.

**Sync mode:** The workflow waits for the image generation to complete before proceeding.

## Setup requirements

- A Bannerbear account (free tier available)
- A Bannerbear template created in your dashboard
- Your API key and template ID from Bannerbear
- For async mode: ability to receive webhooks (production n8n instance)

## How to set up

1. **Get Bannerbear credentials:**
   - Sign up at bannerbear.com
   - Create a project and design a template
   - Copy your API key from Settings &gt; API Key
   - Copy your template ID from the API Console

2. **Configure the workflow:**
   - Open the "SetParameters" node
   - Replace the API key and template ID with yours
   - Customize the title and subtitle text
   - Set `call_mode` to "sync" or "async"

3. **For async mode (recommended):**
   - Activate the "Webhook_OnImageCreated" node
   - Copy the production webhook URL
   - Add it to Bannerbear via Settings &gt; Webhooks &gt; Create a Webhook
   - Set event type to "image_created"

## Customize the workflow

- Modify the template parameters to match your Bannerbear template fields
- Add additional modification objects for more dynamic elements (colors, backgrounds, images)
- Connect to databases, CRMs, or other tools to pull content automatically
- Chain multiple image generations for batch processing
- Store generated images in Google Drive, S3, or your preferred storage
- Use async mode for high-volume generation without blocking your workflow

## 🔗 Nodes Used

HTTP Request, Webhook, Bannerbear

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
