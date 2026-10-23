# 🎬 Create cinematic quote videos with Veo 3

> ⚡ **19 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.
>
> <a href="https://scrapernode.com/tiktok"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

**1. Get a quote** – Pulls a motivational quote from a Google Sheet

**2. Generate Veo prompt** – Uses a Gemini-powered agent to translate the quote into a 120–150 word cinematic prompt with visuals and instrumental music (no spoken words or text)

**3. Create video** – Generates an 8-second AI video with Veo 3.0 and uploads to GCS

**4. Add quote text** – Uses Creatomate to overlay the quote text onto the video

**5. Upload to Postiz** – Uploads the final video to Postiz (social media scheduler)

**6. Schedule across platforms** – Detects connected channels (TikTok, YouTube, Instagram) and schedules the video for posting in 1 day

---

## Set up steps

1. **API Keys** – Set up accounts for Google Cloud (Veo 3.0 + GCS + Gemini), Creatomate, and Postiz

2. **Credentials in n8n** – Add each API key as a credential in your n8n instance

3. **Configure variables** – Update the `SET1` node with your Google Cloud `PROJECT_ID` and `CLIENT_EMAIL`

4. **Set up Google Sheet** – Create a sheet with a column named `quote` containing the quotes you want to turn into videos

5. **Connect Postiz** – Ensure your social media channels (TikTok, YouTube, Instagram) are connected in Postiz

6. **Test** – Execute the workflow to generate and schedule a quote video

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Cloud Storage, AI Agent, Convert to File, JWT

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
