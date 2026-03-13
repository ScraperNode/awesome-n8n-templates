# 🎬 Create blog posts from YouTube videos with Mistral AI & Gemini image generation

> ⚡ **257 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

**Description**

This template automates the process of creating blog posts from YouTube videos using Mistral AI for text generation and Gemini for image generation. It provides a seamless workflow that transforms YouTube content into ready-to-publish articles complete with engaging visuals.

**⚠️ Disclaimer:** This template can only be used on self-hosted n8n instances. It also relies on community nodes, which must be installed before running the workflow.

**Workflow Overview**

YouTube Data Extraction – Retrieves video details (title, description, and transcript).

Content Summarization – Mistral AI rewrites and structures the transcript into a blog-ready format.

Image Generation – Gemini creates relevant, high-quality images to complement the article.

Post Assembly – The workflow automatically combines the generated text and visuals into a structured blog post.

**Features**

Extract video details and transcripts directly from YouTube.

Summarize and rewrite content into blog posts using Mistral AI.

Generate relevant images with Gemini for engaging visuals.

Automatically structure blog posts for publishing.

**Requirements**

Before using this template, ensure you have:

An active self-hosted n8n instance.

API keys for OpenRouter (Mistral AI) and Gemini.

The required community nodes installed.

Access to public or unlisted YouTube videos.

**Setup Instructions**

Import the template into your self-hosted n8n instance.

Configure the API credentials:

Add your OpenRouter API key.

Add your Gemini API key.

Replace placeholder domains or webhook URLs with your own.

Run the workflow with a sample YouTube video URL.

Review the generated blog post and images.

**Customization**

Content length: Adjust prompt settings in the Mistral AI node.

Tone of voice: Modify prompts for formal, casual, or technical style.

Image style: Update Gemini requests to change the look and feel.

Publishing: Connect to your CMS (e.g., WordPress, Ghost) for direct publishing.

**How YouTube is Involved**

The workflow starts with a YouTube video URL, extracts metadata and transcripts, and then transforms this raw content into a complete blog post enriched with AI-generated images.

**WorkFlow:**
![image.png](fileId:2328)

## 🔗 Nodes Used

Edit Image, Google Sheets, HTTP Request, Wordpress, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
