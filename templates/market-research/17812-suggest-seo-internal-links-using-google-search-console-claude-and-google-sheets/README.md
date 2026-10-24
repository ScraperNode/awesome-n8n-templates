# 📊 Suggest SEO internal links using Google Search Console, Claude, and Google Sheets

> ⚡ **56 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow pulls page-query data from Google Search Console, crawls URLs from your sitemap to map existing internal links and identify orphan pages, then uses Claude via OpenRouter to propose high-confidence internal-link opportunities and appends the suggestions to a Google Sheet.

## How it works
1. Runs manually when you click Execute.
2. Requests the last 90 days of page-and-query performance data from Google Search Console for the configured property.
3. Fetches and parses your sitemap XML, extracts page URLs, and limits the crawl to the configured maximum number of pages.
4. Crawls each page’s HTML and extracts internal links to build an internal link graph and flag orphan pages.
5. Sends the page list (including each page’s top Google Search queries and orphan status) to Claude (OpenRouter) to generate 3–10 internal-link suggestions with query-based anchor text.
6. Validates and deduplicates suggestions by removing invented URLs, enforcing confidence and per-page caps, and flagging links that already exist.
7. Appends each validated suggestion as a new row in Google Sheets for review and tracking.

## Setup
1. Connect Google Search Console OAuth credentials that have access to the specified Search Console property.
2. Add an OpenRouter API credential and ensure the selected Claude model is available in your account.
3. Connect Google Sheets OAuth credentials and select the target spreadsheet and sheet/tab for output.
4. Update the Config values for your site URL, sitemap URL, Search Console property URL-prefix, maxPages, minConfidence, and maxSuggestionsPerPage.

## Requirements
- Google service-account (or OAuth2) credential with Search Console access to the property (webmasters scope); enable the Search Console API
- OpenRouter credential (or another LLM provider)
- Google Sheets (OAuth2) credential + a spreadsheet to write to

## Customization
- Config node: site URL, sitemap URL, GSC property (URL-prefix), maxPages, minConfidence, maxSuggestionsPerPage
- Swap the model in the OpenRouter node (default anthropic/claude-sonnet-4.6)
- Change the trigger from Manual to Schedule for weekly runs
- Tune the prompt in Suggest Internal Links (e.g., favor anchor-text upgrades)

## Additional info
Contact:
Email: salmanmehboob1947@gmail.com 
Linkedin: https://www.linkedin.com/in/salman-mehboob-pro/

## 🔗 Nodes Used

Google Sheets, HTTP Request, Basic LLM Chain, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
