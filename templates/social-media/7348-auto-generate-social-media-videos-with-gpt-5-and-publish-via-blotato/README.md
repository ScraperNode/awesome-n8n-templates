# 📱 Auto-generate social media videos with GPT-5 and publish via Blotato

> ⚡ **3,907 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

![Workflow Screenshot](https://www.dr-firas.com/Blotato-gpt5.png)

# Auto-Generate Social Media Videos with GPT-5 and Publish via Blotato

&gt; ⚠️ **Disclaimer**: This workflow uses Community Nodes (Blotato) and requires a self-hosted n8n instance with "Verified Community Nodes" enabled.

---

### 👥 Who is this for?

This workflow is perfect for:
- Content creators and influencers who post regularly on social media  
- Marketing teams that want to scale branded video production  
- Solo entrepreneurs looking to automate their video marketing  
- Agencies managing multi-client social media publishing  

---

### 💡 What problem is this workflow solving?

Creating high-quality video content and publishing consistently on multiple platforms is time-consuming.  
You often need to:  
- Write compelling captions and titles  
- Adapt content to fit each platform’s requirements  
- Publish manually or across disconnected tools  

This workflow automates the entire process — from idea to publishing — so you can focus on growth and creativity, not logistics.

---

### ⚙️ What this workflow does

1. Receives a video idea via **Telegram**  
2. Saves metadata to **Google Sheets**  
3. Transcribes the video using **OpenAI Whisper**  
4. Generates a catchy **title and caption** using **GPT-5**  
5. Uploads the final media to **Blotato**  
6. Publishes the video automatically to:
   - TikTok  
   - Instagram  
   - YouTube Shorts  
   - Facebook  
   - X (Twitter)  
   - Threads  
   - LinkedIn  
   - Pinterest  
   - Bluesky  
7. Updates the post status in **Google Sheets**  
8. Sends confirmation via **Telegram**

---

### 🧰 Setup

Before launching the workflow, make sure to:

1. Create a **Blotato Pro** account and generate your API Key  
2. Enable **Verified Community Nodes** in the n8n Admin Panel  
3. Install the **Blotato** community node in n8n  
4. Create your **Blotato credential** using the API key  
5. Make a copy of this [Google Sheet template](https://docs.google.com/spreadsheets/d/1zrfxthPoUhbf1Ae3cKsDrJKw-Stri7uM-d3-eO9CgA4/edit?usp=sharing)  
6. Ensure your **Google Drive folder** with videos is shared publicly (viewable by anyone with the link)  
7. Link your **Telegram Bot** and configure the trigger node  
8. Follow the **sticky note instructions** inside the workflow

---

### 🛠️ How to customize this workflow

- Modify the GPT-5 prompt to reflect your brand voice or campaign tone  
- Add/remove social platforms depending on your strategy  
- Include additional AI modules (e.g., for voiceover or thumbnails)  
- Insert review/approval steps (via Slack, email, or Telegram)  
- Connect Airtable, Notion, or your CRM to track results

---

This is your all-in-one **AI video publishing engine**, built for automation, scale, and growth across the social web.


---
📄 **Documentation**: [Notion Guide](https://automatisation.notion.site/Blotato-2473d6550fd980e19983f69611a80a0d?source=copy_link)

---

### Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/dr-firas/) / [Youtube](https:/https://www.youtube.com/@DRFIRASS)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, Google Drive, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
