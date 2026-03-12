# 📱 Generate & publish social media content with Gemini, Kie.ai, and Late API

> ⚡ **1,562 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 📘 Overview
This workflow automates **end-to-end social media publishing** powered by **Late API**.  
It generates text content with **Google Gemini**, creates branded visuals with **Kie.ai**, uploads media to **Late**, and publishes across multiple platforms (Facebook, Instagram, LinkedIn, TikTok).  

It’s a production-ready automation for marketing teams who want to save hours of work by letting AI handle both copywriting and design — all inside n8n.

## ⚙️ How it works
1. **Generate text content** → Google Gemini produces platform-optimized copy (tone & length adapted to each network).  
2. **Generate visuals** → Kie.ai Seedream v4 creates branded 1080x1080 images.  
3. **Upload to Late** → media is stored using Late’s upload API (small & large file handling).  
4. **Publish** → posts are created via Late API on enabled platforms with correct `{ platform, accountId }` mapping.  
5. **Notify** → success logs are sent via Slack, Discord, Email, and Webhook.  

## 🛠 Setup Steps
- **Time to setup:** ~10–15 minutes  
- **Steps:**
  1. Add your **API keys** in n8n Credentials:
     - Google Gemini API (PaLM)
     - Kie.ai (Seedream)
     - Late API
  2. Insert your **Account IDs** (Facebook, Instagram, LinkedIn, TikTok) into the **Default Settings** node.
  3. Choose which platforms to enable (`ENABLE_FACEBOOK`, `ENABLE_INSTAGRAM`, etc.).
  4. Set your **Business Type** and **Content Topic** (e.g., “a tech company” / “new product launch”).
  5. Execute the workflow.  

## 📝 Notes
- **Sticky Notes** are included in the workflow to guide each section: Overview, Prerequisites, Default Settings, Content Generation, Image Generation, Media Upload, Publishing Logic, Notifications, Error Handling.  
- All API keys are handled via **Credentials** (no hardcoding).  
- Fallback content is included in case Gemini fails to parse.  
- Large image files (&gt;4MB) are handled with Late’s multipart upload flow.  

## 💸 Cost per Flow (Estimated)
- **Late API**: $0.00 within Free/Unlimited plans, or ≈ $0.11/post on Build plan ($13/120 posts).  
- **Google Gemini**: ~$0.0001–$0.0004 per post (≈200 tokens in/out).  
- **Kie.ai (Seedream)**: ≈ $0.01–$0.02 per generated image.  

➡️ **Total: ~$0.01 – $0.12 per post**, depending mainly on your Late plan & Kie.ai credits.

## 🎯 Use cases
- Marketing teams automating cross-platform campaigns.  
- Solo founders posting content daily without design/copy effort.  
- Agencies scaling social media management with AI + automation.  

## 📢 Credits
- Built by **Adrian (RoboMarketing)** for the **n8n Arena Challenge – September 2025**.  
- Powered by:
  - [Gemini API](https://ai.google.dev/gemini-api/docs/get-started)  
  - [Kie.ai Seedream](https://kie.ai/seedream-api)  
  - [Late API](https://getlate.dev/docs)

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
