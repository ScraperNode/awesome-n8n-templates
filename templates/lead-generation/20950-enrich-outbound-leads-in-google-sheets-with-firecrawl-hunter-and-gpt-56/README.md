# 🎣 Enrich outbound leads in Google Sheets with Firecrawl, Hunter, and GPT-5.6

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs on a schedule (or manually) to enrich pending leads in Google Sheets by finding a company domain and decision-maker, scraping and researching the website with Firecrawl and OpenRouter, verifying emails via a Hunter and Dropcontact waterfall, generating a grounded cold opener, and emailing a Gmail.

## How it works
1. Runs every 30 minutes (or on manual trigger), loads configuration values, and reads “pending” rows from a Google Sheets lead table.
2. Caps the run to a configurable batch size, marks rows missing a company as skipped, and processes the remaining rows one at a time while tracking a per-run credit budget.
3. Determines the company domain from the row’s website field or by searching with Firecrawl, then scrapes the homepage (and an About/Team page when found) to build a research context.
4. Uses OpenRouter (LLM) to extract grounded company intelligence and an ICP fit score from the scraped text, then removes any facts whose quotes do not appear verbatim in the source content.
5. If the row is missing a contact, uses Hunter domain search to select a decision-maker based on target titles/departments and carries forward any on-domain email returned by the search.
6. Runs an email “waterfall” that tries a website-discovered address first, then Hunter Email Finder, then Dropcontact enrichment, verifying each candidate with Hunter Email Verifier until a deliverable or qualified accept-all email is found or the budget gates stop further lookups.
7. For rows with a verified/qualified email and sufficient ICP fit, uses OpenRouter (LLM) to write a one-sentence cold email opener tied to exactly one grounded fact and rejects openers that violate grounding or style rules.
8. Writes enrichment results (domain, research fields, email outcome, opener, credits, and final status) back to Google Sheets and sends an aggregated HTML run report via Gmail.

## Setup
1. Create or copy a Google Sheets lead table with a “Leads” sheet that includes at least row_id and status (set to “pending” for rows to process), plus company and optional website, first_name, last_name, and job_title columns.
2. Add credentials for Google Sheets OAuth2, Firecrawl API, OpenRouter API (for the OpenRouter chat model), Hunter API, Dropcontact API, and Gmail OAuth2.
3. Update the Table Settings values to match your use case, including ICP description, target titles/departments, budget limits, and the report recipient email address.

## 🔗 Nodes Used

Google Sheets, Hunter, Gmail, Dropcontact, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
