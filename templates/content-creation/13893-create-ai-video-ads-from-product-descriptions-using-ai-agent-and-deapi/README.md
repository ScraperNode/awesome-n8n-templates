# 🎬 Create AI video ads from product descriptions using AI Agent and deAPI

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Who is this for?

- Marketing teams who need quick video ads without a production crew
- E-commerce sellers promoting products on social media
- Freelancers and agencies producing ad creatives for clients
- Anyone who wants to turn a product description into a video ad in minutes

## What problem does this solve?

Producing a video ad typically requires a designer for the visuals, a motion artist for animation, and hours of back-and-forth. This workflow replaces that entire pipeline — fill out a form, and get a ready-to-use video ad delivered to your inbox.

## What this workflow does

1. **Collects** product name, description, visual style, and recipient email through a web form
2. **AI Agent** analyzes the product and uses both deAPI **Image Prompt Booster** and **Video Prompt Booster** tools to create optimized prompts for image and video generation
3. **Generates** a 1280x720 landscape product hero image using deAPI
4. **Animates** the hero image into a short video ad using deAPI image-to-video generation
5. **Emails** the video ad link to the specified address via Gmail

## Setup

### Requirements

- **Self-hosted n8n instance** (deAPI node is not yet available on n8n Cloud)
- [deAPI](https://deapi.ai) account for prompt boosting, image generation, and video generation
- Anthropic account for the AI Agent
- Gmail account for email delivery

### Installing the deAPI Node

1. Go to **Settings** → **Community Nodes**
2. Install `n8n-nodes-deapi`

### Configuration

1. Add your deAPI credentials (API key + webhook secret)
2. Add your Anthropic credentials (API key)
3. Add your Gmail credentials (OAuth2)
4. Ensure your n8n instance is on HTTPS

## How to customize this workflow

- **Change the AI model**: Swap Anthropic for OpenAI, Google Gemini, or any other LLM provider
- **Adjust the creative direction**: Modify the AI Agent system message to target different ad styles (product demo, lifestyle, teaser, etc.)
- **Change the delivery method**: Replace Gmail with Slack, Microsoft Teams, or upload directly to Google Drive / S3
- **Change the aspect ratio**: Switch from landscape to square or portrait for Instagram Stories or TikTok
- **Add background removal**: Insert a deAPI Remove Background node before video generation for a clean product cutout
- **Batch processing**: Replace the Form Trigger with a Google Sheets or Airtable trigger to generate ads for a product catalog

## 🔗 Nodes Used

Gmail, AI Agent, Anthropic Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
