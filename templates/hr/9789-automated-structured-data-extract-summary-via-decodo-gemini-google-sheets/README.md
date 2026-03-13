# 👥 Automated structured data extract & summary via Decodo + Gemini & Google Sheets

> ⚡ **148 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who this is for

This workflow is designed for:

- Automation engineers building AI-powered data pipelines

- Product managers & analysts needing structured insights from web pages

- Researchers & content teams extracting summaries from documentation or articles

- HR, compliance, and knowledge teams converting unstructured web content into structured records

- n8n self-hosted users leveraging advanced scraping and LLM enrichment

It is ideal for anyone who wants to transform any public URL into structured data + clean summaries automatically.


## What problem this workflow solves

Web content is often unstructured, verbose, and inconsistent, making it difficult to:

- Extract structured fields reliably

- Generate consistent summaries

- Reuse data across spreadsheets, dashboards, or databases

- Eliminate manual copy-paste and interpretation

This workflow solves the problem of turning arbitrary web pages into machine-readable JSON and human-readable summaries, without custom scrapers or manual parsing logic.

## What this workflow does

The workflow integrates **Decodo**, **Google Gemini**, and **Google Sheets** to perform automated extraction of structured data.

Here’s how it works step-by-step:

1. **Input Setup**

   * The workflow begins when the user executes it manually or passes a valid URL.
   * The input includes `url`.

2. **Profile Extraction with Decodo**

- Accepts any valid URL as input

- Scrapes the page content using Decodo

Uses Google Gemini to:

- Extract structured data in JSON format

- Generate a concise, factual summary

- Cleans and parses AI-generated JSON safely

- Merges structured data and summary output

- Stores the final result in Google Sheets for reporting or downstream automation

4. **JSON Parsing & Merging**

   * The **Code Node** cleans and parses the JSON output from the AI for reliable downstream use.
   * The **Merge Node** combines both structured data and the AI-generated summary.

5. **Data Storage in Google Sheets**

   * The **Google Sheets Node** appends or updates the record, storing the structured JSON and summary into a connected spreadsheet.

6. **End Output**

   * A unified, machine-readable data in JSON + an executive-level summary suitable data analysis or downstream automation.


## Setup Instructions

### Prerequisites

If you are new to Decode, please signup on this link [visit.decodo.com](https://visit.decodo.com/dOxzkK)

* **n8n account** with workflow editor access
* **Decodo API credentials** - You need to register, login and obtain the Basic Authentication Token via [Decodo Dashboard](https://dashboard.decodo.com/) 

![image.png](fileId:2988)

![n8n Decodo](fileId:2989)

* **Google Gemini (PaLM) API access**
* **Google Sheets OAuth credentials**

### Setup Steps

1. **Import the workflow** into your n8n instance.
2. **Configure Credentials**

   * Add your **Decodo API** credentials in the `Decodo` node.
   * Connect your **Google Gemini (PaLM)** credentials for both AI nodes.
   * Authenticate your **Google Sheets** account.
3. **Edit Input Node**

   * In the **Set the Input Fields** node, replace the default URL with your desired profile or dynamic data source.
4. **Run the Workflow**

   * Trigger manually or via webhook integration for automation.
   * Verify that structured profile data and summary are written to the linked Google Sheet.


## How to customize this workflow to your needs

You can easily extend or adapt this workflow:

### Modify Structured Output

* Change the **Gemini extraction prompt** to match your own JSON schema
* Add required fields such as authors, dates, entities, or metadata

### Improve Summarization

* Adjust summary length or tone (technical, executive, simplified)
* Add multi-language summarization using Gemini

### Change Output Destination

* Replace Google Sheets with:

  * Databases (Postgres, MySQL)
  * Notion
  * Slack / Email
  * File storage (JSON, CSV)

### Add Validation or Filtering

* Insert IF nodes to:

  * Reject incomplete data
  * Detect errors or hallucinated output
  * Trigger alerts for malformed JSON

### Scale the Workflow

* Replace manual trigger with:

  * Webhook
  * Scheduled trigger
  * Batch URL processing


## Summary

This workflow provides a powerful, generic solution for converting unstructured web pages into structured, AI-enriched datasets.

By combining Decodo for scraping, Google Gemini for intelligence, and Google Sheets for persistence, it enables repeatable, scalable, and production-ready data extraction without custom scrapers or brittle parsing logic.

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
