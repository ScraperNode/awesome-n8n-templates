# 🎬 Generate Seedance video ads from Telegram photos with OpenAI and Blotato

> ⚡ **57 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a product photo sent via Telegram into an AI-generated short video ad using OpenAI for image analysis and concept/caption writing, AtlasCloud Seedance 2.0 for text-to-video generation, and Blotato to publish the approved video to Facebook, Instagram, TikTok, and YouTube Shorts.

## How it works
1. Receives a product photo (and optional campaign caption) via a Telegram bot message.
2. Uses OpenAI Vision to analyze the image and produce a detailed, product-only description.
3. Uses OpenAI to generate a one-shot text-to-video ad concept, then asks the user in Telegram to approve or reject it with feedback for revision.
4. Submits the approved prompt to AtlasCloud Seedance 2.0, waits, polls the generation status, and routes failures to a Telegram alert.
5. Sends the generated video back to Telegram for approval, and regenerates the video from the same prompt if it is rejected.
6. Uses OpenAI to generate a social caption and hashtags, loops through a Telegram approval/revision step, then publishes the approved video and caption to selected platforms via Blotato.

## Setup
1. Add Telegram bot credentials and start a chat with your bot so it can receive photos and send approval forms.
2. Add an OpenAI API credential with access to vision and chat models, and adjust the model IDs in the Configuration values if needed.
3. Create an AtlasCloud HTTP Header Auth credential (Authorization: Bearer <API_KEY>) and select it on both AtlasCloud HTTP Request nodes.
4. Add a Blotato credential, select your connected account/page IDs in each enabled Blotato publish node, and disable any platforms you don’t want to post to.
5. Review and update the Configuration values (duration, aspect ratio, resolution, status wait time, language, and TikTok privacy level) to match your campaign and platform requirements.

## Additional info
# Generate AI video ads from product photos with Seedance 2.0 and publish to social media
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Generate-AI-video-ads-from-product-photos-with-Seedance-2-0-and-publish-to-social-media-3a03d6550fd9814a86fdd416333079c3)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
