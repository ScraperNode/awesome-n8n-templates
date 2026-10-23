# 🎬 Detect decaying WordPress posts and log GPT-4 refresh briefs with Search Console and Sheets

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs weekly (or manually) to detect WordPress pages with declining clicks in Google Search Console, generates evidence-based refresh briefs with OpenAI using page and query data plus the article content, and logs briefs and refresh measurement results to Google Sheets.

## How it works
1. Runs every Monday on a schedule or starts manually, then loads configuration values and reads the existing “Refresh Log” from Google Sheets.
2. Queries Google Search Console for page-level performance in the last 28 days versus the prior 28 days and flags pages whose clicks drop past the configured threshold while excluding URLs already in progress or within a cooldown.
3. Looks up flagged URLs in WordPress by slug (posts and pages) to capture the WordPress ID, content type, and last-modified date when available.
4. For each flagged URL, fetches query-level performance for both time windows from Google Search Console and compiles the top queries that lost clicks and the queries that are new or growing.
5. Loads the article content from the WordPress REST API when matched, otherwise downloads the live HTML, then extracts headings and plain text for context.
6. Uses OpenAI to generate a structured refresh brief (priority, diagnosis, actions, new sections, suggested title) and appends it to Google Sheets with status set to pending.
7. On each run, checks rows marked as refreshed in Google Sheets, stamps refreshed_at if missing, and once enough post-refresh data exists, pulls Google Search Console clicks around the refresh date and updates the row with clicks_before, clicks_after, refresh_result, and status measured.

## Setup
1. Create a Google OAuth2 credential with the Search Console scope (https://www.googleapis.com/auth/webmasters.readonly) and select it in the Google Search Console HTTP Request nodes.
2. Create a Google Sheets OAuth2 credential, then create a spreadsheet tab named “Refresh Log” with the header columns expected by the workflow and set the sheet ID in the configuration.
3. Create a WordPress Application Password and add WordPress API credentials for the WordPress REST API requests, then set wp_base_url to your site root URL (no trailing slash).
4. Add OpenAI credentials for the chat model used by the LLM step (or replace the model node with another provider).
5. Update the config values (gsc_property, compare_days, drop_threshold, min_prev_clicks, cooldown_days, max_per_run, max_article_chars, language) to match your site and desired sensitivity, then run the workflow manually to validate the sheet output.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
