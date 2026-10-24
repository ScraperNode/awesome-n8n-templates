# 🎣 Build and enrich B2B company lead lists with CompanyEnrich and Data Tables

> ⚡ **46 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who’s it for

Sales teams looking to build targeted company lead lists

Marketing agencies doing outbound or account-based marketing

Founders and startups needing quick prospect research

Automation builders who want a plug-and-play lead generation system

## How it works / What it does

Takes a simple, plain-English input (e.g., “SaaS companies in Germany”)

Searches for relevant companies using an external API

Breaks down results into individual records for processing

Filters companies based on criteria like revenue

Enriches each company with detailed data (LinkedIn, website, employees, etc.)

Checks for duplicates to avoid repeated entries

Stores clean, enriched company data in a structured database

## How to set up

Add your CompanyEnrich API key in the HTTP Request nodes

Connect your data table where leads will be stored

Adjust the form input field if you want different search prompts

Test the workflow with a sample query

Activate the workflow

⏱️ Estimated setup time: 10–15 minutes

## Requirements

An active n8n instance (cloud or self-hosted)

CompanyEnrich API access

A configured data table (for storing results)

Basic understanding of n8n nodes and workflows

## How to customize the workflow

Modify filters (e.g., revenue, industry, employee size) to refine results

Add more enrichment steps (e.g., email finding, CRM sync)

Change database fields to match your CRM or system

Adjust the delay node to control API rate limits

Extend the workflow with outreach automation (e.g., email or LinkedIn messaging)

## 🔗 Nodes Used

HTTP Request, Filter, n8n Form Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
