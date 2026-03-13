# 🎬 Generate trend-based marketing videos with Seedance AI, Perplexity, and GPT

> ⚡ **8,364 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.* 

🎬 Seedance Video Marketing AI Agent
Description:
This AI-powered marketing automation workflow takes a user prompt, researches trending topics, generates a compelling short-form video prompt, and sends it to the Seedance API via Wavespeed to create a ready-to-use video ad — all from a single Telegram message.

Built for marketers, founders, and content creators who want to turn trend-based ideas into visual video content without touching a video editor.

For the step-by-step video tutorial guide on how to build this workflow, check out:
https://youtu.be/2oZ5NhosKgo

🤖 How It Works:
📲 Telegram Trigger
 Kick off the workflow by messaging a short prompt (e.g., “Create a 5-second IG ad for my new perfume”) via Telegram.

📈 Trend Research with Perplexity AI (Sonar Pro)
 An AI agent scans the latest 14-day trends and selects the top marketing angle based on the product/niche input.

🧠 Video Prompt Engineer (ChatGPT)
 Crafts a concise, visually rich video generation prompt — optimized for Seedance — based on the trend insight and product.

🎥 Video Generation (Wavespeed + Seedance API)
 Sends the AI-generated prompt to Seedance via Wavespeed to generate a 5-second short-form video ad.

🔁 Status Loop & Response
 The workflow checks if the video is ready. Once complete, it sends the final video output URL back to you in Telegram.

🔧 Tools Used:
Telegram Trigger & Response

Perplexity AI (Sonar Pro)

OpenAI

Seedance API (via Wavespeed)

n8n HTTP Request, Wait, and Loop nodes

💡 Use Cases:
Auto-generate TikTok/Instagram ads from current trends

Scale creative content generation with zero design work

Plug into your marketing chatbot or campaign assistant

Use trends as visual inspiration for ad creatives

If you like the build, check out my channel and consider subscribing: https://www.youtube.com/@Automatewithmarc

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, OpenAI, Perplexity

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
