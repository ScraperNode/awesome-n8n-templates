# 🎬 Create faceless vertical Shorts with OpenAI Sora 2, PostWire, and Sheets

> ⚡ **5 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, uses Google Sheets to avoid repeating topics, generates a new Shorts concept and Sora 2 video with OpenAI, publishes it via PostWire to YouTube Shorts, TikTok, and Instagram Reels, then logs results back to Google Sheets and emails you on failures.

## How it works
1. Runs every day at 9:00 on a schedule.
2. Loads channel settings (niche, visual style, video length, and alert email) and reads your previous posts from Google Sheets.
3. Uses OpenAI (chat model) to pick a new, non-repeating topic and produce a Sora 2 prompt, caption idea, and YouTube title.
4. Generates a 9:16 video with audio using OpenAI Sora 2 based on the prompt and configured duration.
5. Publishes the video through PostWire to YouTube, TikTok, and Instagram with platform-specific title/caption handling.
6. Appends a “published” row with the platform link to Google Sheets, or logs the failure and sends a Gmail alert with the error details.

## Setup
1. Install and configure the PostWire node, create a PostWire account, connect your YouTube/TikTok/Instagram accounts, and add a PostWire API credential in n8n.
2. Add an OpenAI credential for both the chat model and the Sora 2 video generation node.
3. Create a Google Sheet with columns `date, topic, network, status, link, note`, connect Google Sheets credentials, and select the correct spreadsheet and sheet in the read/log nodes.
4. Add a Gmail credential and set your destination email address in the channel settings.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
