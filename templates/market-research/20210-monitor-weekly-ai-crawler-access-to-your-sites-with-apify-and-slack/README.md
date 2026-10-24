# 📊 Monitor weekly AI crawler access to your sites with Apify and Slack

> ⚡ **3 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Monday to check whether AI crawlers can access a list of websites using the Apify AI Crawler Access Checker actor, and posts a single Slack alert only when access rules or signals change.

## How it works
1. Runs every Monday morning on a scheduled trigger.
2. Defines the list of websites to monitor and a monitor name used for week-to-week comparisons.
3. Runs the Apify actor tidytools/ai-crawler-access-checker to evaluate each site’s robots.txt, llms.txt, and page signals, returning only new or changed results.
4. Filters the results to keep only sites that are being monitored for the first time or whose crawler access status changed.
5. Builds one consolidated Slack message describing what changed per site (for example, allowed/blocked bots, policy changes, or llms.txt/noai signal changes).
6. Sends the message to the selected Slack channel.

## Setup
1. Add an Apify credential (API token or OAuth) and ensure the Apify node is allowed to run the tidytools/ai-crawler-access-checker actor.
2. Add a Slack credential and set the target channel (for example, #seo-alerts) where alerts should be posted.
3. Update the website domains/URLs list and the monitor name so Apify can persist a baseline and compare results across weekly runs.

## 🔗 Nodes Used

Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
