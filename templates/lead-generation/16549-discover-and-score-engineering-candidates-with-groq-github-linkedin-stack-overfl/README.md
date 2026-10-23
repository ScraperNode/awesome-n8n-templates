# 🎣 Discover and score engineering candidates with Groq, GitHub, LinkedIn, Stack Overflow, HN and Supabase

> ⚡ **10 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow exposes a POST webhook that turns a job description into a structured hiring brief using Groq, searches candidates across GitHub, LinkedIn (via Apify), Stack Overflow, and Hacker News, scores and summarizes the shortlist, optionally saves results to Supabase, and returns a JSON response.

## How it works
1. Receives a candidate search request via a POST webhook and normalizes the payload into a consistent schema.
2. Validates that the request includes a job description or structured criteria, and returns a 400 JSON error if it is invalid.
3. Uses Groq (via LangChain) to extract structured job requirements, then builds a search brief with queries and limits for each source.
4. Searches GitHub, LinkedIn via Apify, Stack Overflow, and Hacker News in parallel and normalizes each source’s results into a common candidate format.
5. Merges all candidates, sanitizes and deduplicates the pool, and returns an empty 200 response if no candidates remain.
6. Scores candidates with a deterministic evidence formula, filters by the configured score threshold, and builds a recruiter-facing JSON report.
7. Uses Groq (via LangChain) to generate an AI shortlist summary, attaches it to the report, optionally saves qualified candidates to Supabase, and responds with the final JSON results.

## Setup
1. Copy the webhook URL from the Candidate Search Webhook node and configure your client/application to send POST requests to it.
2. Add Groq credentials for the two AI steps (job requirement extraction and shortlist summarization) and select the configured chat models.
3. Add an Apify bearer token credential for the LinkedIn profile search actor and ensure the actor is available in your Apify account.
4. Configure GitHub API access (token/bearer auth if needed for your rate limits) and confirm the GitHub Search and User endpoints are reachable from your n8n instance.
5. If you enable saving, add Supabase credentials and ensure a table named `candidates` exists with fields matching the workflow’s insert mapping.

## 🔗 Nodes Used

HTTP Request, Webhook, Supabase, AI Agent, Structured Output Parser, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
