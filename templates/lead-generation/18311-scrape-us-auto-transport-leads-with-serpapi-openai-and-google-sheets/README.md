# 🎣 Scrape US auto transport leads with SerpAPI, OpenAI, and Google Sheets

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and uses SerpAPI Google Maps results to scrape US business leads by state and keyword from Google Sheets, enriches them with contact emails from websites, generates an outreach email with OpenAI, and appends the leads to a Google Sheets tab.

## How it works
1. Runs every day at 7:00 AM via a schedule trigger.
2. Reads the "States" tab from Google Sheets and keeps only rows marked Active.
3. Expands each active state into multiple search queries using the configured keywords and formats them as “{keyword} in {state}”.
4. Calls SerpAPI (Google Maps engine) for each query, logs any SerpAPI errors to an "Errors" tab in Google Sheets, and splits the returned local results into individual lead items.
5. Normalizes each lead (name, phone, website, address, state, keyword), filters out incomplete entries, and removes duplicates using a name+phone dedupe key.
6. If a lead has a website, fetches the /contact page and extracts the first valid email address from the page HTML.
7. Uses OpenAI to generate a concise B2B outreach email for each lead and appends the lead details, extracted contact email, and AI email to the "Leads" tab in Google Sheets.

## Setup
1. Add Google Sheets OAuth credentials and set the spreadsheet ID for the States/Leads/Errors tabs (including updating the error sheet ID used by the workflow-level error logger).
2. Add your SerpAPI API key and replace the hardcoded key in the configuration values.
3. Add an OpenAI credential and confirm the model selection and prompt meet your outreach requirements.
4. Create and format the Google Sheets tabs named "States" (with columns like State and Active), "Leads" (with columns matching the appended fields), and "Errors".

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Filter, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
