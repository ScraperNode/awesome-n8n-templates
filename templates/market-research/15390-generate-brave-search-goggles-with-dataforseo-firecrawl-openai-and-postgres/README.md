# 📊 Generate Brave Search Goggles with DataForSEO, Firecrawl, OpenAI and Postgres

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for
Business owners, industry specialists, and AI developers building domain-specific search experiences. It generates custom search filters to boost technical authorities and block lead-gen aggregators, requiring no advanced SEO expertise. Pre-configured for the Dutch plastering industry, but universally adaptable.

## What it does
Automates the creation of custom Brave Search Goggles to ground LLMs and AI agents in noise-free, high-authority industry content. This strict filtering ensures RAG pipelines consume pre-optimized, expert-verified data for accurate question answering and reduced hallucinations.

## How it works 
1. **Domain Intersection:** Uses **DataForSEO** to identify high-value search terms by extracting exact keyword overlaps between top competitors.
2. **SERP & Mapping:** Fetches the Top 100 Google results for these terms and uses **Firecrawl** to map the internal architecture ("Power Folders") of the ranking domains.
3. **AI Auditing:** An **OpenAI GPT-4o agent** evaluates each domain's structure, classifying them (e.g., Manufacturer, Retailer, Aggregator) and assigning strict Goggle rules (`boost`, `downrank`, `discard`) based on technical depth.
4. **Live Deployment:** Stores rules in **Postgres**, formats them into valid Brave Goggle syntax via a custom SQL View, and automatically syncs to a public **GitHub Gist**.

## Requirements
* **Postgres:** Stores rules, audit trails, and generates the Goggle syntax.
* **DataForSEO API:** Extracts competitor intersections and live SERP data.
* **OpenAI API:** Powers the domain classification agent.
* **Firecrawl API:** Maps internal domain architectures.
* **GitHub Account:** Hosts the live Goggle file via Gists.

## How to adapt the AI Auditor for other niches
To pivot this workflow to a new industry (e.g., Healthcare or Legal), update the **System Prompt** inside the `Information Extraction Agent`. Adjust the AI's persona, redefine which domain types represent true authority (to `boost`), and explicitly define your industry's specific noise (to `discard`).

### PS
Goggles must be submitted to Brave Search before they can be used with the API. Visit search.brave.com/goggles/create to register your Goggle.

## 🔗 Nodes Used

HTTP Request, Postgres, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
