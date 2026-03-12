# 🎣 Scrape jobs from Indeed, LinkedIn & more with RapidAPI to Google Sheets

> ⚡ **2,363 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Active Job Scraper Workflow Using RapidAPI Jobs Search Realtime Data API

This powerful **Active Job Scraper** workflow uses the [**RapidAPI Jobs Search Realtime Data API**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data) to fetch real-time job listings from leading job boards like **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**.

---

## Overview

Leverage the [**Jobs Search Realtime Data API on RapidAPI**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data) to gather fresh job data from **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**. This n8n workflow lets you:

- Search jobs by location, keywords, job type, and remote options across these major platforms.
- Collect detailed job information including descriptions and metadata.
- Automatically save the scraped results into Google Sheets for easy tracking and analysis.

---

## Why Choose This Workflow?

By integrating the [**RapidAPI Jobs Search Realtime Data API**](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data), you can scrape job listings from the most popular job sites—**Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**—all in one place. Customize your search parameters and get results tailored to your needs.

---

## Workflow Components

| Node             | Description                                                     |
|------------------|-----------------------------------------------------------------|
| Form Trigger     | Collects input such as location, search term, job type, and remote status. |
| HTTP Request    | Calls the RapidAPI Jobs Search Realtime Data API to fetch jobs from **Indeed**, **LinkedIn**, **ZipRecruiter**, and **Glassdoor**. |
| Code Node       | Processes and formats the API response data.                    |
| Google Sheets   | Appends the extracted job listings to your spreadsheet.         |
---
### 🔑 How to Get API Key from RapidAPI [Jobs Search Realtime Data API](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-datao)

Follow these steps to get your API key and start using it in your workflow:

1. **Visit the API Page**  
   [👉 Click here to open Jobs Search Realtime Data API on RapidAPI](https://rapidapi.com/skdeveloper/api/jobs-search-realtime-data)

2. **Log in or Sign Up**  
   - Use your **Google**, **GitHub**, or email account to sign in.  
   - If you're new, complete a quick sign-up.

3. **Subscribe to a Pricing Plan**  
   - Go to the **Pricing** tab on the API page.  
   - Select a plan (free or paid, depending on your needs).  
   - Click **Subscribe**.

4. **Access Your API Key**  
   - Navigate to the **Endpoints** tab.  
   - Look for the `X-RapidAPI-Key` under **Request Headers**.  
   - Copy the value shown — this is your API key.

5. **Use the Key in Your Workflow**  
   - In your n8n workflow (HTTP Request node), replace:
     ```text
     "x-rapidapi-key": "your key"
     ```
     with:
     ```text
     "x-rapidapi-key": "YOUR_ACTUAL_API_KEY"
     ```

---

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

Job boards are notoriously hard to scrape — CAPTCHAs, rate limits, constantly changing layouts. [ScraperNode](https://scrapernode.com) has maintained scrapers for [Indeed jobs](https://scrapernode.com/indeed/scrapers/jobs), [Glassdoor reviews](https://scrapernode.com/glassdoor/scrapers/reviews), and [Glassdoor jobs](https://scrapernode.com/glassdoor/scrapers/jobs) that handle all of that for you.
