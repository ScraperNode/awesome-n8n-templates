# 📊 Email a weekly Product Hunt leaderboard digest with Apify and Gmail

> ⚡ **18 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs every Friday, uses Apify to pull Product Hunt’s weekly leaderboard for selected topics, filters and ranks launches by votes, then builds and emails you an HTML digest via Gmail with the top results.

## How it works
1. Runs every Friday at 17:00 (5 PM) on a schedule.
2. Sets your configuration values, including Product Hunt topics, minimum vote threshold, and the destination email address.
3. Uses Apify (the dami_studio/producthunt-scraper actor) to fetch the weekly Product Hunt leaderboard for the configured topics.
4. Filters out launches that do not meet the minimum vote count and sorts the remaining launches by votes in descending order.
5. Compiles the top N launches into a single ranked HTML digest, or creates a “no launches” message if nothing passes the vote threshold.
6. Sends the digest to your configured address using Gmail.

## Setup
1. Add an Apify credential (API token) with access to run the dami_studio/producthunt-scraper actor.
2. Add a Gmail credential and ensure the account is allowed to send email from n8n.
3. Update the topics, minVotes, keep (top N), and digestEmail values to match what you want to track and where to send the digest.
4. (Optional) If you want to post to Slack, add a Slack credential, set the target channel, and connect the digest output to the Slack step.
5. (Optional) If you want an archive in Google Sheets, add Google Sheets credentials, select a spreadsheet and sheet, and connect the sorted launches to the Google Sheets append step.

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Schedule Trigger, Filter

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
