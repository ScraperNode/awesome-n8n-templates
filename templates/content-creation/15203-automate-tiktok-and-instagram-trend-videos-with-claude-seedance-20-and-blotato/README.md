# 🎬 Automate TikTok and Instagram trend videos with Claude, Seedance 2.0 and Blotato

> ⚡ **1,825 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 💥 TikTok Viral Trend Detector → Seedance 2.0 → Auto-Publish with Blotato

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Claude-Cowork-n8n-Trend-Detector-3483d6550fd980609c96c2771088f601?source=copy_link)

![Workflow Overview](https://www.dr-firas.com/seedance2.0.png)

## Who is this for?

This workflow is built for **content creators, social media managers, and automation enthusiasts** who want to automate the entire TikTok content pipeline — from trend research to video generation to publishing — without filming anything.

It's especially powerful for anyone running **faceless content channels** on TikTok and Instagram, or agencies managing multiple accounts who need to produce trend-driven content at scale with zero manual effort.

&gt; ⚠️ **Disclaimer:** This workflow uses Community Nodes (Blotato). These are only available on self-hosted n8n instances.

---

### What problem is this workflow solving?

Creating viral TikTok content requires three separate skills: **trend research**, **video production**, and **publishing strategy**. Most creators spend hours doing each manually — scrolling TikTok for inspiration, editing videos in CapCut, then posting with the right hashtags at the right time.

This workflow **automates the entire pipeline** in one shot:
- It finds what's trending right now on TikTok in your niche
- Analyzes the viral pattern (hook structure, emotions, visual style)
- Generates an **original concept** inspired by that pattern (no copying)
- Creates a cinematic AI video with Seedance 2.0
- Publishes automatically to TikTok and Instagram via Blotato

---

### What this workflow does

This automation runs in two parts:

**Part 1 — Claude Cowork (Trend Intelligence)**

You prompt Claude Cowork with your niche (e.g., "weird productivity hacks"). It uses [Apify](https://www.apify.com/?fpr=udemy) to scrape the top viral TikTok videos on that topic, then performs a **cross-video analysis** to extract the viral recipe:
- Hook pattern (the first 3 seconds)
- Narrative structure (list format, before/after, tutorial…)
- Dominant emotion (curiosity, recognition, surprise)
- Recurring visual elements

Claude then generates **3 original video concepts** that apply this viral recipe — not copies, but fresh ideas built on proven patterns. The best concept is sent to the n8n webhook as a structured JSON payload.

**Part 2 — n8n Automation Pipeline**

Once the webhook receives the payload, n8n takes over:

1. **Webhook** receives the trend analysis + selected concept from Claude Cowork
2. **Normalize Payload** handles both Postman (array format) and direct Cowork formats
3. **Google Sheets** archives the full trend report (analyzed videos, viral pattern, all 3 concepts)
4. **Claude (Anthropic node)** generates a Seedance-optimized video prompt: one continuous cinematic scene, no human faces, 9:16 vertical, plus a TikTok caption with hashtags
5. **AtlasCloud / Seedance 2.0** generates the AI video from the text prompt (720p, native audio)
6. **Polling loop** checks every 5 seconds until the video is ready
7. **Google Sheets** logs the production (video URL, prompt, caption, prediction ID)
8. **Respond Success** immediately confirms to the webhook caller (before publishing, to avoid timeouts)
9. **Blotato** publishes in parallel to **TikTok** and **Instagram** simultaneously
10. **Google Sheets** updates the row with publication status and post URLs for both platforms

---

### Setup

**Required accounts:**
- A **Claude.ai Pro** account with Claude Cowork enabled (for Part 1 — trend scraping and analysis)
- An **[Apify](https://www.apify.com/?fpr=udemy)** account to run the TikTok scraper actor (`clockworks/tiktok-scraper`). Apify handles the TikTok data extraction — without it, the Cowork agent cannot retrieve viral videos.

**Credentials to configure in n8n:**

1. **Google Sheets OAuth2**
   - Type: OAuth2
   - Used for: Saving trend reports and production logs
   - Connect via n8n's built-in Google Sheets credentials

2. **Anthropic API Key**
   - Type: Anthropic credentials (built-in n8n node)
   - Get it at: [console.anthropic.com](https://console.anthropic.com)
   - Used for: Claude node — generating the Seedance video prompt and TikTok caption

3. **Atlas Cloud API Key**
   - Type: Header Auth (`Authorization: Bearer`)
   - Get it at: **[AtlasCloud](https://www.atlascloud.ai?ref=8QKPJE)**
   - Used for: Seedance 2.0 text-to-video generation (HTTP Request node)

4. **Blotato API Key**
   - Type: Blotato credentials (community node)
   - Get it at: **[Blotato](https://blotato.com/?ref=firas)**
   - Used for: Publishing to TikTok and Instagram
   - Install the community node: `npm install @blotato/n8n-nodes-blotato`

### How to customize this workflow to your needs

**Change the niche:**
Edit the Claude Cowork prompt to target a different niche: cooking hacks, finance tips, fitness routines, language learning — any niche with active TikTok communities works.

**Change the video model:**
The workflow uses `bytedance/seedance-2.0/text-to-video` via AtlasCloud. You can swap it for `seedance-2.0-fast` (cheaper, 4s max) or any other AtlasCloud-supported model by editing the `Seedance - Start Generation` HTTP Request node body.

**Add more platforms:**
Since Blotato supports 9 platforms (YouTube Shorts, LinkedIn, Pinterest, Threads, etc.), duplicate the `Create post` node and change the `platform` parameter to publish everywhere at once.

**Change publishing schedule:**
Replace the Webhook trigger with a **Schedule Trigger** to run the full pipeline automatically every day at a set time.

**Select a different concept:**
Claude Cowork generates 3 video concepts per run. Change `selected_concept_id` in the JSON payload (1, 2, or 3) to test different concepts on the same trend data.

**Adjust video duration:**
The workflow currently uses `duration: -1` (auto) for the Seedance node. Set it to `4` for faster/cheaper generation, or test higher values depending on your AtlasCloud plan limits.

---

### 🎥 **Full tutorial**: [Watch on YouTube](https://youtu.be/Bzu00hlo1AI)


![SORA2 logo](https://www.dr-firas.com/seedance2.0-YT.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [n8n courses (in French)](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 n8n courses (in French) ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
