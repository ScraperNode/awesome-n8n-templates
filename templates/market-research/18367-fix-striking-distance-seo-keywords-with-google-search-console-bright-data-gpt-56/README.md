# 📊 Fix striking distance SEO keywords with Google Search Console, Bright Data, GPT-5.6 and Slack

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to pull striking-distance query/page pairs from Google Search Console, uses Bright Data to find and read higher-ranking rival pages, asks OpenAI (GPT-5.6) to identify content gaps, then logs recommendations to Google Sheets and posts a digest to Slack.

## How it works
1. Runs weekly on a schedule and loads configuration such as your Search Console property, position band, and Bright Data zones.
2. Fetches two 28-day Google Search Console Search Analytics reports (recent and previous) by query and page via the Search Console API.
3. Filters to query/page pairs in the configured position range with enough impressions, compares against the older window to calculate movement, and keeps only the top opportunities per page.
4. Uses Bright Data SERP API to search each query, collects a limited set of pages ranking above your domain, and uses Bright Data Web Unlocker to fetch your page and the rival pages as markdown.
5. Extracts heading outlines from the fetched pages and sends them to OpenAI (GPT-5.6) to return missing topics and one prioritized on-page action.
6. Appends one row per opportunity to a Google Sheets tab and posts a formatted summary of fixes to a Slack channel.

## Setup
1. Create a Google service account credential in n8n (Google API) and add the service account email as a user on your Google Search Console property with access.
2. Add Bright Data credentials for HTTP Header Auth and set up a SERP API zone and a Web Unlocker zone, then update the zone names and your domain/property values in the workflow settings.
3. Connect Google Sheets OAuth credentials and replace the target spreadsheet URL/ID and sheet name used to append results.
4. Connect Slack credentials and set the destination channel (for example, #seo).
5. Adjust min_impressions, best/worst position, max_pages, and rivals_per_page to match your SEO workflow and budget.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger, OpenAI Chat Model, Information Extractor

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
