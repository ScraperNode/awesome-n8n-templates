# 🎬 Automated image editing with GPT-4 Vision & Gemini for Instagram posts from Airtable

> ⚡ **488 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

## Who's it for
Content creators, social media managers, and marketing teams who want to automate image editing and Instagram posting workflows using AI-powered image analysis and generation.

## What it does
This workflow automatically processes images stored in Airtable, analyzes them using AI vision models, generates optimized editing prompts, creates new variations using Google's Gemini AI, and posts the results directly to Instagram. The entire process is triggered via webhook and includes comprehensive error handling and status tracking.

## How it works
The workflow begins when triggered via webhook with an Airtable record ID. It fetches the original image, analyzes its visual elements using GPT-4 Vision, then uses that analysis along with user-specified editing parameters (composition, lighting, style, atmosphere, color palette, text overlay) to generate an optimized prompt. Google Gemini AI then creates a new image based on these specifications, which gets uploaded back to Airtable and posted to Instagram via the Graph API.

## Requirements
- Airtable account with configured base and tables
- OpenAI API key for image analysis
- Google Gemini API key for image generation
- Meta Developer account with Instagram Graph API access
- Instagram Business account connected to Facebook Page

## How to set up
1. Configure your Airtable base with the required fields: Status, Picture, Core Subject, Setting, Composition, Lighting, Style, Atmosphere, Color Palette, Text Overlay, Post Description
2. Set up OpenAI credentials in n8n for the image analysis node
3. Configure Google Gemini API credentials for image generation
4. Set up Meta Graph API credentials for Instagram posting
5. Update the Airtable base IDs and table IDs in all Airtable nodes
6. Configure your Instagram Business Account ID in the Instagram posting nodes
7. Test the webhook URL and ensure proper connectivity

## How to customize
- Modify the image analysis prompt in the "Analyze image" node to focus on different visual elements
- Adjust the Gemini generation parameters (temperature, max tokens) for different creative outputs
- Add additional social media platforms by duplicating the Instagram posting logic
- Customize error handling and status updates based on your workflow needs
- Add image format conversion or resizing nodes if needed for Instagram requirements

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Basic LLM Chain, OpenAI Chat Model, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
