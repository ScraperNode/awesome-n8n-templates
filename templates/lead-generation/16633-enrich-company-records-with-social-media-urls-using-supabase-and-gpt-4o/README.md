# 🎣 Enrich company records with social media URLs using Supabase and GPT-4o

> ⚡ **30 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls companies from Supabase, uses an OpenAI (GPT-4o) agent to crawl each company website and collect social media profile URLs via HTTP requests and HTML parsing, and then writes the enriched company record (name, website, and social links) back to Supabase.

## How it works
1. Runs manually and loads all company records from a Supabase `companies_input` table.
2. Keeps only each company’s `name` and `website` fields and sends the website to an OpenAI (GPT-4o) agent.
3. The agent fetches page text (HTML converted to Markdown) and extracts links from pages (anchor hrefs), following additional URLs as needed to find social profiles.
4. The agent returns a structured JSON object of social media platforms and their profile URLs.
5. The workflow combines the extracted social links with the original company name and website.
6. Inserts the enriched record into the Supabase `companies_output` table.

## Setup
1. Add a Supabase credential and set the correct workspace/project so the workflow can read from `companies_input` and write to `companies_output`.
2. Add an OpenAI API key in the OpenAI Chat Model node (configured for GPT-4o).
3. Ensure your input table contains `name` and `website` fields (or update the field mapping to match your schema).

## 🔗 Nodes Used

Supabase, AI Agent, OpenAI Chat Model, Structured Output Parser, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
