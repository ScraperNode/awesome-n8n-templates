# 📊 Archive trending TikTok hashtags using TikTok, Airtable, and Apify

> ⚡ **468 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

## Archive Trending TikTok Hashtags to Airtable with Apify
This template uses a community node (`@apify/n8n-nodes-apify`). It will not work without the required node installed.

### Who it's for
**Social Media Managers & Content Creators**
Discover relevant hashtags and build content calendars based on real trends.
**Marketing & Brand Strategists**
Track cultural shifts and find opportunities by understanding regional audience interests.
**Data Analysts**
Create a dataset for analyzing hashtag trends, virality, and performance over time.

### What it does
This workflow automates trend discovery and data collection from TikTok into Airtable.
* **Schedule**: Triggers automatically once a month.
* **Scrape**: Runs an Apify Actor to scrape TikTok’s top 100 trending hashtags for a specified country (default is US).
* **Retrieve**: Fetches the dataset with hashtag metrics after scraping completes.
* **Process & Load**: Splits the dataset and saves each hashtag as a new record in Airtable with relevant details.

### How to set it up
**1. Install the Community Node**
Go to `Settings; Community Nodes` on your n8n instance and install `@apify/n8n-nodes-apify`.

**2. Prepare Airtable**
Create a base with a table named `Trending Hashtags`:
* ID
* Name
* Country
* Industry
* Date Added
* Publish Count
* Video Views
* Rank
* Status


**3. Add Credentials**
Add your Apify and Airtable credentials in n8n.

**4. Configure Scraper (Optional)**
Open the `1. Run TikTok Hashtag Scraper` node.
In the **Custom Body**, you can adjust:
  * `country_code` (e.g., `"US"` to `"GB"`)
  * `top100_period` (e.g., `"30"` to `"7"`)


**5. Configure Airtable Node**
Open the `4. Save Hashtag to Airtable` node.
Select the correct Airtable Base and the `Trending Hashtags` table.

**6. Activate Workflow**
Save and activate the workflow. It will now run automatically every month.

### Requirements
* Installed community node: `@apify/n8n-nodes-apify`
* Apify account
* Airtable account with a structured base

### How to customize the workflow
**Change Schedule**
Modify the `Start: Monthly Schedule` node to run weekly or on another interval.
**Add Notifications**
Attach a Slack or Discord node after the `4. Save Hashtag to Airtable` node to alert your team when new data is added.
**Filter Hashtags**
Use a `Filter` node after `3. Split Hashtags into Items` to only save hashtags that meet specific conditions (e.g., over 1M video views).

## 🔗 Nodes Used

Airtable, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
