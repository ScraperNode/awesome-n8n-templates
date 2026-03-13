# 📱 Daily AI news digest from Hacker News with GPT-5 summaries and email delivery

> ⚡ **3,595 views** · 📱 [Social Media & Email Marketing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Daily AI News Digest from Hacker News with GPT Summaries and Email Delivery


Automate your daily AI news briefing: fetch AI-tagged stories from Hacker News, filter for the last 24 hours, scrape and summarize with GPT, then deliver a clean HTML email digest—no manual curation needed.

## What It Does
Runs on schedule to fetch up to 1000 Hacker News stories tagged "AI", filters for today's posts, loops through each to scrape content from source URLs, generates concise AI summaries via OpenAI GPT, aggregates into a styled HTML newsletter, and sends via email.

## Setup Requirements
**Credentials Needed:**
- **OpenAI API Key**: Get from platform.openai.com/api-keys, add as "OpenAI" credential in n8n
- **SMTP Server**: Configure email credentials (Gmail, Zoho, etc.) in n8n's SMTP settings

**Configuration Steps:**
1. Import workflow JSON into n8n
2. Add OpenAI credential to "GPT 5 pro" node
3. Add SMTP credential to "Send email" node
4. Update `fromEmail` and `toEmail` fields in "Send email" node
5. Set schedule in "start" trigger node (default: daily)
6. Activate workflow

## Key Features
- **Smart Filtering**: Fetches 1000 stories, filters last 24 hours using date expressions
- **AI Summarization**: GPT generates heading + 2-sentence summaries with links
- **Reliable Scraping**: HTTP requests with markdown conversion for clean LLM input
- **Batch Processing**: Loops through items, processes sequentially
- **Responsive Design**: Mobile-friendly HTML email template with inline CSS
- **Aggregation**: Combines all summaries into single digest

## Customization Options
- **Change Keywords**: Modify "AI" filter in "Get many items" node
- **Adjust Timeframe**: Edit date filter in "Today" node
- **Tweak Summaries**: Customize GPT prompt in "News Summary Agent" node
- **Email Styling**: Update HTML/CSS in "Send email" node
- **Schedule**: Change frequency in "start" trigger

## Use Cases
- Personal daily AI briefings for researchers/developers
- Team knowledge sharing via automated newsletters
- Content curation for blogs or social media
- Trend monitoring for marketers

## Troubleshooting
- **No stories returned**: Check HN API limits, verify keyword filter
- **Scraping failures**: Some sites block bots—proxy noted in workflow but may need updates
- **Email not sending**: Verify SMTP credentials and test connection
- **Poor summaries**: Adjust GPT prompt or switch model

**Execution Time**: 2-10 minutes depending on story count

## 🔗 Nodes Used

Send Email, HTTP Request, Hacker News, Markdown, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
