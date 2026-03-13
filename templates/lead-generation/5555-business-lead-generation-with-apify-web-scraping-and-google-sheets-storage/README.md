# 🎣 Business lead generation with Apify web scraping and Google Sheets storage

> ⚡ **7,696 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## This flexible template scrapes business listings for any industry and location, perfect for sales teams, marketers, and researchers.


### Good to know
- Works with any business category (restaurants, contractors, retailers, etc.)
- Fully customizable search parameters
- Results automatically organized in Google Sheets
- Built-in delay ensures scraping completes before data collection

## How it works

1. Trigger: Manual or scheduled start
2.  Apify Configuration: Sets scraping parameters (industry, location, data fields)
3. Scraping Execution: Runs the web scraping job
4. Data Processing: Cleans and structures the raw data
5. Storage: Saves results to your Google Sheets

### What is Apify?
Apify is a webscraping tool, in this workflow the data is scraped from a google maps scraper:

**https://apify.com/compass/crawler-google-places**


## How to use

### Apify Small # Lead Generation (Purple)

**https://apify.com/compass/crawler-google-places**

#### 
1. Add location and industry to scrape (Apify)
2. Add the number of leads to output (Apify)
3. Copy over the JSON file into N8N
4. Copy & paste API endpoint "Get Run URL" in N8N

### Apify Large # Lead Generation (Grey)

#### Configure the Manual Trigger

When clicking 'Execute workflow' node is ready to use as-is
This triggers the entire lead generation process

#### Setup "Start Results (Apify)" Node
Get Your Apify API Information

#### Go to Apify.com and create a free account
Navigate to Settings → Integrations → API tokens
Copy your API token
Find the Google Maps scraper actor ID:

#### Configure the HTTP Request (start results)

Method: POST
URL: Replace "enter apify (get run)" with:
https://api.apify.com/v2/acts/nwua9Gu5YrADL7ZDj/runs?token=YOUR_API_TOKEN


C. Customize the JSON Body Parameters
In the JSON body, modify these key fields:
Location & Search:

"locationQuery": Change "Toronto" to your target city
"searchStringsArray": Change ["barber"] to your business type

Examples: ["restaurants"], ["dentists"], ["contractors"]

#### Configure the HTTP Request (start results)
Method : Get
Url: enter the get dataset URL from Apify


#### Split Out Node
Select fields to append in the google sheet


#### Test the Configuration

Click Execute workflow to test
Check that the Apify job starts successfully
Note the job ID returned for the next section

This section initiates the scraping process and should complete in 30-60 seconds depending on your lead count.

#### Setup Google Sheets

Create a new Google Sheet with these columns:

title (business name)
address (full address)
state (state/province)
neighborhood (area/district)
phone (contact number)
emails (email addresses)


Copy your Google Sheets document ID for workflow configuration

## Requirements
- Apify account
- Google Sheets document
- Google OAuth credentials

## Customization Options
### For different use cases:

- Lead Gen: Get business leads
- Local SEO: Collect competitor data
- Market Research: Analyze industry trends

### Advanced mofications:
- Add email enrichment
- Integrate with CRM systems
- Set up automatic daily runs

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
