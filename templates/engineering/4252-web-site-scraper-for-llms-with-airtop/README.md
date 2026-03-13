# ⚒️ Web site scraper for LLMs with Airtop

> ⚡ **9,611 views** · ⚒️ [Engineering](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Recursive Web Scraping 

## Use Case  
Automating web scraping with recursive depth is ideal for collecting content across multiple linked pages—perfect for content aggregation, lead generation, or research projects.

## What This Automation Does  
This automation reads a list of URLs from a Google Sheet, scrapes each page, stores the content in a document, and adds newly discovered links back to the sheet. It continues this process for a specified number of iterations based on the defined scraping depth.

### Input Parameters:
- `Seed URL`: The starting URL to begin the scraping process.  
  Example: `https://example.com/`
- `Links must contain`: Restricts the links to those that contain this specified string.  
  Example: `https://example.com/`
- `Depth`: The number of iterations (layers of links) to scrape beyond the initial set.  
  Example: `3`

## How It Works  
1. Starts by reading the `Seed URL` from the Google Sheet.
2. Scrapes each page and saves its content to the specified document.
3. Extracts new links from each page that match the `Links must contain` string, appends them to the Google Sheet.
4. Repeats steps 2–3 for the number of times specified by `Depth - 1`.

## Setup Requirements  
1. [Airtop API Key](https://portal.airtop.ai/api-keys) — free to generate.  
2. Credentials set up for Google Docs (requires creating a project on Google Console). Read [how to](https://docs.n8n.io/integrations/builtin/credentials/google/).  
3. Credentials set up for Google Spreadsheet.

## Next Steps  
- **Add Filtering Rules**: Filter which links to follow based on domain, path, or content type.  
- **Combine with Scheduler**: Run this automation on a schedule to continuously explore newly discovered pages.  
- **Export Structured Data**: Extend the process to store extracted data in a CSV or database for analysis.

Read more about [website scraping for LLMS](https://www.airtop.ai/automations/scrape-website-data-n8n)

## 🔗 Nodes Used

Google Sheets, Google Docs, Execute Workflow Trigger, n8n Form Trigger, Airtop

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
