# 🔬 Orchestrate web crawls with Scrapyd and automated data enrichment

> ⚡ **499 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
This workflow runs a spider job in the background via Scrapyd, using a YAML config that defines selectors and parsing rules. When triggered, it schedules the spider with parameters (query, project ID, page limits, etc.). The workflow polls Scrapyd until the job finishes. Once complete, it fetches the output items, enriches them (parse JSONL, deduplicate, extract ID/part number/make/model/part name, normalize price), sorts results, and returns structured JSON. Optional debug outputs such as logs, HTML dumps, and screenshots are also collected.

## How to use
Use the manual trigger for testing, or replace it with webhook, schedule, or other triggers. Adjust the runtime parameters (q, project_id, pages, etc.) directly in the workflow when running. The background spider config (YAML and spider code) must be updated separately — this workflow only orchestrates and enriches results, it does not define scraping logic.

## Requirements

- Scrapyd service for job scheduling & status tracking

- A deployed spider with a valid YAML config (adjust selectors there)
 
- JSON Lines output (items.jl) from the spider
 
- Endpoints for optional artifacts (logs, HTML, screenshots)
 
- n8n with HTTP, Wait, Code, and Aggregate nodes enabled

## Customising this workflow

- Update the YAML config if the target website structure changes

- Modify the enrichment code to extract different fields (e.g., categories, ratings)

- Adjust deduplication (cheapest, newest, or other logic)

- Toggle debug retrieval depending on performance/storage needs

- Extend webhook response to integrate with databases, APIs, or downstream workflows

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
