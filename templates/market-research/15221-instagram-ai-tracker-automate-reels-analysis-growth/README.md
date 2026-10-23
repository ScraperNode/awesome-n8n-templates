# 📊 Instagram AI Tracker — Automate Reels Analysis & Growth

> ⚡ **208 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.
>
> <a href="https://scrapernode.com/instagram"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow enables the automatic and regular tracking of competitors' Instagram Reels, providing rich insights for each video (summary, topic, hook, angles, tags, etc) through ChatGPT, and storing all information in a structured Google Sheets data table. This can optimize your workflow, allowing you to gain a deeper understanding of potential customers and partners, and enabling more timely personalized hot topic tracking and decision-making.


---

## How it works

- Trigger workflow on a schedule (e.g. every hour).  
- Read active Instagram accounts from Google Sheets (Accounts tab).  
- Filter accounts based on last check time to avoid redundant scraping.  
- Loop through each account and fetch latest Reels via Apify (with limit per run).  
- Skip already processed Reels by checking existing records in Google Sheets.  
- Store new Reels into a centralized “Reels Library” sheet with the video information crawled.
- Generate transcript (if available) and send content to AI for analysis.  
- Extract structured insights: summary, hook, topic, CTA, content angle, tags, etc.
- Update each Reel’s processing status (DONE / SKIPPED / FAILED).  
- Update account last_checked_at timestamp after processing.  
- Aggregate all results into a single batch report (success rate, per-account stats, failures).  
- Send final report to Telegram.

💡 **Running screenshot:**  
- Google sheet:
![account.jpg](fileId:5900)
![latestrun.jpg](fileId:5901)
![reels.jpg](fileId:5902)
- Report message:
![msg.jpg](fileId:5903)

---

## Set up steps

1. **Set your relevant credentials**
   - Google Sheets (service account recommended)
   - Apify (for Instagram Reel scraping)
   - OpenAI (for content analysis)
   - Telegram Bot (for notifications)

2. **Prepare your Google Sheet**
   You can either copy a copy from the following address or create it yourself according to the example:
   https://docs.google.com/spreadsheets/d/1UjEUnSRWwHaG3c6SCO3PDCvlCRUkNdofzxkSoyBP4FA/copy


3. **Configure key parameters**
   - Max reels per account per run (default: 2)
   - Account check interval (default: 24h)
   - Output language for ChatGPT (default: English)
   - Update google_sheet_share_link's value (default: https://docs.google.com/spreadsheets/d/1UjEUnSRWwHaG3c6SCO3PDCvlCRUkNdofzxkSoyBP4FA/edit?gid=0#gid=0)
   - Modify the timing execution interval in the Schedule Trigger node (default: 1hour)


5. **Activate the workflow**
   - It will run automatically on schedule and handle everything end-to-end

## 🔗 Nodes Used

Google Sheets, Telegram, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
