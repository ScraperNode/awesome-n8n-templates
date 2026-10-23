# 🎣 Enrich company records with social media links using GPT-4o and Supabase

> ⚡ **6 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow is manually triggered to pull company names and websites from Supabase, crawl each site with an OpenAI-powered agent to extract social media profile URLs, and write the enriched results to a separate Supabase table.

## How it works
1. Runs when you manually execute the workflow.
2. Reads all rows from the Supabase `companies_input` table and keeps the `name` and `website` fields for processing.
3. Uses an OpenAI (GPT-4o) agent to crawl the company website, following discovered links and extracting social media profile URLs.
4. Forces the agent output into a structured JSON schema and maps the extracted links into a `social_media` array.
5. Merges the original company name and website with the extracted social media data.
6. Inserts the enriched record into the Supabase `companies_output` table.

## Setup
1. Add a Supabase credential and set the correct project details for both reading from `companies_input` and writing to `companies_output`.
2. Add an OpenAI API credential for the GPT-4o chat model used by the crawling agent.
3. Ensure your input table has `name` and `website` fields or update the field selection and mapping to match your schema.
4. Confirm the output table accepts the mapped fields (for example `company_name`, `company_website`, and `social_media`) when auto-mapping input data.

## 🔗 Nodes Used

Supabase, AI Agent, OpenAI Chat Model, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
