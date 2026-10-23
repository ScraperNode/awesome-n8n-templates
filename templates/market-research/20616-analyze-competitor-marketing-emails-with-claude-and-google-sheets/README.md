# 📊 Analyze competitor marketing emails with Claude and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, pulls recent competitor newsletter emails from Gmail, analyzes each message with Anthropic Claude, and appends structured insights and response ideas to Google Sheets, then marks processed emails as read and labeled so they aren’t analyzed twice.

## How it works
1. Runs every day at 9:00 AM to load the Gmail search query, maximum email body length, and your brand context.
2. Reads your Google Sheets log to collect Message IDs that have already been analyzed.
3. Fetches matching emails from Gmail, skips any already logged, and cleans/truncates the email body text for analysis.
4. Sends each prepared email to Anthropic Claude to extract a structured competitor analysis and a concrete response idea based on your brand context.
5. Parses Claude’s JSON output and formats one row per successfully analyzed email.
6. Appends the results to Google Sheets, then marks each processed Gmail message as read and applies an “Analyzed” label.

## Setup
1. Add credentials for Gmail, Google Sheets, and Anthropic (Claude) in n8n.
2. In Gmail, create labels (for example “Competitors” and “Analyzed”) and set up a filter so competitor newsletters get the “Competitors” label.
3. Create a Google Sheet with columns for MessageId, email metadata, and analysis fields, then select the target spreadsheet and sheet tab in the Google Sheets nodes.
4. Set the correct Gmail label/query and choose the “Analyzed” label in the Gmail labeling step.
5. Update the brand description in the workflow’s brand context setting so Claude’s response ideas match your business.

## 🔗 Nodes Used

Google Sheets, Gmail, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
