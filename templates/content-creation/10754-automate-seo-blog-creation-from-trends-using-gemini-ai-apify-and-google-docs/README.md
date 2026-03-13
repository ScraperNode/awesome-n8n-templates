# 🎬 Automate SEO blog creation from trends using Gemini AI, Apify, and Google Docs

> ⚡ **390 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate SEO Blog Creation with Apify + Google Docs + KIE AI’s Nano Banana API

## Who’s it for

For content creators, SEO specialists, and digital marketers who want to automatically generate SEO-optimized blog posts from trending topics — no manual writing or formatting required.

## How it works / What it does

This workflow turns trending searches into fully structured blog posts using AI:
1. Fetch trending topics from India (or any country) using Apify’s Google Trends scraper.
2. Generate a SEO-optimized blog post with title, meta description, headings, and long-form content using Gemini AI.
3. Refine the System Message (optional) with Gemini AI for better readability and engagement.
4. Create a custom blog image using KIE AI’s Nano Banana API based on the blog title.
5. Automatically insert all content and images into a Google Doc, ready for publishing.

## How to set up
1. Add your Apify API token in the Google Trends node.
2. Configure Google Docs OAuth2 credentials for the document update node.
3. Add your KIE AI Nano Banana API token for image generation.
4. Schedule the Daily Trigger to your preferred time (default is 8 AM).

## Requirements
1. Apify API token (for trending search scraping)
2. Google account with Docs access
3. KIE AI Nano Banana API token

## How to customize the workflow
1. Change country or timeframe for trending searches.
2. Update the AI prompt for tone, length, or style of the blog.
3. Change the Google Doc ID to insert content into a different document.
4. Adjust image generation settings (size, style) in the KIE AI node.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
