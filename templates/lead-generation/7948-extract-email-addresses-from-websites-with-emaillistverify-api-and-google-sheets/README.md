# 🎣 Extract email addresses from websites with EmailListVerify API and Google Sheets

> ⚡ **611 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How to scrape emails from websites

This workflow will :
- Try to find emails by scraping the website via http request
- If no result is found, it will use [EmailListVerify email finder API](https://emaillistverify.com/email-finder-api) to guess an email address

Scraping email via http request is a cost-effective way to find email addresses, so it can save you a few bucks to use it before calling any email finder API.

## Who is for
This workflow will help you transform a list of websites into a list of leads with email addresses. This is a handy workflow for any lead generation specialist.

Pay attention that this workflow will usually return only generic emails like "contact@". Those generic emails are useful when you target small businesses; the owner usually monitors those emails. However, I don't advise this workflow to target enterprise customers.

# Requirements

In order to use this workflow, you will need:
- To copy [this Google sheet template](https://docs.google.com/spreadsheets/d/1VOTFM8UeWHhJbtBM7SRca6vsVJlRUXzX71kjJ8n2jUY/edit?gid=1538095319#gid=1538095319)
- Get an API key for [EmailListVerify](https://emaillistverify.com/)

You then need to edit the setup of the 3 stages highlighted with a yellow sticky note, and you will be good to go.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
