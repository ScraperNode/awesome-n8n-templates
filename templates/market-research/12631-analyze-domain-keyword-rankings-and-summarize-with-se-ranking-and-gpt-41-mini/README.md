# 📊 Analyze domain keyword rankings and summarize with SE Ranking and GPT-4.1-mini

> ⚡ **25 views** · 📊 [Market Research & Insights](../)

## Description

This n8n workflow automates domain level keyword ranking analysis and enriches raw SEO metrics with AI-generated summaries. It combines structured keyword data from SE Ranking with natural-language insights produced by OpenAI, turning complex SERP datasets into actionable SEO intelligence.


## Who this is for?

This workflow is designed for:

* SEO engineers and technical marketers
* Growth teams running programmatic SEO
* Agencies managing multi-domain keyword analysis
* Product teams building SEO analytics pipelines
* Developers using n8n for data enrichment and reporting

If you work with keyword data and need machine-readable output plus human-readable insights, this workflow is for you.

## What this workflow does

1. Accepts a target domain or URL, region, keyword type (organic/paid), and filters
2. Fetches keyword ranking data from the SE Ranking Domain Keywords API
3. Extracts metrics such as:

   * Keyword positions
   * Search volume & CPC
   * Competition & difficulty
   * SERP features & search intent
   * Traffic estimates
4. Uses **OpenAI GPT-4.1-mini** to generate:

   * A comprehensive narrative summary
   * A concise abstract overview
5. Merges raw data and AI insights into a single enriched dataset
6. Exports the final output as structured JSON for downstream use

## Setup

## Prerequisites

* Active SE Ranking API access
* OpenAI API key with GPT-4.1-mini enabled
* Running n8n instance (self-hosted or cloud)
* Basic understanding of keyword ranking metrics

## Configuration steps

If you are new to SE Ranking, please signup on [seranking.com](https://seranking.com/?ga=4848914&source=link)

1. Import the workflow JSON into n8n
2. Configure credentials:

   * SE Ranking using HTTP Header Authentication. Please make sure to set the header authentication as below. The value should contain a Token followed by a space with the SE Ranking API Key.

![image.png](fileId:3906)

   * **OpenAI API** (GPT-4.1-mini model)
3. Open the **Set the Input Fields** node and define:

   * `target_site` (domain or URL)
   * `source` (region, e.g. `us`)
   * `type` (`organic` or `paid`)
   * `limit`, `filters`, and requested columns
4. Verify the output as per the export data handling.

* Converts enriched SEO results into structured JSON output
* Creates binary data to support file-based exports
* Converts processed data into CSV format for easy analysis
* Inserts or updates records in Google Sheets for reporting
* Ensures data consistency across all export destinations
* Enables downstream automation, dashboards, and audits


5. Click **Execute Workflow**


## How to customize this workflow to your needs

You can easily adapt this workflow by:

* Switching between **organic** and **paid** keyword analysis
* Changing regions for international SEO tracking
* Modifying requested keyword columns and SERP filters
* Customizing the OpenAI prompt to generate:

  * SEO action items
  * Competitive insights
  * Executive summaries
* Replacing file export with:

  * Databases
  * Dashboards
  * Slack/Email alerts
  * Data warehouses


## Summary

This n8n template delivers a production ready SEO analytics pipeline that bridges structured SERP data with AI powered interpretation. By combining SE Ranking’s keyword intelligence with OpenAI driven summarization, it enables faster insights, better reporting, and scalable SEO decision making without manual analysis.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, OpenAI Chat Model, Convert to File, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
