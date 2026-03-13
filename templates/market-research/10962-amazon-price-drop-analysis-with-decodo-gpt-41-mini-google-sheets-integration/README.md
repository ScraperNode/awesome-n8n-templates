# 📊 Amazon price drop analysis with Decodo, GPT-4.1-mini & Google Sheets integration

> ⚡ **182 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

This workflow automatically scrapes Amazon price-drop data via Decodo, extracts structured product details with OpenAI, generates summaries and sentiment insights for each item, and saves everything to Google Sheets — creating a fully automated price-intelligence pipeline.

## Disclaimer

Please note - This workflow is only available on n8n self-hosted as it’s making use of the community node for the Decodo Web Scraping

![Extract, Summarize, Sentiment Analysis of Amazon Price Drops via Decodo](fileId:3407)

## Who this is for

This workflow is designed for e-commerce analysts, product researchers, price-tracking teams, and affiliate marketers who want to:

- Monitor daily Amazon product price drops automatically.
- Extract key information such as product name, price, discount, and links.
- Generate AI-driven summaries and sentiment insights on the latest deals.
- Store all structured data directly in Google Sheets for trend analysis and reporting.

## What problem this workflow solves

This workflow solves the following:

- Eliminates the need for manual data scraping or tracking.
- Turns unstructured web data into structured datasets.
- Adds AI-generated summaries and sentiment analysis for smarter decision-making.
- Enables automated, daily price intelligence tracking across multiple product categories.


## What this workflow does

This automation combines Decodo’s web scraping, OpenAI GPT-4.1-mini, and Google Sheets to deliver an end-to-end price intelligence system.

**Trigger & Setup**  
   - Manually start the workflow.
   - Input your price-drop URL (default: [CamelCamelCamel Daily Drops](https://camelcamelcamel.com/top_drops?t=daily)).

**Web Scraping via Decodo**  
   - Decodo scrapes the Amazon price-drop listings and extracts product details (title, price, savings, product link).

**LLM-Powered Data Structuring**  
   - The extracted content is sent to OpenAI GPT-4.1-mini to format and clean the output into structured JSON fields.

**Loop & Deep Analysis**  
   - Each product URL is revisited by Decodo for content enrichment.
   - The AI performs two analyses per product:
     - **Summarization:** Generates a comprehensive summary of the product.
     - **Sentiment Analysis:** Detects tone (positive/neutral/negative), sentiment score, and key topics.

**Aggregation & Storage**  
   - All enriched results are merged and aggregated.
   - Structured data is automatically appended to a connected Google Sheet.

**End Result:**  

A ready-to-use dataset showing each price-dropped product, its summary, sentiment polarity, and key highlights updated in real time.

## Setup

#### Pre-requisite

Please make sure to install the n8n custom node for Decodo.

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

![Install Community Nodes](fileId:3341)

![Install Decodo Community Node](fileId:3340)

### Import and Connect Credentials
Import the workflow into your **n8n self-hosted** instance.

Connect:
- **OpenAI API (GPT-4.1-mini)** → for summarization and sentiment analysis  
- **Decodo API** → for real-time price-drop scraping  
- **Google Sheets OAuth2** → to save structured results  

### Configure Input Fields
In the **“Set input fields”** node:
- Update the `price_drop_url` to your target URL (e.g., `https://camelcamelcamel.com/top_drops?t=weekly`).

### Run the Workflow
Click **“Execute Workflow”** or schedule it to run daily to automatically fetch and analyze new price-drop listings.

### Check Output
- The aggregated data is saved to a **Google Sheet** (`Pricedrop Info`).
- Each record contains:
  - Product name  
  - Current price and savings  
  - Product link  
  - AI-generated summary  
  - Sentiment classification and score  

##  How to customize this workflow

### Change Source
- Replace the `price_drop_url` with another **CamelCamelCamel** or **Amazon Deals** URL.
- Add multiple URLs and loop through them for category-based price tracking.

### Modify Extraction Schema
- In the **Structured Output Parser**, modify the JSON schema to include fields like:
  - `category`, `brand`, `rating`, or `availability`.

### Tune AI Prompts
- Edit the Summarize Content and Sentiment Analysis nodes to:
  - Add tone analysis (e.g., promotional vs. factual).
  - Include competitive product comparison.

### Integrate More Destinations
- Replace Google Sheets with:
  - **Airtable** → for no-code dashboards.  
  - **PostgreSQL/MySQL** → for large-scale storage.  
  - **Notion or Slack** → for instant price-drop alerts.

### Automate Scheduling
- Add a **Cron Trigger** node to run this workflow daily or hourly.

## Summary

This workflow creates a fully automated price intelligence system that:

- Scrapes Amazon product price drops via Decodo.
- Extracts structured data with OpenAI GPT-4.1-mini.
- Generates AI-powered summaries and sentiment insights.
- Updates a connected Google Sheet with each run.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
