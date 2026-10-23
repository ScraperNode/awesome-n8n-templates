# 📊 FB Ad Spy: AI-Powered Competitor Ad Intelligence & Auto-Video Remixer

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

**1. Scrape ads** – Pulls Facebook Ad Library data for "ai automation" keywords using Apify

**2. Filter & sort** – Filters ads by page likes (&gt;1,000) and separates into videos, images, and text ads

**3. Analyze creative** – For videos: uploads to Gemini for detailed description. For images: analyzes with GPT-4V. For text: rewrites copy using GPT-4.1

**4. Generate new ad** – Creates a Veo 3 prompt from the analysis, generates an 8-second video clip, and converts it to 9:16 vertical format

**5. Add captions** – Overlays rewritten ad copy as captions using Creatomate

**6. Log results** – Uploads final video to GCS and logs all data (analysis, prompts, URLs) to Google Sheets

---

## Set up steps

1. **API Keys** – Set up accounts for Apify, Google Cloud (Gemini + GCS), OpenAI, Shotstack, and Creatomate

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET1` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Set up Google Sheet** – Create a sheet with columns matching the schema (ad_archive_id, page_name, summary, rewritten_ad_copy, etc.)

5. **Test** – Execute the workflow to scrape, analyze, and generate a new ad variation

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Cloud Storage, Filter, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
