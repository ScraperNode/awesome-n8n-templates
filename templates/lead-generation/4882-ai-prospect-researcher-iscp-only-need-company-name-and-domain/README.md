# 🎣 Ai prospect researcher +ISCP only need company name and domain

> ⚡ **664 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# AI Prospect Researcher +ISCP only from Domain and Company Name 

## This workflow finds available email addresses, researches the company using public data (LinkedIn, website scraping, etc.), calculates the ISCP score, and delivers a complete, ready-to-use report.

This workflow is designed for professionals and teams seeking to scale their B2B research with comprehensive company intelligence. It automates the full prospect analysis process — from extracting contact data and scraping website content to gathering market insights and generating structured reports with GPT-4.

Using a combination of Hunter.io, Perplexity AI, Airtop, and OpenAI, this system creates a detailed Google Doc profile for each company, complete with decision-maker identification and ISCP scoring. Whether you're conducting market research, qualifying leads, or preparing investor briefings — this tool delivers actionable business intelligence in minutes, without manual data collection.

The process is battle-tested, with built-in error handling, and suitable for sales teams, market researchers, or founders conducting competitive analysis.

## How it works

Once triggered (via form or spreadsheet), the workflow:
1. Uses Hunter.io to discover professional emails associated with the domain
2. Leverages Perplexity AI to gather web-wide company intelligence and industry context
3. Scrapes the company website using Airtop to extract services, products, and key pages
4. Optionally enriches with LinkedIn data via Apify (company size, specialties)
5. Processes all inputs through GPT-4 to:
   - Generate an executive summary
   - Identify potential decision-makers
   - Calculate an Ideal Service Customer Profile (ISCP) match score
6. Produces a finalized report in Google Docs with:
   - Company overview
   - Key contacts
   - Market positioning
   - Recommended outreach approach

This is a turnkey solution for teams who need deep company profiles without the hours of manual research and data stitching.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Hunter, Google Docs, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
