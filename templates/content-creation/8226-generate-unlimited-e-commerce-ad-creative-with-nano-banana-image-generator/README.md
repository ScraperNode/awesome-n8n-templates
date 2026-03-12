# 🎬 Generate unlimited e-commerce ad creative with Nano Banana Image Generator

> ⚡ **4,446 views** · 🎬 [Content Creation & Video](../)

## Description

# AI Influencer Ad Creative Generator

Generate authentic-looking influencer marketing content by automatically combining your product images with reference photos of potential brand ambassadors. This workflow uses Google's Gemini AI to create realistic promotional images showing influencers naturally using your products in casual settings, perfect for social media campaigns and marketing materials.

## How it works

* **Upload your product image** through a simple web form interface
* **Automatically processes reference influencer photos** stored in your Google Drive folder
* **AI generates realistic promotional images** using Gemini 2.5 Flash, showing each influencer naturally holding/using your product in cafe settings
* **Saves all generated images** to your designated Google Drive output folder with organized naming
* **Batch processes multiple influencer images** to create a complete campaign asset library

The workflow creates candid, authentic-looking photos that appear as if a friend took a picture of the influencer enjoying your product - perfect for social media advertising that doesn't look overly promotional.

## Set up steps

1. **Connect Google Drive account** to n8n for accessing influencer reference images and saving outputs
2. **Set up Google Gemini API credentials** for AI image generation capabilities  
3. **Create two Google Drive folders**: one for storing your reference influencer photos, another for generated campaign assets
4. **Configure folder IDs** in the workflow nodes to point to your specific Drive locations
5. **Upload reference influencer images** to your source folder (headshots or casual photos work best)
6. **Deploy the form trigger** to get your webhook URL for product image uploads


**Requirements**: Google Drive account, Google Cloud account with Gemini API access, collection of reference influencer photos.

## 🔗 Nodes Used

HTTP Request, Google Drive, n8n Form Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
