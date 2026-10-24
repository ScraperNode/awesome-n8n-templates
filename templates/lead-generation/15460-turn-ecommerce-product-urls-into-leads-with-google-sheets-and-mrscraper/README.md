# 🎣 Turn ecommerce product URLs into leads with Google Sheets and MrScraper

> ⚡ **65 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Ecommerce Leads Finder & Contact Extraction

This n8n workflow automates the process of finding ecommerce seller leads, enriching them with product and business details, discovering company websites, and extracting contact information such as emails and phone numbers.

The workflow starts from a list of product URLs stored in Google Sheets, checks whether product details have already been scraped, and only runs new scraping jobs when needed. It uses MrScraper to collect detailed product, seller, and business information, then formats the extracted data into clean lead fields before saving everything back into Google Sheets. 

After the product and seller data is collected, the workflow can search Google SERP results to identify the seller’s real company website. It applies scoring logic to filter out marketplaces, social platforms, directories, and low-confidence matches, helping keep the lead list clean and relevant. 

Once a company website or contact page is found, the workflow checks cached contact extraction results and runs a contact scraper when needed. The final output includes product details, seller profile data, business name, address, license number, company URL, contact URL, emails, and phone numbers. 

### What this workflow does

* Reads ecommerce product URLs from Google Sheets
* Scrapes product, seller, and business details
* Avoids duplicate scraping by checking cached MrScraper results
* Saves enriched lead data into Google Sheets
* Finds likely company websites using Google SERP
* Filters out social media, marketplaces, and irrelevant domains
* Extracts contact details from company/contact pages
* Updates lead status automatically

### Best for

This workflow is useful for lead generation, ecommerce research, seller prospecting, B2B outreach, marketplace intelligence, and building targeted contact lists from ecommerce product pages.

### Tools used

* n8n
* Google Sheets
* MrScraper
* Google SERP API
* JavaScript Code nodes
* HTTP Request nodes

### Suggested post caption

Turn ecommerce product URLs into enriched B2B leads automatically.

This n8n workflow takes a list of product URLs, scrapes product and seller details, finds the seller’s real company website, extracts contact information, and saves everything into Google Sheets.

It includes caching logic to avoid duplicate scraping, SERP-based company URL discovery, smart filtering for irrelevant domains, and contact extraction for emails and phone numbers.

Perfect for ecommerce lead generation, seller research, and automated prospecting workflows.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
