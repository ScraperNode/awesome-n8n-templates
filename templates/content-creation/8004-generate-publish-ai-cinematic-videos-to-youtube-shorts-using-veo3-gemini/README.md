# 🎬 Generate & publish AI cinematic videos to YouTube Shorts using VEO3 & Gemini

> ⚡ **2,137 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it Works
This workflow uses **VEO3** to generate **surreal cinematic AI videos** at a fraction of the cost compared to Google’s standard video generation APIs.  
With it, you can automatically run a **YouTube Shorts channel** (and optionally Instagram uploads) that posts **new AI videos every day**  completely automated.  

### Workflow Overview  
1. **Schedule Trigger**  
   - Runs automatically at your chosen times (e.g., twice per day).  

2. **AI Prompt Generator**  
   - Creates a detailed video idea based on your chosen niche.  
   - You only need to adapt the system prompt to your theme (e.g., *Travel Facts, Tech Visuals, Mini-Facts, Impossible Realities, Food Illusions*).  
   - Output includes:  
     - **Video Prompt** (for VEO3 API)  
     - **Social Caption** with hashtags  
     - **YouTube Title**  
     - **YouTube Description**  

3. **VEO3 Video Generation**  
   - Sends the prompt to **KIE AI VEO3** (model: `veo3_fast`).  
   - Produces **9:16 vertical short-form videos** optimized for YouTube Shorts, TikTok, Instagram Reels.  
   - Significantly **cheaper than Google’s Video AI** while delivering cinematic quality.  

4. **Publishing**  
   - Uploads automatically to **YouTube Shorts** (with AI-generated titles, descriptions, tags).  
   - In parallel, posts the same video to a **Telegram channel** (Instagram upload possible with a small modification).  

---

## Why Use This Workflow?  
- **Cost Advantage:**  
  - Google’s video generation is very expensive.  
  - **VEO3 costs are much lower**, making it possible to publish **multiple Shorts every day** without breaking your budget.  

- **Automated Channel Growth:**  
  - Build a **fully automated YouTube Shorts channel**.  
  - Post fresh videos daily → more reach, more chances to go viral.  

- **Flexible Niches:**  
  - Simply edit the system prompt to match your niche.  
  - Examples:  
    - *Mini Facts Channel*  
    - *Surreal Visual Loops*  
    - *Tech Explainers in Visual Form*  
    - *Food or Nature Illusions*  
  - The AI adapts automatically to your theme.  

- **Cross-Platform:**  
  - Out of the box: YouTube + Telegram.  
  - With small adjustments: Instagram Reels, TikTok uploads possible.  

---

## Setup Steps  
1. **Get API Keys:**  
   - KIE AI VEO3 API key.  
   - YouTube API credentials (OAuth2).  
   - (Optional) Telegram Bot API or Instagram Graph API.  

2. **Configure Schedule:**  
   - Define how often you want new videos (e.g., 1–5 per day).  

3. **Adapt Prompts:**  
   - Change the AI Agent system prompt to your target niche.  

4. **Run & Scale:**  
   - Let the workflow run automatically.  
   - Watch your channel fill with new daily Shorts.  

---

## Tips & Notes  
- With VEO3 you can **experiment with higher volume** since costs are predictable and far lower than Google.  
- Start with one niche channel → once it works, clone the workflow to build multiple parallel AI-driven channels.  
- Always respect YouTube/Instagram guidelines when posting automated content.  
- Adding background music layers or captions can further increase virality.  

---

⚡ **Summary:**  
With this template you can create an **AI-powered YouTube Shorts machine** that runs on autopilot.  
Just choose your niche, adjust the prompt, and let VEO3 + n8n handle **video creation, uploading, and scaling** — **cheaper, faster, and smarter** than traditional Google Video AI.


**Questions or custom requests?**  
📩 **suliemansaid.business@gmail.com**

## 🔗 Nodes Used

HTTP Request, Telegram, YouTube, Schedule Trigger, AI Agent, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
