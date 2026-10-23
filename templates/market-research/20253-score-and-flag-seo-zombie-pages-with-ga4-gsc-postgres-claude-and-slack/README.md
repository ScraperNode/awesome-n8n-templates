# 📊 Score and flag SEO zombie pages with GA4, GSC, Postgres, Claude, and Slack

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow crawls a site from its sitemap, enriches each URL with GA4, Google Search Console, backlink, and indexation signals, scores “zombie” pages, stores results in Postgres, and posts a summary report to Slack (with optional Anthropic Claude rationales for at-risk pages).

## How it works
1. Runs manually or on a weekly schedule and loads the site, sitemap, GA4/GSC identifiers, scoring thresholds, and reporting settings.
2. Fetches the sitemap, extracts and deduplicates URLs (optionally restricting to the same domain), and limits the crawl to the configured maximum pages.
3. Crawls each URL to extract page elements and links, computes content and technical flags (for example word count, thin content, noindex, and canonical mismatch), and stores crawl results plus internal link edges in Postgres.
4. Aggregates the internal link graph in Postgres to compute inbound internal link counts for every crawled page.
5. For each page, pulls performance signals from Google Analytics 4 (Analytics Data API) and Google Search Console (Search Analytics and URL Inspection), and fetches referring-domain metrics from your backlink provider API.
6. Combines crawl data and all external signals into a weighted 0–100 zombie score with a status (healthy/at_risk/zombie), optionally calls Anthropic Claude to generate a short rationale for non-healthy pages, and upserts the final records into Postgres.
7. Queries a roll-up summary (totals and top offenders) from Postgres and posts the results to the configured Slack channel.

## Setup
1. Create and configure a Postgres database and run the provided schema SQL to create the required tables (zombie_page_crawl, zombie_page_links, zombie_pages).
2. Add a Google OAuth2 credential with access to the GA4 property and Search Console site (analytics.readonly and webmasters.readonly scopes).
3. Add an HTTP Header Auth credential for your backlink provider and update the backlink endpoint and response-field parsing to match your provider’s API.
4. (Optional) Add an Anthropic API HTTP Header Auth credential (x-api-key) if you want AI-written rationales for at-risk/zombie pages.
5. Add a Slack OAuth credential and set the target Slack channel name in the workflow configuration.

## 🔗 Nodes Used

HTTP Request, Postgres, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
