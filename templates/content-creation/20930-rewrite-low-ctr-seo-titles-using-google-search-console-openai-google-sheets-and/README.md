# 🎬 Rewrite low-CTR SEO titles using Google Search Console, OpenAI, Google Sheets, and WordPress

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow finds underperforming pages in Google Search Console, generates improved SEO titles and meta descriptions with OpenAI based on real query data, logs suggestions in Google Sheets for review, and can optionally write approved updates back to WordPress (Yoast or Rank Math).

## How it works
1. Runs weekly (or manually) to generate new suggestions, and runs hourly to process approved rows from Google Sheets.
2. Reads the existing “SEO Log” tab in Google Sheets to enforce a cooldown window and avoid re-suggesting recently updated URLs.
3. Queries the Google Search Console Search Analytics API for page-level performance, scores pages by missed clicks versus a position-based CTR benchmark, and selects the worst offenders.
4. Looks up matching WordPress posts/pages by slug and maps each candidate URL to a WordPress ID and content type for optional write-back.
5. For each candidate page, pulls its top queries from Google Search Console and fetches the live HTML to extract the current title, meta description, and H1.
6. Uses OpenAI Chat to produce a new SEO title, an alternative title, and a meta description (with a length check), then appends the suggestion to Google Sheets with status set to “pending”.
7. On hourly runs, reads “approved” rows from Google Sheets and either updates the Yoast/Rank Math meta fields via the WordPress REST API and marks them “applied”, or marks them “manual” if write-back is disabled or the page can’t be matched.

## Setup
1. Add Google OAuth2 credentials with the Search Console scope (https://www.googleapis.com/auth/webmasters.readonly) for the Google Search Console HTTP requests.
2. Add a Google Sheets OAuth connection, create a spreadsheet tab named “SEO Log” with the expected columns, and set the sheet ID and tab name in the config.
3. Add OpenAI credentials (or swap the chat model node) and confirm the model selection used for generating titles and descriptions.
4. If you want automatic updates, add WordPress API credentials (Application Password), set seo_plugin to “yoast” or “rank_math”, and ensure the relevant post meta keys are exposed in the WordPress REST API.
5. Update the config values for gsc_property, wp_base_url, language, and any filtering limits (lookback_days, min_impressions, max_position, ctr_ratio, max_per_run, cooldown_days) before enabling the schedule triggers.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
