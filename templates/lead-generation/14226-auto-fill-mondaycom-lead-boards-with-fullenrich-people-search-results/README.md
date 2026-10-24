# 🎣 Auto-fill Monday.com lead boards with FullEnrich People Search results

> ⚡ **81 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## How it works

This workflow lets you search for leads using FullEnrich's People Search API directly from Monday.com, then auto-fills the results as new items on your board.

- A Monday.com automation sends a webhook when a new item is created on your "search criteria" board
- The workflow responds to Monday.com's challenge handshake, then calls FullEnrich's People Search API with the criteria from your Monday.com columns (job title, industry, location, company size, number of results)
- The search results are split into individual people and each one is created as a new item on your Monday.com "results" board with their name, title, company, domain, LinkedIn URL, and location

## Set up steps

Setup takes about 15 minutes:

1. **Monday.com "Search Criteria" board** — Create a board with these columns: Job Title (text), Industry (text), Location (text), Company Size (text), Number of Results (number). Note down the column IDs
2. **Monday.com "Results" board** — Create a board with columns for: First Name, Last Name, Job Title, Company Name, Company Domain, LinkedIn URL, Location. Note down the board ID, group ID, and column IDs
3. **Monday.com automation** — On your search criteria board, create an automation: *When item created → send webhook* to the **production URL** from the "Monday.com Webhook" node
4. **FullEnrich** — Connect your FullEnrich API credentials
5. **Monday.com** — Connect your Monday.com API credentials
6. **Column mapping** — Update the column IDs in the HTTP Request body and in the Monday.com node to match your boards
7. Activate the workflow

## 🔗 Nodes Used

HTTP Request, Webhook, Monday.com

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
