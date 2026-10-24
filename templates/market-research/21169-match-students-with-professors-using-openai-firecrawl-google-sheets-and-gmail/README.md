# 📊 Match students with professors using OpenAI, Firecrawl, Google Sheets, and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow collects a student’s target field and documents, analyzes them with OpenAI, scrapes a university faculty directory via Firecrawl, evaluates and ranks professor research-fit matches, saves results to Google Sheets, and creates a Gmail draft with a CSV of the top matches.

## How it works
1. Receives a new submission from an n8n Form Trigger containing a faculty/department URL, target field, degree level, Google Drive links to a CV and motivation letter, and an email address.
2. Downloads both PDFs from Google Drive, extracts their text, and uses OpenAI to build a structured student research profile and field-alignment decision.
3. Stops with a review status if the student’s documents do not align with the selected target field.
4. Scrapes the provided faculty/department directory page using the Firecrawl API and uses OpenAI to extract a list of relevant professor candidates and their official profile URLs.
5. Normalizes and deduplicates candidate profile URLs, fetches each professor profile page, and skips profiles that fail to load or contain no usable content.
6. Uses OpenAI to score each professor’s research fit against the student profile, computes an overall score and recommendation, ranks the professors, and keeps the top six.
7. Appends the ranked results to Google Sheets, generates a per-request CSV attachment, and creates an unsent Gmail draft to the submitted email address.

## Setup
1. Set up the n8n Form Trigger and ensure the CV and motivation letter inputs are Google Drive PDF links that your Google Drive account can access.
2. Add credentials for OpenAI (used by multiple model nodes), Google Drive OAuth2 (to download PDFs), Google Sheets OAuth2 (to append results), and Gmail OAuth2 (to create drafts).
3. Add a Firecrawl API key as HTTP Header Auth (Authorization: Bearer <key>) for the directory scraping request.
4. Update the Google Sheets document ID and sheet/tab name, and create the exact columns expected by the append step (for example: Rank, Professor Name, Email, Professor_Profile_URL, Research_Fit_Score, Relevant_Research_Evidence, and related fields).
5. Submit a test form response and confirm the workflow writes rows to Google Sheets and creates a Gmail draft with the CSV attachment before activating and sharing the production form URL.

## Requirements
- n8n, OpenAI and Firecrawl API access, Google Drive, Google Sheets and Gmail credentials, plus accessible PDF document links.

## Customization
- Customize branding, AI prompts, matching criteria, scoring weights, result limits, spreadsheet settings and email content.

## Additional info
Find professors aligned with your research interests or help students shortlist potential supervisors.
For business use, adapt the prompts and criteria for expert discovery, recruitment research or candidate matching.
Learn a reusable process for turning documents and website data into ranked, organized results.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Gmail, AI Agent, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
