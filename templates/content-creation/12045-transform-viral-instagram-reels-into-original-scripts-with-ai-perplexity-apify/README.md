# 🎬 Transform viral Instagram Reels into original scripts with AI, Perplexity & Apify

> ⚡ **459 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
Please guys, stop staring at a blank page. This workflow turns viral Instagram trends into original scripts for your channel automatically.

* **Scrapes Trends:** Finds viral reels in your niche using Apify.
* **Transcribes:** Downloads the video and converts the audio to text.
* **Researches:** Uses Perplexity to find facts and add depth to the topic.
* **Writes:** Generates a fresh, unique script based on the viral structure using AI.
* **Saves:** meaningful content directly to your Google Sheet, ready for filming.

## Set up steps
* **Apify:** You need an account to run the Instagram scraper.
* **API Keys:** Have your OpenAI (for writing/transcription) and Perplexity (for research) keys ready.
* **Google Sheet:** Create a sheet with headers for `URL`, `Transcript`, and `Final Script`.
* **Credentials:** Enter your keys into the node credentials in n8n.
* **Test:** Start with a low limit (e.g., 1-2 items) to verify the flow.

## Who is this for?
* **Content Creators:** Beat writer's block and post more consistently.
* **Social Media Managers:** Scale research without hiring a team.
* **Agencies:** Rapidly repurpose trends for multiple clients.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
