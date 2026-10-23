# 🎣 Write LinkedIn-based cold email icebreakers with Google Sheets, Apify and Claude

> ⚡ **0 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow pulls unprocessed B2B leads from Google Sheets, uses Apify to scrape each lead’s recent LinkedIn posts and website content, generates a LinkedIn-based cold email icebreaker with Anthropic Claude, and writes the approved icebreaker back to the sheet.

## How it works
1. Manually starts and reads leads from Google Sheets where the “Processed” column is set to “NO”.
2. Limits processing to the first 50 leads and loops through them one at a time.
3. For each lead, triggers an Apify actor run to scrape recent LinkedIn posts, waits briefly, fetches the actor dataset results, and extracts the most recent non-repost post text.
4. Fetches the lead’s company website HTML, converts it to plain text, and uses Anthropic Claude to summarize specific company details for context.
5. Uses Anthropic Claude to write a single 15–30 word icebreaker using only the LinkedIn post content, or returns “SKIP” if the post lacks a strong personalizable detail.
6. Rejects icebreakers that match banned patterns (for example missing “LinkedIn”, salesy language, clichés, or hyphenated phrasing) and flags them as “SKIP”.
7. After a short rate-limit wait, appends or updates the lead’s row in Google Sheets (matched by email) with the icebreaker and sets “Processed” to “YES”.

## Setup
1. Connect your Google Sheets OAuth credentials and select the spreadsheet and sheet to read from and update.
2. Ensure your Google Sheet includes columns for at least “email”, “linkedin”, “company_website”, “Processed”, and “Icebreaker”, with “Processed” set to “NO” for new leads.
3. Provide an Apify API token and, if needed, replace the hardcoded Apify actor ID and token in the HTTP requests.
4. Add an Anthropic API credential and choose the Claude model used for website summarization and icebreaker writing.
5. Review the batch size (currently first 50 leads) and the wait durations (Apify wait and rate limiting) to fit your volume and scraping latency.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Markdown, Basic LLM Chain, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
