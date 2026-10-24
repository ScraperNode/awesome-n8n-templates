# 📊 Submit new sitemap URLs to IndexNow with Telegram alerts

> ⚡ **16 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily to fetch an XML sitemap, detect newly added URLs, submit them to the IndexNow API for faster indexing, and send a Telegram message listing the new pages.

## How it works
1. Runs every morning on a cron schedule.
2. Loads your configuration values (sitemap URL, optional URL filter, site host, IndexNow key details, and Telegram chat ID).
3. Downloads the XML sitemap via HTTP and extracts all URLs, optionally filtering them by a path substring (for example, "/blog").
4. Compares the extracted URLs with previously seen URLs stored in workflow static data and keeps only URLs that are new since the last active run.
5. Submits the new URL list to the IndexNow API and then sends a Telegram message with the detected URLs (or, on the first run, sends a baseline confirmation message without submitting anything).

## Setup
1. Generate an IndexNow key, host the key file at the root of your site, and set the correct site host, key, and key file URL in the workflow configuration.
2. Update the sitemap URL (and optionally the URL filter) in the configuration so the workflow reads the correct sitemap.
3. Add Telegram bot credentials, then set your target Telegram chat ID in the configuration so the workflow can send messages.

## Requirements
- A website with an XML sitemap
- An IndexNow key hosted at the root of your site
- A Telegram bot and chat ID

## Customization
- Set urlFilter to "/blog" to watch only blog posts, or leave it empty to watch every page
- Replace Telegram with Slack, Discord or email
- Change the schedule to run hourly on high-volume sites

## 🔗 Nodes Used

HTTP Request, Telegram, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
