# 📊 Scrape Google Events data to Google Sheets via SerpApi

> ⚡ **199 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Description

This workflow automates the process of scraping Google Events data using SerpApi and organizing it in Google Sheets for analysis and tracking.

## Who's it for
- **Event organizers** who need to monitor competitor events in their area
- **Marketing teams** tracking local events for partnership opportunities
- **Researchers** collecting event data for analysis
- **Business owners** monitoring industry events and conferences

## How it works
The workflow searches Google Events using SerpApi's Google Events engine, processes the returned data, and saves it to a Google Sheets spreadsheet. It handles pagination automatically to collect multiple events and flattens the nested API response into a structured format.

## What it does
1. **Configures search parameters** - Sets the search query, total events to fetch, and pagination settings
2. **Fetches events via SerpApi** - Makes paginated requests to Google Events API with proper rate limiting
3. **Processes and flattens data** - Transforms nested event data into a flat structure with all relevant fields
4. **Saves to Google Sheets** - Appends the processed events to a Google Sheets document for easy analysis

## Requirements
- **SerpApi account** with API key ([Get one here](https://serpapi.com/))
- **Google Sheets API access** (OAuth2 credentials)
- **Google Sheets document** - Make a copy of [this template sheet](https://docs.google.com/spreadsheets/d/1DQo3tI8yKzCbLn-DWN2hureHgwj1XxvM1ogES1_77ts/edit?usp=sharing)

## How to set up
1. **Configure SerpApi credentials** in the HTTP Request node
2. **Set up Google Sheets OAuth2** authentication
3. **Update the Google Sheets document ID** in the final node to point to your copy
4. **Modify search parameters** in the "Set Search Parameters" node:
   - Change `query` to your desired search terms
   - Adjust `total_events` (10 events per page)
   - Set `start` position for pagination
5. **Run the workflow** using the manual trigger

## How to customize the workflow
- **Search terms**: Modify the query in the Set node (e.g., "conferences in New York", "music events Los Angeles")
- **Event count**: Adjust `total_events` to fetch more or fewer events
- **Output format**: Modify the Google Sheets column mapping to include/exclude specific fields
- **Rate limiting**: Adjust the `requestInterval` in the HTTP Request node if needed
- **Scheduling**: Replace the Manual Trigger with a Schedule Trigger for automated runs

## Output data includes
- Event title, description, and direct link
- Start date and timing information
- Venue and address details
- Ticket information and pricing
- Event location map links
- Event images
- Original search query for tracking

**Note**: This workflow respects SerpApi rate limits with built-in delays between requests and processes up to 10 events per API call efficiently.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
