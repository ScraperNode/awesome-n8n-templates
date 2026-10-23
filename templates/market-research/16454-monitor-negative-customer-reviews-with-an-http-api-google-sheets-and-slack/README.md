# 📊 Monitor negative customer reviews with an HTTP API, Google Sheets and Slack

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow polls your review API every 6 hours, filters for reviews rated 3 stars or lower, and posts an alert to a Slack channel for each negative review.

## How it works
1. Runs every 6 hours on a schedule.
2. Fetches the latest reviews from a configured HTTP endpoint.
3. Filters the returned items to keep only reviews with a rating of 3 or below.
4. Checks whether any negative reviews were found and stops if none exist.
5. Posts each negative review to a selected Slack channel with the rating, author, and review text.

## Setup
1. Provide a reviews API endpoint (and any required authentication) in the HTTP Request node.
2. Connect Slack using an OAuth2 credential.
3. Select the target Slack channel and adjust the rating threshold in the filter logic if you want a stricter or looser definition of “negative”.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
