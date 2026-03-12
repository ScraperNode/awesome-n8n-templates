# 🎬 Automated generation of AI advertising photos for product marketing

> ⚡ **5,950 views** · 🎬 [Content Creation & Video](../)

## Description

**How it works**

This workflow automates the transformation of standard product images into professional product photography featuring human models
It uses AI to analyze product images, create tailored photography prompts, and generate high-quality enhanced versions

**Set up steps**

- You'll need an OpenAI API key and access to gpt-image-1 (verify your organization)
- Set up a Google Sheets spreadsheet with columns: Image-URL, Prompt, Output
- Create a Google Drive folder to store the generated images

**Requirements:**

- OpenAI API access (for image generation and analysis)
- Google Sheets and Google Drive accounts
- Basic product images (URLs) as input
The spreadsheet must contain a column named "Image-URL" with links to the product images

**This workflow automatically:**

- Reads product image URLs from your Google Sheet
- Downloads the images for processing
- Analyzes each image to understand what product it contains
- Creates specialized photography prompts ensuring each product is shown with a human model
- Generates professional product photography using OpenAI's image generation capabilities
Uploads results to Google Drive and updates your spreadsheet with links

**Extra:**
- You can also use the included simple image generation workflow to directly create images via prompt without product image input. This option lets you quickly generate images through the OpenAI API using just text prompts

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Basic LLM Chain, OpenAI Chat Model, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
