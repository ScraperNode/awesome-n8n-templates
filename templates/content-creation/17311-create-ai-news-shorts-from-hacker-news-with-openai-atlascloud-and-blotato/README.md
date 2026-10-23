# 🎬 Create AI news shorts from Hacker News with OpenAI, AtlasCloud and Blotato

> ⚡ **126 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow fetches trending Hacker News front-page stories for a keyword, uses OpenAI to select one and write a short-form video brief, generates an AI video via AtlasCloud, then publishes the finished clip to YouTube and TikTok through **[Blotato](https://blotato.com/?ref=firas)**.

## How it works
1. Starts when you manually execute the workflow.
2. Pulls the latest Hacker News front-page stories that match your configured keyword and combines them into a single list.
3. Uses OpenAI to choose the most compelling story and generate a cinematic text-to-video prompt, a short title, a caption, and hashtags.
4. Sends the prompt to AtlasCloud to generate a short AI video with the configured duration, aspect ratio, and resolution.
5. Polls AtlasCloud at the configured interval until the generation succeeds or fails.
6. When the video is ready, publishes the video URL to YouTube and then TikTok via **[Blotato](https://blotato.com/?ref=firas)** using the generated title/caption and AI-generated/synthetic media flags.

## Setup
1. Add an OpenAI API credential and select it in the OpenAI Chat Model step.
2. Create an AtlasCloud HTTP Header Auth credential (Bearer token) and select it in both AtlasCloud HTTP requests.
3. Add a **[Blotato](https://blotato.com/?ref=firas)** API credential, then select your YouTube and TikTok accounts in the two Blotato publish steps.
4. Update the values in the Configuration step (keyword, AtlasCloud model, duration, aspect ratio, resolution, poll wait time, and TikTok privacy level) to match your needs.

## Additional info
# Hacker News to video content with Blotato
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Hacker-News-to-video-content-with-Blotato-39d3d6550fd981398f88f9f12210c942)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

HTTP Request, Hacker News, Stop and Error, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
