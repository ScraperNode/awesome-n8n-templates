# 📊 Track expiring federal contracts and recompetes with Apify and Google Sheets

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Who it's for: GovCon capture managers, BD leads and small federal contractors who plan bids around contracts that are about to expire (recompetes).

## How it works
1. Every Monday a Schedule trigger runs the Expiring Federal Contracts – Recompete Radar Actor on Apify through a plain HTTP Request node.
2. The Actor finds federal contracts whose period of performance ends in 3–18 months, from official USAspending.gov data, and checks each one against open SAM.gov notices with a match confidence (high, medium, low or none).
3. With the monitor name set in the body, only new or changed contracts come back (changed = new end date, award amount or incumbent UEI, or a new high- or medium-confidence SAM.gov notice), so the sheet stays clean.
4. An IF node stops on empty weeks, and a Set node keeps 22 columns (incumbent, UEI, value, end date, agency, NAICS/PSC, SAM.gov match and links).
5. Google Sheets appends or updates rows matched on id.

## Setup
1. Copy your Apify API token (Apify Console → Settings → API & Integrations).
2. On "Run GovCon Recompete Radar", create a Header Auth credential: name Authorization, value Bearer <token>.
3. Connect Google Sheets, paste your spreadsheet ID, and put the 22 column names from "Pick columns" in row 1.
4. Edit the JSON body (naicsCodes, awardingAgencies, minAwardAmount, monthsFrom/monthsTo). Keep monitorName set and the same between runs: it's what makes each run return only new or changed contracts. Without it, every run returns the 25 soonest-ending contracts again (up to maxItems), all charged.
5. Run once, check the output, then activate.

## Requirements
- An Apify account (pay per result: $0.01 per run + $0.01 per contract row) and Google Sheets. No USAspending or SAM.gov API key is needed.

## Customization
- Add a Slack alert for high-confidence SAM.gov matches, watch competitors by putting their names or UEIs in incumbents, or switch the schedule to daily.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
