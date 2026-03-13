# 🎣 Monitor Clutch categories for new agencies with BrowserAct, Gemini, and Slack

> ⚡ **51 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Monitor Clutch categories for new agencies to Slack With BrowserAct and Gemini

## Introduction

This workflow automates the discovery of new B2B service providers entering the market. It scrapes a specific category on Clutch.co weekly, standardizes the data using AI, and compares it against a historical database to identify only the fresh "new entrants." These leads are then sent to Slack as a "Hot Alert."

## Target Audience

Sales Development Representatives (SDRs), partnership managers, and lead generation agencies looking for new agencies or service providers before their competitors find them.

## How it works

1. **Scheduling:** A **Weekly Trigger** initiates the scan to ensure regular monitoring of the market.
2. **Targeting:** A **Set** node defines the specific Clutch category URL to monitor (e.g., `https://clutch.co/developers`).
3. **Data Extraction:** The **BrowserAct** node runs the "The New Entrant Asset Finder" template.  It navigates to the target category and scrapes the current list of companies.
4. **Data Cleaning:** An **AI Agent** (using OpenRouter/Gemini) processes the raw scraped data. It fixes formatting issues, such as converting "$10,000+" to integers and splitting "City, Country" strings into separate fields.
5. **Staging:** The cleaned data is written to a temporary "Second Extraction" sheet in **Google Sheets**.
6. **Change Detection:** The workflow retrieves the *previous* week's data ("Database") and the *current* week's data.  A second **AI Agent** compares the two lists to identify companies that exist in the new scan but not the old one.
7. **Notification:** If new companies are found, a **Slack** node posts a formatted alert with details like "Company Name," "Rate," and "Website."
8. **Database Update:** The workflow clears the old database and replaces it with the latest scan, establishing a new baseline for the next week's comparison.

## How to set up

1. **Configure Credentials:** Connect your **BrowserAct**, **OpenRouter**, **Google Sheets**, and **Slack** accounts in n8n.
2. **Prepare BrowserAct:** Ensure the **The New Entrant Asset Finder** template is active in your BrowserAct library.
3. **Prepare Google Sheet:** Create a Google Sheet with two tabs:
* `Database (First Extarction)`
* `Second Extraction`


4. **Define Target:** Open the **Clutch Category Link** node and paste the URL of the Clutch category you want to track.
5. **Configure IDs:** Update the **Google Sheets** nodes to point to your specific spreadsheet file and the respective tabs mentioned above.

## Google Sheet Headers

To use this workflow, ensure your Google Sheet tabs use the following headers:

* `company_name`
* `website_url`
* `min_project_value_usd`
* `hourly_rate_low`
* `hourly_rate_high`
* `employees_range`
* `city`
* `country`
* `short_description`

## Requirements

* **BrowserAct Account:** Required for scraping. Template: **The New Entrant Asset Finder**.
* **OpenRouter Account:** Required for cleaning data and detecting changes.
* **Google Sheets:** Acts as the historical database.
* **Slack Account:** Used for receiving lead alerts.

## How to customize the workflow

1. **Change the Source:** Modify the **Clutch Category Link** and the **BrowserAct** template to scrape a different directory, such as G2, Capterra, or Upwork.
2. **Filter Logic:** Update the system prompt in the **Detect data changes** AI node to only alert on companies with a specific hourly rate (e.g., &gt;$100/hr) or employee count.
3. **Enrichment:** Add a **Clearbit** or **Apollo** node after the change detection step to find email addresses for the new companies before sending them to Slack.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)

---
### Workflow Guidance and Showcase Video

* #### [AI-Powered Lead Finder: Target New & Growing Companies (n8n + AI Tutorial)](https://youtu.be/LTNHYvObTtc)

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
