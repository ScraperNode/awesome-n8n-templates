# 📊 Score RSS opportunities to Google Sheets and send priority digests with Gmail

> ⚡ **23 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs manually or every 30 minutes to read one or more RSS feeds, score and deduplicate new opportunities, append them to Google Sheets, and email a Gmail digest only when items meet a priority threshold.

## How it works
1. Runs manually or on a 30-minute schedule.
2. Builds a list of RSS searches from your configured feed URLs, keyword lists, and priority threshold.
3. Processes each RSS feed sequentially, normalizing entries, skipping URLs seen in the last 90 days, and calculating a 0–100 score with keyword-based reasons.
4. Appends each newly detected opportunity to a specified Google Sheets tab as a review queue.
5. Compiles a digest of only the opportunities that meet or exceed the priority threshold.
6. Sends the digest through Gmail when at least one priority opportunity is found, then waits briefly and continues with the next feed.

## Setup
1. Add your RSS feed URLs and set your include/high-value/exclude keywords, priority threshold, Google Sheets tab name, and notification email in the configuration step.
2. Connect Google Sheets OAuth credentials and set the target spreadsheet (document URL/ID) used to append rows.
3. Create the target sheet tab with columns matching the workflow fields (for example: detected_at, source_search, title, url, published_at, score, score_reasons, categories, budget_label, status).
4. Connect Gmail OAuth credentials for sending notification emails and ensure the recipient address is correct.

## 🔗 Nodes Used

Google Sheets, RSS Read, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
