# 🔬 Scrape CareClinics locations and log them to Google Sheets by state

> ⚡ **2 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow manually scrapes CareClinics location listings via HTTP requests, extracts clinic name, address, phone, email, and inferred state, then appends or updates the results into state-specific tabs in a Google Sheets spreadsheet.

## How it works
1. Starts when you run the workflow manually.
2. Sends a POST request to the CareClinics locations endpoint for the current page of listings.
3. Parses the returned HTML to extract clinic names, addresses, emails, and phone numbers, infers each clinic’s Malaysian state from the address, and accumulates all clinics across pages.
4. Checks the pagination metadata and repeats the request with a short delay until all pages are processed.
5. After the last page, outputs the full clinic list and processes each clinic record one by one.
6. Appends or updates each clinic in Google Sheets using “HCO Name” as the unique match key and writes the row into the worksheet named after the detected state.

## Setup
1. Add a Google Sheets OAuth2 credential with access to the target spreadsheet.
2. Update the Google Sheets document ID and ensure the spreadsheet contains worksheets named to match the detected states (for example, Selangor, Johor, Penang, Kuala Lumpur, Putrajaya, and Negeri Sembilan).
3. Ensure each state worksheet has columns named “HCO Name”, “Phone Number”, “Email”, and “Address” so the append/update mapping works correctly.

## Requirements
- n8n instance (self-hosted or cloud)
- Google Sheets OAuth2 credential with access to the target spreadsheet
- A spreadsheet with one worksheet per Malaysian state (e.g. Selangor, Johor, Penang, Kuala Lumpur, Putrajaya, Negeri Sembilan, etc.), each with columns: HCO Name, Phone Number, Email, Address
- No login or API key needed for the source site it's a public location listing

## Customization
- Pagination page size (settings[posts_num], default 12) if the source site changes its layout
- Rate-limit delays: 1s between page fetches, 2s between each Google Sheets write adjust if you hit errors or want faster/slower runs
- State-detection logic: matches state names directly in the address text first, then falls back to Malaysian postcode-prefix ranges if no state name is found extend the STATE_KEYS or postcode ranges if you add more states or the address format changes
- Phone number normalization: auto-formats numbers to +60 international format and keeps only the first number when multiple are listed adjust normalizePhone() if you prefer a different format
- Dedupe key: matches on "HCO Name" change to Phone Number or Address if clinic names can repeat across branches

## Additional info
Scrapes all clinic locations from CareClinics Malaysia's public locations page via its 
JetSmartFilters AJAX endpoint (no filter applied, so all states are pulled in one pass). 
Paginates through every page, extracts Name, Address, Phone, and Email per clinic, 
detects the Malaysian state from the address, normalizes phone numbers to +60 format, 
and writes each clinic to the matching state worksheet in Google Sheets. Runs in two 
phases: all pages are collected first, then each clinic is written one at a time this 
avoids an n8n limitation where a per-item dynamic sheet name only evaluates correctly 
when processed individually.

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
