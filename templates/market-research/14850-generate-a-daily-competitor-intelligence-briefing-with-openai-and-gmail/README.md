# 📊 Generate a daily competitor intelligence briefing with OpenAI and Gmail

> ⚡ **69 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# Overview
Know what your competitors are doing every morning before your first meeting. This workflow visits each competitor website daily, uses OpenAI to analyse it for strategic signals, and emails your team a consolidated executive briefing automatically.

## How it works

- A schedule trigger fires every morning at 8AM
- Your list of competitor URLs is loaded from the Configure node
- Each competitor page is fetched and stripped to clean readable text
- GPT-4o-mini analyses each one for key signals, threat level, and recommended actions
- All analyses are aggregated and sent to GPT-4o to write one consolidated executive briefing
- The briefing is formatted as a clean HTML email and sent to your team via Gmail
- Every run is logged to Google Sheets with the date and summary


## Setup steps

1.  Competitors — Open Configure Competitors and Settings, replace the placeholder URLs with your real competitor URLs
2.  Your details — In the same node set YOUR_COMPANY and YOUR_FOCUS to describe your market
3.  OpenAI — Add your OpenAI API key as a credential at platform.openai.com
4.  Gmail — Connect your Gmail account in Send Email Briefing and set your team email in the Configure node
5.  Google Sheets — Create a sheet with columns: Date, Company, Competitors Analyzed, Briefing Summary. Connect your Google account and update the sheet ID in the Log node
6.  Activate the workflow — it runs automatically at 8AM every day

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
