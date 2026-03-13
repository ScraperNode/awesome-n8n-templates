# 📊 Run automated technical SEO audits with SE Ranking and Google Sheets

> ⚡ **56 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

![image.png](fileId:4205)

## Who is this for
- SEO agencies tracking client site health over time
- Web developers monitoring technical SEO improvements
- Website owners measuring audit progress week over week

## What this workflow does
Run a technical SEO audit on any website, wait for completion, then export audit history to Google Sheets for trend tracking and progress monitoring.

## What you'll get
- Overall health score (0-100) for your site
- Errors, warnings, and notices count by category
- Audit history tracking (last 10 audits)
- Trend analysis over time in Google Sheets
- Progress monitoring week over week

## How it works
1. Starts a new audit for your domain
2. Waits for the crawl to finish (~5 min for small sites)
3. Checks if done—automatically retries if not complete
4. Pulls the full report with health score and issue counts
5. Fetches last 10 audits for the domain
6. Exports audit history to Google Sheets with 10 columns

## Requirements
- SE Ranking account with API access ([Get one here](https://online.seranking.com/admin.api.dashboard.html))
- SE Ranking community node installed ([Install from npm](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking))
- Website Audit subscription in SE Ranking
- Google Sheets account (optional)

## Setup steps
1. Install the [SE Ranking community node](https://www.npmjs.com/package/@seranking/n8n-nodes-seranking)
2. Add your SE Ranking API credentials
3. Replace `example.com` with your domain in the Create audit node
4. Connect Google Sheets credentials (optional)
5. Select your spreadsheet for export

## Customization
- Change the domain and audit title in the Create audit node
- Adjust wait times if auditing larger sites (5 min default may not be enough)
- Connect a Schedule Trigger to run audits automatically each week
- Change `limit` in List audits node to get more/fewer historical audits (max 100)

## 🔗 Nodes Used

Google Sheets

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
