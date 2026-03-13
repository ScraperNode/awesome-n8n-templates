# 🎬 Generate AI viral videos with Seedance and upload to TikTok, YouTube & Instagram

> ⚡ **304,381 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

![Workflow Screenshot](https://www.dr-firas.com/seedanceII.png)

# Generate AI videos with Seedance & Blotato, upload to TikTok, YouTube & Instagram

### Who is this for?

This template is ideal for creators, content marketers, social media managers, and AI enthusiasts who want to automate the production of short-form, visually captivating videos for platforms like TikTok, YouTube Shorts, and Instagram Reels — all without manual editing or publishing.

### What problem is this workflow solving?

Creating engaging videos requires:
- Generating creative ideas  
- Writing detailed scene prompts  
- Producing realistic video clips and sound effects  
- Editing and stitching the final video  
- Publishing across multiple platforms  

This workflow automates the entire process, saving hours of manual work and ensuring consistent, AI-driven content output ready for social distribution.

### What this workflow does

This end-to-end AI video automation workflow:

1. **Generates a creative idea** using OpenAI and LangChain  
2. **Creates detailed video prompts** with Seedance AI  
3. **Generates video clips** via Wavespeed AI  
4. **Generates sound effects** with Fal AI  
5. **Stitches the final video** using Fal AI’s ffmpeg API  
6. **Logs metadata and video links** to Google Sheets  
7. **Uploads the video to Blotato**  
8. **Auto-publishes to TikTok, YouTube, Instagram, and other platforms**

### Setup

1. Add your **OpenAI API key** in the LLM nodes  
2. Set up **Seedance and Wavespeed AI credentials** for video prompt and clip generation  
3. Add your **Fal AI API key** for sound and stitching steps  
4. Connect your **Google Sheets account** for tracking ideas and outputs  
5. Set your **Blotato API key** and fill in the platform account IDs in the `Assign Social Media IDs` node  
6. Adjust the **Schedule Trigger** to control when the automation runs  

### How to customize this workflow to your needs

- **Change the AI prompts** to target your niche (e.g., ASMR, product videos, humor)  
- **Add a Telegram or Slack step** for video preview before publishing  
- **Tweak scene structure** or video duration to match your style  
- **Disable platforms** you don’t want by turning off specific HTTP Request nodes  
- **Edit the sound generation prompts** for different moods or effects  

📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Generate-AI-Videos-with-Seedance-Blotato-and-Upload-to-TikTok-YouTube-Instagram-version-II-21d3d6550fd980218096d84f31bfae2d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
