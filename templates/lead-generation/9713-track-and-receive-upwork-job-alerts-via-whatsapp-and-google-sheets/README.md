# 🎣 Track and receive Upwork job alerts via WhatsApp and Google Sheets

> ⚡ **314 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.

## Description

![Screenshot 20251015 184902.png](fileId:2958)

## Short Description  
Automatically scrape new Upwork job listings, save them to Google Sheets, and get real-time WhatsApp alerts when new matching jobs appear. This workflow helps freelancers and agencies track new opportunities instantly — without checking Upwork manually.

---

## Who’s it for  
For freelancers, agencies, and automation enthusiasts who want to monitor Upwork jobs automatically and receive instant notifications for relevant projects.

## How it works  
This workflow connects with RapidAPI to fetch new Upwork job listings, filters relevant ones, stores them in a Google Sheet, and sends WhatsApp alerts for matching results.  
It includes:  
- **Trigger node** for scheduled or webhook-based execution  
- **HTTP Request node** connected to RapidAPI for scraping  
- **Google Sheets node** to store job data  
- **Filter (IF) node** to select relevant jobs  
- **WhatsApp API node** to send alerts automatically  

## How to set up  
1. Get an API key from [RapidAPI](https://rapidapi.com) and subscribe to an Upwork scraper API.  
2. Create a Google Sheet with columns like *Title, Budget, Category, Link, and Description*.  
3. Connect your Google account to n8n using **Google Sheets credentials**.  
4. Set up your **WhatsApp API endpoint** (e.g., via Waha API or WhatsApp Cloud API).  
5. Paste your API keys into the HTTP Request nodes and test the workflow.  
6. Schedule the workflow to run automatically (e.g., every hour or once daily).  

## Requirements  
- RapidAPI account (for Upwork scraper API)  
- Google Sheets account  
- WhatsApp API access (Waha / Cloud API)  
- n8n cloud or self-hosted instance  

## How to customize  
You can modify this workflow to:  
- Track specific job categories or keywords (e.g., “automation”, “AI”, “n8n”)  
- Send alerts to Telegram, Discord, or Slack instead of WhatsApp  
- Add budget or client rating filters for higher-quality job leads  
- Connect it with Airtable or Notion for advanced job tracking

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, WhatsApp Business Cloud, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
