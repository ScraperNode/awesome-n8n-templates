# 🎬 Ugc video generation with Wan 2.5 on Replicate

> ⚡ **2,095 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**This workflow automatically converts static images into dynamic videos using AI-powered animation. It saves you hours of video editing by transforming product photos, marketing images, or any static visuals into engaging video content perfect for social media and advertising campaigns.**

## Overview
This workflow automates the entire image-to-video generation process using the WAN-VIDEO 2.5 model via Replicate API. Simply provide an image URL and a text prompt describing the desired motion, and the workflow handles the video creation, status monitoring, and delivery of your animated content - typically ready in 30-120 seconds.

## Tools Used
* **n8n**: The automation platform that orchestrates the workflow
* **Replicate API**: Powers the WAN-VIDEO 2.5 AI model for image-to-video generation
* **Status Monitoring**: Automated checking system with intelligent retry logic
* **Error Handling**: Built-in resilience with comprehensive error management

## How to Install
1. **Import the Workflow**: Download the .json file and import it into your n8n instance
2. **Get Replicate API Key**: Sign up at replicate.com and copy your API token
3. **Configure API Token**: Replace the placeholder in the "Set API Token" node
4. **Add Your Image**: Update the seed image URL in the "Add Seed Image and Prompt" node
5. **Customize Prompt**: Write your desired video motion description and run the workflow

## Use Cases
* **E-commerce Teams**: Animate product photos for dynamic social media ads
* **Content Creators**: Transform static images into engaging video content for TikTok/Instagram
* **Marketing Agencies**: Create eye-catching video ads from client product photos
* **Educational Content**: Bring diagrams and infographics to life with motion
* **Social Media Managers**: Generate video content at scale from existing image libraries

## Connect with Me
* **Website**: https://www.nofluff.online
* **YouTube**: https://www.youtube.com/@YaronBeen/videos
* **LinkedIn**: https://www.linkedin.com/in/yaronbeen/
* **ROASPIG**: Check out ROASPIG.com for scalable media generation and automation solutions

#n8n #automation #ai #videogeneration #imagetovideo #replicate #contentcreation #socialmediacontent

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
