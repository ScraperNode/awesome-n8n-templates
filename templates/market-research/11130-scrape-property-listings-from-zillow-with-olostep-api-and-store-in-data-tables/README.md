# 📊 Scrape property listings from Zillow with Olostep API and store in data tables

> ⚡ **369 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# Zillow Property Scraper Using Olostep API  

This n8n template automates Zillow property data collection by scraping Zillow search results using the Olostep API.  
It extracts **property price, link to listing, and location**, removes duplicates, and stores everything in a Google Sheet or Data Table.

## Who’s it for  
- Real estate analysts and investors researching property markets.  
- Lead generators needing structured Zillow data.  
- Freelancers and automation builders collecting housing listings.  
- Anyone needing fast, clean Zillow data without manual scraping.

## How it works / What it does  
1. **Form Trigger**  
   - User enters a Zillow search URL.  
   - This becomes the base Zillow search URL.

2. **Pagination Logic**  
   - A list of page numbers (1–7) is generated.  
   - Each number is used to load the next Zillow search page.

3. **Scrape Zillow Pages with Olostep**  
   - For each page, the Olostep API scrapes the Zillow results.  
   - Olostep’s LLM extraction schema extracts:  
     - **price**  
     - **url** (link to the Zillow listing)  
     - **location**

4. **Parse & Split Results**  
   - Returned JSON is cleaned and converted into individual listing items.

5. **Remove Duplicates**  
   - Ensures each Zillow listing appears only once.

6. **Insert into Google Sheet / Data Table**  
   - Final cleaned listings are inserted row-by-row.  
   - Perfect for filtering, exporting, or further analysis.

This workflow gives you a fast, scalable property scraper using Zillow + Olostep — no browser automation, no manual copy/paste.

## How to set up  
1. Import the template into n8n.  
2. Add your **Olostep API key**.  
3. Connect your **Google Sheet or n8n Data Table**.  
4. Deploy the form and start scraping by entering a place name.

## Requirements  
- Olostep API key  
- Google Sheets account or Data Table  
- n8n cloud or self-hosted instance  

## How to customize the workflow  
- Add more pages to the pagination array (e.g., 1–20).  
- Expand the LLM extraction schema to include:  
  - number of bedrooms  
  - number of bathrooms  
  - square footage  
  - property type  
- Trigger via Telegram or API instead of a form.  
- Send results to Airtable or Notion instead of Google Sheets.  

---

👉 This template gives you an automated Zillow scraper powered by AI extraction — perfect for real estate lead gen or market research.

## 🔗 Nodes Used

HTTP Request, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
