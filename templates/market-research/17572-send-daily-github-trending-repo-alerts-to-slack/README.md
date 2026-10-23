# 📊 Send daily GitHub trending repo alerts to Slack

> ⚡ **6 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick Overview
This workflow runs daily, scrapes GitHub Trending for multiple programming languages, filters and ranks repositories by stars gained today, and posts a formatted summary of the top results to a Slack channel.

## How it works
1. Runs every 24 hours on a schedule.
2. Defines the target languages, minimum “stars today” threshold, time range (since), and how many repositories to report.
3. Fetches the GitHub Trending page for each language and extracts the HTML blocks for individual repositories.
4. Parses repository details (name, URL, language, stars today, total stars), filters out repos below the minimum threshold and excludes archived projects.
5. Sorts the remaining repositories by stars gained today, keeps the top N per language, and aggregates all results into a single list.
6. If any repositories are found, formats a Slack message with links and star counts and posts it to Slack; otherwise it exits without posting.

## Setup
1. Add a Slack API credential and select the Slack channel where the alert should be posted.
2. Review and adjust the configuration values (languages array, minStars, topN, and since) to match what you want to track.
3. Update the schedule interval if you want the workflow to run more or less frequently than once per day.

## 🔗 Nodes Used

HTTP Request, Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
