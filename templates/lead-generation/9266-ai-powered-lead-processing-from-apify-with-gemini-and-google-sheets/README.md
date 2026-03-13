# 🎣 AI-powered lead processing from Apify with Gemini and Google Sheets

> ⚡ **247 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## AI-Powered Lead Scraping Automation using APIFY Scraper and Gemini Filtering to Google Sheets

This is a fully automated, end-to-end pipeline designed to solve the challenge of inconsistent and low-quality lead data from large-scale scraping operations. The system programmatically fetches raw lead information from sources like Apollo or via Apify, processes it through an intelligent validation layer, and delivers a clean, deduplicated, and ready-to-use dataset directly into Google Sheets. By integrating Google Gemini for data cleansing, it moves beyond simple presence checks to enforce data hygiene and standardization, ensuring that sales teams only engage with properly formatted and complete leads. This automation eliminates hours of manual data cleaning, accelerates the speed from lead acquisition to outreach, and significantly improves the integrity of the sales pipeline.

### Features

-   **Batch Processing**: Systematically processes up to 1000 leads per batch and automatically loops through the entire dataset. This ensures stable, memory-efficient operation even with tens of thousands of scraped contacts.
-   **AI Validation**: Google Gemini acts as a data quality gatekeeper. It validates the presence and plausible format of critical fields (e.g., First Name, Company Name) and cleanses data by correcting common formatting issues.
-   **Smart Deduplication**: Before appending a new lead, the system cross-references its email address against the entire Google Sheet to prevent duplicate entries, ensuring a single source of truth.
-   **Auto Lead IDs**: Generates a unique, sequential ID for every new lead in the format `AP-DDMMYY-xxxx`. This provides a consistent reference key for tracking and CRM integration.
-   **Data Quality Reports**: Delivers real-time operational visibility by sending a concise summary to a Telegram channel after each batch, detailing success, warning, and error counts.
-   **Rate Limiting**: Incorporates a 30-second delay between batches to respect Google Sheets API limits, preventing throttling and ensuring reliable, uninterrupted execution.

#### How It Works

1.  The workflow is initiated by an external trigger, such as a webhook, carrying the raw scraped data payload.
2.  It authenticates and fetches the complete list of leads from the Apify or Apollo API endpoint.
3.  The full list is automatically partitioned into manageable batches of 1000 leads for efficient processing.
4.  Each lead is individually passed to the Gemini AI Agent, which validates that required fields like Name, Email, and Company are present and correctly formatted.
5.  Validated leads are assigned a unique Lead ID, and all data fields are standardized for consistency.
6.  The system performs a lookup in the target Google Sheet to confirm the lead's email does not already exist.
7.  Clean, unique leads are appended as a new row to the designated spreadsheet.
8.  A completion notice is sent via the Telegram Bot, summarizing the batch results with clear statistics.

### Requirements

-   Apify/Apollo API access credentials.
-   Google Cloud project with OAuth2 credentials for Google Sheets API access.
-   A configured Telegram Bot with its API Token and a target Chat ID.
-   A Google Gemini API Key for data validation and cleansing.

This system is ideal for sales and marketing operations teams managing high-volume lead generation campaigns, providing automated data quality assurance and accelerating pipeline development.

## 🔗 Nodes Used

HTTP Request, Telegram, Execute Workflow Trigger, AI Agent, Simple Memory, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
