# 🎣 Automated lead research – from LinkedIn to ready-to-send report

> ⚡ **1,601 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# AI Prospect Researcher – Automated Lead Intelligence Workflow

This workflow is built for professionals and teams who want to scale their B2B outreach with context-rich, personalized communication. It automates the full prospect research process — from pulling lead data and scraping LinkedIn profiles, to gathering real-time company insights and generating high-quality outreach reports with GPT-4. 

Using a combination of Apify, Perplexity AI, and OpenAI, this system creates a structured Google Doc for each lead, along with a logged summary in Google Sheets. Whether you’re preparing for sales calls, writing cold emails, or enriching your CRM — this tool delivers ready-to-use intelligence in minutes, without manual research.

The process is modular, production-ready, and suitable for agencies, SDR teams, or founders managing outbound on their own.

## How it works

Once triggered, the workflow takes in a list of leads from Google Sheets. For each lead, it uses Apify to scrape both the LinkedIn profile and company page (no login or cookies required). Then, Perplexity AI fetches contextual insights and competitor data. GPT-4 validates the research and synthesizes a structured summary of the individual and their company. Finally, a complete outreach report is generated and saved in Google Docs, while key data is logged in Sheets for tracking or follow-up automation.



## This is a powerful, production-grade automation for anyone serious about personalizing outreach without spending hours per lead.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Docs, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
