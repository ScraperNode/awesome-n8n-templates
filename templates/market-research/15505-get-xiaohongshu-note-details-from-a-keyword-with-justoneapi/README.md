# 📊 Get Xiaohongshu note details from a keyword with JustOneAPI

> ⚡ **48 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
Search RedNote (Xiaohongshu) posts by keyword, extract unique note IDs, and return structured post details for competitor research, content analysis, reporting, and downstream automation.

## How it works
1. The workflow starts with one configuration step for your own JustOneAPI token, keyword, pagination, filters, and result limit. It searches RedNote/Xiaohongshu posts, reads note IDs from the response, removes duplicates, and limits the list with maxNotes. Each selected ID is then sent to the note-detail endpoint. The final Code node normalizes titles, descriptions, creator information, engagement metrics, image data, timestamps, and post URLs while retaining raw responses for troubleshooting and custom processing.

## Setup
1. Import the template into n8n and open the Prepare API and Research Inputs node. Enter your own JustOneAPI token and replace the sample keyword. Review the optional page, sort, note type, time range, and maxNotes values; keep maxNotes at 1 for a quick test. Run the workflow manually, inspect the search and detail responses, then connect the final structured output to your database, spreadsheet, dashboard, alert, or AI analysis workflow.

## Requirements
- Your own JustOneAPI token and an n8n environment with HTTP Request and Code nodes.

## Customization
- Increase maxNotes, change search filters, add pagination, or send the normalized results to Google Sheets, Airtable, Notion, a database, Slack, or an AI model.

## Additional info
Useful for RedNote/Xiaohongshu competitor monitoring, creator research, content discovery, social listening, campaign analysis, and China-market research. No RedNote cookies or browser automation are required; API usage is billed against the JustOneAPI token supplied by the user.

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
