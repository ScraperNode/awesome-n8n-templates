# 🎣 Extract LinkedIn profiles with Apify & auto-generate lead data for Google Sheets CRM

> ⚡ **149 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Overview


This professional n8n automation suite transforms LinkedIn prospecting from manual drudgery into intelligent automation. Instead of spending hours copying profile data into spreadsheets, simply paste LinkedIn URLs and get complete lead intelligence with email patterns, lead scoring, and CRM-ready data in minutes. The system supports multiple input methods from simple Google Sheets to advanced webhook integrations, making it perfect for individual sales reps, teams, or agencies. Built with enterprise-grade Apify integration and smart lead scoring algorithms, this replaces expensive tools like ZoomInfo while providing better customization and unlimited usage.
Use cases: Sales prospecting, recruitment sourcing, business development research, networking event follow-up, competitive intelligence gathering, agency client prospecting.


# How it works

The workflow supports three input methods and automatically processes LinkedIn profiles via Apify scraper. When you provide LinkedIn URLs through Google Sheets, manual trigger, or webhook, the system extracts complete profile data including name, company, position, and connections. It then generates multiple email pattern variations and calculates lead scores based on authority indicators like job title, connection count, and location. All processed data is automatically added to your Google Sheets CRM with lead quality ratings and email guesses ready for outreach.

**Input Sources:** Google Sheets monitoring, manual trigger, or webhook API  
**Processing:** Apify LinkedIn scraper + intelligent data enrichment  
**Output:** Complete CRM-ready lead profiles with email intelligence  
**Timing:** Real-time processing or batch every 5 minutes

# Set up instructions

* Set up Apify account and get API token for LinkedIn profile scraper access
* Copy the provided Google Sheets template to your Google Drive account
* Configure Google Sheets credentials in n8n and update sheet IDs in workflow nodes
* Replace "YOUR_APIFY_API_TOKEN" placeholder with your actual Apify API key
* The schedule trigger checks for new entries every 5 minutes but feel free to adjust timing
* Test the workflow by adding LinkedIn URLs to input sheet with Status set to "new"
* For webhook usage, configure the endpoint URL and test with sample POST requests
* Customize lead scoring criteria in the code node based on your target market

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
