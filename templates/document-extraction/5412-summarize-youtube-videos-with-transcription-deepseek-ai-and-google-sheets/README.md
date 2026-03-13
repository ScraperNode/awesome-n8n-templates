# 🔬 Summarize YouTube videos with transcription, DeepSeek AI and Google Sheets

> ⚡ **2,691 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Tired of manually watching long YouTube videos just to extract the main points?

With our YouTube Transcript & Summary Automation, you can instantly turn any video into an actionable, AI-generated summary — all from a simple Google Sheet.

What this automation does:
Reads video URLs from Google Sheets (just add your links!)

Generates accurate transcripts using Supadata.ai — with 100 free uses/month

Creates a smart summary using DeepSeek AI:

🔹 Short summary of the video

🔹 Key points

🔹 Main topics

Youtube tutorial:
https://www.youtube.com/watch?v=uj7KaFSh95Y


Automatically updates your Google Sheet with the transcript and the AI-generated summary

How to set it up:
Create a simple Google Sheet with these columns:

Url – link to the YouTube video

Status – set to pending to trigger the automation, updated to done after completion

Transcript – filled automatically

Summary – filled automatically

Once your sheet is ready, the automation takes care of the rest — no technical skills needed.

Why you'll love it:
This is the perfect tool for content creators, researchers, marketers, and educators who want to save time, extract insights faster, and never miss key ideas from long videos.

Want something custom?
Got feedback or want to build your own custom automation or workflow?
We’d love to hear from you! Reach out to us at jacobmarketingservice@gmail.com — let’s bring your idea to life.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, DeepSeek Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
