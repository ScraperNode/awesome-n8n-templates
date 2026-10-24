# 📊 Email weekly Google Maps ranking heatmaps with GeoGridAPI and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs every Monday and uses GeoGridAPI to generate a Google Maps local ranking geo-grid for a business and keyword, then downloads the heatmap PNG and emails a metrics summary and the image attachment via Gmail.

## How it works
1. Runs every Monday at 08:00 on a schedule trigger.
2. Sends the configured business query, keyword, grid size, radius, and language to the GeoGridAPI REST API to start a geo-grid run.
3. Polls GeoGridAPI every 20 seconds (up to 20 checks) until the grid finishes or fails.
4. Stops with an error if the grid is not completed (failed or still running after the maximum checks).
5. Downloads the completed heatmap image (PNG) from GeoGridAPI.
6. Builds an HTML email with key figures (average rank, top 3 and top 20 coverage, week-over-week change when available, and top competitors ahead) and attaches the PNG.
7. Sends the email report to the configured recipient using Gmail.

## Setup
1. Create a GeoGridAPI account and generate an API key.
2. Add an n8n HTTP Header Auth credential for GeoGridAPI (Authorization: Bearer <your_key>) and select it for the GeoGridAPI HTTP requests.
3. Connect a Gmail OAuth2 credential for sending email.
4. Update the Settings values for business, keyword, grid size, radius (km), language, and the recipient email address.

## 🔗 Nodes Used

HTTP Request, Gmail, Stop and Error, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
