# 🎬 Generate AI avatar videos with GPT-5 & publish to social media platforms

> ⚡ **3,571 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

![Workflow Screenshot](https://www.dr-firas.com/HEYGEN.png)

# Automate Social Media with HeyGen and GPT-5: Publish Videos to TikTok, YouTube & Instagram

---

### 👥 Who is this for?

This workflow is designed for:  
- Content creators who want to scale their short-form video production  
- Marketing teams seeking consistent and automated publishing pipelines  
- Agencies managing multiple social accounts for clients  
- Entrepreneurs looking to save time by automating repetitive content tasks  

---

### 💡 What problem is this workflow solving?

Publishing on **multiple platforms** like YouTube Shorts, TikTok, and Instagram is often:  
- Time-consuming (manual editing, caption writing, uploads)  
- Inconsistent (different requirements for each platform)  
- Prone to delays (switching between tools)  

This workflow solves these issues by creating a **fully automated video pipeline** powered by GPT-5, HeyGen, and Blotato.  

---

### ⚙️ What this workflow does

1. **Capture voice idea via Telegram**  
2. **Transcribe voice to text** using OpenAI Whisper  
3. **Generate a catchy title and caption** with GPT-5  
4. **Create an AI avatar video** with HeyGen  
5. **Save and organize assets** in Google Drive and Google Sheets  
6. **Upload final video** to Blotato  
7. **Auto-publish** to:  
   - YouTube Shorts  
   - TikTok  
   - Instagram  
   - (Optional: Facebook, X/Twitter, LinkedIn, Pinterest, Threads, Bluesky)  
8. **Update logs in Google Sheets**  
9. **Send a Telegram confirmation** once published  

---

### 🧰 Setup

Before using this workflow, ensure you have:  
1. A **Telegram Bot** connected to n8n for voice input  
2. An **OpenAI API key** for transcription (Whisper) and GPT-5 processing  
3. A **HeyGen account & API key** for avatar video generation  
4. A **Google Drive & Google Sheets integration** for storing assets and logs  
5. A **Blotato account (Pro plan)** with API access enabled  
6. **Verified Community Nodes** enabled in n8n Admin Panel  
7. Blotato node installed and credentials configured  

---

### 🛠️ How to customize this workflow

- **Prompts** → Adjust GPT-5 prompts to match your brand voice and niche  
- **Avatars** → Use custom avatars or voices via HeyGen configuration  
- **Platforms** → Activate only the social nodes you need (e.g., focus on TikTok & YouTube Shorts)  
- **Approval steps** → Add Telegram or Slack confirmation before publishing  
- **Analytics** → Extend the workflow to track engagement data in Google Sheets, Airtable, or Notion  

---

This workflow turns a **simple spoken idea** into a **viral-ready video** — automatically generated, styled, and posted across your most important platforms.  

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/HeyGen-2563d6550fd980ee8e56c064c42177a3?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Telegram Trigger, Google Drive, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
