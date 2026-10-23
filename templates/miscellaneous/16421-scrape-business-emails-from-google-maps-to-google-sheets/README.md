# 🔧 Scrape business emails from Google Maps to Google Sheets

> ⚡ **160 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow takes a list of Google Maps search queries, extracts candidate business website URLs from the search results, visits each site, scrapes email addresses from the page content, and appends cleaned, deduplicated emails to Google Sheets fully automated, no manual research needed.

## How it works
1. A manual trigger fires with a pinned list of Google Maps search queries, each representing a location and business type combination.
2. A query loop iterates through each query, launching a sub-workflow execution per query and applying a configurable wait between executions to reduce request bursts.
3. The sub-workflow sends an HTTP GET to the Google Maps search results URL for that query and reads the raw HTML response.
4. A code node extracts all URLs from the HTML using a regex pattern, after which a filter node removes known system domains such as Google, gstatic, schema.org, and Wix internals, and a deduplication node removes repeated URLs before visiting.
5. A URL loop processes each candidate business website one at a time, fetching the page HTML and passing it into the email processing flow.
6. A code node applies a regex to the fetched page content to extract email-shaped strings, excluding common image file extensions, and a loop-over-pages structure aggregates emails across all visited pages for a given query.
7. The aggregated email array is split into one item per email, deduplicated, filtered to remove junk and system addresses, and appended to the configured Google Sheet.

## Setup
1. Add a Google Sheets OAuth credential and select the target spreadsheet and sheet tab in the Google Sheets append step.
2. Update the list of input queries (the `query` field) used by the manual trigger to match the locations/industries you want to scrape.
3. Adjust the wait duration between query executions if you need slower or faster pacing for Google Maps requests.

## Requirements
- Google Sheets account for storing and appending scraped email output
- n8n instance with HTTP Request node access and the ability to execute sub-workflows

## Customization
- The query list in the manual trigger is the primary lever swap in any location, industry, or keyword combination you want to target. The filter node for irrelevant domains can be extended with additional regex patterns if you find recurring junk domains in your output. You can also modify the email regex in the Scrape emails from page code node if you want to apply stricter validation rules or capture emails in specific formats only.
- If you want to scale beyond a manual run, replace the manual trigger with a scheduled trigger and read queries from a Google Sheet rather than using pinned data, which removes the need to redeploy the workflow for each new query list.

## Additional info
Try It Out
This n8n template is a lightweight, no-headless-browser solution for scraping business email addresses from Google Maps search results. You provide search queries and a Google Sheet destination, and the workflow handles URL extraction, site crawling, email parsing, deduplication, and output automatically.

It is best suited for targeted, low-volume scraping runs where you need a quick way to collect contact emails for a defined set of business categories and locations, without setting up a full scraping infrastructure.

Need help setting this up or want a version with AI-powered email validation and outreach sequencing built in?
Visit https://patelravi.co.in/n8n_expert

## 🔗 Nodes Used

Google Sheets, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
