# 🎬 Automate AI video creation & multi-platform publishing with GPT-4, Veo 3.1 & Blotato

> ⚡ **20,905 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# 💥 Automate AI Video Creation & Multi-Platform Publishing with Veo 3.1 & Blotato

![Workflow Overview](https://www.dr-firas.com/veo31.png)

### 🎯 Who is this for?
This workflow is designed for **content creators, marketers, and automation enthusiasts** who want to produce professional AI-generated videos and publish them automatically on social media — without editing or manual uploads. Perfect for those using **Veo 3.1**, **GPT-4**, and **Blotato** to scale video creation.

---

### 💡 What problem is this workflow solving?
Creating short-form content (TikTok, Instagram Reels, YouTube Shorts) is time-consuming — from writing scripts to video editing and posting.  
This workflow eliminates the manual steps by combining **AI storytelling + video generation + automated publishing**, letting you focus on creativity while your system handles production and distribution.

---

### ⚙️ What this workflow does
1. **Reads new ideas from Google Sheets**  
2. **Generates story scripts** using GPT-4  
3. **Creates cinematic videos** using Veo 3.1 (`fal.ai/veo3.1/reference-to-video`) with 3 input reference images  
4. **Uploads the final video** automatically to Google Drive  
5. **Publishes the video** across multiple platforms (TikTok, Instagram, Facebook, X, LinkedIn, YouTube) via **Blotato**  
6. **Updates Google Sheets** with video URL and status (Completed / Failed)

---

### 🧩 Setup
**Required accounts:**
- [OpenAI](https://platform.openai.com/api-keys) → GPT-4 API key  
- [fal.ai](https://fal.ai/dashboard/keys) → Veo 3.1 API key  
- [Google Cloud Console](https://console.cloud.google.com) → Sheets & Drive connection  
- [Blotato](https://blotato.com/?ref=firas) → API key for social media publishing  

**Configuration steps:**
1. Copy the **Google Sheets structure**:  
   - A: `id_video`  
   - B: `niche`  
   - C: `idea`  
   - D: `url_1`  
   - E: `url_2`  
   - F: `url_3`  
   - G: `url_final`  
   - H: `status`  

2. Add your API keys to the **Workflow Configuration** node.  
3. Insert three image URLs and a short idea into your sheet.  
4. Wait for the automation to process and generate your video.  

---

### 🧠 How to customize this workflow
- **Change duration or aspect ratio** → Edit the Veo 3.1 node JSON body (`duration`, `aspect_ratio`)  
- **Modify prompt style** → Adjust the “Optimize Prompt for Veo” node for your desired tone or cinematic look  
- **Add more platforms** → Extend Blotato integration to publish on Pinterest, Reddit, or Threads  
- **Enable Telegram Trigger** → Allow users to submit ideas and images directly via Telegram  

---

### 🚀 Expected Outcome
Within **2–3 minutes**, your idea is transformed into a full cinematic AI video — complete with storytelling, visuals, and automatic posting to your social media channels.  

Save hours of editing and focus on strategy, creativity, and growth.

---

### 👋 Need help or want to customize this?
📩 Contact: [LinkedIn](https://www.linkedin.com/in/dr-firas/)  
📺 YouTube: [@DRFIRASS](https://www.youtube.com/@DRFIRASS)  
🚀 Workshops: [Mes Ateliers n8n](https://hotm.art/formation-n8n)

---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Automate-AI-Video-Creation-Multi-Platform-Publishing-with-Veo-3-1-Blotato-29c3d6550fd981cd982fd4a031bdfe07?source=copy_link)
### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https://www.youtube.com/channel/UCriIQI8uaoEro5FEnOpeidQ) / [🚀 Mes Ateliers n8n  ](https://hotm.art/formation-n8n)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Sheets Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
