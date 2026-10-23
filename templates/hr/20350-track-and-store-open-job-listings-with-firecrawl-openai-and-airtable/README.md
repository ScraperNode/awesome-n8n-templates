# 👥 Track and store open job listings with Firecrawl, OpenAI, and Airtable

> ⚡ **2 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to keep an Airtable jobs database up to date by validating or discovering each organisation’s career page with Firecrawl, extracting open roles with OpenAI, and creating new vacancy records while skipping roles that already exist.

## How it works
1. Runs every week on a schedule.
2. Reads organisations and previously stored vacancies from Airtable.
3. For each organisation, checks whether the saved career page URL exists and returns a 200 response.
4. If the career page URL is missing or broken, scrapes the organisation’s website with Firecrawl to find likely career links, selects the best match, and writes the updated career page URL back to Airtable.
5. Scrapes the (existing or newly found) career page with Firecrawl and sends the page content to OpenAI to extract a structured list of open job postings.
6. Compares the extracted roles to known Airtable vacancies by title and snippet to drop already-seen roles.
7. Creates a new Airtable vacancy record for each remaining role, linking it to the organisation and setting status, deadline, and discovery date.

## Setup
1. Create an Airtable base with an Organisations table (including “Organisation Name”, “Website URL”, and “Career Page”) and a Vacancies table with fields that match the workflow’s mappings.
2. Add an Airtable Personal Access Token credential in n8n and replace the base ID and table IDs used in the Airtable nodes.
3. Provide a Firecrawl API key as the FIRECRAWL_API_KEY environment variable used by the HTTP requests.
4. Add an OpenAI API credential in n8n and ensure the selected model is available in your OpenAI account.

## Requirements
- Firecrawl API, Airtable (Or any other DB - Excel, Postgres), OpenAI API

## 🔗 Nodes Used

Airtable, HTTP Request, Schedule Trigger, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
