# 📊 Keep new sitemap pages indexed with Google Search Console, Bing, and IndexNow

> ⚡ **9 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to fetch your sitemap, deduplicate previously submitted URLs using an n8n Data Table, and submit new pages to Google Search Console, Bing Webmaster Tools, and IndexNow, then sends a Telegram digest with submission counts and status.

## How it works
1. Runs every day at 09:00 on a schedule.
2. Downloads your sitemap (including following sitemap index files one level deep) and parses the XML into a list of page URLs.
3. Checks each URL against an n8n Data Table and keeps only URLs that have not been submitted before.
4. Classifies each new URL into priority tiers (cornerstone/homepage, normal content, or low-value utility/archive) based on deterministic URL rules.
5. Upserts the URL details into the Data Table, batches URLs, and submits cornerstone/homepage URLs to Bing Webmaster Tools, IndexNow, and Google Search Console (sitemap resubmission).
6. Batches and submits normal content URLs to Bing Webmaster Tools and IndexNow while skipping low-priority URLs.
7. Compiles results from all branches and sends a single Telegram message summarizing what was submitted and the response status.

## Setup
1. Create an n8n Data Table (for example, “SEO Indexer - Submitted URLs”) with at least a text column for `url`, and set the Data Table ID and URL column ID in the Data Table nodes.
2. Replace placeholders for `YOUR_DOMAIN_ROOT`, `YOUR_SEARCH_CONSOLE_SITE`, `YOUR_BING_API_KEY`, `YOUR_INDEXNOW_KEY`, and `YOUR_TELEGRAM_CHAT_ID` in the HTTP Request and Telegram nodes.
3. Add Google API credentials for the Google Search Console HTTP request (with the `https://www.googleapis.com/auth/webmasters` scope) and ensure the account has access to the target Search Console property.
4. Host your IndexNow key file at the configured `keyLocation` URL so IndexNow can validate your domain.
5. Optionally tune the URL classification rules (keywords and path patterns) to match your site structure before activating the workflow.

## Requirements
- n8n instance with Data Tables enabled. Google Cloud service-account credential with Search Console property access and the webmasters scope. Bing Webmaster Tools API key (free tier: 10,000 URLs per month). IndexNow key file deployed at your site root. Telegram Bot token and chat ID for the digest.

## Customization
- Adjust the keyword lists in the URL priority classifier to match your site structure. Change the schedule interval in the trigger. Point the workflow at any sitemap URL, including sitemap index files. Tune the Bing batch size and IndexNow limits to your quota. Extend the digest with per-engine response details.

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
