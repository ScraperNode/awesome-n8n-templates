# 📊 Asynchronous bulk web scraping with Bright Data & webhook notifications

> ⚡ **3,486 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

### Who this is for
The Async Structured Bulk Data Extract with Bright Data Web Scraper workflow is designed for data engineers, market researchers, competitive intelligence teams, and automation developers who need to programmatically collect and structure high-volume data from the web using Bright Data's dataset and snapshot capabilities.

This workflow is built for:

1. **Data Engineers** - Building large-scale ETL pipelines from web sources

2. **Market Researchers** - Collecting bulk data for analysis across competitors or products

3. **Growth Hackers & Analysts** - Mining structured datasets for insights

4. **Automation Developers** - Needing reliable snapshot-triggered scrapers

5. **Product Managers** - Overseeing data-backed decision-making using live web information

### What problem is this workflow solving?
Web scraping at scale often requires asynchronous operations, including waiting for data preparation and snapshots to complete. Manual handling of this process can lead to timeouts, errors, or inconsistencies in results. 

This workflow automates the entire process of submitting a scraping request, waiting for the snapshot, retrieving the data, and notifying downstream systems all in a structured, repeatable fashion.

It solves:

1. Asynchronous snapshot completion handling

2. Reliable retrieval of large datasets using Bright Data

3. Automated delivery of scraped results via webhook

4. Disk persistence for traceability or historical analysis

### What this workflow does
1. **Set Bright Data Dataset ID & Request URL**: Takes in the Dataset ID and Bright Data API endpoint used to trigger the scrape job

2. **HTTP Request**: Sends an authenticated request to the Bright Data API to start a scraping snapshot job

3. **Wait Until Snapshot is Ready**: Implements a loop or wait mechanism that checks snapshot status (e.g., polling every 30 seconds) until completion i.e ready state

4. **Download Snapshot**: Downloads the structured dataset snapshot once ready

5. **Persist Response to Disk**: Saves the dataset to disk for archival, review, or local processing

6. **Webhook Notification**: Sends the final result or a summary of it to an external webhook

### Setup

- Sign up at [Bright Data](https://brightdata.com/).
- Navigate to Proxies & Scraping and create a new Web Unlocker zone by selecting Web Unlocker API under Scraping Solutions.
- In n8n, configure the Header Auth account under Credentials (Generic Auth Type: Header Authentication).
![Header Authentication.png](fileId:1266)
The Value field should be set with the 
**Bearer XXXXXXXXXXXXXX**. The XXXXXXXXXXXXXX should be replaced by the Web Unlocker Token.
- Update the **Set Dataset Id, Request URL** for setting the brand content URL.
- Update the Webhook HTTP Request node with the Webhook endpoint of your choice.

### How to customize this workflow to your needs

1. **Polling Strategy** : Adjust polling interval (e.g., every 15–60 seconds) based on snapshot complexity
2. **Input Flexibility** : Accept datasetId and request URL dynamically from a webhook trigger or input form
3. **Webhook Output** : Send notifications to -

	- Internal APIs – for use in dashboards

	- Zapier/Make – for multi-step automation

4. **Persistence**
	- Save output to:

		- Remote FTP or SFTP storage
		- Amazon S3, Google Cloud Storage etc.

## 🔗 Nodes Used

Function, HTTP Request, Read/Write Files from Disk

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
