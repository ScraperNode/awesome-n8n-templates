# 📁 Convert image files (JPG, PNG) to URLs and reduce file size for FREE

> ⚡ **19,997 views** · 📁 [File Management](../)

## Description

## Use Case
Transform and optimize images for web use:
- You need to host local images online
- You want to reduce image file sizes automatically
- You need image URLs for web content
- You want to generate and optimize AI-created images

## What this Workflow Does
The workflow processes images through two services:
- Uploads images to ImgBB for hosting and URL generation (free but need API key)
- Optimizes images using ReSmush.it to reduce file size (free)
- Optional: Creates images using OpenAI's image generation
- Returns optimized image URLs ready for use

## Setup
1. Create an [ImgBB account](https://api.imgbb.com/) and get your API key
2. Add your ImgBB API key to the HTTP Request node (key parameter)
3. Optional: Configure OpenAI credentials for image generation
4. Connect your image input source

## How to Adjust it to Your Needs
- Skip OpenAI nodes if using your own image files
- Adjust image optimization parameters
- Customize image hosting settings
- Modify output format for your needs


More templates and n8n workflows &gt;&gt;&gt; [@simonscrapes](https://www.youtube.com/@simonscrapes?sub_confirmation=1)

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
