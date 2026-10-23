# ⚡ Score LinkedIn job matches with OpenAI, Google Sheets, Slack, and Apify

> ⚡ **66 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Runs fetch_cat/linkedin-jobs-scraper daily to collect recent LinkedIn jobs, scores each listing against your candidate profile with OpenAI, saves qualified matches to Google Sheets, and sends the five strongest results to Slack without redelivering previously processed job IDs.

## How it works
1. Runs on a daily schedule (or via manual trigger) and ensures an n8n Data Table exists to track which LinkedIn job IDs have already been delivered.
2. Runs the FetchCat LinkedIn Jobs Scraper (fetch_cat/linkedin-jobs-scraper) through Apify's API using your configured keywords and location, waits for the Actor run to finish, and downloads up to 10 structured job records from its dataset.
3. Normalizes the scraped job records, caps the list to 10 items, and skips any jobs that already exist in the delivery ledger.
4. Sends the remaining jobs to OpenAI in one structured request to score each job against your candidate profile and filters out results below the minimum score.
5. Appends or updates qualified matches in Google Sheets (upserting by LinkedIn job ID) and formats a Slack message containing the five highest-scoring jobs.
6. Posts the digest to your chosen Slack channel and records the delivered job IDs in the n8n Data Table only after both Google Sheets and Slack steps succeed.

## Setup
1. Add [FetchCat LinkedIn Jobs Scraper](https://apify.com/fetch_cat/linkedin-jobs-scraper) to your Apify account if required, then create an Apify API token. In n8n, add an HTTP Header Auth credential with header Authorization and value Bearer YOUR_APIFY_TOKEN, and select it in both FetchCat HTTP Request nodes.
2. Add your OpenAI credentials and confirm the OpenAI model selection used for scoring.
3. Connect Google Sheets OAuth credentials. Make a copy of the [LinkedIn Job Match spreadsheet template](https://docs.google.com/spreadsheets/d/1jl5lHW4MFotwob7tzZgBc1MciPDVoJuwTqkKGZbMPgc/edit?usp=sharing). In the Google Sheets node, select your copied spreadsheet and its Jobs tab. Keep the tab name and header row unchanged so the workflow can append or update matches using LinkedIn job ID.
4. Connect Slack credentials and select the channel where the digest should be posted.
5. Update the search settings (keywords, location, candidate profile, minimum score, and max items) in the “Set Your Job Search” step and adjust the schedule time if needed.

## Requirements
- [FetchCat LinkedIn Jobs Scraper](https://apify.com/fetch_cat/linkedin-jobs-scraper) on Apify; OpenAI API access; Google Sheets; Slack; n8n 2.26.8 or newer.

## Customization
- Edit keywords, location, candidate profile, minimum score, and item limit in 1. Set Your Job Search. The workflow is configured specifically for fetch_cat/linkedin-jobs-scraper; keep its Actor input fields when adapting the search.

## Additional info
The workflow uses [FetchCat LinkedIn Jobs Scraper](https://apify.com/fetch_cat/linkedin-jobs-scraper) to provide the structured LinkedIn job data used by the scoring, Google Sheets, and Slack steps. It calls the Actor through standard HTTP Request nodes, so it works in both n8n Cloud and self-hosted n8n without installing a community node.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
