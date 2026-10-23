# 🔬 Find broken external links in WordPress posts and email a report with Gmail

> ⚡ **0 views** · 🔬 [Document Extraction & Analysis](../)

## Description

## Quick overview
This workflow scans recent published WordPress posts for external links, checks each link with HTTP HEAD requests, and compiles an HTML report of broken links or links needing manual review, optionally sending the report via Gmail on a weekly schedule or manual run.

## How it works
1. Runs manually or every Monday at 9am.
2. Fetches the latest published posts from the WordPress REST API using HTTP Basic Auth.
3. Extracts external (non-site) URLs from each post’s HTML content and limits the run to a maximum number of links.
4. Checks each extracted URL with batched HTTP HEAD requests using a configurable timeout.
5. Classifies each link as ok, broken, or review based on the HTTP status code or request errors.
6. Builds an HTML report summarizing totals and listing only broken or review links.
7. Sends the report via Gmail when issues are found and email reporting is enabled, otherwise outputs the report data without emailing.

## Setup
1. Create a WordPress Application Password and configure an HTTP Basic Auth credential in n8n for your WordPress user.
2. In the Config values, set your WordPress site URL, how many posts to scan, link limits, and the request timeout.
3. (Optional) Add a Gmail credential, set the recipient email address, and enable emailReport to true to send the report automatically.

## 🔗 Nodes Used

HTTP Request, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
