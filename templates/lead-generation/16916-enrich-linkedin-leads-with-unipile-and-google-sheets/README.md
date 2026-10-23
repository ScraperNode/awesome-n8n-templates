# 🎣 Enrich LinkedIn leads with Unipile and Google Sheets

> ⚡ **16 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Automatically search LinkedIn for prospects using Unipile's API, enrich each profile with full details, and sync leads into a Google Sheet CRM — runs daily on a schedule with rate limiting, deduplication, and error logging built in.

## How it works
1. A daily Schedule Trigger fires at 08:00 and loads your search config — Unipile DSN, LinkedIn account ID, target keywords, and daily safety limits — into all downstream nodes.
2. Unipile's Search API (POST /api/v1/linkedin/search) runs a keyword search across Classic, Sales Navigator, or Recruiter LinkedIn and auto-paginates via cursor up to a configurable page limit.
3. Search results are split into individual profile items, de-duplicated by LinkedIn profile ID to prevent processing the same person twice across pages.
4. A Limit node caps total profiles per run to protect your daily LinkedIn quota — Unipile recommends staying under 100 profile look-ups per account per day.
5. Each profile is enriched with full details via GET /api/v1/users/{id}?linkedin_sections=*, processed in batches of 5 with a 3-second pause between calls to respect rate limits.
6. A Set node maps the Unipile response to 12 clean CRM columns — name, headline, title, company, location, email, summary, profile URL, connection degree, keywords, and enrichment timestamp.
7. Each lead is upserted into a Google Sheet matched on public_identifier so re-runs update existing rows instead of creating duplicates. Search and enrichment errors are logged to a separate Errors tab without stopping the run.

## Setup
1. Sign up for a Unipile account and connect your LinkedIn account from the Unipile Dashboard. Copy your DSN (e.g. https://api1.unipile.com:13111) and your LinkedIn account_id from the Accounts tab.
2. In n8n, create a Header Auth credential — name it Unipile API Key, set header name to X-API-KEY, and paste your Unipile access token as the value. Attach this credential to both HTTP Request nodes (Search and Get Profile).
3. Open the Search Criteria & Unipile Config node and fill in your unipile_dsn, unipile_account_id, and search_keywords (e.g. "Head of Growth"). Adjust max_profiles_to_enrich to set your daily cap.
4. Create a Google Sheet named LinkedIn Lead Finder - CRM with two tabs: Leads (columns: full_name, headline, location, current_title, current_company, profile_url, public_identifier, connection_degree, email, summary, search_keywords, enriched_at) and Errors (columns: when, stage, profile_id, error_message).
5. Connect your Google Sheets OAuth2 credential to all three Google Sheets nodes and select your spreadsheet in each node's Document field. Activate the workflow.

## Requirements
- Unipile account with a connected LinkedIn account (paid plan required for Search API access)
- Google account with Google Sheets access
- n8n instance (cloud or self-hosted)

## Customization
- Change search_api in the Config node to sales_navigator or recruiter if your Unipile plan includes those tiers
- Increase max_pages (default: 3) and results_per_page (default: 25) to pull larger result sets
- Add extra fields to the Map to CRM Row node — Unipile returns skills, education, work_experience, websites, and more when linkedin_sections=* is set
- Swap Google Sheets for Airtable, Notion, or a database node to fit your existing CRM stack
- Change the Schedule Trigger time or frequency to run more or less often

## Additional info
This workflow uses Unipile as a LinkedIn API middleware — it authenticates as your connected LinkedIn account and makes requests on your behalf. Always respect LinkedIn's Terms of Service and Unipile's provider limits. The workflow is read-only (no messages sent, no connection requests made). All errors are caught and logged gracefully so the run never fails silently.

CONTACT
Email: salmanmehboob1947@gmail.com
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
