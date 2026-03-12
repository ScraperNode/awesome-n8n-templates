# 🎬 Generate product images & videos with Gemini AI, DeepSeek, and GoAPI for e-commerce

> ⚡ **1,660 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow is designed for e-commerce, marketing teams, or creators who want to automate the production of high-quality, AI-generated product visuals and ad creatives.

Here is what the workflow does:
* It accepts a product description and other creative inputs through a web form.
* It uses AI to transform your text input into a detailed, creative prompt.
* This prompt is then used to generate a product image.
* The workflow analyzes the generated image and creates a new prompt to generate a second image that includes a model, adding a human element to the visual.
* A final prompt is created from the model image to generate a short, cinematic video.
* All generated assets (images and video) are automatically uploaded to your specified hosting platform, providing you with direct URLs for immediate use.

This template is an efficient solution for scaling your content creation efforts, reducing time spent on manual design, and producing a consistent stream of visually engaging content for your online store, social media, and advertising campaigns.

**Prerequisites:**

* **OpenRouter Account:** Required for AI agents to generate image and video prompts.
* **GOAPI Account:** Used for the final video generation process.
* **Media Hosting Platform:** A self-hosted service like MediaUpload, or any alternative like Google Drive or a similar service that can provide a direct URL for uploaded images and videos. This is essential for passing the visuals between different steps of the workflow.

## 🔗 Nodes Used

HTTP Request, Discord, AI Agent, Structured Output Parser, n8n Form Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
