# 📱 Post daily Instagram news carousels using Claude and Gemini

> ⚡ **63 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This daily workflow pulls trending headlines from Google News RSS, uses Anthropic Claude to write an Instagram caption and slide copy, generates matching images with Google Gemini, uploads assets to Amazon S3, and publishes either a single-image post or a carousel to Instagram via the Facebook Graph API.

## How it works
1. Runs every 24 hours on a schedule.
2. Rotates through a predefined set of topic-based Google News RSS feeds and fetches the top headlines.
3. Builds a short news context from the top three articles and sends it to Anthropic Claude to select one headline and generate the post caption, hashtags, and slide plan (single image or carousel).
4. Normalizes the AI output, enforces the configured post type, and turns each slide into a branded image prompt.
5. Generates images with the Google Gemini image model, optionally composites a logo, and uploads the image files to an Amazon S3 bucket to produce public image URLs.
6. Creates an Instagram media container (single image or carousel) using the Facebook Graph API, polls until the container is finished, and publishes the post to the connected Instagram business account.

## Setup
1. Add an Anthropic API credential for Claude.
2. Add a Google Gemini API key as an HTTP Query Auth credential and ensure the Gemini image endpoint is enabled for your project.
3. Add an Instagram/Facebook Graph API access token (HTTP Query Auth) with permission to publish content and set your Instagram business account ID in the workflow settings.
4. Configure Amazon S3 credentials, create an S3 bucket that allows public reads for uploaded images, and fill in the bucket name and region in the settings.
5. Import and select the required helper workflow in the “Make Slide Image (helper workflow)” step for carousel rendering, and optionally replace the placeholder base64 logo in the image preparation step.

## Requirements
- You need to create a meta app and an account on aws so that the meta app can use that as a container

## 🔗 Nodes Used

Edit Image, HTTP Request, RSS Read, Execute Sub-workflow, S3, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
