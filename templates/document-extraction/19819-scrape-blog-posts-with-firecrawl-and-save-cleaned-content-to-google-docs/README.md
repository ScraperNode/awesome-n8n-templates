# 🔬 Scrape blog posts with Firecrawl and save cleaned content to Google Docs

> ⚡ **4 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually batch-scrapes a list of blog post URLs with Firecrawl, polls until the scrape completes, cleans the returned markdown into plain text, and writes the combined content into a newly created Google Doc.

## How it works
1. Runs when you manually execute the workflow in n8n.
2. Submits a batch scrape job to Firecrawl for a configured list of blog post URLs.
3. Waits one minute and repeatedly checks Firecrawl for the batch scrape status until it reports completed or failed.
4. Stops the workflow with an error message if Firecrawl returns a failed status.
5. Creates a new Google Doc titled with the Firecrawl batch ID once the scrape completes.
6. Cleans and combines the scraped markdown by removing navigation/footer sections, links, images, and most markdown formatting while keeping titles and source URLs.
7. Inserts the cleaned combined text into the Google Doc.

## Setup
1. Add a Firecrawl API credential and select it in the Firecrawl batch scrape and status-check steps.
2. Add Google Docs OAuth2 credentials and select them in the Google Docs create and update steps.
3. Replace the placeholder URL list in the Firecrawl batch scrape step with the blog post URLs you want to scrape.

## 🔗 Nodes Used

Google Docs, Stop and Error

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
