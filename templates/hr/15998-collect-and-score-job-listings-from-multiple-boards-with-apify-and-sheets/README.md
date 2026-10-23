# 👥 Collect and score job listings from multiple boards with Apify and Sheets

> ⚡ **230 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects job search preferences via an n8n Form, pulls listings from Remotive, Arbeitnow, Jobicy, and Apify (LinkedIn Jobs and Naukri actors), then normalizes, scores, categorizes, and writes the ranked results to Google Sheets.

## How it works
1. Receives job role, tech stack, and country inputs from an n8n Form.
2. Queries Remotive, Arbeitnow, and Jobicy job APIs in parallel using the provided job role.
3. Calls Apify to run the LinkedIn Jobs actor (using the selected country) and the Naukri job scraper actor to retrieve additional listings.
4. Merges results from all sources into a single stream of job items.
5. Normalizes fields (title, company, link, description, posted date, salary, job type, visa sponsorship, company size/info), scores relevance using role/tech-stack matching with synonym expansion, categorizes roles, filters weak matches, and sorts by relevance and recency.
6. Appends the ranked job listings into a Google Sheets spreadsheet with one row per job.

## Setup
1. Create an Apify account, generate an API token, approve the Naukri scraper actor permissions, and replace the `<your api key>` token in both Apify request URLs.
2. Add a Google Sheets OAuth2 credential in n8n.
3. Replace `YOUR_SHEET_ID_HERE` with your target Google Sheets document ID and confirm the sheet name (default is `Sheet1`) and column headers match the fields being appended.

## Requirements
- apify account , google sheet api enable in google cloud console

## Customization
- add more job websites apis if you want , the free tier of apify is generous enough

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
