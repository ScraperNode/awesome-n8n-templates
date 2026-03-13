# 🎬 💾 Generate Blog Posts on Autopilot with GPT‑5, Tavily and WordPress

> ⚡ **844 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who Is This For?

 This workflow is designed for marketers, content creators, agencies, and solo founders who want to publish long‑form posts with visuals on autopilot using n8n and AI agents.
​

Whether you run a blog, SaaS, personal brand, newsletter, or client accounts, this tool helps you keep a consistent content pipeline without manually writing every article, creating images, and posting to each platform one by one.
​
​
💪🏼 While the template is wired around classic blog + social media distribution, the underlying logic is universal. You can easily adapt it to any niche by editing prompts, swapping models, and re‑wiring nodes. You can plug in any LLM you like, from ChatGPT to Claude, Gemini, Mistral, DeepSeek, OpenRouter, or even local models through Ollama.
​

## What Problem Is This Workflow Solving?

🤯 Most teams waste hours on the same repetitive loop: research a topic, gather links, write a blog post, craft social captions, generate visuals, upload everything to multiple platforms, and archive assets.
​
​
💎 This workflow solves that by automating the full content chain—from research and blog‑post generation to image creation, publishing across channels, and logging everything in your content database—so your feeds stay active while you focus on strategy, not busywork.
​

## What This Workflow Does

✨ Generates in‑depth blog posts tailored to your topic and target audience, enriched with fresh references from the web via Tavily/SerpAPI search tools.
​
✨ Creates an image prompt and title from the article, generates the visual with OpenAI Images (gpt-image-1), and converts it into a ready‑to‑use image file.
​
✨ Automatically publishes content to your connected platforms (WordPress for blog posts, Telegram, X/Twitter, Facebook, LinkedIn) while saving images to Google Drive and logging each publication in Google Sheets for tracking.
​

## How It Works?

Surprisingly simple ☺️

The workflow is triggered by another n8n workflow or by one of several triggers (Facebook, RSS, Google Sheets, Airtable, Postgres) that pass in the blogTopic, targetAudience, and Telegram chatID.
​
​
The Blog Post Agent (LLM with access to Tavily/SerpAPI) researches the topic, writes a structured article for the specified audience, and sends its output to the Image Prompt Agent, which turns the content into a visual prompt and title.
​

🎯 The end result: you provide a topic, run the workflow, and receive a complete blog post, matching image, and ready‑made social posts shipped directly to your channels and archives—no manual copy‑paste.
​
## How to Customize This Workflow to Your Needs  

- 🎨 Switch AI models and fine‑tune prompts so the agent can handle your exact formats: tutorials, case studies, listicles, product updates, thought‑leadership pieces, or campaign landing posts. 
- 🔍 Refine research sources inside Tavily/SerpAPI to prioritize the domains, blogs, and docs your audience trusts, keeping posts accurate and up to date. 
- ⏰ Adjust posting cadence and schedules to align with peak engagement for your audience, mixing automated slots with manual “launch” runs for special announcements.  
- 📱 Expand or trim channels as needed: keep just WordPress + LinkedIn, add Telegram as a content feed, or plug the workflow into additional automations like email campaigns or RSS feeds.
- 📊 Use Google Sheets as your content hub to store ideas, angles, CTAs, references, and performance notes so you can double‑down on topics and formats that perform best.  
- 🎬 Swap images for video by replacing the image generation node with video tools (for example, Runway‑style APIs) if your strategy is video‑first while keeping the same prompt pipeline. 
- 💾 Build a reusable prompt library in Sheets, Notion, or Airtable so you can rotate proven prompt patterns each month and keep quality high without reinventing the wheel.  


🤖 The system will continuously generate blog posts, visuals, and social updates and publish them across your selected platforms while archiving everything in Drive and Sheets—keeping your brand visible, consistent, and professional with minimal ongoing effort.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Wordpress, Facebook Graph API

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
