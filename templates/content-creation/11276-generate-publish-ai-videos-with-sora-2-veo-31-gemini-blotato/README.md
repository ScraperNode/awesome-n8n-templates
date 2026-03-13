# 🎬 Generate & publish AI videos with Sora 2, Veo 3.1, Gemini & Blotato

> ⚡ **1,126 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Overview

This workflow automatically generates short-form AI videos using both OpenAI Sora 2 Pro and Google Veo 3.1, enhances your idea with Google Gemini, and publishes content across multiple platforms through Blotato.
It’s perfect for creators, brands, UGC teams, and anyone building a high-frequency AI video pipeline.

You can turn a single text idea into fully rendered videos, compare outputs from multiple AI models, and publish everywhere in one automated flow.

---

## Good to know

* Generating Sora or Veo videos may incur API costs depending on your provider.
* Video rendering time varies by prompt complexity.
* Sora & Veo availability depends on region and account access.
* Blotato must be connected to your social accounts before publishing.
* The workflow includes toggles so you can turn Sora, Veo, or platforms on/off easily.

---

## How it works

* Your text idea enters through the Chat Trigger.
* Google Gemini rewrites your idea into a detailed, high-quality video prompt.
* The workflow splits into two branches:

  * **Sora Branch**: Generates video via OpenAI Sora 2 Pro, downloads the MP4, and uploads/publishes to YouTube, TikTok, and Instagram.
  * **Veo Branch**: Generates a video using Google Veo 3.1 (via Wavespeed), retrieves the output link, emails it to you, and optionally uploads it to Blotato for publishing.
* A Config – Toggles node lets you enable or disable models and platforms.
* Optional Google Sheets logging can store video history and metadata.

---

## How to use

* Send a message to the Chat Trigger to start the workflow.
* Adjust toggles to choose whether you want Sora, Veo, or both.
* Add or remove publishing platforms inside the Blotato nodes.
* Check your email for Veo results or monitor uploads on your social accounts.
* Ideal for automation, batch content creation, and AI-powered video workflows.

---

## Requirements

* **Google Gemini** API key (for prompt enhancement)
* **OpenAI Sora 2** API key
* **Wavespeed (Veo 3.1)** API key
* **Blotato** account + connected YouTube/TikTok/Instagram channels
* **Gmail OAuth2** (for sending video result emails)
* **Google Sheets** (optional logging)

---

## Customizing this workflow

* Add a title/description generator for YouTube Shorts.
* Insert a thumbnail generator (image AI model).
* Extend logging with Sheets or a database.
* Add additional platforms supported by Blotato.
* Use different prompt strategies for cinematic, viral, or niche content styles.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Chat Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
