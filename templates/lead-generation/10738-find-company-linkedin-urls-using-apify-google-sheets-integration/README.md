# 🎣 Find company LinkedIn URLs using Apify - Google Sheets integration

> ⚡ **76 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Find Company linkedin Urls directly in Google sheets

This n8n template shows how to populate a Google Spreadsheet with LinkedIn company URLs automatically using the [Apify LinkedIn Company URL Finder actor](https://apify.com/anchor/linkedin-company-url-finder) from [Anchor](https://apify.com/anchor). It will create a new sheet with the matched LinkedIn URLs.

![workflow tempalte screenshot overview](https://i.postimg.cc/sXWsfgL8/Screenshot-2025-11-11-at-21-49-31.png)

You can use it to speed up lead research, keep CRM records consistent, or prep outreach lists — all directly inside n8n.

### Who is this for
- Sales Teams: Map accounts to their official LinkedIn pages fast.
- Recruiters: Locate company pages before sourcing.
- Growth Marketers: Clean and enrich account lists at scale.
- Researchers: Track competitors and market segments.
- CRM Builders: Normalize company records with an authoritative URL.
- Lead-Gen Agencies: Deliver verified company URLs at volume.

### How it works
- Write a list of company names in Google Sheets (one per row)
- The Apify node resolves each name to its LinkedIn company page
- The results are then stored in a new Google Sheet

### How to use

In Google Sheets:
- Create a Google Sheet, rename the sheet companies, and add all the company names you want to resolve (one per row)


In this Workflow:
- Open “Set google sheet URL & original sheet name” and replace the example Google Sheet URL, and the name of the sheet where your company names are.


In the n8n credentials:
- Connect your Google Sheets account with read and write privileges.
- Connect your Apify account.


In Apify:
- Sign up for this [Apify Actor](https://apify.com/anchor/linkedin-company-url-finder)￼ 

### Requirements
- Apify account with access to LinkedIn Company URL Finder.
- A list of company names to process.

### Need Help?
Open an issue directly on Apify! Avg answer in less than 24h


Happy URL Finding!

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
