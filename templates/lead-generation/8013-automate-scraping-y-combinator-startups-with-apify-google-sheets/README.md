# 🎣 Automate scraping Y Combinator startups with Apify & Google Sheets

> ⚡ **236 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Disclaimer
Community nodes are used, and template can only be used on self-hosted n8n instances.

![workflow overview.PNG](fileId:2280)

## This n8n template from [Intuz](https://www.intuz.com/) provides a complete solution to automate the process of scraping company and founder data from Y Combinator. 

It systematically extracts valuable information from your target search and organizes it directly into a Google Sheet, building a powerful prospecting list with minimal effort.

## Who's this workflow for?
- Sales Teams & SDRs
- Venture Capitalists 
- Angel Investors
- Market Researchers
- Startup Founders

## How it works
**1. Trigger the Scrape:** You start the workflow manually whenever you want to gather new company data.

**2. Scrape Y Combinator:** An Apify actor automatically visits your specified Y Combinator search URL (e.g., filtered by batch, industry, or region) and scrapes the details of each company listed.

**3. Retrieve Structured Data:** The workflow fetches the neatly structured data from Apify, including company names, descriptions, websites, founder details, and more.

**4. Log to Google Sheets:** All the scraped information is added or updated as new rows in your designated Google Sheet, creating an organized and actionable database.

## Setup Instructions
**1. Apify Configuration:**
- In the Run an Actor node, connect your Apify account.
- Select the Y Combinator Directory Scraper actor.
- In the Custom Body field, replace {YOUR_Y_COMBINATOR_SEARCH_URL} with the actual URL from the Y Combinator website after you've applied your desired filters.
- You can adjust the maxCompanies value to control how many companies are scraped per run.

**2. Google Sheets Configuration:**
- In the Add data to Google Sheet node, connect your Google Sheets account.
- Select the Document (spreadsheet) and Sheet where you want to save the data. Make sure the sheet has the required columns listed in the "Key Requirements" section.

**3. Execute the Workflow:**
- Click the "Execute workflow" button to run the scraper and populate your Google Sheet.

## Key Requirements to Use This Template
- n8n Instance: An active n8n account (Cloud or self-hosted).
- Apify Account: An active Apify account with an API key. You will also need sufficient credits or a subscription plan to run the Y Combinator Directory Scraper actor.
- Google Account & Sheet: A Google account and a pre-made Google Sheet. The sheet must have the following columns created in advance: Company, Location, Website, LinkedIn, Founded, Description, Industry Tags, Founder 1 Name, Founder 1 LinkedIn, Founder 2 Name, and Founder 2 LinkedIn.

## Connect with us
- Website: https://www.intuz.com/n8n-workflow-automation-templates
- Email: getstarted@intuz.com
- LinkedIn: https://www.linkedin.com/company/intuz
- Get Started: https://n8n.partnerlinks.io/intuz

## For Custom Worflow Automation
Click here- [Get Started](https://www.intuz.com/get-started)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
