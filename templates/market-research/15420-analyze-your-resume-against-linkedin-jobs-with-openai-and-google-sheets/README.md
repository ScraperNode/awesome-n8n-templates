# 📊 Analyze your resume against LinkedIn jobs with OpenAI and Google Sheets

> ⚡ **176 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Who it is for
Job seekers, career coaches, and developers looking to automate job market research and identify the exact technical skills required to land their target roles.

## How it works
This workflow automates career upskilling by comparing your existing resume against current market demands. First, it pulls your target job preferences from Google Sheets and your current resume from Google Drive. It then automatically scrapes the 10 most recent matching job descriptions from LinkedIn.

Instead of analyzing jobs one by one, the workflow aggregates all the scraped data and passes it to OpenAI. The AI acts as a Career Coach: it scores your market readiness, identifies the most frequently recurring missing skills, and generates a structured 30-day training plan to close the gap. The final customized report is delivered directly to Telegram.

## How to set up
1. Download this [Google Sheets Template](https://docs.google.com/spreadsheets/d/e/2PACX-1vSo0HAZi8Dr73EsbECV6-lWkbCczuvaERiiUc7KVriolIP4rkO9TDsQ60OMw_X0U8NmPL3SsByJmlTT/pub?output=ods) and upload it to your own Google Drive.
2. Connect your Google Drive and Google Sheets credentials in n8n.
3. Update the Google nodes with your specific Document and Sheet IDs.
4. Connect your OpenAI credentials.
5. Connect your Telegram account and input your target Chat ID.
6. Enable the Schedule Trigger to run at your preferred frequency.

## Requirements
OpenAI account (gpt-4o or similar high-context model recommended)

Google Workspace account (Drive & Sheets)

Telegram bot token and Chat ID

## How to customize (Optional)
Target Filters: Modify the Code node (Create search URL) to adjust the target location, experience level, or job type parameters.

Cost Management: Adjust the text substring length in the Modify Job Attributes node if you want to lower your OpenAI token usage.

Notification Channels: Swap the Telegram node for Slack, Discord, or Email depending on where you prefer to receive your 30-day plans.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Telegram, Google Drive, Schedule Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
