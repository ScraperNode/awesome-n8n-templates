# 📊 Get Gmail alerts for dropped top 10 keyword rankings with DataForSEO

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.

## Description

![Get email alerts for dropped top 10 keyword rankings with DataForSEO.png](fileId:4489)

This weekly workflow helps you stay on top of SEO visibility losses by automatically detecting when your previously strong keywords fall out of Google’s top 10 results.

On each run, the workflow pulls your most recent ranking dataset for the selected domain(s) using the DataForSEO Labs API and compares it to the snapshot stored in Google Sheets from the previous run. It then finds keywords that ranked in positions 1–10 before, but are no longer present in the top results.

For every lost keyword (i.e., no longer in the top 10), the workflow adds useful context to speed up troubleshooting: previous position, current rank, and an updated SERP snapshot pulled with the DataForSEO SERP API.  Finally, the workflow sends you a Gmail notification with a clean list of dropped keywords and competitor insights, helping you investigate issues and prioritize fixes.

## Who’s it for
SEO specialists, marketers, and site owners who want an automated weekly alert when important keywords for their domain(s) lose top-10 visibility on Google.

## What it does
This workflow automatically detects when your domain loses important keywords from the top 10 Google results, stores them in Google Sheets, and emails a weekly summary.

## How it works
Runs on a predefined schedule (default: weekly).
Reads your keywords and target domains from Google Sheets.
Fetches the latest Google rankings and competitor insights via DataForSEO APIs.
Compares results with previous entries to find keywords that were top-10 and now are not.
Logs keywords that lost their top-10 ranks, along with current positions and competitor replacements, into Google Sheets.
Sends a Gmail alert with a structured summary.

## Requirements
- DataForSEO account and API credentials 
- Google Sheets table with your keywords, following the required column structure (as in [the example](https://docs.google.com/spreadsheets/d/10G-tFbJC__V6_dBjGTGYR50DQPwUtX29_M3zohTz4WE/edit?gid=641820442#gid=641820442)).
- Gmail account

## Customization
You can easily customize this workflow by adjusting the run schedule, changing the minimum ranking threshold (e.g., top 5 or top 20), including extra metrics, exporting results to other tools, and tailoring message content or sending an alert to Slack instead of Gmail.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
