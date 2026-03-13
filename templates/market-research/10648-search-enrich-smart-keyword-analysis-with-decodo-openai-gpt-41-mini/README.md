# 📊 Search & enrich: Smart keyword analysis with Decodo + OpenAI GPT-4.1-mini

> ⚡ **315 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Disclaimer

Please note - This workflow is only available on n8n self-hosted as it's making use of the community node for the Decodo Web Scraping

![Search & Enrich: Smart Keyword Analysis with Decodo + OpenAI GPT-4.1-mini](fileId:3283)

This workflow automates intelligent keyword and topic extraction from Google Search results, combining **Decodo’s advanced scraping engine** with **OpenAI GPT-4.1-mini’s semantic analysis capabilities**. The result is a fully automated keyword enrichment pipeline that gathers, analyzes, and stores SEO-relevant insights.


## Who this is for

This workflow is ideal for:

* **SEO professionals** who want to extract high-value keywords from competitors.
* **Digital marketers** aiming to automate topic discovery and keyword clustering.
* **Content strategists** building data-driven content calendars.
* **AI automation engineers** designing scalable web intelligence and enrichment pipelines.
* **Growth teams** performing market and search intent research with minimal effort.

## What problem this workflow solves

Manual keyword research is time-consuming and often incomplete. Traditional keyword tools only provide surface-level data and fail to uncover **contextual topics** or **semantic relationships** hidden in search results.

This workflow solves that by:

* Automatically **scraping live Google Search results** for any keyword.
* Extracting **meaningful topics, related terms, and entities** using AI.
* Enriching your keyword list with **semantic intelligence** to improve SEO and content planning.
* Storing structured results directly in **n8n Data Tables** for trend tracking or export.

## What this workflow does

Here’s a breakdown of the flow:

1. **Set the Input Fields** – Define your search query and target geo (e.g., “Pizza” in “India”).
2. **Decodo Google Search** – Fetches organic search results using Decodo’s web scraping API.
3. **Return Organic Results** – Extracts the list of organic results and passes them downstream.
4. **Loop Over Each Result** – Iterates through every search result description.
5. **Extract Keywords and Topics** – Uses **OpenAI GPT-4.1-mini** to identify relevant keywords, entities, and thematic topics from each snippet.
6. **Data Enrichment Logic** – Checks whether each result already exists in the **n8n Data Table** (based on URL).
7. **Insert or Skip** – If a record doesn’t exist, inserts the extracted data into the table.
8. **Store Results** – Saves both enriched search data and Decodo’s original response to disk.

**End Result:** A structured and deduplicated dataset containing URLs, keywords, and key topics — ready for SEO tracking or further analytics.

## Setup

### Pre-requisite

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

Please make sure to install the n8n custom node for Decodo.

![Decodo Custom n8n Install](fileId:3250)
![Decodo Custom n8n node](fileId:3251)

### Import and Configure the Workflow

1. Open n8n and **import** the JSON template.
2. Add your credentials:

   * **Decodo API Key** under *Decodo Credentials account*.
   * **OpenAI API Key** under *OpenAI Account*.

### Define Input Parameters

* Modify the **Set node** to define:

  * `search_query`: your keyword or topic (e.g., “AI tools for marketing”)
  * `geo`: the target region (e.g., “United States”)

### Configure Output

* The workflow writes two outputs:

  1. **Enriched keyword data** → Stored in n8n Data Table (`DecodoGoogleSearchResults`).
  2. **Raw Decodo response** → Saved locally in JSON format.

### Execute

Click **Execute Workflow** or schedule it for recurring keyword enrichment (e.g., weekly trend tracking).


## How to customize this workflow

* **Change AI Model** — Replace `gpt-4.1-mini` with `gemini-1.5-pro` or `claude-3-opus` for testing different reasoning strengths.
* **Expand the Schema** — Add extra fields like keyword difficulty, page type, or author info.
* **Add Sentiment Analysis** — Chain a second AI node to assess tone (positive, neutral, or promotional).
* **Export to Sheets or DB** — Replace the Data Table node with Google Sheets, Notion, Airtable, or MySQL connectors.
* **Multi-Language Research** — Pass a `locale` parameter in the Decodo node to gather insights in specific languages.
* **Automate Alerts** — Add a Slack or Email node to notify your team when high-value topics appear.

## Summary

**Search & Enrich** is a low-code AI-powered keyword intelligence engine that automates research and enrichment for SEO, content, and digital marketing.

By combining **Decodo’s real-time SERP scraping** with **OpenAI’s contextual understanding**, the workflow transforms raw search results into structured, actionable keyword insights. It eliminates repetitive research work, enhances content strategy, and keeps your keyword database continuously enriched — all within n8n.

## 🔗 Nodes Used

Function, OpenAI Chat Model, Read/Write Files from Disk, Information Extractor, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
