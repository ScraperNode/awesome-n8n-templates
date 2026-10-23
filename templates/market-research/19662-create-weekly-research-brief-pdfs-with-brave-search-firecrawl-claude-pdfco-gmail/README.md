# 📊 Create weekly research brief PDFs with Brave Search, Firecrawl, Claude, PDF.co, Gmail and Google Drive

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly, searches selected topics with Brave Search, scrapes the top results with Firecrawl, and uses Anthropic Claude to write a cited weekly research brief. It formats the brief as HTML, converts it to a PDF with PDF.co, emails it via Gmail, and archives it to Google Drive.

## How it works
1. Runs weekly on a Monday 07:00 schedule and loads brief settings like topics, result limits, branding, and delivery targets.
2. Splits the comma-separated topic list and searches each topic in Brave Search using the past-week freshness filter.
3. Selects up to the configured number of valid web results per topic, assigns source IDs, and carries topic metadata forward.
4. Scrapes each result URL with Firecrawl, cleans and truncates the extracted Markdown (falling back to the search snippet if the page has no text), and aggregates all sources into one dataset.
5. Sends the aggregated sources to Anthropic Claude to produce a structured JSON brief with a two-sentence summary, topic findings, citations by source ID, and watch items.
6. Builds validated, branded HTML from the structured brief, converts it to a PDF via PDF.co, downloads the generated file, then emails it with Gmail and uploads it to Google Drive.

## Setup
1. Add credentials for Brave Search, Firecrawl, Anthropic (Claude), and PDF.co (or configure n8n AI Gateway credits if you prefer managed access).
2. Connect your Gmail account for sending the email and your Google Drive account for archiving the PDF.
3. In the workflow’s brief settings, set your topics, results per topic, recipient email address, and Google Drive folder ID (and optionally your brand name and logo URL).
4. Confirm the schedule timezone in n8n Workflow Settings and adjust the cron expression if you want a different send time.
5. Run a manual test to verify the generated PDF layout, citations, and email delivery before enabling the weekly schedule.

## Additional info
Showcasing providers of Gateway credits. It features our service (PDF.co) and combines it with other services that are easy to start using in n8n Cloud.

## 🔗 Nodes Used

HTTP Request, Google Drive, Gmail, Schedule Trigger, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
