# 📊 Monitor Realtor listings and export CSV/XLSX with MrScraper and Gmail

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Automated real estate monitoring with MrScraper

## Who’s it for
Real estate investors, agents, proptech teams, and business intelligence professionals who need continuous property price monitoring with automated data collection and AI-ready outputs for reporting and decision-making.

## What it does
This workflow automatically collects real estate listing data from Realtor, including key fields such as property price, listing title, and location. It is designed to capture the full set of available real estate data for the selected search criteria.

The workflow consolidates the scraped data into a single structured dataset, removes inconsistencies, and formats the output into a clean CSV file. This makes it easy to import into spreadsheets, databases, or analytics tools for further analysis, reporting, or automation.

## How it works
- **Accepts a real estate search URL from the same domain**, allowing the workflow to be reused across different locations and filters.

- **Collects and extracts configurable real estate fields** (such as price, title, location, and other listing details) based on your data requirements.

- **Automatically navigates through all related real estate result pages** to ensure the extracted dataset is complete.

- **Converts the final aggregated dataset into a clean CSV** file for easy use in analysis, reporting, or downstream automation.

## How to set up
### 1. Set up your scraper

Create two manual scrapers on the [MrScraper Platform](https://app.mrscraper.com/):

- One scraper to collect the number of results page

- One scraper to extract detailed data from each listing URL

This separation ensures the workflow can scale and be reused efficiently.

### 2. Customize extracted data

In the data extraction scraper, customize the fields according to your needs (for example: price, title, location, etc.).

If you need help automating or configuring the extraction logic, you can contact the MrScraper team for assistance.

### 3. Configure API credentials

- MrScraper: Generate your API token from Manual API Access or your profile page. This token allows n8n to trigger and retrieve data from your scrapers.

- Gmail OAuth2: Required to send the extracted CSV results via email.

- Google Drive OAuth2 (optional): Used to automatically upload the CSV output to Google Drive for storage and sharing.

## Requirements
MrScraper account to create and manage the scrapers
Gmail account to receive the extracted results via email
Google Drive account to store the extracted results (optional)

## How to customize the workflow
- Change scraper result – Customize the data extraction results in the scraper you have created.

- Output file – Can be exported to CSV, JSON, XLSX, or other formats.

- Integrate with other programs – Add nodes that connect with the desired programs.

## 🔗 Nodes Used

Google Drive, Gmail, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
