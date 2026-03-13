# 🎬 Convert YouTube videos to SEO articles with Supadata, Claude Sonnet 4 and WordPress

> ⚡ **1,169 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Problem This Solves
Content creators, digital marketers, and website owners struggle with the time-consuming process of creating fresh, SEO-optimized blog content consistently. Manually writing articles, researching keywords, and maintaining a regular publishing schedule can take hours per piece of content.

## Target Audience
This workflow is perfect for:
- **Bloggers and Content Creators** who want to repurpose video content into written articles
- **Content Marketing Agencies** managing multiple client websites
- **Digital Marketing Teams** looking to scale their content production
- **Small Business Owners** who need ****regular blog content**** but lack time or writing resources
- **SEO Specialists** seeking to maximize content output while maintaining quality
- **YouTube Channel Owners** who want to expand their content reach across different platforms

## What This Workflow Does
This n8n automation transforms popular YouTube videos into high-quality, SEO-optimized articles that appear completely human-written. The workflow intelligently selects trending content from your chosen YouTube channels, transcribes the videos, and uses advanced AI to craft engaging articles optimized for search engines.

## How it works
- The user selects YouTube channels from which the workflow retrieves the most popular videos.
- The videos are transcribed and converted into SEO-optimized articles.
- Generated articles are automatically published to your WordPress website.

## Set up steps
- Connect your Google Account to all YouTube nodes.
- Integrate your Supadata account.
- Customize White-labeled prompt in the 'Compose Article' node according to your brand.
- Configure the 'Create WordPress Post' node with your WordPress website API.
- Set your target YouTube channels and activate the workflow.
- Detailed instructions and tutorials can be found in the workflow's sticky notes.

## Requirements
- Google account.
- supadata.ai account (used for video transcription).
- Anthropic subscription (GPT models are also supported, but I personally recommend using Anthropic Claude Sonnet 4 for text generation).

## 🔗 Nodes Used

HTTP Request, YouTube, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
