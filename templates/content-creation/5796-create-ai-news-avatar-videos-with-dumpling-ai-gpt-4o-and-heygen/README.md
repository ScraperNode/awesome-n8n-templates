# 🎬 Create AI news avatar videos with Dumpling AI, GPT-4o and HeyGen

> ⚡ **4,766 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## 🧾 What this workflow does

This workflow automatically generates avatar-style videos from the latest AI-related news using Dumpling AI and HeyGen. It runs every hour, scrapes trending articles, turns them into 30–60 second spoken scripts with GPT-4o, and produces short avatar videos with HeyGen. Finally, it logs the final video URL in a Google Sheet.

---

## 👤 Who is this for

- Newsletters and creators who want to automate AI trend updates  
- Content marketers generating short-form video content  
- Product teams experimenting with AI-generated summaries  
- Automation enthusiasts combining LLMs + video + trending data  

---

## ⚙️ How to set up

### 🔐 Requirements
- **Dumpling AI API Key** stored securely as HTTP Header credential  
- **HeyGen API Key** added as an HTTP Header credential  
- **OpenAI API Key** for GPT-4o (can use GPT-4o-mini if preferred)  
- **Google Sheets account** with one column: `Video link`  

### 🛠 Step-by-step setup

1. **Google Sheet Setup**  
   - Create a Google Sheet with a single column named: `Video link`

2. **Update Credentials**  
   - Use n8n’s credential manager to add tokens for:  
     - Dumpling AI  
     - HeyGen  
     - OpenAI  
     - Google Sheets

3. **Optional Customizations**
   - In the "Dumpling AI: Search AI News" node, you can change `"query": "AI Agent"`  
     to other trending keywords (e.g., `"Generative AI"`, `"Autonomous Agents"`, etc.)
   - Update the `avatar_id` and `voice_id` in the HeyGen request to match your preferred look/sound

---

## 🧠 How it works

1. The Schedule Trigger runs hourly.  
2. Dumpling AI searches for fresh news related to "AI Agent."  
3. The top 4 news links are scraped for full content.  
4. Articles are merged and fed into GPT-4o via a LangChain Agent to produce a casual, conversational video script.  
5. HeyGen creates a video using the script, avatar, and voice.  
6. The workflow waits until the video rendering is complete.  
7. Once done, the final video link is logged into Google Sheets.

---

## 🧪 Customization Ideas

- Change the interval (e.g., every 6 hours, daily)
- Swap avatar/voice in HeyGen to fit your brand
- Expand to post the video directly to social media
- Add image background or B-roll overlays using Creatomate


---

This is a fast, automated pipeline to create explainer-style AI news updates using real-time data and generative video tools.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
