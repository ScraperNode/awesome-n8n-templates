# 🎣 Generate Shopify review outreach drafts with Apify, Hunter, GPT-4o and Gmail

> ⚡ **39 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily to scrape competitor Shopify app reviews via Apify, logs and deduplicates new low-rated reviews in Google Sheets, looks up the reviewer’s website with Serper, enriches contacts with Hunter, generates a personalized outreach email with OpenAI, saves it as a Gmail draft, and alerts in Slack.

## How it works
1. Runs every day on a schedule.
2. Scrapes recent reviews from a set of Shopify app review URLs using an Apify actor, removes duplicate review IDs, and keeps only reviews with a rating of 4 or less.
3. Processes each review one at a time and checks Google Sheets to see whether the Review ID already exists.
4. For new reviews, appends the review details to Google Sheets and posts a “new review detected” alert to a Slack channel.
5. Searches Google via the Serper API for the reviewer’s official website, extracts a clean domain from the top result, and uses Hunter to find a contact email.
6. Uses OpenAI to draft a short personalized outreach email based on the review, saves it as a Gmail draft, updates the corresponding Google Sheets row with contact details and the draft, and posts a “draft ready” alert to Slack.

## Setup
1. Connect credentials for Apify, Google Sheets, Serper (HTTP Header Auth API key), Hunter, OpenAI, Gmail, and Slack.
2. Update the list of competitor Shopify review page URLs and the Apify actor input settings (for example, maxItems) to match what you want to monitor.
3. Point the Google Sheets nodes to your spreadsheet and ensure it includes columns like Review ID, Date, Rating, Review Text, Competitor URL, Reviewer Domain, Website, Contact Name, Contact Title, Contact Email, Status, and Draft-Email.
4. Select the Slack channel where both “new review” and “draft ready” messages should be posted.
5. Ensure your Gmail account is authorized and able to create drafts addressed to the email returned by Hunter.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Hunter, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
