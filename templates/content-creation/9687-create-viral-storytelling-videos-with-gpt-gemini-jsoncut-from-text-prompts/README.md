# 🎬 Create viral storytelling videos with GPT, Gemini & JsonCut from text prompts

> ⚡ **933 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Generate ready-to-publish short-form videos from text prompts using AI

[![Video ansehen](fileId:2951)](https://drive.google.com/file/d/1Cl0KwgRgcuBPVdGgL-nqAcheyvfVXttD/view)
*Click on the image to see the Example output in google drive*

Transform simple text concepts into professional short-form videos complete with AI-generated visuals, narrator voice, background music, and dynamic text overlays - all automatically generated and ready for Instagram, TikTok, or YouTube Shorts.

This workflow demonstrates a cost-effective approach to video automation by combining AI-generated images with audio composition instead of expensive AI video generation. Processing takes 1-2 minutes and outputs professional 9:16 vertical videos optimized for social platforms.

The template serves as both a showcase and building block for larger automation systems, with sticky notes providing clear guidance for customization and extension.

## Who's it for

Content creators, social media managers, and marketers who need consistent, high-quality video content without manual production work. Perfect for motivational content, storytelling videos, educational snippets, and brand campaigns.

## How it works

The workflow uses a form trigger to collect video theme, setting, and style preferences. [ChatGPT](https://platform.openai.com/docs/guides/chat) generates cohesive scripts and image prompts, while [Google Gemini](https://ai.google.dev/) creates themed background images and [OpenAI TTS](https://platform.openai.com/docs/guides/text-to-speech) produces narrator audio. Background music is sourced from [Openverse](https://openverse.org/) for CC-licensed tracks. All assets are uploaded to [JsonCut API](https://jsoncut.com) which composes the final video with synchronized overlays, transitions, and professional audio mixing. Results are stored in [NocoDB](https://nocodb.com/) for management.

## How to set up

1. **JsonCut API**: Sign up at [jsoncut.com](https://jsoncut.com) and create an API key at [app.jsoncut.com](https://app.jsoncut.com). Configure HTTP Header Auth credential in n8n with header name `x-api-key`
2. **OpenAI API**: Set up credentials for script generation and text-to-speech
3. **Google Gemini API**: Configure access for Imagen 4.0 image generation  
4. **NocoDB** (Optional): Set up instance for video storage and configure database credentials

## Requirements

- [JsonCut](https://jsoncut.com) free account with API key
- [OpenAI API](https://platform.openai.com/) access for GPT and TTS
- [Google Gemini API](https://ai.google.dev/) for image generation
- [NocoDB](https://nocodb.com/) (optional) for result storage

## How to customize the workflow

This template is designed as a foundation for larger automation systems. The modular structure allows easy modification of AI prompts for different content niches (business, wellness, education), replacement of the form trigger with RSS feeds or database triggers for automated content generation, integration with social media APIs for direct publishing, and customization of visual branding through [JsonCut configuration](https://docs.jsoncut.com). 

The workflow can be extended for bulk processing, A/B testing multiple variations, or integration with existing content management systems. Sticky notes throughout the workflow provide detailed guidance for common customizations and scaling options.

## 🔗 Nodes Used

HTTP Request, NocoDB, Stop and Error, n8n Form Trigger, OpenAI, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
