# 📊 Monitor competitor pricing page changes with Snapshot Site and Slack

> ⚡ **26 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — For competitive intelligence, [ScraperNode](https://scrapernode.com) can automate the data collection — [Yelp reviews](https://scrapernode.com/yelp/scrapers/reviews), [Glassdoor company data](https://scrapernode.com/glassdoor/scrapers/companies), and [Crunchbase profiles](https://scrapernode.com/crunchbase/scrapers/companies) all return structured JSON you can feed straight into this workflow.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily and uses Snapshot Site to compare a stored baseline screenshot against a live competitor pricing page, then posts change alerts or failure notifications to Slack.

## How it works
1. Runs every day at 7:00 AM (UTC) on a scheduled trigger.
2. Calls Snapshot Site to capture the live pricing page and compare it against a baseline screenshot using a mismatch threshold.
3. Checks whether the Snapshot Site response indicates an API-level error (for example, a malformed URL returned as `{error: true}`).
4. Sends an alert to a Slack channel if the compare call fails or returns an error message.
5. If the compare succeeds, evaluates the mismatch percentage to determine whether the pricing page changed.
6. Posts a Slack message with mismatch stats and links to the diff, baseline, and live capture when a change is detected, otherwise it ends without action.

## Setup
1. Add a Snapshot Site credential and set the baseline (`beforeUrl`/`beforeOptions`) and live target (`afterUrl`/`afterOptions`) URLs to the competitor pricing page images/URL.
2. Add a Slack credential and set the target channels for change notifications (for example, `#competitor-watch`) and failure alerts (for example, `#competitor-watch-alerts`).
3. Adjust the mismatch `threshold`, schedule time, and Slack message text to match your sensitivity and reporting needs.

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
