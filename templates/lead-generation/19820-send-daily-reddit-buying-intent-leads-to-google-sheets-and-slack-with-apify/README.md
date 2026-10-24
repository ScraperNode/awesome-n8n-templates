# 🎣 Send daily Reddit buying-intent leads to Google Sheets and Slack with Apify

> ⚡ **4 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning, uses Apify’s Reddit Lead Finder to collect new buying-intent Reddit posts and comments, appends every lead to Google Sheets, and sends a single Slack digest containing only the highest-scoring leads.

## How it works
1. Runs every day at 8:00 based on a schedule.
2. Builds the Reddit lead-finding query from your keywords, competitors, optional subreddits, score thresholds, and output settings.
3. Uses Apify (Reddit Lead Finder actor) to search Reddit over the past week, score buying intent, and return only leads you have not seen before.
4. Formats each returned lead into a structured row with score, intent label, thread details, author, and link.
5. Appends every formatted lead as a new row in Google Sheets.
6. Filters leads to those with an intent score at or above your hot-lead threshold, aggregates them into one list, and posts a single digest message to a Slack channel.

## Setup
1. Create a free Apify account (https://apify.com/?fpr=youssef) and connect it in the Apify node with OAuth or an API token. The workflow runs the Reddit Lead Finder actor (ID: r9XHFcy7pGNxCPbIw).
2. Connect your Google Sheets account, create a target spreadsheet, and paste its URL into the googleSheetUrl value.
3. Connect your Slack account and set the target channel name in slackChannel (for example, #leads).
4. Update keywords, competitors, optional subreddits, and the minIntentScore/hotLeadScore/maxLeads values to match what you want to capture.

## Requirements
- An Apify account (https://apify.com/?fpr=youssef): the free plan works and is capped at 25 leads per run. Google Sheets and Slack accounts connected in n8n.

## Customization
- Swap the Slack node for Telegram, Gmail or Discord; raise hotLeadScore to 70 to be alerted only for budget mentions and 'alternative to' requests; fill in subreddits (for example SaaS, smallbusiness) to focus on your niche; switch the schedule to hourly for fast-moving markets.

## Additional info
The Reddit Lead Finder actor has an onlyNewLeads mode that is switched on in this template, so a daily schedule never sends the same lead twice. Actor page and full input docs: https://apify.com/fayoussef/reddit-lead-finder?fpr=youssef

Need a custom version or another data source? See https://automationbyexperts.com

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
