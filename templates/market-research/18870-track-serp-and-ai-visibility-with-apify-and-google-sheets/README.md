# 📊 Track SERP and AI visibility with Apify and Google Sheets

> ⚡ **1 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to trigger an Apify SERP + AI Visibility Tracker run for your domain and keywords, then writes Google ranking and AI mention metrics (ChatGPT and Perplexity) into a Google Sheets dashboard for ongoing SEO and AI visibility tracking.

## How it works
1. Runs every Sunday at 11pm on a schedule.
2. Starts an Apify Actor run that checks Google SERP positions plus ChatGPT and Perplexity results for brand mentions across your configured domain, brand name, and keyword list.
3. Fetches the completed results dataset from Apify using the run’s default dataset ID.
4. Formats each keyword result into dashboard fields including Google position, position change, featured snippet and AI Overview flags, per-engine mention/context, and an AI visibility score.
5. Appends one row per keyword to the “Weekly Visibility Tracker” tab in Google Sheets.

## Setup
1. Add your Apify API token and update the Apify request with your domain, brand name, keywords, and locale.
2. Add your OpenAI (ChatGPT) API key and Perplexity API key in the Apify Actor input payload.
3. Create a Google Sheet with a tab named “Weekly Visibility Tracker” and columns matching the formatted fields (Date, Keyword, Google Position, Position Change, Has Featured Snippet, Has AI Overview, ChatGPT Mentioned, ChatGPT Context, Perplexity Mentioned, Perplexity Context, Claude Mentioned, AI Visibility Score).
4. Connect Google Sheets OAuth2 credentials in n8n and set the target spreadsheet ID in the Google Sheets append step.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
