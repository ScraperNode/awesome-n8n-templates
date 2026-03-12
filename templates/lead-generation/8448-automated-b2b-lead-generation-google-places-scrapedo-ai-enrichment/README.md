# 🎣 Automated B2B lead generation: Google Places, Scrape.do & AI enrichment

> ⚡ **2,284 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Automated B2B Lead Generation: Google Places, Scrape.do & AI Enrichment


 This workflow is a powerful, fully automated B2B lead generation engine. It starts by finding businesses on Google Maps based on your criteria (*e.g., "dentists" in "Istanbul"*), assigns a quality score to each, and then uses **[Scrape.do](https://scrape.do?fpr=99aed)** to reliably access their websites. Finally, it leverages an AI agent to extract valuable contact information like emails and social media profiles. The final, enriched data is then neatly organized and saved directly into a Google Sheet.

This template is built for reliability, using **[Scrape.do](https://scrape.do?fpr=99aed)** to handle the complexities of web scraping, ensuring you can consistently gather data without getting blocked.

---

### 🚀 What does this workflow do?

*   Automatically finds businesses using the **Google Places API** based on a category and location you define.
*   Calculates a `leadScore` for each business based on its rating, website presence, and operational status to **prioritize high-quality leads**.
*   **Filters out low-quality leads** to ensure you only focus on the most promising prospects.
*   Reliably scrapes the website of each high-quality lead using **[Scrape.do](https://scrape.do?fpr=99aed)** to bypass common blocking issues and retrieve the raw HTML.
*   Uses an **AI Agent (OpenAI)** to intelligently parse the website's HTML and extract hard-to-find contact details (emails, social media links, phone numbers).
*   **Saves all enriched lead data** to a Google Sheet, creating a clean, actionable list for your sales or marketing team.
*   **Runs on a schedule**, continuously finding new leads without any manual effort.

### 🎯 Who is this for?

*   **Sales & Business Development Teams:** Automate prospecting and build targeted lead lists.
*   **Marketing Agencies:** Generate leads for clients in specific industries and locations.
*   **Freelancers & Consultants:** Quickly find potential clients for your services.
*   **Startups & Small Businesses:** Build a customer database without spending hours on manual research.

### ✨ Benefits

*   **Full Automation:** Set it up once and let it run on a schedule to continuously fill your pipeline.
*   **AI-Powered Enrichment:** Go beyond basic business info. Get actual emails and social profiles that aren't available on Google Maps.
*   **Reliable Website Access:** Leverages **[Scrape.do](https://scrape.do?fpr=99aed)** to handle proxies and prevent IP blocks, ensuring consistent data gathering from target websites.
*   **High-Quality Leads:** The built-in scoring and filtering system ensures you don't waste time on irrelevant or incomplete listings.
*   **Centralized Database:** All your leads are automatically organized in a single, easy-to-access Google Sheet.

### ⚙️ How it Works

1.  **Schedule Trigger:** The workflow starts automatically at your chosen interval (*e.g., daily*).
2.  **Set Parameters:** You define the business type (`searchCategory`) and location (`locationName`) in a central `Set` node.
3.  **Find Businesses:** It calls the **Google Places API** to get a list of businesses matching your criteria.
4.  **Score & Filter:** A custom `Function` node scores each lead. An `IF` node then separates high-quality leads from low-quality ones.
5.  **Loop & Enrich:** The workflow processes each high-quality lead one by one.
    *   It uses a scraping service (**[Scrape.do](https://scrape.do?fpr=99aed)**) to reliably fetch the lead's website content.
    *   An **AI Agent (OpenAI)** analyzes the website's footer to find contact and social media links.
6.  **Save Data:** The final, enriched lead information is appended as a new row in your Google Sheet.

### 📋 n8n Nodes Used

*   `Schedule Trigger`
*   `Set`
*   `HTTP Request` (for Google Places & [Scrape.do](https://scrape.do?fpr=99aed))
*   `Function`
*   `If`
*   `Split in Batches` (Loop Over Items)
*   `HTML`
*   `Langchain Agent` (with OpenAI Chat Model & Structured Output Parser)
*   `Google Sheets`

### 🔑 Prerequisites

*   An active n8n instance.
*   **Google Cloud Project** with the **Places API** enabled.
*   **Google Places API Key**, stored in n8n's Header Auth credentials.
*   **A [Scrape.do](https://scrape.do?fpr=99aed) Account and API Token**. This is essential for reliably scraping websites without your n8n server's IP getting blocked.
*   **OpenAI Account & API Key** for the AI-powered data extraction.
*   **Google Account** with access to Google Sheets.
*   **Google Sheets API Credentials (OAuth2)** configured in n8n.
*   **A Google Sheet** prepared with columns to store the lead data (*e.g., BusinessName, Address, Phone, Website, Email, Facebook, etc.*).

### 🛠️ Setup

1.  **Import the workflow** into your n8n instance.
2.  **Configure Credentials:** Create and/or select your credentials for:
    *   **Google Places API:** In the `2. Find Businesses (Google Places)` node, select your Header Auth credential containing your API key.
    *   **[Scrape.do](https://scrape.do?fpr=99aed):** In the `6a. Scrape Website HTML` node, configure credentials for your [Scrape.do](https://scrape.do?fpr=99aed) account.
    *   **OpenAI:** In the `OpenAI Chat Model` node, select your OpenAI credentials.
    *   **Google Sheets:** In the `7. Save to Google Sheets` node, select your Google Sheets OAuth2 credentials.
3.  **Define Your Search:** In the `1. Set Search Parameters` node, update the `searchCategory` and `locationName` values to match your target market.
4.  **Link Your Google Sheet:** In the `7. Save to Google Sheets` node, select your Spreadsheet and Sheet Name from the dropdown lists. Map the incoming data to the correct columns in your sheet.
5.  **Set Your Schedule:** Adjust the `Schedule Trigger` to run as often as you like (*e.g., once a day*).
6.  **Activate the workflow!** Your automated lead generation will begin on the next scheduled run.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
