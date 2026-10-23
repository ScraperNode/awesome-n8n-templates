# 📊 Track weekly AI brand visibility with DataForSEO, OpenAI, Google Sheets and Gmail

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to track how often your brand is mentioned in AI answers for chosen category topics using DataForSEO, compares results with a Google Sheets history, generates a short commentary with OpenAI, and sends a formatted report email via Gmail.

## How it works
1. Runs every Monday morning (or manually) and loads your topics, brand, domains to exclude, platform, location, Google Sheet URL, and recipient email.
2. Builds one request per topic and platform pair and sends parallel DataForSEO requests to fetch top mentioned brands and top cited pages in AI answers.
3. Cleans and ranks the DataForSEO brand leaderboard, calculates your brand rank and share of total mentions, and extracts leading cited source domains.
4. Normalizes and aggregates cited URLs from the quoted-pages response, including a count of how many quoted pages belong to your domain.
5. Reads prior snapshots from a Google Sheets `history` tab, compares this week’s results to the most recent previous run per topic/platform, and records rank and share changes.
6. Appends this week’s per-topic metrics to Google Sheets and, if any topic has data, uses OpenAI to write up to six summary bullets and emails an HTML report via Gmail.

## Setup
1. Add a DataForSEO Basic Auth credential (login email plus API password) for the two HTTP requests.
2. Add Google Sheets credentials and create a spreadsheet with a `history` tab and the header columns `checked_on`, `topic_key`, `topic`, `platform`, `brand_rank`, `brand_mentions`, `share_pct`, `leader`, `leader_mentions`.
3. Add an OpenAI credential for the weekly summary generation and a Gmail credential for sending the report.
4. Update the Settings values for your category topics, brand name and domain, exclude-domain list, platform(s) and location, Google Sheet URL, leaderboard size, and the destination email address.

## Requirements
- A DataForSEO account with access to the AI Optimization API. Both LLM Mentions calls are billed per request ($0.10 plus $0.001 per returned row), so the defaults - two topics on one platform at 25 rows - cost roughly $0.45 a week.

## Additional info
Three things measured against the live API while building this, all handled in the workflow: the chat_gpt platform holds United States and English data only, so a run configured for another location returns an empty set rather than an error; the brand leaderboard mixes real brands with category labels such as "CRM software company" and "technology company", which are stripped before anything is ranked; and search_filter "exclude" only does anything on a domain entity, not a keyword one, which is why noise control here is a domain list. Cited URLs also arrive tagged with ?utm_source=chatgpt.com and are deduplicated against their untagged twins.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Gmail, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
