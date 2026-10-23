# 📊 Scrape NSR specialist data into Google Sheets with pagination and detail pages

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes Malaysia’s National Specialist Register (nsr.org.my) for a selected specialty (configured for Cardiology), paginates through all result pages, enriches each doctor by fetching their detail page, and appends or updates the structured results in Google Sheets.

## How it works
1. Starts when you run the workflow manually.
2. Requests nsr.org.my to obtain a session cookie and submits a specialty search (configured with code 302 for Cardiology).
3. Iterates through each results page on nsr.org.my, parses the HTML table, and accumulates each doctor’s NSR number, name, gender, and account ID.
4. After the last page is reached, loops through the full doctor list and opens each doctor’s detail page on nsr.org.my.
5. Extracts the graduation year (from the Basic Degree section) and splits the listed specialty field into Specialty 1 and Specialty 2.
6. Waits briefly to rate-limit requests, then appends or updates the doctor record in Google Sheets using the License (NSR number) as the matching key.

## Setup
1. Create a Google Sheets OAuth2 connection in n8n.
2. Set the target Google Sheets document and sheet tab, and ensure it has columns for Name, License, Specialty 1, Specialty 2, Gender, and Grad Year.
3. (Optional) To scrape a different specialty, update the allSpecialty_ForSearch value in the NSR search request and adjust the specialty label used during parsing if you rely on it downstream.

## Requirements
- n8n instance (self-hosted or cloud)
- Google Sheets account with a spreadsheet ready (headers: Name, License, Specialty 1, Specialty 2, Gender, Grad Year)
- Google Sheets credential connected in n8n
- Internet access to nsr.org.my (no auth required, public register)

## Customization
- Target specialty (currently Cardiology, code 302) — swap via numeric specialty code from NSR's search form
- Output spreadsheet/sheet destination
- Rate-limit delay between requests (default 0.7s)
- Dedupe key for re-runs (default: License / NSR No)

## Additional info
Scrapes Malaysia's National Specialist Register (nsr.org.my) for a chosen medical specialty. 
Runs in 2 phases: paginates all result pages to collect the doctor list, then fetches each 
doctor's detail page for Gender/Specialty/Grad Year. Handles session-cookie-based filtering 
(NSR has no URL-based filter). ~10-15 min runtime for ~460 records.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
