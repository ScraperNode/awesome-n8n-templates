# 🎬 Generate addictive ASMR Veo 3 reels

> ⚡ **20 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

**1. Generate new idea** – Pulls previously used objects from Google Sheet, then uses GPT-4.1-mini to generate a new fruit-shaped glass object not in the list

**2. Create Veo prompt** – Uses GPT-4.1-mini to generate a hyper-realistic, ASMR-style prompt for the object being gently divided (with safety guidelines to avoid policy triggers)

**3. Generate video** – Creates an 8-second AI video with Veo 3.0 showing the glass fruit being elegantly separated on a cutting board with ASMR sound layers

**4. Convert to vertical** – Crops the 16:9 video to 9:16 vertical format using Shotstack

**5. Upload to Postiz** – Uploads the final video to Postiz (social media scheduler)

**6. Schedule across platforms** – Detects connected channels (TikTok, YouTube, Instagram) and schedules the video for posting

**7. Log for future** – The new object is logged to Google Sheets to avoid repetition in the next run

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + GCS), OpenAI, Shotstack, and Postiz

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Set up Google Sheet** – Create a sheet with a column named `object` to track previously used objects

5. **Connect Postiz** – Ensure your social media channels (TikTok, YouTube, Instagram) are connected in Postiz

6. **Test** – Execute the workflow manually or let the schedule trigger run every 8 hours

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Cloud Storage, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
