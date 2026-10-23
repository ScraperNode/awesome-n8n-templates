# 📊 Track competitor ad messaging shifts with Adyntel, OpenAI and Google Sheets

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This scheduled workflow reads competitor domains from Google Sheets, pulls their current ads from Meta, Google, and LinkedIn via Adyntel, compares this week’s messaging to last week’s snapshot with OpenAI, stores results back in Google Sheets, and sends Slack alerts for high-urgency shifts.

## How it works
1. Runs on a schedule and reads competitors marked as Pending from a Google Sheets spreadsheet.
2. For each competitor domain, fetches active ads from Meta (Facebook Ads), Google Ads, and LinkedIn Ads using Adyntel and combines the results.
3. Extracts and deduplicates ad titles and body copy, then aggregates this week’s ads into a single text context per competitor.
4. Loads last week’s ad-copy snapshot for the same domain from Google Sheets and computes new and dropped ad titles.
5. If no ads are found this week, writes a “gone dark” delta entry to the messaging_deltas sheet in Google Sheets.
6. Otherwise, sends the week-over-week context to OpenAI to generate a structured messaging-delta analysis, parses the response, and appends the delta to the messaging_deltas sheet.
7. Appends this week’s ads to the ad_copy_snapshots sheet, updates the competitor row status to Done in Google Sheets, and posts a Slack alert when the urgency is High.

## Setup
1. Connect Google Sheets OAuth2 credentials and update the spreadsheet/document ID and sheet tabs for competitors, ad_copy_snapshots, and messaging_deltas if you use different locations.
2. Add your Adyntel API credentials and confirm it has access to Meta, Google, and LinkedIn ad data for the domains you track.
3. Add an OpenAI credential (chat model) for the messaging-delta analysis agent.
4. Create and maintain a competitors sheet with at least domain, competitor_name, and status columns (set status to Pending to be processed).
5. Configure a Slack credential and target channel in the Slack posting step (or replace the alert step if you don’t want notifications).
6. Adjust the schedule interval to your desired cadence (weekly is implied by the week-over-week comparison logic).

## 🔗 Nodes Used

Google Sheets, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
