# 🔬 Automate data extraction with Zyte AI (Products, Jobs, Articles & More)

> ⚡ **665 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

# Automated AI Web Scraper

This workflow uses the [**Zyte API**](https://www.zyte.com/?utm_campaign=Discord_n8n_tpl&utm_activity=Community&utm_medium=social&utm_source=Discord) to automatically detect and extract structured data from E-commerce sites, Articles, Job Boards, and Search Engine Results (SERP) - no custom CSS selectors required.

It features a robust **"Two-Phase Architecture"** (Crawler + Scraper) that handles pagination loops, error retries, and data aggregation automatically, ensuring you get a clean CSV export even for large sites with thousands of pages.

If you prefer to use your own parsing logic and just need raw data, it provides a "Manual Mode" for that capability as well.

## Supported Modes
* **E-commerce / Product:** Extract prices, images, SKUs, and availability.
* **Articles / News / Forums:** Extract headlines, body text, authors, and dates.
* **Job Boards / Postings:** Extract salaries, locations, and descriptions.
* **SERP (Search Engine Results)**: Extract search rankings, organic results, and snippets.
* **General Scraping:** Get raw BrowserHtml, HTTP Response codes, Network API traffic, or Screenshots to parse yourself.

## How it works
* **Input:** You enter a URL and choose a goal (e.g., "Scrape all pages") via a user-friendly form.
* **Smart Routing:** A logic engine automatically configures the correct extraction model for the target website.
* **Two-Phase Extraction:** (Active only for "Scrape all pages") Phase 1 maps out all available URLs (Crawling), and Phase 2 extracts the rich data (Scraping), filtering out errors before saving to CSV.

## Set up steps
1.  **Get your API Key:** You need a free Zyte API key to run the AI extraction. [**Get it here**](https://www.zyte.com/?utm_campaign=Discord_n8n_tpl&utm_activity=Community&utm_medium=social&utm_source=Discord).
2.  **Run:** Open the Form view, paste your key, select your target website, and hit Submit.
3.  **Export:** The workflow will process the data and output a downloadable CSV file.


## Resources
- [**Zyte API Documentation**](https://docs.zyte.com/?utm_campaign=Discord_n8n_docs&utm_activity=Community&utm_medium=social&utm_source=Discord)
- [**Get Help**](https://discord.com/invite/eN83rMWqAt) (with API errors & extraction logic)

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Convert to File, n8n Form

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
