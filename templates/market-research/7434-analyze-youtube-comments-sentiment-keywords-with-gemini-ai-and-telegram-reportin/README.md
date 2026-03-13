# 📊 Analyze YouTube comments sentiment & keywords with Gemini AI and Telegram reporting

> ⚡ **548 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
>
> <a href="https://scrapernode.com/youtube"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# YouTube Comment Sentiment & Keyword Extractor

**Template Google Sheets:** [Click here to open](https://docs.google.com/spreadsheets/d/1LBlCLH8L-eooAlfGq66_cLTbxyCse83c1VZaea0tjMg/edit?usp=sharing)

This workflow automatically retrieves comments from YouTube videos listed in Google Sheets, analyzes sentiment and keywords using an LLM, stores the results, then generates an aggregate summary and sends a report to Telegram.

---

## ✨ Key Features
- **Automated Scheduling** – Runs the process at regular intervals.
- **Google Sheets Integration** – Fetches a list of videos and stores analysis results directly in Google Sheets.
- **YouTube Comment Retrieval** – Retrieves top-level comments (up to 100 per video; can be extended with pagination).
- **Comment Parsing** – Flattens the API response into one item per comment.
- **AI Sentiment & Keyword Analysis** – Powered by an LLM model to extract:
  - Sentiment (`positive`, `neutral`, `negative`)
  - Sentiment score (-1 to 1)
  - Keywords (cleaned from stopwords, emojis, hashtags)
  - Language (ISO 639-1, 2-letter code)
- **Data Normalization** – Ensures LLM output is consistent and safe to write to the sheet.
- **Telegram Reporting** – Sends a concise report for each video directly to a Telegram chat.

---

## 🔐 Required Credentials
- **Google Sheets OAuth2 API** – Read & write access to the spreadsheet.
- **YouTube Data API Key** – To fetch comments via `commentThreads`.
- **OpenRouter API Key** – To access the LLM model.
- **Telegram Bot API** – To send reports via a Telegram bot.

---

## 🎁 Benefits
- **End-to-End Automation** – From comment retrieval to reporting, no manual steps required.
- **No Duplication** – Each comment is uniquely tracked by `comment_id`.
- **Data Transparency** – Raw and analyzed data stored neatly in Google Sheets.
- **Actionable Insights** – Sentiment and keyword summaries ready for content strategy decisions.
- **Scalable** – Can be extended for pagination, reply comment analysis, or additional metrics.
- **Cross-Platform** – Direct Telegram integration for easy monitoring on any device.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Schedule Trigger, Basic LLM Chain, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
