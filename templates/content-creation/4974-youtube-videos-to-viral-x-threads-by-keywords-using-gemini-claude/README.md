# 🎬 YouTube Videos to Viral X Threads by Keywords (using Gemini & Claude)

> ⚡ **235 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# Who is this for?
Content creators, marketers, and social media managers who want to turn high-performing YouTube videos into viral X (Twitter) threads using keywords (without manual research). Perfect for anyone looking to systematically create engaging social content from proven video sources.

---

# What problem does it solve?
Finding viral content ideas and writing engaging threads is time-consuming and hit-or-miss. This workflow automates the entire process: discovers high-performing YouTube videos based on your keywords, extracts key insights using AI, and generates multiple viral thread variations using proven patterns from 12.5M+ view threads.

---

# How it works

| # | Node | Purpose |
|---|------|---------|
| 1 | **Form Trigger** | Captures your keyword, target audience, and content type preferences. |
| 2 | **YouTube Video Search** | Finds recent videos (April 2025+) matching your keyword, sorted by view count. |
| 3 | **Get Video Statistics** | Fetches detailed metrics (views, engagement) for discovered videos. |
| 4 | **Filter High-Performers** | Keeps only videos with 100K+ views and excludes YouTube Shorts. |
| 5 | **Top 5 Selection** | Limits to the best 2 videos to focus on proven winners. |
| 6 | **Save Video Candidates** | Logs discovered videos to Google Sheets for manual approval. |
| 7 | **Wait & Check Approval** | Pauses 30 seconds, then checks which videos you marked "Yes" for thread generation. |
| 8 | **Video Analysis (Gemini)** | Uses Google's Gemini AI to extract key insights, tools, and strategies from approved videos. |
| 9 | **Thread Generation (Claude)** | Applies viral thread database patterns to create 3 distinct thread variations using Claude Sonnet 4. |
| 10 | **Structure & Save Threads** | Formats the generated threads and saves them back to Google Sheets for review and posting. |

---

# Setup steps

1. **Import & configure credentials**
  * Import the JSON workflow into n8n
  * Add your **YouTube Data API** key (get from [Google Cloud Console](https://console.cloud.google.com/))
  * Add your **Google Gemini API** key (get from [Google AI Studio](https://aistudio.google.com/))
  * Connect **Anthropic API** for Claude access
  * Set up **Google Sheets OAuth2** credential

2. **Create your tracking spreadsheet**
  * The workflow auto-creates a sheet with columns: `Keyword`, `Youtube video title`, `Description`, `Video URL`, `Turn into thread?`, `Thread 1`, `Thread 2`, `Thread 3`
  * You'll manually review and mark videos "Yes" in the `Turn into thread?` column

3. **Configure the viral thread database**
  * The workflow includes proven patterns from threads with 12.5M+ views
  * Adjust the target audience and content style in the AI prompts if needed

4. **Test the workflow**
  * Submit the form with a keyword like "AI automation"
  * Check that videos appear in your Google Sheet
  * Mark one "Yes" and verify threads are generated

---

# Resources

* [YouTube Data API Documentation](https://developers.google.com/youtube/v3)
* [Google Gemini AI Platform](https://ai.google.dev/)
* [Anthropic Claude API](https://docs.anthropic.com/)
* [n8n Documentation](https://docs.n8n.io/)
* [Viral Thread Generator Demo](https://gamma.app/docs/Viral-XThreadGenerator--wce7q6wtkdilz35?mode=doc)

---

# Extending the workflow

* **Auto-posting** – Connect X API to automatically post generated threads
* **Competitor tracking** – Monitor specific channels for new content opportunities  
* **Multi-platform** – Adapt threads for LinkedIn, Instagram, or TikTok formats
* **Performance tracking** – Log thread performance back to sheets for optimization
* **Webhook triggers** – Set up Zapier integration for form submissions from other tools

Transform proven YouTube content into viral social media threads—systematically and at scale.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
