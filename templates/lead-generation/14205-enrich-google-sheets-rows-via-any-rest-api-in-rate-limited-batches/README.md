# 🎣 Enrich Google Sheets rows via any REST API in rate-limited batches

> ⚡ **25 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works
• Reads all rows from a Google Sheet
• Splits them into configurable batches (default: 5 rows per batch)
• Calls any external REST API once per row (GET or POST, Header Auth)
• Waits 1 second between batches to stay within API rate limits
• Routes responses: writes enriched data back to the sheet on success, logs errors on failure
• Loops through all batches until the full sheet is processed
• Want more REST API workflows? See [n8n webhook & API templates ranked by demand](https://www.telosignal.com//explorer/webhook-api)

## Set up steps
• Takes ~10 minutes to configure
• Connect your Google Sheets OAuth2 credential to both Sheet nodes
• Set your Sheet ID and tab name in the Read Rows node
• Paste your API endpoint URL in the Call API node and connect your Header Auth credential
• Adjust batch size and wait duration via the sticky notes inside the workflow
• Update the Update Row node with the column(s) you want to write back

## 🔗 Nodes Used

Google Sheets, HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
