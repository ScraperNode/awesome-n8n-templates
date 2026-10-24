# 📊 Track organic SEO market share with DataForSEO, OpenAI and Google Docs

> ⚡ **21 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs weekly to identify your organic search competitors with DataForSEO, estimate traffic and market share for each domain, and compare results to prior runs stored in Google Sheets. It uses OpenAI to draft a narrative report, writes it to Google Docs, and emails the document link via Gmail.

## How it works
1. Runs every Monday morning on a schedule.
2. Calls the DataForSEO Competitors Domain endpoint to find competing domains for your site and filters out your own domain plus common platforms unless you provide a pinned competitor list.
3. Requests DataForSEO Bulk Traffic Estimation for the full peer set and reads prior snapshots from the `history` tab in Google Sheets.
4. Calculates each domain’s estimated visits, share of the peer set, and share change since the most recent prior run, then flags domains that are new to the set or gained meaningful share.
5. For domains that gained share, fetches DataForSEO Relevant Pages to capture the top pages driving the increase, and for domains new to the set, fetches DataForSEO Domain Rank Overview to add a one-time profile note.
6. Sends the aggregated results to OpenAI to generate a short plain-text market note, then creates and fills a Google Doc with a title, a fixed-width table, and the narrative.
7. Emails the Google Doc link and summary via Gmail and appends one row per domain to the Google Sheets `history` tab for next run comparisons.

## Setup
1. Create a DataForSEO Basic Auth credential in n8n (username is your account email and password is your API password).
2. Create a Google Sheet with a tab named `history` and columns `checked_on`, `domain`, `is_you`, `visits`, `share_pct`, and `keywords`, then connect Google Sheets credentials.
3. Connect Google Docs and Gmail credentials and choose the Drive folder to store the generated reports.
4. Add an OpenAI credential (or OpenAI-compatible model access) and confirm the model selection in the OpenAI chat model node.
5. Update the Settings values for `your_domain`, `location`, `language`, `history_sheet` URL, `drive_folder`, and `email_to`, and optionally set `pinned_rivals` and thresholds like `move_pct`.

## Requirements
- A DataForSEO account with the Labs API. Two requests run every time (about $0.024 together) and only the movers cost more: a rival that gained share adds $0.013, a domain new to the peer set adds $0.012. A five-rival month is roughly seven cents.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Google Docs, Schedule Trigger, Basic LLM Chain

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
