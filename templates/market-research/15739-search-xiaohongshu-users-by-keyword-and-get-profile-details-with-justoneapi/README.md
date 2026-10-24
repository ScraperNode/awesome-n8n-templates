# 📊 Search Xiaohongshu users by keyword and get profile details with JustOneAPI

> ⚡ **38 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Search RedNote (Xiaohongshu) users by keyword and return structured profile data for creator discovery, influencer research, competitor monitoring, outreach, and reporting.

## How it works
1. The workflow configures your own JustOneAPI token, keyword, page, and result limit. It searches Xiaohongshu users, preserves the raw response, extracts and deduplicates user IDs, and limits the selected accounts. Each ID is sent to the profile endpoint, and the final output normalizes identity, biography, location, follower and engagement metrics, verification, avatar, account links, and raw API responses for downstream processing.

## Setup
1. Import the template and open the Prepare API and Research Inputs node. Enter your own JustOneAPI token, replace the sample keyword, and review page and maxUsers. Keep maxUsers at 1 for a quick test, run manually, and inspect both search and profile responses. Connect results to a creator database, spreadsheet, CRM, dashboard, outreach workflow, alert, or AI analysis step.

## Requirements
- Your own JustOneAPI token and n8n with HTTP Request and Code nodes.

## Customization
- Increase maxUsers, add pagination or profile filters, and send creators to Google Sheets, Airtable, Notion, a CRM, Slack, a database, or an AI scoring workflow.

## Additional info
Useful for RedNote and Xiaohongshu creator discovery, influencer research, brand monitoring, competitor analysis, and campaign planning. No RedNote cookies or browser automation are required.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
