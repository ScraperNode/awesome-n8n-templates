# 🎣 Generate leads from Google Maps with email

> ⚡ **323 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Google Maps Lead Generation and Email Scraper
**Categories:** Lead Generation, Web Scraping, Business Automation

This workflow creates a completely free Google Maps email scraping system that extracts unlimited business emails without requiring expensive third-party APIs. Built entirely in N8N using simple HTTP requests and JavaScript, this system can generate thousands of targeted leads for any industry or location while operating at 99% free cost structure.

---
### Benefits
* **Zero API Costs** - Operates entirely through free Google Maps scraping without expensive third-party services
* **Unlimited Lead Generation** - Extract emails from thousands of Google Maps listings across any industry
* **Geographic Targeting** - Search by specific cities, regions, or business types for precise lead targeting
* **Built-in Data Cleaning** - Automatic duplicate removal, filtering, and data validation
* **Scalable Processing** - Handle hundreds of businesses per search with intelligent rate limiting

### How It Works

1.  **Lead Ingestion**: I have given a free browser extension to scrape leads from **Google Maps** and import them directly into a **Google Sheet**.
	1. Business Name
	2. Business Phone Number
	3. Business Emails (From Step 3)
	3. Rating
	4. Reviews Count
	5. Industry
	6. Address
	7. Website
	8. Google Map Link
2.  **Website Crawling**: The n8n workflow reads the leads from your sheet and automatically crawls each website to find all internal pages.
3.  **Email Extraction**: For each page, the workflow intelligently scrapes for email addresses, filtering out image files and other non-relevant data.
4.  **Enrich and Update**:
    * If an email is found, the workflow updates the corresponding row in your Google Sheet with the new email address.
    * If no email is found after crawling the main page and all sub-pages, it marks the lead as "Not Found" so you can easily track your progress.

---

### Requirements

* **n8n**: A self-hosted or cloud instance of n8n.
* **Google Sheets**: A Google account with a designated spreadsheet for your Google Maps leads.
* **Browser Extension**: A free Google Maps scraping extension to get your initial lead data into the Google Sheet.

---

### How to Use

1.  **Set up your spreadsheet**: Use the browser extension to scrape leads from Google Maps and populate your Google Sheet. Make sure the sheet has a column named **"Website"** and a column named **"Processed for Email"** (with an initial value of "Pending").
2.  **Configure the workflow**: Import this n8n workflow JSON into your n8n instance and connect your **Google Sheets** credentials.
3.  **Run the workflow**: Click the "Execute workflow" button to start the process. The workflow will automatically begin crawling websites and enriching your lead list with emails.

### Business Use Cases
* Local Service Providers - Find competitors and potential partners in specific geographic areas
* B2B Sales Teams - Generate targeted prospect lists for cold outreach campaigns
* Marketing Agencies - Build industry-specific lead databases for client campaigns
* Real Estate Professionals - Identify businesses in target neighborhoods for commercial opportunities
* Franchise Development - Research potential markets and existing competition
* Market Research - Analyze business density and contact information across regions

### Revenue Potential
This system transforms lead generation economics:

* $0 per lead vs. $2-5 per lead from paid databases
* Process 1,000+ leads daily without hitting API limits
* Sell as a service for $500-2,000 per industry/location
* Perfect for agencies offering lead generation to local businesses
* Difficulty Level: Intermediate
* Estimated Setup Time: 30 min
Monthly Operating Cost: $0 (completely free)

### Advanced Optimizations we have
Scale the system with:

* Multi-Page Scraping: Extract URLs from homepages, then scrape contact pages for more emails
* Proxy Integration: Add residential proxies for unlimited scraping without rate limits

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
