# 🎬 Audit stale WordPress posts and email refresh digests with Gmail

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
This workflow runs monthly (or on demand) to find WordPress posts that haven’t been updated for a configured number of months, scores and ranks them by refresh priority, builds an HTML digest, and optionally emails the report via Gmail.

## How it works
1. Runs on the first day of every month at 09:00 (or starts manually).
2. Reads configuration values like site URL, staleness cutoff, scan limit, and email settings.
3. Calls the WordPress REST API to fetch published posts last modified before the cutoff date.
4. Strips HTML to count words, detects mentions of older years, and assigns a High/Medium/Low refresh priority based on age and year mentions.
5. Sorts posts by priority and age, then generates an HTML table digest and subject line summarizing the findings.
6. If stale posts exist and email sending is enabled, sends the HTML digest to the configured recipient using Gmail; otherwise it outputs a result indicating email was skipped.

## Setup
1. Create a WordPress Application Password and add an HTTP Basic Auth credential in n8n, then select it for the WordPress REST API request.
2. Update the Config values, including `siteUrl` (no trailing slash), `staleAfterMonths`, `postsToScan`, and `maxRowsInReport`.
3. Optional: add a Gmail credential, set `reportEmail`, and set `emailReport` to true to enable sending the digest email.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
