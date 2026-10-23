# 📊 Detect SEO opportunities with GSC, GA4, GPT-4o, Sheets, Notion, Slack and Gmail

> ⚡ **36 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to compare the last 28 days vs the prior 28 days in Google Search Console and Google Analytics 4, detects and scores SEO opportunities, saves them to Google Sheets, and uses OpenAI (GPT-4o) to generate an action plan sent to Notion, Slack, and Gmail.

## How it works
1. Runs every day on a schedule and calculates current and previous 28-day date ranges.
2. Queries the Google Search Console Search Analytics API for query+page performance for both periods.
3. Fetches GA4 page metrics (sessions, page views, and engagement duration) for both periods using Google Analytics.
4. Analyzes the combined datasets to detect and score SEO signals (quick wins, CTR gaps, content decay, cannibalization, new queries, and low-engagement high-traffic pages) and ranks the top opportunities.
5. Appends the ranked opportunity backlog to a Google Sheets tab for tracking.
6. Sends the top opportunities to OpenAI (GPT-4o) to produce a structured SEO action plan.
7. Publishes the AI action plan to a Notion database page, posts it to a Slack channel, and emails the HTML report via Gmail.

## Setup
1. Connect Google OAuth credentials for Google Search Console (HTTP Request OAuth2) and Google Analytics, and select your GA4 property ID.
2. Replace the placeholder Search Console API URL in both GSC requests with your verified, URL-encoded site property.
3. Connect Google Sheets OAuth credentials and select the target spreadsheet and the “Opportunities” sheet (with columns matching the workflow output).
4. Add an OpenAI credential for the GPT-4o model used by the AI agent.
5. Connect Notion credentials and select the target database for the SEO backlog page.
6. Connect Slack and Gmail credentials, set the Slack channel, and replace the recipient email address placeholder.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Google Analytics, Notion

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
