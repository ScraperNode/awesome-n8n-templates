# 📱 Post a daily digest of new Remotive remote jobs to Slack with Apify

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
This workflow runs every weekday morning to scrape new Remotive remote job listings via Apify, deduplicates jobs already shared in previous runs, and posts a single trimmed daily digest message to a selected Slack channel.

## How it works
1. Runs on a cron schedule every weekday at 08:00.
2. Sets the Remotive search term, optional category slug, and the maximum number of jobs to fetch.
3. Uses Apify (dami_studio/remotive-jobs-scraper actor) to retrieve matching job listings from Remotive.
4. Filters out non-result/diagnostic items by keeping only responses marked as OK.
5. Removes any jobs whose IDs have already been posted in previous executions.
6. Builds one Slack-formatted digest message (newest first) and trims it to the first 25 jobs to keep it readable.
7. Posts the digest message to the chosen Slack channel.

## Setup
1. Add an Apify credential (API token) and ensure the Apify actor call is enabled for your account.
2. Add a Slack OAuth2 credential and select the channel where the digest should be posted.
3. Update the search term, category, and maxItems values to match the roles you want to track.
4. Adjust the schedule cron expression if you want a different posting time or days of the week.

## Requirements
- An Apify account and API token. The scrape runs on the dami_studio/remotive-jobs-scraper actor.
- A Slack workspace where you can add an OAuth2 credential and post to a channel.

## Customization
- Change the search term and category in Search to run. Duplicate that node to track several roles at once.
- The digest is trimmed to 25 jobs so Slack does not cut the message off. Raise it if your channel tolerates longer posts.
- Weekdays at 08:00 is a default, not a constraint. Remotive posts through the day, so a second run after lunch catches more.

## 🔗 Nodes Used

Slack, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
