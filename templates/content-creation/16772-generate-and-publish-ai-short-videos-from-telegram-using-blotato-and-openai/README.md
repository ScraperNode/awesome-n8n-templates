# 🎬 Generate and publish AI short videos from Telegram using Blotato and OpenAI

> ⚡ **164 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow accepts a content idea via Telegram, uses OpenAI to write a short cross-platform caption, generates a vertical AI video with Blotato, and publishes it to TikTok, Instagram, Facebook, and X (Twitter), then confirms the result back in Telegram.

## How it works
1. Receives a message (your content idea) via a Telegram bot trigger.
2. Uses the incoming text to set the video prompt and posting options like TikTok privacy and the AI-generated flag.
3. Sends the prompt to OpenAI to generate a single short caption (max 280 characters) to reuse across all platforms.
4. Creates a 9:16 AI video in Blotato using a selected template and predefined template inputs (for example profile name and image).
5. Waits and repeatedly checks Blotato until the video render status is marked as done.
6. Publishes the rendered video and the generated caption to TikTok, Instagram Reels, Facebook Reels, and X (Twitter) via Blotato.
7. Sends a Telegram message confirming the video has been published.

## Setup
1. Install and enable the Blotato community node in your n8n instance (or enable Verified Community Nodes on n8n Cloud) and add a Blotato API credential.
2. Connect your Blotato account to TikTok, Instagram, Facebook (including selecting the target Page), and X, then select the correct account IDs in each publishing step.
3. Add an OpenAI API credential for the caption generation model.
4. Create a Telegram bot, add its Telegram credential to the trigger and confirmation step, and message the bot to start the workflow.
5. Optionally update the Blotato template selection and template inputs (profile image URL, author/profile name, aspect ratio) and adjust the render wait time if needed.

## Additional info
# 📥 [Open full documentation on Notion](https://automatisation.notion.site/Du-PDF-au-contenu-social-UPDF-workflow-n8n-TikTok-Instagram-Facebook-X-38b3d6550fd9814ba16bce6a52a3c285?pvs=73)

## 🔗 Nodes Used

Telegram, Telegram Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
