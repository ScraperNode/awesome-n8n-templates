# 📊 From sitemap crawling to vector storage: Creating an efficient workflow for RAG

> ⚡ **1,092 views** · 📊 [Market Research & Insights](../)

## Description

**This template crawls a website from its sitemap, deduplicates URLs in Supabase, scrapes pages with Crawl4AI, cleans and validates the text, then stores content + metadata in a Supabase vector store using OpenAI embeddings. It’s a reliable, repeatable pipeline for building searchable knowledge bases, SEO research corpora, and RAG datasets.**
⸻
## **Good to know**
	•	Built-in de-duplication via a scrape_queue table (status: pending/completed/error).
	•	Resilient flow: waits, retries, and marks failed tasks.
	•	Costs depend on Crawl4AI usage and OpenAI embeddings.
	•	Replace any placeholders (API keys, tokens, URLs) before running.
	•	Respect website robots/ToS and applicable data laws when scraping.

## **How it works**
	1.	Sitemap fetch & parse — Load sitemap.xml, extract all URLs.
	2.	De-dupe — Normalize URLs, check Supabase scrape_queue; insert only new ones.
	3.	Scrape — Send URLs to Crawl4AI; poll task status until completed.
	4.	Clean & score — Remove boilerplate/markup, detect content type, compute quality metrics, extract metadata (title, domain, language, length).
	5.	Chunk & embed — Split text, create OpenAI embeddings.
	6.	Store — Upsert into Supabase vector store (documents) with metadata; update job status.
## **Requirements**
	•	Supabase (Postgres + Vector extension enabled)
	•	Crawl4AI API key (or header auth)
	•	OpenAI API key (for embeddings)
	•	n8n credentials set for HTTP, Postgres/Supabase
## **How to use**
	1.	Configure credentials (Supabase/Postgres, Crawl4AI, OpenAI).
	2.	(Optional) Run the provided SQL to create scrape_queue and documents.
	3.	Set your sitemap URL in the HTTP Request node.
	4.	Execute the workflow (manual trigger) and monitor Supabase statuses.
	5.	Query your documents table or vector store from your app/RAG stack.

## **Potential Use Cases**

This automation is ideal for:

- Market research teams collecting competitive data
- Content creators monitoring web trends
- SEO specialists tracking website content updates
- Analysts gathering structured data for insights
- Anyone needing reliable, structured web content for analysis

## **Need help customizing?**
Contact me for consulting and support: [LinkedIn](https://www.linkedin.com/in/mariela-ceo-founder/)

## 🔗 Nodes Used

HTTP Request, Postgres, Supabase, Embeddings OpenAI, Character Text Splitter, Supabase Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
