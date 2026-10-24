# 📊 Detect competitor tech adoption and notify AEs with PredictLeads, Sheets and Gmail

> ⚡ **61 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Detect when target accounts adopt competitor technology by enriching company watchlists with PredictLeads tech detection data and emailing the assigned AE.

This workflow monitors a Google Sheets watchlist of company domains for competitor technology adoption. It checks each company against the PredictLeads Technology Detections API, and when a match is found (e.g., a prospect starts using Salesforce), it sends an alert email to the account executive responsible for that account.

How it works:
1. Schedule trigger runs the workflow daily at 8 AM.
2. Reads the company watchlist from Google Sheets (domain, company name, AE email).
3. Loops through each company and fetches technology detections from PredictLeads.
4. Checks if any detected technology matches the configured competitor tool.
5. If a match is found, extracts the assigned AE's email address.
6. Sends a Gmail alert to the AE with company name, domain, detected tech, and date.
7. If no match, moves to the next company in the loop.

Setup:
- Create a Google Sheet with a "CompetitorWatchlist" tab containing columns: domain, company_name, ae_email.
- Set the competitor technology name in the Check Competitor Tech code node (default: "Salesforce").
- Connect your Gmail account (OAuth2) for sending alert emails.
- Add your PredictLeads API credentials (X-Api-Key and X-Api-Token headers).

Requirements:
- Google Sheets OAuth2 credentials.
- Gmail OAuth2 credentials.
- PredictLeads API account (https://docs.predictleads.com).

Notes:
- Change the COMPETITOR_TECH variable in the code node to match your specific competitor (e.g., "HubSpot", "Marketo", "Zendesk").
- Each row in the watchlist should have a valid AE email -- rows without one are skipped.
- PredictLeads Technology Detections API docs: https://docs.predictleads.com

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
