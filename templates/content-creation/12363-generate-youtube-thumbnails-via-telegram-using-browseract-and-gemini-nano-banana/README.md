# 🎬 Generate YouTube thumbnails via Telegram using BrowserAct and Gemini (Nano Banana Pro)

> ⚡ **103 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Generate YouTube thumbnails via Telegram using BrowserAct & Nano banana Pro

This workflow acts as an AI-powered "Viral Architect" for YouTube creators. Simply send a video topic (e.g., "Kling 2.6") to your Telegram bot, and it will scrape top-performing competitor thumbnails, analyze their visual strategies using AI vision, and generate a new, scientifically optimized thumbnail concept and image for you.

## Target Audience
YouTubers, content creators, and social media managers looking to increase their Click-Through Rate (CTR) with AI-designed thumbnails.

## How it works
1. **Analyze Intent**: The workflow receives a message via **Telegram**. An **AI Agent** classifies the input: is it a casual chat or a request for a thumbnail?
2. **Research Competitors**: If a topic is detected, **BrowserAct** scrapes YouTube for the top-ranking videos on that subject.
3. **Visual Forensics**: An **AI Vision Agent** (using OpenRouter/GPT-4o) analyzes the scraped thumbnails to understand *why* they work (colors, composition, text).
4. **User Approval**: The bot sends a confirmation button to Telegram to ensure you want to proceed with image generation (saving credits).
5. **Creative Synthesis**: Upon approval, a specialized **Gemini Agent** aggregates the research and crafts a high-fidelity prompt using psychological hooks and pop-culture references.
6. **Generate & Deliver**: **Google Gemini** renders the final 4K thumbnail image, which is sent back to your Telegram chat.

## How to set up
1. **Configure Credentials**: Connect your **Telegram**, **BrowserAct**, **Google Sheets**, **OpenRouter**, and **Google Gemini** accounts in n8n.
2. **Prepare BrowserAct**: Ensure the **Thumbnail Maker Bot** template (or a YouTube search scraper) is saved in your BrowserAct account.
3. **Setup Google Sheet**: Create a Google Sheet to store analysis data. The workflow will dynamically create tabs, but you need a master sheet ID.
4. **Configure Telegram**: Ensure your bot is created via BotFather and the API token is added to the Telegram credentials.
5. **Activate**: Turn on the workflow.

## Requirements
* **BrowserAct** account with the **Thumbnail Maker Bot** template.
* **Telegram** account (Bot Token).
* **Google Sheets** account.
* **OpenRouter** account (for Vision capabilities).
* **Google Gemini** account.

## Google Sheets Requirements
* **Spreadsheet Name:** Thumbnail Data base
* **Sheet Name:** Database
* **Required Columns:**
1. Keyword
2. Current Workflow Sheet ID

## How to customize the workflow
1. **Change Art Style**: Modify the system prompt in the **Generate Image Prompt** agent to enforce a specific aesthetic (e.g., "3D Render," "Anime," "Minimalist").
2. **Adjust Research Depth**: Change the number of videos scraped by BrowserAct to analyze more or fewer competitors.
3. **Add Text Overlay**: Add an image processing node (like Cloudinary or Bannerbear) to automatically overlay the generated text onto the image for a final polish.

## Need Help?
* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct ](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [Automate Viral Thumbnails with n8n and AI Agents (Step-by-Step)](https://youtu.be/m0N91nN4ElA)

## 🔗 Nodes Used

Google Sheets, Telegram, Telegram Trigger, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
