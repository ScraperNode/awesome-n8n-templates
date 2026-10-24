# 📊 Monitor Amazon keyword rankings and alerts with Pangolinfo and email

> ⚡ **2 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs daily (or on demand) to check Amazon search results for a list of keywords via Pangolinfo, calculates best organic and Sponsored ranks for specific ASINs, and emails a Markdown report only when rankings or ad visibility fall outside configured thresholds.

## How it works
1. Runs on a daily schedule at 08:00 (or manually) to start a monitoring cycle.
2. Loads the monitoring settings, including keywords, tracked ASINs, Amazon marketplace/zipcode, rank thresholds, and alert email addresses.
3. Splits the keyword list into individual monitoring jobs and validates limits (for example, max 20 keywords per run).
4. Uses Pangolinfo’s Amazon Search API to retrieve current search results for each keyword in the selected marketplace and location.
5. Parses the results to find the tracked ASINs, separates organic versus Sponsored placements, and calculates the best (lowest) rank for each.
6. Aggregates all keyword checks into a single Markdown portfolio report and flags any items that are missing or exceed the organic/Sponsored rank thresholds.
7. Sends the report by email only when attention is required; otherwise it returns a “healthy” summary with the report content.

## Setup
1. Self-host n8n and install/enable the `n8n-nodes-pangolinfo` community node.
2. Create a Pangolinfo API credential in n8n and select it on the Pangolinfo node.
3. Configure the Monitoring Configuration values (keywords, tracked ASINs, site/marketplace, zipcode, rank thresholds, and alert from/to email addresses).
4. Set up an SMTP email account/credentials in n8n for the Send Email node so alerts can be delivered.
5. Optionally adjust the schedule trigger time to match when you want the daily checks to run.

## Requirements
- Pangolinfo API key, self-hosted n8n with the n8n-nodes-pangolinfo community node, and SMTP credentials for email alerts.

## Customization
- Change keywords, tracked ASINs, marketplace, zipcode, organic and Sponsored rank thresholds, schedule, or replace email with Slack, Teams, Google Sheets, Airtable, or a database.

## Additional info
Amazon Scraper API: https://www.pangolinfo.com/amazon-scraper-api/
API documentation: https://docs.pangolinfo.com/en-api-reference/amazonApi/amazonScrapeAPI
Community node and source: https://github.com/Pangolin-spg/n8n-nodes-pangolinfo

## 🔗 Nodes Used

Send Email, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
