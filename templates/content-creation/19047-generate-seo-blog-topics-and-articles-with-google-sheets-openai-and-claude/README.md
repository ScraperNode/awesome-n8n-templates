# 🎬 Generate SEO blog topics and articles with Google Sheets, OpenAI, and Claude

> ⚡ **40 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow uses Google Sheets, OpenAI, Anthropic, and a Google Apps Script web app to generate blog topic ideas per client, save them for approval, and then turn approved topics into full HTML articles that are converted into Google Docs and linked back to the sheet.

## How it works
1. Triggers when a client row changes in Google Sheets or on a monthly schedule to process clients from the “Client Details” sheet.
2. For each client, uses OpenAI (GPT-4o) to generate a batch of blog title ideas based on the client’s keywords, homepage content, competitor URLs, and project instructions.
3. Uses OpenAI (GPT-4o) again to review, rewrite, and standardize the title list, then parses the results into a structured array of topics.
4. Writes each topic as a separate row to the “Content Topics” Google Sheets tab with the associated Client ID for human QC.
5. Runs daily to fetch “Content Topics” rows marked QC = Good that do not yet have a Content URL, then processes topics one by one.
6. For each approved topic, loads the matching client details from Google Sheets and uses Anthropic (Claude 4 Sonnet) to generate a 1500+ word SEO article in plain HTML.
7. Sends the HTML and extracted H1 title to a Google Apps Script web app to create a Google Doc, then updates the corresponding “Content Topics” row with the returned document URL.

## Setup
1. Add credentials for Google Sheets, OpenAI, and Anthropic in n8n.
2. Replace all placeholders like YOUR_GOOGLE_SHEET_ID with your spreadsheet ID and ensure it contains “Client Details” and “Content Topics” tabs with the expected columns (e.g., Client ID, Keywords, Blog article per month, QC, Content Topic, Content URL, competitor fields).
3. Deploy a Google Apps Script web app that accepts filename and html in a POST request, creates a Google Doc from the HTML, and returns the new document URL, then paste its endpoint into the HTTP request step.
4. Populate each client row with homepage/competitor scraped content fields (or adjust the prompts to match your available data) and define your “Project Instruction” rules used by the generators.
5. Set your QC process by marking approved topics as “Good” in the QC column to allow the daily article-writing run to pick them up.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Google Sheets Trigger, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
