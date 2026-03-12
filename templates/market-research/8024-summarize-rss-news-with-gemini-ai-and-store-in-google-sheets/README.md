# 📊 Summarize RSS news with Gemini AI and store in Google Sheets

> ⚡ **958 views** · 📊 [Market Research & Insights](../)

## Description

This workflow pulls articles from multiple RSS feeds, filters them by date, fetches the full webpage content, and summarizes each article into a clean, structured Markdown format using **Google Gemini (via LangChain)**. Summaries are automatically saved into Google Sheets for long-term storage and into a daily sheet for fresh news.

👉 Example Google Sheet (pre-configured for this workflow):
[News Summaries Sheet](https://docs.google.com/spreadsheets/d/1SGYctcCWYHDxpuzv5o2Hp1uveRuOrnpRJ1DmaSUii7g/edit?gid=1944615086#gid=1944615086)

### Key Features

* **RSS Feeds from Google Sheets** – Flexible feed management.
* **Date Filtering** – Only process articles from the last X days.
* **Duplicate Checking** – Avoids re-processing links already stored.
* **Full Article Parsing** – Extracts clean body content, ignoring ads and images.
* **AI Summarization** – Uses a Gemini LLM to create concise, structured summaries with takeaways and insights.
* **Multi-Sheet Output** – Saves summaries to both a permanent “Articles” sheet and a “Today” sheet for daily highlights.
* **Scheduled or Manual Run** – Can run daily at a set time or on demand.

### Requirements

* Google Sheets account (for storing feeds, articles, and daily news).
* Google Gemini (PaLM) API credentials.

### Possible Use Cases

* Personal daily news digest.
* Team knowledge hub for curated, AI-summarized articles.
* Automated research assistant for niche topics.

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
