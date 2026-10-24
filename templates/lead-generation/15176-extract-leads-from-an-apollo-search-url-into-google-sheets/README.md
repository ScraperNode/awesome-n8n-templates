# 🎣 Extract leads from an Apollo search URL into Google Sheets

> ⚡ **307 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Stop manually downloading CSVs or risking account bans with sketchy UI scrapers! This workflow bridges the gap between Apollo.io's powerful search filters and your Google Sheets database using Apollo's official REST API. 

Perfect for **Sales Development Reps (SDRs)**, **Growth Marketers**, and **B2B Founders**, this plug-and-play workflow turns a standard Apollo search URL into an automated lead-generation machine.

## 🚀 What This Workflow Does
1. **Smart URL Conversion:** You simply paste a standard Apollo.io search URL into the workflow. A custom Code Node automatically parses all your UI filters (job titles, locations, employee count, tags) and converts them into a clean JSON payload for the Apollo API.
2. **Official API Scraping:** Uses the `/v1/mixed_people/search` endpoint to fetch the targeted contacts safely and reliably.
3. **Smart Pagination & Rate Limiting:** Automatically loops through the search results page-by-page. It includes a built-in 2-second wait timer to ensure you never hit Apollo's API rate limits.
4. **Direct Google Sheets Sync:** Extracts the exact data you need (First Name, Last Name, Title, Contact/Company LinkedIn, Location, Company Details, Phone Numbers) and appends it directly to your spreadsheet.

## 🎯 Who is this for?
* **Sales Teams:** Build targeted lead lists automatically while you sleep.
* **Agencies:** Scrape and deliver customized lead lists directly into shared client spreadsheets.
* **Growth Hackers:** Bypass the standard CSV export limits by leveraging API pagination.

## ⚙️ How It Works (Node Breakdown)
* **Set Node (Input):** This is where you paste your Apollo search URL and define which page to start scraping from.
* **Code Node (Filter Builder):** A production-level JavaScript parser that translates URL query parameters into API-supported arguments, automatically dropping unsupported UI-only parameters.
* **HTTP Request:** Connects to the Apollo API using your personal API key.
* **Set & If Nodes (Pagination Logic):** Calculates current and total pages, controlling the loop to keep fetching leads until the final page is reached.
* **Google Sheets Node:** Maps the structured JSON output into clean rows and columns.

## 🛠️ Step-by-Step Setup Guide

### 1. Get Your Credentials
* **Apollo API Key:** Log into your Apollo.io account, navigate to **Settings &gt; Integrations &gt; API**, and generate a new API Key.
* **Google Sheets:** Ensure you have an active Google Sheets credential set up in your n8n workspace.

### 2. Configure the Workflow
1. Open the **Fetch Leads (Apollo)** HTTP Request node. Under `Headers`, replace the default `APOLLO_API_KEY` value with your actual API key.
2. Open the **Write to Google Sheets** node, select your Google Sheets credential, and point it to your specific Document and Sheet. (Make sure your sheet has headers like *First Name, Last Name, Title, contact Linkedin*, etc., to match the workflow mapping).
3. Open the **Apollo Search Input** node and paste your target Apollo Search URL into the `url` field. You can also specify the `start_page` (default is 1).

### 3. Run & Automate!
Click **Execute Workflow**. The workflow will fetch the first page, write the leads to your sheet, pause for 2 seconds to respect rate limits, and loop until all leads are extracted.

*(Note: To restrict how many pages the workflow scrapes, simply edit the `total_pages` assignment in the "Extract Pagination Info" node to a fixed number!)*

## 📬 Contact Information
For Help and queries, contact

* **LinkedIn:** [Salman Mehboob](https://www.linkedin.com/in/salman-mehboob-pro/)
* **Email:**[salmanmehboob1947@gmail.com](mailto:salmanmehboob1947@gmail.com)

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
