# 🎣 Google Maps to Airtable lead scraper with GPT contact extraction from impressum

> ⚡ **929 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## How it Works  
This workflow automates the process of discovering companies in different cities, extracting their contact data, and storing it in Airtable.  

1. **City Loop (Airtable → Google Maps API)**  
   - Reads a list of cities from Airtable.  
   - Uses each city combined with a search term (e.g., *SEO Agency, Berlin*) to query Google Maps.  
   - Marks processed cities as “checked” to allow safe restarts if interrupted.  

2. **Business Discovery & Deduplication**  
   - Searches for businesses via Google Maps Text Search.  
   - Checks Airtable to avoid scraping the same company multiple times.  
   - Fetches detailed info for each business via Google Maps Place Details API.  

3. **Impressum Extraction (Website → HTML Parsing)**  
   - Builds an *Impressum* page URL for each business.  
   - Requests the HTML and cleans out ads, headers, footers, etc.  
   - Extracts relevant contact info using an AI extractor (OpenAI node).  

4. **Contact Information Extraction**  
   - Pulls out:  
     - **Decision Maker** (Name + Position in one string, if available).  
     - **Email address** (must be valid, containing `@`).  
     - **Phone number** (international format if possible).  
   - Filters out incomplete results (e.g., empty email).  

5. **Database Storage**  
   - Writes company data back into Airtable:  
     - Company name  
     - Address  
     - Website  
     - Email  
     - Phone number  
     - Decision Maker (Name + Position)  
     - Search term & city used  

---

## Setup Steps  

### 1. Prerequisites  
- Google Maps API Key with access to:  
  - Places API → Text Search + Place Details  
- Airtable base with at least two tables:  
  - `Cities` (with columns: ID, City, Country, Status)  
  - `Companies` (for scraped results)  
- OpenAI API key (for decision maker + contact extraction).  

### 2. Authentication  
- Configure your Airtable API credentials in n8n.  
- Set up HTTP Query Auth with your Google Maps API key.  
- Add your OpenAI API key in the `OpenAI Chat` node.  

### 3. Configuration  
- In the Airtable “Cities” table, list all cities you want to scrape.  
- Define your search term in the “Execute Workflow” node (e.g., `SEO Agency`).  
- Adjust the batch sizes and wait intervals if you want faster/slower scraping (Google API has strict rate limits).  

### 4. Execution  
- Start manually or from another workflow.  
- The workflow will scrape all companies in each city step by step.  
- It can be safely stopped and resumed — cities already marked as processed will be skipped.  

### 5. Results  
- Enriched company dataset stored in Airtable, ready for CRM import, lead generation, or further automation.  

---

## Tips & Notes  
- Always respect GDPR and local laws when handling scraped data.  
- The workflow is modular → you can swap Airtable with Google Sheets, Notion, or a database of your choice.  
- Add custom filters to limit results (e.g., only companies with websites).  
- Use sticky notes inside the workflow to understand each step (mandatory for template publishing).  
- **Keep an eye on Google Places API costs** — queries are billed after the free quota. If you are still within the first 2 months of the Google Cloud Developer free trial, you can benefit from free credits.  


**

## 🔗 Nodes Used

Airtable, HTTP Request, Execute Sub-workflow, Execute Workflow Trigger, Filter, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
