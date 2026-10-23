# 📱 Send a daily RSS news digest email with Gmail

> ⚡ **81 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Automatically combine any number of RSS feeds into one daily HTML email digest with deduplication and a configurable time window.

## How it works
1. Runs daily on a cron schedule (default 8:00 AM).
2. Generates a list of RSS feed URLs and digest settings (recipient email, lookback window, and max article count).
3. Fetches the latest items from each RSS feed URL.
4. De-duplicates articles, keeps only items published within the configured lookback window, sorts by publish date, and limits the list to the maximum article count.
5. Stops if no articles remain after filtering to avoid sending an empty email.
6. Builds an HTML email with the selected articles and sends it to the configured recipient using Gmail.

## Setup
1. Add a Gmail OAuth2 credential and select it in the Gmail email-sending step.
2. Update the recipient email address and RSS feed URLs in the configuration code, and optionally adjust HOURS_BACK and MAX_ARTICLES.
3. Confirm or change the schedule cron expression to match your preferred send time, then activate the workflow.

## Requirements
- n8n Cloud or self-hosted n8n instance
- Gmail account with OAuth2 credentials configured in n8n

## Customization
- Add or remove RSS feed URLs in the Configure Feed Settings node
- Change HOURS_BACK and MAX_ARTICLES in the same node
- Adjust the daily schedule in the When 8AM Daily trigger
- Replace example feeds with your own blogs or news sources

## Additional info
If one RSS feed fails, the workflow continues with the remaining feeds. No email is sent when there are no new articles within the configured lookback window.

## 🔗 Nodes Used

RSS Read, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
