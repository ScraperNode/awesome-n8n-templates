# 🎣 Generate sales research briefs from Google Sheets with Claude and Slack

> ⚡ **12 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow polls a Google Sheets prospect queue, researches each new company via SerpAPI and enrichment/contact APIs, then uses Anthropic Claude to generate a structured sales brief and outreach draft, logs the result back to Google Sheets, marks the prospect as researched, and notifies a sales rep in Slack.

## How it works
1. Runs every 15 minutes and reads rows from the Prospects tab in Google Sheets.
2. Filters for prospects with Status set to "New" and processes each prospect as an individual item.
3. Researches each prospect in parallel by pulling recent news via SerpAPI, company funding/technology data via a company enrichment API, and decision-maker contacts via a people data API.
4. Combines the research signals into one profile per prospect and calculates a priority score and a research completeness score.
5. Skips prospects with insufficient data and sends the rest to Anthropic Claude to generate a JSON sales brief and first-touch outreach message.
6. Appends the brief to the SalesBriefs tab in Google Sheets, updates the original prospect’s Status to "Researched", and posts a summary plus the draft message to Slack via an incoming webhook.

## Setup
1. Create a Google Sheets OAuth2 credential (used by the Google Sheets API HTTP requests) and replace YOUR_SHEET_ID in all Google Sheets request URLs.
2. Add API keys and replace placeholders for SerpAPI (YOUR_SERPAPI_KEY), your company enrichment provider (YOUR_ENRICHMENT_API_KEY), and your people/contact data provider (YOUR_PEOPLE_DATA_API_KEY).
3. Add an Anthropic API credential for the Claude model used to generate the sales brief.
4. Create a Slack Incoming Webhook and replace YOUR_SLACK_WEBHOOK_URL in the Slack request.
5. Ensure your spreadsheet has Prospects and SalesBriefs tabs with the expected columns (Prospects: A–H including Status in column H; SalesBriefs: A–P matching the generated brief fields).

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Filter, AI Agent, Anthropic Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
