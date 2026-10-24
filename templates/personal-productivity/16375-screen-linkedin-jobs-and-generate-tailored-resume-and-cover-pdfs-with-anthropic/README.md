# ⚡ Screen LinkedIn jobs and generate tailored resume and cover PDFs with Anthropic and DocRaptor

> ⚡ **365 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow collects your job preferences and resume via an n8n form, scrapes fresh LinkedIn job listings with Apify, screens and ranks matches using Anthropic Claude, generates tailored resume and cover letter PDFs via DocRaptor, then emails them to you and logs each match in Google Sheets.

## How it works
1. Receives a form submission with your email, target role, seniority, locations, skills, deal-breakers, and resume text.
2. Calls the Apify LinkedIn Job Scraper API to fetch up to 150 jobs posted in the last 7 days for the provided keywords and location.
3. Removes duplicates and filters out obvious mismatches based on seniority, required years of experience patterns, and location rules.
4. Uses Anthropic Claude (Haiku) to score each remaining job for relevance and eligibility and returns a JSON verdict and fit score.
5. Ranks the results, drops rejected roles, and keeps the top five best-scoring matches.
6. Uses Anthropic Claude (Sonnet) to generate a structured resume JSON and cover letter JSON tailored to each shortlisted job using only facts from your provided profile.
7. Renders the resume and cover letter to HTML, converts them to PDF files with DocRaptor, emails the PDFs to you via Gmail, and appends a tracker row to Google Sheets.

## Setup
1. Add credentials for Anthropic (Claude), Gmail, Google Sheets, and DocRaptor (HTTP Basic Auth with your API key as the username and a blank password).
2. Replace YOUR_APIFY_TOKEN in the Apify HTTP request URL and ensure you have access to the Apify LinkedIn Jobs Scraper actor endpoint used in the workflow.
3. Create a Google Sheet with a “Tracker” tab and set the document ID (YOUR_TRACKER_SHEET_ID) to match your sheet.
4. If you want non-watermarked PDFs, set DocRaptor "test" to false in both PDF generation requests.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, AI Agent, Anthropic Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
