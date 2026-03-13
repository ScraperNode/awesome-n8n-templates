# 📱 Repurpose YouTube videos across social media with Gemini AI and ContentDrips

> ⚡ **411 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## About this Workflow  
This workflow helps you **repurpose your YouTube videos across multiple social media platforms** with zero manual effort. It’s designed for creators, businesses, and marketers who want to maximize reach without spending hours re-uploading content everywhere.  

---

## How It Works  
1. **Trigger from YouTube**  
   - The workflow checks your YouTube channel every 10 minutes via RSS feed.  
   - It compares the latest video ID with the last saved one to detect if a new video was uploaded.  
   - Tutorial: [How to get YouTube Channel RSS Feed](https://chuck.is/yt-rss/#:~:text=Hit%20CTRL%2BF%20to%20pull,preferred%20RSS%20reader%20and%20rejoice.)  

2. **Generate Descriptions with AI**  
   - Uses **Gemini 2.5 Flash** to automatically generate fresh, engaging descriptions for your posts.  

3. **Create Images with ContentDrips**  
   - ContentDrips offers multiple templates (carousel, single image, branding templates, etc.).  
   - The workflow generates a custom promotional image using your video description and thumbnail.  
   - Install node: `npm install n8n-nodes-contentdrips`  
   - Docs: [ContentDrips Blog Tutorial](https://contentdrips.com/blog/2025/07/automate-content-calendar-with-n8n-and-contentdrips-api/)  

4. **Publish Across Social Platforms with SocialBu**  
   - Instead of manually connecting each social media API, this workflow uses **SocialBu**.  
   - From a single connection, you can post to:  
     Facebook, Instagram, TikTok, YouTube, Twitter (X), LinkedIn, Threads, Pinterest, and more.  
   - Website: [SocialBu](https://socialbu.com/)  

5. **Get Real-Time Notifications via Discord**  
   - After each run, the workflow sends updates to your **Discord** channel.  
   - You’ll know if the upload was successful, or if an error occurred (e.g., API limits).  
   - Setup guide: [Discord OAuth Credentials](https://docs.n8n.io/integrations/builtin/credentials/discord/)  

---

## Why Use This Workflow?  
- Saves time by **automating the entire repurposing process**.  
- Ensures **consistent branding and visuals** across platforms.  
- Works around platform restrictions by leveraging **SocialBu’s integrations**.  
- Keeps you updated with **Discord notifications**—no guessing if something failed.  

---

## Requirements  
- YouTube channel RSS feed link  
- ContentDrips API key, template ID, and branding setup  
- SocialBu account with connected social media platforms  
- Discord credentials (for webhook updates)  

---

## Need Help?  
Message me on LinkedIn: [Shayan Ali Bakhsh](https://www.linkedin.com/in/shayan-khan20/)  

Happy Automation 🚀

## 🔗 Nodes Used

HTTP Request, RSS Read, Webhook, Discord, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
