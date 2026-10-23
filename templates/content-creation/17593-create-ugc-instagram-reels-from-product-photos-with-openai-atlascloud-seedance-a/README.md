# 🎬 Create UGC Instagram reels from product photos with OpenAI, AtlasCloud Seedance and Blotato

> ⚡ **223 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow turns a product photo into a generated UGC-style video and Instagram Reel by using OpenAI to analyze the image and write a video prompt and caption, AtlasCloud Seedance to render the video, and Blotato to publish the finished Reel to an Instagram account.

## How it works
1. Runs when you manually execute the workflow.
2. Reads configuration values like the product image URL, OpenAI model IDs, video duration/aspect ratio, and polling limits.
3. Uses OpenAI Vision to analyze the product image and produce a detailed visual description.
4. Uses OpenAI to convert the image description into a single cinematic text-to-video scene prompt, and in parallel generates an Instagram caption in the выбран language.
5. Submits the scene prompt to AtlasCloud Seedance (text-to-video) and repeatedly polls the AtlasCloud prediction endpoint until the render succeeds or the maximum polling attempts is reached.
6. Combines the final AtlasCloud video URL with the generated caption and publishes it as an Instagram Reel via **[Blotato](https://blotato.com/?ref=firas)**.

## Setup
1. Add an OpenAI API credential and ensure the selected model supports image analysis (for example, set the vision model to gpt-4o).
2. Create an AtlasCloud API key and configure HTTP Header Auth on the two AtlasCloud HTTP requests.
3. Add a **[Blotato](https://blotato.com/?ref=firas)** API credential, connect your Instagram Business account in Blotato, and select the target Instagram account in the publish step.
4. Update the Configuration values, especially `product_image_url`, and adjust video duration/aspect ratio, creative direction, and polling settings as needed.

## Additional info
# Create UGC video with OpenAI and AtlasCloud Seedance, then publish to Instagram via **[Blotato](https://blotato.com/?ref=firas)**
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Create-UGC-video-with-OpenAI-and-AtlasCloud-Seedance-publish-to-Instagram-via-Blotato-39f3d6550fd981eb8559f357161ceceb)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
