# 🎣 Skip tracing: Extract phones & emails from TruePeopleSearch with Zyte API

> ⚡ **849 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# TruePeopleSearch Scraper for Skip Tracers

Enrich any list of people with verified contact info using this workflow.  
This n8n automation scrapes **TruePeopleSearch** using **Zyte's extraction API** to safely bypass bot protection and extract detailed profiles. It’s built for **data brokers, skip tracers, and real estate professionals** who need clean contact data (phone, email, address) from names alone — even when the main profile is empty.  

If the original profile lacks a phone number, the workflow intelligently scrapes one of their listed relatives instead — giving you the **best possible chance of finding a valid number**.

---

## What this workflow does

- Pulls lead data (first name, last name, and custom search URL) from a **Google Sheet**
- Sends the TruePeopleSearch search URL to **Zyte’s Scraping API** to retrieve search results HTML
- Parses the first matching profile link from the results (by full name &gt; first name &gt; last name)
- Visits that profile page and extracts:
  - Full Name
  - Age / Date of Birth
  - Primary Phone Number
  - Other Phone Numbers
  - Email Addresses
  - Current Address
- If no phone numbers are found:
  - Detects a **relative's profile link**
  - Scrapes the relative’s profile for fallback contact data
- Writes all scraped information (or empty fields) back into the **same row** in Google Sheets

---

## You’ll need

- **n8n (self-hosted or cloud)**  
  To run and automate the workflow

- **Zyte Scraping API**  
  A [Zyte](https://www.zyte.com/) account + API key to access their `/extract` endpoint  
  _(Use HTTP Basic Auth in the HTTP Request node)_

- **Google Sheets integration**  
  Your own lead sheet with headers like:
  - `row_number` (used to write back to the correct row)
  - `First Name`
  - `Last Name`
  - `SearchURL` (Search by Address)

- **Basic JavaScript familiarity (optional)**  
  To tweak the HTML parsing logic for profile structure changes

---

## Example Google Sheet  
Use this Google Sheet as a template for your inputs and outputs:  
👉 [TruePeopleSearch Lead Template (Google Sheet)](https://docs.google.com/spreadsheets/d/1CkMMdoIYNTaA8tIvAXzjw9YeqkXfYD8qfkeACosuibo/edit#gid=1416164772)

---

## Disclaimer  
- TruePeopleSearch may change its structure or block heavy scraping — always test at small scale first  
- This workflow is built to **simulate human behavior** via Zyte’s smart rendering — scraping is still subject to site limitations  
- Use ethically and within your local data usage laws

---

## Categories  
`Data Enrichment` · `Scraping Automation` · `Lead Generation` · `Skip Tracing`

---

*Feel free to drop me an email if you need help with building a custom scraping automation for your business at* [*sajid@marketingbyprof.com*](mailto:sajid@marketingbyprof.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Webhook, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
