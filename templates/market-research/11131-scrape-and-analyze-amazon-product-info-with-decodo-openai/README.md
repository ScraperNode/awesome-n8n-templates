# 📊 Scrape and analyze Amazon product info with Decodo + OpenAI

> ⚡ **613 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

The Scrape and Analyze Amazon Product Info with Decodo + OpenAI workflow automates the process of extracting product information from an Amazon product page and transforming it into meaningful insights. 

The workflow then uses OpenAI to generate descriptive summaries, competitive positioning insights, and structured analytical output based on the extracted information.

## Disclaimer

Please note - This workflow is only available on n8n self-hosted as it’s making use of the community node for the Decodo Web Scraping

![Scrape and Analyze Amazon Product Info with Decodo + OpenAI](fileId:3428)

## **Who this is for?**

This workflow is ideal for:

* E-commerce product researchers
* Marketplace sellers (Amazon, Flipkart, Shopify, etc.)
* Competitive intelligence teams
* Product comparison bloggers and reviewers
* Pricing and product analytics engineers
* Automation builders needing AI-powered product insights

## **What problem is this workflow solving?**

Manually extracting Amazon product details, ads, pricing, reviews, and competitive signals is:

- Time-consuming
- Requires switching across tools
- Difficult to analyze at scale
- Not structured for reporting
- Hard to compare products objectively

This workflow automates:

* Web scraping of Amazon product pages
* Extraction of product features and ad listings
* AI-generated product summaries
* Competitive positioning analysis
* Generation of structured product insight output
* Export to Google Sheets for tracking and reporting


## **What this workflow does**

This workflow performs an end-to-end product intelligence pipeline, including:

### Data Collection

* Scrapes an Amazon product page using **Decodo**
* Retrieves product details and advertisement placements

### Data Extraction

* Extracts:

  * Product specs
  * Key feature descriptions
  * Ads data
  * Supplemental metadata

### AI-Driven Analysis

* Generates:

  * Descriptive product summary
  * Competitive positioning insights
  * Structured product insight schema

### Data Consolidation

* Merges descriptive, analytical, and structured outputs

### Export & Persistence

* Aggregates results
* Writes final dataset to Google Sheets for:

  * tracking
  * comparison
  * reporting
  * product research archives

## **Setup**

### Prerequisites

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

* **n8n instance**
* **Decodo API credentials** 
* **OpenAI API credentials**

Make sure to install the Decodo Community Node.

![Decodo Community Node](fileId:3427)

### Required Credentials

#### **Decodo API**

1. Go to **Credentials**
2. Add **Decodo API**
3. Enter API key
4. Save as:
   **Decodo Credentials account**

#### **OpenAI API**

1. Go to **Credentials**
2. Select **OpenAI**
3. Enter API key
4. Save as:
   **OpenAi account**

#### **Google Sheets**

1. Add **Google Sheets OAuth**
2. Authorize via Google
3. Save as desired account

### Inputs to configure

Modify in **Set the Input Fields node**:

```
product_url = https://www.amazon.in/Sony-DualSense-Controller-Grey-PlayStation/dp/B0BQXZ11B8
``` 

## **How to customize this workflow to your needs**

You can easily adapt this workflow for various use cases.

### Change the product being analyzed

Modify:

```
product_url
```

### Change AI model

In OpenAI nodes:

* Replace `gpt-4.1-mini`
* Use Gemini, Claude, Mistral, Groq (if supported)

### Customize the insight schema

Edit **Product Insights node** to include:

* sustainability markers
* sentiment extraction
* pricing bands
* safety compliance
* brand comparisons

### Expand data extraction

You may extract:

* product reviews
* FAQs
* Q&A
* seller information
* delivery and logistics signals

### Change output destination

Replace Google Sheets with:

- PostgreSQL
- MySQL
- Notion
- Slack
- Airtable
- Webhook delivery
- CSV export

### Turn it into a batch processor

Loop over:

* multiple ASINs
* category listings
* search results pages

## **Summary**

This workflow provides a complete automated product intelligence engine, combining Decodo’s scraping capabilities with OpenAI’s analytical reasoning to transform Amazon product pages into structured insights, competitive analysis, and summarized evaluations automatically stored for reporting and comparison.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
