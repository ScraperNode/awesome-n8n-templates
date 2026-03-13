# 🎣 Enrich LinkedIn leads with Apify using Google Sheets

> ⚡ **241 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## Enrich Profiles directly in Google Sheet !

This n8n template shows how to enrich Google spreadsheet with LinkedIn profiles automatically using the Apify LinkedIn Profile Enrichment actor from [Anchor](https://apify.com/anchor). It will create a new sheet with the enriched data.

You can use it to build lead enrichment workflows, update your CRM records, or personalize outreach campaigns — all directly inside n8n.

![Screenshot](https://i.postimg.cc/X7ZzKyj2/Screenshot-2025-11-11-at-13-33-30.png)

### Who is this for
- Sales Teams: Build targeted B2B lead lists fast.
- Recruiters: Gather candidate data from LinkedIn profiles.
- Growth Marketers: Enrich outreach lists with LinkedIn info.
- Researchers: Analyze industries, roles, and company trends.
- CRM Builders: Auto-populate contact data from LinkedIn.
- Lead-Gen Agencies: Deliver qualified prospect lists at scale.

### How it works
- The workflow starts with a list of LinkedIn profile URLs (you need to set the Google sheet URL after you added the Google credentials from the n8n settings).
- The Apify node runs the LinkedIn Profile Enrichment actor to extract structured data such as name, title, company, location, and more.
- The results are then stored in a new Google Sheet

### How to use
In Google Sheet:
- Create a Google sheet, rename the sheet "profiles" and add all the LinkedIn URLs you want to enrich (one url per row)


In this Workflow:
- Open the "Set google sheet URL & orginial sheet name" and replace the example Google sheet URL, and the name of the sheet where your LinkedIn URLs are  


In the n8n credentials:  
- Connect your Google Sheet account, with read and write privileges for google sheets
- Connect to your Apify account 


In Apify:
- Sign up for this [Apify Actor](https://apify.com/anchor/linkedin-profile-enrichment)

### Requirements
- Apify account with access to the LinkedIn Profile Enrichment actor
- LinkedIn profile URLs to process

#### Need Help?

Open an issue on directly on Apify￼! Avg answer in less than 24h

Happy Enrichment!

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
