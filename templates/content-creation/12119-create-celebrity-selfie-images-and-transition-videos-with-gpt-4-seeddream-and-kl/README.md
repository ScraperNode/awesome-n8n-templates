# 🎬 Create celebrity selfie images and transition videos with GPT-4, SeedDream, and Kling

> ⚡ **73 views** · 🎬 [Content Creation & Video](../)

## Description

## Who is this for?
&gt; *Trend-style celebrity selfie videos

Content creators, social media managers, marketers, and AI enthusiasts who want to generate ultra-realistic AI selfie images with celebrities and create smooth cinematic transition videos.
![sheet.png](fileId:3820)

## What this workflow does

**Part 1 - Image Generation:**
- Collects your face image + up to 4 celebrity reference images via web form
- GPT-4 generates optimized prompts for realistic selfie composition
- SeedDream v4.5 AI creates photo-realistic selfie images
- All results automatically saved to Google Sheets

**Part 2 - Video Generation:**
- Pairs generated selfie images (Celebrity 1 → Celebrity 2)
- Kling AI creates smooth walking transition videos
- Videos saved back to Google Sheets with metadata

## How to set up

1. Configure API credentials (OpenAI, Fal.AI, Google Sheets OAuth2)
2. Create a Google Sheet with two tabs: `CelebritySelfies` and `CelebrityVideos`
3. Update the Config nodes with your Google Sheet ID
4. Run!

## Requirements

- n8n instance (cloud or self-hosted)
- OpenAI API key with GPT-4 access
- Fal.AI account with API key
- Google account for Sheets storage

## Estimated costs

- ~$0.05 per image (OpenAI + SeedDream)
- ~$0.50-1.00 per video (Kling AI)

## 📧 Support

For questions about this template :
- **Website:** [bilsimaging.com](https://bilsimaging.com)  
**Email:** contact@bilsimaging.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
