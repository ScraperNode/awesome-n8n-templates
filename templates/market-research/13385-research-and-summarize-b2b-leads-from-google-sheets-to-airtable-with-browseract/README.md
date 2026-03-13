# 📊 Research and summarize B2B leads from Google Sheets to Airtable with BrowserAct

> ⚡ **110 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Automate B2B lead research from Google Sheets to Airtable With BrowserAct

This workflow automates the time-consuming process of B2B market research. It takes a list of company website URLs from a Google Sheet, uses BrowserAct to scrape their profiles and news sections, analyzes the data using AI to determine strategic focus and key activities, and saves a comprehensive executive summary into an Airtable database.

## Target Audience

Sales operations managers, SDRs (Sales Development Representatives), market researchers, and venture capital analysts who need to process large volumes of company data efficiently.

## How it works

1. **Ingest Data**: The workflow retrieves a list of target company URLs from a **Google Sheet**.
2. **Scrape Content**: It loops through each URL and triggers **BrowserAct** (using the "B2B Contact Research" template) to scrape company profiles, about pages, and news sections.
3. **Analyze & Stage**: An **AI Agent** (using OpenRouter/GPT-5) processes the raw scraped text to identify whether it is news or profile data, extracting key insights like strategic focus and recent updates. This raw analysis is staged back into the Google Sheet.
4. **Synthesize**: The workflow retrieves the staged data and aggregates it.
5. **Final Summary**: A second **AI Agent** compiles all data points into a cohesive "Research Record," writing a high-impact executive summary and formatting notes with Markdown.
6. **Database Entry**: The final structured data (Name, Notes, Strategic Focus) is created as a new record in **Airtable**.

## How to set up

1. **Configure Credentials**: Connect your **BrowserAct**, **Google Sheets**, **Airtable**, and **OpenRouter** accounts in n8n.
2. **BrowserAct Template**: Ensure you have the **B2B Contact Research** template saved in your BrowserAct account.
3. **Prepare Google Sheet**: Create a Google Sheet with a tab named "DataBase". Add the headers listed below. Populate the `Page URL` column with the companies you want to research.
4. **Configure Nodes**:
* Open the Google Sheets nodes and select your file.
* Open the Airtable node and select your Base and Table.


5. **Run**: Execute the workflow to start processing the list.

## Google Sheet Headers

To use this workflow, create a Google Sheet with the following headers:

* Page URL (Input - put your links here)
* Page Data (Output - leave blank, populated by bot)
* row_number (Output - leave blank, populated by bot)

## Requirements

* **BrowserAct** account with the **B2B Contact Research** template.
* **Google Sheets** account.
* **Airtable** account.
* **OpenRouter** account (or credentials for a specific LLM like GPT-4o or Gemini).

## How to customize the workflow

1. **Change the CRM**: Replace the final **Airtable** node with **HubSpot**, **Salesforce**, or **Pipedrive** nodes to inject research directly into your CRM deals.
2. **Adjust AI Prompts**: Modify the system prompt in the "Analyze the Company Page" agent to focus on specific criteria relevant to your business (e.g., look specifically for "pricing models" or "hiring trends").
3. **Email Alerts**: Add a **Gmail** or **Slack** node at the end of the workflow to notify your sales team immediately when a high-value prospect has been researched.

## Need Help?

* [How to Find Your BrowserAct API Key & Workflow ID](https://www.youtube.com/watch?v=pDjoZWEsZlE)
* [How to Connect n8n to BrowserAct ](https://www.youtube.com/watch?v=RoYMdJaRdcQ)
* [How to Use & Customize BrowserAct Templates](https://www.youtube.com/watch?v=CPZHFUASncY)
---
### Workflow Guidance and Showcase Video

* #### [How to Structure Airtable for Automated Company Research (n8n Tutorial)](https://youtu.be/mLCuN9Of6EM)

## 🔗 Nodes Used

Airtable, Google Sheets, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
