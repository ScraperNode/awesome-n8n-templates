# 📊 Prepare executive meeting briefs with Firecrawl, Tavily, OpenAI, and Gmail

> ⚡ **15 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects meeting details via an n8n form, scrapes the company website with Firecrawl, pulls recent news with Tavily, and uses OpenAI to generate an executive meeting brief that can be delivered via Gmail, PDFMonkey PDF, Notion, Twilio WhatsApp, Slack, and Google Sheets.

## How it works
1. Receives meeting inputs from an n8n form submission (company website, meeting purpose, and preferred delivery channels).
2. Crawls the company website with Firecrawl and then polls the crawl status until it completes.
3. Searches the last 90 days of company news with Tavily and combines the news results with the website research.
4. Sends the merged research context to OpenAI to generate a structured JSON meeting brief (summary, opportunities, risks, questions, and a full report).
5. Formats the brief for each selected output and prepares short summaries for Slack and WhatsApp.
6. Appends the brief to Google Sheets, emails the HTML brief via Gmail, renders a branded PDF via PDFMonkey and emails it, creates a Notion database entry, and posts notifications to Slack and WhatsApp.
7. Merges the results of all delivery steps and logs any failures to a separate Google Sheets error log.

## Setup
1. Add API credentials for Firecrawl (HTTP Bearer Auth), Tavily (HTTP Bearer Auth), and OpenAI.
2. Connect Gmail and set up sending permissions for the Gmail nodes.
3. Connect Google Sheets and select the spreadsheet and sheet tabs for both “Save Brief” and “Log Error.”
4. Connect Notion and select the target database where the brief page should be created.
5. Connect PDFMonkey, create your own document template with matching payload fields, and replace the documentTemplateId.
6. (Optional) Connect Twilio WhatsApp, replace the placeholder “from” number, and update the Slack Incoming Webhook URL.

## Requirements
- n8n instance (self-hosted or cloud)
- Firecrawl API key
- Tavily API key
- OpenAI API key
- Gmail account (OAuth)
- Google Sheets account with a spreadsheet set up
- Notion account with a target database
- PDFMonkey account with a document template
- (Optional) Twilio WhatsApp Business API access
- (Optional) Slack workspace with an Incoming Webhook

## 🔗 Nodes Used

Google Sheets, HTTP Request, Twilio, Gmail, Notion, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
