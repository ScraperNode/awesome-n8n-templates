# 🎬 Automated product ad image creation with OpenAI, Gemini & Google Workspace

> ⚡ **880 views** · 🎬 [Content Creation & Video](../)

## Description

## How it works

This workflow automates the generation of ad-ready product images by combining product and influencer photos with AI styling. It runs on a scheduled trigger, fetches data from Google Sheets, and retrieves product and influencer images from Google Drive. The images are processed with OpenAI and OpenRouter to generate enhanced visuals, which are then saved back to Google Drive. Finally, the result is logged into Google Sheets with a ready-to-publish status.

## Step-by-step

**1. Trigger & Data preparation**  
- **Schedule Trigger** – Runs workflow automatically on a set schedule.  
- **Google Sheets (Get the Raw)** – Retrieves today’s product and model URLs.  
- **Google Drive (Download Product Image)** – Downloads the product image.  
- **Google Drive (Download Influencer Image)** – Downloads the influencer image.  
- **Extract from File (Binary → Base64)** – Converts both product and model images for AI processing.  

**2. AI analysis & image generation**  
- **OpenAI (Analyze Image)** – Creates an ad-focused visual description (lighting, mood, styling).  
- **HTTP Request (OpenRouter Gemini)** – Generates an AI-enhanced image combining product + influencer.  
- **Code Node (Cleanup)** – Cleans base64 output to remove extra prefixes.  
- **Convert to File** – Transforms AI output into a proper image file.  

**3. Save & update**  
- **Google Drive (Upload Image)** – Uploads generated ad image to target folder.  
- **Google Sheets (Append/Update Row)** – Stores the Drive link and updates publish status.  

## Why use this?

- Automates the entire ad image creation process without manual design work.  
- Ensures product visuals are consistent, styled, and ad-ready.  
- Saves final creatives in Google Drive for easy access and sharing.  
- Keeps campaign tracking organized by updating Google Sheets automatically.  
- Scales daily ad production efficiently for multiple products or campaigns.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Schedule Trigger, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
