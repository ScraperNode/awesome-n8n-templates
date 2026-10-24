# 📊 Send weekly Google Search Console reports to Slack and Google Sheets with Claude Haiku

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to fetch Google Search Console performance for the last full week and the prior week, generates code-verified metrics and Claude observations, then posts a formatted report to Slack and stores weekly KPIs in Google Sheets.

## How it works
1. Runs every Monday morning (or manually) and loads reporting settings like the Search Console property, date range, and output language.
2. Calculates two comparable date windows and sends six Google Search Console Search Analytics API requests (totals, by query, and by page for each period).
3. Computes all metrics and deltas in code and compiles a numbered “facts” list for totals plus top/new/lost queries and pages.
4. Sends the facts list to Anthropic Claude to write 3–5 short observations that cite the fact IDs they rely on.
5. Validates Claude’s observations in code by checking referenced fact IDs, verifying that any numbers and quoted queries/pages appear in the cited facts, and then formats the final Slack report.
6. Appends or updates a weekly summary row in Google Sheets and posts the report text to a selected Slack channel.

## Setup
1. Create Google OAuth2 credentials with access to your Search Console property and ensure the Google Search Console API is enabled in the Google Cloud project.
2. Add Google credentials in n8n for the HTTP request to Search Console and for Google Sheets access.
3. Update the Config values (especially `site_url`, plus `days`, `lag_days`, `min_impressions`, `top_n`, and `output_language`) to match your reporting needs.
4. Paste your target Google Spreadsheet ID in the “Spreadsheet ID” step, run the “Run once: set up the sheet” branch to create the “GSC weekly” tab and header row, and select the same spreadsheet in the Google Sheets append/update step.
5. Add your Anthropic (Claude) credentials and select the Slack credential and target channel for posting the report.

## Requirements
- A Google account that can see the Search Console property
- A Google Cloud OAuth client, with the Google Search Console API enabled in the same project (otherwise the API answers 403 "has not been used in project ... or it is disabled")
- A Google OAuth2 API credential in n8n with the scope https://www.googleapis.com/auth/webmasters.readonly
- Anthropic API key (Claude Haiku 4.5 by default; one call per week)
- Google Sheets OAuth2 and a blank Google Sheet
- Slack app that is a member of the channel you choose

## Customization
- Config: site_url (sc-domain:example.com or https://www.example.com/), output_language (default English), days (7), lag_days (3), min_impressions, top_n
- Change the schedule in "Every Monday" (default: Monday 9:00)
- Add a filter (country, device, a folder of pages) to the request bodies in "Plan requests"
- Replace Slack with email

## Additional info
What the checks cannot catch: a passing check does not mean the observation is wise. In my first run, Claude wrote that the average position "dropped sharply from 3.9 to 33.1". The numbers were right, so the check passed, but the change came from one query shown once at position 207 on a site with 11 impressions that week. I added a rule to the prompt (with few impressions, do not present a change of the average position as a trend); in the second run Claude added that the change may come from a single query. Code cannot check that kind of judgement.

Search Console hides rare queries: in my test only 3 of 11 impressions had a known query. The report says this every week, so a sum of queries is never read as the whole. Data is about 3 days behind.

What I tested: my own site's real data (small numbers), two runs, plus 20 unit checks of the code with deliberately wrong observations (a number not in the facts, a computed sum, a real number from a fact it did not cite, a query that does not exist, an unknown fact id, garbage instead of JSON). Not tested on a large site.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, Anthropic

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
