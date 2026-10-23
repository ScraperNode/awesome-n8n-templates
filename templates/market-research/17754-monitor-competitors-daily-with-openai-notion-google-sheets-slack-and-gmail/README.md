# 📊 Monitor competitors daily with OpenAI, Notion, Google Sheets, Slack, and Gmail

> ⚡ **19 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily at 8 AM to monitor competitors by scraping their homepages and reading company RSS feeds, Google News RSS, and Reddit RSS, then uses OpenAI to generate an intelligence report that is saved to Notion and Google Sheets and sent to Slack and Gmail.

## How it works
1. Runs every day at 8 AM on a schedule trigger.
2. Reads your configured competitors, URLs, RSS feeds, and reporting settings, then splits the competitor list to process each company one by one.
3. For each competitor, collects signals from the competitor homepage (title/meta/H1), the competitor’s RSS feed, Google News RSS search results, and Reddit RSS search results.
4. Deduplicates the collected items by URL, aggregates them into a single dataset, and prepares a structured prompt for OpenAI.
5. Calls the OpenAI Chat Completions API to generate a Markdown competitor intelligence report with an executive summary, urgency score, risk level, and recommended actions.
6. Creates a new page in a Notion database and appends a row to a Google Sheets “Intelligence Log” sheet with key fields from the report.
7. After all competitors are processed, posts a daily status message to a Slack channel and sends an HTML digest email via Gmail.

## Setup
1. Add credentials for OpenAI, Slack, Gmail, Notion, and Google Sheets in their respective nodes.
2. Update the Workflow Configuration values for competitors, competitor_urls, rss_feeds, keywords, and openai_model.
3. Set the target Slack channel name and the recipient email address in the Workflow Configuration.
4. Create or select a Notion database and a Google Sheets document, then paste the Notion database ID and Google Sheets document ID into the Workflow Configuration (and ensure the sheet name is “Intelligence Log”).

## 🔗 Nodes Used

Google Sheets, HTTP Request, RSS Read, Slack, Gmail, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
