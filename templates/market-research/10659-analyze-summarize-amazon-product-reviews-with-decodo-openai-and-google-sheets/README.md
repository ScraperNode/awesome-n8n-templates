# 📊 Analyze & summarize Amazon product reviews with Decodo, OpenAI and Google Sheets

> ⚡ **539 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Disclaimer

Please note - This workflow is only available on n8n self-hosted as it’s making use of the community node for the Decodo Web Scraping

![Analyze & Summarize Amazon Product Reviews with Decodo, OpenAI and Google Sheets](fileId:3311)

This n8n workflow automates the process of scraping, analyzing, and summarizing Amazon product reviews using **Decodo’s Amazon Scraper**, **OpenAI GPT-4.1-mini**, and **Google Sheets** for seamless reporting.

It turns messy, unstructured customer feedback into actionable product insights — all without manual review reading.


## Who this is for

This workflow is designed for:

* **E-commerce product managers** who need consolidated insights from hundreds of reviews.
* **Brand analysts and marketing teams** performing sentiment or trend tracking.
* **AI and data engineers** building automated review intelligence pipelines.
* **Sellers and D2C founders** who want to monitor customer satisfaction and pain points.
* **Product researchers** performing market comparison or competitive analysis.


## What problem this workflow solves

Reading and analyzing hundreds or thousands of Amazon reviews manually is inefficient and subjective.

This workflow automates the entire process — from **data collection** to **AI summarization** — enabling teams to instantly identify customer pain points, trends, and strengths.

Specifically, it:

* Eliminates manual review extraction from product pages.
* Generates **comprehensive and abstract summaries** using GPT-4.1-mini.
* Centralizes structured insights into **Google Sheets** for visualization or sharing.
* Helps track product sentiment and emerging issues over time.


## What this workflow does

Here’s a breakdown of the automation process:

1. **Set Input Fields**
   Define your Amazon product URL, geo region, and desired file name.

2. **Decodo Amazon Scraper**
   Fetches real-time product reviews from the Amazon product page, including star ratings and AI-generated summaries.

3. **Extract Reviews Node**
   Extracts raw customer reviews and Decodo’s AI summary into a structured JSON format.

4. **Perform Review Analysis (GPT-4.1-mini)**
   Uses OpenAI GPT-4.1-mini to create two key summaries:

   * **Comprehensive Review:** A detailed summary that captures sentiment, recurring themes, and product pros/cons.
   * **Abstract Review:** A concise executive summary that captures the overall essence of user feedback.

5. **Persist Structured JSON**
   Saves the raw and AI-enriched data to a local file for reference.

6. **Append to Google Sheets**
   Uploads both the original reviews and AI summaries into a Google Sheet for ongoing analysis, reporting, or dashboard integration.

**Outcome:**
You get a structured, AI-enriched dataset of Amazon product reviews — summarized, searchable, and easy to visualize.


## Setup

### Pre-requisite

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

Please make sure to install the n8n custom node for Decodo.

![Install Decodo Community Node](fileId:3255)

![Decodo Community Node](fileId:3256)

### Step 1 — Import the Workflow

1. Open n8n and import the JSON workflow template.
2. Ensure the following credentials are configured:

   * **Decodo Credentials account** → Decodo API Key
   * **OpenAI account** → OpenAI API Key
   * **Google Sheets account** → Connected via OAuth

### Step 2 — Input Product Details

In the **Set node**, replace:

* `amazon_url` → your product link (e.g., `https://www.amazon.com/dp/B0BVM1PSYN`)
* `geo` → your region (e.g., `US`, `India`)
* `file_name` → output file name (optional)

### Step 3 — Connect Google Sheets

Link your desired Google Sheet for data storage. Ensure the sheet columns match:

* `product_reviews`
* `all_reviews`

### Step 4 — Run the Workflow

Click **Execute Workflow**.
Within seconds, your Amazon product reviews will be fetched, summarized by AI, and logged into Google Sheets.


## How to customize this workflow

You can tailor this workflow for different use cases:

* **Add Sentiment Analysis** — Add another GPT node to classify reviews as positive, neutral, or negative.
* **Multi-Language Reviews** — Include a language detection node before summarization.
* **Send Alerts** — Add a Slack or Gmail node to notify when negative sentiment exceeds a threshold.
* **Store in Database** — Replace Google Sheets with MySQL, Postgres, or Notion nodes.
* **Visualization Layer** — Connect your Google Sheet to Looker Studio or Power BI for dynamic dashboards.
* **Alternative AI Models** — Swap GPT-4.1-mini with Gemini 1.5 Pro, Claude 3, or Mistral for experimentation.

## Summary

This workflow transforms the tedious process of reading hundreds of Amazon reviews into a **streamlined AI-powered insight engine**.

By combining **Decodo’s scraping precision**, **OpenAI’s summarization power**, and **Google Sheets’ accessibility**, it enables continuous review monitoring.

In one click, it delivers **comprehensive and abstract AI summaries**, ready for your next product decision meeting or market strategy session.

## 🔗 Nodes Used

Function, Google Sheets, OpenAI Chat Model, Read/Write Files from Disk, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
