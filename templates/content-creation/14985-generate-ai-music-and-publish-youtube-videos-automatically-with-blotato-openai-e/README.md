# 🎬 Generate AI music and publish YouTube videos automatically with Blotato, OpenAI, ElevenLabs, and Shotstack

> ⚡ **1,289 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 💥 Generate AI Music & Publish to YouTube Automatically with Blotato 

![Workflow Overview](https://www.dr-firas.com/youtube-blotato-II.png)

This workflow automatically generates AI music, creates a thumbnail, converts everything into a video, and publishes it directly to YouTube — fully automated.

Perfect for building **faceless YouTube music channels**, **AI content automation**, or **passive content generation pipelines**.

---

### Who is this for?

This template is ideal for:

- YouTube creators building **AI music channels**
- Content creators creating **faceless videos**
- Automation enthusiasts using **n8n for content pipelines**
- Agencies generating **bulk YouTube content**
- Anyone wanting to **automate music creation and publishing**

Whether you're creating **lofi music**, **ambient tracks**, **meditation sounds**, or **background music**, this workflow removes manual work entirely.

---

### What problem is this workflow solving?

Creating AI music videos typically involves multiple manual steps:

- Generating music  
- Creating thumbnails  
- Converting audio into video  
- Uploading to YouTube  
- Writing titles and metadata  

This process is **time-consuming and repetitive**.

This workflow automates everything into a **single end-to-end pipeline**, allowing you to:

- Generate unlimited AI music
- Automatically create thumbnails
- Convert audio into video
- Publish directly to YouTube

---

### What this workflow does

This workflow performs the following steps:

1. User submits a music request via form  
2. AI generates an optimized music prompt  
3. ElevenLabs generates AI music  
4. AI generates thumbnail prompt  
5. Atlas Cloud generates thumbnail image  
6. Cloudinary uploads generated assets  
7. Shotstack creates video (image + audio)  
8. Blotato uploads video to YouTube automatically  
9. SEO-optimized YouTube title is generated automatically  

Final result:  
**AI-generated music video automatically published to YouTube**

The entire process runs **fully automated**.

---

### Setup

To use this workflow, configure the following credentials:

#### Required APIs

- OpenAI API Key — Prompt generation
- **[Elevenlabs](https://elevenlabs.io/?from=drfirass2382)** API Key — Music generation
- **[AtlasCloud](https://www.atlascloud.ai?ref=8QKPJE)** API Key — Thumbnail generation
- Cloudinary Account — Media hosting
- Shotstack API Key — Video creation
- **[Blotato](https://blotato.com/?ref=firas)**  API Key — YouTube publishing

#### Community Node Requirement

This workflow uses the **[Blotato](https://blotato.com/?ref=firas)**  **community node**.

### 🎥 [Watch This Tutorial](https://youtu.be/yit-6fuKAVU)
![SORA2 logo](https://www.dr-firas.com/music-n8n.png)

---
### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)


### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
