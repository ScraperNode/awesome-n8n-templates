# 📱 Create Instagram carousels and TikTok slideshows with OpenAI and PostFast

> ⚡ **123 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a Mon/Wed/Fri schedule to generate an Instagram carousel or TikTok slideshow using OpenAI (GPT-4o-mini and gpt-image-1), sends the slides to Telegram for approval, and only then uploads the images and schedules the post via PostFast.

## How it works
1. Runs every Monday, Wednesday, and Friday at 8am and loads your brand, topics, slide count, platform filter, and Telegram chat ID.
2. Retrieves your connected social accounts from PostFast and keeps only accounts that are connected and match the selected platforms.
3. Uses OpenAI (gpt-4o-mini) to write a carousel as strict JSON containing a caption and slide-by-slide headings, body text, and visual descriptions.
4. Builds per-slide image prompts and uses OpenAI (gpt-image-1) to generate a 1024×1536 portrait image for each slide.
5. Sends the generated slide images to Telegram and waits for you to approve or decline posting.
6. If approved, requests per-account upload URLs from PostFast, uploads each slide image to the provided storage URLs, and schedules one PostFast social post per account with the slides in order and the generated caption.

## Setup
1. Install and enable the PostFast community node (n8n-nodes-postfast) and add your PostFast API key credentials.
2. Add OpenAI credentials for both the text generation (gpt-4o-mini) and image generation (gpt-image-1) steps.
3. Create a Telegram bot with @BotFather, add the bot token as Telegram credentials, start a chat with the bot, and set your Telegram chat ID in the configuration values.
4. Update the configuration values (brand name, brand voice, topics, slide count, image style, and platform filter) to match your content and target accounts.

## Requirements
- A PostFast account (postfa.st) with an API key • An OpenAI API key with image generation access • A free Telegram bot (@BotFather) and your chat ID

## Customization
- Change slide count (2-8), image style, topics, posting days or platform filter in the single configuration node • Enable TikTok auto music and the AI-generated content label in the PostFast node's Controls • Swap Telegram approval for PostFast's built-in PENDING_APPROVAL to review posts in the dashboard instead

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
