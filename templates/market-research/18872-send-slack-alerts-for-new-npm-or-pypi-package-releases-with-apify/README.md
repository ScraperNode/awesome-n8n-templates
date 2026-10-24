# 📊 Send Slack alerts for new npm or PyPI package releases with Apify

> ⚡ **0 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow checks a list of npm packages every 12 hours using Apify’s Package Registry Scraper and posts a Slack message only when it detects a new package version.

## How it works
1. Runs every 12 hours on a schedule.
2. Defines the package registry (npm) and the list of package names to monitor.
3. Uses Apify (dami_studio~package-registry-scraper actor) to fetch each package’s current version and metadata such as description, license, repository, URL, and downloads.
4. Filters out invalid lookups by keeping only results marked as successful.
5. Suppresses repeat alerts by deduplicating on package name plus version across workflow executions.
6. Posts a formatted release alert to a selected Slack channel for each newly detected version.

## Setup
1. Add an Apify API token credential to the Apify node and confirm the actor run settings (including the $1 max charge cap) fit your needs.
2. Add a Slack OAuth2 credential, select the target channel in the Slack node, and ensure the workflow has permission to post messages.
3. Update the package list (and optionally the registry and includeDownloads flag) in the “Packages to watch” step to match the dependencies you want to track.

## 🔗 Nodes Used

HTTP Request, Slack, Discord, Gmail, Notion, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
