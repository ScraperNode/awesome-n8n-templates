# 🎣 Enrich LinkedIn leads in Google Sheets with PhantomBuster, Hunter and Dropcontact

> ⚡ **35 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow reads LinkedIn profile URLs from Google Sheets, enriches each lead using PhantomBuster profile and company scrapers, finds a work email via Hunter.io with a Dropcontact fallback, writes results back to Google Sheets, and posts optional batch summaries to Slack.

## How it works
1. Runs manually or every day at 8:00 AM and loads pipeline configuration values used by downstream steps.
2. Reads rows from the `Leads` tab in Google Sheets and keeps only entries with a LinkedIn URL that have not been enriched yet.
3. Processes leads in batches of five, validates each LinkedIn `/in/` URL, and marks invalid URLs as `Failed` in Google Sheets.
4. For valid URLs, runs PhantomBuster’s LinkedIn Profile Scraper, waits for completion, and stops with a `Failed` status if no profile data is returned.
5. Uses PhantomBuster’s LinkedIn Company Scraper to extract company details such as website/domain from the profile’s company URL.
6. Looks up a work email with Hunter.io using the person’s name and company domain, and falls back to Dropcontact enrichment when Hunter returns no email.
7. Updates the original Google Sheets row with the enriched fields (and `enrichment_status` set to `Enriched` or `Email Not Found`), waits three seconds between batches, and posts a Slack webhook summary after each batch if configured.

## Setup
1. Create a Google Sheets OAuth credential with edit access and set the target spreadsheet ID in the workflow configuration.
2. Add a PhantomBuster credential, provide your Profile Scraper and Company Scraper agent IDs, and fill in the required LinkedIn values (li_at session cookie, PhantomBuster identity ID, and a user agent string).
3. Add credentials for Hunter.io and Dropcontact so the workflow can perform email discovery and fallback enrichment.
4. Prepare a Google Sheet tab named `Leads` with a `linkedin_url` column plus output columns like `enrichment_status`, `first_name`, `last_name`, `email`, `phone_numer`, `Company name`, `role`, `website`, and `email_source`.
5. (Optional) Create a Slack incoming webhook, paste its URL into the configuration (or leave it empty to disable notifications), and ensure the webhook can post to your intended channel.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Hunter, Phantombuster, Dropcontact, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
