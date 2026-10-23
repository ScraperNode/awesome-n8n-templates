# 📊 Track Google keyword rankings with Apify, OpenAI, Google Sheets and Gmail

> ⚡ **1,830 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily to scrape Google SERPs for a list of keywords using Apify, logs ranking results to Google Sheets, generates an HTML SEO summary with OpenAI, and emails the report via Gmail.

## How it works
1. Runs every day at 8 AM on a schedule.
2. Reads the configured keywords, target domain, locale settings, and report recipient, then splits the comma-separated keywords into individual items.
3. For each keyword, calls the Apify Google Search Scraper API to fetch the top organic Google results for the chosen country and language.
4. Extracts each result into ranking rows (date, keyword, position, title, URL, domain, description) and flags whether the result matches the target domain.
5. Appends the ranking rows to a Google Sheets spreadsheet to build a daily ranking history.
6. Aggregates all collected rankings and sends them to OpenAI to generate a concise HTML SEO report with your positions, top competitors, and prioritized opportunities.
7. Sends the HTML report to the configured recipient using Gmail.

## Setup
1. Add an Apify API token (HTTP header auth) and select it in the Apify request step.
2. Add a Google Sheets OAuth connection, select the target spreadsheet and sheet tab, and ensure the sheet has columns for checked_at, keyword, rank, title, url, domain, description, and is_target_domain.
3. Add an OpenAI API key and select it for the OpenAI Chat Model used to generate the report.
4. Add a Gmail OAuth connection to send email, then set your keywords, target domain, country/language codes, results per keyword, OpenAI model, and recipient email in the Configuration step.

## Additional info
# Track keyword rankings on Google with Apify and send AI SEO reports by email
# 📥  [Open full documentation on Notion](https://automatisation.notion.site/Course-Track-keyword-rankings-on-Google-with-Apify-and-send-AI-SEO-reports-by-email-39d3d6550fd981078ad0fc8553e63a21)

## Need help customizing?
Contact me for consulting and support : [Linkedin](https://www.linkedin.com/in/doctor-firass/)

# MY NEW YOUTUBE CHANNEL
👉 [Subscribe to my new YouTube channel](https://www.youtube.com/@DrFiras_AI). Here I'll share videos and Shorts with practical tutorials and FREE templates for n8n.

[![The AI Doctor](https://www.dr-firas.com/the-ai-doctor.png)](https://www.youtube.com/@DrFiras_AI)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
