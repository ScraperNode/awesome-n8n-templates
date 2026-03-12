# 📊 Real estate intelligence tracker with Bright Data & OpenAI

> ⚡ **10,869 views** · 📊 [Market Research & Insights](../)

## Description

### Who this is for
The Real Estate Intelligence Tracker is a powerful automated workflow designed for real estate analysts, investors, proptech startups, and market researchers who need to collect and analyze structured data from real estate listings across the web at scale.

This workflow is tailored for:

- **Real Estate Analysts** - Tracking property prices, locations, and market trends

- **Investment Firms** - Sourcing high-opportunity listings for portfolio decisions

- **PropTech Developers** - Automating listing insights for SaaS platforms

- **Market Researchers** - Extracting insights from competitive housing data

- **Growth Teams** - Monitoring geographic property trends and pricing fluctuations

### What problem is this workflow solving?
Collecting structured real estate listing data from property websites is difficult due to bot protections and unstructured HTML content. Manual data collection is slow and error-prone, and traditional scrapers often get blocked or miss context.

This workflow solves:

- Automated bypass of anti-bot protection using Bright Data Web Unlocker

- Conversion of unstructured HTML content into clean text using a Markdown-to-text LLM pipeline

- Structured extraction of key listing data like price, location, property type, and features using OpenAI

- Aggregation and delivery of insights to Google Sheets, local storage, and webhook-based alerts

### What this workflow does

**Convert to Text**: Transforms scraped HTML/markdown into clean text using a Basic LLM Chain

**Structured Data Extraction**: Uses OpenAI GPT-4o with the Information Extractor node to parse property attributes (price, address, area, type, etc.)

**Aggregate & Merge**: Combines data from multiple pages or listings into a cohesive structure

**Outbound Data Handling**:

- **Google Sheets** – Appends the structured real estate data for further analysis

- **Save to Disk** – Persists structured JSON/text data locally

- **Webhook Notification** – Sends data alerts or summaries to any third-party platform

### Pre-conditions

1. You need to have a [Bright Data](https://brightdata.com/) account and do the necessary setup as mentioned in the "Setup" section below.
2. You need to have an OpenAI Account.

### Setup
- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1354)
The Value field should be set with the
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- In n8n, Configure the Google Sheet Credentials with your own account. Follow this documentation - [Set Google Sheet Credential](https://docs.n8n.io/integrations/builtin/credentials/google/)
- In n8n, configure the OpenAi account credentials.
- Ensure the URL and Bright Data zone name are correctly set in the **Set URL, Filename and Bright Data Zone** node.
- Set the desired local path in the **Write a file** to disk node to save the responses.

### How to customize this workflow to your needs

**Target Multiple Sites or Locations**

- Update the Bright Data URL node dynamically with a list of regional real estate websites

- Loop through different city/state filter URLs

**Customize Extracted Fields**

Modify the Information Extractor prompt to extract fields like:

- Property size, number of bedrooms/bathrooms

- Days on market

- Nearby amenities or schools

- Agent contact details

**Integrate with More Destinations**

- Add nodes to export data to Notion, Airtable, HubSpot, or your custom database

- Generate automated reports using PDF generators and email them

**Data Quality and Logging**

- Add validation checks (e.g., missing price or address)

- Save intermediate files (markdown, raw HTML, JSON output) to disk for audit purposes

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Basic LLM Chain, OpenAI Chat Model, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
