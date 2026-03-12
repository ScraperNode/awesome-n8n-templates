# 🎣 Google Maps business scraper with contact extraction via Apify and Firecrawl

> ⚡ **27,183 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Who is this for?
Marketing agencies, sales teams, lead generation specialists, and business development professionals who need to build comprehensive business databases with contact information for outreach campaigns across any industry.

## What problem is this workflow solving?
Finding businesses and their contact details manually is time-consuming and inefficient. This workflow automates the entire process of discovering businesses through Google Maps and extracting their digital contact information from websites, saving hours of manual research.

## What this workflow does
This automated workflow runs every 30 minutes to:
- Scrape business data from Google Maps using Apify's Google Places crawler
- Save basic business information (name, address, phone, website) to Google Sheets
- Filter businesses that have websites
- Scrape each business's website content using Firecrawl
- Extract contact information including emails, LinkedIn, Facebook, Instagram, and Twitter profiles
- Store all extracted data in organized Google Sheets for easy access and follow-up

## Setup
**Required Services:**
- Google Sheets account with OAuth2 setup
- Apify account with API access for Google Places scraping
- Firecrawl account with API access for website scraping

**Pre-setup:**
1. Copy this [Google Sheet](https://docs.google.com/spreadsheets/d/1DHezdcetT0c3Ie1xB3z3jDc5WElsLN87K4J9EQDef9g/edit?usp=sharing)
2. Configure your Apify and Firecrawl API credentials in n8n
3. Set up Google Sheets OAuth2 connection
4. Update the Google Sheet ID in all Google Sheets nodes

**Quick Start:**
The workflow includes detailed sticky notes explaining each phase. Simply configure your API credentials and Google Sheet, then activate the workflow.

## How to customize this workflow to your needs
- **Change search criteria**: Modify the Apify scraping parameters to target different business types (restaurants, gyms, salons, etc.) or locations
- **Adjust schedule**: Change the trigger interval from 30 minutes to your preferred frequency  
- **Add more contact fields**: Extend the extraction code to find additional contact information like WhatsApp or Telegram
- **Filter criteria**: Modify the filter conditions to target businesses with specific characteristics
- **Batch size**: Adjust the batch processing to handle more or fewer websites simultaneously

Perfect for lead generation, competitor research, and building targeted marketing lists across any industry or business type.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
