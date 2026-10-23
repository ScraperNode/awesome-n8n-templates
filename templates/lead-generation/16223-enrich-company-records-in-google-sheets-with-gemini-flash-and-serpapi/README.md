# 🎣 Enrich company records in Google Sheets with Gemini Flash and SerpAPI

> ⚡ **15 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — For lead enrichment, [ScraperNode](https://scrapernode.com) can pull [LinkedIn profiles](https://scrapernode.com/linkedin/scrapers/profiles), [company data](https://scrapernode.com/linkedin/scrapers/companies), and [job listings](https://scrapernode.com/indeed/scrapers/jobs) directly into your pipeline — useful for building prospect lists without manual research.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow manually runs a company enrichment pipeline that reads companies from Google Sheets, uses SerpAPI web search plus Google Gemini to generate structured company details, writes the enriched data to a second Google Sheet, and marks the source rows as enriched to avoid reprocessing.

## How it works
1. Starts when you run the workflow manually.
2. Reads all rows from a source Google Sheets worksheet and keeps only the Company Name, Website, and Enriched fields.
3. Skips any row where Enriched is already set to Yes.
4. For each remaining company, uses SerpAPI web search and Google Gemini (via an AI agent) to research the company and return structured JSON fields such as industry, description, target customers, headquarters, and estimated size.
5. Normalizes the AI output by converting the target_customers array into a comma-separated string.
6. Appends the enriched company record to an output Google Sheets worksheet.
7. Updates the original source row in Google Sheets to set Enriched = Yes based on the Company Name.

## Setup
1. Add Google Sheets credentials and set the source spreadsheet ID and sheet name for reading companies, ensuring columns Company Name, Website, and Enriched exist.
2. Set the output Google Sheets spreadsheet ID and sheet name for appending enriched results, ensuring columns Company Name, Website, Industry, Description, Target Customers, Headquarters, and Estimated Size exist.
3. Add a SerpAPI credential for the web search tool.
4. Add a Google Gemini API credential for the Gemini Flash model used by the AI agent.
5. Confirm the “mark as enriched” update targets the same source sheet and that Company Name uniquely identifies rows for updating.

## 🔗 Nodes Used

Google Sheets, AI Agent, Structured Output Parser, SerpApi (Google Search), Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
