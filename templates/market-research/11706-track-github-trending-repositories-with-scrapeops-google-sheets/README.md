# 📊 Track GitHub trending repositories with ScrapeOps & Google Sheets

> ⚡ **13 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

## Overview
This n8n template tracks **GitHub Trending repositories** (daily/weekly/monthly), parses the trending page into structured data (rank, repo name, stars, language, etc.), and stores results in **Google Sheets** with **automatic deduping**. It’s designed for teams who want a simple “trending feed” for engineering research, developer tooling discovery, and weekly reporting.

## Who is this for?
- Developers, PMs, DevRel, and tooling teams who want a lightweight trend radar
- Anyone building a curated list of fast-rising open source projects
- Teams who want Sheets-based tracking without manual copy/paste

## What problems it solves
- Automatically collects GitHub Trending data on a schedule
- Prevents duplicate rows using a stable `dedupe_key`
- Updates existing rows when values change (rank/stars/score)

## How it works
1. A schedule triggers the workflow.
2. Inputs define the trending window (`daily`, `weekly`, or `monthly`) and optional languages.
3. ScrapeOps fetches the GitHub Trending HTML reliably.
4. The workflow parses repositories and ranks from the HTML.
5. Cleaned rows are written to Google Sheets using **Append or Update Row** matching on `dedupe_key`.

## Setup steps (~5–10 minutes)
1) **ScrapeOps**
- Register & get an API key: [https://scrapeops.io/app/register/n8n](https://scrapeops.io/app/register/n8n)
- Read the n8n overview: [https://scrapeops.io/docs/n8n/overview/](https://scrapeops.io/docs/n8n/overview/)
- (Optional) Learn ScrapeOps Proxy API features: [https://scrapeops.io/docs/n8n/proxy-api/](https://scrapeops.io/docs/n8n/proxy-api/)

2) **Google Sheets**
- [Duplicate this sheet](https://docs.google.com/spreadsheets/d/1GhCbbPilZXMVDox0hQ0Ncqf5-g3AdFFy55Ld30gPD-E/edit?gid=0#gid=0)/create a Sheet and add a `trending_raw` tab.
- Add columns used by the workflow (e.g. captured_at, since, source_url, rank_on_page, full_name, repo_url, stars_total, forks_total, stars_in_period, score, dedupe_key).
- In the Google Sheets node, choose **Append or Update Row** and set **Column to match on = dedupe_key**.

3) **Customize**
- Change `since` to daily/weekly/monthly in the Inputs node.
- Add languages via `languages_csv` (example: `any,python,go,rust`).
- Adjust delay if needed.

## Pre-conditions
- ScrapeOps account + API key configured in n8n
- Google Sheets credentials connected in n8n
- A Sheet tab named `trending_raw` with matching columns

## Disclaimer
This template uses **ScrapeOps as a community node**. You are responsible for complying with GitHub’s Terms of Service, robots directives, and applicable laws in your jurisdiction. Scraping targets can change at any time; you may need to update wait times and parsing logic accordingly. Use responsibly for legitimate business purposes.

## 🔗 Nodes Used

Google Sheets, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
