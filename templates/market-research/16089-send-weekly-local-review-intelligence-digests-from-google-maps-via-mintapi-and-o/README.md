# 📊 Send weekly local review intelligence digests from Google Maps via MintAPI and OpenAI

> ⚡ **8 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Monitor local competitor reviews from Google Maps, summarize complaint themes with OpenAI, and email a weekly action digest for local SEO, reputation management, and marketing teams.

## How it works
1. Runs on a weekly schedule or is started manually.
2. Searches Google Maps via MintAPI for businesses matching your query, region, language, and maximum business limit.
3. For each business found, fetches the newest Google Maps reviews via MintAPI up to the configured per-business limit.
4. Filters and structures reviews to highlight low ratings and keyword-matched complaints, then builds a single prompt for OpenAI.
5. Sends the prompt to the OpenAI Chat Completions API to generate a Markdown report, falling back to a raw Markdown summary if OpenAI fails.
6. Emails the final digest to the configured recipient using your SMTP/email connection.

## Setup
1. Create a MintAPI account and API key at https://mintapi.dev.
2. In n8n, create an HTTP Header Auth credential named `MintAPI x-api-key header` with header name `x-api-key` and your MintAPI API key as the value.
3. Create an HTTP Header Auth credential named `OpenAI Authorization header` with header name `Authorization` and value `Bearer YOUR_OPENAI_API_KEY`
4. Configure the email node with your SMTP or email credential.
5. Open `Template Settings` and update the search query, region, language, business limit, review limit, alert keywords, sender email, and recipient email.
6. Run the workflow manually once to verify the output, then activate the weekly schedule.

## Requirements
- MintAPI API key: https://mintapi.dev
- OpenAI API key
- SMTP or email credential in n8n
- A local search query, for example `med spas in Miami` or `roofers in Austin

## Customization
- Change the local search query in `Template Settings`.
- Adjust `maxBusinesses` and `reviewsPerBusiness` to control cost and report depth.
- Edit `alertKeywords` to track issues that matter to your niche.
- Replace the email node with Slack, Notion, Google Sheets, or Airtable.
- Customize the OpenAI prompt in `Build Review Intelligence Prompt` to change the report format.

## Additional info
This template uses MintAPI's Google Maps endpoints for local business search and review data. API details are available at https://mintapi.dev/apis/google-maps and in the MintAPI docs at https://docs.mintapi.dev.

## 🔗 Nodes Used

Send Email, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
