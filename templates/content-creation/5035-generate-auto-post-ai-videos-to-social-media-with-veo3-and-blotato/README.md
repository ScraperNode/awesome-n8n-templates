# 🎬 Generate & auto-post AI videos to social media with Veo3 and Blotato

> ⚡ **229,417 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

![Workflow Screenshot](https://www.dr-firas.com/Veo3_blotato2.png)

# Automate video creation with Veo3 and auto-post to Instagram, TikTok via Blotato

### Who is this for?

This template is ideal for content creators, social media managers, YouTubers, and digital marketers who want to generate high-quality videos daily using AI and distribute them effortlessly across multiple platforms.

It’s perfect for anyone who wants to scale short-form content creation without video editing tools.

### What problem is this workflow solving?

Creating and distributing consistent video content requires:
- Generating ideas
- Writing scripts and prompts
- Rendering videos
- Manually posting to platforms

This workflow automates all of that. It transforms one prompt into a professional AI-generated video and publishes it automatically — saving time and increasing reach.

### What this workflow does

1. **Triggers daily** to generate a new idea with OpenAI (or your custom prompt).
2. **Creates a video prompt** formatted specifically for Google Veo3.
3. **Generates a cinematic video** using the Veo3 API.
4. **Logs the video data** into a Google Sheet.
5. **Retrieves the final video URL** once Veo3 finishes rendering.
6. **Uploads the video to Blotato** for publishing.
7. **Auto-posts** the video to Instagram, TikTok, YouTube, Facebook, LinkedIn, Threads, Twitter (X), Pinterest, and Bluesky.

### Setup

1. Add your **OpenAI API key** to the GPT-4.1 nodes.
2. Connect your **Veo3 API credentials** in the video generation node.
3. Link your **Google Sheets account** and use a sheet with columns: `Prompt`, `Video URL`, `Status`.
4. Connect your **Blotato API key** and set your platform IDs in the `Assign Social Media IDs` node.
5. Adjust the **Schedule Trigger** to your desired posting frequency.

### How to customize this workflow to your needs

- **Edit the AI prompt** to align with your niche (fitness, finance, education, etc.).
- **Add your own branding overlays** using JSON2Video or similar tools.
- **Change platform selection** by enabling/disabling specific HTTP Request nodes.
- **Add a Telegram step** to preview the video before auto-posting.
- **Track performance** by adding metrics columns in Google Sheets.

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Automate-video-creation-with-Veo3-and-auto-post-to-Instagram-TikTok-via-Blotato-2163d6550fd980768996f05afb2794ea)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
