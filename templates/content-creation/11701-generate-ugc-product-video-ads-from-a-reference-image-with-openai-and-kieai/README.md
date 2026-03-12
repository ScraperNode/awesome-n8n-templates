# 🎬 Generate UGC product video ads from a reference image with OpenAI and Kie.ai

> ⚡ **283 views** · 🎬 [Content Creation & Video](../)

## Description

How it works

- Analyzes a reference product image using AI vision to extract brand elements, colors, and design

- Generates UGC-style prompts for image and video creation based on your specifications

- Calls external APIs to generate product images and videos at scale

- Polls for completion and retrieves the generated media files

- Uploads all videos to Box and Google Drive, then logs results to Google Sheets

Set up steps

- Connect OpenAI credentials for image analysis

- Configure your image generation API credentials

- Configure your video generation API credentials

- Connect Google Drive and Box for file uploads

- Connect Google Sheets for tracking and logging

- Keep detailed descriptions of your UGC style preferences in the sticky notes inside your workflow

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Box, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
