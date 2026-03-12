# 📊 AI-powered Product Hunt data collection & translation with GPT-4 and Google Sheets

> ⚡ **83 views** · 📊 [Market Research & Insights](../)

## Description

### This n8n template automates the collection and enrichment of Product Hunt posts using AI and Google Sheets. 

It fetches new tools daily, translates content, categorizes them intelligently, and saves everything into a structured spreadsheet—ideal for building directories, research dashboards, newsletters, or competitive intelligence assets.

## Good to know

* Sticky notes inside the workflow explain each functional block and required configurations.
* Uses cursor-based pagination to safely fetch Product Hunt data.
* AI agent handles translation, documentation generation, tech extraction, and function area classification.
* Category translations are synced with a Google Sheets dictionary to avoid duplicates.
* All enriched entries are stored in a clean “Tools” sheet for easy filtering or reporting.

## How it works

* A schedule trigger starts the workflow daily.
* Product Hunt posts are retrieved via GraphQL and processed in batches.
* A code node restructures each product into a consistent schema.
* The workflow checks if a product already exists in Google Sheets.
* For new items, the AI agent generates metadata, translations, and documentation.
* Categories are matched or added to a Google Sheets dictionary.
* The final enriched product entry is appended or updated in the spreadsheet.
* Pagination continues until no next page remains.

## How to use

* Connect Product Hunt OAuth2, Google Sheets, and OpenAI credentials.
* Adjust the schedule trigger to your preferred frequency.
* Optionally expand enrichment fields (tags, scoring, custom classifications).
* Replace the trigger with a webhook or manual trigger if needed.

## Requirements

* Product Hunt OAuth2 credentials
* Google Sheets account
* OpenAI (or compatible) API access

## Customising this workflow

* Add Slack or Discord notifications for new tools.
* Push enriched data to Airtable, Notion, or a database.
* Extend AI enrichment with summaries or SEO fields.
* Use the Google Sheet as a backend for dashboards or frontend applications.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
