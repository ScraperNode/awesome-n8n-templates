# 🎣 Send UK hiring-signal leads from Apify to Instantly.ai campaigns and Google Sheets

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to scrape recent UK hiring-signal leads with an Apify actor, adds valid-email leads to an Instantly.ai campaign, and logs each lead to a Google Sheets tab for tracking.

## How it works
1. Runs every Sunday at 11pm.
2. Starts the Apify “Hiring Signal Lead Scraper” actor with predefined job board sources, UK location filters, target job-title keywords, and email enrichment enabled.
3. Fetches the actor’s dataset items from Apify and filters to leads with a valid email address.
4. Formats each lead into Instantly.ai lead fields (email, name, company) and adds metadata like hiring role, source, lead score, and date added.
5. Processes leads in batches of 10 and sends each batch to the Instantly.ai API to add them to the specified campaign with a preset personalization message.
6. Appends each processed lead to a Google Sheets tab named “Hiring Signal Leads” with the lead details and tracking fields.

## Setup
1. Add your Apify API token and replace `YOUR_APIFY_API_TOKEN` in both Apify HTTP requests.
2. Add your Instantly.ai API key and campaign ID and replace `YOUR_INSTANTLY_API_KEY` and `YOUR_INSTANTLY_CAMPAIGN_ID` in the Instantly request.
3. Connect Google Sheets OAuth2 credentials in n8n and replace `YOUR_GOOGLE_SHEET_ID` with your spreadsheet ID.
4. Create a sheet tab named “Hiring Signal Leads” with columns: Email, First Name, Last Name, Company, Hiring Signal, Source, Lead Score, Date Added.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
