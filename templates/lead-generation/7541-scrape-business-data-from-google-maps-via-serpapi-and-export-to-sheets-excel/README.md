# 🎣 Scrape business data from Google Maps via SerpAPI and export to Sheets & Excel

> ⚡ **115 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Who is this for
This workflow is perfect for marketers, researchers, and small business owners who need to quickly gather and review company listings from Google Maps. Whether you're building lead lists, scouting competitors, or researching potential partners, this automation speeds up the process by exporting results into a neat Excel or Google Sheet format.

## What problem is this workflow solving
Manually searching Google Maps for companies and copying their data into spreadsheets is time-consuming and error-prone. This workflow automates the search and export process, saving hours of manual effort while improving accuracy and consistency.

## What this workflow does
- Takes a user’s search query via chat
- Scrapes company data from Google Maps based on that query
- Returns the results in a downloadable Excel file
- Saves the same data to a connected Google Sheets document for easy access and sharing

## Setup
- Add your credentials:
	- Google Sheets
	- Serp
- Run the workflow and enter your search request in the chat interface
- Retrieve your results from either:
	- The Get XLSX node as an Excel file
	- The linked Google Sheets file (copy Column Names from XLSX File to Google Sheets)
- Test the bot by sending a search query (e.g., "coffee shops in Berlin") - the bot will return the results automatically.

## 🔗 Nodes Used

Google Sheets, Convert to File, Chat Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
