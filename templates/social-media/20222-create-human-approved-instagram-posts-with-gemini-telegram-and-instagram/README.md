# 📱 Create human-approved Instagram posts with Gemini, Telegram, and Instagram

> ⚡ **76 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects an Instagram post request via an authenticated n8n form, uses Google Gemini to draft a caption from a submitted image and verified facts, sends the draft to Telegram for human approval, and publishes to Instagram via the Facebook Graph API only after approval.

## How it works
1. Receives a post request through an authenticated n8n form with a public HTTPS image URL, product name, verified facts, and an optional call to action.
2. Validates the submission and downloads the image file from the provided URL.
3. Sends the image and a guarded prompt to Google Gemini to generate a JSON draft containing a caption, five hashtags, a confidence score, and any risks.
4. Applies deterministic checks (caption length, product-name inclusion, minimum confidence, banned phrases, risk flags, and exactly five unique hashtags) to decide whether the draft is eligible for review.
5. If the draft passes, sends it to Telegram with a private approval link and pauses until a reviewer approves or rejects it.
6. If approved, creates an Instagram media container and polls the Instagram Graph API until processing finishes.
7. Publishes the post to Instagram, fetches the permalink, and confirms publication in Telegram, or reports rejection/processing delays back to Telegram without publishing.

## Setup
1. Configure Basic Auth for the request form and publish the workflow so requesters can access the production form URL.
2. Add credentials for Google Gemini, Telegram, and Facebook Graph API (Meta) to the corresponding nodes.
3. Update the brand settings, Telegram chat ID, Instagram user ID, Graph API version, model name, and moderation rules in the "Configure Brand and Channels" step.
4. Use an Instagram professional account connected to a Facebook Page and ensure the submitted image URL is a publicly reachable HTTPS JPG/PNG/WebP that stays accessible while Meta processes the media container.

## 🔗 Nodes Used

HTTP Request, Telegram, Facebook Graph API, n8n Form Trigger, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
