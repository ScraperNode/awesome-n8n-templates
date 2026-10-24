# 🎣 Scrape B2B leads from Google Maps to Google Sheets with HasData

> ⚡ **73 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This n8n template shows how to build a complete B2B lead generation pipeline that scrapes Google Maps for businesses and enriches them with emails from their websites or Google search.

**Use cases:** Find local businesses with contact info for cold email campaigns, B2B prospecting, market research, or building CRM databases.

## How it works

1. You define search queries, locations, and page counts in a `config` sheet inside a Google Spreadsheet called **"Leads"**.
2. On each run, the workflow creates a new timestamped results sheet so previous runs don't get overwritten.
3. It reads every row from `config`, generates paginated search tasks (20 results per page), and fires them at the HasData Google Maps API.
4. Results get split into individual businesses. Duplicates are removed by name and place ID.
5. For each business with a website, the HasData web scraper hits the URL directly and pulls any emails it finds.
6. If no emails turn up on the website, or there's no website at all, the workflow runs a targeted Google search: `"business name, city" email "@"` and parses the organic results with a regex.
7. All leads (whether emails came from the site or from Google) merge into one stream and get written to the results sheet: name, phone, address, website, emails, rating, reviews, type.

## How to set up

1. Install the [HasData n8n node](https://www.npmjs.com/package/@hasdata/n8n-nodes-hasdata) on your self-hosted instance.
2. Connect your **HasData API** credentials and your **Google Sheets OAuth2** credentials inside the workflow.
3. In your Google Spreadsheet named `Leads`, add a sheet called `config` with these columns:
   - `leads_query` for the search term (e.g. `coffee shops`)
   - `location` for city, state, zip code, or a specific address
   - `page_count` for number of pages to fetch (20 results per page)
   - `offset` for starting page number (use `1` to start from the beginning)
4. Click **Manual Trigger** to run.

## Requirements

- Self-hosted n8n (community node required)
- [HasData](https://hasdata.com/) account with API key
- Google account with Sheets API access (OAuth2)
- Google Spreadsheet named `Leads` with a `config` sheet

## Customizing this workflow

- Swap the Manual Trigger for a Schedule trigger to run nightly lead generation automatically.
- Add a filter node after "Remove Duplicates" to target only businesses above a minimum rating.
- Extend the "Format Lead" nodes to capture additional fields from the Maps API like categories, hours, or social links.
- Point the output to a CRM via HTTP Request instead of Google Sheets.

## Further reading

The full build walkthrough, including real test results, node-by-node screenshots, and the regex logic behind the Google search fallback, is on the HasData blog: [How to scrape leads with n8n](https://hasdata.com/blog/scrape-leads-with-n8n).

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
